# Parameters (adjust as needed)
$SharedModuleName = "AppModule"
$SharedModulePath = "./src/app/app.module" # Corrected path
$WorkspacePath = "." # Replace with your workspace path

# Function to process a file
function Process-File {
    param([string]$FilePath)

    try {
        $Content = Get-Content -Path $FilePath -Raw

        # Calculate relative path
        $Directory = Split-Path -Path $FilePath -Parent
        $RelativePath = (Convert-Path -Relative -Path $SharedModulePath -BasePath $Directory).Replace('\','/')

        # Simple check if the module is already imported
        if ($Content -notmatch "import \{ $($SharedModuleName) \} from '$RelativePath';") {
            # Simple insertion of the import statement at the top
            $ImportStatement = "import { $($SharedModuleName) } from '$RelativePath';`n"
            $NewContent = $ImportStatement + $Content

            Set-Content -Path $FilePath -Value $NewContent -Encoding UTF8
            Write-Host "Imported $($SharedModuleName) into $FilePath"
        }
    } catch {
        Write-Error ("Error processing {0}: {1}" -f $FilePath, $_)
    }
}

# Function to process a directory recursively, excluding node_modules
function Process-Directory {
    param([string]$DirPath)

    Get-ChildItem -Path $DirPath -Recurse | ForEach-Object {
        if ($_.Extension -eq ".ts" -or $_.Extension -eq ".tsx") {
            # Exclude node_modules
            if ($_.FullName -notlike "*node_modules*") {
                Process-File -FilePath $_.FullName
            }
        }
    }
}

# Run the process
Process-Directory -DirPath $WorkspacePath

Write-Host "Auto-import completed."