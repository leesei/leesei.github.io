---
title: The Packaging Gradient
description: ""
created: 2023-04-01
tags:
  - anaconda
  - pex
  - pip
  - python
  - python/packaging
---

[Mahmoud Hashemi, "Python The Packaging Gradient", PyBay2017 - YouTube](https://www.youtube.com/watch?v=iLVNWfPWAC8)

## Packaging Library

- a module is a single file
  standalone module: module that only uses the standard library
- a package is a folder of `.py` (now `__init__.py` is optional)
- a distribution is an archive of zero or more packages
  usually built by `setuptools`
  e.g.: Pillow provides `PIL` package
- `sdist`: source only distribution
  great for pure Python packages
- `wheel`: `bdist` (binary distribution)
  includes dependencies as static libraries
- upload to PyPI
- that explains this command:
  `python setup.py sdist bdist_wheel upload`

## Packaging Application

> `pip` is meant for libraries and tools
> it is a developer tool and expects the developer to handle errors

- `PEX`: Python Executable
  runs system Python
- `anaconda`: whole ecosystem
  `conda install <application>`
  introduces the whole root file system
- freezers: includes embedded Python
  usually needs an installer
- Chef Omnibus (for enterprise), see GitLab
- Userspace Images: includes system libraries
  see AppImage
  requires Linux
- Containers: sandboxed images
  see Flatpak, Snappy, Docker
  requires Linux and container runtime
- Virtual machines: includes kernel
  requires hypervisor
- Ship the box: includes hardware and software
