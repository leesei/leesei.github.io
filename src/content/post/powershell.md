---
title: PowerShell
description: ""
created: 2023-05-19
updated: 2025-01-09
tags:
  - comp/lang
  - powershell
---

[PowerShell Documentation - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/)
[What is PowerShell? - PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7)
[Differences between Windows PowerShell 5.1 and PowerShell 7.x - PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/scripting/whats-new/differences-from-windows-powershell)

[Introduction - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/00-introduction)
[Windows PowerShell Lets You Automate Anything on Your PC: Here's How to Start](https://www.makeuseof.com/windows-powershell-automation-how-to-start/)

[PoshCode/poshcode.github.io: github pages](https://github.com/PoshCode/poshcode.github.io)
[About this Guide - PowerShell Practice and Style](https://poshcode.gitbook.io/powershell-practice-and-style/introduction/readme)
[PoshCode/PowerShellPracticeAndStyle: The Unofficial PowerShell Best Practices and Style Guide](https://github.com/PoshCode/PowerShellPracticeAndStyle)

[Awesome Rank for janikvonrotz/awesome-powershell](https://awesomerank.github.io/lists/janikvonrotz/awesome-powershell.html)

```powershell
# allow scripts
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Use "`" to escape ";" (like "\" in Linux)

[PSWindowsupdate: Automated Windows Updates with PowerShell - Virtualization Howto](https://www.virtualizationhowto.com/2023/06/pswindowsupdate-automated-windows-updates-with-powershell/)

[How To Use PS2EXE to Turn PowerShell Scripts Into EXE Files | ITPro Today: IT News, How-Tos, Trends, Case Studies, Career Tips, More](https://www.itprotoday.com/powershell/how-use-ps2exe-convert-powershell-scripts-exe-files)
[Make Portable PowerShell EXEs Without External Dependencies (Tutorial)](https://www.itprotoday.com/powershell/how-to-make-powershell-exes-without-external-dependencies-tutorial-)

[PowerShell Screen Captures: Automate Screenshots in Your Scripts](https://www.itprotoday.com/powershell/powershell-screen-capture-how-to-automate-screenshots-in-your-scripts)

[Powershell Tutorial - Tutorialspoint](https://www.tutorialspoint.com/powershell/)
[Getting Started with PowerShell](https://www.robvanderwoude.com/powershellstart.php)
[Learning PowerShell: The basics | Computerworld](https://www.computerworld.com/article/2893515/getting-started-with-powershell-the-basics.html) PowerShell primers series
[PowerShell Tutorials - Stephanos Constantinou Blog](https://www.sconstantinou.com/category/powershell-tutorials/)
[PowerShell - Simple Talk](https://www.red-gate.com/simple-talk/sysadmin/powershell/)

[Initial page - PowerShell FAQ](https://poshcode.gitbook.io/powershell-faq/)
[PowerShell commands - PowerShell - SS64.com](https://ss64.com/ps/)
[PowerShell Core Commands - Stephanos Constantinou Blog](https://www.sconstantinou.com/powershell-core-commands/)
[The 16 Best PowerShell Commands (Cmdlets) You Must Know](https://www.makeuseof.com/windows-powershell-commands-cmdlets/)
[powershell Archives - ShellHacks](https://www.shellhacks.com/tag/powershell/)

[How To Use PowerShell’s Get-Date Cmdlet To Create Timestamps](https://www.itprotoday.com/powershell/how-use-powershell-s-get-date-cmdlet-create-timestamps)
[How To Create Custom PowerShell Cmdlets Using Modules (Video Tutorial)](https://www.itprotoday.com/powershell/how-create-your-own-powershell-cmdlets-video-tutorial)
[Top 10 PowerShell Tips and Tricks of 2024 (So Far)](https://www.itprotoday.com/powershell/top-10-powershell-tips-and-tricks-of-2024-so-far-)
[Make Portable PowerShell EXEs Without External Dependencies (Tutorial)](https://www.itprotoday.com/powershell/how-to-make-powershell-exes-without-external-dependencies-tutorial-)
[How I Built a PowerShell Multi-File Search Tool (With Source Code)](https://www.itprotoday.com/powershell/how-i-built-my-own-powershell-multi-file-search-tool)
[How To Build a Disk Space Pie Chart in PowerShell](https://www.itprotoday.com/powershell/how-to-build-a-disk-space-pie-chart-in-powershell)

[lextm/windowsterminal-shell: Install/uninstall scripts for Windows Terminal context menu items](https://github.com/lextm/windowsterminal-shell)
[Hosting PowerShell in a Python script - PowerShell Team](https://devblogs.microsoft.com/powershell/hosting-powershell-in-a-python-script/)

[How to Debug a PowerShell Script – CloudSavvy IT](https://www.cloudsavvyit.com/8712/how-to-debug-a-powershell-script/)

## Profile

[about Profiles - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-7.3)
[Understanding the Six PowerShell Profiles - Scripting Blog](https://devblogs.microsoft.com/scripting/understanding-the-six-powershell-profiles/)

`~\Documents\PowerShell\Microsoft.PowerShell_profile.ps1`
`~\OneDrive\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1` if OneDrive is setup

## Providers

[about_Providers - PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_providers?view=powershell-7)
[PowerShell Providers - Stephanos Constantinou Blog](https://www.sconstantinou.com/powershell-providers/)
[All about PowerShell providers and modules | Computerworld](https://www.computerworld.com/article/3154158/all-about-powershell-providers-and-modules.html)v

Alias - Windows PowerShell aliases `{Alias}`
Certificate - X509 certificates for digital signatures `{cert}`
Environment - Windows environment variables `{Env}`
FileSystem - File system drives, directories and files `{filesystem}`
Function - Windows PowerShell functions `{Function}`
Registry - Windows registry `{HKLM, HKCU}`
Variable - Windows PowerShell variables `{Variable}`

## Environment Variables

[Use PowerShell to Set Environment Variables](https://www.tachytelic.net/2019/03/powershell-environment-variables/)
[Windows Environment variables - PowerShell - SS64.com](https://ss64.com/ps/syntax-env.html)

```powershell
# show environment variables
Get-Childitem env: | sort name
ls env:
echo $Env:PATH
echo $Env:USERPROFILE

# using variable
ls $Env:USERPROFILE

# set variable
$env:Variable = 'value'
```

Persist Environment Variables

```powershell
# scoped to the User
[System.Environment]::SetEnvironmentVariable('Variable','value',[System.EnvironmentVariableTarget]::User)
# scoped to the Machine
[System.Environment]::SetEnvironmentVariable('Variable','value',[System.EnvironmentVariableTarget]::Machine)
```

## Unix command equivalents

[PowerShell equivalents for common Linux/bash commands - TheShellNut](https://mathieubuisson.github.io/powershell-linux-bash/)
[Get-Command (Microsoft.PowerShell.Core) - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/get-command?view=powershell-7.3) `gcm` shows all commands
[Windows: `Grep` Equivalent - CMD & PowerShell - ShellHacks](https://www.shellhacks.com/windows-grep-equivalent-cmd-powershell/)

| Unix                             | PowerShell                                      |
| -------------------------------- | ----------------------------------------------- |
| `pwd`                            | `Get-Location`                                  |
| `ls`                             | `Get-Childitem`/`ls`                            |
| `test -e`                        | `Test-Path`                                     |
| `which`/`type`                   | `Get-Command`                                   |
| `xdg-open`                       | `Start-Process`                                 |
| `grep`                           | `findstr`/`Select-String`                       |
| `find . -type f -iname <filter>` | `Get-ChildItem -Filter <filter> -Recurse -File` |
| `cp`                             | `Copy-Item`/`cp`                                |
| `rm`                             | `Remove-Item`/`rm`                              |
| `touch`                          | `New-Item`                                      |
| `cat`                            | `Get-Content`/`type`                            |
| `man`                            | `Get-Help`/`help`                               |

## `CmdletBinding`

[about_Functions_CmdletBindingAttribute - PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_cmdletbindingattribute?view=powershell-7)
[about_Functions_Advanced_Parameters - PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced_parameters?view=powershell-7)
[about_Functions_CmdletBindingAttribute - PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_cmdletbindingattribute?view=powershell-7)
[PowerShell advanced functions – The CmdletBinding and Parameter attribute – 4sysops](https://4sysops.com/archives/powershell-advanced-functions-the-cmdletbinding-and-parameter-attribute/#advanced-vs-simple-function)

```powershell
# parsing argument
[CmdletBinding()]
param()
```

## .NET in PowerShell

[Enhancing PowerShell With Microsoft .NET Framework](https://www.itprotoday.com/powershell/enhancing-powershell-with-net-classes-and-methods)
[Integrate Microsoft .NET Classes Into PowerShell Scripts](https://www.itprotoday.com/powershell/how-to-integrate-net-classes-into-powershell-scripts)
[How To Use .NET Properties and Methods in PowerShell](https://www.itprotoday.com/powershell/how-to-use-net-properties-and-methods-in-powershell)

[.NET API browser | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/api/?view=net-8.0)

## UI in PowerShell

[How To Create an Interactive PowerShell Menu](https://www.itprotoday.com/powershell/how-to-create-an-interactive-powershell-menu)
[Intro to Microsoft Dialog Boxes in PowerShell](https://www.itprotoday.com/powershell/intro-to-microsoft-dialog-boxes-in-powershell)
[How I Built a PowerShell Multi-File Search Tool (With Source Code)](https://www.itprotoday.com/powershell/how-i-built-my-own-powershell-multi-file-search-tool)
[PowerShell Dialog Boxes: Using Button Click Actions and Menu Selections](https://www.itprotoday.com/powershell/powershell-dialog-boxes-using-button-click-actions-and-menu-selections)
[How To Create Responsive Dialog Boxes in PowerShell](https://www.itprotoday.com/powershell/how-to-create-responsive-dialog-boxes-in-powershell)
[PowerShell Screen Captures: Automate Screenshots in Your Scripts](https://www.itprotoday.com/powershell/powershell-screen-capture-how-to-automate-screenshots-in-your-scripts)
[How To Use PowerShell and WPF To Create Advanced GUIs](https://www.itprotoday.com/powershell/untitled)
[Generate Windows toast notifications with the PowerShell module BurntToast – 4sysops](https://4sysops.com/archives/generate-windows-toast-notifications-with-the-powershell-module-burnttoast/)

## Session Manager

Poor-man's Tmux

```powershell
# script to setup a tmux-like environment
# $workspace_root = $env:USERPROFILE\src\project
$workspace_root = C:\src\project

$commands = @"
  nt -d $workspace_root --title Project `;
  nt -d $workspace_root --title Project `;
  nt -d $env:APPDATA\ --title "App data"
"@

# echo "wt $command_arr"
Start-Process wt -ArgumentList $command_arr
```
