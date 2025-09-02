# largerepo-tree.ps1

param (
    [Parameter(Mandatory=$true, HelpMessage="Repository tree URL (e.g., https://github.com/largeorg/monorepo/tree/main/frontend)")]
    [string]$TreeUrl
)

try {
    # Extract repository URL, branch, and sparse path from the tree URL
    if ($TreeUrl -match "^(https:\/\/github\.com\/[^\/]+\/[^\/]+)\/tree\/([^\/]+)\/(.+)$") {
        $repoUrl = $Matches[1] + ".git"
        $branch = $Matches[2]
        $sparsePath = $Matches[3]
    } else {
        throw "Invalid tree URL format. Expected: https://github.com/largeorg/monorepo/tree/main/frontend"
    }

    # Extract repository name from URL
    $repoName = Split-Path -Leaf $repoUrl
    if ($repoName -match "\.git$") {
        $repoName = $repoName.Substring(0, $repoName.Length - 4)
    }

    # Clone the repository with sparse checkout
    Write-Host "Cloning $repoUrl..."
    git clone --depth 1 --sparse -b $branch $repoUrl $repoName

    # Navigate to the repository directory
    Write-Host "Navigating to $repoName..."
    cd $repoName

    # Initialize sparse checkout
    Write-Host "Initializing sparse checkout..."
    git sparse-checkout init --cone

    # Set the sparse checkout path
    Write-Host "Setting sparse checkout path to $sparsePath..."
    git sparse-checkout set $sparsePath

    Write-Host "Sparse checkout of $sparsePath from $repoUrl (branch: $branch) completed successfully."

} catch {
    Write-Error "An error occurred: $($_.Exception.Message)"
    exit 1 # Indicate an error occurred
}

exit 0 # Indicate success
