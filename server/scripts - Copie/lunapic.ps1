param (
    [string]$InputFile
)

# Convertir la chaîne en objet FileInfo
$fileInfo = Get-Item $InputFile

# Paramètres
$outputName = $fileInfo.BaseName
$outputExtension = $fileInfo.Extension

# Conversion des formats vidéo non-MP4 en MP4
if ($outputExtension -in @(".flv", ".webm", ".avi", ".mov")) {
    Write-Output $outputName
    $ffmpegOutput = ffmpeg -i $InputFile -c:v libx264 -c:a aac -crf 18 -y "$outputName.mp4" 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Erreur ffmpeg (conversion en MP4) : $ffmpegOutput"
        return # Arrête le script en cas d'erreur
    }
    $InputFile = "$outputName.mp4"
    $outputExtension = ".mp4"
    # Mettre à jour l'objet FileInfo après la conversion en mp4
    $fileInfo = Get-Item $InputFile
    $outputName = $fileInfo.BaseName
}
if ($outputExtension -eq ".mp4") {
    # Convertir la vidéo en GIF 1 fps
	$ffmpegOutput = ffmpeg -i $InputFile -vf "fps=1,scale=600:-1" -vsync 0 "$outputName.gif" 2>&1
	if ($LASTEXITCODE -ne 0) {
		Write-Error "Erreur ffmpeg (MP4 vers GIF) : $ffmpegOutput"
		return
	}

	$outputExtension=".gif"
}


# Vérifier si le fichier est un GIF ou une vidéo
if ($outputExtension -eq ".gif") {
  $frames = @(2, 3, 4, 5, 6, 7)
  foreach ($frame in $frames) {
    $outputFile = "$outputName" + "_$frame.gif"
    $ffmpegOutput = ffmpeg -i "$outputName.gif" -vf "select='not(mod(n,$frame))'" -fps_mode passthrough $outputFile 2>&1
    if ($LASTEXITCODE -ne 0) {
      Write-Error "Erreur ffmpeg (GIF $frame) : $ffmpegOutput"
      return
    }
  }
}
