---
title: Portable Document Format (PDF)
description: ""
created: 2018-10-27
updated: 2023-07-08
tags:
  - business
  - desktop
---

[Types of PDF - Computerphile - YouTube](https://www.youtube.com/watch?v=K7oxZCgO1dY)

- PDF (FTG): full text and graphics (preferably in vector except pictures)
- PDF (I): embeds images
- PDF (I+HT): images + hidden text (OCR'ed)

[Convert document, image, video and audio files online](https://www.aconvert.com/)
[How to Merge PDF Files in Linux - It's FOSS](https://itsfoss.com/merge-pdf-linux/)

[不想花錢的進來！如何用免費工具擊潰 PDF 文件的重重防線！ - YouTube](https://www.youtube.com/watch?v=rngF7LeCdt4)
PDF 轉檔 <https://pdf.new>
PDF 壓縮 <https://compresspdf.new>
PDF 簽署 <https://sign.new>

## Viewers

[Free PDF Reader - Sumatra PDF](https://www.sumatrapdfreader.org/free-pdf-reader.html)

[Poppler](https://poppler.freedesktop.org/) PDF rendering library

[zathura - pwmt.org](https://pwmt.org/projects/zathura/)

[PDFObject: A JavaScript utility for embedding PDFs](https://pdfobject.com/) uses browser's native support

## GUI Editors

[The 8 Best PDF Editor Apps](https://zapier.com/blog/best-pdf-editor-apps/)
[11 Best Linux PDF Editors You Can Use in 2022](https://itsfoss.com/pdf-editors-linux/)
[Best free PDF editor 2022 | TechRadar](https://www.techradar.com/best/free-pdf-editor)

Page manipulation:
[Split and merge PDF files. Free and open source - PDFsam](https://pdfsam.org/)
[PDF Chain Project Page - Welcome](https://pdfchain.sourceforge.io/)
[PDF Mix Tool | scarpetta.eu](https://www.scarpetta.eu/pdfmixtool/)
[muriloventuroso/pdftricks: A simple, efficient application for small manipulations in PDF files using Ghostscript.](https://github.com/muriloventuroso/pdftricks)
[pdfarranger/pdfarranger: Small python-gtk application, which helps the user to merge or split PDF documents and rotate, crop and rearrange their pages using an interactive and intuitive graphical interface.](https://github.com/pdfarranger/pdfarranger)
[junrrein/pdfslicer: A simple application to extract, merge, rotate and reorder pages of PDF documents](https://github.com/junrrein/pdfslicer)

Annotation:
[Xournal++ - Xournal++](https://xournalpp.github.io/)
[Sejda helps with your PDF tasks](https://www.sejda.com/)
[PDFedit - pdf manipulating library, GUI, tools](http://pdfedit.cz/en/index.html)
[Okular - The Universal Document Viewer](https://okular.kde.org/) KDE
[Master PDF Editor for Linux. Download a free of Master PDF Editor for Linux.](https://code-industry.net/free-pdf-editor/) watermark if unregistered

## Toolkits

[11 of the Best Free Linux PDF Tools - LinuxLinks](https://www.linuxlinks.com/pdftools/)

[Ghostscript - Wikiwand](https://www.wikiwand.com/en/Ghostscript)
[pdftex - Why does PDFSIZEOPT not reduce file size much? - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/549501/why-does-pdfsizeopt-not-reduce-file-size-much) `gs` is better

[How to convert pdf to image on Linux command line - nixCraft](https://www.cyberciti.biz/faq/how-to-convert-pdf-to-image-on-linux-command-line/)

```sh
pdftoppm <input.pdf> <output> -jpeg
pdftoppm <input.pdf> <output> -jpeg
pdftoppm -f <start_page> -l end_page -jpeg
```

[diff-pdf](https://vslavik.github.io/diff-pdf/)
[Sejda SDK - a Java library to edit PDF files](http://sejda.org/)

[PDF processor api & cli | pdfcpu](http://pdfcpu.io/)
[pdfcpu/pdfcpu: A PDF processor written in Go.](https://github.com/pdfcpu/pdfcpu)

[Coherent PDF Command Line Tools and C/C++/Python/.NET/Java/JavaScript API Community Release](https://community.coherentpdf.com/) non-commercial use

### `PDFtk`

[PDFtk - The PDF Toolkit](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/)
[Manipulating PDFs with the PDF Toolkit | Linux.com | The source for Linux information](https://www.linux.com/learn/manipulating-pdfs-pdf-toolkit)

```sh
# merge PDF
pdftk first.pdf second.pdf cat output merged.pdf
# extract pages
pdftk input.pdf cat 1 5-7 output extract.pdf
```

### `QPDF`

[QPDF: A Content-Preserving PDF Transformation System](http://qpdf.sourceforge.net/)
[How to view and edit the code of a PDF file - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/17220/how-to-view-and-edit-the-code-of-a-pdf-file)

```sh
# decompress PDF
qpdf --qdf --object-streams=disable orig.pdf expanded.pdf
# recompress PDF
qpdf expanded.pdf orig2.pdf
```

### `pdfsizeopt`

[pts/pdfsizeopt: PDF file size optimizer](https://github.com/pts/pdfsizeopt) Python 2, use Docker image

`pdfsizeopt --do-require-image-optimizers=no original.pdf optimized.pdf`

```sh
#!/bin/sh
exec docker run -v "$PWD:/workdir" -u "$(id -u):$(id -g)" --rm -it ptspts/pdfsizeopt pdfsizeopt "$@"
```

### `gs`

[theeko74/pdfc: Simple python script to compress PDF](https://github.com/theeko74/pdfc) Python 3, calls `gs`
[aklomp/shrinkpdf: Shrink PDF files with Ghostscript](https://github.com/aklomp/shrinkpdf)
[如何減小掃描的 PDF 文件的文件大小？ - Ubuntu 問答](https://ubuntuqa.com/zh-tw/article/12473.html)

```sh
# `-dPDFSETTINGS=` specifies the quality /resolution of the output PDF. You can choose from the following:
# - `-dPDFSETTINGS=/screen` (72 dpi images)
# - `-dPDFSETTINGS=/ebook` (150 dpi images)
# - `-dPDFSETTINGS=/printer` (300 dpi images)
# - `-dPDFSETTINGS=/prepress` (300 dpi images, color preserving)
# - `-dPDFSETTINGS=/default`
gs -q -dNOPAUSE -dBATCH -dSAFER \
  -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \
  -dEmbedAllFonts=true -dCompressFonts=true -dSubsetFonts=true \
  -dColorImageDownsampleType=/Bicubic -dColorImageResolution=144 \
  -dGrayImageDownsampleType=/Bicubic -dGrayImageResolution=144 \
  -dMonoImageDownsampleType=/Bicubic -dMonoImageResolution=144 \
  -sOutputFile=optimized.pdf original.pdf
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/printer \
  -dCompressFonts=true -dSubsetFonts=true -dNOPAUSE -dBATCH \
  -sOutputFile=optimized.pdf -f original.pdf
```

### JavaScript

[React-pdf](https://react-pdf.org/)
[diegomura/react-pdf: 📄 Create PDF files using React](https://github.com/diegomura/react-pdf)

[React-PDF](https://projects.wojtekmaj.pl/react-pdf/) PDF reader component (using `PDF.js`)
[mikecousins/react-pdf-js: A React component to wrap PDF.js](https://github.com/mikecousins/react-pdf-js)

[PDF.js](https://mozilla.github.io/pdf.js/) Mozilla's lib (1.8MB)
[mozilla/pdf.js: PDF Reader in JavaScript](https://github.com/mozilla/pdf.js)
[Rendering PDF Files in the Browser with PDF.js | PSPDFKit](https://pspdfkit.com/blog/2018/render-pdfs-in-the-browser-with-pdf-js/)
[How to Create a JavaScript PDF Viewer](https://code.tutsplus.com/tutorials/how-to-create-a-pdf-viewer-in-javascript--cms-32505)
[How to Build a PDF Viewer With React & PDF.js | PDFTron](https://www.pdftron.com/blog/react/how-to-build-a-react-pdf-viewer/)
[Pdf.js is not rendering the large size pdf files · Issue #10236 · mozilla/pdf.js](https://github.com/mozilla/pdf.js/issues/10236)
[Frequently Asked Questions · mozilla/pdf.js Wiki](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#optimize)
[Frequently Asked Questions · mozilla/pdf.js Wiki](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#range)
[PDF.js Rendering Quality the Complete Guide | PDFTron](https://www.pdftron.com/blog/pdf-js/guide-to-pdf-js-rendering/)
[How Reliable is PDF.js? See Reliability Benchmark | PDFTron](https://www.pdftron.com/blog/pdf-js/pdf-js-reliability-benchmark/)
[How to Evaluate PDF.js: A Complete PDF.js Guide | PDFTron](https://www.pdftron.com/blog/pdf-js/guide-to-evaluating-pdf-js/)

[javascript - Huge PDF takes time to render while scrolling using pdfviewer.js - Stack Overflow](https://stackoverflow.com/questions/43994761/huge-pdf-takes-time-to-render-while-scrolling-using-pdfviewer-js)

[PDFKit](http://pdfkit.org/)
[Generating PDF Files in Node.js with PDFKit](https://stackabuse.com/generating-pdf-files-in-node-js-with-pdfkit/)

[jsPDF - HTML5 PDF Generator | Parallax](https://parall.ax/products/jspdf)
[RelaxedJS/ReLaXed: Create PDF documents using web technologies](https://github.com/RelaxedJS/ReLaXed)

[Tea-School.js — Generate a PDF File From HTML And CSS in Node.js](https://itnext.io/tea-school-js-generate-a-pdf-file-from-html-and-css-in-node-js-32529f9b0f37)

### C

[Home of PDFsharp and MigraDoc Foundation - PDFsharp & MigraDoc](http://www.pdfsharp.net/MainPage.ashx)
[PDFsharp Overview - PDFsharp & MigraDoc](http://www.pdfsharp.net/PDFsharpOverview.ashx)
[MigraDoc Overview - PDFsharp & MigraDoc](http://www.pdfsharp.net/migradocoverview.ashx)
[Main Page - PDFsharp and MigraDoc Wiki](http://www.pdfsharp.net/wiki/MainPage.ashx)

### Python

[Create and Modify PDF Files in Python – Real Python](https://realpython.com/creating-modifying-pdf/)
[Chapter 13 – Working with PDF and Word Documents - Automate the Boring Stuff with Python](https://automatetheboringstuff.com/chapter13/)

[pikepdf Documentation](https://pikepdf.readthedocs.io/en/latest/) QPDF wrapper

[PyFPDF](https://pyfpdf.readthedocs.io/en/latest/index.html)
[reingart/pyfpdf: Simple PDF generation for Python (FPDF PHP port)](https://github.com/reingart/pyfpdf)
[Creating PDFs with PyFPDF and Python - The Mouse Vs. The Python](http://www.blog.pythonlibrary.org/2018/06/05/creating-pdfs-with-pyfpdf-and-python/)

[PyPDF2 Documentation](https://pythonhosted.org/PyPDF2/)
[How to Work With a PDF in Python – Real Python](https://realpython.com/pdf-python/)
[An Intro to PyPDF2 | The Mouse Vs. The Python](https://www.blog.pythonlibrary.org/2018/06/07/an-intro-to-pypdf2/)

[Free and Open source PDF generator library! | pdfme](https://pdfme.com/) define template and insert data

[PDFMiner](https://euske.github.io/pdfminer/)
[pmaupin/pdfrw: pdfrw is a pure Python library that reads and writes PDFs](https://github.com/pmaupin/pdfrw)

[stapler · PyPI](https://pypi.org/project/stapler/)
[hellerbarde/stapler: A small utility making use of the pypdf library to provide a (somewhat) lighter alternative to pdftk](https://github.com/hellerbarde/stapler)
