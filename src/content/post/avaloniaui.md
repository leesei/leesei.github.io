---
title: Avalonia UI
description: ""
created: 2022-05-03
updated: 2024-02-19
tags:
  - app
  - avalonia
---

[Avalonia UI Framework](https://avaloniaui.net/)
[AvaloniaUI/Avalonia: A multi-platform .NET UI framework](https://github.com/AvaloniaUI/Avalonia)
[AvaloniaCommunity/awesome-avalonia: A collection of interesting libraries and tools for Avalonia project.](https://github.com/AvaloniaCommunity/awesome-avalonia)

[AvaloniaUI/avalonia-dotnet-templates: Avalonia Templates for `dotnet new`](https://github.com/AvaloniaUI/avalonia-dotnet-templates)

```sh
dotnet new --install Avalonia.Templates  # install templates
dotnet new --list avalonia
dotnet new avalonia.mvvm -o MyApp
```

[Avalonia First Impressions](https://www.nequalsonelifestyle.com/2019/05/13/avalonia-first-impressions/)
[Getting started with Avalonia UI | InfoWorld](https://www.infoworld.com/article/3650477/getting-started-with-avalonia-ui.html)
[A Cross-Platform GUI Theme for Desktop .NET Core Applications](https://medium.com/swlh/cross-platform-gui-for-dotnet-applications-bbd284709600)
[Multiplatform UI Coding with AvaloniaUI in Easy Samples. Part 1 - AvaloniaUI Building Blocks - CodeProject](https://www.codeproject.com/Articles/5308645/Multiplatform-UI-Coding-with-AvaloniaUI-in-Easy-Sa)

[Avalonia for beginners Series' Articles - DEV Community](https://dev.to/ingvarx/series/7763)

[Creating a cross platform desktop app in .NET Core (Part One)](https://medium.com/@nicolasdorier/creating-a-cross-platform-desktop-app-in-net-core-part-one-be29079bcc71) still have rough edges @2020-04
[Creating a cross platform desktop app in .NET Core: Distribution for Windows (Part Two)](https://medium.com/@nicolasdorier/creating-a-cross-platform-desktop-app-in-net-core-distributin-for-windows-part-two-948a9298f678)
[Creating a cross platform desktop app in .NET Core: Distribution for Mac (Part 3)](https://medium.com/@nicolasdorier/creating-a-cross-platform-desktop-app-in-net-core-distribution-for-mac-part-3-f01f42bee496)

[Multiplatform UI Coding with AvaloniaUI in Easy Samples. Part 1 - AvaloniaUI Building Blocks - CodeProject](https://www.codeproject.com/Articles/5308645/Multiplatform-UI-Coding-with-AvaloniaUI-in-Easy-Sa)
[Multiplatform Avalonia .NET Framework Programming Basic Concepts in Easy Samples - CodeProject](https://www.codeproject.com/Articles/5311995/Multiplatform-Avalonia-NET-Framework-Programming-B)
[Basics of XAML in Easy Samples for Multiplatform Avalonia .NET Framework - CodeProject](https://www.codeproject.com/Articles/5314369/Basics-of-XAML-in-Easy-Samples-for-Multiplatform-A)

[Nikita Tsukanov - AvaloniaUI - cross-platform XAML-oriented .NET UI framework - YouTube](https://www.youtube.com/watch?v=DLHhZJkSqWk)
[A Cross Platform .NET UI Framework - Hello World in Avalonia UI - YouTube](https://www.youtube.com/watch?v=rho26Ik30D4)
[Building Engaging Cross Platform Applications using Rider and Avalonia - YouTube](https://www.youtube.com/watch?v=kZCIporjJ70)

[Avalonia UI for .NET: Project Overview from Mike James - InfoQ](https://www.infoq.com/news/2023/06/avalonia-mike-james/)

## Comparison

[Comparison with Xamarin and projects with similar goals · Issue #587 · AvaloniaUI/Avalonia](https://github.com/AvaloniaUI/Avalonia/issues/587)
[Differences from Avalonia · Issue #17 · unoplatform/uno](https://github.com/unoplatform/uno/issues/17)

Recommend to use Events in ViewModel instead of Triggers in XAML.

## AXAML

[Introduction to XAML - Avalonia](https://docs.avaloniaui.net/guides/basics/introduction-to-xaml)
[Styles - Avalonia](https://docs.avaloniaui.net/docs/styling/styles) supports `Selector`

```xml
<Window xmlns="https://github.com/avaloniaui"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml">
    <Window.Styles>
        <Style Selector="TextBlock.h1">
            <Setter Property="FontSize" Value="24"/>
            <Setter Property="FontWeight" Value="Bold"/>
        </Style>
    </Window.Styles>

    <TextBlock Classes="h1">I'm a Heading!</TextBlock>
</Window>
```

## Controls

[Avalonia UI Framework - API](http://reference.avaloniaui.net/api/)
[Avalonia/samples at master · AvaloniaUI/Avalonia](https://github.com/AvaloniaUI/Avalonia/tree/master/samples)
[npolyak/NP.Avalonia.Visuals](https://github.com/npolyak/NP.Avalonia.Visuals)
[amwx/FluentAvalonia: Control library focused on fluent design and bringing more WinUI controls into Avalonia](https://github.com/amwx/FluentAvalonia)

XAML reports namespace error when registering `Click` attribute to handler.
I used `button.Click += ClickHandker` in code behind (after `InitializeComponent()` call).

### Custom Controls

[AvaloniaUI custom SkiaSharp rendering demo - YouTube](https://www.youtube.com/watch?v=G5_gl-C2j7c)

[How to create a custom rendering control ? · Issue #2176 · AvaloniaUI/Avalonia](https://github.com/AvaloniaUI/Avalonia/issues/2176) `ImmediateRenderer`, `new DrawingContext(RenderTargetBitmap bitmap)`

[How to render SKCanvas with DrawingContext? [Question] · Issue #2492 · AvaloniaUI/Avalonia](https://github.com/AvaloniaUI/Avalonia/issues/2492)
[AvaloniaUI custom draw operations using SkCanvas - YouTube](https://www.youtube.com/watch?v=Ey0YhhvFg-w)

[AvaloniaUI/Avalonia.GIF: GIF image renderer and player for Avalonia UI Framework](https://github.com/AvaloniaUI/Avalonia.GIF)
[wieslawsoltes/Draw2D: https://wieslawsoltes.github.io/Draw2D/](https://github.com/wieslawsoltes/Draw2D)

### Dialogs

> creating a MVVM service is too much over head, just call the service functions in code behind

[Using FileDialogs for MVVM · Discussion #5344 · AvaloniaUI/Avalonia](https://github.com/AvaloniaUI/Avalonia/discussions/5344) ViewLocator + async functions
[grokys/FileDialogMvvm: Example of showing a file dialog using ReactiveUI interactions](https://github.com/grokys/FileDialogMvvm) ReactiveUI's `Interaction`
[mysteryx93/HanumanInstitute.MvvmDialogs: Library simplifying the concept of opening dialogs from a view model when using MVVM](https://github.com/mysteryx93/HanumanInstitute.MvvmDialogs)
[OpenFileDialog, Avalonia.Controls C# (CSharp) Code Examples - HotExamples](https://csharp.hotexamples.com/examples/Avalonia.Controls/OpenFileDialog/-/php-openfiledialog-class-examples.html)
