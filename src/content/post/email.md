---
title: Email Services
description: ""
created: 2015-11-19
updated: 2023-09-29
tags:
  - ldap
  - mail
  - smtp
  - web
---

[Mailconcept · Wiki · Mutt Project / mutt · GitLab](https://gitlab.com/muttmua/mutt/wikis/MailConcept)

## POP

[Post Office Protocol - Wikiwand](https://www.wikiwand.com/en/Post_Office_Protocol)
[Everything You Need to Know About POP](https://www.lifewire.com/what-is-pop-post-office-protocol-1171121)

## IMAP

[Internet Message Access Protocol - Wikiwand](https://www.wikiwand.com/en/Internet_Message_Access_Protocol)
[What IMAP Email Can Do for You](https://www.lifewire.com/what-does-imap-do-1166415)

## SMTP

> outgoing

[Simple Mail Transfer Protocol - Wikiwand](http://www.wikiwand.com/en/Simple_Mail_Transfer_Protocol)
[RFC 5321 - Simple Mail Transfer Protocol](https://tools.ietf.org/html/rfc5321)

[16 Command Examples to Send Email From The Linux Command Line](https://blog.edmdesigner.com/send-email-from-linux-command-line/)
[SMTP · Everything curl](https://ec.haxx.se/usingcurl-smtp.html)

```sh
curl smtp://10.6.64.241 \
  --mail-from developer@gmail.com --mail-rcpt me@gmail.com \
  --user 'me@gmail.com:your-accout-password'
```

[The Postfix Home Page](http://www.postfix.org/)
[Postfix Articles and How-To's](http://www.seaglass.com/postfix/articles.html)

[Open Source Email | Sendmail Sentrion| Proofpoint](https://www.proofpoint.com/us/open-source-email-solution)

[How to set up a multifunction device or application to send email using Office 365 | Microsoft Docs](https://docs.microsoft.com/en-us/Exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-office-3)

## Email template

[HTML Email: A Beginner's Guide to Creating and Sending One](https://kinsta.com/blog/html-email/)
[What is HTML Email?](https://webdesign.tutsplus.com/articles/what-is-html-email--cms-38843)

[React Email](https://react.email/)
[resendlabs/react-email: 💌 Build and send emails using React](https://github.com/resendlabs/react-email)

## Email as a Service

[Email Delivery Service](https://sendgrid.com/) Twilio SendGrid, 100 emails / day
[EmailJS](https://www.emailjs.com/) 200 monthly requests
[Resend](https://resend.com/) 100 emails / day, 3000 emails / month

[All-in-One Marketing Platform for Growing Businesses](https://mailchimp.com/)
[Transactional Email API Service For Developers | Mailgun](https://www.mailgun.com/)
[Mailjet - Email Delivery Service for Marketing & Developer Teams](https://www.mailjet.com/)
[All Your Digital Marketing Tools in One Place – Sendinblue](https://www.sendinblue.com/)
[Transactional Email | Brevo (formerly Sendinblue)](https://www.brevo.com/products/transactional-email/)

### Form to Email

[A Comparison of Static Form Providers | CSS-Tricks](https://css-tricks.com/a-comparison-of-static-form-providers/)

Post to `service.com/youemail@server`, you'll get an activation/verification email first time you submit the form.
Then you'll get a form token that can be used in lieu of the email (`service.com/token`).
Form submitter will see the service's reCAPTCHA for anti-spamming and submit success page. Paid customer can usually customize these pages.

- [Formaholic - Home](https://formaholic.com/)
- [EmailJS](https://www.emailjs.com/)
  - 50 submissions / month
  - 2 email templates
- [formmonkey](https://www.formmonkey.io/)
  - 30 submissions / month
  - 1 form
- [Formspark | HTML Form to Email service](https://formspark.io/) tested
  - [About | Formspark Documentation](https://documentation.formspark.io/)
  - many customization, good for static site
  - optional reCAPTCHA
  - US\$25 for 50000 submissions
  - 500 submissions for testing
- [FormSubmit | A Contact Form to Email Service](https://formsubmit.co/) tested
  - [FormSubmit Documentation](https://formsubmit.co/documentation)
  - free!!!
  - customize thank you page
  - preset reCAPTCHA and success page
- [A Contact Form to Email Service | Formspree](https://formspree.io/) tested
  - 50 submissions / month free tier
  - 2 linked email
  - preset reCAPTCHA and success page
- [Free Form to Email API | Mailthis.to](https://mailthis.to/)
  - no reCAPTCHA?, not working?
- [Forms setup | Netlify Docs](https://docs.netlify.com/forms/setup/#html-forms)

[[google-apps-script#Sending Email]]

## Clients

[Three ways to Send Email from Ubuntu Command Line](https://vitux.com/three-ways-to-send-email-from-ubuntu-command-line/)

### Mutt

[Home · Wiki · Mutt Project / mutt · GitLab](https://gitlab.com/muttmua/mutt/wikis/home)
[Mutt is a command line email app for Linux and here's how to set it up - gHacks Tech News](https://www.ghacks.net/2019/11/23/mutt-is-a-command-line-email-app-for-linux-and-heres-how-to-set-it-up/)
[[Reply] 如何從命令列透過 mutt 及 gmail 寄信 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10054431)
[Why I Use Mutt](https://www.marksanborn.net/software/why-i-use-mutt/)

### msg-extractor

[TeamMsgExtractor/msg-extractor: Extracts emails and attachments saved in Microsoft Outlook's .msg files](https://github.com/TeamMsgExtractor/msg-extractor)

```sh
wget http://www.matijs.net/software/msgconv/msgconvert.pl
yinst perl-email-outlook-message
```
