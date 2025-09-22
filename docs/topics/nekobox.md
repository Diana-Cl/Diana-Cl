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

> نکات پیرامون نکوباکس [نسخه 1.4.0][1]

## نکته اول - آپدیت ساب‌ها

اول از همه یه نکته دیگه بگم، توی آپدیت آخر یه سری لینک‌های ساب به برنامه اد نمیشن‌هاااا، تو بکاپ خودم اون آخراش ده تا لینک ساب هست که آپدیت نمیشن درحالی که توی کلاینت‌های دیگه اوکی هستن، دلیلشم نمی‌دونم هنوز. اگه این مسأله براتون مهمه اصلا آپدیت نکنید به این نسخه. همچنان پیشنهاد من استفاده از [Exclave][2] هستش.

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
اگه قوانین مسدودسازی تبلیغات و بایپس شدن آیپی و سایتهای ایرانی برات مهم نیست اصلا نخون بقیه مطلب رو.

من قوانین رو از بخش Route خاموش کردم چون اگه برای کسی دوتا فایل geosite و geoip آپدیت نمیبود دیگه هیچ کانفیگی وصل نمیشد. پیش‌فرض خاموشش کردم اگه برات مهمه بتونی با vpn روشن بری توی سایت های ایرانی و یه سری تبلیغات مسدود بشن پس اول برو توی بخش Route مثل این عکس:

<p align="center">
  <img src="/clients/NB4A-" alt="Google Studio" width="640px" />
</p>
<br/>

<img width="1080" height="2212" alt="Route" src="https://github.com/user-attachments/assets/36b32a30-a678-46fa-b8c6-458be98a77f8" />

بعد بری مسیر 

<img width="1080" height="2212" alt="route2" src="https://github.com/user-attachments/assets/fe1ecb49-baeb-445c-a5c0-55dea4317325" />

<img width="1080" height="2212" alt="route3" src="https://github.com/user-attachments/assets/2b333f38-2ab7-4845-972e-05b2985df51d" />

و بزنی هردو فایل geo assets اپدیت بشن، داخل تصویر نوشتم بعد از اپدیت زیرشون باید تاریخ بروز نوشته شده باشه.

<img width="1080" height="2212" alt="geo-assets" src="https://github.com/user-attachments/assets/e4fde503-98b4-4741-a1ac-0515c3053c52" />

حالا که اینا آپدیت شدن می‌تونی برگردی صفحه قبلی و هر قانونی که خواستی رو روشن کنی، پیشنهاد می‌کنم همه رو روشن کن، همه بجز آخری، آخری خیلی سنگینه و اضافه کاریه، اون روشن باشه به هر کانفیگی بخوای وصل بشی یکی دوثانیه طول می‌کشه استارت شدنش.

<img width="1080" height="2212" alt="1000189688" src="https://github.com/user-attachments/assets/9d8ab0ad-484c-4a59-b14b-dfd4de1b0646" />

## بای‌پس کردن اپ‌های داخلی

اگه بخوای وقتی که نکوباکس فعاله به برنامه ایرانسل‌من سر بزنی باز نمشه چون باید با آی‌پی ایران واردش بشی، برای اینکه نخوای نکوباکس رو هردیقه خاموش روشن کنی بهتره بیای و اپ‌های ایرانی رو اضافه کنی تو لیست استثناها. از کجا؟؟ همین‌جا:

`Nekobox settings → Apps VPN Mode → Bypass`


<img width="1080" height="2212" alt="1000189690" src="https://github.com/user-attachments/assets/b90da010-6720-4b4e-979d-fba5298c6a97" />

![1000189691](https://github.com/user-attachments/assets/01fa2adb-6c55-457d-8627-8daae0e94956)

![1000189692](https://github.com/user-attachments/assets/0f392b84-cf8d-47b4-9270-b145fdedc4d3)

مای ایرانسل، مای‌ شاتل، برق من، شاد روبیکا ایتا و بقیه لاشی‌های وطنی رو فعال کن که دیکه از تونل وی‌پی‌ان عبور نکنه ترافیک اون‌ها.  
تو قسمت اول این مطلب سایت‌ها و آی‌پی های ایرانی رو بای‌پس کردیم که خارج از تونل وی‌پی‌ان به فعالیتشون ادامه بدن و الان هم برای برنامه‌های نصب شده روی گوشی‌‌مون اینکارو انجام دادیم. وسلام علیکم و رحمه‌الله و برکاته 😆



## نحوه وارد کردن فایل بکاپ
برای کسایی که بلد نیستن فایل بکاپ دیگران رو وارد کلاینت بکنن. 
اول فایل بکاپ من یا هرکس دیگه رو دانلود و ذخیره کن
[لینک فایل بکاپ][4]

![1000189681](https://github.com/user-attachments/assets/83a561bd-994a-49d1-8204-c6254085fb78)

<img width="1080" height="2212" alt="1000189682" src="https://github.com/user-attachments/assets/dbb45a1c-2c5c-46ed-b43e-bba92ac74634" />

![1000189686](https://github.com/user-attachments/assets/669eb38b-38d6-42e1-8e2a-43f23bf74b4b)

![1000189687](https://github.com/user-attachments/assets/681dd01b-279a-4fcb-ad5e-fee5c9b6e6b2)


فایل بکاپ Nekobox سه بخش داره، کانفیگ‌ها، قوانین و تنظیمات برنامه
همیشه می‌تونی بخش قوانین و تنظیمات رو با خیال راحت  تیک بزنی و وارد نکوباکس کنی ولی حواست باشه بخش سوم یعنی کانفیگ‌هارو اگه تیک زدی جایگزین کانفیگ‌های خودت قراره بشن و هرچی از قبل داشتی داخل نکوباکس حدف میشه پس بهتره قبل از وارد کردن بکاپ من، از همین منوی tools که توی اسکرین شات بالا نشون دادم اول از کانفیگ‌ها و تنظیمات خودت بکاپ بگیری. اگر هم که کانفیگ خاصی نداری و یا مهم نیستن که اوکی ایگنور کن بره و هرجا هر فایلی دیدی اد کن خدابده برکت. 

اگه متوجه نشدی و نیاز به ویدئو آموزش داری [اینجا]62] یکی [دوتا][7] پیدا میشه 

[1]: https://github.com/MatsuriDayo/NekoBoxForAndroid/releases
[2]: https://t.me/new_folder_revil/3417
[3]: https://github.com/NiREvil/vless/ 
[4]: https://t.me/new_folder_revil/3497
[6]: https://t.me/F_NiREvil/5123
[7]: https://t.me/F_NiREvil/5518
