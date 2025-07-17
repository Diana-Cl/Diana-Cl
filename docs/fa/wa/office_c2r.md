---
layout: doc
outline: deep
title: 'نصب سفارشی Office C2R'
description: 'روش نصب سفارشی آفیس'
date: 2025-05-08
editLink: true
---

# نصب سفارشی Office C2R

::: info توجه
- اگر راهنمای زیر برای شما گیج‌کننده است، ساده‌ترین گزینه برای شما استفاده از [نصب‌کننده Office C2R][1] است.
- آفیس Retail (مثلاً O365) دارای آخرین به‌روزرسانی‌های ویژگی است و آفیس Volume (مثلاً ProPlus 2024) اینطور نیست.
- لطفاً توجه داشته باشید که در روش نصب سفارشی رسمی C2R office، هیچ ISO یا راه‌حل یک کلیکی در دسترس نیست. در زیر ساده‌ترین راهنما برای نصب آفیس سفارشی آورده شده است.

:::

## راهنمای نصب سفارشی

-   اگر آفیس قبلاً نصب شده بود،
	- آفیس را با گزینه App and Features در تنظیمات ویندوز حذف کنید.
	- فایل `OfficeScrubber.cmd` را از [Office Scrubber][2] توسط abbodi1406 اجرا کرده و گزینه `[R] Remove all Licenses` را انتخاب کنید.
-   یک پوشه جدید به نام `Office` در درایو `C:\` ایجاد کنید، به عنوان مثال `C:\Office`
-   [ابزار استقرار آفیس][3] (ODT) را دانلود کنید
-   فایل دانلود شده `setup.exe` را در آن پوشه آفیس که ایجاد کرده‌اید کپی کنید، به عنوان مثال `C:\Office\setup.exe`
-   به [config.office.com][4] بروید
-   اگر آفیس Retail می‌خواهید، `Microsoft 365 Apps for enterprise` را در بخش مجموعه‌های آفیس انتخاب کنید.
-   اگر آفیس Volume می‌خواهید، `Office LTSC Professional Plus 2024 - Volume License` را در بخش مجموعه‌های آفیس انتخاب کنید. (نسخه SPLA را انتخاب نکنید)
-   می‌توانید برنامه‌های Visio و Project را در صورت نیاز اضافه کنید، اما اطمینان حاصل کنید که زبان پشتیبانی شده [Project][5] / [Visio][6] انتخاب شده باشد.
-   اگر قصد دارید فایل‌های آفیس را دانلود کرده و بعداً نصب کنید، اطمینان حاصل کنید که به جای آخرین نسخه، یک شماره نسخه خاص را در گزینه `Select the version` انتخاب کنید.
-   فقط باید گزینه‌ها را تا بخش "Language" پیکربندی کنید. می‌توانید بقیه را به صورت پیش‌فرض رها کنید.
-   روی دکمه export کلیک کنید، گزینه "Keep Current Settings" را انتخاب کنید و فایلی به نام `Configuration.xml` دانلود می‌شود (اگر نام چیز دیگری بود، آن را به `Configuration.xml` تغییر دهید)
-   فایل دانلود شده `Configuration.xml` را در آن پوشه آفیس که ایجاد کرده‌اید کپی کنید، به عنوان مثال `C:\Office\Configuration.xml`

-   **خط فرمان** <Badge type="info" text="فقط Command prompt" /> را به عنوان <Badge type="tip" text="Administrator" /> باز کرده و دستورات زیر را اجرا کنید.
    ```
    cd /d C:\Office\
    setup.exe /configure Configuration.xml
    ```

**اکنون آفیس نصب خواهد شد.**

-	اطمینان حاصل کنید که طبق مراحل بالا، یک شماره نسخه خاص را در پیکربندی انتخاب کرده‌اید.
-   **خط فرمان** (نه Powershell) را **به عنوان مدیر** باز کرده و دستورات زیر را اجرا کنید
	- دانلود فایل‌های آفیس
    ```
    cd /d C:\Office\
    setup.exe /download Configuration.xml
    ```
	- نصب آفیس از فایل‌های آفیس دانلود شده (می‌تواند به صورت آفلاین انجام شود)
	```
	cd /d C:\Office\
    setup.exe /configure Configuration.xml
    ```

<br/>

::: tip **خطاهای رایج**

- اطمینان حاصل کنید که آن دستورات را در خط فرمان (CMD) با امتیاز مدیر وارد می‌کنید.

- پسوندهای نام فایل به طور پیش‌فرض در ویندوز پنهان هستند. به همین دلیل، برخی از افراد ممکن است به اشتباه `Configuration.xml` را به `Configuration.xml.xml` تغییر نام دهند زیرا `.xml` قابل مشاهده نبود.

:::

### روش‌های جایگزین
-  [YAOCTRU][7] (دانلودر آفیس) و [YAOCTRI][8] (نصب‌کننده آفیس)
-  [Office Tool Plus][9].

::: danger رفع مشکلات

اگر سوالی دارید، ابتدا صفحه [**سوالات پرتکرار**](./faq) را مرور کنید — به احتمال زیاد جواب‌تان اینجاست.
اگر همچنان مشکل پابرجا بود — با ما [**در ارتباط**](./troubleshoot) باشید.

:::

[1]: https://gravesoft.dev/office_c2r_links
[2]: https://github.com/abbodi1406/WHD/raw/master/scripts/OfficeScrubber_13.zip
[3]: https://officecdn.microsoft.com/pr/wsus/setup.exe
[4]: https://config.office.com/deploymentsettings
[5]: https://learn.microsoft.com/en-us/projectonline/supported-languages-for-project-online
[6]: https://support.microsoft.com/en-us/office/display-languages-supported-in-the-visio-desktop-app-a921983e-fd5d-45ef-8af1-cedf70c53d75
[7]: https://github.com/abbodi1406/WHD/raw/master/scripts/YAOCTRU_v10.0.zip
[8]: https://github.com/abbodi1406/WHD/raw/master/scripts/YAOCTRI_v11.1.zip
[9]: http://otp.landian.vip/
