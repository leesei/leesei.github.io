---
title: Arduino
description: ""
created: 2018-09-12
updated: 2025-07-08
tags:
  - arduino
  - iot
  - maker
---

[You can learn Arduino in 15 minutes. - YouTube](https://www.youtube.com/watch?v=nL34zDTPkcs) Arduino is the board and the IDE/Platform, which supports many MCUs

[Arduino - Wikiwand](https://www.wikiwand.com/en/Arduino)
[Arduino UNO FAQ | Arduino Tips, Tricks, and Techniques | Adafruit Learning System](https://learn.adafruit.com/arduino-tips-tricks-and-techniques?view=all)

[Is the Arduino Right for Your Project? | Arduino | Maker Pro](https://maker.pro/arduino/tutorial/is-the-arduino-right-for-your-project)
[Arduino Basics 101: Hardware Overview, Fundamental Code Commands - YouTube](https://www.youtube.com/watch?v=BtLwoNJ6klE)
[Picking the Right Arduino – Hackster Blog](https://blog.hackster.io/picking-the-right-arduino-341a0a9550c7)

[Arduino - Getting Started](https://www.arduino.cc/en/Guide/HomePage)
[Arduino - Tutorials](https://www.arduino.cc/en/Tutorial/HomePage)
[Arduino - Foundations](https://www.arduino.cc/en/Tutorial/Foundations)
[Arduino Reference](https://www.arduino.cc/reference/en/)

[Arduino to Go | Introduction to the Arduino and Physical Computing](http://arduinotogo.com/)
[Adafruit Learning System](https://learn.adafruit.com/category/learn-arduino?view=all) all
[Adafruit Learning System](https://learn.adafruit.com/series/ladyadas-learn-arduino?view=all) !important, lady ada
[Adafruit Learning System](https://learn.adafruit.com/series/learn-arduino) !important, simon monk
[Free Online Arduino Class](https://www.instructables.com/class/Arduino-Class/)
[Arduino Tutorials | Maker Pro](https://maker.pro/arduino/tutorial)
[Arduino 101 » Linux Magazine](http://www.linux-magazine.com/Online/Features/Arduino-101)

[Arduino Resources](http://robodino.org/resources/arduino)
[AVR Tutorial](http://ladyada.net/learn/avr/index.html)
[AVRbeginners.net - Your AVR starting point!](http://www.avrbeginners.net/)
[AvrFreaks | Atmel Community](https://www.avrfreaks.net/)
[Tracing the Origins of Arduino: Part 1: The AVR... | element14 | Arduino Tutorials](https://www.element14.com/community/docs/DOC-88981/l/tracing-the-origins-of-arduino-part-1-the-avr-microcontroller)

[Arduino Mini Course Access | Random Nerd Tutorials](https://randomnerdtutorials.com/arduino-mini-course-access/)
[Arduino Mini Course - YouTube](https://www.youtube.com/playlist?list=PLeJ_Vi9u6Kitus0uCM-Fb3bIYumS8XFRg)

[Arduino MASTERCLASS | Full Programming Workshop in 90 Minutes! - YouTube](https://www.youtube.com/watch?v=BLrHTHUjPuw) beginner

[Why Arduino is not the right educational tool | Hack van de dam](http://www.hackvandedam.nl/blog/?p=762)
[5 Myths Everyone Believes about Arduino (that aren't true) - Bald Engineer](https://www.baldengineer.com/5-arduino-myths.html)

[Arduino Discovery Zone | Robots Got Talents](https://www.robotsgottalents.com/arduino-lessons)
[tableflip/nodebot-workshop: A nodeschool workshop on how to get your ardunio alive with johnny-five](https://github.com/tableflip/nodebot-workshop)

## Trademark lawsuit

[Arduino v. Arduino | Hackaday](https://hackaday.com/2015/02/25/arduino-v-arduino/)
[Arduino v Arduino: Part II | Hackaday](https://hackaday.com/2015/03/12/arduino-v-arduino-part-ii/)
[Arduino vs. Arduino: Musto Out, Banzi In | Hackaday](https://hackaday.com/2017/07/28/arduino-vs-arduino-musto-out-banzi-in/)

## AVR gcc

[Programming AVR microcontrollers in Linux | isamert.net](https://isamert.net/2017/12/22/programming-avr-microcontrollers-in-linux.html)

- `avr-gcc` GNU C compiler for AVR architecture
- `avr-libc` AVR libraries
- `avr-binutils` Some AVR tools, we need it to create hex files from compiled programs, because `avrdude` needs a hex file instead of a binary to flash. -` avrdude` A dude that is required to perform flashing

```sh
# compile for atmega32
avr-gcc main.c -Os -Wall -mmcu=atmega32 -o main_bin
# convert bin to hex
avr-objcopy -j .text -j .data -O ihex main_bin "main.hex"
# flash to device
avrdude -c usbasp -p m32 -U flash:w:"main.hex"
```

[avrdude: driver program for ``simple'' Atmel AVR MCU programmer | avrdude Commands | Man Pages | ManKier](https://www.mankier.com/1/avrdude)

## Libraries

[[electronic-components]]

[Arduino Libraries | All About Arduino Libraries | Adafruit Learning System](https://learn.adafruit.com/adafruit-all-about-arduino-libraries-install-use?view=all)
[Libraries | Arduino Documentation](https://docs.arduino.cc/libraries/)
[Arduino Library List - Arduino Libraries](https://www.arduinolibraries.info/)

Generic libraries not related to particular hardware

[piconomix/px-fwlib: open source bare-metal C firmware and documentation for microcontrollers](https://github.com/piconomix/px-fwlib) CLI interface to pins
[SpacehuhnTech/SimpleCLI: Command Line Interface Library for Arduino](https://github.com/SpacehuhnTech/SimpleCLI)

[avdweb_AnalogReadFast | Arduino Documentation](https://docs.arduino.cc/libraries/avdweb_analogreadfast/)
[Fast analogRead 10/12 bit ADC for the Arduino Zero and Uno](https://avdweb.nl/arduino/adc-dac/fast-10-bit-adc)

### USB HID

[Keyboard | Arduino Documentation](https://docs.arduino.cc/language-reference/en/functions/usb/Keyboard/)
[Mouse | Arduino Documentation](https://docs.arduino.cc/language-reference/en/functions/usb/Mouse/)

[NicoHood/HID: Bring enhanced HID functions to your Arduino!](https://github.com/NicoHood/HID)

## Choosing Arduino Board

[Arduino Buying Guide 2017: Shawn's Picks - YouTube](https://www.youtube.com/watch?v=zJJkNJWWcIU)
[Choosing an Arduino for Your Project - learn.sparkfun.com](https://learn.sparkfun.com/tutorials/choosing-an-arduino-for-your-project)
[Adafruit Learning System](https://learn.adafruit.com/assets/6316?view=all) comparison
[Standard Arduino Comparison Guide - SparkFun Electronics](https://www.sparkfun.com/standard_arduino_comparison_guide)
[SparkFun Arduino Comparison Guide - YouTube](https://www.youtube.com/watch?v=hjRSwBcLcSU)
[Arduino - Products](https://www.arduino.cc/en/Main/Products)
[如何購買 Arduino ？( STEM project ) | Mister Ngan](http://www.misterngan.com/2171/where-to-buy-arduino-for-stem/)
[Arduino Boards Are Getting Cuter (and Cheaper)](https://amp.tomshardware.com/news/arduino-nano-boards-specs-every-iot-ble-sense,39371.html)

[What are the differences between Arduino UNO and Leonardo ? - Speeli Summary](http://www.speeli.com/articles/view/What-are-the-differences-between-Arduino-UNO-and-Leonardo)
[Dr. Monk's DIY Electronics Blog: Arduino Leonardo vs. Arduino Uno](http://www.doctormonk.com/2012/10/arduino-leonardo-vs-arduino-uno.html)

[Designing the World’s Smallest Arduino! - The Startup - Medium](https://medium.com/swlh/designing-the-worlds-smallest-arduino-f0606934d6ac)

[Arduino Uno Rev3](https://store.arduino.cc/usa/arduino-uno-rev3)
ATMega328P, 53.4x68.6mm
14 GPIO (6 PWM output, 6 ADC input, 1 12C, 1 SPI)
16MHz@5V
32kB flash, 2kB RAM
[Arduino Micro](https://store.arduino.cc/usa/arduino-micro)
ATmega32U4, 18x48mm, built-in USB support, can act as HID
20 GPIO (7 PWM output, 12 ADC input, 1 12C, 1 SPI)
32kB flash, 2.5kB RAM
16MHz@5V/8Mhz@3.3V
[Arduino Nano](https://store.arduino.cc/usa/arduino-nano)
ATMega328P, 18x45mm
22 GPIO (6 PWN output, 8 ADC input, 1 12C, 1 SPI)
[Arduino Leonardo with Headers](https://store.arduino.cc/usa/leonardo)
ATmega32U4, 53.4x68.6mm, built-in USB support, can act as HID
20 GPIO (7 PWM output, 12 ADC input, 1 12C, 1 SPI)
32kB flash, 2.5kB RAM
16MHz@5V/8Mhz@3.3V

10-bit ADC
8-bit 62.5kHz PWM
2 interrupts

[Basics: AVR Target Boards and Arduino Compatibility | Evil Mad Scientist Laboratories](https://www.evilmadscientist.com/2014/basics-avr-arduino/)

### ATtiny85

Digispark/ATTiny86

[Why a Digispark should not be your first Arduino. - YouTube](https://www.youtube.com/watch?v=Gg2nM0OdUtQ)

[ATtiny85 | Microchip Technology](https://www.microchip.com/en-us/product/ATtiny85)

[High-Low Tech – Programming an ATtiny w/ Arduino 1.6 (or 1.0)](http://highlowtech.org/?p=1695)
[How to use Atmel ATtiny85 with Arduino || Arduino tutorial - YouTube](https://www.youtube.com/watch?v=gff_Jxfqcio)

[digispark:tutorials:connecting [Digistump Wiki]](http://digistump.com/wiki/digispark/tutorials/connecting)
[Installing Drivers and Programming the DigiSpark ATtiny85 dev boards - Tutorial - YouTube](https://www.youtube.com/watch?v=MmDBvgrYGZs) !important
[Digispark Attiny 85 With Arduino IDE: 3 Steps](https://www.instructables.com/Digispark-Attiny-85-With-Arduino-IDE/)

[How Do You Power the Digispark?](https://digistump.com/board/index.php?topic=16.0)
[digispark:tricks [Digistump Wiki]](https://digistump.com/wiki/digispark/tricks)

[ATtiny85 Board First Look and Review | Install Drivers & Use with Arduino IDE - YouTube](https://www.youtube.com/watch?v=vPRpT_7rQNo)
[ATtiny85 Arduino Getting Started Tutorial, The Smallest Arduino](https://www.electroniclinic.com/attiny85-arduino-getting-started-tutorial-the-smallest-arduino/)

### ATMega32U4

> ATMega32U4 can be used as an USB HID device

[ATmega32U4 | Microchip Technology](https://www.microchip.com/en-us/product/ATmega32U4)

[How To Make DIY Keyboard With ATMEGA32U4 Dev Board |From ICStation.com - YouTube](https://www.youtube.com/watch?v=peyG24r4sjA)
[Keyboard demo - Pastebin.com](https://pastebin.com/diTfkUh7)

[How To Turn An Arduino Into A USB Keyboard Or Mouse! | ATMega32U4 - YouTube](https://www.youtube.com/watch?v=yTc2GLXfCOY)
[SimpleElectronicsYT/HID-EXAMPLE: the example that goes with the HID Keyboard video](https://github.com/SimpleElectronicsYT/HID-EXAMPLE)

## ADC

[Discovering Arduino capabilities in Analog/Digital Conversion (part1) | Open Electronics](https://www.open-electronics.org/discovering-arduino-capabilities-in-analog-digital-conversion/)
[Arduino and ADC (part2) | Open Electronics](https://www.open-electronics.org/arduino-and-adc/)
[Arduino and ADC (part3) | Open Electronics](https://www.open-electronics.org/arduino-and-adc-part3/)

## Timers/Interrupts

[Gammon Forum : Electronics : Microprocessors : Interrupts](https://gammon.com.au/interrupts)

- Timer0 - used for millis(), micros(), delay() and PWM on pins 5 & 6
- Timer1 - used for Servos, the WaveHC library and PWM on pins 9 & 10
- Timer2 - used by Tone and PWM on pins 11 & 13

[Overview | Multi-tasking the Arduino - Part 1 | Adafruit Learning System](https://learn.adafruit.com/multi-tasking-the-arduino-part-1?view=all) ditch delay, polling timer
[Overview | Multi-tasking the Arduino - Part 2 | Adafruit Learning System](https://learn.adafruit.com/multi-tasking-the-arduino-part-2?view=all) interrupts, state machine
[Overview | Multi-tasking the Arduino - Part 3 | Adafruit Learning System](https://learn.adafruit.com/multi-tasking-the-arduino-part-3?view=all) ditch loops, neopixel, state machine

[TimerOne & TimerThree Arduino Libraries](https://www.pjrc.com/teensy/td_libs_TimerOne.html)

[10 Buttons Using 1 Interrupt - Hackster.io](https://www.hackster.io/Svizel_pritula/10-buttons-using-1-interrupt-2bd1f8) no library needed

[NicoHood/PinChangeInterrupt: A simple & compact PinChangeInterrupt library for Arduino](https://github.com/NicoHood/PinChangeInterrupt)

[GreyGnome/EnableInterrupt: New Arduino interrupt library, designed for Arduino Uno/Mega 2560/Leonardo/Due](https://github.com/GreyGnome/EnableInterrupt)
[GreyGnome/PinChangeInt: Pin Change Interrupt library for the Arduino](https://github.com/GreyGnome/PinChangeInt) obsolete
[Arduino Playground - PinChangeInt](https://playground.arduino.cc/Main/PinChangeInt/)
[How to have unlimited interrupt Pins on your Arduino – Brainy-Bits](https://www.brainy-bits.com/make-any-arduino-pin-an-interrupt-pin/)

[Level Up Your Arduino Code: Timer Interrupts - YouTube](https://www.youtube.com/watch?v=2kr5A350H7E)
[Level Up Your Arduino Code: External Interrupts - YouTube](https://www.youtube.com/watch?v=J61_PKyWjxU)

[#328 ESP32 Secrets: Interrupts, and Deep-Sleep under the Hood - YouTube](https://www.youtube.com/watch?v=CJhWlfkf-5M)

## PWM

[Arduino - SecretsOfArduinoPWM](https://www.arduino.cc/en/Tutorial/SecretsOfArduinoPWM)
[Arduino Playground - TimerPWMCheatsheet](https://playground.arduino.cc/Main/TimerPWMCheatsheet/)

[ATtiny85 PWM Primer Tutorial Using Arduino](https://www.electroschematics.com/14089/attiny85-pwm-primer-tutorial-using-arduino/)

## Events

[johnnyb/Eventually: A library for event-based programming to make Arduino programming more fun and intuitive](https://github.com/johnnyb/Eventually)
[Arduino Event-Based Programming - YouTube](https://www.youtube.com/watch?v=QvQAl-zbiCI)

[Home · tinkerspy/Automaton Wiki](https://github.com/tinkerspy/Automaton/wiki)

## Low Power

[Arduino Playground - ArduinoSleepCode](http://playground.arduino.cc/Learning/arduinoSleepCode)

[Arduino Low Power - How To Run ATmega328P For a Year On Coin Cell Battery](http://www.home-automation-community.com/arduino-low-power-how-to-run-atmega328p-for-a-year-on-coin-cell-battery/) Pro Mini
[rocketscream/Low-Power: Low Power Library for Arduino](https://github.com/rocketscream/Low-Power)
[arduino-libraries/ArduinoLowPower: Powersave features for SAMD boards](https://github.com/arduino-libraries/ArduinoLowPower)

[Latching Power Switch Circuit (Auto Power Off Circuit) | Random Nerd Tutorials](https://randomnerdtutorials.com/latching-power-switch-circuit-auto-power-off-circuit-esp32-esp8266-arduino/)

[Gammon Forum : Electronics : Microprocessors : Power saving techniques for microprocessors](http://www.gammon.com.au/power)
[» Measuring the battery without draining it » JeeLabs](https://jeelabs.org/2013/05/16/measuring-the-battery-without-draining-it/)
[Mailbox notifier project upgrade | LowPowerLab](https://lowpowerlab.com/2013/08/27/mailbox-notifier-project-upgrade/)

## ISP mode

To program other micro-controllers (e.g. ATTiny85)

- Flash the ArduinoISP example
- Connect a 10uF capacitor from RESET to GND
- Set _Programmer_ to "Arduino as ISP" to ,

[AVRISP versus AVRISP mkII | AVR Freaks](https://www.avrfreaks.net/forum/avrisp-versus-avrisp-mkii)

[Arduino ISP (In System Programming) and stand-alone circuits | Open Electronics](https://www.open-electronics.org/arduino-isp-in-system-programming-and-stand-alone-circuits/)
[3 Simple Ways of Programming an ESP8266 12X Module: 5 Steps (with Pictures)](https://www.instructables.com/3-Simple-Ways-of-Programming-an-ESP8266-12X-Module/)
[Integrate ArduinoISP and Atmel Studio: 4 Steps](https://www.instructables.com/Integrate-ArduinoISP-and-Atmel-Studio/)

[Overview | Program an AVR or Arduino Using Raspberry Pi GPIO | Adafruit Learning System](https://learn.adafruit.com/program-an-avr-or-arduino-using-raspberry-pi-gpio-pins?view=all)

[【Arduino 教學】實作 15- arduino 最小化(燒錄至 attiny85) - YouTube](https://www.youtube.com/watch?v=2nKEA6AUCZM&list=TLPQMTMxMTIwMTnqPdkGHZ0-uQ&index=2)

## Projects

[10 Awesome Beginner Arduino Projects - Hackster.io](https://www.hackster.io/RoyTobby/10-awesome-beginner-arduino-projects-78a6a6)

[Arduino Blog » Build a 4-button arcade game out of LEGO](https://blog.arduino.cc/2018/08/17/build-a-4-button-arcade-game-out-of-lego/)
[Arduino Arcade LEGO Games Box - Arduino Project Hub](https://create.arduino.cc/projecthub/LenkaDesign/arduino-arcade-lego-games-box-c05299)
[Balancing Robot (Arduino) | Barrett's Projects](https://barrettsprojects.wordpress.com/2014/03/11/balancing-robot-arduino/)
[Electronic Piano Keyboard With Preset Songs - Hackster.io](https://www.hackster.io/lindsi8784/electronic-piano-keyboard-with-preset-songs-74ee7c)
[Self-Watering Plant: 30 Steps (with Pictures)](https://www.instructables.com/Self-Watering-Plant/)

[60+ Arduino Projects and Tutorials | Random Nerd Tutorials](https://randomnerdtutorials.com/projects-arduino/)

[hardware - Controlling Floppy Disk Drive with Arduino - Arduino Stack Exchange](https://arduino.stackexchange.com/questions/3702/controlling-floppy-disk-drive-with-arduino)
[The Floppotron 3.0 » Silent's Homepage](http://silent.org.pl/home/2022/06/13/the-floppotron-3-0/)
[The Floppotron 3.0 - Computer Hardware Orchestra - YouTube](https://www.youtube.com/watch?v=kCCXRerqaJI)

[Arduino based Text to Speech (TTS) Converter](https://circuitdigest.com/microcontroller-projects/arduino-based-text-to-speech-converter)

[STEMTera™ Breadboard](https://stemtera.com/)
[Plum Geek Robotics - Arduino Based STEM Robotics](http://www.plumgeek.com/)

### Keyboard Input

> [[usb#Human Interface Devices (HID)]]

ATMEGA32U4 can act as USB keyboard

[【Arduino 教學】幫你自動打字，自動發送訊息的鍵盤指令 - YouTube](https://www.youtube.com/watch?v=dF4v-ZnMA_s)
[【Arduino 教學】鍵盤指令進階用法，自動填寫表單，設定自己的電腦巨集按鍵 - YouTube](https://www.youtube.com/watch?v=nVv9vGa4Yv4)
[【改造游標卡尺】傳送數據到電腦，自動打字紀錄，Creality3D 掃描器 - YouTube](https://www.youtube.com/watch?v=ur3bd3JNyRw)

[QMK Firmware - An open source firmware for AVR and ARM based keyboards](https://qmk.fm/)
