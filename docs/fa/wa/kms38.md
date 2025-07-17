---
layout: doc
outline: deep
title: 'فعال‌سازی KMS38'
description: 'فعال‌سازی KMS38 را کشف کنید - یک راه‌حل امن و منبع باز برای فعال‌سازی محصولات ویندوز و آفیس.'
date: 2025-03-06
editLink: true
---

# فعال‌سازی KMS38

> فعال‌سازی KMS38 را کشف کنید - یک راه‌حل امن و منبع باز برای فعال‌سازی محصولات ویندوز و آفیس
>
> KMS38 فعال‌سازی آفلاین برای ویندوز 10/11 و سرور (بیلد 14393+) با اعتبار تا سال 2038 را فراهم می‌کند، بدون اینکه هیچ فایلی در سیستم شما باقی بگذارد.
>
> یاد بگیرید که چگونه این روش هوشمندانه فناوری KMS مایکروسافت را برای فعال‌سازی دائمی آفلاین گسترش می‌دهد.

::: tip بررسی اجمالی

- این روش فعال‌سازی ویندوز 10/11 و ویندوز سرور (بیلدهای 14393 و بالاتر) را تا 19 ژانویه 2038، 03:14:07 UTC فعال می‌کند.
- این روش فعال‌سازی هیچ فایلی را در سیستم ذخیره نمی‌کند.
- این روش فعال‌سازی به صورت آفلاین کار می‌کند.
- برخلاف گزینه‌های فعال‌سازی HWID و آنلاین KMS، KMS38 با هیچ روش فعال‌سازی رسمی مطابقت ندارد.

:::


## چگونه کار می‌کند؟

- در یک محیط فعال‌سازی [KMS][1] واقعی، فعال‌سازی حداکثر تا 180 روز طول می‌کشد. این کار با استفاده از یک مجوز معتبر و راه‌اندازی سرور انجام می‌شود.
  - در فرآیند ارتقاء عمده ویندوز، سیستم از `gatherosstate.exe` برای انتقال دوره فعال‌سازی KMS باقی‌مانده استفاده می‌کند. این کار را با ایجاد یک بلیط که می‌تواند به صورت آفلاین استفاده شود، انجام می‌دهد.

- ترفند این است که ما می‌توانیم `gatherosstate.exe` را در مورد دوره فعال‌سازی KMS باقی‌مانده فریب دهیم و به صورت دستی دوره مورد نظر را تا حداکثر 19 ژانویه 2038، 03:14:07 UTC قرار دهیم.

- **چرا تا سال 2038 محدود شده است؟**
  - این به دلیل [مشکل سال 2038][2] است. این تاریخ (19 ژانویه 2038، 03:14:07 UTC) حداکثر مقداری است که می‌تواند در یک عدد صحیح 32 بیتی علامت‌دار قرار گیرد.

- **چگونه می‌توانیم gatherosstate.exe را متقاعد کنیم؟**
  - دو روش برای آن وجود دارد.
    - **1-** قرار دادن یک فایل [slc.dll سفارشی][3] در کنار gatherosstate.exe: gatherosstate.exe از فایل `C:\Windows\System32\slc.dll` سیستم برای جمع‌آوری اطلاعات سیستم استفاده می‌کند. اگر یک فایل slc.dll سفارشی را در کنار gatherosstate.exe قرار دهیم که بتواند داده‌های بیهوده به آن ارسال کند، آنگاه به سادگی آن را می‌پذیرد و یک بلیط معتبر تولید می‌کند که امکان فعال‌سازی تا 19 ژانویه 2038، 03:14:07 UTC را فراهم می‌کند.
    - **2-** [تغییر][4] خود فایل gatherosstate.exe به طوری که وضعیت فعال‌سازی سیستم را بررسی نکند و ما بتوانیم دوره فعال‌سازی را به دلخواه خود قرار دهیم.

 ### مهم

::: important **جهت شفاف سازی**

- ما **هیچ فایل سیستمی روی برد را برای دریافت بلیط تغییر/پچ نمی‌کنیم**.
- Gatherosstate.exe بخشی از فایل ISO است و در فایل‌های سیستمی درایو C موجود نیست. فایل slc.dll سیستم دست نخورده باقی می‌ماند؛ در عوض، ما از slc.dll سفارشی فقط برای یک لحظه کوتاه تولید بلیط استفاده می‌کنیم.
  - آخرین نسخه MAS از هیچ یک از این روش‌ها استفاده نمی‌کند؛ در عوض، از بلیط‌های جهانی آماده استفاده می‌کند (برای اطلاعات فعال‌سازی دستی به زیر مراجعه کنید).
    - **س:** آیا مایکروسافت می‌تواند این نوع فعال‌سازی را مسدود کند؟
    - **ج:** نه به طور مستقیم. آنها فقط می‌توانند Clipup را به‌روزرسانی کنند تا حداکثر دوره فعال‌سازی 180 روز را مجاز کند. کار زیادی از طرف آنها نمی‌تواند انجام شود. بلیط‌ها اصلاً به مایکروسافت ارسال نمی‌شوند، بنابراین آنها نمی‌توانند آنها را مسدود کنند یا مستقیماً اقدامی انجام دهند.

