---
layout: doc
outline: deep
title: 'فعال‌سازی آنلاین KMS'
description: 'فعال‌سازی آنلاین kms'
date: 2025-04-06
editLink: true
---

# فعال‌سازی آنلاین KMS

## بررسی اجمالی

- چگونه از آن استفاده کنیم؟ لطفاً دستورالعمل‌ها را در [مقدمه](./intro) بیابید.
- KMS ویندوز / آفیس را برای 180 روز فعال می‌کند. برای نسخه‌های Windows Core / ProWMC این مدت 30 / 45 روز است.
- این اسکریپت می‌تواند هم نصب ویندوز Retail و هم Volume را فعال کند.
- این اسکریپت می‌تواند آفیس C2R Retail و VL، آفیس UWP را فعال کند، اما نه آفیس Retail 2010 / 2013 MSI.
- این اسکریپت در صورتی که ویندوز به طور دائمی / KMS38 فعال شده باشد، از فعال‌سازی صرف‌نظر می‌کند.
- همانطور که ذکر شد، KMS فقط برای یک دوره محدود فعال می‌شود و دائمی نیست، در ادامه در مورد چگونگی دستیابی به فعال‌سازی مادام‌العمر بخوانید.

## تمدید فعال‌سازی

طبق طراحی در روش فعال‌سازی واقعی [KMS][1]، سیستم هر 7 روز با سرور ثبت شده تماس می‌گیرد و در صورت تماس موفقیت‌آمیز، فعال‌سازی را به طور خودکار تمدید و برای دوره کامل 180 روز از روز تماس موفقیت‌آمیز بازنشانی می‌کند. اگر سیستم نتواند با سرور تماس بگیرد، پس از 180 روز غیرفعال می‌شود و تا زمانی که تماس برقرار نشود، غیرفعال باقی می‌ماند.

برای دریافت فعال‌سازی مادام‌العمر، اسکریپت به طور پیش‌فرض وظیفه تمدید خودکار ایجاد می‌کند.
این دو فایل زیر را ایجاد می‌کند،
`C:\Program Files\Activation-Renewal\Activation_task.cmd`
`C:\Program Files\Activation-Renewal\Info.txt`

و یک وظیفه زمان‌بندی شده `\Activation-Renewal` برای اجرای اسکریپت هر 7 روز ایجاد می‌کند. این وظیفه سرور KMS در حال کار را ثبت می‌کند و دستورات فعال‌سازی را فقط برای محصولات Volume نصب شده فعال می‌کند. وظیفه زمان‌بندی شده فقط در صورتی اجرا می‌شود که سیستم به اینترنت متصل باشد.

اگر نمی‌خواهید این وظیفه تمدید را نصب کنید، می‌توانید گزینه "Renewal Task With Activation" را در منوی اسکریپت خاموش کنید <br/>

## ملاحظات

- با فعال‌سازی KMS، می‌توانید ویندوز/آفیس را بدون هیچ مشکلی به‌روزرسانی کنید.
- چه چیزی در سیستم در فرآیند فعال‌سازی باقی می‌ماند؟
  - **اگر وظیفه تمدید نصب شده باشد:** پس از فعال‌سازی، IP سرور KMS را در رجیستری باقی می‌گذارد، که به شما کمک می‌کند تا ویژگی فعال‌سازی جهانی را دریافت کنید که به موجب آن سیستم به طور خودکار فعال‌سازی را تمدید می‌کند. در مورد فایل‌ها و وظایف زمان‌بندی شده، در بالا ذکر شده است.
  - **اگر وظیفه تمدید نصب نشده باشد:** یک IP غیرموجود 10.0.0.10 را برای جلوگیری از مشکل بنر غیر اصلی آفیس باقی می‌گذارد.
- این اسکریپت شامل لیست پایدارترین سرورهای KMS (16) از سراسر جهان است. فرآیند انتخاب سرور کاملاً خودکار است. اسکریپت به طور تصادفی یک سرور را انتخاب می‌کند، آزمایش می‌کند که آیا آنلاین است، اگر بله، دستور فعال‌سازی را اعمال می‌کند، اگر شکست بخورد، این فرآیند را حداکثر 3 بار برای یک محصول تکرار می‌کند. چنین افزونگی اطمینان می‌دهد که ما در هر زمان سرور KMS در حال کار را دریافت می‌کنیم.
- اگر تاریخ سیستم شما نادرست باشد (بیش از 180 روز) و آفلاین باشید، سیستم غیرفعال می‌شود، اما با تصحیح تاریخ سیستم به طور خودکار دوباره فعال می‌شود.
- مزیت فعال‌سازی آنلاین KMS این است که به هیچ فایل باینری KMS نیاز ندارد و سیستم را می‌توان با استفاده از برخی دستورات دستی یا فایل‌های اسکریپت بچ شفاف فعال کرد. بنابراین این برای کسانی است که به دلیل فایل‌های باینری و تشخیص آنتی‌ویروس، KMS آفلاین را دوست ندارند/مشکل دارند/اعتماد ندارند.
  اما اگر KMS آفلاین را ترجیح می‌دهید، یک فعال‌کننده منبع باز، [KMS_VL_ALL][2] abbodi1406 را بررسی کنید.

