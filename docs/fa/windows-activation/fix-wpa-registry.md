---
layout: doc
outline: deep
title: 'تعمیر رجیستری WPA'
description: 'تعمیر کلیدهای رجیستری WPA خراب که می‌تواند باعث عدم کارکرد فعال‌سازی شود.'
date: 2025-01-07
editLink: true
head:
  - - meta
    - name: keywords
      content: رجیستری سیستم خراب, sppsvc, wpa
---

## تعمیر رجیستری wpa سیستم خراب


در برخی موارد، سیستم ممکن است دارای کلیدهای رجیستری WPA خراب در `HKEY_LOCAL_MACHINE\SYSTEM\WPA` باشد که می‌تواند باعث عدم کارکرد `sppsvc` و شکست فعال‌سازی شود، همچنین می‌تواند باعث استفاده زیاد از CPU در سرویس `sppsvc` شود.
این کلید رجیستری توسط هسته محافظت می‌شود و به طور معمول قابل حذف نیست. به همین دلیل باید مراحل زیر را برای پاک کردن آن دنبال کنیم.

## مراحل تعمیر رجیستری WPA

- ابتدا این فایل زیپ را دانلود کنید:
- [github.com/archive/principalis.zip][1]
-   فایل را از حالت فشرده را خارج کنید.
-   فایل `rearm.cmd` را در ریشه درایو C کپی کنید، مانند `C:\rearm.cmd`
-   خط فرمان را به عنوان مدیر باز کنید و دستور زیر را وارد کنید
    `Shutdown /f /r /o /t 0`
-   پس از راه‌اندازی مجدد سیستم، Troubleshoot > Advanced Options > Command Prompt را انتخاب کنید.
-   دستور زیر را وارد کنید
    `C:\rearm.cmd`
-   اگر می‌گوید دستور شناسایی نشده است، وارد کنید
    `bcdedit | find "osdevice"`
-   این به شما حرف درایو سیستم عامل را نشان می‌دهد. از آن حرف درایو در دستور استفاده کنید، به عنوان مثال،
    `E:\rearm.cmd`
-   منتظر بمانید تا تمام شود. وقتی تمام شد، می‌توانید در خط فرمان تایپ کنید، اگر نه، منتظر بمانید.
-   پس از اتمام، خارج شوید و سپس به طور معمول وارد ویندوز شوید.

## آموزش ویدیویی


<video class="video-js vjs-default-skin vjs-fluid" controls preload="auto" data-setup='{}'>
  <source src="/Fix_WPA_Registry.mp4" type="video/mp4" />
  <p class="vjs-no-js"></p>
</video>

[1]: https://github.com/asdcorp/rearm/archive/refs/heads/principalis.zip
