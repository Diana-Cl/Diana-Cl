---
layout: doc
outline: deep
lang: 'fa-IR'
dir: 'rtl'
title: 'نکوباکس اندروید'
description: 'نکاتی که قبل از استفاده از نکوباکس باید بدونیم'
date: 2025-06-17
editLink: true
head:
  - - meta
    - name: keywords
      content: NekoBox, nekobox, NB4A, nekobox for Android, Exclave, Android, v2ray, singbox, clients, xray, clash meta
---

# NB4A
## Nekobox for a android

> **نکات پیرامون نکوباکس [نسخه 1.4.0][1]**

## نکته اول - آپدیت ساب‌ها
اول از همه یه نکته دیگه بگم، توی آپدیت آخر یه سری لینک‌های ساب به برنامه اد نمیشن‌هاااا، تو بکاپ خودم اون آخراش ده تا لینک ساب هست که آپدیت نمیشه درحالی که توی کلاینت‌های دیگه اوکی هستن، دلیلشم نمی‌دونم هنوز. اگه این مسأله براتون مهمه اصلا آپدیت نکنید به این نسخه. همچنان پیشنهاد من استفاده از [Exclave][2] هستش. قابلیت بالانسر Exclave می‌ارزه به کل هیکل نکوباکس ادایی

::: details از جمله ساب‌هایی که آپدیت نمیشن

- https://robin.victoriacross.ir

- https://raw.githubusercontent.com/Rayan-Config/C-Sub/refs/heads/main/configs/proxy.txt

- https://raw.githubusercontent.com/MatinGhanbari/v2ray-configs/refs/heads/main/subscriptions/base64/all_sub.txt

- https://raw.githubusercontent.com/Kolandone/v2raycollector/refs/heads/main/ss.txt

- https://raw.githubusercontent.com/4n0nymou3/multi-proxy-config-fetcher/refs/heads/main/configs/proxy_configs.txt

حالا خیلی‌ام مهم نیست وقتی خودمون [مخزن انواع لینک ساب داریم][3]، این نشد یکی دیگه 😅🤧

:::

<br/> 

## نکته دوم - قوانین

مثل همیشه نکته ها درباره Routing Rules. 
اگه قوانین مسدودسازی تبلیغات و بای‌پس شدن آی‌پی و سایت‌های ایرانی برات مهم نیست اصلا نخون بقیه مطلب رو.

من قوانین رو از بخش Route خاموش کردم چون اگه برای کسی دوتا فایل geosite و geoip آپدیت نمی‌بود دیگه هیچ کانفیگی وصل نمی‌شد. پیش‌فرض خاموشش کردم و اگه برات مهمه بتونی با vpn روشن بری توی سایت‌های ایرانی و هم‌چنین می‌خوای یه سری از تبلیغات سایت ها مسدود بشن پس اول برو توی بخش Route مثل این اسکرین‌شات:

<p align="center">
  <img src="/clients/NB4A-1.png" alt="Routing-Rules" width="640px" />
</p>
<br/>

بعد برو اینجا 

<p align="center">
  <img src="/clients/NB4A-2.png" alt="Routing-Rules2" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-3.png" alt="Routing-Rules3" width="640px" />
</p>
<br/>

و اینجا باید کلیک کنی روی Update و صبر کنی هردو فایل geo assets آپدیت بشن، داخل تصویر هم نوشتم که بعد از آپدیت شدن زیرشون باید تاریخ بروز نوشته شده باشه.

<p align="center">
  <img src="/clients/NB4A-4.png" alt="Routing-Rules4" width="640px" />
</p>
<br/>

حالا که اینا آپدیت شدن می‌تونی برگردی صفحه قبلی و هر قانونی که خواستی رو روشن کنی، پیشنهاد می‌کنم همه رو روشن کن، همه بجز آخری، آخری خیلی سنگینه و اضافه کاریه، اون روشن باشه به هر کانفیگی بخوای وصل بشی یکی دوثانیه طول می‌کشه استارت شدنش.

<p align="center">
  <img src="/clients/NB4A-5.png" alt="Routing-Rules5" width="640px" />
</p>

<br><br/>

## بای‌پس کردن اپ‌های داخلی
اگه بخوای وقتی که نکوباکس فعاله به برنامه ایرانسل‌من سر بزنی باز نمیشه چون باید با آی‌پی ایران واردش بشی، برای اینکه نخوای نکوباکس رو هردیقه خاموش روشن کنی بهتره بیای و اپ‌های ایرانی رو اضافه کنی توی لیست استثناها. از کجا؟؟  
همین‌جا:

> Nekobox settings → Apps VPN Mode → Bypass
> 
> <br/> 

<p align="center">
  <img src="/clients/NB4A-6.png" alt="Apps-VPN-Mode" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-7.png" alt="Apps-VPN-Mode2" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-8.png" alt="Apps-VPN-Mode3" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-9.png" alt="Apps-VPN-Mode4" width="640px" />
</p>
<br/>

