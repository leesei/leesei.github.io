---
title: Cryptography
description: ""
created: 2016-01-21
tags:
  - crypto
  - cryptography
  - security
---

[[enigma-machine]]

[A Crash Course in Everything Cryptographic – Noteworthy - The Journal Blog](https://blog.usejournal.com/a-crash-course-in-everything-cryptographic-50daa0fda482) ❗!important
[Crypto 101](https://www.crypto101.io/)

[Journey into cryptography | Computer science | Computing | Khan Academy](https://www.khanacademy.org/computing/computer-science/cryptography)
[Cryptography I | Coursera](https://www.coursera.org/learn/crypto)
[The Cryptopals Crypto Challenges](http://cryptopals.com/)
[7 Cryptography Concepts EVERY Developer Should Know - YouTube](https://www.youtube.com/watch?v=NuyzuNBFWxQ)

In cryptography, these entities are usually used:

- Alice, Bob, Charles, Douglas: authentic users
- Eve: eavesdropper
- Mallory: MITM attacker
- Satan: malicious user/hacker

## Algorithms

Bit security measures the number of trials required to brute-force a key. 128 bit security means 2128 trials to break.

[Cryptographic nonce - Wikiwand](http://www.wikiwand.com/en/Cryptographic_nonce)
[Comparison of cryptography libraries - Wikiwand](https://www.wikiwand.com/en/Comparison_of_cryptography_libraries)

[cryptography - Do any security experts recommend bcrypt for password storage? - Information Security Stack Exchange](http://security.stackexchange.com/questions/4781/do-any-security-experts-recommend-bcrypt-for-password-storage)
[BCrypt Explained - DEV Community 👩‍💻👨‍💻](https://dev.to/sylviapap/bcrypt-explained-4k5c)

[Bcrypt, a Popular Password Hashing Algorithm, Starts Its Long Goodbye | WIRED](https://www.wired.com/story/bcrypt-password-hashing-25-years/)

[Computer and Network Security by Avi Kak](https://engineering.purdue.edu/kak/compsec/)

[lukeed/salteen: A snappy and lightweight (259B) utility to encrypt and decrypt values with salt.](https://github.com/lukeed/salteen)

### Authenticity

[Message authentication code - Wikiwand](http://www.wikiwand.com/en/Message_authentication_code) MAC
[Hash-based message authentication code - Wikiwand](http://www.wikiwand.com/en/Hash-based_message_authentication_code) HMAC, hash with secret key
[Moxie Marlinspike >> Blog >> The Cryptographic Doom Principle](http://www.thoughtcrime.org/blog/the-cryptographic-doom-principle/) Encrypt-then-MAC

[Securing Stream Ciphers (HMAC) - Computerphile - YouTube](https://www.youtube.com/watch?v=wlSG3pEiQdc)
[SHA: Secure Hashing Algorithm - Computerphile - YouTube](https://www.youtube.com/watch?v=DMtFhACPnTY)

Public Key Cryptography:
Digital Signatures: encrypt a known data(nounce or message hash) with sender's private key
Certificate Authorities: a trusted third party that will digitally sign and publish the public key bound to a user or entity

### Storing password

[How To Safely Store A Password | codahale.com](https://codahale.com/how-to-safely-store-a-password/) `bcrypt`
[Secure Salted Password Hashing - How to do it Properly](https://crackstation.net/hashing-security.htm)
[The difference between Encryption, Hashing and Salting](https://www.thesslstore.com/blog/difference-encryption-hashing-salting/)

[Serious Security: How to store your users’ passwords safely – Naked Security](https://nakedsecurity.sophos.com/2013/11/20/serious-security-how-to-store-your-users-passwords-safely/)
[How Dropbox securely stores your passwords | Dropbox Tech Blog](https://blogs.dropbox.com/tech/2016/09/how-dropbox-securely-stores-your-passwords/)

[scrypt - Wikiwand](https://www.wikiwand.com/en/Scrypt)
[bcrypt - Wikiwand](https://www.wikiwand.com/en/Bcrypt)
[Salt (cryptography) - Wikiwand](<https://www.wikiwand.com/en/Salt_(cryptography)>)

[PBKDF2 - Wikiwand](https://www.wikiwand.com/en/PBKDF2)
[PBKDF2 Hashing Algorithm. Before moving into the PBKDF2 hashing… | by Nishothan Vettivel | Medium](https://nishothan-17.medium.com/pbkdf2-hashing-algorithm-841d5cc9178d)
[https://www.ietf.org/rfc/rfc2898.txt](https://www.ietf.org/rfc/rfc2898.txt)

[Argon2 - Wikiwand](https://www.wikiwand.com/en/Argon2)
[P-H-C/phc-winner-argon2: The password hash Argon2, winner of PHC](https://github.com/P-H-C/phc-winner-argon2)
[How to enable Argon2 KDF in Bitwarden - gHacks Tech News](https://www.ghacks.net/2023/02/15/bitwarden-password-manager-introduces-support-for-argon2-kdf-iterations/)

## Implementation

[[openssl]]

[The Linux Crypto API for user applications](https://blog.cloudflare.com/the-linux-crypto-api-for-user-applications/)
This is slower than OpenSSL

[AES instruction set - Wikiwand](https://www.wikiwand.com/en/AES_instruction_set)

## Key Exchange

[End to End Encryption (E2EE) - Computerphile - YouTube](https://www.youtube.com/watch?v=jkV1KEJGKRA)
[How Signal Instant Messaging Protocol Works (& WhatsApp etc) - Computerphile - YouTube](https://www.youtube.com/watch?v=DXv1boalsDI)

[Secret Key Exchange (Diffie-Hellman) - Computerphile - YouTube](https://www.youtube.com/watch?v=NmM9HA2MQGI)
[Diffie Hellman -the Mathematics bit- Computerphile - YouTube](https://www.youtube.com/watch?v=Yjrfm_oRO0w)
[Key Exchange Problems - Computerphile - YouTube](https://www.youtube.com/watch?v=vsXMMT2CqqE)
[Double Ratchet Messaging Encryption - Computerphile - YouTube](https://www.youtube.com/watch?v=9sO2qdTci-s)

## Block Ciphers

> contrast "stream ciphers", where encrypted strings are the same length as the plaintext

[Symmetric-key algorithm - Wikiwand](https://www.wikiwand.com/en/Symmetric-key_algorithm)

[Lecture3 Lecture 3: Block Ciphers and the Data Encryption Standard](https://engineering.purdue.edu/kak/compsec/NewLectures/Lecture3.pdf)

[Anatomy of a password disaster – Adobe’s giant-sized cryptographic blunder – Naked Security](https://nakedsecurity.sophos.com/2013/11/04/anatomy-of-a-password-disaster-adobes-giant-sized-cryptographic-blunder/) study of Adobe's leaked password database

[Feistel Cipher - Computerphile - YouTube](https://www.youtube.com/watch?v=FGhj3CGxl8I)

### Modes of operation

[Block cipher mode of operation - Wikiwand](https://www.wikiwand.com/en/Block_cipher_mode_of_operation)

Block ciphers, as the name suggests, encrypts blocks. The methods of segmenting data into blocks is called "modes of operation".

[Modes of Operation - Computerphile - YouTube](https://www.youtube.com/watch?v=Rk0NIQfEXBA)
**ECB**: simply divides a message into 16 byte blocks, preserves pattern (for experts only: ECB should never be used except in some very specific cases)
**CBC**: first block XORed with Initialization Vector (IV) (nonce), every other block XORed with the ciphertext of the block preceding it; however this introduces dependency on previous block and encryption cannot be parallelized
**CTR**: uses counter and nounce (similar to IV) per block to allow each block to be encrypted concurrently

[Authenticated encryption - Wikiwand](https://www.wikiwand.com/en/Authenticated_encryption) protects against chosen ciphertext attack on decryption oracle
[Authenticated Encryption in .NET with AES-GCM](https://www.scottbrady91.com/c-sharp/aes-gcm-dotnet)

### AES

[Advanced Encryption Standard - Wikiwand](https://www.wikiwand.com/en/Advanced_Encryption_Standard)
[Lecture 8: AES: The Advanced Encryption Standard](https://engineering.purdue.edu/kak/compsec/NewLectures/Lecture8.pdf)
[Protect your TCP tunnel by implementing AES encryption with Python [Tutorial] | Packt Hub](https://hub.packtpub.com/protect-tcp-tunnel-implementing-aes-encryption-with-python/)

[Crypto competitions: AES: the Advanced Encryption Standard](http://competitions.cr.yp.to/aes.html)
[AES Explained (Advanced Encryption Standard) - Computerphile - YouTube](https://www.youtube.com/watch?v=O4xNJsjtN6E)
[One Encryption Standard to Rule Them All! - Computerphile - YouTube](https://www.youtube.com/watch?v=VYech-c5Dic)
[Almost All Web Encryption Works Like This (SP Networks) - Computerphile - YouTube](https://www.youtube.com/watch?v=DLjzI5dX8jc)

### DES

Even Triple DES (3-DES) is not recommended

### Commands

[opessl](https://askubuntu.com/a/60713) openssl is for proof of concept

```sh
man enc  # show ciphers

# encryption
openssl aes-256-cbc -in attack-plan.txt -out message.enc

# decryption
openssl aes-256-cbc -d -in message.enc -out plain-text.txt
```

[gpg](https://askubuntu.com/a/449647)

```sh
# encryption
gpg --cipher-algo AES256 --symmetric filename.tar.gz

# decryption
gpg --output filename.tar.gz --decrypt filename.tar.gz.gpg
```

[AES Crypt](https://www.aescrypt.com/download/)
[aescrypt](https://askubuntu.com/a/60875)

## Public Key Cryptography

[Public-key cryptography - Wikiwand](http://www.wikiwand.com/en/Public-key_cryptography)
Public Key crypto simply works with numbers. This means that any messages would have to be converted into a number before being encrypted.

### RSA

[RSA (cryptosystem) - Wikiwand](<https://www.wikiwand.com/en/RSA_(cryptosystem)>)
[How does RSA work? – Hacker Noon](https://hackernoon.com/how-does-rsa-work-f44918df914b)

[The RSA Encryption Algorithm (1 of 2: Computing an Example) - YouTube](https://www.youtube.com/watch?v=4zahvcJ9glg)
[The RSA Encryption Algorithm (2 of 2: Generating the Keys) - YouTube](https://www.youtube.com/watch?v=oOcTVTpUsPQ)

[Pretty Good Privacy (PGP) and Digital Signatures | Linux Journal](https://www.linuxjournal.com/content/pretty-good-privacy-pgp-and-digital-signatures)

### age

[FiloSottile/age: A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability.](https://github.com/FiloSottile/age)

## Attribute-Based Encryption

[A Gentle Introduction to Attribute-Based Encryption](https://medium.com/@dbkats/a-gentle-introduction-to-attribute-based-encryption-edca31744ac6)

## Steganography

[Steganography - Wikiwand](https://www.wikiwand.com/en/Steganography)

[StegCloak](https://stegcloak.surge.sh/)
[KuroLabs/stegcloak: Hide secrets with invisible characters in plain text securely using passwords 🧙🏻‍♂️⭐](https://github.com/KuroLabs/stegcloak)
[How to Hide Secrets in Strings— Modern Text hiding in JavaScript | by Mohan Sundar | Bits and Pieces](https://blog.bitsrc.io/how-to-hide-secrets-in-strings-modern-text-hiding-in-javascript-613a9faa5787)

### Homograph

[Faux Cyrillic - Wikiwand](https://www.wikiwand.com/en/Faux_Cyrillic)
[IDN homograph attack - Wikiwand](https://www.wikiwand.com/en/IDN_homograph_attack)

## Zero-knowledge proof

[Zero-knowledge proof - Wikiwand](https://www.wikiwand.com/en/Zero-knowledge_proof)
把問題和答案的關聯轉變成機率問題
透過趨近無窮次的試驗，使猜對的機率趨近 0

[Zero-Knowledge Proof (ZKP) — Explained | Chainlink](https://blog.chain.link/what-is-a-zero-knowledge-proof-zkp/)
[Zero-knowledge proofs explained in 3 examples](https://www.circularise.com/blogs/zero-knowledge-proofs-explained-in-3-examples)
[神奇的零知识证明！既能保守秘密，又让别人信你！ - YouTube](https://www.youtube.com/watch?v=FuKEpOhiVPg)