## محصولات پشتیبانی شده

### ویندوز 10 / 11

| نام‌های محصول                                         | EditionID                | کلید مجوز حجمی عمومی    |
| ----------------------------------------------------- | ------------------------ | ----------------------------- |
| Education                                             | Education                | NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |
| Education N                                           | EducationN               | 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |
| Enterprise                                            | Enterprise               | NPPR9-FWDCX-D2C8J-H872K-2YT43 |
| Enterprise N                                          | EnterpriseN              | DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |
| Enterprise G                                          | EnterpriseG              | YYVX9-NTFWV-6MDM3-9PT4T-4M68B |
| Enterprise G N                                        | EnterpriseGN             | 44RPN-FTY23-9VTTB-MP9BX-T84FV |
| Enterprise LTSB 2016                                  | EnterpriseS              | DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ |
| Enterprise LTSC 2019                                  | EnterpriseS              | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise LTSC 2021                                  | EnterpriseS              | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise LTSC 2024                                  | EnterpriseS              | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise N LTSB 2016                                | EnterpriseSN             | QFFDN-GRT3P-VKWWX-X7T3R-8B639 |
| Enterprise N LTSC 2019                                | EnterpriseSN             | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| Enterprise N LTSC 2021                                | EnterpriseSN             | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| Enterprise N LTSC 2024                                | EnterpriseSN             | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| IoT Enterprise LTSC 2021 <br/> (19044.2788 و بالاتر) | IoTEnterpriseS           | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| IoT Enterprise LTSC 2024                              | IoTEnterpriseS           | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| Home                                                  | Core                     | TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 |
| Home N                                                | CoreN                    | 3KHY7-WNT83-DGQKR-F7HPR-844BM |
| Home China                                            | CoreCountrySpecific      | PVMJN-6DFY6-9CCP6-7BKTT-D3WVR |
| Home Single Language                                  | CoreSingleLanguage       | 7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH |
| Lean                                                  | CloudE                   | NBTWJ-3DR69-3C4V8-C26MC-GQ9M6 |
| Enterprise multi-session <br/> (17763 و بالاتر)      | ServerRdsh               | CPWHC-NT2C7-VYW78-DHDB2-PG3GK |
| Enterprise multi-session <br/> (17134 و قبل)     | ServerRdsh               | 7NBT4-WGBQX-MP4H7-QXFF8-YP3KX |
| Pro                                                   | Professional             | W269N-WFGWX-YVC9B-4J6C9-T83GX |
| Pro N                                                 | ProfessionalN            | MH37W-N47XK-V7XM9-C7227-GCQG9 |
| Pro Education                                         | ProfessionalEducation    | 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y |
| Pro Education N                                       | ProfessionalEducationN   | YVWGF-BXNMC-HTQYQ-CPQ99-66QFC |
| Pro for Workstations                                  | ProfessionalWorkstation  | NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J |
| Pro N for Workstations                                | ProfessionalWorkstationN | 9FNHH-K3HBT-3W4TD-6383H-6XYWF |
| SE                                                    | CloudEdition             | 37D7F-N49CB-WQR8W-TBJ73-FM8RX |
| SE N                                                  | CloudEditionN            | 6XN7V-PCBDC-BDBRH-8DQY7-G6R44 |

<br/>

### ویندوز سرور 2025 (LTSC)

| نام‌های محصول                        | EditionID        | کلید مجوز حجمی عمومی    |
| ------------------------------------ | ---------------- | ----------------------------- |
| Windows Server 2025 Standard         | ServerStandard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832 |
| Windows Server 2025 Datacenter       | ServerDatacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF |
| Windows Server 2025 Azure Core       | ServerAzureCor   | FCNV3-279Q9-BQB46-FTKXX-9HPRH |
| Windows Server 2025 Azure Datacenter | ServerTurbine    | XGN3F-F394H-FD2MY-PP6FD-8MCRC |

### ویندوز سرور 2022 (LTSC)

| نام‌های محصول                        | EditionID        | کلید مجوز حجمی عمومی    |
| ------------------------------------ | ---------------- | ----------------------------- |
| Windows Server 2022 Datacenter       | ServerDatacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |
| Windows Server 2022 Standard         | ServerStandard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |
| Windows Server 2022 Azure Core       | ServerAzureCor   | 6N379-GGTMK-23C6M-XVVTC-CKFRQ |
| Windows Server 2022 Azure Datacenter | ServerTurbine    | NTBV8-9K7Q8-V27C6-M2BTV-KHMXV |

### ویندوز سرور 2019 (LTSC)

| نام‌های محصول                  | EditionID        | کلید مجوز حجمی عمومی    |
| ------------------------------ | ---------------- | ----------------------------- |
| Windows Server 2019 Datacenter | ServerDatacenter | WMDGN-G9PQG-XVVXX-R3X43-63DFG |
| Windows Server 2019 Standard   | ServerStandard   | N69G4-B89J2-4G8F4-WWYCC-J464C |
| Windows Server 2019 Essentials | ServerSolution   | WVDHN-86M7X-466P6-VHXV7-YY726 |
| Windows Server 2019 Azure Core | ServerAzureCor   | FDNH6-VW9RW-BXPJ7-4XTYG-239TB |
| Windows Server 2019 ARM64      | ServerARM64      | GRFBW-QNDC4-6QBHG-CCK3B-2PR88 |

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

