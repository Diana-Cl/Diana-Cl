---
layout: doc
outline: deep
lang: 'fa-IR'
dir: 'rtl'
title: 'راهنمای جامع فعال‌سازی ویندوز و آفیس با روش‌های قانونی: HWID، KMS، TSforge و غیره'
description: 'یک جعبه ابزار متن‌باز و ایمن حاوی آموزش گام‌به‌گام فعال‌سازی دائم ویندوز ۱۰/۱۱ و آفیس. بررسی تفاوت روش‌ها، حل مشکلات احتمالی، و روش‌های حذف فعال‌سازی نیز پوشش داده شده است.'
date: 2024-05-05
editLink: true
head:
  - - meta
    - name: description
      content: راهنمای کامل و مطمئن برای فعال‌سازی ویندوز ۱۰/۱۱ و آفیس با روش‌های متن‌باز مانند HWID, KMS, TSforge و Ohook, شامل روش‌های دائمی و قابل تمدید
  - - meta
    - name: keywords
      content: فعال سازی ویندوز, فعال‌سازی آفیس, فعال سازی قانونی ویندوز, فعال‌سازی دائم, HWID, KMS, TSforge, Ohook, فعال‌سازی ویندوز ۱۱, لایسنس دیجیتال
  - - meta
    - property: og:title
      content: آموزش فعال‌سازی ایمن و دائمی ویندوز و آفیس
  - - meta
    - property: og:description
      content: فعال‌سازی قانونی ویندوز و آفیس با ابزارهای مطمئن و متن‌باز, مناسب برای ویندوز ۱۰, ویندوز ۱۱, و نسخه‌های مختلف آفیس
---

<div class="rtl">
  
# راهنمای جامع فعال‌سازی ویندوز و آفیس با روش‌های قانونی: HWID، KMS، TSforge و غیره

در این راهنمای کامل، با روش‌های متن‌باز و قابل اطمینانی مانند HWID، KMS، TSforge و سایر ابزارهای رسمی آشنا می‌شوید که امکان فعال‌سازی سریع، ایمن و بدون دردسر را برای ویندوز و آفیس فراهم می‌کنند.. <br/>
**سورس کامل فعال‌ساز محصولات مایکروسافت در [این آدرس][5]**

::: tip چند نکته از نویسنده

- بعد از فعال‌سازی با روش `HWID` ممکن است مشکلاتی با لاگین کردن در اکانت مایکروسافت در تنظیمات مرورگر **Microsoft Edge** داشته باشید!
- **راهکار اول:** رد شدن از این روش فعال‌سازی و استفاده از [KMS](./kms-fa) به جای آن (کمتر از 2 دقیقه طول می‌کشد و هر 6 ماه نیاز به تجدید دارد).
- **راهکار دوم:** کنار گذاشتن مرورگر پیشفرض Microsoft Edge و استفاده از مرورگرهای جایگزین مانند **Chrome** یا **Firefox**.

::: details برای مشاهده جزئیات کلیک کنید

- **برای ویندوز:** شخصاً از روش **KMS** ([راهنمای kms](./kms-fa)) برای فعال‌سازی ویندوز 10/11 خودم استفاده می‌کنم. این روش رسمی است، هیچ فایلی روی سیستم ذخیره نمی‌کند و کمتر از 3 دقیقه زمان می‌برد. اگر به هر دلیلی این روش کار نکرد و ناموفق بود، انتخاب بعدی من HWID است، زیرا آن هم رسمی و بدون ذخیره داده‌ای در لوکال سیستم ما است.
- **برای آفیس:** من از Ohook، TSforge یا Online KMS استفاده می‌کنم. تفاوت‌های جزئی بین آن‌ها وجود دارد که در جدول زیر ذکر شده است.
- **نیاز به کمک دارید؟** اگر با مشکلی مواجه شدید، می‌توانید در بخش [بحث‌های گیت‌هاب][3] سوالتان را مطرح کنید و همچنین در هنگام ضرورت می‌توانید مستقیماً به خودم [ایمیل][4] بزنید.

:::

<br/>

## خلاصه‌ی روش‌های فعال‌سازی

برای یک نمای کلی، در ادامه خلاصه‌ای از روش‌های فعال‌سازی موجود آمده است:

