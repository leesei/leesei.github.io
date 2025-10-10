---
title: Android notes
description: ""
created: 2014-12-17
updated: 2025-07-07
tags:
  - aapt
  - adb
  - android
  - input
  - logcat
  - wakelock
---

Notes on Android system and console tools available.

[Android (and Friends) Reading Guide | Linux.org](http://www.linux.org/threads/android-and-friends-reading-guide.6146/)
[hellogv 的专栏 - 博客频道 - CSDN.NET](http://blog.csdn.net/hellogv)
[Android Device - eLinux.org](http://elinux.org/Android_Device)
[Android Trends in 2020 - AndroidPub](https://android.jlelse.eu/android-trends-in-2020-d6a2930596a)
[Mind The Robot](https://mindtherobot.com/)

[Android versions: A living history from 1.0 to today | Computerworld](https://www.computerworld.com/article/3235946/android/android-versions-a-living-history-from-1-0-to-today.html)
[Stock Android vs Android One vs Android Go: the differences explained](https://www.androidauthority.com/stock-android-vs-android-one-vs-android-go-860020/)
[Android Oreo: 18 advanced tips and tricks | Computerworld](https://www.computerworld.com/article/3250625/android/android-oreo-18-advanced-tips-and-tricks.html)
[10 hidden tricks for making the most of Android 10's gestures | Computerworld](https://www.computerworld.com/article/3439060/android-10-gestures.html)
[How to take full advantage of Android 10's privacy-reclaiming powers | Computerworld](https://www.computerworld.com/article/3437337/android-10-privacy.html)

[Secret settings hidden in your Android phone will make it feel twice as fast – BGR](https://bgr.com/2018/06/26/android-vs-iphone-secret-settings-increase-android-speed/amp/)

[How A/B Partitions and Seamless Updates Affect Custom Development on XDA](https://www.xda-developers.com/how-a-b-partitions-and-seamless-updates-affect-custom-development-on-xda/)

[These 7 Free Android Apps Make My Life So Much Easier](https://www.makeuseof.com/apps-simplify-your-life-boost-productivity/)

[Shizuku](https://shizuku.rikka.app/)
[timschneeb/awesome-shizuku: Curated list of awesome Android apps making use of Shizuku](https://github.com/timschneeb/awesome-shizuku)

## Android is not Open

[Here we go again: Android is, apparently, not open – OSnews](https://www.osnews.com/story/27565/here-we-go-again-android-is-apparently-not-open/)
[Neither Microsoft, Nokia, nor anyone else should fork Android. It’s unforkable. – Ars Technica](https://arstechnica.com/information-technology/2014/02/neither-microsoft-nokia-nor-anyone-else-should-fork-android-its-unforkable/amp/)
[New Android OEM licensing terms leak; “Open” comes with a lot of restrictions – Ars Technica](https://arstechnica.com/gadgets/2014/02/new-android-oem-licensing-terms-leak-open-comes-with-restrictions/amp/)

## Android Apps

[Android apps: Best of the best | Computerworld](https://www.computerworld.com/article/3268630/android/android-apps-best-of-the-best.html)
[18 time-saving tips for the Chrome Android browser | Computerworld](https://www.computerworld.com/article/2975137/android/18-time-saving-tips-for-the-chrome-android-browser.html)
[The best Android file manager apps | Computerworld](https://www.computerworld.com/article/3268115/android/best-android-file-manager-apps.html)
[The best note-taking apps for Android | Computerworld](https://www.computerworld.com/article/3239964/android/best-note-taking-apps-for-android.html)
[Save time with efficiency-boosting Android apps | Computerworld](https://www.computerworld.com/article/3208108/android/android-apps-efficiency-timesaving.html)

[Termux](https://termux.com/) Android terminal emulator and Linux environment app

[Home | MacroDroid](https://www.macrodroid.com/)
[MacroDroid怎么用？轻松打造个性化自动化流程，告别重复劳动？*手机软件*什么值得买](https://post.smzdm.com/p/aovvgo77/?_did=2b44c78621469f66c19bdafd032bcb18)

### Play Store Alternatives

[Download APK free online downloader | APKPure.com](https://apkpure.com/)
[QooApp Game Store](https://apps.qoo-app.com/en)
[F-Droid - Free and Open Source Android App Repository](https://f-droid.org/en/)

[当贝市场 TV 版*最新版当贝市场下载*安卓电视 APK\_当贝市场](https://m.dangbei.com/wap-view-463.html)

## UserLAnd

[UserLAnd | Main UserLAnd Repository](https://userland.tech/)

[UserLAnd, a Turnkey Linux in Your Pocket | Linux Journal](https://www.linuxjournal.com/content/userland-turnkey-linux-your-pocket)
[CypherpunkArmory/UserLAnd: Main UserLAnd Repository](https://github.com/CypherpunkArmory/UserLAnd)
[UserLAnd - Apps on Google Play](https://play.google.com/store/apps/details?id=tech.ula)

## Export Chrome's Tabs

[When you never close tabs on your mobile Chrome browser - DEV Community 👩‍💻👨‍💻](https://dev.to/piczmar_0/when-you-never-close-tabs-on-your-mobile-chrome-browser-2boj)

```sh
./adb forward tcp:9222 localabstract:chrome_devtools_remote
curl http://localhost:9222/json/list | jq ".[].url" | tr -d '"' > mobile_tabs.txt
wget -O tabs.json http://localhost:9222/json/list
```

[How can I export the list of open Chrome tabs? - Android Enthusiasts Stack Exchange](https://android.stackexchange.com/questions/56635/how-can-i-export-the-list-of-open-chrome-tabs)

## Android dev

Kotlin was supported officially as a language for Android dev at Google I/O 2017.
[A Developer's Intro to Android](https://blog.scottlogic.com/2018/12/05/a-developers-intro-to-android.html)

[Guide to app architecture  |  Android Developers](https://developer.android.com/topic/architecture)
[Meet Google Play's target API level requirement  |  Android Developers](https://developer.android.com/google/play/requirements/target-sdk)

[Android CPU, Compilers, D8 & R8 – ProAndroidDev](https://proandroiddev.com/android-cpu-compilers-d8-r8-a3aa2bfbc109) Runtimes

[Google Codelabs](https://codelabs.developers.google.com/?product=android)
[Android Basics in Kotlin course  |  Android Developers](https://developer.android.com/courses/android-basics-kotlin/course)
[Android Basics with Compose course  |  Android Developers](https://developer.android.com/courses/android-basics-compose/course)
[Jetpack Compose for Android Developers](https://developer.android.com/courses/jetpack-compose/course)
[Android Kotlin Fundamentals  |  Training Courses  |  Android Developers](https://developer.android.com/courses/kotlin-android-fundamentals/overview)
[Advanced Android in Kotlin  |  Training Courses  |  Android Developers](https://developer.android.com/courses/kotlin-android-advanced/overview)

[Developing Android Apps with Kotlin | Udacity](https://www.udacity.com/course/developing-android-apps-with-kotlin--ud9012)
[Advanced Android with Kotlin | Udacity](https://www.udacity.com/course/advanced-android-with-kotlin--ud940)

[ProAndroidDev](https://proandroiddev.com/)
[AndroidDev – AndroidPub – Medium](https://medium.com/android-news/tagged/androiddev)

[Modern Android development with Kotlin, Part 1 – ProAndroidDev](https://proandroiddev.com/modern-android-development-with-kotlin-september-2017-part-1-f976483f7bd6)
[Modern Android development with Kotlin (Part 2) – ProAndroidDev](https://proandroiddev.com/modern-android-development-with-kotlin-september-2017-part-2-17444fcdbe86)
[Modern Android development with Kotlin Part 3 – ProAndroidDev](https://proandroiddev.com/modern-android-development-with-kotlin-part-3-8721fb843d1b)
[Modern Android development with Kotlin Part 4 – ProAndroidDev](https://proandroiddev.com/modern-android-development-with-kotlin-part-4-4ac18e9868cb)
[mladenrakonjac/ModernAndroidApp: Code for Medium article](https://github.com/mladenrakonjac/ModernAndroidApp)

[突破 Android P 的非公开 API 限制](https://mp.weixin.qq.com/s?__biz=MzUxMzcxMzE5Ng==&mid=2247488664&idx=1&sn=610312f426d72b73103970bff2c32a30)

[25 new Android libraries which you definitely want to try at the beginning of 2017](https://www.freecodecamp.org/news/25-new-android-libraries-which-you-definitely-want-to-try-at-the-beginning-of-2017-45878d5408c0/)

### AOSP

[AndroidXRef](http://androidxref.com/) up to 9.0 in 2018
[[GUIDE] Understanding the Android Source Code | XDA Forums](https://forum.xda-developers.com/t/guide-understanding-the-android-source-code.2620389/)
[[GUIDE] Learning about the Android Build Process | XDA Forums](https://forum.xda-developers.com/t/guide-learning-about-the-android-build-process.2751407/)

[Tutorial: Diving into Android Source Code | ProTech](https://www.protechtraining.com/blog/post/tutorial-diving-into-android-source-code-721) 2013

### IBinder

[IBinder  |  Android Developers](https://developer.android.com/reference/kotlin/android/os/IBinder)

[What is Ibinder in Android? [Answered 2023]- Droidrant](https://droidrant.com/what-is-ibinder-in-android/)

### Volley

[Volley overview | Volley](https://google.github.io/volley/)
[Google I/O 2013 - Volley: Easy, Fast Networking for Android - YouTube](https://www.youtube.com/watch?v=yhv8l9F44qo)

### Jetpack

[Android Jetpack Dev Resources - Android Developers](https://developer.android.com/jetpack/)❗!important, new standard library compatible with Kotlin
[Jetpack Compose UI App Development Toolkit - Android Developers](https://developer.android.com/jetpack/compose) UI toolkit with Kotlin DSL

[Android Developers Blog: Hello World, AndroidX](https://android-developers.googleblog.com/2018/05/hello-world-androidx.html)
[Android Jetpack Brings WorkManager, Navigation and More](https://www.infoq.com/news/2018/05/android-jetpack-released)
s
[Data Binding Library  |  Android Developers](https://developer.android.com/topic/libraries/data-binding)
[Data Binding in Android: A tutorial with examples - LogRocket Blog](https://blog.logrocket.com/data-binding-android-tutorial-with-examples/)

[Compose From First Principles | Intelligible Babble](http://intelligiblebabble.com/compose-from-first-principles/)
[Store grand re-opening: loading Android data with coroutines - Dropbox](https://dropbox.tech/mobile/store-grand-re-opening-loading-android-data-with-coroutines)

### Room ORM

[Save data in a local database using Room  |  Android Developers](https://developer.android.com/training/data-storage/room)
[7 Steps To Room – Google Developers – Medium](https://medium.com/google-developers/7-steps-to-room-27a5fe5f99b2)

[MatrixDev/Roomigrant: Automated Android Room ORM migrations generator with compile-time code generation](https://github.com/MatrixDev/Roomigrant)

### Transition

[Animate layout changes using a transition | Android Developers](https://developer.android.com/training/transitions)

## Android for PC

[Android-x86 - Porting Android to x86](http://www.android-x86.org/)

[Top 5 Best Bluestacks Alternative in 2023 – AirDroid](https://www.airdroid.com/remote-control/bluestacks-alternative/)

## Bluestacks

[BlueStacks –電腦和 Mac 上最快的安卓模擬器| 100％安全免費](https://www.bluestacks.com/tw/index.html)

[How can I install APK file on Bluestacks app player? - Android Enthusiasts Stack Exchange](https://android.stackexchange.com/questions/42983/how-can-i-install-apk-file-on-bluestacks-app-player)

## Android sysadmin

> attach adbpull, adbpush, adbview, adbcmd here

- prettify /proc/wakelocks

```sh
# on device
cat /proc/wakelocks | busybox awk '{ printf "%-25s %-10s\n", $1, $5 }' | busybox grep -v " 0"

# with adb
adb shell cat /proc/wakelocks | awk '{ printf "%-25s %-10s\n", $1, $5 }' | grep -v " 0"
```

- input device info

```sh
cat /proc/bus/input/devices
```

## GPU

### Caffe

[OAID/CaffeOnACL: Using ARM Compute Library (NEON+GPU) to speed up caffe; Providing utilities to debug, profile and tune application performance](https://github.com/OAID/CaffeOnACL)
[RockchipOpensourceCommunity/CaffeOnACL-Android: Porting CaffeOnACL to RK3399 Android platform](https://github.com/RockchipOpensourceCommunity/CaffeOnACL-Android/)

### ~~Renderscript~~

Deprecated from Android 12

[RenderScript - Wikiwand](https://www.wikiwand.com/en/RenderScript)
[RenderScript Overview  |  Android Developers](https://developer.android.com/guide/topics/renderscript/compute)

[Android Renderscript - YouTube](https://www.youtube.com/watch?v=7TqTnlYAg8E) 2011
[Learn about RenderScript from Romain Guy and Chet Haase of the Android UI Toolkit team - YouTube](https://www.youtube.com/watch?v=5jz0kSuR2j4) 2011
[Google I/O 2013 - High Performance Applications with RenderScript - YouTube](https://www.youtube.com/watch?v=uzBw6AWCBpU)
[GDC Booth Presentation by Google: Renderscript 2013 - YouTube](https://www.youtube.com/watch?v=gu1jwNuMv1A)
[AnDevCon: A Deep Dive into RenderScript - YouTube](https://www.youtube.com/watch?v=3ynA92x8WQo) 2013

[Renderscript from the perspective of an OpenCL/CUDA/C++ AMP programmer – Searching for divine code](http://www.codedivine.org/2013/02/01/renderscript-from-the-perspective-of-an-openclcudac-amp-programmer/)
[android - Why did Google choose RenderScript instead of OpenCL - Stack Overflow](https://stackoverflow.com/questions/14385843/why-did-google-choose-renderscript-instead-of-opencl)

## APK download

[F-Droid - Free and Open Source Android App Repository](https://f-droid.org/en/)
[Download APK from Google Play Store free online downloader | APKPure.com](http://apkpure.com/)
[APK Download of Free Android Apps - AndroidDrawer.com](http://www.androiddrawer.com/)
[APK Downloader [Latest] Download Directly | Chrome Extension v3 (Evozi Official)](http://apps.evozi.com/apk-downloader/)
[QooApp 遊戲庫](https://apps.qoo-app.com/)

[SmartTube (Official Site)](https://smarttubeapp.github.io/)
[yuliskov/SmartTubeNext: SmartTube - an advanced player for set-top boxes and tv running Android OS](https://github.com/yuliskov/SmartTubeNext)

[ReVanced Extended 18.40.34 | Download APK for Android](https://revancedextended.com/)

## Remote mouse

[悟空遥控器TV版*最新版悟空遥控器下载*安卓电视APK\_当贝市场](https://www.dangbei.com/app/tv/2014/0411/449.html)
Android app that is able to allow mobile to control Android STB remotely. The server app does not require rooting and system integration. It draws the cursor on an overlay layer and issue commands to `Input` framework.

[Programmatically Injecting Events on Android - Part 1 - PocketMagic](http://www.pocketmagic.net/injecting-events-programatically-on-android/)
[Programmatically Injecting Events on Android - Part 2 - PocketMagic](http://www.pocketmagic.net/programmatically-injecting-events-on-android-part-2/)
[Android Overlay Mouse Cursor - PocketMagic](http://www.pocketmagic.net/android-overlay-cursor/)

## OTA update

[OTA updates  |  Android Open Source Project](https://source.android.com/docs/core/ota)
[APEX file format  |  Android Open Source Project](https://source.android.com/docs/core/ota/apex)
[A/B (seamless) system updates  |  Android Open Source Project](https://source.android.com/docs/core/ota/ab)
[Non-A/B system updates  |  Android Open Source Project](https://source.android.com/docs/core/ota/nonab)
[Dynamic partitions  |  Android Open Source Project](https://source.android.com/docs/core/ota/dynamic_partitions)

## Security

[Android Security  |  Android Open Source Project](https://source.android.com/docs/security)
[Secure an Android Device  |  Android Open Source Project](https://source.android.com/docs/security/overview)
[Android Security Features  |  Android Open Source Project](https://source.android.com/docs/security/features)
[Android Security Best Practices  |  Android Open Source Project](https://source.android.com/docs/security/best-practices)

## Debugging

[bytedance/btrace: 🔥🔥 btrace(AKA RheaTrace) is a high performance Android trace tool which is based on Systrace, it support to define custom events automatically during building apk and using bhook to provider more native events like IO.](https://github.com/bytedance/btrace)

### adb

[Android Debug Bridge (adb)  |  Android Studio  |  Android Developers](https://developer.android.com/tools/adb)
[Android Debug Bridge - ArchWiki](https://wiki.archlinux.org/title/Android_Debug_Bridge)

[ashishb/adb-enhanced: 🔪Swiss-army knife for Android testing and development 🔪 ⛺](https://github.com/ashishb/adb-enhanced)
[JeffLIrion/adb_shell: A Python implementation of ADB with shell and FileSync functionality.](https://github.com/JeffLIrion/adb_shell)

[SDK Platform Tools release notes  |  Android Studio  |  Android Developers](https://developer.android.com/tools/releases/platform-tools)
[How to Install ADB on Windows, macOS, and Linux](https://www.xda-developers.com/install-adb-windows-macos-linux/)

`adb` comes with the Android SDK, and released separately as Platform Tools in 2017.

- [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
- [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)
- [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)

[Android Debug Bridge (ADB) | Android Open Source Project](https://source.android.com/docs/setup/build/adb)
[adb - platform/system/core - Git at Google](https://android.googlesource.com/platform/system/core/+/refs/heads/android11-release/adb/) android11-release
[adb - Android Code Search](https://cs.android.com/android/platform/superproject/+/master:packages/modules/adb/)

#### Enable adb via TCP

On PC:

```sh
adb tcpip 5555
```

On device (need ROOT):

```sh
su
setprop service.adb.tcp.port 5555
stop adbd
start adbd
```

```sh
adb connect <DEVICE_IP_ADDRESS>:5555
```

### logcat

#### logcat filtering (Eclipse and Android Studio)

pid:
text:
app: package name (`com.example.android.bluetoothlegatt`)
tag: `^(?!.*(DeskClock|dalvik|wpa)).*$`, `^(?!(BluetoothAdapter|AbsListView))`

#### android-log-viewer

[mlopatkin / android-log-viewer — Bitbucket](https://bitbucket.org/mlopatkin/android-log-viewer/src/master/)

#### logcat (node)

[logcat-org/logcat: adb logcat console and web viewer](https://github.com/logcat-org/logcat)
[openstf/adbkit-logcat: A Node.js interface for working with Android's logcat output.](https://github.com/openstf/adbkit-logcat)

#### pidcat (python)

[JakeWharton/pidcat: Colored logcat script which only shows log entries for a specific application package.](https://github.com/JakeWharton/pidcat)

## Android on Linux

[Android Apps on Linux | Linux.org](http://www.linux.org/threads/android-apps-on-linux.7431/) via Chrome
[Best Ways To Use Android Apps In Ubuntu - LinuxAndUbuntu - Linux News | Apps Reviews | Linux Tutorials HowTo](http://www.linuxandubuntu.com/home/best-ways-to-use-android-apps-in-ubuntu)
[Anbox Runs Android In Your Linux Without Emulation - LinuxAndUbuntu - Linux News | Apps Reviews | Linux Tutorials HowTo](http://www.linuxandubuntu.com/home/anbox-runs-android-in-your-linux-without-emulation)

[Genymobile/scrcpy: Display and control your Android device](https://github.com/Genymobile/scrcpy)
[Scrcpy & Sndcpy: Screencast Any Android Phone To Your Computer - YouTube](https://www.youtube.com/watch?v=zTYYdPS4SOA)

## Factory Reset Protection

[Factory Reset Protection: What you need to know | Android Central](https://www.androidcentral.com/factory-reset-protection-what-you-need-know)

### Bypass

[How to Bypass Factory Reset Protection Android [2023 Latest]](https://www.tenorshare.com/unlock-android/bypass-factory-reset-protection-android.html) Samsung, Huawei

Gist:

- Open YouTube app
- Go to Privacy Policy in Settings, which opens a web browser
- Go to https://HardReset.Info/frp (override screen lock pattern/pin) or https://easy-firmware.com/efrp/ (force stop service in Accessibility Tool)

[GOOGLE Pixel 7 Bypass Google Account Verification | Remove Google Lock | Unlock FRP Android 13 - YouTube](https://www.youtube.com/watch?v=-P3ZclYJdmg)
[New! Google Pixel 3 FRP Bypass Android 12 Without PC || Pixel 3 Frp Bypass Android 12 - YouTube](https://www.youtube.com/watch?v=9qlhDjRJee4)

## aapt

```
Android Asset Packaging Tool

Usage:
 aapt l[ist] [-v] [-a] file.{zip,jar,apk}
   List contents of Zip-compatible archive.

 aapt d[ump] [--values] [--include-meta-data] WHAT file.{apk} [asset [asset ...]]
   strings          Print the contents of the resource table string pool in the APK.
   badging          Print the label and icon for the app declared in APK.
   permissions      Print the permissions from the APK.
   resources        Print the resource table from the APK.
   configurations   Print the configurations in the APK.
   xmltree          Print the compiled xmls in the given assets.
   xmlstrings       Print the strings of the given compiled xml assets.

 aapt p[ackage] [-d][-f][-m][-u][-v][-x][-z][-M AndroidManifest.xml] \
        [-0 extension [-0 extension ...]] [-g tolerance] [-j jarfile] \
        [--debug-mode] [--min-sdk-version VAL] [--target-sdk-version VAL] \
        [--app-version VAL] [--app-version-name TEXT] [--custom-package VAL] \
        [--rename-manifest-package PACKAGE] \
        [--rename-instrumentation-target-package PACKAGE] \
        [--utf16] [--auto-add-overlay] \
        [--max-res-version VAL] \
        [-I base-package [-I base-package ...]] \
        [-A asset-source-dir]  [-G class-list-file] [-P public-definitions-file] \
        [-S resource-sources [-S resource-sources ...]] \
        [-F apk-file] [-J R-file-dir] \
        [--product product1,product2,...] \
        [-c CONFIGS] [--preferred-configurations CONFIGS] \
        [--split CONFIGS [--split CONFIGS]] \
        [--feature-of package [--feature-after package]] \
        [raw-files-dir [raw-files-dir] ...] \
        [--output-text-symbols DIR]

   Package the android resources.  It will read assets and resources that are
   supplied with the -M -A -S or raw-files-dir arguments.  The -J -P -F and -R
   options control which files are output.

 aapt r[emove] [-v] file.{zip,jar,apk} file1 [file2 ...]
   Delete specified files from Zip-compatible archive.

 aapt a[dd] [-v] file.{zip,jar,apk} file1 [file2 ...]
   Add specified files to Zip-compatible archive.

 aapt c[runch] [-v] -S resource-sources ... -C output-folder ...
   Do PNG preprocessing on one or several resource folders
   and store the results in the output folder.

 aapt s[ingleCrunch] [-v] -i input-file -o outputfile
   Do PNG preprocessing on a single file.

 aapt v[ersion]
   Print program version.

 Modifiers:
   -a  print Android-specific data (resources, manifest) when listing
   -c  specify which configurations to include.  The default is all
       configurations.  The value of the parameter should be a comma
       separated list of configuration values.  Locales should be specified
       as either a language or language-region pair.  Some examples:
            en
            port,en
            port,land,en_US
   -d  one or more device assets to include, separated by commas
   -f  force overwrite of existing files
   -g  specify a pixel tolerance to force images to grayscale, default 0
   -j  specify a jar or zip file containing classes to include
   -k  junk path of file(s) added
   -m  make package directories under location specified by -J
       comes before this one. The first Feature Split APK should not define
       anything here.
   --rename-manifest-package
       Rewrite the manifest so that its package name is the package name
       given here.  Relative class names (for example .Foo) will be
       changed to absolute names with the old package so that the code
       does not need to change.
   --rename-instrumentation-target-package
       Rewrite the manifest so that all of its instrumentation
       components target the given package.  Useful when used in
       conjunction with --rename-manifest-package to fix tests against
       a package that has been renamed.
   --product
       Specifies which variant to choose for strings that have
       product variants
   --utf16
       changes default encoding for resources to UTF-16.  Only useful when API
       level is set to 7 or higher where the default encoding is UTF-8.
   --non-constant-id
       Make the resources ID non constant. This is required to make an R java class
       that does not contain the final value but is used to make reusable compiled
       libraries that need to access resources.
   --shared-lib
       Make a shared library resource package that can be loaded by an application
       at runtime to access the libraries resources. Implies --non-constant-id.
   --error-on-failed-insert
       Forces aapt to return an error if it fails to insert values into the manifest
       with --debug-mode, --min-sdk-version, --target-sdk-version --version-code
       and --version-name.
       Insertion typically fails if the manifest already defines the attribute.
   --error-on-missing-config-entry
       Forces aapt to return an error if it fails to find an entry for a configuration.
   --output-text-symbols
       Generates a text file containing the resource symbols of the R class in the
       specified folder.
   --ignore-assets
       Assets to be ignored. Default pattern is:
       !.svn:!.git:!.ds_store:!*.scc:.*:<dir>_*:!CVS:!thumbs.db:!picasa.ini:!*~
```
