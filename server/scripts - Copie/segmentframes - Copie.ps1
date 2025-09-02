param (
    [string]$InputGif,
	[int]$MaxSegmentSizeMB = 1 # Added parameter for segment size
)

# Function to execute FFmpeg commands
function Execute-FFmpeg {
    param (
        [string[]]$Arguments
    )

    $output = & ffmpeg @Arguments 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Error "FFmpeg error: $($output -join '`n')"
        return $false
    }
    return $output
}
# Function to get file size
function Get-FileSize {
    param (
        [string]$FilePath
    )

    if (Test-Path -Path $FilePath) {
        $file = Get-Item -Path $FilePath
        return $file.Length
    } else {
        Write-Error "File not found: $FilePath"
        return 0
    }
}


# Function to get GIF frame count (using your method)
function Get-GifFrameCount {
    param (
        [string]$GifPath
    )

    $ffmpegOutput = & ffmpeg -i $GifPath -f null /dev/null 2>&1 | Select-String -Pattern "frame=" | Select-Object -Last 1

    if ($ffmpegOutput) {
        $frameMatch = $ffmpegOutput.Line -match "frame=\s*(\d+)"
        if ($frameMatch) {
            return [int]$Matches[1]
        }
    }

    Write-Error "Could not determine frame count."
    return 0
}
# Check if segmenting is needed based on size
$fileSize = Get-FileSize -FilePath $InputGif
$frameCount = Get-GifFrameCount -GifPath $InputGif

Write-Host $FileSize
Write-Host $frameCount

# Check if segmenting is needed based on size
$fileSize = Get-FileSize -FilePath $InputGif
$frameCount = Get-GifFrameCount -GifPath $InputGif

if ($fileSize -gt ($MaxSegmentSizeMB * 1MB)) {
    # File is larger than max segment size, segment it
    Write-Host "File size is $($fileSize / 1MB) MB, segmenting into files of $($MaxSegmentSizeMB) MB."

    $segmentFrames = [math]::Ceiling(($frameCount * $MaxSegmentSizeMB * 1MB) / $fileSize)
	$segmentCount = [math]::Ceiling($frameCount / $segmentFrames)
	Write-Host $segmentFrames
	Write-Host $segmentCount
    for ($i = 0; $i -lt $segmentCount; $i++) {
        $start = $i * $segmentFrames + 1
        $end = [math]::Min(($i + 1) * $segmentFrames, $frameCount)

        $segmentOutputGif = "segment_$($i+1).gif"
        $ffmpegArguments = @(
            "-i", $InputGif,
            "-vf", "select='gte(n,$(($start)-1))*lte(n,$(($end)-1))',setpts=PTS-STARTPTS",
            "-loop", "0",
            $segmentOutputGif
        )
        Execute-FFmpeg -Arguments $ffmpegArguments
        Write-Host "Segment $($i+1) saved as $segmentOutputGif."
    }
} else {
    # File is within size limit, apply frame filtering
    Write-Host "File size is $($fileSize / 1MB) MB, applying frame filter."

    $ffmpegArguments = @(
        "-i", $InputGif,
        "-vf", "select='gte(n,$(($StartFrame)-1))*lte(n,$(($EndFrame)-1))',setpts=PTS-STARTPTS",
        "-loop", "0",
        $OutputGif
    )
    Execute-FFmpeg -Arguments $ffmpegArguments
    Write-Host "GIF filtered and saved as $OutputGif."
}