### ویندوز 8.1

| EditionID                    | کلید مجوز حجمی عمومی    |
| ---------------------------- | ----------------------------- |
| Enterprise                   | MHF9N-XY6XB-WVXMC-BTDCT-MKKG7 |
| EnterpriseN                  | TT4HM-HN7YT-62K67-RGRQJ-JFFXW |
| Professional                 | GCRJD-8NW9H-F2CDX-CCM8D-9D6T9 |
| ProfessionalN                | HMCNV-VVBFX-7HMBH-CTY9B-B4FXY |
| EmbeddedIndustryA            | VHXM3-NR6FT-RY6RT-CK882-KW2CJ |
| EmbeddedIndustry             | NMMPB-38DD4-R2823-62W8D-VXKJB |
| EmbeddedIndustryE            | FNFKF-PWTVT-9RC8H-32HB2-JB34X |
| CoreARM                      | XYTND-K6QKT-K2MRH-66RTM-43JKP |
| CoreN                        | 7B9N3-D94CG-YTVHR-QBPX3-RJP64 |
| CoreCountrySpecific          | NCTT7-2RGK8-WMHRF-RY7YQ-JTXG3 |
| CoreSingleLanguage           | BB6NG-PQ82V-VRDPW-8XVD2-V8P66 |
| Core                         | M9Q9P-WNJJT-6PXPY-DWX8H-6XWKK |
| ProfessionalWMC              | 789NJ-TQK6T-6XTH8-J39CJ-J8D3P |
| CoreConnected                | 3PY8R-QHNP9-W7XQD-G6DPH-3J2C9 |
| CoreConnectedN               | Q6HTR-N24GM-PMJFP-69CD8-2GXKR |
| CoreConnectedSingleLanguage  | KF37N-VDV38-GRRTV-XH8X6-6F3BB |
| CoreConnectedCountrySpecific | R962J-37N87-9VVK2-WJ74P-XTMHR |
| ProfessionalStudent          | MX3RK-9HNGX-K3QKC-6PJ3F-W8D7B |
| ProfessionalStudentN         | TNFGH-2R6PB-8XM3K-QYHX2-J4296 |

<br/>

### ویندوز سرور 2012 R2

| EditionID          | کلید مجوز حجمی عمومی    |
| ------------------ | ----------------------------- |
| ServerStandard     | D2N9P-3P6X9-2R39C-7RTCD-MDVJX |
| ServerDatacenter   | W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9 |
| ServerSolution     | KNC87-3J2TX-XB4WP-VCPJV-M4FWM |
| ServerCloudStorage | 3NPTF-33KPT-GGBPR-YX76B-39KDD |

<br/>

### ویندوز 8

| EditionID           | کلید مجوز حجمی عمومی    |
| ------------------- | ----------------------------- |
| Enterprise          | 32JNW-9KQ84-P47T8-D8GGY-CWCK7 |
| EnterpriseN         | JMNMF-RHW7P-DMY6X-RF3DR-X2BQT |
| Professional        | NG4HW-VH26C-733KW-K6F98-J8CK4 |
| ProfessionalN       | XCVCF-2NXM9-723PB-MHCB7-2RYQQ |
| EmbeddedIndustry    | RYXVT-BNQG7-VD29F-DBMRY-HT73M |
| EmbeddedIndustryE   | NKB3R-R2F8T-3XCDP-7Q2KW-XWYQ2 |
| CoreARM             | DXHJF-N9KQX-MFPVR-GHGQK-Y7RKV |
| CoreN               | 8N2M2-HWPGY-7PGT9-HGDD8-GVGGY |
| CoreCountrySpecific | 4K36P-JN4VD-GDC6V-KDT89-DYFKP |
| CoreSingleLanguage  | 2WN2H-YGCQR-KFX6K-CD6TF-84YXQ |
| Core                | BN3D2-R7TKB-3YPBD-8DRP2-27GG4 |
| ProfessionalWMC     | GNBB8-YVD74-QJHX6-27H4K-8QHDG |

<br/>

### ویندوز سرور 2012

| EditionID                | کلید مجوز حجمی عمومی    |
| ------------------------ | ----------------------------- |
| ServerStandard           | XC9B7-NBPP2-83J2H-RHMBY-92BT4 |
| ServerDatacenter         | 48HP8-DN98B-MYWDG-T2DCC-8W83P |
| ServerSolution           | HTDQM-NBMMG-KGYDT-2DTKT-J2MPV |
| ServerMultiPointStandard | HM7DN-YVMH3-46JC3-XYTG7-CYQJJ |
| ServerMultiPointPremium  | XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G |

<br/>

### ویندوز 7

