---
title: Powershell
description: ""
created: 2023-05-19
tags:
  - comp.lang
  - powershell
---

[PowerShell Documentation - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/)
[What is PowerShell? - PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7)
[Differences between Windows PowerShell 5.1 and PowerShell 7.x - PowerShell | Microsoft Docs](https://docs.microsoft.com/en-us/powershell/scripting/whats-new/differences-from-windows-powershell)

[Introduction - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/00-introduction)

[Awesome Rank for janikvonrotz/awesome-powershell](https://awesomerank.github.io/lists/janikvonrotz/awesome-powershell.html)

```powershell
# allow scripts
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

"`" to escape ";" (like "\" in Linux)

```powershell
# show environment variables
ls env:
echo $Env:PATH
echo $Env:USERPROFILE

ls $Env:USERPROFILE
```

[Powershell Tutorial - Tutorialspoint](https://www.tutorialspoint.com/powershell/)
[Getting Started with PowerShell](https://www.robvanderwoude.com/powershellstart.php)
[Learning PowerShell: The basics | Computerworld](https://www.computerworld.com/article/2893515/getting-started-with-powershell-the-basics.html) PowerShell primers series
[PowerShell Tutorials - Stephanos Constantinou Blog](https://www.sconstantinou.com/category/powershell-tutorials/)
[PowerShell - Simple Talk](https://www.red-gate.com/simple-talk/sysadmin/powershell/)

[PowerShell commands - PowerShell - SS64.com](https://ss64.com/ps/)
[PowerShell Core Commands - Stephanos Constantinou Blog](https://www.sconstantinou.com/powershell-core-commands/)
[The 16 Best PowerShell Commands (Cmdlets) You Must Know](https://www.makeuseof.com/windows-powershell-commands-cmdlets/)

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

Get-Childitem env: | sort name

echo $env:USERPROFILE
$env:Variable = 'value'
```

Persist Environment Variables

```powershell
# scoped to the User
[System.Environment]::SetEnvironmentVariable('Variable','value',[System.EnvironmentVariableTarget]::User)
# scoped to the Machine
[System.Environment]::SetEnvironmentVariable('Variable','value',[System.EnvironmentVariableTarget]::Machine)
```

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