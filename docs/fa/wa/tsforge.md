---
layout: doc
outline: deep
title: 'متود فعال‌سازی TSforge'
description: 'مقایسه روش‌های فعال‌سازی برای شرکت مایکروسافت مانند ویندوز و آفیس.'
date: 2025-04-06
editLink: true
head:
  - - meta
    - name: keywords
      content: فعال‌سازی ویندوز, آفیس 2013, ویندوز 10, ویندوز 11, hwid یا kms, kms, hwid, tsforge
---

# فعال‌سازی TSforge

### به سند `tsforge` خوش آمدید. این سند شامل جزئیاتی در مورد روش فعال‌سازی TSForge است.

::: tip یادداشت‌ها

> چگونه از آن استفاده کنیم؟
> لطفاً دستورالعمل‌ها را در [مقدمه](./index#مرحله-۲) بیابید

:::

## بررسی اجمالی
-   این فعال‌سازی تا زمان نصب مجدد ویندوز یا یک ارتقاء عمده ویژگی (با ارتقاءهای کوچک فعال‌سازی یا به‌روزرسانی‌های تجمعی ماهانه اشتباه نشود) دائمی است.
-   این روش فعال‌سازی **هیچ یک از اجزای ویندوز را تغییر نمی‌دهد و هیچ فایل جدیدی نصب نمی‌کند.**
-   پس از فعال شدن سیستم، سخت‌افزار را می‌توان به طور دلخواه بدون ایجاد غیرفعال‌سازی تغییر داد.
-   برای ZeroCID یا KMS4k نیازی به اینترنت نیست، اما برای StaticCID لازم است. اسکریپت از روش StaticCID از ویندوز 10 20H1 (19041) و نسخه‌های جدیدتر استفاده می‌کند.
-   این روش فعال‌سازی می‌تواند هر یک از محصولات زیر را در صورت وجود مجوز تلفنی و مدیریت صدور مجوز توسط SPP سیستم فعال کند. به عنوان مثال،
    *   ویندوز ویستا و بالاتر
    *   ویندوز سرور 2008 و بالاتر
    *   آفیس 2013 و بالاتر (نیاز به ویندوز 8 یا بالاتر دارد)
    *   افزونه‌های ویندوز (ESU، APPXLOB و غیره)
    *   میزبان‌های KMS ویندوز و آفیس (CSVLK)
-   اعتبارسنجی آنلاین (WAT) در ویندوز 7 دور زده می‌شود.
-   علاوه بر فعال‌سازی دائمی میزبان‌های KMS ویندوز و آفیس، سرور KMS را با 25 کلاینت (مورد نیاز برای فعال‌سازی کلاینت KMS) برای 30 روز (حداکثر) شارژ می‌کند.
-	علاوه بر فعال‌سازی، می‌تواند شمارنده rearm و دوره ارزیابی را بازنشانی کند، حالت دستکاری را پاک کند و قفل کلید ارزیابی را حذف کند.


## چگونه کار می‌کند؟

### ZeroCID

**فرآیند در ویندوز ویستا و 7**

<p align="center">
  <img src="https://github.com/user-attachments/assets/bda35f60-d1ba-4318-a65e-6843fdd11e41" width="540px">
</p>

**فرآیند در ویندوز 8 و بالاتر**

<p align="center">
  <img src="https://github.com/user-attachments/assets/770e6df6-74bc-40e0-b790-6f8e9273d000" width="540px">
</p><

- فعال‌سازی ویندوز توسط یک زیرسیستم به نام پلتفرم حفاظت از نرم‌افزار (SPP) مدیریت می‌شود.
- SPP اطلاعات مربوط به وضعیت فعال‌سازی را در فایل‌هایی به نام "فروشگاه فیزیکی" و "فروشگاه توکن" ذخیره می‌کند.
- محتویات فروشگاه فیزیکی به صورت رمزنگاری شده محافظت و یکپارچگی آن توسط SPPSvc/SPSys بررسی می‌شود و از تغییر آسان آن توسط کاربران جلوگیری می‌کند.
- فروشگاه فیزیکی معمولاً در این مکان‌ها یافت می‌شود:
  - ویندوز ویستا - `C:\Windows\System32\7B296FB0-376B-497e-B012-9C450E1B7327-2P-0.C7483456-A289-439d-8115-601632D005A0` و `C:\Windows\System32\7B296FB0-376B-497e-B012-9C450E1B7327-2P-1.C7483456-A289-439d-8115-601632D005A0`
  - ویندوز 7 - `C:\Windows\System32\7B296FB0-376B-497e-B012-9C450E1B7327-5P-0.C7483456-A289-439d-8115-601632D005A0` و `C:\Windows\System32\7B296FB0-376B-497e-B012-9C450E1B7327-5P-1.C7483456-A289-439d-8115-601632D005A0`
  - ویندوز 8 - `C:\Windows\System32\spp\store\data.dat`
  - ویندوز 8.1/10/11 - `C:\Windows\System32\spp\store\2.0\data.dat`
- فروشگاه توکن معمولاً در این مکان‌ها یافت می‌شود:
  - ویندوز ویستا - `C:\Windows\ServiceProfiles\NetworkService\AppData\Roaming\Microsoft\SoftwareLicensing\tokens.dat`
  - ویندوز 7 - `C:\Windows\ServiceProfiles\NetworkService\AppData\Roaming\Microsoft\SoftwareProtectionPlatform\tokens.dat`
  - ویندوز 8 - `C:\Windows\System32\spp\store\tokens.dat`
  - ویندوز 8.1/10/11 - `C:\Windows\System32\spp\store\2.0\tokens.dat`
- در نصب کلید محصول معمولی و فعال‌سازی تلفنی، داده‌های کش مرتبط در فروشگاه فیزیکی و فروشگاه توکن نوشته می‌شود. داده‌های فعال‌سازی تلفنی مذکور قبل از نوشته شدن، [به صورت رمزنگاری شده][1] در برابر شناسه نصب بررسی می‌شود. هنگامی که SPP دوباره راه‌اندازی می‌شود، فقط یک بررسی بسیار ابتدایی در برابر شناسه سخت‌افزار فعلی انجام می‌شود.
- با نوشتن مستقیم داده‌های کش جعلی در فروشگاه فیزیکی و فروشگاه توکن، می‌توانیم هر دو بررسی را دور بزنیم و باعث شویم SPP باور کند که یک کلید محصول و/یا شناسه تأیید جعلی نصب کرده است.
- برای دور زدن بررسی‌ها برای تغییرات سخت‌افزاری، یک [شناسه سخت‌افزار](./Hwid#hardware-id) با آستانه 0 در این داده‌های جعلی گنجانده شده است.
- در ویندوز 7، داده‌های کلید محصول جعلی حاوی مقداری به نام "شناسه منحصر به فرد کلید" نیست. این مقدار برای WAT و فعال‌سازی آنلاین مورد نیاز است، بنابراین حذف آن باعث می‌شود هر دو غیرفعال شوند و از ایجاد غیرفعال‌سازی توسط WAT جلوگیری می‌کند.
- وجود داده‌های معتبر کلید محصول و شناسه تأیید باعث می‌شود SPP محصول مشخص شده را تا زمانی که قادر به فعال‌سازی تلفنی باشد، فعال کند.
- این فرآیند به عنوان گزینه ZeroCID در [TSforge][2] پیاده‌سازی شده است

### StaticCID

- در [ویندوز 11 بیلد 27802][3]، مایکروسافت یک باگ را معرفی کرد که باعث می‌شود اعتبارسنجی کش شناسه تأیید همیشه با شکست مواجه شود و اعتبارسنجی را مستقیماً از شناسه تأیید ذخیره شده هر بار که وضعیت مجوز بررسی می‌شود، مجبور کند.
- به همین دلیل، ZeroCID در هیچ یک از بیلدهای Canary Insider ویندوز 11/سرور 2025 که پس از آن منتشر شده‌اند، یا هر بیلد خرده‌فروشی/پیش‌نمایش انتشار ویندوز 11/سرور 2025 جدیدتر از 26100.4188 کار نمی‌کند.
- برای دور زدن این باگ، از TSforge برای تنظیم شناسه نصب فعلی به شناسه یک کلید شناخته شده که می‌توان از آن برای تولید شناسه‌های تأیید معتبر استفاده کرد، استفاده می‌شود.
- سپس شناسه‌های تأیید از طریق اینترنت با استفاده از [یک کلاینت][4] برای API [VAMT][5] به دست می‌آیند.
- واریز این CID باعث فعال‌سازی می‌شود، زیرا CID با IID مطابقت دارد و SPP هرگز بررسی نمی‌کند که آیا IID با کلید محصول نصب شده مطابقت دارد یا خیر.
- کلیدهای محصول زیر در StaticCID استفاده می‌شوند:
  - مجوزهای RTM - `744NM-C4FXY-YGM8B-7MVJC-BBFB9`
  - مجوزهای آزمایشی - `PCPHN-JH4DV-KW84V-JTWT3-VXHBC`

### KMS4k

- در KMS4k، داده‌های پاسخ سرور KMS کش شده جعلی در فروشگاه معتبر نوشته می‌شود.
- برخلاف شبیه‌سازهای KMS معمولی، این روش می‌تواند به طور دلخواه انقضای فعال‌سازی را تا حداکثر 2147483640 (2^31 - 8) دقیقه یا 4083 سال تنظیم کند.
- این امکان فعال‌سازی KMS آفلاین را فراهم می‌کند که برای همه اهداف عملی عملاً بی‌نهایت است.

<br/>

## محصولات پشتیبانی شده

این روش فعال‌سازی می‌تواند هر یک از محصولات زیر را در صورت وجود مجوز تلفنی و مدیریت صدور مجوز توسط SPP سیستم فعال کند.

- **ویندوز**
  - ویندوز ویستا
  - ویندوز 7
  - ویندوز 8
  - ویندوز 8.1
  - ویندوز 10
  - ویندوز 11 (از 26100.4188 از ZeroCID پشتیبانی نمی‌کند)
- **ویندوز سرور**
  - ویندوز سرور 2008
  - ویندوز سرور 2008 R2
  - ویندوز سرور 2012
  - ویندوز سرور 2012 R2
  - ویندوز سرور 2016
  - ویندوز سرور 2019
  - ویندوز سرور 2022
  - ویندوز سرور 2025 (از 26100.4188 از ZeroCID پشتیبانی نمی‌کند)
- **مایکروسافت آفیس** (نیاز به ویندوز 8 یا بالاتر دارد) (همچنین از نسخه UWP آفیس پشتیبانی می‌کند)
  - آفیس 2013
  - آفیس 2016
  - آفیس 2019
  - آفیس 2021
  - آفیس 2024
- **افزونه‌های ویندوز**
  - **به‌روزرسانی‌های امنیتی تمدید شده تجاری (ESU)**
    - **ویندوز 7** (Enterprise، Professional، Ultimate و انواع E/N آنها)
    - **Windows Embedded POSReady 7** (Embedded)
    - **Windows Embedded Standard 7** (Embedded)
    - **ویندوز سرور 2008** (ServerDatacenter، ServerStandard، ServerEnterprise و انواع V/Core/VCore آنها)
    - **ویندوز سرور 2008 R2** (ServerDatacenter، ServerStandard، ServerEnterprise و انواع V/Core/VCore آنها)
    - **ویندوز سرور 2012** (ServerDatacenter، ServerStandard و انواع Core آنها)
	- **ویندوز 8.1** (Enterprise، Professional، EmbeddedIndustry و انواع E/N آنها)
    - **ویندوز سرور 2012 R2** (ServerDatacenter، ServerStandard و انواع Core آنها)
    - **ویندوز 10** (Education، Enterprise، IoTEnterprise، Professional، ProfessionalEducation، ProfessionalWorkstation و انواع N آنها)
  - **8/8.1 APPXLOB**
	- کلاینت
	- صنعت تعبیه‌شده
	- استاندارد تعبیه‌شده
	- سرور 2012
  - **سایر** (می‌توان از گزینه دستی انتخاب کرد)
    - OCUR
- **میزبان‌های KMS** (CSVLK)
  - ویندوز ویستا و بالاتر
  - ویندوز سرور 2008 و بالاتر
  - آفیس 2010 و بالاتر

::: tip توجه

> تمام معماری‌ها (x86، x64 و arm64) پشتیبانی می‌شوند.
> برای ویندوز، اولویت کلید اسکریپت این است: OEM_DM > OEM_COA_SLP > OEM_COA_NSLP > MAK > RETAIL
> برای آفیس، اولویت کلید اسکریپت این است: OEM_COA_NSLP > MAK > RETAIL

:::



### کلیدها

فعال‌سازی TSforge کلیدهایی برای محصولات مبتنی بر PKey2009 تولید می‌کند و داده‌های کلید محصول را برای محصولات مبتنی بر PKey2005 تنظیم می‌کند.
با این حال، نمی‌تواند کلیدهای ویندوز ویستا و ویندوز سرور 2008 را مدیریت کند. به همین دلیل فقط کلیدهای این محصولات در اینجا لیست شده‌اند.

کلیدها برای این نسخه‌ها در دسترس نیستند، اما از آنجایی که خود نسخه‌ها به صورت عمومی در دسترس نیستند، مهم نیست.

```reg
a797d61e-1475-470b-86c8-f737a72c188d   StarterN
5e9f548a-c8a9-44e6-a6c2-3f8d0a7a99dd   ServerComputeClusterV
```

### ویندوز ویستا
| نسخه      | کلید عمومی                   | نوع کلید |
|--------------|-------------------------------|----------|
| Business     | 4D2XH-PRBMM-8Q22B-K8BM3-MRW4W | Retail   |
| BusinessN    | 76884-QXFY2-6Q2WX-2QTQ8-QXX44 | Retail   |
| Enterprise   | YQPQV-RW8R3-XMPFG-RXG9R-JGTVF | Retail   |
| EnterpriseN  | Q7J9R-G63R4-BFMHF-FWM9R-RWDMV | Retail   |
| HomeBasic    | RCG7P-TX42D-HM8FM-TCFCW-3V4VD | Retail   |
| HomeBasicN   | HY2VV-XC6FF-MD6WV-FPYBQ-GFJBT | Retail   |
| HomePremium  | X9HTF-MKJQQ-XK376-TJ7T4-76PKF | Retail   |
| HomePremiumN | KJ6TP-PF9W2-23T3Q-XTV7M-PXDT2 | Retail   |
| Starter      | X9PYV-YBQRV-9BXWV-TQDMK-QDWK4 | Retail   |
| Ultimate     | VMCB9-FDRV6-6CDQM-RV23K-RP8F7 | Retail   |
| UltimateN    | CVX38-P27B4-2X8BT-RXD4J-V7CKX | Retail   |

<br/>

### ویندوز سرور 2008
| نسخه                        | کلید عمومی                   | نوع کلید   |
|--------------------------------|-------------------------------|------------|
| ServerComputeCluster           | 24FV9-H7JW8-C8Q6X-BQKMK-K977J | Retail     |
| ServerDatacenter               | 6QBHY-DXTPJ-T9W3P-DTJXX-4VQMB | Retail     |
| ServerDatacenterV              | 83TWG-TD3TC-HRDP2-K93FJ-Y34YC | OEM:NONSLP |
| ServerEnterprise               | MRB7H-QJRHG-FXTBR-B2Q2M-8WMTJ | Retail     |
| ServerEnterpriseIA64           | H4VB6-QPRWH-VDCYM-996P8-MHKFY | OEM:NONSLP |
| ServerEnterpriseV              | H8H7M-HDPQT-PJHQF-M7B83-9CVGV | Retail     |
| ServerHomePremium              | RGBMC-PQBVF-94Q9K-HD63B-VY6MP | Retail     |
| ServerHomeStandard             | 6C8KR-MD3QK-9GWFW-44CY2-W9CBM | Retail     |
| ServerMediumBusinessManagement | 7XRBY-6MP2K-VQPT8-F37JV-YYQ83 | Retail     |
| ServerMediumBusinessMessaging  | 6PDTD-JK48J-662TF-8J2QV-R4CRB | Retail     |
| ServerMediumBusinessSecurity   | D694V-CMWKH-PY92X-PFQKQ-JCB69 | Retail     |
| ServerSBSPremium               | MRDK3-YYQF3-88BQJ-D6FJG-69YJY | Retail     |
| ServerSBSPrime                 | 2KB23-GJRBD-W3T9C-6CH2W-39B7V | Retail     |
| ServerSBSStandard              | H4XDD-B27GY-667P6-XWVV7-GYG8J | Retail     |
| ServerStandard                 | 8YVM4-YQBDH-7WDQM-R27WR-WVCWG | Retail     |
| ServerStandardV                | H9MW3-6V7GK-94P9G-7FTPJ-VKCKF | Retail     |
| ServerStorageEnterprise        | 2264C-TD9T8-P8HPW-CC9GH-MHM2V | Retail     |
| ServerStorageExpress           | RCYMT-YX342-8T6YY-XYHYC-3DD7X | Retail     |
| ServerStorageStandard          | FKFT2-WXYY9-WBPY7-6YMY4-X48JF | Retail     |
| ServerStorageWorkgroup         | 8X9J7-HCJ7J-3WDJT-QM7D8-464YH | Retail     |
| ServerWeb                      | BGT39-9FYH7-X2CYD-T628F-QPQPW | Retail     |
| ServerWinSB                    | HPH76-FHFPP-DRW9D-7W2V4-HWGKT | Retail     |
| ServerWinSBV                   | 2V8G6-KRXYR-MMGXJ-6RWM3-GXCCG | Retail     |

<br/>

### ویندوز سرور 2008 ESU
| نسخه ESU   | کلید مسدود شده از اینترنت | نوع کلید   |
|---------------|---------------------------------------|------------|
| Server-ESU-PA | 9FPV7-MWGT8-7XPDF-JC23W-WT7TW         | Volume:MAK |

<br/>

### میزبان KMS - ویندوز ویستا
| نسخه‌ها                                  | کلیدهای مسدود شده از اینترنت | نوع کلید     |
|-------------------------------------------|----------------------------------------|--------------|
| Business، Enterprise و نسخه‌های N آنها | TWVG3-9Q4P8-W9XJF-Y76FJ-DWQ4R          | Volume:CSVLK |

<br/>

### میزبان KMS - ویندوز سرور 2008
| نسخه‌ها                                                                                                                                            | کلیدهای مسدود شده از اینترنت | نوع کلید     |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|--------------|
| ServerComputeCluster، ServerDatacenter، <br /> ServerEnterprise، ServerEnterpriseIA64، <br /> ServerStandard، ServerWeb <br /> و نسخه‌های V آنها | BHC4Q-6D7B7-QMVH7-4MKQH-Y9VK7          | Volume:CSVLK |
| ServerComputeCluster، ServerEnterprise، <br /> ServerStandard، ServerWeb <br /> و نسخه‌های V آنها                                                | PVGKG-2R7XQ-7WTFD-FXTJR-DQBQ3          | Volume:CSVLK |
| ServerComputeCluster، ServerWeb                                                                                                                     | KH4PC-KJFX6-XFVHQ-GDK2G-JCJY9          | Volume:CSVLK |

<hr/><br/>

::: info محصولات پشتیبانی نشده

> **محصولات پشتیبانی نشده**
> این روش فعال‌سازی در صورتی که مجوز تلفنی در دسترس نباشد یا صدور مجوز توسط SPP سیستم مدیریت نشود، کار نمی‌کند.

- **آفیس در ویندوز 7**
  - صدور مجوز آن مبتنی بر OSPP است، نه SPP.
  - می‌توانید از گزینه Ohook در MAS برای فعال کردن آن استفاده کنید.
- **آفیس 2010**
  - صدور مجوز آن مبتنی بر OSPP است، نه SPP.
  - می‌توانید از گزینه Ohook در MAS برای فعال کردن آن استفاده کنید.
- **آفیس 365**
  - مجوز فعال‌سازی تلفنی در دسترس نیست. گزینه TSforge به جای آن مجوز Mondo 2016 (از نظر ویژگی معادل 365) را برای فعال کردن آفیس نصب می‌کند.
  - می‌توانید از گزینه Ohook در MAS برای فعال کردن آن استفاده کنید.
- **نسخه‌های ارزیابی ویندوز** (ویندوز 8 / سرور 2012 و بالاتر)
  - مجوز فعال‌سازی دائمی در دسترس نیست. گزینه TSforge به جای آن دوره ارزیابی را بازنشانی می‌کند.
- **نسخه‌های ارزیابی ویندوز** (ویندوز 7 / سرور 2008 R2)
  - سرویس WLMS از سرویس SPPSVC محافظت می‌کند و از توقف آن جلوگیری می‌کند. اگرچه مجوز فعال‌سازی دائمی در دسترس است، اما به طور رسمی پشتیبانی نمی‌شود.
- **نسخه Server Azure Datacenter (ServerTurbine)**
  - از فعال‌سازی در سیستم‌های غیر azure پشتیبانی نمی‌کند.
- **ویندوز 10 Consumer ESU (1 سال)**
  - صدور مجوز آن مبتنی بر CLIP است، نه SPP.
  - می‌توانید ESU تجاری را برای 3 سال در نسخه‌های Pro و بالاتر با TSforge فعال کنید.

:::

::: danger توجه

**آفیس مبتنی بر OSPP:** فروشگاه فیزیکی در رجیستری در قالبی ذخیره می‌شود که هنوز مهندسی معکوس نشده است.

:::


## ZeroCID / KMS4k / AVMA4k

- TSforge در MAS گنجانده شده است و همچنین [انتشار مستقل][6] خود را دارد.
- TSforge شامل روش‌های فعال‌سازی ZeroCID / KMS4k / AVMA4k است.
- AVMA4k یک روش اثبات مفهوم با محدودیت‌های فراوان است، بنابراین استفاده از آن را توصیه نمی‌کنیم.
- MAS فقط از روش ZeroCID و KMS4k استفاده می‌کند و شامل AVMA4k نمی‌شود، زیرا ZeroCID قبلاً می‌تواند تمام محصولات موجود را به طور دائم فعال کند.

| روش‌ها | اطلاعات                                                                                                 |
|---------|------------------------------------------------------------------------------------------------------|
| ZeroCID | فعال‌سازی دائمی آفلاین / تا زمان نصب مجدد/ارتقاء ویژگی                                       |
| KMS4k   | فعال‌سازی KMS آفلاین برای بیش از 4000 سال / تا زمان نصب مجدد/ارتقاء ویژگی                         |
| AVMA4k  | فعال‌سازی AVMA آفلاین برای بیش از 4000 سال (فقط سرور 2012 R2 به بعد) / تا زمان نصب مجدد/ارتقاء ویژگی |

<br/>

----
## ویندوز ESU

- مایکروسافت [به‌روزرسانی‌های امنیتی تمدید شده][7] (ESU) پولی را برای چندین نسخه ویندوز پس از پایان چرخه عمر محصولشان ارائه می‌دهد.
- می‌توانید مجوز Windows ESU / Premium Assurance را با استفاده از گزینه TSforge در MAS فعال کنید.

| نسخه ویندوز              | لیست نسخه‌های پشتیبانی شده                                                                                                                           | دوره ESU                                                                                                                                                                                                                                                   | حداقل به‌روزرسانی‌های مورد نیاز                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ویندوز سرور 2008          | ServerDatacenter، ServerStandard، ServerEnterprise <br /> و انواع V/Core/VCore آنها                                                         | [6 سال](https://web.archive.org/web/20170331081347/https://blogs.technet.microsoft.com/hybridcloud/2017/03/01/now-available-windows-server-premium-assurance-and-sql-server-premium-assurance/) با مجوز Premium Assurance <br /> ژانویه 2020 تا ژانویه 2026 | ویندوز سرور 2008 SP2 <br /> + <br /> KB4493730 [x64](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2019/04/windows6.0-kb4493730-x64_5cb91f4e9000383f061b80f88feffdf228c2443c.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2019/04/windows6.0-kb4493730-x86_ab4368f19db796680ff445a7769886c4cdc009a0.msu) <br /> KB4474419 [x64](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2019/09/windows6.0-kb4474419-v4-x64_09cb148f6ef10779d7352b7269d66a7f23019207.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2019/09/windows6.0-kb4474419-v4-x86_fd568cb47870cd8ed5ba10e1dd3c49061894030e.msu) <br /> **راه‌اندازی مجدد**  <br /> KB5016891 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows6.0-kb5016891-x64_1b5f7e1030f5d229a7618c09f1617fd1ed00e90f.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows6.0-kb5016891-x86_cf3aef17f12a6dc85dd20a06e5ba9f4c882e286f.msu)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ویندوز 7                    | Enterprise، Professional، Ultimate <br /> و انواع E/N آنها                                                                                  | [3 سال](https://learn.microsoft.com/en-us/lifecycle/products/windows-7) <br /> ژانویه 2020 تا ژانویه 2023 <br /><br /> ESU 4-6 ساله به طور رسمی پشتیبانی نمی‌شود، <br /> اما می‌توانید به‌روزرسانی‌های سرور 2008 R2 x64 را تا ژانویه 2026 به صورت دستی نصب کنید                  | ویندوز 7 SP1 <br /> + <br /> KB4490628 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2019/03/windows6.1-kb4490628-x64_d3de52d6987f7c8bdc2c015dca69eac96047c76e.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2019/03/windows6.1-kb4490628-x86_3cdb3df55b9cd7ef7fcb24fc4e237ea287ad0992.msu) <br /> KB4474419-v3 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2019/09/windows6.1-kb4474419-v3-x64_b5614c6cea5cb4e198717789633dca16308ef79c.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2019/09/windows6.1-kb4474419-v3-x86_0f687d50402790f340087c576886501b3223bec6.msu) <br /> **راه‌اندازی مجدد**  <br /> KB5039339 [x64](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2024/06/windows6.1-kb5039339-x64_f62846508976a6e5325ab1dca0783f9b3a60a564.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2024/06/windows6.1-kb5039339-x86_fa942048bba2a167242451236f9daf00940588aa.msu) <br /> KB4575903 [x64](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2020/07/windows6.1-kb4575903-x64_b4d5cf045a03034201ff108c2802fa6ac79459a1.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2020/07/windows6.1-kb4575903-x86_5905c774f806205b5d25b04523bb716e1966306d.msu) <br /> KB3138612 [x64](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/updt/2016/02/windows6.1-kb3138612-x64_f7b1de8ea7cf8faf57b0138c4068d2e899e2b266.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/updt/2016/02/windows6.1-kb3138612-x86_6e90531daffc13bc4e92ecea890e501e807c621f.msu) <br /> KB5016892 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows6.1-kb5016892-x64_52b68ba8744cb47ddfcecd19238087625e1a5fbd.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows6.1-kb5016892-x86_ffb5b83149833e7f969f69e4f152fee5c1fdbc68.msu) |
| Windows 7 Embedded POSReady7 | Embedded                                                                                                                                          | [3 سال](https://learn.microsoft.com/en-us/lifecycle/products/windows-embedded-posready-7) <br /> اکتبر 2021 تا اکتبر 2024                                                                                                                                      | همانند ویندوز 7 منهای KB5016892                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Windows 7 Embedded Standard  | Embedded                                                                                                                                          | [3 سال](https://learn.microsoft.com/en-us/lifecycle/products/windows-embedded-standard-7) <br /> اکتبر 2020 تا اکتبر 2023                                                                                                                                      | همانند ویندوز 7 منهای KB5016892                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ویندوز سرور 2008 R2       | ServerDatacenter، ServerStandard، ServerEnterprise <br /> و انواع V/Core/VCore آنها                                                         | [6 سال](https://web.archive.org/web/20170331081347/https://blogs.technet.microsoft.com/hybridcloud/2017/03/01/now-available-windows-server-premium-assurance-and-sql-server-premium-assurance/) با مجوز Premium Assurance <br /> ژانویه 2020 تا ژانویه 2026 | همانند ویندوز 7                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ویندوز سرور 2012          | ServerDatacenter، ServerStandard و انواع Core آنها                                                                                          | [3 سال](https://learn.microsoft.com/en-us/lifecycle/products/windows-server-2012) <br /> اکتبر 2023 تا اکتبر 2026                                                                                                                                              | KB5017221 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows8-rt-kb5017221-x64_d01e9b9b910f5f1e374bc1b89a8d00c1a97e215f.msu) <br /> KB2937636 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/crup/2014/07/windows8-rt-kb2937636-x64_29e0b587c8f09bcf635c1b79d09c00eef33113ec.msu)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ویندوز 8.1                  | Enterprise، Professional، EmbeddedIndustry و انواع E/N آنها                                                                                 | ESU به طور رسمی پشتیبانی نمی‌شود، <br /> اما می‌توانید به‌روزرسانی‌های سرور 2012 R2 (برای x64) را تا ژانویه 2024، <br /> و به‌روزرسانی‌های Embedded 8.1 (برای x86) را تا ژوئیه 2023 به صورت دستی نصب کنید                                                                              | بیلد 9600.17415 <br /> + <br /> KB3021910 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/updt/2015/04/windows8.1-kb3021910-x64_e291c0c339586e79c36ebfc0211678df91656c3d.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/updt/2015/04/windows8.1-kb3021910-x86_7e70173bec00c3d4fe3b0b8cba17b095b4ed2d20.msu) <br /> KB3172614 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/updt/2016/07/windows8.1-kb3172614-x64_e41365e643b98ab745c21dba17d1d3b6bb73cfcc.msu)-[x86](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/updt/2016/07/windows8.1-kb3172614-x86_d11c233c8598b734de72665e0d0a3f2ef007b91f.msu) <br /> KB5017220 [x64](https://catalog.s.download.windowsupdate.com/c/msdownload/update/software/secu/2022/08/windows8.1-kb5017220-x64_d771111b22ec71560b207a6735d5ecebd47c4f38.msu)-[x86](https://catalog.s.download.windowsupdate.com/d/msdownload/update/software/secu/2022/08/windows8.1-kb5017220-x86_3134a18dac1b1fe4f656c9e25d0e4aaa75619d16.msu)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ویندوز سرور 2012 R2       | ServerDatacenter، ServerStandard و انواع Core آنها                                                                                          | [3 سال](https://learn.microsoft.com/en-us/lifecycle/products/windows-server-2012-r2) <br /> اکتبر 2023 تا اکتبر 2026                                                                                                                                           | همانند ویندوز 8.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ویندوز 10                   | Education، Enterprise، IoTEnterprise، <br /> Professional، ProfessionalEducation، <br /> ProfessionalWorkstation، ServerRdsh و انواع N آنها | [3 سال](https://learn.microsoft.com/en-us/windows/whats-new/extended-security-updates) <br /> اکتبر 2025 تا اکتبر 2028                                                                                                                                         | ویندوز 10 22H2 (19045.4957) <br /> فقط به‌روزرسانی ویندوز را اجرا کنید                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

<br/>

## میزبان KMS ویندوز

- می‌توانید مجوز میزبان KMS ویندوز را با استفاده از گزینه TSforge در MAS فعال کنید.
- اسکریپت به طور خودکار CSVLK موجود را با بیشترین تعداد شناسه‌های شمارش شده KMS انتخاب می‌کند.
- همراه با فعال‌سازی، میزبان را با 25 کلاینت که حداقل آستانه مورد نیاز برای یک میزبان KMS در حال کار است، شارژ می‌کند.
- با میزبان KMS ویندوز، می‌توانید کلاینت KMS را در شبکه خود فعال کنید.
- این گزینه برای کاربران پیشرفته است، می‌توانید [راهنماها][8] را برای درک بیشتر در مورد آن بررسی کنید.

<br/>

::: tip یادداشت‌ها
>
> **فقط در مواقع ضروری از این فعال‌سازی استفاده کنید.**
> در ویندوز 10/11، سیستم ممکن است بعداً نسخه ویندوز را به طور تصادفی تغییر دهد. این یک مشکل ویندوز است و می‌توان آن را با خیال راحت نادیده گرفت.
> مجوز میزبان KMS باعث می‌شود سرویس sppsvc به طور مداوم اجرا شود.

:::


## میزبان KMS آفیس

- می‌توانید مجوز میزبان KMS آفیس را با استفاده از گزینه TSforge در MAS فعال کنید.
- برای فعال کردن یک میزبان KMS آفیس، باید نصب‌کننده بسته مجوز مناسب را دانلود و اجرا کنید.
- همراه با فعال‌سازی، میزبان را با 25 کلاینت برای یک میزبان KMS در حال کار شارژ می‌کند.
- با میزبان KMS آفیس، می‌توانید کلاینت KMS آفیس را در شبکه خود فعال کنید.
- این گزینه برای کاربران پیشرفته است، می‌توانید [راهنماها][9] را برای درک بیشتر در مورد آن بررسی کنید.

<br/>

::: tip توجه

> **فقط در مواقع ضروری از این فعال‌سازی استفاده کنید.**
> مجوز میزبان KMS باعث می‌شود سرویس sppsvc به طور مداوم اجرا شود.

:::

::: details لینک‌های میزبان KMS آفیس

تمام لینک‌های ارائه شده در زیر لینک‌های رسمی هستند که توسط مایکروسافت میزبانی می‌شوند.

| نسخه              | لینک                                                                                                                                     |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| میزبان KMS آفیس 2010 | `https://download.microsoft.com/download/E/4/E/E4EF2B72-9F16-4D5F-9A1D-D9BE39A1C127/KeyManagementServiceHost_en-us.exe`                  |
| میزبان KMS آفیس 2013 | `https://download.microsoft.com/download/3/4/2/342F1FEA-CCB2-4F68-A6DE-041934383C18/office2013volumelicensepack_4701-1000_en-us_x86.exe` |
| میزبان KMS آفیس 2016 | `https://download.microsoft.com/download/5/E/3/5E329B97-6DC5-4AA7-9AA7-A5B5D46AF82F/office2016volumelicensepack_4324-1002_en-us_x86.exe` |
| میزبان KMS آفیس 2019 | `https://download.microsoft.com/download/F/6/0/F60CA746-5F03-482D-A331-15F38FB4AACA/office2019volumelicensepack_x86.exe`                 |
| میزبان KMS آفیس 2021 | `https://download.microsoft.com/download/8/e/e/8eef6160-396a-4c26-830d-9e2a24c00309/Office2021VolumeLicensePack_x86.exe`                 |
| میزبان KMS آفیس 2024 | `https://download.microsoft.com/download/1/4/0/140c97ae-7360-4dfc-9ba0-5f509600a06e/Office2024VolumeLicensePack_x86.exe`                 |

 - هنگامی که در حین نصب از شما کلید محصول میزبان KMS خواسته شد، "No" را انتخاب کنید.
 - در ویندوز 11 24H2/سرور 2025 و جدیدتر، FoD VBScript باید برای کار کردن این نصب‌کننده‌ها فعال باشد.
 - بسته‌های آفیس 2019-2024 فقط در ویندوز 8/سرور 2012 و جدیدتر پشتیبانی می‌شوند.
 - اگر چندین بسته مجوز را روی یک دستگاه نصب می‌کنید، مطمئن شوید که نسخه‌های قدیمی‌تر را قبل از نسخه‌های جدیدتر نصب کنید (مثلاً آفیس 2016 را قبل از آفیس 2024 نصب کنید).

:::

<br/>

::: details  راه‌حل نصب‌کننده میزبان KMS آفیس 2010

 - نصب‌کننده مجوز آفیس 2010 برای نصب در ویندوز 10/11/سرور 2016-2025 به یک راه‌حل نیاز دارد:
   - نصب‌کننده را اجرا کنید و پیام خطای حاصل را رد کنید.
   - Command Prompt را به عنوان Administrator راه‌اندازی کنید.
   - اگر از ویندوز 32 بیتی استفاده می‌کنید، `notepad "%programfiles%\MSECache\OfficeKMS\kms_host.vbs"` را اجرا کنید.
   - اگر از ویندوز 64 بیتی یا ARM64 استفاده می‌کنید، `notepad "%programfiles(x86)%\MSECache\OfficeKMS\kms_host.vbs"` را اجرا کنید
   - روی `Edit > Replace` کلیک کنید.
   - در کادر متنی "Find" تایپ کنید `>= "7"`، در کادر متنی "Replace" تایپ کنید `>= 1`.
   - روی "Replace All" کلیک کنید.
   - فایل را ذخیره کرده و Notepad را ببندید.
   - اگر از ویندوز 32 بیتی استفاده می‌کنید، `cscript "%programfiles%\MSECache\OfficeKMS\kms_host.vbs"` را اجرا کنید.
   - اگر از ویندوز 64 بیتی یا ARM64 استفاده می‌کنید، `cscript "%programfiles(x86)%\MSECache\OfficeKMS\kms_host.vbs"` را اجرا کنید

:::

<br/>

::: details راه‌حل نصب در ویندوز دارای مجوز غیر حجمی

 - همه نصب‌کننده‌ها به طور معمول به ویندوز دارای مجوز حجمی نیاز دارند، اما این را نیز می‌توان دور زد:
   - همان روشی را که برای راه‌حل آفیس 2010 در بالا دنبال کردید، دنبال کنید، اما `If isVL = False` را با `If False` جایگزین کنید.
   - برای بسته‌های آفیس 2019-2024، اسکریپت نصب‌کننده برای ویرایش به نام نسخه آفیس نامگذاری شده است (مثلاً `kms_host19.vbs` برای آفیس 2019).

:::

## بازنشانی Rearm / تایمرها / دستکاری / قفل

- می‌توانید از این ویژگی در گزینه TSforge در MAS استفاده کنید.

| ویژگی‌ها                   | اطلاعات                                                               |
|----------------------------|--------------------------------------------------------------------|
| بازنشانی شمارنده Rearm          | بازنشانی شمارنده rearm برای ارزیابی بی‌نهایت                        |
| بازنشانی دوره ارزیابی          | بازنشانی دوره ارزیابی برای ارزیابی بی‌نهایت                    |
| پاک کردن حالت دستکاری         | پاک کردن حالت دستکاری تنظیم شده به دلیل خرابی یا حذف فروشگاه     |
| حذف قفل کلید ارزیابی | حذف قفل تغییر کلید محصول تنظیم شده برای کلیدهای محصول ارزیابی |

<br/>

## چگونه TSforge را حذف کنیم

::: danger راهنما

> این روش فعال‌سازی هیچ یک از اجزای ویندوز را تغییر نمی‌دهد و هیچ فایل جدیدی نصب نمی‌کند.
> در عوض، داده‌ها را به یکی از فایل‌های داده مورد استفاده توسط پلتفرم حفاظت از نرم‌افزار اضافه می‌کند.
> اگر می‌خواهید وضعیت فعال‌سازی را بازنشانی کنید،
> در اسکریپت MAS، به Troubleshoot بروید و گزینه Fix Licensing را اعمال کنید.
> انجام شد ✔️

:::


## فعال‌سازی دستی

برای اطلاعات در مورد استفاده دستی از TSforge، به [README TSforge][2] مراجعه کنید.


## راه‌اندازی پیش‌فعال‌سازی

- گزینه Extract OEM را در بخش Extras MAS بررسی کنید اگر می‌خواهید نصب ویندوز از قبل فعال شده داشته باشید.
- بیشتر بخوانید [اینجا](./oem-folder).


::: danger رفع مشکلات

اگر سوالی دارید، ابتدا صفحه [**سوالات پرتکرار**](./faq) را مرور کنید — به احتمال زیاد جواب‌تان اینجاست.

اگر همچنان مشکل پابرجا بود — با ما [**در ارتباط**](./troubleshoot) باشید.

:::

## قدردانی

از شما برای ارائه این پروژه فوق‌العاده سپاسگزاریم 🤍

[massgrave.dev][2]


[N]: https://github.com/NiREvil/windows-activation/
[1]: https://github.com/UMSKT/writeups/blob/main/PKEY2005.md
[2]: https://github.com/massgravel/TSforge
[3]: https://betawiki.net/wiki/Windows_11_build_27802
[4]: https://github.com/dadorner-msft/activationws
[5]: https://learn.microsoft.com/en-us/windows/deployment/volume-activation/introduction-vamt
[6]: https://github.com/massgravel/massgrave.dev/blob/main/blog/2025-02-14-TSforge/index.md
[7]: https://learn.microsoft.com/en-us/lifecycle/faq/extended-security-updates
[8]: https://learn.microsoft.com/en-us/windows-server/get-started/kms-create-host
[9]: https://learn.microsoft.com/en-us/office/volume-license-activation/plan-volume-activation-of-office#key-management-service-kms-activation-of-office