:::

## محصولات پشتیبانی شده

### ویندوز 10 / 11

|                     نام‌های محصول                     |        EditionID         |  کلید مجوز حجمی عمومی   |
| :---------------------------------------------------: | :----------------------: | :---------------------------: |
|                       Education                       |        Education         | NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |
|                      Education N                      |        EducationN        | 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |
|                      Enterprise                       |        Enterprise        | NPPR9-FWDCX-D2C8J-H872K-2YT43 |
|                     Enterprise N                      |       EnterpriseN        | DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |
|                     Enterprise G                      |       EnterpriseG        | YYVX9-NTFWV-6MDM3-9PT4T-4M68B |
|                    Enterprise G N                     |       EnterpriseGN       | 44RPN-FTY23-9VTTB-MP9BX-T84FV |
|                 Enterprise LTSB 2016                  |       EnterpriseS        | DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ |
|                 Enterprise LTSC 2019                  |       EnterpriseS        | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
|                 Enterprise LTSC 2021                  |       EnterpriseS        | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
|                 Enterprise LTSC 2024                  |       EnterpriseS        | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
|                Enterprise N LTSB 2016                 |       EnterpriseSN       | QFFDN-GRT3P-VKWWX-X7T3R-8B639 |
|                Enterprise N LTSC 2019                 |       EnterpriseSN       | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
|                Enterprise N LTSC 2021                 |       EnterpriseSN       | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
|                Enterprise N LTSC 2024                 |       EnterpriseSN       | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| IoT Enterprise LTSC 2021 <br/> (19044.2788 و بالاتر) |      IoTEnterpriseS      | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
|               IoT Enterprise LTSC 2024                |      IoTEnterpriseS      | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
|                         Home                          |           Core           | TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 |
|                        Home N                         |          CoreN           | 3KHY7-WNT83-DGQKR-F7HPR-844BM |
|                      Home China                       |   CoreCountrySpecific    | PVMJN-6DFY6-9CCP6-7BKTT-D3WVR |
|                 Home Single Language                  |    CoreSingleLanguage    | 7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH |
|                         Lean                          |          CloudE          | NBTWJ-3DR69-3C4V8-C26MC-GQ9M6 |
|   Enterprise multi-session <br/> (17763 و بالاتر)    |        ServerRdsh        | CPWHC-NT2C7-VYW78-DHDB2-PG3GK |
|   Enterprise multi-session <br/> (17134 و قبل)   |        ServerRdsh        | 7NBT4-WGBQX-MP4H7-QXFF8-YP3KX |
|                          Pro                          |       Professional       | W269N-WFGWX-YVC9B-4J6C9-T83GX |
|                         Pro N                         |      ProfessionalN       | MH37W-N47XK-V7XM9-C7227-GCQG9 |
|                     Pro Education                     |  ProfessionalEducation   | 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y |
|                    Pro Education N                    |  ProfessionalEducationN  | YVWGF-BXNMC-HTQYQ-CPQ99-66QFC |
|                 Pro for Workstations                  | ProfessionalWorkstation  | NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J |
|                Pro N for Workstations                 | ProfessionalWorkstationN | 9FNHH-K3HBT-3W4TD-6383H-6XYWF |
|                          SE                           |       CloudEdition       | 37D7F-N49CB-WQR8W-TBJ73-FM8RX |
|                         SE N                          |      CloudEditionN       | 6XN7V-PCBDC-BDBRH-8DQY7-G6R44 |

<br/>

### ویندوز سرور 2025 (LTSC)

|            نام‌های محصول             |    EditionID     |  کلید مجوز حجمی عمومی   |
| :----------------------------------: | :--------------: | :---------------------------: |
|     Windows Server 2025 Standard     |  ServerStandard  | TVRH6-WHNXV-R9WG3-9XRFY-MY832 |
|    Windows Server 2025 Datacenter    | ServerDatacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF |
|    Windows Server 2025 Azure Core    |  ServerAzureCor  | FCNV3-279Q9-BQB46-FTKXX-9HPRH |
| Windows Server 2025 Azure Datacenter |  ServerTurbine   | XGN3F-F394H-FD2MY-PP6FD-8MCRC |