</div>

| نوع فعال‌سازی  | محصولات پشتیبانی شده |       مدت زمان فعال‌سازی       |      نیاز به اینترنت؟      |       اطلاعات بیشتر       |
| :------------: | :------------------: | :----------------------------: | :------------------------: | :-----------------------: |
|    **HWID**    |     ویندوز ۱۰-۱۱     |             دائمی              |            بله             |    [جزئیات](./hwid-fa)    |
|    **KMS**     |     ویندوز ۱۰-۱۱     |         ۱۸۰ روز (دستی)         |            بله             |    [جزئیات](./kms-fa)     |
|   **Ohook**    |         آفیس         |             دائمی              |            خیر             |             -             |
|  **TSforge**   | ویندوز / ESU / آفیس  |             دائمی              | بله (در بیلد ۱۹۰۴۱ به بعد) |  [جزئیات](./tsforge-fa)   |
|   **KMS38**    | ویندوز ۱۰-۱۱-Server  |          تا سال ۲۰۳۸           |            خیر             |   [جزئیات](./kms38-fa)    |
| **Online KMS** |    ویندوز / آفیس     | ۱۸۰ روز (مادام‌العمر با تمدید) |            بله             | [جزئیات](./online_kms-fa) |

<p style="text-align: center;">
  برای مقایسه دقیق تمام روش‌ها، به <a href="./chart-fa">جدول مقایسه روش‌های فعال‌سازی</a> مراجعه کنید.</p><br/>

# روش ۱. فعال‌سازی دائمی با HWID

برای اکثر کاربران، روش **HWID (Hardware ID)** ساده‌ترین راه برای دریافت لایسنس دیجیتال دائمی برای ویندوز ۱۰ و ۱۱ است. <br/>

## مرحله ۱. اجرای PowerShell با دسترسی مدیر سیستم

- ۱. روی دکمه `Start` ویندوز یا آیکون `Search` در نوار وظیفه کلیک کنید.
- ۲. تایپ کنید: `powershell`.
- ۳. در نهایت گزینه `Run as administrator` را انتخاب کنید. <br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/9b27cd4b-21d8-4970-98bb-3c97010e09bf" alt="اجرای-پاورشل-با-حالت-ادمین" width="540px" /></p>
  
<p align="center"> برای بزرگنمایی تصویر بر روی آن کلیک کنید </p><br><br/>

::: tip روش‌های دیگر برای اجرای PowerShell

::: details برای مشاهده جزئیات بیشتر کلیک کنید

**۱. استفاده از نوار جستجو**

- ۱. روی دکمه `Start` ویندوز یا آیکون `Search` در نوار وظیفه کلیک کنید.
- ۲. تایپ کنید: `powershell`.
- ۳. در نهایت گزینه **Run as administrator** را انتخاب کنید. <br/>

**۲. استفاده از Run باکس**

- ۱. **اجرای Run:** کلیدهای `Win (⊞) + R` را همزمان فشار دهید.
- ۲. **تایپ کنید:** `powershell`.
- ۳. **اجرا به صورت administrator:** به جای فشردن Enter، کلیدهای `Ctrl + Shift + Enter` را فشار دهید. این ترکیب PowerShell را با مجوزهای مدیریتی سیستم (administrator) اجرا می‌کند.
- ۴. اگر دیالوگ User Account Control ظاهر شد، روی `Yes` کلیک کنید تا مجوز اعطا شود. <br/>

**۳. استفاده از Power User Menu**

- 1. روی آیکون `Windows Start` در `Taskbar` کلیک راست کنید تا منوی حاوی میانبرهای ابزارهای پرکاربرد باز شود، همچنین می‌توانید این منو را با `Win (⊞) + x` باز کنید.
- 2. سپس بر روی گزینه **Windows Terminal (Admin)** در ویندوز 11 و یا **Windows PowerShell (Admin)** در ویندوز 10 کلیک کنید.

همچنین می‌توانید از [این لینک][1] برای مشاهده ۱۰ روش اجرای **PowerShell** و از [این لینک][2] برای اجرای CMD به ۸ روش مختلف در ویندوز استفاده کنید.

:::

## مرحله ۲. اجرای اسکریپت فعال‌سازی

