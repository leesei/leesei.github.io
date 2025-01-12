---
title: AutoHotKey
description: The ultimate automation scripting language for Windows.
created: 2023-02-16
updated: 2025-01-09
tags:
  - app
  - automation
---

[AutoHotkey](https://www.autohotkey.com/)
[Quick Reference | AutoHotkey v2](https://www.autohotkey.com/docs/v2/)
[Changes from v1.1 | AutoHotkey v2](https://www.autohotkey.com/docs/v2/v2-changes.htm)
Use `#Requires AutoHotkey v2.0` to opt-in to v2.

[Hotkeys - Definition & Usage | AutoHotkey](https://www.autohotkey.com/docs/v2/Hotkeys.htm)
[List of Keys (Keyboard, Mouse and Controller) | AutoHotkey v2](https://www.autohotkey.com/docs/v2/KeyList.htm)
[Use AutoHotKey to Paste Text as Typing | Blog](https://ardalis.com/use-autohotkey-to-paste-text-as-typing/)
[How to Create Custom Keyboard Shortcuts with AutoHotkey](https://www.howtogeek.com/290501/how-to-create-custom-keyboard-shortcuts-with-autohotkey/)

[Joe - AUTOHOTKEY Guru - YouTube](https://www.youtube.com/@JoeGlines-Automator)

## Koan

### Startup

Add the `.ahk` (compiled or not) to (User's) Start up
`Win`+`R`, `shell:startup`

[How to Run AutoHotKey Script on Startup Windows 10 - StackHowTo](https://stackhowto.com/how-to-run-autohotkey-script-on-startup-windows-10/)

### Change Icon

[how to change ahk default icon - AutoHotkey Community](https://www.autohotkey.com/boards/viewtopic.php?t=78881)
[SetMainIcon - Script Compiler Directives | AutoHotkey](https://www.autohotkey.com/docs/v1/misc/Ahk2ExeDirectives.htm#SetMainIcon)
[AddResource - Script Compiler Directives | AutoHotkey](https://www.autohotkey.com/docs/v1/misc/Ahk2ExeDirectives.htm#AddResource)

[How to easily change your AutoHotkey Script Icon - YouTube](https://www.youtube.com/watch?v=gTY2sXZvGnk)

### Key mapping

#keymap

[Remapping Keys (Keyboard, Mouse and Joystick) | AutoHotkey](https://www.autohotkey.com/docs/v1/misc/Remap.htm)

```autohotkey
; map menu button to right click
AppsKey::RButton
```

Log keycodes

```autohotkey
#persistent
#InstallKeybdHook
#InstallMouseHook
KeyHistory 10 ; Display the history info in a window.

esc::exitapp ; press escape key to exit script
```

#### via Registry

> Registry can only map keycode to keycode. AHK can map key to mouse button/program.

[Download KeyTweak](https://www.bleepingcomputer.com/download/keytweak/)

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]

"Scancode Map"=hex:00,00,00,00,00,00,00,00,\
; ---------------------------------------------------------------------------
; BE SURE TO UPDATE THE COUNT BELOW TO REFLECT THE TOTAL NUMBER OF REMAPS + 1 (and write it as hexadecimal, not decimal)
; (1 extra for the null terminator):
; ---------------------------------------------------------------------------
04,00,00,00,\
; 01. Delete sent in place of Insert:
53,E0,52,E0,\
; 02. Home sent in place of Delete:
47,E0,53,E0,\
; 03. Insert sent in place of Home:
52,E0,47,E0,\
; 04. Null Terminator -- be sure to change the count at the top to reflect this number.
00,00,00,00
```

### Run program

[NirCmd - Windows command line tool](http://www.nirsoft.net/utils/nircmd.html)

```autohotkey
#^g:: Run explorer %USERPROFILE%\Dropbox  ; Win+Ctrl+G

; if using NoEnv
#NoEnv
EnvGet, home_dir, USERPROFILE
#^g:: Run, explorer %home_dir%\Downloads  ; Win+Ctrl+G
#o::Run, powershell -NonInteractive -WindowStyle Hidden %home_dir%\toggle_audio_device.ps1  ; Win+O
```

### UI Automation

[Easily automate programs with UI Automation - YouTube](https://www.youtube.com/playlist?list=PL3JprvrxlW27QIhDecJaprILS2TiDnQpM)

### Set audio output device

[frgnca/AudioDeviceCmdlets: AudioDeviceCmdlets is a suite of PowerShell Cmdlets to control audio devices on Windows](https://github.com/frgnca/AudioDeviceCmdlets)

```powershell
Get-AudioDevice -List
Set-AudioDevice <AudioDevice>
```

[windows 10 - Switching default audio device with a batch file - Super User](https://superuser.com/a/1624464)

```powershell
<#
Use
   Get-AudioDevice -List
to learn about available devices on your system.
Then set the two variables below with the start of their names.
#>
# these are used as prefix for names
$device1 = "3 - PHL 245C5"
$device2 = "Speakers"

$Audio = Get-AudioDevice -playback
Write-Output "Audio device was " $Audio.Name
Write-Output "Audio device now set to "

if ($Audio.Name.StartsWith($device1)) {
   (Get-AudioDevice -list | Where-Object Name -like ("$device2*") | Set-AudioDevice).Name
}  Else {
   (Get-AudioDevice -list | Where-Object Name -like ("$device1*") | Set-AudioDevice).Name
}
```

### Toast Notification

[TrayTip - Syntax & Usage | AutoHotkey](https://www.autohotkey.com/docs/v1/lib/TrayTip.htm)

[[GUI] Traytip/Toast Notification Windows 10/11 - Title remove of modify - AutoHotkey Community](https://www.autohotkey.com/boards/viewtopic.php?t=108920)
[ActiveScript.ahk/Example_JsRT_Toast.ahk at master · Lexikos/ActiveScript.ahk](https://github.com/Lexikos/ActiveScript.ahk/blob/master/Example_JsRT_Toast.ahk) better than `TrayTip`

### WinHole

[[Script] WinHole - AutoHotkey Community](https://www.autohotkey.com/boards/viewtopic.php?f=6&t=30622)
[窗口洞洞波 - 让鼠标穿透当前窗口，到桌面操作文件[Windows] - 小众软件](https://www.appinn.com/winhole/)