<br/>

### ویندوز سرور 2022 (LTSC)

|            نام‌های محصول             |    EditionID     |  کلید مجوز حجمی عمومی   |
| :----------------------------------: | :--------------: | :---------------------------: |
|    Windows Server 2022 Datacenter    | ServerDatacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |
|     Windows Server 2022 Standard     |  ServerStandard  | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |
|    Windows Server 2022 Azure Core    |  ServerAzureCor  | 6N379-GGTMK-23C6M-XVVTC-CKFRQ |
| Windows Server 2022 Azure Datacenter |  ServerTurbine   | NTBV8-9K7Q8-V27C6-M2BTV-KHMXV |

<br/>

### ویندوز سرور 2019 (LTSC)

|         نام‌های محصول          |    EditionID     |  کلید مجوز حجمی عمومی   |
| :----------------------------: | :--------------: | :---------------------------: |
| Windows Server 2019 Datacenter | ServerDatacenter | WMDGN-G9PQG-XVVXX-R3X43-63DFG |
|  Windows Server 2019 Standard  |  ServerStandard  | N69G4-B89J2-4G8F4-WWYCC-J464C |
| Windows Server 2019 Essentials |  ServerSolution  | WVDHN-86M7X-466P6-VHXV7-YY726 |
| Windows Server 2019 Azure Core |  ServerAzureCor  | FDNH6-VW9RW-BXPJ7-4XTYG-239TB |
|   Windows Server 2019 ARM64    |   ServerARM64    | GRFBW-QNDC4-6QBHG-CCK3B-2PR88 |

<br/>

### ویندوز سرور 2016 (LTSC)

| نام‌های محصول                     | EditionID          | کلید مجوز حجمی عمومی    |
| --------------------------------- | ------------------ | ----------------------------- |
| Windows Server 2016 ARM64         | ServerARM64        | K9FYF-G6NCK-73M32-XMVPY-F9DRR |
| Windows Server 2016 Datacenter    | ServerDatacenter   | CB7KF-BWN84-R7R2Y-793K2-8XDDG |
| Windows Server 2016 Standard      | ServerStandard     | WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY |
| Windows Server 2016 Essentials    | ServerSolution     | JCKRF-N37P4-C2D82-9YXRT-4M63B |
| Windows Server 2016 Cloud Storage | ServerCloudStorage | QN4C6-GBJD2-FB422-GHWJK-GJG2R |
| Windows Server 2016 Azure Core    | ServerAzureCor     | VP34G-4NPPG-79JTQ-864T4-R3MQX |

<br/>

### ویندوز سرور 23H2 (کانال سالانه)

| نام‌های محصول             | EditionID        | کلید مجوز حجمی عمومی    |
| ------------------------- | ---------------- | ----------------------------- |
| Windows Server Datacenter | ServerDatacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |

<br/>

### ویندوز سرور 20H2، 2004، 1909، 1903 و 1809 (کانال نیمه سالانه)

| نام‌های محصول             | EditionID            | کلید مجوز حجمی عمومی    |
| ------------------------- | -------------------- | ----------------------------- |
| Windows Server Datacenter | ServerDatacenterACor | 6NMRW-2C8FM-D24W7-TQWMY-CWH2D |
| Windows Server Standard   | ServerStandardACor   | N2KJX-J94YW-TQVFB-DG9YT-724CC |

<br/>

### ویندوز سرور 1803 (کانال نیمه سالانه)

| نام‌های محصول             | EditionID            | کلید مجوز حجمی عمومی    |
| ------------------------- | -------------------- | ----------------------------- |
| Windows Server Datacenter | ServerDatacenterACor | 2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG |
| Windows Server Standard   | ServerStandardACor   | PTXN8-JFHJM-4WC78-MPCBR-9W4KR |

<br/>

### ویندوز سرور 1709 (کانال نیمه سالانه)

| نام‌های محصول             | EditionID            | کلید مجوز حجمی عمومی    |
| ------------------------- | -------------------- | ----------------------------- |
| Windows Server Datacenter | ServerDatacenterACor | 6Y6KB-N82V8-D8CQV-23MJW-BWTG6 |
| Windows Server Standard   | ServerStandardACor   | DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4 |

<br/>

::: tip توجه

- سیستم‌ها در تمام معماری‌ها (x86، x64 و arm64) پشتیبانی می‌شوند.
- هر نسخه ارزیابی ویندوز (یعنی 'EVAL' LTSB/C) فراتر از دوره ارزیابی. می‌توانید از گزینه TSforge در MAS برای بازنشانی فعال‌سازی در هر زمان استفاده کنید.
- KMS38 فقط از نسخه 14393 (1607) و نسخه‌های جدیدتر ویندوز/سرور پشتیبانی می‌کند.
- نسخه اولیه (19044.1288) Iot LTSC 2021 از مجوز KMS پشتیبانی نمی‌کند و بعداً در به‌روزرسانی 19044.2788 اضافه شد.
- نسخه Server Azure Datacenter (ServerTurbine) از فعال‌سازی در سیستم‌های غیر azure پشتیبانی نمی‌کند.