| EditionID         | کلید مجوز حجمی عمومی    |
| ----------------- | ----------------------------- |
| Enterprise        | 33PXH-7Y6KF-2VJC9-XBBR8-HVTHH |
| EnterpriseN       | YDRBP-3D83W-TY26F-D46B2-XCKRJ |
| Professional      | FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4 |
| ProfessionalN     | MRPKT-YTG23-K7D7T-X2JMM-QY7MG |
| Embedded_POSReady | YBYF6-BHCR3-JPKRB-CDW7B-F9BK4 |
| Embedded_ThinPC   | 73KQT-CD9G6-K7TQG-66MRP-CQ22C |
| ProfessionalE     | W82YF-2Q76Y-63HXB-FGJG9-GF7QX |
| EnterpriseE       | C29WB-22CC8-VJ326-GHFJW-H9DH4 |

<br/>

### ویندوز سرور 2008 R2

| EditionID              | کلید مجوز حجمی عمومی    |
| ---------------------- | ----------------------------- |
| ServerStandard         | YC6KT-GKW9T-YTKYR-T4X34-R7VHC |
| ServerDatacenter       | 74YFP-3QFB3-KQT8W-PMXWJ-7M648 |
| ServerEnterprise       | 489J6-VHDMP-X63PK-3K798-CPX3Y |
| ServerDatacenterCore   | 74YFP-3QFB3-KQT8W-PMXWJ-7M648 |
| ServerStandardCore     | YC6KT-GKW9T-YTKYR-T4X34-R7VHC |
| ServerEnterpriseCore   | 489J6-VHDMP-X63PK-3K798-CPX3Y |
| ServerEnterpriseIA64   | GT63C-RJFQ3-4GMB6-BRFB9-CB83V |
| ServerWeb              | 6TPJF-RBVHG-WBW2R-86QPH-6RTM4 |
| ServerHPC              | TT8MH-CG224-D3D7Q-498W2-9QCTX |
| ServerWebCore          | 6TPJF-RBVHG-WBW2R-86QPH-6RTM4 |
| ServerEmbeddedSolution | 736RG-XDKJK-V34PF-BHK87-J6X3K |

<br/>

### ویندوز ویستا

| EditionID   | کلید مجوز حجمی عمومی    |
| ----------- | ----------------------------- |
| Enterprise  | VKK3X-68KWM-X2YGT-QR4M6-4BWMV |
| Business    | YFKBB-PQJJV-G996G-VWGXY-2V3X8 |
| BusinessN   | HMBQG-8H2RH-C77VX-27R82-VMQBT |
| EnterpriseN | VTC42-BM838-43QHV-84HX6-XJXKV |

<br/>

### ویندوز سرور 2008

| EditionID            | کلید مجوز حجمی عمومی    |
| -------------------- | ----------------------------- |
| ServerStandard       | TM24T-X9RMF-VWXK6-X8JC9-BFGM2 |
| ServerDatacenter     | 7M67G-PC374-GR742-YH8V4-TCBY3 |
| ServerEnterprise     | YQGMW-MPWTJ-34KDK-48M3W-X4Q6V |
| ServerEnterpriseIA64 | 4DWFP-JF3DJ-B7DTH-78FJB-PDRHK |
| ServerWeb            | WYR28-R7TFJ-3X2YQ-YCY4H-M249D |
| ServerComputeCluster | RCTX3-KWVHP-BR6TB-RB6DM-6X7HP |
| ServerStandardV      | W7VD6-7JFBR-RX26B-YKQ3Y-6FFFJ |
| ServerDatacenterV    | 22XQ2-VRXRG-P8D42-K34TD-G3QQC |
| ServerEnterpriseV    | 39BXF-X8Q23-P2WWT-38T2F-G3FPG |

<br/>

### آفیس 2010

| EditionID        | کلید مجوز حجمی عمومی    |
| ---------------- | ----------------------------- |
| AccessVL         | V7Y44-9T38C-R2VJK-666HK-T7DDX |
| ExcelVL          | H62QG-HXVKF-PP4HP-66KMR-CW9BM |
| GrooveVL         | QYYW6-QP4CB-MBV6G-HYMCJ-4T3J4 |
| InfoPathVL       | K96W8-67RPQ-62T9Y-J8FQJ-BT37T |
| MondoVL          | YBJTT-JG6MD-V9Q7P-DBKXJ-38W9R |
| OneNoteVL        | Q4Y4M-RHWJM-PY37F-MTKWH-D3XHX |
| OutlookVL        | 7YDC2-CWM8M-RRTJC-8MDVC-X3DWQ |
| PowerPointVL     | RC8FX-88JRY-3PF7C-X8P67-P4VTT |
| ProjectProVL     | YGX6F-PGV49-PGW3J-9BTGG-VHKC6 |
| ProjectStdVL     | 4HP3K-88W3F-W2K3D-6677X-F9PGB |
| ProPlusVL        | VYBBJ-TRJPB-QFQRF-QFT4D-H3GVB |
| PublisherVL      | BFK7F-9MYHM-V68C7-DRQ66-83YTP |
| SmallBusBasicsVL | D6QFG-VBYP2-XQHM7-J97RH-VVRCK |
| StandardVL       | V7QKV-4XVVR-XYV4D-F7DFM-8R6BM |
| VisioSIVL        | D9DWC-HPYVV-JGF4P-BTWQB-WX8BJ |
| WordVL           | HVHB3-C6FV7-KQX9W-YQG79-CRY7T |

