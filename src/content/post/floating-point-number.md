---
title: Floating Point Number
description: Floating point number in computer is only an *approximation* of the
  actual value
created: 2023-03-18
tags:
  - comp/fundamental
  - learning
  - math
---

[IEEE 754-2008 revision - Wikiwand](https://www.wikiwand.com/en/IEEE_754-2008)
[Floating-point arithmetic - Wikiwand](https://www.wikiwand.com/en/Floating-point_arithmetic)
[Unit in the last place - Wikiwand](https://www.wikiwand.com/en/Unit_in_the_last_place) the spacing between two consecutive floating-point numbers

Since the number of segments between the power of twos are limited by the number of bits of the mantissa, this space will increase as the numbers increases.

[What Every Computer Scientist Should Know About Floating-Point Arithmetic](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)
[Tutorial: Floating-Point Binary](http://cstl-csm.semo.edu/xzhang/Class%20Folder/CS280/Workbook_HTML/FLOATING_tut.htm)
[Binary representation of the floating-point numbers | Trekhleb](https://trekhleb.dev/blog/2021/binary-floating-point/)

## Visualizers

[Float Exposed](https://float.exposed/0x00000000)
[IEEE-754 Floating Point representation explained](https://bartaz.github.io/ieee754-visualization/)
[IEEE-754 Floating Point Converter](https://h-schmidt.net/FloatConverter/IEEE754.html)

[Floating Point Numbers (Part1: Fp vs Fixed) - Computerphile - YouTube](https://www.youtube.com/watch?v=f4ekifyijIg)
[Floating Point Numbers - Computerphile - YouTube](https://www.youtube.com/watch?v=PZRI1IfStY0)

## Single-precision and Double-precision

[Single-precision floating-point format - Wikiwand](https://www.wikiwand.com/en/Single-precision_floating-point_format)

```
# protocol "Fraction:23,Exponent:8,S:1"
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                   Fraction                  |    Exponent   |S|
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Sign (S)
Exponent: −126 to +127 (binary - 127)

https://wikimedia.org/api/rest_v1/media/math/render/svg/908c155d6002beadf2df5a7c05e954ec2373ca16
{\displaystyle {\text{value}}=(-1)^{\text{sign}}\times 2^{(E-127)}\times \left(1+\sum _{i=1}^{23}b_{23-i}2^{-i}\right).}
```

[Double-precision floating-point format - Wikiwand](https://www.wikiwand.com/en/Double-precision_floating-point_format)

```
# protocol "Fraction:52,Exponent:11,S:1"
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                            Fraction                           |
+                                       +-+-+-+-+-+-+-+-+-+-+-+-+
|                                       |       Exponent      |S|
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
Sign (S)
Exponent: -1022 to +1023 (binary - 1023)

https://wikimedia.org/api/rest_v1/media/math/render/svg/5f677b27f52fcd521355049a560d53b5c01800e1
{\displaystyle (-1)^{\text{sign}}\left(1+\sum _{i=1}^{52}b_{52-i}2^{-i}\right)\times 2^{e-1023}}
```

## Inherent inaccuracy

In most languages,

```
0.1 + 0.2 - 0.3 == 5.551115123125783e-17
0.1 + 0.2 == 0.30000000000000004

double(2^53 + 1) == 2^53 == 9007199254740992
```

```python
biggy = pow(2, 53)
float(biggy+1) == float(biggy) + 1 == float(biggy) == biggy
```

```js
biggy = BigInt(Math.pow(2, 53));
((Number(biggy + BigInt(1)) == Number(biggy) + 1) == Number(biggy)) == biggy;
```

[Deciphering Glyph :: The Numbers, They Lie](https://blog.glyph.im/2019/10/the-numbers-they-lie.html)
[In Python, why does 8.5 - 8.4 give 0.099999999999999964? - Quora](https://www.quora.com/In-Python-why-does-8-5-8-4-give-0-099999999999999964)
[Why is 0.1+0.2 not equal to 0.3 in most programming languages? - Quora](https://www.quora.com/Why-is-0-1+0-2-not-equal-to-0-3-in-most-programming-languages)

```
.110011001100110011001101 (0.1, scaled, 24 bits rounded, exponent -3)
.100110011001100110011010 (sum result, scaled, 24 bits, exponent -1)
```

Python's `int` type will promote to `bignum` automatically
Python's `float` is double precision
JavaScript's `number` type will promote to double automatically
JavaScript has `bigint` primitive type

## Comparing floats

[Wait, so comparisons in floating point only just KINDA work? What DOES work? - YouTube](https://www.youtube.com/watch?v=Oo89kOv9pVk)

[The Right Way to Compare Floats in Python | by David Amos](https://davidamos.dev/the-right-way-to-compare-floats-in-python/)
[Comparing Floating Point Numbers, 2012 Edition | Random ASCII – tech blog of Bruce Dawson](https://randomascii.wordpress.com/2012/02/25/comparing-floating-point-numbers-2012-edition/)

```python
def isclose(a, b, rel_tol=1e-09, abs_tol=0.0):
    return abs(a-b) <= max(rel_tol * max(abs(a), abs(b)), abs_tol)
```

See [math.isclose()](https://docs.python.org/3/library/math.html#math.isclose) in Python
