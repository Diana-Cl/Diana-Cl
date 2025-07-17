---
layout: doc
outline: deep
title: 'فعـال‌سازی ویندوز با روش KMS'
description: 'راهنمای کامل فعال‌سازی قانونی ویندوز با روش رسمی KMS، قابل تمدید هر ۱۸۰ روز'
date: 2025-06-04
editLink: true
head:
  - - meta
    - name: description
      content: فعال‌سازی ایمن و قانونی ویندوز ۱۰، ویندوز ۱۱ با روش KMS. قابل تمدید، بدون نیاز به فایل اضافی و مطابق با کانال‌های رسمی مایکروسافت.
  - - meta
    - name: keywords
      content: فعال‌سازی KMS، ویندوز ۱۰، ویندوز ۱۱، فعال‌سازی، روش قانونی، تمدید لایسنس، فعال‌سازی موقت
  - - meta
    - property: og:title
      content: راهنمای فعال‌سازی ویندوز با روش رسمی KMS
  - - meta
    - property: og:description
      content: آموزش کامل و ساده برای فعال‌سازی قانونی و قابل تمدید ویندوز با روش رسمی KMS
---

# فعال‌سازی ویندوز با روش KMS

> این راهنما نحوه فعال‌سازی موقت و ایمن ویندوز و آفیس را با استفاده از روش رسمی `KMS` توضیح می‌دهد.
>
> این روش توسط مایکروسافت برای لایسنس‌های حجمی ارائه شده و به‌مدت `180` روز معتبر است. پس از پایان این دوره، به‌راحتی می‌توان آن را تمدید کرد.

::: tip پیش‌نیازها

- اتصال پایدار به اینترنت
- دسترسی ادمین <Badge type="danger" text="Administrator" /> برای CMD در کامپیوتر
- اتصال به VPN درصورت اجرا نشدن فرامین (دامنه‌ها فعلاً فیلتر نشده‌اند پس طبیعتاً برای اجرای دستورها نیازی به اتصال VPN نیست)

:::

## مرحله ۱. اجرای Command Prompt با مجوز مدیر سیستم

### روش الف: استفاده از نوار جستجو <Badge type="danger" text="پیشنهادی" />

1. روی دکمه `Start` یا آیکون `Search` در taskbar کلیک کنید
2. عبارت `cmd` یا `Command Prompt` را تایپ کنید
3. روی گزینه **Run as administrator** کلیک نمایید

<p align="center">
  <img src="https://github.com/user-attachments/assets/4465a2d3-6c93-4ee1-bb63-94ab7b8e06ac" alt="run-cmd-as-admin" width="540px" />
</p>

::: tip روش‌های جایگزین

::: details برای مشاهده روش‌های دیگر کلیک کنید

### روش ب: استفاده از Run Box

1. کلیدهای `Win (⊞) + R` را همزمان فشار دهید
2. عبارت `cmd` یا `command prompt` را تایپ کنید
3. برای اجرا به عنوان مدیر، کلیدهای `Ctrl + Shift + Enter` را فشار دهید
4. اگر پنجره User Account Control ظاهر شد، روی `Yes` کلیک کنید

<p align="center">
  <img src="https://github.com/user-attachments/assets/4465a2d3-6c93-4ee1-bb63-94ab7b8e06ac" alt="run-cmd-as-admin" width="540px" />
</p>

### روش ج: استفاده از Power User Menu

1. روی آیکون `Windows Start` در `Taskbar` کلیک راست کنید (یا `Win + X` را فشار دهید)
2. روی گزینه **Windows Terminal (Admin)** در ویندوز ۱۱ یا **Windows PowerShell (Admin)** در ویندوز ۱۰ کلیک کنید

> همچنین می‌توانید از [این لینک][2] برای مشاهده ۸ روش اجرای **cmd** و از [این لینک][1] برای اجرای PowerShell به ۱۰ روش مختلف در ویندوز استفاده کنید.

:::

## مرحله ۲. نصب کلید عمومی KMS

