---
layout: doc
outline: deep
title: 'فعال‌سازی دستی HWID'
description: 'آموزش فعال‌سازی HWID ویندوز 10/11 بدون نیاز به اسکریپت، ویژه کسانی که ترجیح می‌دهند مراحل را خودشان انجام دهند.'
date: 2024-02-11
editLink: true
---

# فعال‌سازی دستی HWID ویندوز 10/11

اگر دوست ندارید از ابزار یا اسکریپت آماده برای فعال‌سازی ویندوز استفاده کنید، این راهنما مخصوص شماست. مراحل فعال‌سازی `HWID` را می‌توانید به‌سادگی و به‌صورت دستی انجام دهید.

::: info پشتیبانی

فعال‌سازی HWID فقط روی ویندوز ۱۰ یا ۱۱ پشتیبانی می‌شود.

:::

<br/>

## مراحل فعال‌سازی دستی

> قبل از انجام هرکاری از **اتصال اینترنت** سیستم خود مطمعن شوید.

### 1. نسخه ویندوز خود را پیدا کنید

- کلیدهای `Win (⊞) + Pause/Break` را همزمان فشار دهید.
- این کار بخش **About** را در **Settings** مستقیماً باز می‌کند و شما نسخه ویندوز خود را زیر `Windows specifications` خواهید دید. <br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/647ef16b-9208-4ff3-a94b-825ffa99721f" alt="about-system" width="480px" /></p><br/>

::: tip برای یافتن نسخه ویندوز روش‌های دیگری نیز وجود دارد

::: details برای مشاهده توضیحات بیشتر کلیک کنید

#### 1.1 با استفاده از تنظیمات سیستم

- **مرحله ۱:** روی دکمه `🪟 Start` کلیک کرده و سپس گزینه `⚙️ Settings` را انتخاب کنید.
- **مرحله ۲:** در ادامه بر روی `💻 System` کلیک کنید.  
- **مرحله ۳:**  به پایین صفحه اسکرول کرده و روی گزینه‌ی `ℹ️ About` کلیک کنید.
- **مرحله ۴:** حال در زیر بخش `Windows specifications` نسخه ویندوز شما را قابل مشاهده‌است. <br/> 

#### 1.2 با استفاده از Run باکس

- **مرحله ۱:** کلیدهای `Win (⊞) + R` را فشار دهید تا Run دیالوگ باکس اجرا شود.   
- **مرحله ۲:** یکی از این سه دستور را در کادر مشخص Run تایپ کرده و Enter را فشار دهید. `winver` یا `msinfo32` یا `ms-settings:about`   
- **مرحله ۳:** در نهایت صفحه‌‌ای ظاهر خواهد شد که در آن می‌توان نسخه ویندوز، Build number و سایر جزئیات نرم‌افزاری - سخت‌افزاری را مشاهده کرد. <br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/f764797a-e07f-4c58-b932-bfe7b359a7bd" alt="winver-command" width="420px" /></p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/4c7edc15-1c02-4d7b-ab5f-df70eaff8ad7" alt="winver-response" width="420px" /></p><br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/a6360712-0ad0-4be4-b0a4-01171d293d83" alt="msinfo32-command" width="420px" /></p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/8592c1bd-4a1a-47c1-bd21-0eb17049db31" alt="msinfo32-response" width="420px" /></p><br/>

#### 1.3 با استفاده از CMD یا PowerShell [^1]

- **مرحله ۱:** روی دکمه `Start` یا آیکون search کلیک کنید.
- **مرحله ۲:** تایپ کنید: `cmd` یا `Command Prompt`.
- **مرحله ۳:** در Command Prompt، یکی از د‌و دستور را تایپ کرده و Enter را فشار دهید.

`systeminfo` و یا `systeminfo | findstr /B /C:"OS Name" /B /C:"OS Version"`

<p align="center">
  <img src="https://github.com/user-attachments/assets/16e8f49a-0cec-4836-b841-0cbd9344fbb1" alt="findstr command" width="420px" /></p><br/>

:::