دستور زیر را کپی کرده و، در پنجره PowerShell جای‌گذاری و سپس کلید `Enter` را فشار دهید.

> شما می‌توانید هر چیزی را که قبلا کپی کرده‌اید با **راست‌کلیک** کردن در داخل CMD یا PowerShell یا سایر ترمینال‌ها جای‌گذاری کنید، در واقع در ترمینال‌ها از راست‌کلیک برای عمل paste استفاده می‌شود.

::: code-group

```powershell [پیشنهادی]
irm https://get.activated.win | iex
```

```powershell [جایگزین]
irm https://massgrave.dev/get | iex
```

:::

<br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/6b72787e-f5ad-47a2-ab2b-ae93de9f70bc" alt="جای‌گذاری-دستور-در-PowerShell" width="540px" /></p><br/>

## مرحله ۳. انتخاب گزینه HWID

یک منو در پنجره جدید ظاهر می‌شود. کلید شماره `1` را روی کیبورد خود فشار دهید تا **HWID Activation** انتخاب شود سپس چند لحظه منتظر بمانید تا فرآیند کامل شود.

<p align="center">
  <img src="https://github.com/user-attachments/assets/8b119e05-d506-4c42-91cb-ac58c9a2f189" alt="انتخاب-متود-hwid" width="540px" /></p><br/>

**تبریک!**  
ویندوز شما اکنون با لایسنس دیجیتال به صورت دائمی فعال شده است. <br/>

برای بررسی وضعیت فعال‌سازی **`ویندوز ۱۰`**، از این طریق اقدام کنید:  
 **Settings → Update & Security → Activation**. [^1]

برای بررسی وضعیت فعال‌سازی **`ویندوز ۱۱`**، بر روی دکمه Start کلیک کرده و سپس از این طریق اقدام کنید:  
Settings → System → Activation. [^2] <br/>

## اطلاعات تکمیلی

::: danger چگونه فعال‌سازی را حذف کنیم؟

::: details برای مشاهده جزئیات کلیک کنید

- **HWID:** لایسنس دیجیتال روی سرورهای مایکروسافت ذخیره شده و به سخت‌افزار شما متصل است. این نمی‌تواند به معنای سنتی "حذف" شود. تغییر عمده سخت‌افزار (مانند مادربرد) آن را باطل می‌کند. برای بازگشت به حالت غیرفعال، می‌توانید یک کلید عمومی KMS نصب کنید. [جزئیات تکمیلی hwid](./hwid-fa)
- **Online KMS / Ohook / KMS38:** از گزینه متناظر "Uninstall" یا "Remove" در منوی اسکریپت MAS استفاده کنید، سپس گزینه "Fix Licensing" را از منوی Troubleshoot اجرا کنید. [جزئیات KMS](./kms-fa) و [جزئیات KMS38](./kms38-fa)
- **TSforge:** این روش فقط داده‌ها را اضافه می‌کند و فایلی نصب نمی‌کند. برای بازنشانی آن، کافی است گزینه "Fix Licensing" را از منوی Troubleshoot در اسکریپت MAS اجرا کنید. [جزئیات TSforge](./tsforge-fa)

:::

<br/>

::: info محصولات پشتیبانی شده ویندوز ۱۰/۱۱ برای HWID

::: details برای مشاهده محصولات کلیک کنید