:::

<br/>

## چگونه kms38 را حذف کنیم

::: danger چگونه KMS38 را حذف کنیم

- در MAS، به بخش فعال‌سازی KMS38 بروید و گزینه Remove KM38 Protection را اعمال کنید.
- پس از آن، در MAS، به Troubleshoot بروید و گزینه Fix Licensing را اعمال کنید.
- انجام شد ✔️

:::

## KMS38 - Server Cor/Acor

- نسخه‌های Windows Server Cor/Acor (بدون رابط کاربری گرافیکی) فایل `clipup.exe` را ندارند.
- برای فعال‌سازی KMS38 آن، باید فایل `ClipUp.exe` را از این لینک [app.box.com/s/][5] دانلود کنید.
   `فایل: ClipUp.exe`
   `SHA-256: 0d6e9f6bbd0321eda149658d96040cb4f79e0bd93ba60061f25b28fecbf4d4ef`
   این فایل دارای امضای دیجیتالی است که قابل تأیید است. همچنین می‌توانید این فایل را از [ISO رسمی Windows Server 2016 x64 RTM.download][6] دریافت کنید.
- فایل `ClipUp.exe` را در کنار اسکریپت فعال‌سازی KMS38 قرار دهید. این یا `MAS_AIO.cmd` یا `KMS38_Activation.cmd` خواهد بود
   اسکریپت فعال‌سازی `ClipUp.exe` را در پوشه فعلی (از جایی که اسکریپت در حال اجرا است) بررسی می‌کند و بر اساس آن از آن استفاده می‌کند.

<br/>

### حفاظت KMS38

- فعال‌سازی KMS38 در برابر جایگزینی ناخواسته توسط یک فعال‌کننده KMS 180 روزه آسیب‌پذیر است.
- از MAS 1.7، اسکریپت به طور پیش‌فرض حفاظت KMS38 را فعال می‌کند.

- اگر قصد دارید از KMS_VL_ALL توسط abbodi1406 یا [MAS][7] (گزینه آنلاین KMS) برای **فعال‌سازی آفیس** استفاده کنید، می‌توانید این حفاظت را حذف کنید.
- در زیر توضیح داده شده است که چگونه اسکریپت از KMS38 محافظت می‌کند.
- در روش فعال‌سازی KMS، ویندوز ابتدا IP KMS ثبت شده به عنوان یک KMS خاص را بررسی می‌کند، و اگر تعریف نشده باشد، سپس IP KMS جهانی را بررسی می‌کند.
  - واقعیت دیگر این است که اگر Localhost (محدوده IP 127.0.0.0/8) به عنوان IP KMS در ویندوز 8 و سیستم عامل‌های بعدی تعریف شود، ویندوز آن را به عنوان یک IP KMS معتبر نمی‌پذیرد.
  - این اسکریپت به سادگی از واقعیت‌های فوق برای محافظت از فعال‌سازی KMS38 در برابر بازنویسی توسط هر فعال‌سازی KMS 180 روزه جایگزین و 'عادی' استفاده می‌کند، و در عین حال، آن فعال‌کننده KMS می‌تواند برای فعال‌سازی آفیس استفاده شود.
  - مراحل اسکریپت
  - IP KMS خاص نسخه ویندوز را روی Localhost (127.0.0.2) تنظیم کنید
  - از رجیستری زیر در برابر ویرایش و حذف محافظت کنید
    `HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform\55c92734-d682-4d71-983e-d6ec3f16059f\XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\`
- انجام شد ✔️

[1]: https://docs.microsoft.com/en-us/previous-versions/tn-archive/ee939272(v=technet.10)?redirectedfrom=MSDN#kms-overview
[2]: https://en.wikipedia.org/wiki/Year_2038_problem
[3]: https://github.com/asdcorp/Integrated_Patcher_3
[4]: https://github.com/asdcorp/GamersOsState
[5]: https://app.box.com/s/cwoxub9tqyowhnyva6ign6qnogb6vk0o
[6]: https://download.microsoft.com/download/1/6/F/16FA20E6-4662-482A-920B-1A45CF5AAE3C/14393.0.160715-1616.RS1_RELEASE_SERVER_EVAL_X64FRE_EN-US.ISO
[7]: https://github.com/NiREvil/windows-activation
