---
layout: doc
outline: deep
lang: "fa-IR"
dir: rtl
title: "عیب‌یابی شبکه‌ موبایل"
description: "عیب‌یابی اتصال به شبکه‌ در سیستم‌عامل اندروید گوشی‌های سامسونگ"
date: 2026-11-17
category: "ابزارها و سرور"
icon: "⚙️"
editLink: true
head:
  - - meta
    - name: description
      content:  عیب‌یابی, شبکه, سامسونگ, نتوورک, دیتای موبایل, اینترنت سیمکارت, وای‌فای, مودم, apn, نام نقاط دستیابی, دی‌ان‌اس, سامسونگ, private dns, Android Network Diagnostic
  - - meta
    - name: keywords
      content: Android Network Diagnostic, apn, cellular, wifi, network, Debug, private dns, routing rules, iran, irancell, hamrah aval, mci, mtn, mkb, Samsung, A series
---

# Android Network Diagnostic

راهنمای بررسی تنظیمات شبکه و عیب‌یابی اتصال VPN در گوشی‌های Samsung Galaxy و سایر دستگاه‌های Android.

> هدف این راهنما شناسایی اختلالات احتمالی در تنظیمات شبکه، DNS، سیستم‌عامل و کلاینت‌های VPN است. قبل از انجام هرگونه تغییر، وضعیت فعلی تنظیمات را ثبت کنید.

## 1. اطلاعات دستگاه

ابتدا اطلاعات پایه دستگاه را ثبت کنید.

- [ ] مدل گوشی و شماره مدل بررسی شد.
- [ ] نسخه Android مشخص شد.
- [ ] نسخه One UI مشخص شد.
- [ ] آخرین به‌روزرسانی سیستم‌عامل بررسی شد.
- [ ] تاریخ و نسخه کلاینت VPN ثبت شد.

مسیر مشاهده نسخه سیستم‌عامل:

`Settings → About phone → Software information`

## 2. تنظیمات شبکه موبایل

### Mobile Data

- [ ] دیتای موبایل بدون VPN به‌درستی کار می‌کند.
- [ ] سیم‌کارت موردنظر برای Mobile Data انتخاب شده است.
- [ ] Airplane Mode خاموش است.
- [ ] Network Mode روی حالت خودکار مناسب اپراتور قرار دارد.
- [ ] انتخاب اپراتور روی Automatic است.

مسیرهای معمول:

`Settings → Connections → SIM manager`

`Settings → Connections → Mobile networks`

### APN

- [ ] APN فعال با اپراتور سیم‌کارت مطابقت دارد.
- [ ] مقادیر APN با تنظیمات رسمی اپراتور مقایسه شده‌اند.
- [ ] APN غیرضروری یا ناشناس وجود ندارد.

**مهم:** بدون ثبت تنظیمات فعلی، APN را تغییر ندهید. در صورت وجود مغایرت، ابتدا از تنظیمات رسمی اپراتور استفاده کنید.

مسیر:

`Settings → Connections → Mobile networks → Access Point Names`

در صورت نیاز به بازگردانی تنظیمات پیش‌فرض:

`Access Point Names → More → Reset to default`

### Network Test

- [ ] یک سایت HTTPS بدون VPN باز می‌شود.
- [ ] اینترنت با Wi-Fi نیز آزمایش شده است.
- [ ] اتصال با حداقل دو اپراتور مستقل آزمایش شده است.

## 3. DNS و تنظیمات اتصال

### Private DNS

- [ ] وضعیت Private DNS بررسی شد.
- [ ] هیچ Hostname ناشناس یا قدیمی تنظیم نشده است.
- [ ] برای تست پایه، حالت Automatic انتخاب شده است.

مسیر:

`Settings → Connections → More connection settings → Private DNS`

در بعضی نسخه‌ها می‌توانید عبارت Private DNS را در جست‌وجوی Settings وارد کنید.

### Proxy

- [ ] در تنظیمات Wi-Fi، Proxy روی None است؛ مگر اینکه عمداً از Proxy استفاده شود.
- [ ] برنامه‌های DNS Changer و فایروال بررسی شده‌اند.
- [ ] برنامه‌های AdBlock دارای قابلیت VPN بررسی شده‌اند.

## 4. Android VPN Settings

### VPN Profiles

- [ ] پروفایل‌های VPN قدیمی و بلااستفاده بررسی شدند.
- [ ] VPNهای فعال و برنامه‌های دارای مجوز VPN شناسایی شدند.
- [ ] هم‌زمان فقط یک کلاینت VPN برای آزمایش استفاده می‌شود.

مسیر:

`Settings → Connections → More connection settings → VPN`

### Always-on VPN

- [ ] وضعیت Always-on VPN بررسی شد.
- [ ] گزینه Block connections without VPN بررسی شد.
- [ ] هیچ VPN قدیمی به‌صورت اجباری فعال نیست.

::: tip نکته
گزینه Block connections without VPN می‌تواند دسترسی اینترنت خارج از تونل را مسدود کند. اگر این گزینه فعال است، قبل از تغییر، اثر آن را بررسی و خاموش کنید.  
:::

## 5. Samsung Battery Restrictions