در پنجره Command Prompt، دستور زیر را اجرا کنید. حتماً `Your-License-Key` را با کلید مناسب از جدول زیر که با نسخه ویندوز شما هم‌خوانی دارد جایگزین کنید:

```reg
slmgr /ipk Your-License-Key
```

::: tip تشخیص نسخه ویندوز شما

::: details برای مشاهده روش‌های مختلف کلیک کنید

### روش الف: استفاده از میانبر کیبورد <Badge type="danger" text="پیشنهادی" />

`Win (⊞) + R`
کلیدهای `Win (⊞) + Pause/Break` را همزمان فشار دهید. این کار بخش **About** را در **Settings** مستقیماً باز می‌کند و شما نسخه ویندوز خود را در زیر **Windows specifications** خواهید دید.

<p align="center">
  <img src="https://github.com/user-attachments/assets/647ef16b-9208-4ff3-a94b-825ffa99721f" alt="about-system" width="540px" />
</p>

### روش ب: استفاده از تنظیمات سیستم

1. روی دکمه `🪟 Start` و سپس روی `⚙️ Settings` کلیک کنید
2. روی `💻 System` کلیک کنید
3. به پایین اسکرول کرده و روی `ℹ️ About` کلیک کنید
4. در زیر `Windows specifications`، نسخه ویندوز شما را خواهید دید

### روش ج: استفاده از Run Box

1. کلیدهای `Win + R` را فشار دهید تا Run dialog box باز شود
2. یکی از موارد `ms-settings:about` یا `winver` یا `msinfo32` را تایپ کنید و Enter را فشار دهید
3. پنجره‌ای ظاهر می‌شود که نسخه ویندوز، Build number و سایر جزئیات را نشان می‌دهد

<p align="center">
  <img src="https://github.com/user-attachments/assets/f764797a-e07f-4c58-b932-bfe7b359a7bd" alt="winver-command" width="540px" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/4c7edc15-1c02-4d7b-ab5f-df70eaff8ad7" alt="winver-response" width="540px" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/a6360712-0ad0-4be4-b0a4-01171d293d83" alt="msinfo32-command" width="540px" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/8592c1bd-4a1a-47c1-bd21-0eb17049db31" alt="msinfo32-response" width="540px" />
</p>


### روش د: استفاده از Command Prompt یا PowerShell

1. ابتدا Command Prompt یا PowerShell را اجرا کنید
2. یکی از عبارات `systeminfo`  یا  `systeminfo | findstr /B /C:"OS Name" /B /C:"OS Version"` را تایپ کرده و Enter را فشار دهید

<p align="center">
  <img src="https://github.com/user-attachments/assets/16e8f49a-0cec-4836-b841-0cbd9344fbb1" alt="findstr command" width="540px" />
</p>

همچنین می‌توانید `slmgr /dlv` را تایپ کنید که اطلاعات مفصل لایسنس را نمایش می‌دهد:

<p align="center">
  <img src="https://github.com/user-attachments/assets/86925e56-7cac-4b53-8ccf-6addcd799ece" alt="slmgr-command" width="540px" />
</p>

:::

لطفاً یکی از **کلیدهای لایسنس** را از لیست زیر که **با نسخه ویندوز شما مطابقت دارد** انتخاب کنید و آن را با عبارت `Your-License-Key` در دستور جایگزین کنید (با راست-کلیک).

### کلیدهای لایسنس حجمی <Badge type="danger" text="GVLK" />


| نسخه ویندوز      | کلید GVLK                     |
| :--------------- | :---------------------------- |
| Home             | TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 |
| Home N           | 3KHY7-WNT83-DGQKR-F7HPR-844BM |
| Home SL [^3]     | 7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH |
| Home CS [^4]     | PVMJN-6DFY6–9CCP6–7BKTT-D3WVR |
| Pro              | W269N-WFGWX-YVC9B-4J6C9-T83GX |
| Pro N            | MH37W-N47XK-V7XM9-C7227-GCQG9 |
| Education        | YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY |
| Education N      | 84NGF-MHBT6-FXBX8-QWJK7-DRR8H |
| Pro Education    | NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |
| Pro Education N  | 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |
| Pro for W [^5]   | DXG7C-N36C4-C4HTG-X4T3X-2YV77 |
| Pro N for W [^6] | WYPNQ-8C467-V2W6J-TX4WX-WT2RQ |
| Enterprise       | NPPR9-FWDCX-D2C8J-H872K-2YT43 |
| Enterprise N     | DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |
| Team             | XKCNC-J26Q9-KFHD2-FKTHY-KD72Y |
| S                | V3WVW-N2PV2-CGWC3-34QGF-VMJ2C |
| SE               | KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W |