<br/>

### آفیس 2013

| EditionID        | کلید مجوز حجمی عمومی    |
| ---------------- | ----------------------------- |
| AccessVolume     | NG2JY-H4JBT-HQXYP-78QH9-4JM2D |
| ExcelVolume      | VGPNG-Y7HQW-9RHP7-TKPV3-BG7GB |
| GrooveVolume     | H7R7V-WPNXQ-WCYYC-76BGV-VT7GH |
| InfoPathVolume   | DKT8B-N7VXH-D963P-Q4PHY-F8894 |
| LyncVolume       | 2MG3G-3BNTT-3MFW9-KDQW3-TCK7R |
| MondoRetail      | CWH2Y-NPYJW-3C7HD-BJQWB-G28JJ |
| MondoVolume      | 42QTK-RN8M7-J3C4G-BBGYM-88CYV |
| OneNoteVolume    | TGN6P-8MMBC-37P2F-XHXXK-P34VW |
| OutlookVolume    | QPN8Q-BJBTJ-334K3-93TGY-2PMBT |
| PowerPointVolume | 4NT99-8RJFH-Q2VDH-KYG2C-4RD4F |
| ProjectProVolume | FN8TT-7WMH6-2D4X9-M337T-2342K |
| ProjectStdVolume | 6NTH3-CW976-3G3Y2-JK3TX-8QHTT |
| ProPlusVolume    | YC7DK-G2NP3-2QQC3-J6H88-GVGXT |
| PublisherVolume  | PN2WF-29XG2-T9HJ7-JQPJR-FCXK4 |
| StandardVolume   | KBKQT-2NMXY-JJWGP-M62JB-92CD4 |
| VisioProVolume   | C2FG9-N6J68-H8BTJ-BW3QX-RM3B3 |
| VisioStdVolume   | J484Y-4NKBF-W2HMG-DBMJC-PGWR7 |
| WordVolume       | 6Q7VD-NX8JD-WJ2VH-88V73-4GBJ7 |

<br/>

### آفیس 2016

| EditionID              | کلید مجوز حجمی عمومی    |
| ---------------------- | ----------------------------- |
| AccessVolume           | GNH9Y-D2J4T-FJHGG-QRVH7-QPFDW |
| ExcelVolume            | 9C2PK-NWTVB-JMPW8-BFT28-7FTBF |
| MondoRetail            | DMTCJ-KNRKX-26982-JYCKT-P7KB6 |
| MondoVolume            | HFTND-W9MK4-8B7MJ-B6C4G-XQBR2 |
| OneNoteVolume          | DR92N-9HTF2-97XKM-XW2WJ-XW3J6 |
| OutlookVolume          | R69KK-NTPKF-7M3Q4-QYBHW-6MT9B |
| PowerPointVolume       | J7MQP-HNJ4Y-WJ7YM-PFYGF-BY6C6 |
| ProjectProVolume       | YG9NW-3K39V-2T3HJ-93F3Q-G83KT |
| ProjectProXVolume      | WGT24-HCNMF-FQ7XH-6M8K7-DRTW9 |
| ProjectStdVolume       | GNFHQ-F6YQM-KQDGJ-327XX-KQBVC |
| ProjectStdXVolume      | D8NRQ-JTYM3-7J2DX-646CT-6836M |
| ProPlusVolume          | XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99 |
| PublisherVolume        | F47MM-N3XJP-TQXJ9-BP99D-8K837 |
| SkypeforBusinessVolume | 869NQ-FJ69K-466HW-QYCP2-DDBV6 |
| StandardVolume         | JNRGM-WHDWX-FJJG3-K47QV-DRTFM |
| VisioProVolume         | PD3PC-RHNGV-FXJ29-8JK7D-RJRJK |
| VisioProXVolume        | 69WXN-MBYV6-22PQG-3WGHK-RM6XC |
| VisioStdVolume         | 7WHWN-4T7MP-G96JF-G33KR-W8GF4 |
| VisioStdXVolume        | NY48V-PPYYH-3F4PX-XJRKJ-W4423 |
| WordVolume             | WXY84-JN2Q9-RBCCQ-3Q3J3-3PFJ6 |

<br/>

### آفیس 2019

