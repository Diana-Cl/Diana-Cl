---
layout: doc
outline: deep
title: 'رفع مشکلات Powershell'
description: 'اسکریپت‌ها ممکن است خطایی مربوط به عدم کارکرد پاورشل نشان دهند.'
date: 2024-04-12
editelink: true
---

# رفع مشکل PowerShell


### اسکریپت‌ها اغلب ممکن است خطایی مربوط به عدم کارکرد پاورشل نشان دهند.

<br><br/>

## حالت زبان محدود شده

-  اکر اسکریپت در خروجی خطای مذکور را نشان داد: `ConstrainedLanguage`
-  خط فرمان <Badge type="danger" text="Command Prompt" /> را در حالت <Badge type="info" text="Administrator" /> اجرا کرده و سپس دستور زیر را وارد کنید:

```reg

reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v "__PSLockdownPolicy" /f

```

-  در صورت لزوم دستور را چندبار تکرار کنید، خطا باید رفع شود

::: danger رفع مشکلات

اگر سوالی دارید، ابتدا صفحه [**سوالات پرتکرار**](./faq) را مرور کنید — به احتمال زیاد جواب‌تان اینجاست.
اگر همچنان مشکل پابرجا بود — با ما [**در ارتباط**](./troubleshoot) باشید.

:::
