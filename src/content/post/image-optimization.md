---
title: Image Optimization
description: ""
created: 2016-08-04
updated: 2025-07-07
tags:
  - app
  - shell-tools
---

[[image-formats]]

[18 image file compression tools tested | Creative Bloq](http://www.creativebloq.com/design/image-compression-tools-1132865)
[Comparison of all optimisation tools | ImageOptim-CLI](https://jamiemason.github.io/ImageOptim-CLI/)

[ImageOptim — better Save for Web](https://imageoptim.com/mac) macOS
[ImageOptim alternatives for Windows and Linux](https://imageoptim.com/versions.html)
[JamieMason/ImageOptim-CLI: Make optimisation of images part of your automated build process](https://github.com/JamieMason/ImageOptim-CLI)

[Squoosh](https://squoosh.app/)
[TinyPNG – Compress AVIF, WebP, PNG and JPEG images](https://tinypng.com/)
[Compressor.io - optimize and compress JPEG photos and PNG images](https://compressor.io/)
[Easily compress images at optimal quality in seconds.](https://www.iloveimg.com/compress-image)
[Image Compressor - Compress Images Online in High Quality](https://imageresizer.com/image-compressor)

[Trimage (lossless) image compressor](https://trimage.org/) advpng, jpegoptim, optipng and pngcrush
ImageOptim-inspired, with CLI, much slower and worse compression than `@leesei/imgmini`

[图压 - 简单易用的图片压缩软件](https://tuya.xinxiao.tech/#open-source)

[Caesium - Image Compressor](https://saerasoft.com/caesium) Windows, macOS
[Antelope 5.2.0.0 for Windows - Download](https://antelope.en.uptodown.com/windows) Windows

[BPG Image format](http://bellard.org/bpg/) H.265
[A new image format for the Web | WebP | Google Developers](https://developers.google.com/speed/webp/)

[siiptuo/pio: Optimize images while maintaining the same perceived quality](https://github.com/siiptuo/pio) Rust
[Image Compression with Golang - DEV Community](https://dev.to/franciscomendes10866/image-compression-with-golang-k2p) Go, `libvips`
[spatie/image-optimizer: Easily optimize images using PHP](https://github.com/spatie/image-optimizer) PHP, saving not prominent
[toy/image_optim: Optimize images using multiple utilities](https://github.com/toy/image_optim) Ruby
[imager-io/imager: Automated image compression for efficiently distributing images on the web.](https://github.com/imager-io/imager) Rust/Docker

[unjs/ipx: High performance, secure and easy to use image proxy based on Sharp and libvips.](https://github.com/unjs/ipx/) web server

[JPNG.svg (Transparent PNG with JPEG Compression)](https://codepen.io/shshaw/full/LVKEdv?__cf_chl_jschl_tk__=15fe89eba4cfcd91483b5f446e2bd7e5ab144a98-1576653921-0-ARmYaylhbR0Nwzr7Mb1AyZfGpO-GnPHy5k34lS3n7FiDgdgDmphs82JUSbBitFdYosbBbcLbt3SMeNGDXfAg7qcL8aCfPc3aVx-H1FO8IE8lPAt4HL7pB9SqkIHxhSzdVtLbzZvZM_1aCFCBQYIBt4qhNpL3qNW-BW9BW7ywQXFm1hO9iZHbvT3KfbYlS7yH63F4Eh2K7encgLe89AfCvVEkoQckqI-16qekSdQt4PUznsma9fmmpgazM1G3xqO-lmc0gVczow9ykDT2FRLV3m4iCEtJgsKJN0hXf80xaSRyoz0ag-6mn7iimQf2zzl6NTU4Thbs8hz-L11V7PlL1zkjanQpR6aEoGEKHanbXEiM)

# JPEG

[The Problem with JPEG - Computerphile - YouTube](https://www.youtube.com/watch?v=yBX8GFqt6GA)

[Comparison of JPEG Lossless Compression Tools - blarg.co.uk](https://blarg.co.uk/blog/comparison-of-jpeg-lossless-compression-tools)

[mozilla/mozjpeg: Improved JPEG encoder.](https://github.com/mozilla/mozjpeg)

[Lepton image compression: saving 22% losslessly from images at 15MB/s | Dropbox Tech Blog](https://blogs.dropbox.com/tech/2016/07/lepton-image-compression-saving-22-losslessly-from-images-at-15mbs/)

[The home of PackJPG](http://www.elektronik.htw-aalen.de/packjpg/)

`jpegoptim -P -p --all-progressive -s -m 90 --no-action <file>`

# PNG

[A guide to PNG optimization](http://optipng.sourceforge.net/pngtech/optipng.html)
[This Lossless PNG Optimization You're Probably Not Using Shrunk One File an Extra 39% - Zoompf Web Performance](https://zoompf.com/blog/2014/11/png-optimization)

[pngquant — lossy PNG compressor](https://pngquant.org/) fast, ~70%

[PNGGauntlet](https://pnggauntlet.com/) Combines PNGOUT, OptiPNG, and DeflOpt to create the smallest PNGs
[PNGOUT Tutorial](http://advsys.net/ken/util/pngout.htm) very slow, ~85%
`pngout pngout.png -k0 out.png`

[OptiPNG Home Page](http://optipng.sourceforge.net/)
`optipng -preserve -strip all -simulate <file>` default compression is fair enough, ~0%
[DeflOpt Program: Optimize Compressed Files](http://www.dotnetperls.com/deflopt)
[TinyPNG – Compress PNG images while preserving transparency](https://tinypng.com/) use indexed (color palette)
[PNGCRUSH](https://pmt.sourceforge.io/pngcrush/) very slow, ~10% to larger file ><
pingo
[Advance Projects](http://www.advancemame.it/doc-advpng.html) `advpng`, uses zopflipng, larger file ><

[google/zopfli: Zopfli Compression Algorithm is a compression library programmed in C to perform very good, but slow, deflate or zlib compression.](https://github.com/google/zopfli) `zopflipng`

# SVG

[High Performance SVGs | CSS-Tricks](https://css-tricks.com/high-performance-svgs/)
[svg/svgo: Node.js tool for optimizing SVG files](https://github.com/svg/svgo)
[svg/svgo-gui: Node-WebKit based GUI for SVGO](https://github.com/svg/svgo-gui)

[SVGOMG - SVGO's Missing GUI](https://jakearchibald.github.io/svgomg/) with live feedback
[SVGito - An SVG Optimizer — Sketch Master](https://sketchmaster.com/svg-optimizer)

[Case Study: Optimizing SVG Text & Image Delivery with Inline SVG – Sara Soueidan, inclusive design engineer](https://www.sarasoueidan.com/blog/optimizing-svg-delivery-with-svg/)
[Web Performance Calendar » Tips For Optimising SVG Delivery For The Web](https://calendar.perfplanet.com/2014/tips-for-optimising-svg-delivery-for-the-web/)

# imagemin

> imagemin provides prebuilt native binaries

[imagemin](https://github.com/imagemin?type=source) not actively maintained, dependencies are old
[imagemin/imagemin-cli: Minify images seamlessly](https://github.com/imagemin/imagemin-cli)
[imagemin/imagemin: Minify images seamlessly](https://github.com/imagemin/imagemin)
[1000ch/gulp-image: Optimize PNG, JPEG, GIF, SVG images with gulp task.](https://github.com/1000ch/gulp-image) uses `imagemin` binaries

```sh
npm i -g imagemin-cli imagemin-mozjpeg imagemin-pngcrush imagemin-pngquant
imagemin --plugin=pngcrush --plugin=pngquant --plugin=mozjpeg --plugin=gifsicle --plugin=svgo "images/**" "outdir"
```

[imgmini - npm](https://www.npmjs.com/package/imgmini) `gulp-image` contains all the binaries, provides intuitive reporting interface

```
[12:08:28] ✔ css-mctn_hdr_home.png -> before=130 kB after=45 kB reduced=84.8 kB (65.3%)
[12:08:29] ✔ css-mfrm_hdr_home.png -> before=181 kB after=62.1 kB reduced=119 kB (65.8%)
[12:08:36] ✔ frbg_eq22_23_home_s1_M.png -> before=720 kB after=232 kB reduced=488 kB (67.8%)
[12:08:42] ✔ frbg_eq22_23_home_s1_T.png -> before=900 kB after=262 kB reduced=638 kB (70.9%)
[12:08:42] ✔ frbg_eq22_23_home_s1_H.png -> before=900 kB after=262 kB reduced=638 kB (70.9%)
```

[Asikur22/npm-imgmini: Image Minify with Gulp Image.](https://github.com/Asikur22/npm-imgmini) CLI wrapper for `gulp-image`

```sh
npm i -g @leesei/imgmini
find <folder> -type f | xargs -P$(nproc) -- imgmini -s
```

```js
// options for `gulp-image`
{
  pngquant: true,
  optipng: false,
  zopflipng: true,
  jpegRecompress: false,
  mozjpeg: true,
  guetzli: false,
  gifsicle: true,
  svgo: true,
  concurrent: 10,
  quiet: false, // defaults to false
}
```

[wuwu8ku/imgminify: imgminify](https://github.com/wuwu8ku/imgminify) bundled binaries, custom wrapper
[robinLiu1989/webpack-imgmini: a image compress use webpack](https://github.com/robinLiu1989/webpack-imgmini)

[Yuriy-Svetlov/compress-images: Minify size your images. Image compression with extension: jpg/jpeg, svg, png, gif. NodeJs](https://github.com/Yuriy-Svetlov/compress-images/)

# Squoosh

> WebAssembly

[GoogleChromeLabs/squoosh: Make images smaller using best-in-class codecs, right in the browser.](https://github.com/GoogleChromeLabs/squoosh)

[Introducing libSquoosh](https://web.dev/introducing-libsquoosh/)
[@squoosh/lib - npm](https://www.npmjs.com/package/@squoosh/lib)
[@squoosh/cli - npm](https://www.npmjs.com/package/@squoosh/cli)

[jamsinclair/jSquash: Browser & V8 Runtime focussed wasm bundles derived from the Squoosh App.](https://github.com/jamsinclair/jSquash)

---

# Cloudinary

[Image Optimization for Websites: Beautiful Pages That Load Quickly](https://cloudinary.com/blog/image_optimization_for_websites_beautiful_pages_that_load_quickly)
[CDN for Images: Optimize and Deliver Images Faster](https://cloudinary.com/blog/delivering_all_your_websites_images_through_a_cdn)
[Get started with Cloudinary Media Optimizer | Cloudinary](https://cloudinary.com/documentation/media_optimizer_get_started)

[Compress an Image Automatically Without Losing Quality](https://cloudinary.com/blog/the_holy_grail_of_image_optimization_or_balancing_visual_quality_and_file_size) compression ratio
[Automatically Reduce Image Size Without Losing Quality](https://cloudinary.com/blog/adaptive_browser_based_image_format_delivery) format
[Match Device Pixel Ratio by Automatically Adapting Images](https://cloudinary.com/blog/how_to_automatically_adapt_website_images_to_retina_and_hidpi_devices) resolution

[Cloudinary for WordPress Plugin for Images and Video](https://cloudinary.com/blog/introducing_cloudinary_s_wordpress_plugin_for_dynamic_images_and_video)

# imgproxy

[imgproxy documentation](https://docs.imgproxy.net/)

Self host with Docker
[darthsim/imgproxy - Docker Image | Docker Hub](https://hub.docker.com/r/darthsim/imgproxy/)
[imgproxy/imgproxy: Fast and secure standalone server for resizing and converting remote images](https://github.com/imgproxy/imgproxy)
[How To Serve Next-Generation Images With imgproxy Using Docker | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-serve-next-generation-images-with-imgproxy-using-docker)

# Web Service

[Compressor.io - optimize and compress JPEG photos and PNG images](https://compressor.io/) 10MB limit
[Free Online Image Optimizer · Kraken.io](https://kraken.io/web-interface) 1MB limit
[Online Image Сompressor](https://imagecompressor.com/) ? limit
[TinyPNG – Compress PNG images while preserving transparency](https://tinypng.com/) 5MB limit, create indexed PNG, PNG only
