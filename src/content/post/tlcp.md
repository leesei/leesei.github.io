---
title: Transport Layer Cryptography Protocol
description: "国密SSL"
created: 2026-02-12
tags:
  - security
  - ssl
  - tls
  - web
---

[TLCP检测仪 - 协议标准](https://tlcp.gmssl.cn/spec/tlcp.html)
[国家标准|GB/T 38636-2020](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=778097598DA2761E94A5FF3F77BD66DA) 传输层密码协议
[密码行业标准|GM/T 0024-2023](https://std.samr.gov.cn/hb/search/stdHBDetailed?id=1BF26B7AA003FD76E06397BE0A0A81D8) SSL VPN技术规范

[信息安全技术—传输层密码协议(TLCP)\_百度百科](https://baike.baidu.com/item/%E4%BF%A1%E6%81%AF%E5%AE%89%E5%85%A8%E6%8A%80%E6%9C%AF%E2%80%94%E4%BC%A0%E8%BE%93%E5%B1%82%E5%AF%86%E7%A0%81%E5%8D%8F%E8%AE%AE%28TLCP%29/53726701)
[TLCP协议介绍及握手流程解析-CSDN博客](https://blog.csdn.net/Billie_Eilishzzz/article/details/147700545)
[gotlcp/doc/AboutTLCP.md at main · Trisia/gotlcp](https://github.com/Trisia/gotlcp/blob/main/doc/AboutTLCP.md)

[TLCP的过去、现在与未来TLCP的过去、现在与未来 - 掘金](https://juejin.cn/post/6999517079229431839)
[构建网络信息安全的中国方案 - 国密SSL/TLCP协议介绍以及国密Nginx服务器部署-CSDN博客](https://blog.csdn.net/new9232/article/details/134562784)
[国密SSL协议是什么？与标准TLS协议的区别- 沃通SSL证书!](https://www.wosign.com/FAQ/faq_2019062501.htm)

[GMSSL - 国密SSL实验室](https://www.gmssl.cn/gmssl/index.jsp)
[GMCRT - 国密证书实验室](https://www.gmcrt.cn/gmcrt/index.jsp)

[TLCP检测仪 - 服务器](https://tlcp.gmssl.cn/)
[TLCP检测仪 - 浏览器](https://tlcp.gmssl.cn/scan/browser.jsp)

## Implementation

> [[crypto-shangmi#Implementation]]

[Go TLCP | gotlcp](https://trisia.github.io/gotlcp/)
[Trisia/gotlcp: Go语言实现的传输层密码协议(TLCP GMSSL)，TLCP协议遵循 GB/T 38636-2020 Information security technology Transport Layer Cryptography Protocol (TLCP)](https://github.com/Trisia/gotlcp)

## SM Cipher Suites for TLS 1.3

> related but different

[RFC 8998 - ShangMi (SM) Cipher Suites for TLS 1.3](https://datatracker.ietf.org/doc/html/rfc8998) SM2 for authentication, SM4 for encryption, and SM3 as the hash function