مای ایرانسل، مای‌ شاتل، برق من، شاد، روبیکا، ایتا و بقیه لاشی‌های وطنی رو فعال کن که دیکه از تانل وی‌پی‌ان عبور نکنه ترافیک اون‌ها.  
تو قسمت اول این مطلب سایت‌ها و آی‌پی های ایرانی رو بای‌پس کردیم که خارج از تانل وی‌پی‌ان به فعالیتشون ادامه بدن و الان هم برای برنامه‌های نصب شده روی گوشی‌‌مون اینکارو انجام دادیم. وسلام علیکم و رحمه‌الله و برکاته 😆

<br/>

## نحوه وارد کردن فایل بکاپ

برای کسایی که بلد نیستن فایل بکاپ دیگران رو وارد کلاینت بکنن.  
اول فایل بکاپ من یا هرکس دیگه رو دانلود و ذخیره کن
[لینک فایل بکاپ][4]

<p align="center">
  <img src="/clients/NB4A-10.png" alt="Backup-Files" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-11.png" alt="Backup-Files2" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-12.png" alt="Backup-Files3" width="640px" />
</p>
<br/>

### فایل بکاپ Nekobox سه بخش داره
> کانفیگ‌ها، قوانین و تنظیمات کلاینت

همیشه می‌تونی بخش قوانین و تنظیمات رو با خیال راحت  تیک بزنی و وارد نکوباکس کنی ولی حواست باشه بخش سوم یعنی کانفیگ‌هارو اگه تیک زدی جایگزین کانفیگ‌های خودت قراره بشن و هرچی از قبل داشتی داخل نکوباکس حدف میشه پس بهتره قبل از وارد کردن بکاپ من، از همین منوی tools که توی اسکرین شات بالا نشون دادم اول از کانفیگ‌ها و تنظیمات خودت بکاپ بگیری (با گزینه Export). اگر هم که کانفیگ خاصی نداری و یا مهم نیستن که اوکی ایگنور کن بره و هرجا هر فایلی دیدی اد کن خدا بده برکت. 

اگه متوجه نشدی و نیاز به ویدئو آموزش داری [اینجا]6] یکی [دوتا][7] پیدا میشه.

<br/>

## آپدیت و تست
یه هفته با گلابی وی‌پی‌ان بودی حالا برگشتی سراغ نکوباکس یا exclave یا ویتوری یا هرچی. اگه لینک ساب عمومی استفاده می‌کنی پس الان کانفیگ‌های داخلش مردن، اولین کاری که باید بکنی اینه که:

<p align="center">
  <img src="/clients/NB4A-13.png" alt="Update-Test" width="640px" />
</p>
<br/>

اول از همه وارد گروه مورد نظرت میشی و گزینه:

🟢 `Update current Groups subscription`

رو میزنی و صبر می‌کنی تا آپدیت بشه.

دومین کاری که باید بکنی اینه که گزینه:

🟠 `Remove Duplicate servers`

رو بزنی نا کانفیگ‌های تکراری حذف بشن و الکی وقت و حجم اینترنت تلف نشه واسه تست گرفتن از اینا.  
اگه بکاپ منو زدی پس این گزینه نیاز نیست، موقع آپدیت خودش تکراری‌هارو حذف می‌کنه چون از داخل خود گروه گزینشو روشن کردم.

سومین کاری که باید بکنی زدن گزینه است:

🟡 `URL Test`

حواست باشه قبل از انجام این تست وی‌پی‌ان هرچی که هست باید خاموش بشه وگرنه نتایج تست درست درنمیان.  

و آخرین کار اینه که گزینه:

🔴 `Order / By Delay`  

رو بزنی که کانفیگ‌ها به ترتیب بهتر بودن سرعت و پینگشون توی لیست قرار بگیرن، یک‌بار زدن این گزینه کافیه.

حالا به یکی از کانفیگ‌هایی که ابتدای لیسته و کنارش  عدد کوچولوی سبز نوشته می‌تونی کانکت بشی. اونایی که Timeout زده کنارشون به گاج رفتن دیگه.

## لینک‌های دانلود

- [گیت‌هاب نکوباکس][1]
  - [نکوباکس توی انباری][8]
  - [فایل بکاپ نکوباکس][4]
- [گیت‌هاب Exclave][5]
  - [فایل نصبی Exclave توی انباری][2]
  - [فایل بکاپ Exclave][9]
- [مخزن لینک‌های ساب][3]


[1]: https://github.com/MatsuriDayo/NekoBoxForAndroid/releases
[2]: https://t.me/new_folder_revil/3417
[3]: https://github.com/NiREvil/vless/ 
[4]: https://t.me/new_folder_revil/3497
[5]: https://github.com/dyhkwong/Exclave/releases
[6]: https://t.me/F_NiREvil/5123
[7]: https://t.me/F_NiREvil/5518
[8]: https://t.me/new_folder_revil/3495
[9]: https://t.me/new_folder_revil/3412
