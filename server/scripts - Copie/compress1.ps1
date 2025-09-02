$archiveName = "backup.7z"
$excludeFile = "$PSScriptRoot\exclude1.txt"

# Create an exclusion list if it doesn't exist
if (-Not (Test-Path $excludeFile)) {
    Set-Content $excludeFile "node_modules`ndist`n.git`nnode_modules.7z`n.angular`npublic`nassets`n*\assets"
}

# Run 7-Zip command
7z a $archiveName -x@"$excludeFile" .