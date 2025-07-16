---
layout: doc
outline: deep
title: 'فعال‌سازی دستی KMS38'
description: 'این صفحه برای کاربرانی در نظر گرفته شده است که به هر دلیلی نمی‌خواهند از اسکریپت استفاده کنند و ترجیح می‌دهند فرآیند فعال‌سازی KMS38 را خودشان انجام دهند.'
date: 2023-03-07
editLink: true
---


# KMS38

این صفحه برای کاربرانی در نظر گرفته شده است که به هر دلیلی نمی‌خواهند از اسکریپت استفاده کنند و ترجیح می‌دهند فرآیند فعال‌سازی KMS38 را خودشان انجام دهند. اگر به جای آن می‌خواهید از ابزاری برای این کار استفاده کنید، لطفاً [اینجا](./index#step-2-run-the-activation-script) را بررسی کنید.

::: info نکته

فعال‌سازی KMS38 فقط در نسخه‌های کلاینت و سرور ویندوز 10/11 پشتیبانی می‌شود.

:::

## فعال‌سازی دستی ویندوز

برای فعال‌سازی دستی ویندوز، این مراحل را دنبال کنید:

- **مرحله 1:** Windows Powershell را به عنوان مدیر باز کنید و دستورات زیر را وارد کنید.
::: tip برای اجرای Powershell

::: details برای مشاهده جزئیات اینجا کلیک کنید

### گزینه الف: استفاده از نوار جستجو <Badge type="danger" text="توصیه می‌شود" />
1. روی دکمه «Start» ویندوز یا نماد «Search» در نوار وظیفه کلیک کنید.
2. `powershell` را تایپ کنید.
3. `Run as administrator` را انتخاب کنید. <br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/9b27cd4b-21d8-4970-98bb-3c97010e09bf" alt="open-powershell-as-admin" width="540px" />
</p>

### گزینه ب: استفاده از کادر Run

1. کادر محاوره‌ای Run را باز کنید: کلیدهای `Win (⊞) + R` را همزمان فشار دهید.
2. `powershell` را تایپ کنید.
3. برای اجرای به عنوان مدیر، `Ctrl + Shift + Enter` را فشار دهید.
4. اگر توسط کنترل حساب کاربری درخواست شد، روی `Yes` کلیک کنید. <br/>

### گزینه ج: استفاده از منوی Power User

1. روی «Start menu» راست کلیک کنید (یا `Win (⊞) + X` را فشار دهید).
2. «Windows Terminal (Admin)» را در ویندوز 11 یا «Windows PowerShell (Admin)» را در ویندوز 10 انتخاب کنید.

یا می‌توانید از [این لینک][1] برای دیدن 10 روش برای اجرای **PowerShell** و [این لینک][2] برای اجرای CMD در ویندوز خود بازدید کنید.

:::

- **مرحله 2:** کلید عمومی را که با نسخه ویندوز شما مطابقت دارد نصب کنید:

``` reg
slmgr /ipk <key>
```

*(برای کلید مناسب به جدول زیر مراجعه کنید.)*

- **مرحله 3:** [فایل تیکت KMS38][3] را دانلود کنید.
- **مرحله 4:** فایل تیکت دانلود شده را در ریشه درایو C: کپی کنید.
- **مرحله 5:** با اجرای دستورات زیر، تیکت را به یک لایسنس منتقل کرده و ویندوز را فعال کنید:

```reg
clipup -v -o -altto C:\
```

- **در نهایت** پس از چند ثانیه انتظار، ویندوز باید فعال شود.


::: tip نکات

- برای نسخه‌های Windows Server Cor/Acor، سیستم فایل `clipup.exe` را ندارد.
    برای فعال‌سازی آن با استفاده از KMS38، فایل گمشده `ClipUp.exe` را از [این لینک][4] دانلود کنید.
    `File: ClipUp.exe`
    `SHA-256: 0d6e9f6bbd0321eda149658d96040cb4f79e0bd93ba60061f25b28fecbf4d4ef`
  این فایل به صورت دیجیتالی امضا شده و قابل تأیید است. همچنین می‌توانید این فایل را از [ISO رسمی Windows Server 2016 x64 RTM][5] دریافت کنید.
  فایل `ClipUp.exe` را در پوشه `C:\Windows\System32` قرار دهید و فرآیند فعال‌سازی KMS38 را انجام دهید. پس از اتمام فعال‌سازی، می‌توانید فایل را حذف کنید.

:::

<br/>

### ویندوز 10 / 11
| نام محصول                                          | کلید لایسنس حجمی عمومی    |
|--------------------------------------------------------|-------------------------------|
| Education                                              | NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |
| Education N                                            | 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |
| Enterprise                                             | NPPR9-FWDCX-D2C8J-H872K-2YT43 |
| Enterprise N                                           | DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |
| Enterprise G                                           | YYVX9-NTFWV-6MDM3-9PT4T-4M68B |
| Enterprise G N                                         | 44RPN-FTY23-9VTTB-MP9BX-T84FV |
| Enterprise LTSB 2016                                   | DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ |
| Enterprise LTSC 2019                                   | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise LTSC 2021                                   | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise LTSC 2024                                   | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Enterprise N LTSB 2016                                 | QFFDN-GRT3P-VKWWX-X7T3R-8B639 |
| Enterprise N LTSC 2019                                 | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| Enterprise N LTSC 2021                                 | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| Enterprise N LTSC 2024                                 | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |
| IoT Enterprise LTSC 2021 <br /> (19044.2788 و بالاتر) | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| IoT Enterprise LTSC 2024                               | KBN8V-HFGQ4-MGXVD-347P6-PDQGT |
| Home                                                   | TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 |
| Home N                                                 | 3KHY7-WNT83-DGQKR-F7HPR-844BM |
| Home China                                             | PVMJN-6DFY6-9CCP6-7BKTT-D3WVR |
| Home Single Language                                   | 7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH |
| Lean                                                   | NBTWJ-3DR69-3C4V8-C26MC-GQ9M6 |
| Enterprise multi-session <br /> (17763 و بالاتر)      | CPWHC-NT2C7-VYW78-DHDB2-PG3GK |
| Enterprise multi-session <br /> (17134 و قبل)     | 7NBT4-WGBQX-MP4H7-QXFF8-YP3KX |
| Pro                                                    | W269N-WFGWX-YVC9B-4J6C9-T83GX |
| Pro N                                                  | MH37W-N47XK-V7XM9-C7227-GCQG9 |
| Pro Education                                          | 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y |
| Pro Education N                                        | YVWGF-BXNMC-HTQYQ-CPQ99-66QFC |
| Pro for Workstations                                   | NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J |
| Pro N for Workstations                                 | 9FNHH-K3HBT-3W4TD-6383H-6XYWF |
| SE                                                     | 37D7F-N49CB-WQR8W-TBJ73-FM8RX |
| SE N                                                   | 6XN7V-PCBDC-BDBRH-8DQY7-G6R44 |

<br/>

### ویندوز سرور 2025 (LTSC)
| نام محصول                        | کلید لایسنس حجمی عمومی    |
|--------------------------------------|-------------------------------|
| Windows Server 2025 Standard         | TVRH6-WHNXV-R9WG3-9XRFY-MY832 |
| Windows Server 2025 Datacenter       | D764K-2NDRG-47T6Q-P8T8W-YP6DF |
| Windows Server 2025 Azure Core       | FCNV3-279Q9-BQB46-FTKXX-9HPRH |
| Windows Server 2025 Azure Datacenter | XGN3F-F394H-FD2MY-PP6FD-8MCRC |

<br/>

### ویندوز سرور 2022 (LTSC)
| نام محصول                        | کلید لایسنس حجمی عمومی    |
|--------------------------------------|-------------------------------|
| Windows Server 2022 Datacenter       | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |
| Windows Server 2022 Standard         | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |
| Windows Server 2022 Azure Core       | 6N379-GGTMK-23C6M-XVVTC-CKFRQ |
| Windows Server 2022 Azure Datacenter | NTBV8-9K7Q8-V27C6-M2BTV-KHMXV |

<br/>

### ویندوز سرور 2019 (LTSC)
| نام محصول                  | کلید لایسنس حجمی عمومی    |
|--------------------------------|-------------------------------|
| Windows Server 2019 Datacenter | WMDGN-G9PQG-XVVXX-R3X43-63DFG |
| Windows Server 2019 Standard   | N69G4-B89J2-4G8F4-WWYCC-J464C |
| Windows Server 2019 Essentials | WVDHN-86M7X-466P6-VHXV7-YY726 |
| Windows Server 2019 Azure Core | FDNH6-VW9RW-BXPJ7-4XTYG-239TB |
| Windows Server 2019 ARM64      | GRFBW-QNDC4-6QBHG-CCK3B-2PR88 |

<br/>

### ویندوز سرور 2016 (LTSC)
| نام محصول                     | کلید لایسنس حجمی عمومی    |
|-----------------------------------|-------------------------------|
| Windows Server 2016 ARM64         | K9FYF-G6NCK-73M32-XMVPY-F9DRR |
| Windows Server 2016 Datacenter    | CB7KF-BWN84-R7R2Y-793K2-8XDDG |
| Windows Server 2016 Standard      | WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY |
| Windows Server 2016 Essentials    | JCKRF-N37P4-C2D82-9YXRT-4M63B |
| Windows Server 2016 Cloud Storage | QN4C6-GBJD2-FB422-GHWJK-GJG2R |
| Windows Server 2016 Azure Core    | VP34G-4NPPG-79JTQ-864T4-R3MQX |

<br/>

### ویندوز سرور 23H2 (کانال سالانه)
| نام محصول             | کلید لایسنس حجمی عمومی    |
|---------------------------|-------------------------------|
| Windows Server Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |

<br/>

### ویندوز سرور 20H2, 2004, 1909, 1903, and 1809 (کانال نیم‌ساله)
| نام محصول             | کلید لایسنس حجمی عمومی    |
|---------------------------|-------------------------------|
| Windows Server Datacenter | 6NMRW-2C8FM-D24W7-TQWMY-CWH2D |
| Windows Server Standard   | N2KJX-J94YW-TQVFB-DG9YT-724CC |

<br/>

### ویندوز سرور 1803 (کانال نیم‌ساله)
| نام محصول             | کلید لایسنس حجمی عمومی    |
|---------------------------|-------------------------------|
| Windows Server Datacenter | 2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG |
| Windows Server Standard   | PTXN8-JFHJM-4WC78-MPCBR-9W4KR |

<br/>

### ویندوز سرور 1709 (کانال نیم‌ساله)
| نام محصول             | کلید لایسنس حجمی عمومی    |
|---------------------------|-------------------------------|
| Windows Server Datacenter | 6Y6KB-N82V8-D8CQV-23MJW-BWTG6 |
| Windows Server Standard   | DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4 |


## عیب یابی

::: danger عیب یابی

- اگر در این مورد به کمکی نیاز دارید، ابتدا بخش [**سوالات متداول**](./faq) را مرور کنید — به احتمال زیاد پاسخ شما در آنجا خواهد بود.

- اگر مشکل شما همچنان ادامه داشت — می‌توانید [**با ما تماس بگیرید**](./troubleshoot).

:::


[1]: https://www.minitool.com/news/open-windows-11-powershell.html
[2]: https://www.minitool.com/news/open-command-prompt-windows-11.html
[3]: https://github.com/massgravel/hwid-kms38-tickets/releases/download/2.0/KMS38.xml
[4]: https://app.box.com/s/cwoxub9tqyowhnyva6ign6qnogb6vk0o
[5]: https://download.microsoft.com/download/1/6/F/16FA20E6-4662-482A-920B-1A45CF5AAE3C/14393.0.160715-1616.RS1_RELEASE_SERVER_EVAL_X64FRE_EN-US.ISO