| EditionID                  | کلید مجوز حجمی عمومی    |
| -------------------------- | ----------------------------- |
| Access2019Volume           | 9N9PT-27V4Y-VJ2PD-YXFMF-YTFQT |
| Excel2019Volume            | TMJWT-YYNMB-3BKTF-644FC-RVXBD |
| Outlook2019Volume          | 7HD7K-N4PVK-BHBCQ-YWQRW-XW4VK |
| PowerPoint2019Volume       | RRNCX-C64HY-W2MM7-MCH9G-TJHMQ |
| ProjectPro2019Volume       | B4NPR-3FKK7-T2MBV-FRQ4W-PKD2B |
| ProjectStd2019Volume       | C4F7P-NCP8C-6CQPT-MQHV9-JXD2M |
| ProPlus2019Volume          | NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP |
| Publisher2019Volume        | G2KWX-3NW6P-PY93R-JXK2T-C9Y9V |
| SkypeforBusiness2019Volume | NCJ33-JHBBY-HTK98-MYCV8-HMKHJ |
| Standard2019Volume         | 6NWWJ-YQWMR-QKGCB-6TMB3-9D9HK |
| VisioPro2019Volume         | 9BGNQ-K37YR-RQHF2-38RQ3-7VCBB |
| VisioStd2019Volume         | 7TQNQ-K3YQQ-3PFH7-CCPPM-X4VQ2 |
| Word2019Volume             | PBX3G-NWMT6-Q7XBW-PYJGG-WXD33 |

<br/>

### آفیس 2021

| EditionID                  | کلید مجوز حجمی عمومی    |
| -------------------------- | ----------------------------- |
| Access2021Volume           | WM8YG-YNGDD-4JHDC-PG3F4-FC4T4 |
| Excel2021Volume            | NWG3X-87C9K-TC7YY-BC2G7-G6RVC |
| Outlook2021Volume          | C9FM6-3N72F-HFJXB-TM3V9-T86R9 |
| PowerPoint2021Volume       | TY7XF-NFRBR-KJ44C-G83KF-GX27K |
| ProjectPro2021Volume       | FTNWT-C6WBT-8HMGF-K9PRX-QV9H8 |
| ProjectStd2021Volume       | J2JDC-NJCYY-9RGQ4-YXWMH-T3D4T |
| ProPlus2021Volume          | FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH |
| Publisher2021Volume        | 2MW9D-N4BXM-9VBPG-Q7W6M-KFBGQ |
| SkypeforBusiness2021Volume | HWCXN-K3WBT-WJBKY-R8BD9-XK29P |
| Standard2021Volume         | KDX7X-BNVR8-TXXGX-4Q7Y8-78VT3 |
| VisioPro2021Volume         | KNH8D-FGHT4-T8RK3-CTDYJ-K2HT4 |
| VisioStd2021Volume         | MJVNY-BYWPY-CWV6J-2RKRT-4M8QG |
| Word2021Volume             | TN8H9-M34D3-Y64V9-TR72V-X79KV |

<br/>

### آفیس 2024

| EditionID                    | کلید مجوز حجمی عمومی    |
| ---------------------------- | ----------------------------- |
| ProPlus2024Volume-Preview    | 2TDPW-NDQ7G-FMG99-DXQ7M-TX3T2 |
| ProjectPro2024Volume-Preview | D9GTG-NP7DV-T6JP3-B6B62-JB89R |
| VisioPro2024Volume-Preview   | YW66X-NH62M-G6YFP-B7KCT-WXGKQ |
| Access2024Volume             | 82FTR-NCHR7-W3944-MGRHM-JMCWD |
| Excel2024Volume              | F4DYN-89BP2-WQTWJ-GR8YC-CKGJG |
| Outlook2024Volume            | D2F8D-N3Q3B-J28PV-X27HD-RJWB9 |
| PowerPoint2024Volume         | CW94N-K6GJH-9CTXY-MG2VC-FYCWP |
| ProjectPro2024Volume         | FQQ23-N4YCY-73HQ3-FM9WC-76HF4 |
| ProjectStd2024Volume         | PD3TT-NTHQQ-VC7CY-MFXK3-G87F8 |
| ProPlus2024Volume            | XJ2XN-FW8RK-P4HMP-DKDBV-GCVGB |
| SkypeforBusiness2024Volume   | 4NKHF-9HBQF-Q3B6C-7YV34-F64P3 |
| Standard2024Volume           | V28N4-JG22K-W66P8-VTMGK-H6HGR |
| VisioPro2024Volume           | B7TN8-FJ8V3-7QYCP-HQPMV-YY89G |
| VisioStd2024Volume           | JMMVY-XFNQC-KK4HK-9H7R3-WQQTV |
| Word2024Volume               | MQ84N-7VYDM-FXV7C-6K7CC-VFW9J |

<hr/><br/>

::: tip اطلاعات

- سیستم‌ها در تمام معماری‌ها (x86، x64 و arm64) پشتیبانی می‌شوند.
- محصولات خرده‌فروشی Office C2R به محصولات حجمی مربوطه خود تبدیل می‌شوند تا فعال‌سازی KMS را فعال کنند.
- این نسخه‌ها فقط برای حداکثر _45_ روز قابل فعال‌سازی با KMS هستند:
  - انواع نسخه‌های خانگی ویندوز 10/11
  - انواع نسخه‌های اصلی ویندوز 8.1، Pro با Media Center، Pro برای دانشجویان
    این نسخه‌ها فقط برای حداکثر _30_ روز قابل فعال‌سازی با KMS هستند:
  - انواع نسخه‌های اصلی ویندوز 8، Pro با Media Center

:::

<br/>

## محصولات پشتیبانی نشده

