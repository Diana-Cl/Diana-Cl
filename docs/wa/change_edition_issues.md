---
layout: doc
outline: deep
title: 'مشکلات تغییر نسخه'
description: 'در حین ارتقاء از نسخه Home به Pro، اسکریپت ممکن است خطاهایی را نشان دهد'
date: 2024-04-05
editLink: true
---

# مشکلات تغییر نسخه

## خطای 0x80070490

- در حین ارتقاء از نسخه Home به Pro، اسکریپت ممکن است خطای زیر را نشان دهد:
```
Exception calling "_DismSet Edition" with "6" argument(s): "Element not found. (Exception from HRESULT: 0x80070490)"
```
- این مشکل اغلب زمانی رخ می‌دهد که NET Framework 3.5. نصب شده باشد.
- برای حل این مشکل، باید آن را غیرفعال کنید. برای این کار، Command Prompt را به عنوان مدیر باز کنید و دستور زیر را وارد کنید:
  `DISM /Online /English /Disable-Feature /FeatureName:"NetFx3"`
- پس از انجام این کار، دوباره سعی کنید نسخه را تغییر دهید.
- پس از تغییر نسخه، می‌توانید دوباره NET 3.5. را فعال کنید:
  `DISM /Online /English /Enable-Feature /FeatureName:"NetFx3"`

---

## خطاهای دیگر

::: danger عیب یابی

- سیستم را مجدداً راه‌اندازی کنید و سپس دوباره سعی کنید نسخه را تغییر دهید.
- اگر هنوز مشکل حل نشده است، [این راهنما](./in-place_repair_upgrade) را دنبال کنید.

- اگر سوالی دارید، ابتدا بخش [**سوالات متداول**](./faq) را مرور کنید - به احتمال زیاد پاسخ شما در آنجا خواهد بود.

- اگر مشکل شما همچنان ادامه داشت - [**با ما تماس بگیرید**](./troubleshoot).

:::

[1]: https://gravesoft.dev/in-place_repair_upgrade