<br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/d5d93702-7865-4552-85d0-6916b1331bc0" alt="Install-KMS-Key" width="580px" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/50c23cad-7690-49fb-bf1c-d1c7cc66f0fe" alt="install-KMS-keyy" width="580px" />
</p>

::: details کلیدهای لایسنس جایگزین

|           **کلید**            |    **نسخه**    |
| :---------------------------: | :------------: |
| TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 |      Home      |
| 3KHY7-WNT83-DGQKR-F7HPR-844BM |     Home N     |
| 7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH |    Home SL     |
| PVMJN-6DFY6–9CCP6–7BKTT-D3WVR |    Home CS     |
| W269N-WFGWX-YVC9B-4J6C9-T83GX |  Professional  |
| MH37W-N47XK-V7XM9-C7227-GCQG9 | Professional N |
| NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |   Education    |
| 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |  Education N   |
| NPPR9-FWDCX-D2C8J-H872K-2YT43 |   Enterprise   |
| DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |  Enterprise N  |

:::

## مرحله ۳. تنظیم آدرس سرور KMS

سپس، سیستم خود را به یک سرور KMS عمومی متصل کنید. این دستور را اجرا کنید:

```reg
slmgr /skms kms8.msguides.com
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/edd0835f-c314-4ef8-a87d-a33e29f3f7c0" alt="set-kms-server" width="580px" />
</p>

## مرحله ۴. فعال‌سازی ویندوز

در نهایت، با اجرای این دستور فعال‌سازی را انجام دهید:

```reg
slmgr /ato
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/95e014e5-8946-4036-84ca-77ebb6122b1b" alt="active-windows" width="580px" />
</p>

## مرحله ۵. بررسی وضعیت فعال‌سازی

**همه چیز آماده است!**

### برای ویندوز ۱۰

**Settings → Update & Security → Activation** [^7]

### برای ویندوز ۱۱

**Settings → System → Activation** [^8]


<p align="center">
  <img src="https://github.com/user-attachments/assets/da52f1bb-79c9-45db-bade-a0f56cd0a739" alt="activated" width="580px" />
</p>

### رفع مشکلات

- **خطای 0xC004F074:** معمولاً به این معنی است که اتصال اینترنت شما ناپایدار است یا سرور شلوغ است. مطمئن شوید که آنلاین هستید و دوباره دستور `slmgr /ato` را امتحان کنید.
- **این روش کار نمی‌کند؟** اگر همچنان مشکل دارید، روش **HWID** را از [**راهنمای اصلی**](./intro) امتحان کنید.
- بد نیست صفحه [**سوالات پرتکرار**](./faq) را مرور کنید — به احتمال زیاد جواب‌تان اینجاست.
- اگر همچنان مشکل پابرجا بود — با ما [**در ارتباط**](./troubleshoot) باشید.
<h3 align="left">کنجکاو باشید 🪐🩶</h3>


### درباره کلیدهای میانبر 

::: details <Badge type="danger" text="فقط برای علاقه‌مندان" />

**از کلیدهای میانبر** برای باز کردن برنامه‌های پیش‌فرض در منوی Win+X استفاده کنید.

**منوی Power user** یک منوی کوتاه است که برخی از ابزارهای پیشرفته سیستم مانند event viewer، device manager، disk management، computer management، task manager و غیره را فهرست می‌کند.

<p align="center">
  <img src="https://github.com/user-attachments/assets/7fa52188-2ac2-4b4d-9600-cf3f92e11d3d" alt="windows-plus-x-menu" width="320px" />
</p>