- آفیس MSI Retail 2010/2013، آفیس 2010 C2R Retail
- هر نسخه ارزیابی ویندوز (یعنی 'EVAL' LTSB/C) [نمی‌تواند فراتر از دوره ارزیابی فعال شود](./evaluation_editions). می‌توانید از گزینه TSforge در MAS برای بازنشانی فعال‌سازی در هر زمان معین استفاده کنید.
- نسخه Server Azure Datacenter (ServerTurbine) از فعال‌سازی در سیستم‌های غیر azure پشتیبانی نمی‌کند.
- فعال‌سازی KMS در ویندوز 7 محدودیتی مربوط به OEM Activation 2.0 و نشانگر ویندوز دارد. برای اطلاعات بیشتر، به [support.microsoft.com][3] و اینجا [technet.microsoft.com/activation-of-windows-oem-computers][4] مراجعه کنید.
- نسخه‌های ویندوزی که از فعال‌سازی KMS پشتیبانی نمی‌کنند:
  نسخه‌های ارزیابی ویندوز
  ویندوز 7 (Starter، HomeBasic، HomePremium، Ultimate)
  ویندوز 10 (Cloud "S"، IoTEnterprise، ProfessionalSingleLanguage... و غیره)
  ویندوز سرور (Server Foundation، Storage Server، Home Server 2011... و غیره)

<br/>

## چگونه کار می‌کند

- **فعال‌سازی KMS چیست؟**
  سرویس مدیریت کلید (KMS) یک روش فعال‌سازی واقعی است که توسط مایکروسافت برای مشتریان مجوز حجمی (سازمان‌ها، مدارس یا دولت‌ها) ارائه می‌شود. ماشین‌ها در آن محیط‌ها (که مشتریان KMS نامیده می‌شوند) از طریق سرور میزبان KMS محیط (کلید صدور مجوز مجاز مایکروسافت) فعال می‌شوند، به جای سرورهای فعال‌سازی مایکروسافت. طبق طراحی، دوره فعال‌سازی KMS حداکثر تا 180 روز (6 ماه) طول می‌کشد، با قابلیت تمدید و بازگرداندن دوره در هر زمان. تمدید فعال‌سازی به طور خودکار هر 7 روز اتفاق می‌افتد اگر مشتری بتواند به سرور میزبان KMS متصل شود. برای اطلاعات بیشتر، به [microsoft.com/licensing][5] و [technet.microsoft.com/kms-overview][6] مراجعه کنید.

<br/>

- **چگونه آن را به صورت رایگان دریافت می‌کنیم؟**
  توسعه‌دهندگان راه‌اندازی سرور میزبان KMS را مهندسی معکوس کرده‌اند، بنابراین اکنون هر کسی می‌تواند یک سرور KMS را میزبانی کند و سیستم‌ها را بدون هیچ محدودیتی فعال کند. فعال‌کننده‌های KMS مانند KMSpico، MTK، KMS_VL_ALL و غیره، به صورت محلی یک سرور میزبان KMS شبیه‌سازی شده ایجاد می‌کنند و ویندوز و آفیس را فعال می‌کنند.
  این سرور KMS شبیه‌سازی شده محلی نیاز به اجرای فایل‌های باینری دارد که اغلب باعث هشدارهای آنتی‌ویروس (مثبت کاذب) می‌شود.
  روش دیگر فعال‌سازی KMS، سرور میزبان آنلاین KMS در دسترس عموم است. در این روش، سایت سرور KMS شبیه‌سازی شده را میزبانی می‌کند و هر کسی می‌تواند به سادگی از این سرور برای فعال کردن سیستم‌های خود استفاده کند، نیازی به اجرای هیچ نرم‌افزاری روی سیستم شما نیست.

<br/>

