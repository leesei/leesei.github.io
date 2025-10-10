---
title: Shangmi
description: A suite of authentication, encryption, and hash algorithms from the People's Republic of China.
created: 2025-02-20
updated: 2025-07-07
tags:
  - crypto
  - cryptography
  - security
  - shangmi
---

[PKI - 一文读懂SM1、SM2、SM3、SM4等国密算法-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2421525)
国密即国家商用密码管理办公室认定的国产密码算法。主要有SM1，SM2，SM3，SM4。密钥长度和分组长度均为128位。
国密算法是指国家密码管理局认定的一系列国产密码算法，包括SM1-SM9以及ZUC等。其中

- SM1、SM4、SM5、SM6、SM7、SM8、ZUC等属于对称密码
- SM2、SM9等属于公钥密码 (非对称加密)
- SM3属于单向散列函数

其中SM1、SM7算法不公开，调用该算法时，需要通过加密芯片的接口进行调用

## Standard

[商用密码标准研究院](https://www.niccs.org.cn/) PQC
[中国商用密码算法标准概况----商用密码标准研究院](https://www.niccs.org.cn/tzgg/202503/t20250314_484777.html)

[标准规范查询\_国家商用密码管理办公室](https://www.oscca.gov.cn/app-zxfw/zxfw/bzgfcx.jsp)

[国家标准全文阅读|标准检索](https://openstd.samr.gov.cn/bzgk/gb/std_list?p.p1=0&p.p90=circulation_date&p.p91=desc&p.p2=15843) GB/T 15843 Entity authentication
[国家标准|GB/T 15843.2-2017](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=B66B686C5FFDA6C6F1DA03FB832B9EFB) symmetric encryption
[国家标准|GB/T 15843.2-2024](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=44E4F346D0EFFAB85080C2C159AE5CFC) authenticated encryption
[国家标准|GB/T 15843.3-2023](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=865E7FB3C0272066308DB6139BEADBD2) digital signature
[国家标准|GB/T 15843.4-2024](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=2545231D229CB1E9082350F76959B029) cryptographic check
[国家标准|GB/T 15843.5-2005](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=DEEBE1FC8307D3585C0ADE61DC712731) zero knowledge techniques

[国家标准全文阅读|标准检索](https://openstd.samr.gov.cn/bzgk/gb/std_list?p.p1=0&p.p90=circulation_date&p.p91=desc&p.p2=15852) GB/T 15852 Message authentication codes (MACs)
[国家标准|GB/T 15852.2-2024](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=2CE2B006D80BF9D3EE2BAC4CB80C03FB) dedicated hash-function
[国家标准|GB/T 15852.3-2019](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=FFA0FFF9CF75B3F88FFA437D75334745) universal hash-function

[国家标准全文阅读|标准检索](https://openstd.samr.gov.cn/bzgk/gb/std_list?p.p1=0&p.p90=circulation_date&p.p91=desc&p.p2=18238) GB/T 18238 Hash-functions
[国家标准|GB/T 18238.2-2024](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=E1F6984DC836072596990A77DD601590) Hash-functions using a block cipher
[国家标准|GB/T 18238.3-2024](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=32ACFBC48508F86581B476169B1CD1B8) dedicated hash-function

## Implementation

### OpenSSL

> OpenSSL added SM2, SM3, SM4 support since 1.1.1i in 2018

[OpenSSL 1.1.1 新特性: 全面支持国密SM2/SM3/SM4加密算法\_openssl实现的sm3杂凑实例代码-CSDN博客](https://blog.csdn.net/hbcbgcx/article/details/88900129)
[算法库 | openEuler文档 | openEuler社区 | v22.09](https://docs.openeuler.org/zh/docs/22.09/docs/ShangMi/%E7%AE%97%E6%B3%95%E5%BA%93.html)
[OpenSSL 命令行 SM2 SM3操作 - 天行常](https://const.net.cn/27.html)

### GMSSL

> probably obsolete

[The GmSSL Project](http://gmssl.org/)
[guanzhi/GmSSL: 支持国密SM2/SM3/SM4/SM9/SSL的密码工具箱](https://github.com/guanzhi/GmSSL)

## ShangMi SM2

> asymmetric cipher based on ECC

- SM2 Cryptography Algorithm: A public key crypto scheme based on elliptic curves. An overview of the specification, in Chinese, can be found in [GM/T 0009-2012](http://www.gmbz.org.cn/main/viewfile/2018011001400692565.html).

- Additional specifications can be found in:
  - [GB/T 32918](https://openstd.samr.gov.cn/bzgk/gb/std_list?p.p1=0&p.p90=circulation_date&p.p91=desc&p.p2=GB/T%2032918)
  - [GB/T 32918.1-2016](https://www.chinesestandard.net/PDF/English.aspx/GBT32918.1-2016), Part 1: General
  - [GB/T 32918.2-2016](http://www.gmbz.org.cn/upload/2018-07-24/1532401673138056311.pdf), Part 2: Digital signature algorithm
  - [GB/T 32918.3-2016](https://www.chinesestandard.net/PDF/English.aspx/GBT32918.3-2016), Part 3: Key exchange protocol
  - [GB/T 32918.4-2016](https://www.chinesestandard.net/PDF/English.aspx/GBT32918.4-2016), Part 4: Public key encryption algorithm
  - [GB/T 32918.5-2017](http://www.gmbz.org.cn/upload/2018-07-24/1532401863206085511.pdf), Part 5: Parameter definition

[Performance Evaluation and Comparison of Standard Cryptographic Algorithms and Chinese Cryptographic Algorithms](https://bth.diva-portal.org/smash/record.jsf?pid=diva2%3A1332244&dswid=-5123)
[On the Design and Performance of Chinese OSCCA-approved Cryptographic Algorithms](https://bth.diva-portal.org/smash/get/diva2:1444129/FULLTEXT01.pdf) PDF

## ShangMi SM3

SM3 Cryptographic Hash Algorithm: A hash algorithm operating on 512-bit blocks to produce a 256-bit hash value.

[国家标准|GB/T 32905-2016](https://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=45B1A67F20F3BF339211C391E9278F5E)
[GB/T 32905-2016](http://www.gmbz.org.cn/upload/2018-07-24/1532401392982079739.pdf)

## ShangMi SM4

> symmetric cipher

[SM4 (cipher) - Wikiwand](<https://www.wikiwand.com/en/articles/SM4_(cipher)>)

SM4 Block Cipher Algorithm: A Feistel block cipher algorithm with a block length and key length of 128 bits, and 32 rounds. Described in [GB/T 32907-2016](http://www.gmbz.org.cn/upload/2018-04-04/1522788048733065051.pdf).
