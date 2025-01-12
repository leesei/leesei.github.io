---
title: Remote Desktop
description: ""
created: 2016-07-15
updated: 2025-01-09
tags:
  - app
---

[Best remote desktop software: From casual use to business deployment | PCWorld](https://www.pcworld.com/article/703570/best-remote-desktop-software-from-casual-use-to-business-deployment.html)

[NoMachine - Free Remote Desktop For Everybody](https://www.nomachine.com/)

[Virtual Network Computing - Wikiwand](https://www.wikiwand.com/en/Virtual_Network_Computing)
[TightVNC: VNC-Compatible Free Remote Control / Remote Desktop Software](http://www.tightvnc.com/)

[Remote Desktop Protocol - Wikiwand](https://www.wikiwand.com/en/Remote_Desktop_Protocol)
[Remmina | Remote Desktop Client for Linux](http://www.remmina.org/wp/)

[Chrome Remote Desktop](https://remotedesktop.google.com/)
[Chrome Remote Desktop](https://chromewebstore.google.com/detail/chrome-remote-desktop/inomeogfingihgjfjlpeplalcfajhgai)

[KasmVNC | Open-Source - Web-Native - Secure](https://www.kasmweb.com/kasmvnc)
Used by [LinuxServer.io](https://docs.linuxserver.io/) to create containerized GUI app, see [firefox](https://docs.linuxserver.io/images/docker-firefox/), [kali-linux](https://docs.linuxserver.io/images/docker-kali-linux/)

[XPipe](https://xpipe.io/)
[X-pipe - Open Source, Connection Hub for SSH, Powershell, Docker Container access, and so much more - YouTube](https://www.youtube.com/watch?v=wjd3E0EN2xk)

[DeskIn-Professional and Efficient Remote Desktop Software for Individual and Enterprise](https://www.deskin.io/) low latency

[NoMachine - Free Remote Desktop for Everybody](https://www.nomachine.com/)

[The Fast Remote Desktop Application – AnyDesk](https://anydesk.com/en)
[免費在家工作神器 Anydesk 電腦遠端操作 取代 TeamViewer 遠離封鎖 - YouTube](https://www.youtube.com/watch?v=L4TrssM3KpE)

[向日葵远程控制软件*远程控制电脑手机*远程桌面连接\_远程办公|游戏|运维-贝锐向日葵官网](https://sunlogin.oray.com/)

### Guacamole

[Apache Guacamole™](https://guacamole.apache.org/) clientless remote desktop gateway
[access EVERYTHING from your web browser!! (Linux and Windows Desktop, SSH) // Guacamole Install - YouTube](https://www.youtube.com/watch?v=gsvS2M5knOw)
[Guacamole Remote Desktop - Open Source, Self Hosted remote access to your machines in the browser! - YouTube](https://www.youtube.com/watch?v=DGw6P5Lkj-U)

### RustDesk

[RustDesk | The best open source remote desktop software.](https://rustdesk.com/)
[rustdesk/rustdesk: Yet another remote desktop software](https://github.com/rustdesk/rustdesk)

[RustDesk 源码阅读 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1897847)

[dinger1986/rustdeskinstall: Easy install Script for Rustdesk](https://github.com/dinger1986/rustdeskinstall)
[Self-host :: Documentation for RustDesk](https://rustdesk.com/docs/en/self-host/)
[rustdesk-server/docker-compose.yml at master · rustdesk/rustdesk-server · GitHub](https://github.com/rustdesk/rustdesk-server/blob/master/docker-compose.yml) add `-k _` to command

```sh
ufw allow 21115:21119/tcp comment "rustdesk"
ufw allow 21116/udp comment "rustdesk"
ufw reload

docker compose up -d

# is this the same as `./data/id_ed25519`?
ssh-keygen -t ed25519 -C rustdesk -f ./id_ed25519
cat ./data/id_ed25519.pub
```

### ThinLinc

[Linux Remote Desktop based on open-source | ThinLinc by Cendio](https://www.cendio.com/)
[I forced EVERYONE to use Linux - YouTube](https://www.youtube.com/watch?v=qdo5lMR1lX4)
[Resources for Installing ThinLinc](https://academy.networkchuck.com/blog/ThinLincResources)

### RPort

[RPort is free remote access & remote management](https://rport.io/)
[RPort - an open source, self hosted Remote Machine Management System running on Linux! - YouTube](https://www.youtube.com/watch?v=Xc_5qE7ZyYA)

## XDMCP

[XDMCP - ArchWiki](https://wiki.archlinux.org/title/XDMCP) ssh tunnel for X traffic is preferred
[Linux XDMCP HOWTO](https://tldp.org/HOWTO/html_single/XDMCP-HOWTO/)
[鸟哥的 Linux 私房菜 -- 远程联机服务器 SSH/XDMCP/VNC/RDP](http://cn.linux.vbird.org/linux_server/0310telnetssh_3.php)
