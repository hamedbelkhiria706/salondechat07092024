param (
    [string]$gifPath
)

# Configuration
$outputFolder = "outputgif"
$ffmpegPath = "ffmpeg"
$maxSegmentSizeMB = 1
$maxSegmentSizeBytes = $maxSegmentSizeMB * 1024 * 1024

# Créer le dossier de sortie s'il n'existe pas
if (-not (Test-Path -Path $outputFolder -PathType Container)) {
    New-Item -Path $outputFolder -ItemType Directory
}

# Obtenir la taille du fichier GIF
$fileInfo = Get-Item $gifPath
$fileSizeBytes = $fileInfo.Length

if ($fileSizeBytes -gt $maxSegmentSizeBytes) {
    # Étape 1: Extraire les frames du GIF
    Write-Host "Extracting frames from the GIF..."
    $frameFolder = Join-Path $outputFolder "frames"
    if (-not (Test-Path -Path $frameFolder -PathType Container)) {
        New-Item -Path $frameFolder -ItemType Directory
    }
    & $ffmpegPath -i "$gifPath" "$frameFolder\frame_%04d.png"

    # Étape 2: Récupérer la liste des frames extraites
    $frames = Get-ChildItem -Path $frameFolder -Filter "*.png" | Sort-Object Name
    $totalFrames = $frames.Count
    Write-Host "Extracted $totalFrames frames."

    # Calculer le nombre de frames par segment (estimation basée sur la taille)
    # C'est une approximation, la taille réelle des segments peut varier légèrement.
    $bytesPerFrameEstimate = $fileSizeBytes / $totalFrames
    $framesPerSegmentEstimate = [int]($maxSegmentSizeBytes / $bytesPerFrameEstimate)
    if ($framesPerSegmentEstimate -lt 1) {
        $framesPerSegmentEstimate = 1 # Assurer au moins une frame par segment
    }
    Write-Host "Estimating $framesPerSegmentEstimate frames per segment."

    $numSegments = [math]::Ceiling($totalFrames / $framesPerSegmentEstimate)
    Write-Host "Dividing the GIF into $numSegments segments..."

    # Étape 3: Grouper les frames en segments et créer les GIFs
    for ($i = 0; $i -lt $numSegments; $i++) {
        $startIndex = $i * $framesPerSegmentEstimate
        $endIndex = [math]::Min(($startIndex + $framesPerSegmentEstimate - 1), ($totalFrames - 1))
        $segmentFrames = $frames[$startIndex..$endIndex]

        if ($segmentFrames.Count -gt 0) {
            $outputFile = Join-Path $outputFolder "segment_$i.gif"
            $frameList = ($segmentFrames | ForEach-Object { $_.FullName }) -join "|" # Utiliser "|" pour concat demuxer

            Write-Host "Creating segment $i with frames:"
            foreach ($frame in $segmentFrames) {
                Write-Host "  $($frame.Name)"
            }

            # Utilisation du demuxer concat pour une création de GIF plus efficace à partir d'une liste de fichiers
            $concatFilePath = Join-Path $outputFolder "concat_list_$i.txt"
            $segmentFrames | ForEach-Object { "file '$($_.FullName)'" } | Out-File -Encoding UTF8 $concatFilePath

            & $ffmpegPath -f concat -safe 0 -i "$concatFilePath" -loop 0 -r 100 "$outputFile" 2>&1

            Write-Host "Segment $i created: $outputFile"
            Remove-Item $concatFilePath # Nettoyer le fichier temporaire
        } else {
            Write-Warning "No frames found for segment $i. Skipping."
        }
    }

    # Optionnel: Supprimer le dossier des frames après la création des segments
    # Remove-Item -Path $frameFolder -Recurse -Force
} else {
    Write-Host "Le GIF est déjà inférieur à $maxSegmentSizeMB. Aucun segment nécessaire."
}