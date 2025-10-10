---
title: File Parsing
description: ""
created: 2018-08-01
updated: 2025-07-11
tags:
  - binary-file
  - parsing
  - standard
---

[Python network packet dissection frameworks shootout: Scapy vs Construct vs Hachoir vs Kaitai Struct – Adventures in Python](https://pythonistac.wordpress.com/2017/03/09/python-network-packet-dissection-frameworks-shootout-scapy-vs-construct-vs-hachoir-vs-kaitai-struct/)

[wader/fq: jq for binary formats](https://github.com/wader/fq)

## Kaitai

[Kaitai Struct: declarative binary format parsing language](http://kaitai.io/)
[kaitai-io/awesome-kaitai: A curated list of Kaitai Struct tools and resources](https://github.com/kaitai-io/awesome-kaitai)

[Kaitai Struct: documentation](http://doc.kaitai.io/)
[Kaitai Struct User Guide](http://doc.kaitai.io/user_guide.html)
[Kaitai Struct: KSY reference](http://doc.kaitai.io/ksy_reference.html#ksy-file)

[Kaitai Struct: declarative binary format parsing language](http://kaitai.io/workshop/)

[kaitai-struct-compiler](http://kaitai.io/index.html#download)

```sh
bin/kaitai-struct-compiler -no-version-check
```

Root level keys:

- meta
- seq
- enums
- types

## Examples

[File Format Gallery for Kaitai Struct](http://formats.kaitai.io/)

[.zip file format format spec for Kaitai Struct](http://formats.kaitai.io/zip/index.html)
[.bmp file format format spec for Kaitai Struct](http://formats.kaitai.io/bmp/index.html)
[Microsoft Windows icon file format spec for Kaitai Struct](http://formats.kaitai.io/ico/)
[quicktime_mov format spec for Kaitai Struct](http://formats.kaitai.io/quicktime_mov/index.html)
[TrueType Font File format spec for Kaitai Struct](http://formats.kaitai.io/ttf/index.html)

[Digital Imaging and Communications in Medicine (DICOM) file format format spec for Kaitai Struct](http://formats.kaitai.io/dicom/index.html)
[kaitai-io/dicom.ksy: DICOM (Digital Imaging and Communications in Medicine) file format spec for Kaitai Struct](https://github.com/kaitai-io/dicom.ksy)

[MS-XSLX spec (pdf)](http://download.microsoft.com/download/D/3/3/D334A189-E51B-47FF-B0E8-C0479AFB0E3C/%5BMS-XLSX%5D.pdf)

### Point Cloud

[The PCD (Point Cloud Data) file format - Point Cloud Library (PCL)](http://pointclouds.org/documentation/tutorials/pcd_file_format.php)
[PLY (file format) - Wikiwand](<https://www.wikiwand.com/en/PLY_(file_format)>)
[Wavefront .obj file - Wikiwand](https://www.wikiwand.com/en/Wavefront_.obj_file)
[Point Cloud XYZ (POINTCLOUDXYZ) Reader/Writer](https://docs.safe.com/fme/html/FME_Desktop_Documentation/FME_ReadersWriters/pointcloudxyz/pointcloudxyz.htm)
[STL (file format) - Wikiwand](<https://www.wikiwand.com/en/STL_(file_format)>)

[glTF - Wikiwand](https://www.wikiwand.com/en/GlTF)
[glTF Overview - The Khronos Group Inc](https://www.khronos.org/gltf/)

[The Alliance for OpenUSD (AOUSD)](https://aousd.org/)
[USD Home — Universal Scene Description documentation](https://openusd.org/release/index.html)
[USD Tutorials — Universal Scene Description documentation](https://openusd.org/release/tut_usd_tutorials.html)
[Pixar Universal Scene Description USD | NVIDIA Developer](https://developer.nvidia.com/usd)
[Working with USD Python Libraries | NVIDIA Developer](https://developer.nvidia.com/usd/tutorials)
[USD Python API Notes | NVIDIA Developer](https://developer.nvidia.com/usd/apinotes)
[Pixar USD Python API · kiryha/Houdini Wiki · GitHub](https://github.com/kiryha/Houdini/wiki/Pixar-USD-Python-API)

[Apple、NVIDIA 等公司成立 Alliance for OpenUSD 推動 3D 內容開源標準 - 香港 unwire.hk](https://unwire.hk/2023/08/02/alliance-for-openusd/game-channel/)
[Did Pixar Just Change the Future of 3D Forever? - YouTube](https://www.youtube.com/watch?v=0zZkE4S06HE)
[The Most Valuable File Format You've Never Heard Of - YouTube](https://www.youtube.com/watch?v=_N--2xOXEN0)

### BIM

[File formats for BIM - Designing Buildings](https://www.designingbuildings.co.uk/wiki/File_formats_for_BIM)

RVT: Autodesk Revit, .rda, .rte
NWD: Autodesk Navisworks, .nwc, .nwf, .nwd
DWG: AutoCAD, .dxf, .dwg

OpenIFC: Industry Foundation Classes, .ifc, .ifcxml, .ifczip
BCF: BIM Collaboration Format, .bcfzip
COBie: Construction Operations Building information exchange, .xml

[OpenIFC Model Repository](https://openifcmodel.cs.auckland.ac.nz/)

[bimfag/intro-python-bim: Basic Course in Python for use with BIM](https://github.com/bimfag/intro-python-bim)

## PDF

[PDF - Wikiwand](https://www.wikiwand.com/en/PDF)
[PostScript - Wikiwand](https://www.wikiwand.com/en/PostScript)
[c++ - PDF specifications for coders: Adobe or ISO? - Stack Overflow](https://stackoverflow.com/questions/14111831/pdf-specifications-for-coders-adobe-or-iso)
[PDF File Format - What is a PDF file?](https://docs.fileformat.com/pdf/)
[PDF file format: Basic structure [updated 2020] - Infosec Resources](https://resources.infosecinstitute.com/topic/pdf-file-format-basic-structure/)
[ISO 32000 (PDF) – PDF Association](https://www.pdfa.org/resource/iso-32000-pdf/)
[PDF Specification Index – PDF Association](https://www.pdfa.org/resource/pdf-specification-index/)
[Glossary of PDF terms – PDF Association](https://www.pdfa.org/glossary-of-pdf-terms/)
[PDF 32000-1:2008](https://www.adobe.com/content/dam/acom/en/devnet/pdf/pdfs/PDF32000_2008.pdf) 1.7 2008
[PDF Reference, version 1.7](https://ghostscript.com/~robin/pdf_reference17.pdf) 1.7 2006
[PDF Reference, Third Edition](https://www.adobe.com/content/dam/acom/en/devnet/pdf/pdfs/pdf_reference_archives/PDFReference.pdf) 1.4 2001

[Best tool for inspecting PDF files? - Stack Overflow](https://stackoverflow.com/questions/3549541/best-tool-for-inspecting-pdf-files)
[Home | veraPDF](https://verapdf.org/home/)

[PDF Tools | Didier Stevens](https://blog.didierstevens.com/programs/pdf-tools/)
[Quickpost: About the Physical and Logical Structure of PDF Files | Didier Stevens](https://blog.didierstevens.com/2008/04/09/quickpost-about-the-physical-and-logical-structure-of-pdf-files/)

[QPDF: A Content-Preserving PDF Transformation System](http://qpdf.sourceforge.net/)

[pdfminer/pdfminer.six: Community maintained fork of pdfminer - we fathom PDF](https://github.com/pdfminer/pdfminer.six)

[dzzie/pdfstreamdumper: research tool for the analysis of malicious pdf documents. make sure to run the installer first to get all of the 3rd party dlls installed correctly.](https://github.com/dzzie/pdfstreamdumper) Windows App

---

## Python

[7.1. struct — Interpret bytes as packed binary data — Python documentation](https://docs.python.org/3/library/struct.html)

[Working with Binary Data in Python | DevDungeon](https://www.devdungeon.com/content/working-binary-data-python)

[4. int.from_bytes — Python documentation](https://docs.python.org/3/library/stdtypes.html#int.from_bytes)
[4. int.to_bytes — Python documentation](https://docs.python.org/3/library/stdtypes.html#int.to_bytes)

[7.1. struct — Interpret bytes as packed binary data — Python documentation](https://docs.python.org/3/library/struct.html)

[Construct — Construct documentation](https://construct.readthedocs.io/en/latest/)

[Welcome to Hachoir’s documentation! — Hachoir documentation](http://hachoir.readthedocs.io/en/latest/)

[Features — bitstring documentation](https://pythonhosted.org/bitstring/)

[Sepero/SearchBin: Search within binary files for a string, hex, or even another binary file](https://github.com/Sepero/SearchBin)

## JavaScript

[francisrstokes/construct-js: 🛠️A library for creating byte level data structures.](https://github.com/francisrstokes/construct-js)

SharedArrayBuffer vs Int8Array