محدودیت‌های باتری ممکن است اجرای پس‌زمینه و پایداری VPN را مختل کنند.

- [ ] Power Saving Mode برای تست خاموش است.
- [ ] Data Saver بررسی شده است.
- [ ] کلاینت VPN در Deep Sleeping Apps قرار ندارد.
- [ ] کلاینت VPN در Sleeping Apps قرار ندارد.
- [ ] محدودیت باتری برنامه بررسی شده است.

مسیر معمول:

`Settings → Battery → Background usage limits`

در صورت وجود گزینه Never sleeping apps، می‌توانید کلاینت VPN را به آن اضافه کنید.

همچنین:

`Settings → Apps → [VPN Client] → Battery`

برای تست، اجازه اجرای پس‌زمینه را محدود نکنید یعنی روی گزینه‌ی **optimized** یا **Unrestricted** قرار دهید. 

## 6. VPN Client Configuration

تنظیمات این بخش به کلاینت مورد استفاده وابسته است.

### V2RayNG

- [ ] نسخه برنامه ثبت شده است.
- [ ] کانفیگ از منبع معتبر دریافت شده است.
- [ ] کانفیگ در برنامه دیگری نیز آزمایش شده است.
- [ ] Routing روی حالت موردنظر تنظیم شده است.
- [ ] DNS داخلی برنامه بررسی شده است.
- [ ] تنظیمات IPv6 بررسی شده‌اند.
- [ ] تنظیمات Mux و Fragmentation بدون تغییرات آزمایشی متعدد بررسی شده‌اند.
- [ ] Log برنامه برای یافتن خطا بررسی شده است.

**توجه:** در مرحله اول تمام تنظیمات کلاینت را روی حالت پیش‌فرض یا تنظیمات توصیه‌شده سازنده نگه دارید. تغییر هم‌زمان چند گزینه، تشخیص علت اصلی را دشوار می‌کند.

### سایر کلاینت‌ها

برای Hiddify، NekoBox، v2rayNG و سایر کلاینت‌ها، موارد زیر نیز بررسی شوند:

- نسخه برنامه
- مجوز ایجاد VPN
- DNS Configuration
- Routing Mode
- وضعیت اتصال تونل
- گزارش خطا و زمان وقوع آن

## 7. Connectivity Tests

آزمایش‌ها را به همین ترتیب انجام دهید.

### Test A — Baseline

- [ ] Wi-Fi بدون VPN
- [ ] Mobile Data بدون VPN
- [ ] باز شدن چند سایت HTTPS
- [ ] عملکرد DNS در اینترنت عادی

### Test B — Independent VPN

- [ ] اتصال Windscribe با IKEv2
- [ ] آزمایش حداقل دو سرور
- [ ] آزمایش روی Wi-Fi
- [ ] آزمایش روی Mobile Data

### Test C — Proxy Client

- [ ] اتصال با کانفیگ سالم VLESS
- [ ] آزمایش همان کانفیگ روی Wi-Fi
- [ ] آزمایش همان کانفیگ روی سیم‌کارت اول
- [ ] آزمایش همان کانفیگ روی سیم‌کارت دوم
- [ ] ثبت خطای دقیق کلاینت

### Test D — Comparison

اگر امکان دارد، همان کانفیگ و همان کلاینت را روی یک گوشی دیگر با همان اپراتور آزمایش کنید.

این آزمایش کمک می‌کند مشکل دستگاه از مشکل شبکه یا کانفیگ تفکیک شود.

## 8. Diagnostic Report

در پایان، اطلاعات زیر را برای تحلیل ارسال کنید.

### Device

- Model:
- Android Version:
- One UI Version:
- VPN Client:
- Client Version:

### Network

- Operator 1:
- Operator 2:
- Wi-Fi Test:
- Mobile Data Test:

### Results

| Test | Result |
| --- | --- |
| Internet without VPN | |
| Windscribe IKEv2 | |
| VLESS on Wi-Fi | |
| VLESS on SIM 1 | |
| VLESS on SIM 2 | |
| DNS | |

### Error Details

- Exact error:
- Does connection establish?
- Does traffic pass through?
- Does the problem occur on all servers?
- Does the problem occur on all operators?

<br/>

##

::: danger Important Notes  
- قبل از ثبت وضعیت اولیه، تنظیمات شبکه را Reset نکنید.
- APN را بدون بررسی اطلاعات رسمی اپراتور تغییر ندهید.
- نصب چند VPN هم‌زمان به معنی امکان استفاده هم‌زمان از همه آن‌ها نیست.
- موفقیت اتصال IKEv2 لزوماً سلامت تمام پروتکل‌های VPN را اثبات نمی‌کند.
- اطلاعات حساس مانند UUID، Password، Private Key و Subscription URL را در گزارش ارسال نکنید.
- اگر اتصال اینترنت پایه نیز مشکل دارد، ابتدا همان مشکل را بررسی کنید.  
::::

### Official References

- [Samsung Network Troubleshooting][1]
- [Samsung Connection Settings][2]
- [Samsung Background App Management][3]


[1]: https://www.samsung.com/us/support/troubleshoot/TSG10004575
[2]: https://www.samsung.com/us/support/answer/ANS10002546
[3]: https://developer.samsung.com/mobile/app-management.html
