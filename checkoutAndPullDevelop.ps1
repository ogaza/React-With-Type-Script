# $appPath = "C:\repos\dn\dn.vrx.mtp.clients.ui-part-apos\lib"
$appPath = "C:\repos\dn\dn.vrx.mtp.clients.ui-part-common\lib"
# $appPath = "C:\repos\dn\dn.vrx.mtp.clients.flow-handler\lib"
# $appPath = "C:\repos\dn\dn.vrx.mtp.clients.common\lib"

# $aposPath = "C:\repos\dn\dn.vrx.mtp.clients.ui-part-apos\lib"
# $uiCommonPath = "C:\repos\dn\dn.vrx.mtp.clients.ui-part-common\lib"
# $fhPath = "C:\repos\dn\dn.vrx.mtp.clients.flow-handler\lib"
# $commonPath = "C:\repos\dn\dn.vrx.mtp.clients.common\lib"

$developBranchName = "develop"
# $featureBranchName = "feature/VRPP-77132"

$date = Get-Date -Format "yyyy-MM-dd-HHmmss"
$stashName = "stash_" + $date
$isStashCreated = $false
# Write-Output $stashName

Write-Output "setting directory to: " $appPath
Set-Location $appPath
Write-Output "-------------------------------"

Write-Output "stashing changes"
$cmdOutput = git stash push -m $stashName
Write-Output "stash output:"
Write-Output $cmdOutput

if ($cmdOutput -like "*No local changes to save*") {
  $isStashCreated = $false
}
if ($cmdOutput -like "*Saved working directory and index*") {
  $isStashCreated = $true
}
if ($isStashCreated) {
  Write-Output "stash has been created"
}
else {
  Write-Output "no stash has been created"
}

Write-Output "-------------------------------"
Write-Output "switching branch to: " $developBranchName
git checkout --end-of-options $developBranchName

Write-Output "-------------------------------"
Write-Output "pulling changes"
git pull --progress -v --no-rebase -- "origin"

# Write-Output "switching branch to: " $featureBranchName
# git checkout --end-of-options $featureBranchName

if ($isStashCreated) {
  Write-Output "-------------------------------"
  Write-Output "popping stash"
  git stash pop
}

# Write-Output "setting directory to: " $uiCommonPath
# Set-Location $uiCommonPath
# Write-Output "setting directory to: " $fhPath
# Set-Location $fhPath
# Write-Output "setting directory to: " $commonPath
# Set-Location $commonPath

Set-Location "C:\repos\mine\React-With-Type-Script"