برنامه‌های پیش‌فرض در منوی Power User دارای کلید میانبر متناظر هستند. آشنایی با کلیدهای میانبر برنامه‌های معمول می‌تواند زمان زیادی صرفه‌جویی کند و بهره‌وری را افزایش دهد.  
به عنوان مثال:

- فشردن **`Windows + X`** منوی **Power User** (منوی Win+X) را باز می‌کند.
- فشردن کلید دوم (مثل `F`، `B`، `U`) برنامه متناظر را انتخاب می‌کند.
- برای گزینه‌های خاموش/راه‌اندازی مجدد، `U` زیرمنو را باز می‌کند، سپس `I`، `S`، `U` هرکدام عمل خاصی را انجام می‌دهند، برای مثال می‌توانید `R` را برای راه‌اندازی مجدد سیستم فشار دهید.

در زیر کلیدهای میانبر متناظر با هر برنامه آمده است:

| میانبر کیبورد               | برنامه                   |
| --------------------------- | ------------------------ |
| `Windows + X`, سپس `F`      | Apps and Features        |
| `Windows + X`, سپس `B`      | Mobility Center          |
| `Windows + X`, سپس `O`      | Power Options            |
| `Windows + X`, سپس `V`      | Event Viewer             |
| `Windows + X`, سپس `Y`      | System                   |
| `Windows + X`, سپس `M`      | Device Manager           |
| `Windows + X`, سپس `W`      | Network Connections      |
| `Windows + X`, سپس `K`      | Disk Management          |
| `Windows + X`, سپس `G`      | Computer Management      |
| `Windows + X`, سپس `A`      | Windows Terminal (Admin) |
| `Windows + X`, سپس `T`      | Task Manager             |
| `Windows + X`, سپس `N`      | Settings                 |
| `Windows + X`, سپس `E`      | File Explorer            |
| `Windows + X`, سپس `S`      | Search                   |
| `Windows + X`, سپس `R`      | Run                      |
| `Windows + X`, سپس `U`, `I` | Sign out                 |
| `Windows + X`, سپس `U`, `S` | Sleep                    |
| `Windows + X`, سپس `U`, `U` | Shut Down                |
| `Windows + X`, سپس `U`, `R` | Restart                  |
| `Windows + X`, سپس `D`      | Desktop                  |

:::


[^1]: ۱۰ روش برای اجرای PowerShell در ویندوز [اینجا بخوانید][1].

[^2]: ساده‌ترین روش دیگر برای اجرای **PowerShell** از طریق **Power User Menu** می‌باشد. <br/> - 1. روی آیکون `Windows Start` در `Taskbar` کلیک راست کنید تا منوی حاوی میانبرهای ابزارهای پرکاربرد باز شود، همچنین می‌توانید این منو را با `Win (⊞) + x` باز کنید.<br/> - 2. سپس بر روی گزینه **Windows Terminal (Admin)** در ویندوز 11 و یا **Windows PowerShell (Admin)** در ویندوز 10 کلیک کنید.

[^3]: نسخه تک زبانه Home.

[^4]: نسخه مخصوص کشور Home.

[^5]: Professional for Workstations.

[^6]: Professional N for Workstations.

[^7]: برای بررسی وضعیت فعال‌سازی ویندوز 10، به <br/> Settings → Update & Security → Activation <br/> بروید. وضعیت فعال‌سازی شما در آنجا فهرست شده است. <br/> اگر ویندوز فعال باشد، باید "Activated" را با علامت تیک سبز ببینید.

[^8]: برای بررسی وضعیت فعال‌سازی ویندوز 11، به مسیر: <br/>   Settings → System → Activation <br/>بروید. وضعیت فعال‌سازی نمایش داده می‌شود و نشان می‌دهد که آیا ویندوز فعال است یا خیر، همراه با جزئیات روش فعال‌سازی و هر حساب مایکروسافت پیوند شده.

[1]: https://www.minitool.com/news/open-windows-11-powershell.html
[2]: https://www.minitool.com/news/open-command-prompt-windows-11.html
[3]: https://github.com/NiREvil/windows-activation/discussions
[4]: mailto:diana.clk01@gmail.com
