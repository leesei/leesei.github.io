---
title: vcpkg
description: Open source C/C++ dependency manager from Microsoft
created: 2023-05-19
updated: 2023-09-29
tags:
  - package-manager
  - vcpkg
---

[vcpkg - Open source C/C++ dependency manager from Microsoft](https://vcpkg.io/en/)
[vcpkg documentation | Microsoft Learn](https://learn.microsoft.com/en-us/vcpkg/)
[microsoft/vcpkg: C++ Library Manager for Windows, Linux, and MacOS](https://github.com/Microsoft/vcpkg/)

[Triplet files | Microsoft Learn](https://learn.microsoft.com/en-us/vcpkg/users/triplets) environment configs
[vcpkg Host Dependencies for Cross-Compilation | C++ Team Blog](https://devblogs.microsoft.com/cppblog/vcpkg-host-dependencies/)

```powershell
# Use 64 bit by default
[Environment]::SetEnvironmentVariable("VCPKG_DEFAULT_TRIPLET", "x64-windows", "Machine")  # persist
$Env:VCPKG_DEFAULT_TRIPLET="x64-windows"  # current shell

# remove all `x86-windows` packages
vcpkg list | % { $_.Split(" ") | Select-Object -first 1 } | Where-Object { $_ -like "*:x86-windows" } | ForEach-Object -Process { vcpkg remove --recurse $_ }
```

To integrate to CMake, add this line _before_ `PROJECT` in `cmakelist.txt`

```cmake
SET(CMAKE_TOOLCHAIN_FILE "C:/vcpkg/scripts/buildsystems/vcpkg.cmake")
```

[Managing dependencies in a C++ project with vcpkg | Declaration of VAR](https://decovar.dev/blog/2022/10/30/cpp-dependencies-with-vcpkg/)
[Vcpkg: A tool to build open source libraries on Windows](https://www.kitware.com//vcpkg-a-tool-to-build-open-source-libraries-on-windows/)
[Simple C++ project with CMAKE and VCPKG - YouTube](https://www.youtube.com/watch?v=4z2jmDr36Fc)

## Package Repo

[Browse public vcpkg packages](https://vcpkg.io/en/packages.html)

```powershell
vcpkg depend-info qtbase:x64-windows
```

[Point Cloud Library is available in Vcpkg – Summary?Blog](http://unanancyowen.com/en/pcl-vcpkg/)

## Binary Cache

[Binary Caching | Microsoft Learn](https://learn.microsoft.com/en-us/vcpkg/users/binarycaching) located in `%LOCALAPPDATA%\vcpkg\archives`
[Binary Caching not recognized by other PCs · Issue #27197 · microsoft/vcpkg](https://github.com/microsoft/vcpkg/issues/27197)

## Windows long path

[Package [qtwebengine] Build Failure · Issue #27927 · microsoft/vcpkg](https://github.com/microsoft/vcpkg/issues/27927)
[Sequence issue with --x-packages-root and --x-buildtrees-root · Issue #25016 · microsoft/vcpkg](https://github.com/microsoft/vcpkg/issues/25016)
[c++ - set vcpkg x-buildtrees-root option in manifest or in cmakepresets.json - Stack Overflow](https://stackoverflow.com/questions/74656830/set-vcpkg-x-buildtrees-root-option-in-manifest-or-in-cmakepresets-json)