- **آیا فعال‌سازی آنلاین KMS ایمن است؟**
  بله.
  بیایید به جزئیات بپردازیم. در پروتکل KMS، رابطه‌ای بین میزبان و مشتری وجود دارد. سیستم مشتری از سیستم میزبان می‌خواهد که فعال‌سازی را اعطا کند، و سیستم میزبان در صورت واجد شرایط بودن، فعال‌سازی را اعطا می‌کند. در این فرآیند، سیستم مشتری برخی از داده‌های سیستم را به اشتراک می‌گذارد که ماهیت حساسی ندارند. طبق [technet.microsoft.com/aspx#kms-overview][7]، سیستم مشتری داده‌های زیر را با سیستم میزبان به اشتراک می‌گذارد: FQDN مشتری، CMID، مهر زمانی، وضعیت مجوز محصول، زمان انقضا و آدرس IP
  در این اطلاعات به اشتراک گذاشته شده، بخش مهم آدرس IP شما است. در زیر برخی از مواردی که باید در مورد آن بدانید آورده شده است.
  - به اشتراک گذاشتن IP شما هنگام آنلاین شدن یک نگرانی امنیتی نیست. شما نمی‌توانید بدون به اشتراک گذاشتن آدرس IP خود به هیچ وب‌سایتی آنلاین بروید.
  - آدرس‌های IP لزوماً نماینده یک شخص خاص نیستند. ارائه‌دهندگان خدمات اینترنت (ISP) بیشتر از IP پویا استفاده می‌کنند، به این معنی که همان آدرس IP می‌تواند توسط افراد مختلفی استفاده شود، و یک آدرس IP پویا به طور دوره‌ای به افراد مختلف اختصاص داده می‌شود. اما یک آدرس IP ثابت به طور دائم به یک مشترک منحصر به فرد اختصاص داده می‌شود. ارائه‌دهنده خدمات اینترنت (ISP) این اطلاعات را فاش نخواهد کرد مگر اینکه دلیل قانونی برای انجام این کار وجود داشته باشد.
  - مایکروسافت هرگز سعی نکرده است کاربران خانگی را در موارد قانونی برای استفاده از چند فعال‌سازی غیرقانونی (نه در مورد کلیدهای قانونی دزدیده شده) تحت پیگرد قانونی قرار دهد، صرفاً به این دلیل که هزینه اقدامات قانونی بسیار بیشتر از مبلغی است که با مجبور کردن چند نفر به خرید فعال‌سازی به دست می‌آید.
  - هیچ نیروی انتظامی قرار نیست بر اساس IP از سراسر جهان بدون رضایت خود مایکروسافت اقدامی انجام دهد.

در صورتی که دیدگاه متناقضی دارید، با ما تماس بگیرید.

<br/>

## چگونه آنلاین KMS را حذف کنیم

- در MAS، به فعال‌سازی آنلاین KMS بروید و گزینه Uninstall را اعمال کنید.
- پس از آن، در MAS، به Troubleshoot بروید و گزینه Fix Licensing را اعمال کنید.
- انجام شد. <br/>

### بنر 'غیر اصلی' آفیس

- بیلدهای Click-to-Run آفیس (از فوریه 2021) که با KMS فعال شده‌اند، وجود نام سرور KMS را در رجیستری بررسی می‌کنند.
- اگر سرور KMS وجود نداشته باشد، بنری در برنامه‌های آفیس نمایش داده می‌شود که اطلاع می‌دهد "آفیس به درستی مجوز ندارد".
- بنابراین در حالت دستی، مقدار `KeyManagementServiceName` حاوی یک آدرس IP غیرموجود 10.0.0.10 در کلیدهای رجیستری زیر نگهداری می‌شود:

```
HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform
HKLM\SOFTWARE\WOW6432Node\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform
```

- نگهداری این کاملاً خوب است و بر فعال‌سازی ویندوز یا آفیس تأثیری نمی‌گذارد. برای توضیحات بیشتر، به [مجوز آفیس اصلی نیست](./office-license-is-not-genuine) مراجعه کنید. <br/>

### آفیس Retail به Volume

آفیس Retail باید قبل از اینکه بتواند با KMS فعال شود، ابتدا به Volume تبدیل شود.
به طور پیش‌فرض، این اسکریپت فعال‌سازی، آفیس C2R Retail را به Volume تبدیل می‌کند.

- محصولات Click-to-Run پشتیبانی شده: Office 365 (Microsoft 365 Apps)، Office 2024 / 2021 / 2019 / 2016، Office 2013
- خود Office 365 مجوزهای حجمی ندارد، بنابراین به مجوزهای Office Mondo تبدیل می‌شود
- مجموعه Office Professional با مجوزهای Office Professional Plus تبدیل می‌شود
- مجموعه‌های Office HomeBusiness/HomeStudent با مجوزهای Office Standard تبدیل می‌شوند
- محصولات آفیس 2013 از همان منطق پیروی می‌کنند

اگر نمی‌خواهید اسکریپت آفیس Retail را به Volume تبدیل کند، می‌توانید گزینه "Change Edition If Needed" را در اسکریپت خاموش کنید. <br/>

### سوئیچ‌های خط فرمان

- [سوئیچ‌های خط فرمان](./command_line_switches) را بررسی کنید. <br/>

### راه‌اندازی پیش‌فعال‌سازی

- گزینه Extract OEM را در بخش `Extras` MAS بررسی کنید اگر می‌خواهید نصب ویندوز از قبل فعال شده داشته باشید.
- بیشتر بخوانید [پوشه OEM](./oem-folder).

::: danger رفع مشکلات

اگر سوالی دارید، ابتدا صفحه [**سوالات پرتکرار**](./faq) را مرور کنید — به احتمال زیاد جواب‌تان اینجاست.
اگر همچنان مشکل پابرجا بود — با ما [**در ارتباط**](./troubleshoot) باشید.

:::

[1]: https://docs.microsoft.com/en-us/previous-versions/tn-archive/ee939272(v=technet.10)?redirectedfrom=MSDN#kms-overview
[2]: https://github.com/abbodi1406/KMS_VL_ALL_AIO/
[3]: https://support.microsoft.com/en-us/help/942962
[4]: https://technet.microsoft.com/en-us/library/ff793426(v=ws.10).aspx#activation-of-windows-oem-computers
[5]: https://www.microsoft.com/en-us/Licensing/servicecenter/Help/FAQDetails.aspx?id=201#215
[6]: https://technet.microsoft.com/en-us/library/ee939272(v=ws.10).aspx#kms-overview
[7]: https://technet.microsoft.com/en-us/library/ee939272(v=ws.10).aspx#kms-overview