|       نام محصولات ویندوز ۱۰/۱۱        |        EditionID         |   کلید عمومی Retail/OEM/MAK   |
| :-----------------------------------: | :----------------------: | :---------------------------: |
|               Education               |        Education         | YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY |
|              Education N              |        EducationN        | 84NGF-MHBT6-FXBX8-QWJK7-DRR8H |
|              Enterprise               |        Enterprise        | XGVPP-NMH47-7TTHJ-W3FW7-8HV2C |
|             Enterprise N              |       EnterpriseN        | 3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT |
|         Enterprise LTSB 2015          |       EnterpriseS        | FWN7H-PF93Q-4GGP8-M8RF3-MDWWW |
|         Enterprise LTSB 2016          |       EnterpriseS        | NK96Y-D9CD8-W44CQ-R8YTK-DYJWX |
|         Enterprise LTSC 2019          |       EnterpriseS        | 43TBQ-NH92J-XKTM7-KT3KK-P39PB |
|        Enterprise N LTSB 2015         |       EnterpriseSN       | NTX6B-BRYC2-K6786-F6MVQ-M7V2X |
|        Enterprise N LTSB 2016         |       EnterpriseSN       | 2DBW3-N2PJG-MVHW3-G7TDK-9HKR4 |
|                 Home                  |           Core           | YTMG3-N6DKC-DKB77-7M9GH-8HVX7 |
|                Home N                 |          CoreN           | 4CPRK-NM3K3-X6XXQ-RXX86-WXCHW |
|            Home China [^3]            |   CoreCountrySpecific    | N2434-X9D7W-8PF6X-8DV9T-8TYMD |
|       Home Single Language [^4]       |    CoreSingleLanguage    | BT79Q-G7N6G-PGBYW-4YWX6-6F4BT |
|            IoT Enterprise             |      IoTEnterprise       | XQQYW-NFFMW-XJPBH-K8732-CKFFD |
|      IoT Enterprise Subscription      |      IoTEnterpriseK      | P8Q7T-WNK7X-PMFXY-VXHBG-RRK69 |
|       IoT Enterprise LTSC 2021        |      IoTEnterpriseS      | QPM6N-7J2WJ-P88HH-P3YRH-YY74H |
|       IoT Enterprise LTSC 2024        |      IoTEnterpriseS      | CGK42-GYN6Y-VD22B-BX98W-J8JXD |
| IoT Enterprise LTSC Subscription 2024 |     IoTEnterpriseSK      | N979K-XWD77-YW3GB-HBGH6-D32MH |
|                  Pro                  |       Professional       | VK7JG-NPHTM-C97JM-9MPGT-3V66T |
|                 Pro N                 |      ProfessionalN       | 2B87N-8KFHP-DKV6R-Y2C8J-PKCKT |
|             Pro Education             |  ProfessionalEducation   | 8PTT6-RNW4C-6V7J2-C2D3X-MHBPB |
|            Pro Education N            |  ProfessionalEducationN  | GJTYN-HDMQY-FRR76-HVGC7-QPF8P |
|       Pro for Workstations [^5]       | ProfessionalWorkstation  | DXG7C-N36C4-C4HTG-X4T3X-2YV77 |
|      Pro N for Workstations [^6]      | ProfessionalWorkstationN | WYPNQ-8C467-V2W6J-TX4WX-WT2RQ |
|                   S                   |          Cloud           | V3WVW-N2PV2-CGWC3-34QGF-VMJ2C |
|                  S N                  |          CloudN          | NH9J3-68WK7-6FB93-4K3DF-DJ4F6 |
|                  SE                   |       CloudEdition       | KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W |
|                 SE N                  |      CloudEditionN       | K9VKN-3BGWV-Y624W-MCRMQ-BHDCD |
|                 Team                  |          PPIPro          | XKCNC-J26Q9-KFHD2-FKTHY-KD72Y |

_کلید عمومی به صورت خودکار توسط اسکریپت در صورت نیاز اعمال می‌شود._

:::

<hr/><br/>

[^1]: برای بررسی وضعیت فعال‌سازی ویندوز ۱۰، به مسیر Settings → Update & Security → Activation بروید. وضعیت فعال‌سازی خود را در آنجا مشاهده خواهید کرد. <br/> اگر ویندوز فعال باشد، باید "Activated" را با تیک سبز ببینید.

[^2]: برای بررسی وضعیت فعال‌سازی ویندوز ۱۱، با کلیک بر روی دکمه **Start** و سپس انتخاب Settings → System → Activation بروید. <br/> وضعیت فعال‌سازی نمایش داده می‌شود و جزئیات روش فعال‌سازی و حساب مایکروسافت مرتبط را نشان می‌دهد.

[^3]: نسخه مخصوص کشور چین.

[^4]: نسخه تک‌زبانه.

[^5]: Professional for Workstations.

[^6]: Professional N for Workstations.

[1]: https://www.minitool.com/news/open-windows-11-powershell.html
[2]: https://www.minitool.com/news/open-command-prompt-windows-11.html
[3]: https://github.com/NiREvil/windows-activation/discussions/
[4]: mailto:diana.clk01@gmail.com
[5]: https://NiREvil.github.io/windows-activation/
