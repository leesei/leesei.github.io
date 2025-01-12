---
title: Image Tools
description: ""
created: 2016-08-04
updated: 2025-01-09
tags:
  - app
  - image-magick
  - primitive
  - shell-tool
---

[fogleman/primitive: Reproducing images with geometric primitives.](https://github.com/fogleman/primitive)
[Bigjpg - AI 人工智能图片无损放大 - 使用人工智能深度卷积神经网络(CNN)无损放大图片](https://bigjpg.com/)
[分享 3 款图片处理神器，渣图还原大法好，老厉害了！ - 知乎](https://zhuanlan.zhihu.com/p/61399728)
[LunaPic | Free Online Photo Editor | Transparent Background](https://www7.lunapic.com/editor/?action=transparent)
[picthing - manage your pictures better](https://pic.ping.gg/)

## ImageMagick

| Tool        | Description                                                                                                                                                                                                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `animate`   | animate an image sequence on any X server.                                                                                                                                                                                                                                                                              |
| `compare`   | mathematically and visually annotate the difference between an image and its reconstruction.                                                                                                                                                                                                                            |
| `composite` | overlap one image over another.                                                                                                                                                                                                                                                                                         |
| `conjure`   | interpret and execute scripts written in the Magick Scripting Language (MSL).                                                                                                                                                                                                                                           |
| `convert`   | convert between image formats as well as resize an image, blur, crop, despeckle, dither, draw on, flip, join, re-sample, and much more.                                                                                                                                                                                 |
| `display`   | display an image or image sequence on any X server.                                                                                                                                                                                                                                                                     |
| `identify`  | describe the format and characteristics of one or more image files.                                                                                                                                                                                                                                                     |
| `import`    | save any visible window on an X server and outputs it as an image file. You can capture a single window, the entire screen, or any rectangular portion of the screen.                                                                                                                                                   |
| `mogrify`   | resize an image, blur, crop, despeckle, dither, draw on, flip, join, re-sample, and much more. `mogrify` _overwrites_ the original image file, whereas, `convert` writes to a different image file.                                                                                                                     |
| `montage`   | create a composite image by combining several separate images. The images are tiled on the composite image optionally adorned with a border, frame, image name, and more.                                                                                                                                               |
| `stream`    | a lightweight tool to stream one or more pixel components of the image or portion of the image to your choice of storage formats. It writes the pixel components as they are read from the input image a row at a time making stream desirable when working with large images or when you require raw pixel components. |

> TODO: ImageMagick v7 deprecated `convert` command, use `magick` instead.
> The above standalone comamnds became `magick`'s sub-command
> And `magick` is more strict about command line syntax

[ImageMagick v7 Examples](http://www.imagemagick.org/Usage/)
[Command-line Tools @ ImageMagick](http://www.imagemagick.org/script/command-line-tools.php)
[ImageMagick – Command-line Processing](https://imagemagick.org/script/command-line-processing.php)
[ImageMagick: Convert, Edit, Or Compose Bitmap Images](http://www.imagemagick.org/script/index.php)

[ImageMagick 使用心得](http://www.charry.org/docs/linux/ImageMagick/ImageMagick.html)
[Turn many pictures into a movie | daniel.haxx.se](https://daniel.haxx.se/blog/2016/03/11/turn-many-pictures-into-a-movie/)

[The Definitive Guide to ImageMagick | Michael Still | Apress](http://www.apress.com/us/book/9781590595909) [author's site](http://www.stillhq.com/imagemagick/book/)

```sh
# crop lower part of image
convert input.jpg -crop 300x150+0+150 +repage image-cropped.jpg

# add shadow
convert screenshot.jpg \( +clone -background black -shadow 60×5+0+5 \) +swap -background white -layers merge +repage shadow.jpg

# add timestamp, http://www.imagemagick.org/script/escape.php
convert *.jpg -font Arial -pointsize 72 -gravity SouthEast -fill yellow -annotate +100+100 %[exif:datetime] output-%d.jpg

# convert to pdf
convert a.png b.png -compress jpeg -resize 1240x1753 \
                      -extent 1240x1753 -gravity center \
                      -unis PixelsPerInch -density 150x150 multipage.pdf

# convert sequence of images to GIF
convert -delay '1x20' *.png output.gif # 20FPS
convert -delay '2x1' *.png output.gif  # 2 sec each frame
```

### Watermark

[imagemagick - Apply watermark with text / image using GraphicsMagick - Stack Overflow](https://stackoverflow.com/questions/20997701/apply-watermark-with-text-image-using-graphicsmagick)

```sh
convert -background transparent -fill grey -font Calibri -size 140x80 -pointsize 14 -gravity southeast label:'copyright text' output.png
```

### Resizing Image

[Resizing or Scaling -- ImageMagick Examples](https://www.imagemagick.org/Usage/resize/)

```sh
# resizing image
convert -resize 300x300 image.jpg image-small.jpg
convert -resize 1080 {from_path} {to_path}  # fix weight only
convert -resize x1080 {from_path} {to_path}  # fix height only

# very low quality
convert -thumbnail {width} *.jpg

# resize to max width 1920
mogrify -resize 1920x\> input_folder/*.jpg -path output_folder/
```

[How can I scale all images in a folder to the same width? - Ask Ubuntu](https://askubuntu.com/questions/135477/how-can-i-scale-all-images-in-a-folder-to-the-same-width)

[Command-line Processing Geometry @ ImageMagick](http://www.imagemagick.org/script/command-line-processing.php#geometry)

[My favorite Linux commands for optimizing web images | Opensource.com](https://opensource.com/article/21/12/optimize-web-images-linux) with `mogrify`

### Image stitching

```sh
# horizontal
magick image.jpg ...  +append output.jpg
# vertical
magick image.jpg ...  -append output.jpg
```

### creating image

[Canvas Creation: Random -- IM v7 Examples](https://legacy.imagemagick.org/Usage/canvas/#random)
[Canvas Creation: Tile -- IM v7 Examples](https://legacy.imagemagick.org/Usage/canvas/#tile)

```sh
# solid color image
magick -size 100x100 canvas:khaki canvas_khaki.gif
magick -size 100x100 xc:wheat  canvas_wheat.gif

# patterned image
# use "tile" to take source from pipe and repeat
convert -size 30x54 pattern:hexagons \
          -fill tomato     -opaque white \
          -fill dodgerblue -draw 'color 10,10 floodfill' \
          -fill limegreen  -draw 'color 10,25 floodfill' \
          -roll +15+27 \
          -fill dodgerblue -draw 'color 10,10 floodfill' \
          -fill limegreen  -draw 'color 10,25 floodfill'   miff:- |\
magick -size 200x200 tile:- image.jpg

magick -size 500x500 pattern:checkerboard  miff:- |\
magick -size 5000x5000 tile:- image.jpg
```

```sh
# get quality of JPEG file
magick identify -verbose file.jpg | grep Quality
```

#### with text

```sh
magick -size 1280x720 xc:grey \
          -font roboto -pointsize 300 -draw "text 100,600 'userName' text 100,300 'userTitle'"  \
          image.jpg

magick -size 1280x720 xc:grey \
          \( -background none label:"A very much longer label" -trim -gravity center \) \
          -composite image.jpg

# add overlay text
magick image.jpg \
          \( -size 560x230 -background white -font roboto-mono label:"0001" -trim -gravity center -extent 560x230 \) \
          -gravity northwest -geometry +1100+15 -composite image1.jpg
```

[dynamic - ImageMagick best fit text within rectangle? - Stack Overflow](https://stackoverflow.com/questions/39764846/imagemagick-best-fit-text-within-rectangle)

### Colorspace

[Color Management @ ImageMagick](https://imagemagick.org/script/color-management.php)
[Converting anything to RGB correctly - ImageMagick](https://www.imagemagick.org/discourse-server/viewtopic.php?t=16464)

```sh
magick image.jpg \
 CMYK.jpg -profile /usr/share/color/icc/colord/sRGB.icc RGB.jpg
```

```sh
magick flower_original.jpeg -colorspace Gray greyscale_flower.jpeg
magick -list colorspace
magick flower_original.jpeg -negate flower_negative.jpeg
```

## Photon

[Photon: A WebAssembly Image Processing Library](https://silvia-odwyer.github.io/photon/)

## Node.js

[sharp - High performance Node.js image processing](https://sharp.pixelplumbing.com/) is VIPS's Node binding
[lovell/sharp: High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, AVIF and TIFF images. Uses the libvips library.](https://github.com/lovell/sharp)
[How To Process Images in Node.js with Sharp | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp)

[jimp-dev/jimp: An image processing library written entirely in JavaScript for Node, with zero external or native dependencies.](https://github.com/jimp-dev/jimp)

## Python

[Wand documentation](http://docs.wand-py.org/en/latest/index.html#)
[ImageMagick/PythonMagick: PythonMagick](https://github.com/ImageMagick/PythonMagick)
[python - Documents and examples of PythonMagick - Stack Overflow](http://stackoverflow.com/questions/1740158/documents-and-examples-of-pythonmagick/5188661#5188661)

[Python Imaging Library (PIL)](http://www.pythonware.com/products/pil/)
[Pillow — Pillow (PIL Fork) documentation](http://pillow.readthedocs.io/en/latest/)
`python-image` of most distro points to `pillow`
[Image Module — Pillow (PIL Fork) documentation](https://pillow.readthedocs.io/en/stable/reference/Image.html)
[Concepts — Pillow (PIL Fork) documentation](https://pillow.readthedocs.io/en/stable/handbook/concepts.html)

[Imageio website](https://imageio.github.io/)

[OpenStitching/stitching: A Python package for fast and robust Image Stitching](https://github.com/OpenStitching/stitching)
