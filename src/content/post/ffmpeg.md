---
title: ffmpeg
description: A complete, cross-platform solution to record, convert and stream audio and video.
created: 2015-01-13
updated: 2024-08-14
tags:
  - app
  - avconv
  - ffmpeg
  - shell-tool
---

[FFmpeg - Wikiwand](https://omni.wikiwand.com/en/FFmpeg)
[FFmpeg](https://ffmpeg.org/)

[libavcodec - What is ffmpeg, avcodec, x264? - Stack Overflow](https://stackoverflow.com/questions/16772558/what-is-ffmpeg-avcodec-x264)

```sh
ffmpeg [global options] [[infile options][-i infile]]... {[outfile options] outfile}...
```

| Parameter              | Description                         |
| ---------------------- | ----------------------------------- |
| `-c:v`, `-c:a`         | Set video/audio codec               |
| `-b:v`, `-b:a`         | Set video/audio bitrates            |
| `-c codec`             | e.g. `-c copy`                      |
| `-vn`, `-an`           | Skip video/audio                    |
| `-t duration`          | Specify duration, preempts `-to`    |
| `-to position`         | Specify stop position               |
| `-ss positio`n         | Specify stop position (before `-i`) |
| `-frames:v framecount` | Specify frame count limit           |
| `-filter:v`, `-vf`     | Video filters                       |
| `-filter:a`, `-af`     | Audio filters                       |

## screenshot

```sh
# capture 10s of frames starting from 5 minute mark
ffmpeg -ss 05:00 -to 05:10 -i <input> screenshot%05d.png
```

## screen capture

[Capture/Desktop – FFmpeg](http://trac.ffmpeg.org/wiki/Capture/Desktop)
[FFmpeg Devices Documentation](https://ffmpeg.org/ffmpeg-devices.html)

```sh
# default encoding is yuv444 at H.264 Main profile, which is not compatible with Da Vinci Resolve

# Windows
ffmpeg -f gdigrab -framerate 30 -i title=App -pix_fmt yuv420p -vcodec h264 -profile main out.mp4

# you can use `Capture` UI to select the rect to get the offset and video size
ffmpeg -f gdigrab -framerate 30 -offset_x 0 -offset_y 0 -video_size 1920x1080 -show_region 1 -i desktop -pix_fmt yuv420p -vcodec h264 -profile main out.mp4
```

## trim clip

> TODO: add tool to do diff of `hh:mm:ss[.xxx]` format time

```sh
# keyframe seek, time is reset
ffmpeg -ss <second/hh:mm:ss[.xxx]> -i <infile> -to <second/hh:mm:ss[.xxx]> -c copy <outfile>
```

## transcode clips

```sh
# list codecs
ffmpeg -formats -E
# list private options
ffmpeg -h encoder=<encoder>

# use `h264_nvenc` for NVIDIA card.
ffmpeg \
  -i 'Top Gear - [06x01] - 2005.05.22 [m00tv].avi' \
  -c:v h264_nvenc -b:v 750k -g 240 \
  -c:a aac -vbr:a on -b:a 128k \
  'Top Gear - [06x01] - 2005.05.22 [m00tv].mp4'

# SD encoding
ffmpeg \
  -i 'Top Gear - [06x01] - 2005.05.22 [m00tv].avi' \
  -c:v libvpx-vp9 -b:v 750k -quality good -speed 4 -crf 23 -g 240 -threads 12 \
  -c:a libopus -vbr:a on \
  'Top Gear - [06x01] - 2005.05.22 [m00tv].webm'
```

[HWAccelIntro – FFmpeg](https://trac.ffmpeg.org/wiki/HWAccelIntro)

[Media | Google Developers](https://developers.google.com/media/vp9/settings/vod/) VP9 encoder
[Hardware/VAAPI – FFmpeg](https://trac.ffmpeg.org/wiki/Hardware/VAAPI)
[Simple hardware encoding for VP9 with semi-recent Intel processors and FFmpeg · Abel Stern](https://abelstern.nl/posts/hardware_encoding_vp9/)
[mp4 - Best settings for FFMpeg with NVENC - Super User](https://superuser.com/questions/1296374/best-settings-for-ffmpeg-with-nvenc)

## merge clips

```sh
ffmpeg -i VTS_01_2.VOB -ss 463 -c copy -vframes 325 2-manuchoisit.vob
ffmpeg -i VTS_01_2.VOB -ss 353 -t 16 -c copy 3-manutombe.vob

# use `-vn`/`-an` to skip encoding
# `-b:a 192k` may be smaller than `aq`
# `crf` controls the video quality. 18-28 is acceptable range, default is 23.
ffmpeg -analyzeduration 200M -probesize 150M \
  -i concat:"2-manuchoisit.vob|3-manutombe.vob" \
  -vcodec libx264  -preset veryslow -crf 23 \
  -acodec aac -aq 100 -ac 2 -vol 2048 1990-Manu_Redpants.mp4
```

## color format conversion

```sh
ffmpeg -pix_fmt yuv420p -s 352x288 -i in.yuv -pix_fmt nv12 out.yuv
```

## Overlay text

```
.\ffmpeg  -i test2.wmv \
  -vf "drawtext=fontfile=C\\:/Windows/fonts/consola.ttf:text=%{n}:fontsize=72:r=60:x=(w-tw)/2: y=h-(2*lh):fontcolor=white:box=1:boxcolor=0x00000099" \
  test2.mp4
```

## GIF generation

```sh
# generate 1 FPS for the first minute
ffmpeg -i input.mp4 -vf "scale=320:-1,fps=1" -to 60 output.gif

# using per frame palettes
ffmpeg -i input.mp4 -vf "scale=320:-1:flags=lanczos,fps=1,palettegen" -to 60  -y /tmp/palette.png
ffmpeg -i input.mp4 -i /tmp/palette.png -to 60 -lavfi "scale=320:-1:flags=lanczos,fps=1[x];[x][1:v]paletteuse=dither=sierra2_4a" output.gif

# same with Imagemagic
ffmpeg -i input.mp4 -vf scale=320:-1,fps=1 -to 60 -f image2pipe -vcodec ppm - | convert -delay 100 -loop 0 - output.gif
# with optimize (~15% reduction)
ffmpeg -i input.mp4 -vf scale=320:-1,fps=1 -to 60 -f image2pipe -vcodec ppm - | convert - gif:- | convert -layers Optimize  -delay 100 -loop 0 - output.gif
```

Using per frame palettes:
[High quality GIF with FFmpeg](http://blog.pkh.me/p/21-high-quality-gif-with-ffmpeg.html)
[lukechilds/gifgen: Simple high quality GIF encoding](https://github.com/lukechilds/gifgen)
[How do I convert a video to GIF using ffmpeg, with reasonable quality? - Super User](https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality)

## Reference

[Documentation](http://ffmpeg.org/documentation.html)
[`ffmpeg` Documentation](http://ffmpeg.org/ffmpeg.html)

[FFmpeg - ArchWiki](https://wiki.archlinux.org/title/FFmpeg)
[FFmpeg wiki](http://trac.ffmpeg.org/wiki)
[Seeking – FFmpeg](https://trac.ffmpeg.org/wiki/Seeking)

[ffmpeg audio/video manipulation](http://howto-pages.org/ffmpeg/)
[19 FFmpeg Commands for Your Needs (2023 Edition)](https://catswhocode.com/ffmpeg-commands/)
[ffmpeg | Video Encoding & Streaming Technologies](https://sonnati.wordpress.com/category/ffmpeg/)
[using ffmpeg to extract audio from video files](https://gist.github.com/protrolium/e0dbd4bb0f1a396fcb55)
[A quick guide to using FFmpeg to convert media files | Opensource.com](https://opensource.com/article/17/6/ffmpeg-convert-media-file-formats)

## Filters

[FFmpeg Filters Documentation](https://ffmpeg.org/ffmpeg-filters.html)
[FilteringGuide – FFmpeg](https://trac.ffmpeg.org/wiki/FilteringGuide)

## Libav/avconv kerfuffle

> Libav/avconv are dead as of 2022

[Libav - Wikiwand](https://omni.wikiwand.com/en/Libav)
Libav is a fork of FFmpeg in 2011 with more transparent governance.
But the maintainers failed to maintain their original intention and rejected to merge changes from FFmpeg.
They managed to keep their popularity as Debian/Ubuntu used it as default and claiming FFMpeg that is obsolete. That changed in 2015 and momentum to Libav is lost.

[The FFmpeg/Libav situation](https://web.archive.org/web/20230122183833/http://blog.pkh.me/p/13-the-ffmpeg-libav-situation.html)

[ubuntu - What are the differences and similarities between ffmpeg, libav, and avconv? - Stack Overflow](https://stackoverflow.com/questions/9477115/what-are-the-differences-and-similarities-between-ffmpeg-libav-and-avconv/9477756#9477756)
