---
title: .NET Runtime
description: ""
created: 2023-04-18
tags:
  - c-sharp
  - c-sharp/runtime
  - dotnet/runtime
---

[.NET Core is the Future of .NET | .NET Blog](https://devblogs.microsoft.com/dotnet/net-core-is-the-future-of-net/) 2019, dotnet v5 dropped the Core moniker
[The future of .NET Standard | .NET Blog](https://devblogs.microsoft.com/dotnet/the-future-of-net-standard/) 2020
[What is .NET? What's C# and F#? What's the .NET Ecosystem? .NET Core Explained, what can .NET build? - YouTube](https://www.youtube.com/watch?v=bEfBfBQq7EE)

[Install .NET on Windows - .NET | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/core/install/windows?tabs=net70)
[dotnet-install scripts - .NET CLI | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-install-script) install SDK/runtime in command line

[Mono (software) - Wikiwand](<https://www.wikiwand.com/en/Mono_(software)>)
[Home | Mono](https://www.mono-project.com/) obsoleted by .NET 5?

[Open .NET](https://github.com/open-dotnet)

[.NET documentation | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/standard/)
[.NET Standard | Common APIs across all .NET implementations](https://dotnet.microsoft.com/platform/dotnet-standard#versions) "decoder ring" for .NET Standard support
[.NET architectural components | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/standard/components)
[.NET Core documentation | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/core/) 1.0 released in 2016-06; 1.0 released in 2017-08; 3.0 released in 2019-09; 5.0 released in 2020-11
[.NET Framework documentation | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/framework/) obsolete; 4.8 is the last release
CoreCLR is the just-in-time (JIT) compiler, CoreRT is the ahead-of-time (AOT) compiler.

[Introducing the .NET Upgrade Assistant Preview | .NET Blog](https://devblogs.microsoft.com/dotnet/introducing-the-net-upgrade-assistant-preview/)

[dotnet/runtime: .NET is a cross-platform runtime for cloud, IoT, and desktop apps.](https://github.com/dotnet/runtime)
[.NET Core - .NET Goes Cross-Platform with .NET Core | Microsoft Docs](https://docs.microsoft.com/en-us/archive/msdn-magazine/2016/april/net-core-net-goes-cross-platform-with-net-core) 2016
[.NET Samples by Microsoft | Docker Hub](https://hub.docker.com/_/microsoft-dotnet-samples)
[Staying safe with .NET containers | .NET Blog](https://devblogs.microsoft.com/dotnet/staying-safe-with-dotnet-containers/)

[Introducing Microsoft .NET 6 | InfoWorld](https://www.infoworld.com/article/3608951/introducing-microsoft-net-6.html)
[Announcing .NET 6 Preview 1 | .NET Blog](https://devblogs.microsoft.com/dotnet/announcing-net-6-preview-1/)

[.NET 5 Networking Improvements | .NET Blog](https://devblogs.microsoft.com/dotnet/net-5-new-networking-improvements/)
[Here's a One-Stop Shop for .NET 5 Improvements -- Visual Studio Magazine](https://visualstudiomagazine.com/articles/2021/01/15/net-5-improvements.aspx?m=1)
[Introducing .NET 5 | .NET Blog](https://devblogs.microsoft.com/dotnet/introducing-net-5/) Drops the "Core" moniker

[.NET Core 3 and Support for Windows Desktop Applications | .NET Blog](https://devblogs.microsoft.com/dotnet/net-core-3-and-support-for-windows-desktop-applications/)
[What’s New in .NET Core 3.0? | DotNetCurry](https://www.dotnetcurry.com/dotnetcore/1513/whats-new-features-dotnetcore-3)
[.NET Standard 2.0 and XAML Standard | DotNetCurry](https://www.dotnetcurry.com/dotnet/1377/dotnet-standard-2-xaml-standard)
.NET Core 3.0 and .NET Framework 4.8 supports WinForms, WPF and Entity Framework 6, Windows 10 (WinRT) API, XAML Islands.
[Performance Improvements in .NET Core 2.1 | .NET Blog](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-core-2-1/)
[Performance Improvements in .NET Core | .NET Blog](https://devblogs.microsoft.com/dotnet/performance-improvements-in-net-core/)

[Differences between .NET Framework and .NET Core - WPF | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/desktop-wpf/migration/differences-from-net-framework)
[Difference Between .NET Core 1.0 | Core 2.0 | Core 3.0 | .NET Framework 4](https://www.amarinfotech.com/difference-between-net-core-2-0-vs-net-framework.html)
[Difference Between .NET and .NET Core](https://www.c-sharpcorner.com/article/difference-between-net-framework-and-net-core/)
[What’s New in .NET Core 3.0? | DotNetCurry](https://www.dotnetcurry.com/dotnetcore/1513/whats-new-features-dotnetcore-3)
[.NET Core and .NET Standard: What Is the Difference?](https://www.infoq.com/news/2017/10/dotnet-core-standard-difference/?itm_source=infoq&itm_medium=popular_content_link&itm_campaign=popularContent_news_clk)

[Porting to .NET Core | .NET Blog](https://devblogs.microsoft.com/dotnet/porting-to-net-core/) more technical differences between .NET Framework and .NET Core
System libraries in .NET Core are managed as separate packages in NuGet that can be updated independently, while .NET Framework bundles a fixed version
.NET Core breaks reflection API

[Porting Assistant for .NET - Amazon Web Services](https://aws.amazon.com/porting-assistant-dotnet/) [GitHub](https://github.com/aws/porting-assistant-dotnet-ui)

## .NET Standard

[.NET Standard | Common APIs across all .NET implementations](https://dotnet.microsoft.com/platform/dotnet-standard)
[.NET Standard | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/standard/net-standard) ECMA standard with many implementations (.NET Core, Mono)
[.NET Standard - Simplifying Cross Platform Development | DotNetCurry](https://www.dotnetcurry.com/dotnet/1317/dotnet-standard-cross-platform-development)
[.NET Standard 2.0 and XAML Standard | DotNetCurry](https://www.dotnetcurry.com/dotnet/1377/dotnet-standard-2-xaml-standard)

## Project Reunion

[microsoft/ProjectReunion: Project Reunion empowers all Windows apps (not just UWP/MISX) with modern Windows UI, APIs, and platform features, including back-compat support, shipped via NuGet.](https://github.com/microsoft/ProjectReunion)

[NuGet Gallery | Microsoft.Windows.CsWinRT 1.1.0](https://www.nuget.org/packages/Microsoft.Windows.CsWinRT/)
[microsoft/CsWinRT: C# language projection for the Windows Runtime](https://github.com/microsoft/CsWinRT/)
[Announcing C#/WinRT Version 1.0 with the .NET 5 GA Release - Windows Developer Blog](https://blogs.windows.com/windowsdeveloper/2020/11/10/announcing-c-winrt-version-1-0-with-the-net-5-ga-release/)

## bflat

[bflat - C# as you know it but with Go-inspired tooling (small, selfcontained, and native executables)](https://flattened.net/) C# AOT compiler
[What if C# were like Go? Open source bflat has 'Go-inspired tooling', now targets bare metal • DEVCLASS](https://devclass.com/2023/01/03/what-if-c-were-like-go-open-source-bflat-has-go-inspired-tooling-now-targets-bare-metal/)

## Silverlight

[OpenSilver](https://www.opensilver.net/)

## Internals

[The Book of the Runtime - The internals of the .NET Runtime that you won't find in the documentation - Scott Hanselman](https://www.hanselman.com/blog/TheBookOfTheRuntimeTheInternalsOfTheNETRuntimeThatYouWontFindInTheDocumentation.aspx)
[runtime/README.md at master · dotnet/runtime](https://github.com/dotnet/runtime/blob/master/docs/design/coreclr/botr/README.md)
[Kim Hamilton | Microsoft Docs](https://docs.microsoft.com/en-us/archive/blogs/kimhamil/)

[.NET Compiler Platform (a.k.a Roslyn) - An Overview | DotNetCurry](https://www.dotnetcurry.com/csharp/1258/dotnet-platform-compiler-roslyn-overview) language service

[An Introduction to C# Generics | Microsoft Docs](<https://docs.microsoft.com/en-us/previous-versions/ms379564(v=vs.80)>) 2005
[The Magical Methods in C# · Cezary Piątek Blog](https://cezarypiatek.github.io/post/methods-with-special-signature/)

[Loop alignment in .NET 6 | .NET Blog](https://devblogs.microsoft.com/dotnet/loop-alignment-in-net-6/)

[深入了解 WPF Dispatcher 的工作原理（Invoke/InvokeAsync 部分） - walterlv](https://blog.walterlv.com/post/dotnet/2017/09/26/dispatcher-invoke-async.html)
[深入了解 WPF Dispatcher 的工作原理（PushFrame 部分） - walterlv](https://blog.walterlv.com/post/dotnet/2017/09/26/dispatcher-push-frame.html)

## Target

[Multi-targeting for NuGet Packages | Microsoft Docs](https://docs.microsoft.com/en-us/nuget/create-packages/supporting-multiple-target-frameworks)
[Select which .NET version to use - .NET | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/core/versions/selection)
[.net - What does the Visual Studio "Any CPU" target mean? - Stack Overflow](https://stackoverflow.com/questions/516730/what-does-the-visual-studio-any-cpu-target-mean)
[.net - C# compiling for 32/64 bit, or for any cpu? - Stack Overflow](https://stackoverflow.com/questions/5229768/c-sharp-compiling-for-32-64-bit-or-for-any-cpu)

## .NET Native

[Compiling Apps with .NET Native | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/framework/net-native/)
[Getting Started with .NET Native | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/framework/net-native/getting-started-with-net-native)
[Inside .NET Native | Going Deep | Channel 9](https://channel9.msdn.com/Shows/Going+Deep/Inside-NET-Native)

Compiling .NET IL to machine code.
Libraries (including .NET Framework code) are statically linked and tree-shaked.

[dotnet/corert: This repo contains CoreRT, an experimental .NET Core runtime optimized for AOT (ahead of time compilation) scenarios, with the accompanying compiler toolchain.](https://github.com/dotnet/corert)
[corert/intro-to-corert.md at master · dotnet/corert](https://github.com/dotnet/corert/blob/master/Documentation/intro-to-corert.md)
[CoreRT - A .NET Runtime for AOT · Performance is a Feature!](https://mattwarren.org/2018/06/07/CoreRT-.NET-Runtime-for-AOT/)
[Fight the global warming: compile your C# apps ahead of time](https://medium.com/@MStrehovsky/fight-the-global-warming-compile-your-c-apps-ahead-of-time-9997e953645b)
[What I’ve learned about .NET Native – RendleLabs](https://www.rendlelabs.com/blog/what-ive-learned-about-dotnet-native/)
[clr - What's the difference between .NET CoreCLR, CoreRT, Roslyn and LLILC - Stack Overflow](https://stackoverflow.com/questions/34665026/whats-the-difference-between-net-coreclr-corert-roslyn-and-llilc)

For non-UWP:
[Optimize your .NET desktop apps with native images - MSIX | Microsoft Docs](https://docs.microsoft.com/en-us/windows/msix/desktop/desktop-to-uwp-r2r)
