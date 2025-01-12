---
title: CMake
description: CMake is an extensible, open-source system that manages the build process in an operating system and in a compiler-independent manner.
created: 2023-05-31
updated: 2025-01-09
tags:
  - cmake
  - comp/lang
  - make
---

[CMake](http://www.cmake.org/)
[CMake Tutorial — CMake Documentation](https://cmake.org/cmake/help/latest/guide/tutorial/index.html)
[CMake Reference Documentation — CMake Documentation](https://cmake.org/cmake/help/latest/)
[FAQ · Wiki · CMake / Community · GitLab](https://gitlab.kitware.com/cmake/community/-/wikis/FAQ)
[Home · Wiki · CMake / Community · GitLab](https://gitlab.kitware.com/cmake/community/-/wikis/home)

[Webinars | CMake](https://cmake.org/webinars/)
[Introduction to CMake on Vimeo](https://vimeo.com/32212195)
[How to CMake Good - Recommended Order - YouTube](https://www.youtube.com/playlist?list=PLK6MXr8gasrGmIiSuVQXpfFuE1uPT615s)
[Akagi201/learning-cmake: learning cmake](https://github.com/Akagi201/learning-cmake)
[cmake_host_system_information — CMake 3.26.4 Documentation](https://cmake.org/cmake/help/latest/command/cmake_host_system_information.html)

```
  --debug-output               = Put cmake in a debug mode.
  --debug-find                 = Put cmake find in a debug mode.
  --debug-find-pkg=<pkg-name>[,...]
                               = Limit cmake debug-find to the
                                 comma-separated list of packages
  --debug-find-var=<var-name>[,...]
                               = Limit cmake debug-find to the
                                 comma-separated list of result variables
  --trace                      = Put cmake in trace mode.
  --trace-expand               = Put cmake in trace mode with variable
                                 expansion.
  --trace-format=<human|json-v1>
```

`cmake` and the Windows CMake GUI will prompt for config

```sh
make VERBOSE=1
```

[Cross-Platform Software Development Using CMake | Linux Journal](https://www.linuxjournal.com/article/6700)
[unbornchikken-cmake-js · GitHub](https://github.com/unbornchikken/cmake-js)
[Learning CMake: A beginner's guide · GitBook](https://www.gitbook.com/book/tuannguyen68/learning-cmake-a-beginner-s-guide/details)
[The Architecture of Open Source Applications: CMake](http://aosabook.org/en/cmake.html)
[An Introduction to CMake](https://www.slideshare.net/ICSinc/an-introduction-to-cmake)
[CMake and FIND PACKAGE - Wiki for iCub and Friends](http://wiki.icub.org/wiki/CMake_and_FIND_PACKAGE)

[c++ - Debug vs Release in CMake - Stack Overflow](https://stackoverflow.com/questions/7724569/debug-vs-release-in-cmake)

```sh
mkdir Release
cd Release
cmake -DCMAKE_BUILD_TYPE=Release ..
make

mkdir Debug
cd Debug
cmake -DCMAKE_BUILD_TYPE=Debug ..
make
```

## `CMakeLists.txt`

[Examples | CMake](https://cmake.org/examples)
[VariablesListsStrings · Wiki · CMake / Community · GitLab](https://gitlab.kitware.com/cmake/community/-/wikis/doc/cmake/VariablesListsStrings)

[cmake-variables(7) — CMake Documentation](https://cmake.org/cmake/help/latest/manual/cmake-variables.7.html)
[cmake-properties(7) — CMake Documentation](https://cmake.org/cmake/help/latest/manual/cmake-properties.7.html)

`project(HELLO)` => `${HELLO_SOURCE_DIR}` and `${HELLO_BINARY_DIR}` available

## Tips and Tricks

[Cmake does not generate 64bit project when setting x64-Debug/Release in CMakeSettings.json - Developer Community](https://developercommunity.visualstudio.com/t/cmake-does-not-generate-64bit-project-when-setting/297750)
