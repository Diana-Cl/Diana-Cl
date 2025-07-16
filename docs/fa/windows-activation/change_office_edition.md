---
layout: doc
outline: deep
title: 'تغییر نسخه آفیس'
description: 'این گزینه در منوی اصلی MAS موجود است. می‌توانید از این اسکریپت با Office C2R نسخه 16.0.9029.2167 و بالاتر برای تغییر، افزودن و حذف نسخه‌ها یا تغییر کانال به‌روزرسانی فعلی آفیس استفاده کنید.'
date: 2024-01-05
editLink: true
---

# تغییر نسخه آفیس

این گزینه در منوی اصلی MAS موجود است. می‌توانید از این اسکریپت با Office C2R (نسخه 16.0.9029.2167 و بالاتر) برای تغییر، افزودن و حذف نسخه‌ها یا تغییر کانال به‌روزرسانی فعلی آفیس استفاده کنید.

## چگونه کار می‌کند؟

Office C2R (Click To Run) یک سیستم نصب یکپارچه دارد، به این معنی که چه یک برنامه واحد مانند Word 2021 را دانلود کنید یا یک بسته کامل مانند ProPlus2021، فایل‌های اصلی نصب شده تقریباً یکسان هستند.

برنامه مدیریت اصلی برای Office C2R در مسیر زیر قرار دارد:
`C:\Program Files\Common Files\microsoft shared\ClickToRun\OfficeClickToRun.exe`

این اسکریپت از این برنامه برای افزودن، حذف یا تغییر نسخه‌های آفیس استفاده می‌کند. به دلیل نصب یکپارچه و به‌روزرسانی‌های دلتا در آفیس، افزودن نسخه‌ها یا برنامه‌های جدید به دانلود حجیمی نیاز ندارد.


## تغییر کانال به‌روزرسانی آفیس

این اسکریپت همچنین می‌تواند کانال به‌روزرسانی فعلی آفیس را تغییر دهد.

```
5440FD1F-7ECB-4221-8110-145EFAA6372F  -  Insider Fast [Beta]  -  Insiders::DevMain
64256AFE-F5D9-4F86-8936-8840A6A4F5BE  -  Monthly Preview      -  Insiders::CC
492350F6-3A01-4F97-B9C0-C7C6DDF67D60  -  Monthly [Current]    -  Production::CC
55336B82-A18D-4DD6-B5F6-9E5095C314A6  -  Monthly Enterprise   -  Production::MEC
B8F9B850-328D-4355-9145-C59439A0C4CF  -  Semi Annual Preview  -  Insiders::FRDC
7FFBC6BF-BC32-4F92-8982-F9DD17FD3114  -  Semi Annual          -  Production::DC
EA4A4090-DE26-49D7-93C1-91BFF9E53FC3  -  DevMain Channel      -  Dogfood::DevMain
B61285DD-D9F7-41F2-9757-8F61CBA4E9C8  -  Microsoft Elite      -  Microsoft::DevMain
F2E724C1-748F-4B47-8FB8-8E0D210E9208  -  Perpetual2019 VL     -  Production::LTSC
1D2D2EA6-1680-4C56-AC58-A441C8C24FF9  -  Microsoft2019 VL     -  Microsoft::LTSC
5030841D-C919-4594-8D2D-84AE4F96E58E  -  Perpetual2021 VL     -  Production::LTSC2021
86752282-5841-4120-AC80-DB03AE6B5FDB  -  Microsoft2021 VL     -  Microsoft::LTSC2021
7983BAC0-E531-40CF-BE00-FD24FE66619C  -  Perpetual2024 VL     -  Production::LTSC2024
C02D8FE6-5242-4DA8-972F-82EE55E00671  -  Microsoft2024 VL     -  Microsoft::LTSC2024
```

- این اسکریپت لیست بالا را در پایگاه داده خود دارد و فقط ارتقاهای رسمی پشتیبانی شده را ارائه می‌دهد.
- درباره کانال‌های به‌روزرسانی آفیس بیشتر بدانید: https://learn.microsoft.com/en-us/microsoft-365-apps/updates/overview-update-channels
- می‌توانید آخرین شماره‌های ساخت آفیس را از اینجا دریافت کنید: https://github.com/ItzLevvie/Office16/blob/master/defconfig
- این اسکریپت از یک روش رسمی برای تغییر کانال به‌روزرسانی استفاده می‌کند:
https://techcommunity.microsoft.com/t5/office-365-blog/how-to-manage-office-365-proplus-channels-for-it-pros/ba-p/795813

### محدودیت‌های کانال VL (LTSC)
(قابل اعمال برای نسخه‌های 2019/21/24 VL)

به طور رسمی، کانال به‌روزرسانی را نمی‌توان به یا از یک کانال VL (LTSC) تغییر داد، بنابراین اگر کانال نصب شده یک کانال VL (LTSC) باشد، فقط آن کانال در اسکریپت ظاهر می‌شود.
همچنین، اگر کانال نصب شده یک کانال LTSC نباشد، اسکریپت پیشنهاد تغییر به LTSC را نخواهد داد.

### محدودیت‌های ویندوز 7/8/8.1

Office C2R دیگر در ویندوز [7][1]، [8][2] و [8.1][3] پشتیبانی نمی‌شود.
آخرین ساخت موجود ثابت است و هیچ به‌روزرسانی دریافت نخواهد کرد. کانال‌های VL (LTSC) در این نسخه‌های ویندوز پشتیبانی نمی‌شوند، بنابراین در اسکریپت ظاهر نخواهند شد.

---

## عیب یابی

::: danger عیب یابی

اگر سوالی دارید، ابتدا بخش [**سوالات متداول**](./faq) را مرور کنید - به احتمال زیاد پاسخ شما در آنجا خواهد بود.

اگر مشکل شما همچنان ادامه داشت - [**با ما تماس بگیرید**](./troubleshoot).

:::


[1]: https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-7-support
[2]: https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-8-support
[3]: https://learn.microsoft.com/en-us/microsoft-365-apps/end-of-support/windows-81-support