### 2. دانلود فایل تیکت 
از [جدول زیر](#جدول-کلید-و-فایل-تیکت-نسخه‌-های-ویندوز) مطابق با نسخه ویندوز خود، فایل تیکت (Ticket) را دانلود کنید.

### 3. کپی فایل تیکت
فایل دانلود شده را به آدرس زیر منتقل کنید:  
`C:\ProgramData\Microsoft\Windows\ClipSVC\GenuineTicket`

::: danger نکته مهم

پوشه `ProgramData` پنهان است؛ آدرس را مستقیماً در نوار آدرس اکسپلورر وارد کنید.

:::

### 4. باز کردن تنظیمات بخش فعال‌سازی  
وارد Settings و سپس وارد بخش Activation شده و روی گزینه `Change product key` کلیک کنید.

### 5. وارد کردن کلید محصول  
کلید مربوط به نسخه ویندوز را از جدول زیر کپی و در کادر مربوطه وارد کنید.

### 6. اتمام فعال‌سازی  
  چند لحظه صبر کنید تا ویندوز به صورت خودکار فعال شود.

### 7. بررسی وضعیت فعال‌شدن ویندوز
برای بررسی وضعیت فعال‌سازی `ویندوز ۱۰`، از این طریق اقدام کنید:  
Settings → Update & Security → Activation. [^2]


برای بررسی وضعیت فعال‌سازی `ویندوز ۱۱`، بر روی دکمه `Start` کلیک کرده و سپس از این طریق اقدام کنید: 

Settings → System → Activation. [^3]  


<p align="center">
  <img src="https://github.com/user-attachments/assets/da52f1bb-79c9-45db-bade-a0f56cd0a739" alt="activated" width="540px" /></p><br/><br/>  

::: info رفع خطا

اگر هنگام وارد کردن کلید خطای `0x803fa067` دریافت کردید، اینترنت را قطع کنید و مجدداً کلید را وارد نمایید.  
پس از تایید، دوباره به اینترنت وصل شوید تا فعال‌سازی کامل شود.

:::

<hr/><br/>

## جدول کلید و فایل تیکت نسخه‌ های ویندوز

| نسخه ویندوز                           | کلید فعال‌سازی                | دانلود فایل تیکت                                                                                                              |
| ------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Education                             | YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Education.xml)                             |
| Education N                           | 84NGF-MHBT6-FXBX8-QWJK7-DRR8H | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Education.N.xml)                           |
| Enterprise                            | XGVPP-NMH47-7TTHJ-W3FW7-8HV2C | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.xml)                            |
| Enterprise N                          | 3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.xml)                          |
| Enterprise LTSB 2015                  | FWN7H-PF93Q-4GGP8-M8RF3-MDWWW | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSB.2015.xml)                  |
| Enterprise LTSB 2016                  | NK96Y-D9CD8-W44CQ-R8YTK-DYJWX | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSB.2016.xml)                  |
| Enterprise LTSC 2019                  | 43TBQ-NH92J-XKTM7-KT3KK-P39PB | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSC.2019.xml)                  |
| Enterprise N LTSB 2015                | NTX6B-BRYC2-K6786-F6MVQ-M7V2X | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.LTSB.2015.xml)                |
| Enterprise N LTSB 2016                | 2DBW3-N2PJG-MVHW3-G7TDK-9HKR4 | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.LTSB.2016.xml)                |
| Home                                  | YTMG3-N6DKC-DKB77-7M9GH-8HVX7 | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.xml)                                  |
| Home N                                | 4CPRK-NM3K3-X6XXQ-RXX86-WXCHW | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.N.xml)                                |
| Home China                            | N2434-X9D7W-8PF6X-8DV9T-8TYMD | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.China.xml)                            |
| Home Single Language                  | BT79Q-G7N6G-PGBYW-4YWX6-6F4BT | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.Single.Language.xml)                  |
| IoT Enterprise                        | XQQYW-NFFMW-XJPBH-K8732-CKFFD | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.xml)                        |
| IoT Enterprise Subscription           | P8Q7T-WNK7X-PMFXY-VXHBG-RRK69 | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.Subscription.xml)           |
| IoT Enterprise LTSC 2021              | QPM6N-7J2WJ-P88HH-P3YRH-YY74H | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.2021.xml)              |
| IoT Enterprise LTSC 2024              | CGK42-GYN6Y-VD22B-BX98W-J8JXD | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.2024.xml)              |
| IoT Enterprise LTSC Subscription 2024 | N979K-XWD77-YW3GB-HBGH6-D32MH | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.Subscription.2024.xml) |
| Pro                                   | VK7JG-NPHTM-C97JM-9MPGT-3V66T | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.xml)                                   |
| Pro N                                 | 2B87N-8KFHP-DKV6R-Y2C8J-PKCKT | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.N.xml)                                 |
| Pro Education                         | 8PTT6-RNW4C-6V7J2-C2D3X-MHBPB | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.Education.xml)                         |
| Pro Education N                       | GJTYN-HDMQY-FRR76-HVGC7-QPF8P | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.Education.N.xml)                       |
| Pro for Workstations                  | DXG7C-N36C4-C4HTG-X4T3X-2YV77 | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.for.Workstations.xml)                  |
| Pro N for Workstations                | WYPNQ-8C467-V2W6J-TX4WX-WT2RQ | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.N.for.Workstations.xml)                |
| S                                     | V3WVW-N2PV2-CGWC3-34QGF-VMJ2C | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Cloud.S.xml)                               |
| S N                                   | NH9J3-68WK7-6FB93-4K3DF-DJ4F6 | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Cloud.S.N.xml)                             |
| SE                                    | KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/CloudEdition.SE.xml)                       |
| SE N                                  | K9VKN-3BGWV-Y624W-MCRMQ-BHDCD | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/CloudEdition.SE.N.xml)                     |
| Team                                  | XKCNC-J26Q9-KFHD2-FKTHY-KD72Y | [دانلود](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Team.xml)                                  |

<br/>

::: tip Tip

اگر به دنبال روش آسان‌تر هستید، می‌توانید از [ابزار فعال‌سازی خودکار](./index-fa) استفاده کنید.

:::

<hr/><br/> 

[^1]: ساده‌ترین روش دیگر برای اجرای **PowerShell** از طریق **Power User Menu** می‌باشد. <br/> - 1. روی آیکون `Windows Start` در `Taskbar` کلیک راست کنید تا منوی حاوی میانبرهای ابزارهای پرکاربرد باز شود، همچنین می‌توانید این منو را با `Win (⊞) + x` باز کنید.<br/> - 2. سپس بر روی گزینه **Windows Terminal (Admin)** در ویندوز 11 و یا **Windows PowerShell (Admin)** در ویندوز 10 کلیک کنید.

[^2]: برای بررسی وضعیت فعال‌سازی ویندوز 10، به Settings → Update & Security → Activation بروید. وضعیت فعال‌سازی شما در آنجا فهرست شده است. <br/> اگر ویندوز فعال باشد، باید "Activated" را با علامت تیک سبز ببینید.

[^3]: برای بررسی وضعیت فعال‌سازی ویندوز 11، Settings را با کلیک روی دکمه Start باز کنید و سپس Settings → System → Activation را انتخاب کنید. <br/> وضعیت فعال‌سازی نمایش داده می‌شود و نشان می‌دهد که آیا ویندوز فعال است یا خیر، همراه با جزئیات روش فعال‌سازی و هر حساب مایکروسافت پیوند شده.
