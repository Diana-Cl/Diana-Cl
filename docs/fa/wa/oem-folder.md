---
layout: doc
outline: deep
title: "پوشه OEM"
description: ""
date: 2025-01-06
editLink: true
---

# پوشه‌های $OEM$

برای ایجاد یک ISO نصب ویندوز از قبل فعال شده، موارد زیر را انجام دهید:
-   پوشه `$OEM$` را با استفاده از اسکریپت MAS به دسکتاپ استخراج کنید.
-   پوشه `$OEM$` را در پوشه `sources` در رسانه نصب ویندوز (ISO یا USB) کپی کنید.
-   دایرکتوری به این صورت ظاهر می‌شود: `\sources\$OEM$` در ISO تغییر یافته شما یا در درایو USB قابل بوت شما.
-   اکنون از این ISO یا درایو USB قابل بوت برای نصب ویندوز استفاده کنید، به محض بوت شدن یا از قبل فعال شده است (KMS38) یا در اولین تماس با اینترنت خود به خود فعال می‌شود (HWID یا آنلاین KMS).
-   می‌توانید [اینجا][1] را برای جزئیات روش فعال‌سازی بررسی کنید.

::: warning توجه

::: details در ویندوز 8 و بالاتر

- خطای [اجرای setup complete.cmd غیرفعال است][2] اگر کلید نصب شده پیش‌فرض برای نسخه از کانال OEM باشد، به جز برای نسخه‌های Enterprise و Windows Server.
- با این حال، در ویندوز 10، نسخه‌های IoT Enterprise در لیست دسته‌بندی Enterprise در طول فرآیند نصب گنجانده نشده بودند.
- در نتیجه، Enterprise با کلید OEM می‌تواند setupcomplete.cmd را مدیریت کند، اما IoT Enterprise (LTSC) نمی‌تواند. این در نسخه‌های بعدی ویندوز 11 رفع شد.
    - در ویندوز 10 IoT Enterprise (LTSC)، می‌توانید این مشکل را با استفاده از ISO Non-IoT Windows 10 Enterprise LTSC حل کنید. در این حالت، روش HWID در پیش‌فعال‌سازی، کلید IoT LTSC را برای تغییر نسخه و فعال کردن فعال‌سازی HWID نصب می‌کند.
    - در ویندوز 11 IoT Enterprise (LTSC)، به طور پیش‌فرض همانطور که انتظار می‌رود به خوبی کار می‌کند.

:::

## ویرایش فایل ISO

::: tip  نکته

- همانطور که در بالا ذکر شد، می‌توانید پوشه `$OEM$` را در USB قابل بوت خود کپی کنید تا مجبور به ویرایش فایل ISO نباشید. با این حال، اگر نیاز دارید، مراحل زیر را دنبال کنید.
- [AnyBurn Free Portable][3] را دانلود کرده و فایل فشرده را استخراج کنید.
- فایل با نام `AnyBurn(64-bit)\AnyBurn.exe` را اجرا کنید.
- گزینه‌ای با نام `Edit image file` را انتخاب کنید.
- دستورالعمل‌های روی صفحه را دنبال کرده و پوشه `$OEM$` را به پوشه `sources` اضافه کنید تا دایرکتوری به این صورت ظاهر شود: `\sources\$OEM$`.
- ISO را ذخیره کنید، تمام شد.

:::

## KMS38 - Server Cor/Acor

-   نسخه‌های Windows Server Cor/Acor (بدون رابط کاربری گرافیکی) فایل `clipup.exe` را ندارند.
-   برای فعال‌سازی KMS38 آن، باید فایل گمشده `ClipUp.exe` را از [app.box.com/s/....][4] دانلود کنید.
    `فایل: ClipUp.exe`
    `SHA-256: 0d6e9f6bbd0321eda149658d96040cb4f79e0bd93ba60061f25b28fecbf4d4ef`
    این فایل دارای امضاهای دیجیتالی است که قابل تأیید است. همچنین می‌توانید این فایل را از [ISO رسمی Windows Server 2016 x64 RTM][5] دریافت کنید.
-   `ClipUp.exe` را در کنار اسکریپت فعال‌سازی KMS38 قرار دهید. این یا `MAS_AIO.cmd` یا `KMS38_Activation.cmd` خواهد بود
-   اسکریپت فعال‌سازی `ClipUp.exe` را در پوشه فعلی (از جایی که اسکریپت در حال اجرا است) بررسی می‌کند و بر این اساس از آن استفاده می‌کند.

</br>

##  پیش‌نصب آفیس

-	راهنمای [office c2r](./office_c2r) را دنبال کرده و فایل‌های آفیس را دانلود کنید.
- 	پوشه `Office` دانلود شده، فایل‌های `setup.exe` و `Configuration.xml` را کپی کرده و در پوشه $OEM$، کنار فایل `setupcomplete.cmd` قرار دهید.
-	فایل `setupcomplete.cmd` را با notepad باز کرده و خطوط زیر را بعد از خط `fltmc >nul || exit /b` اضافه کنید.
	```
	cd /d "%~dp0"
	setup.exe /configure Configuration.xml
	```
- 	پوشه $OEM$ را طبق دستورالعمل‌های بالا در ISO ذخیره کنید، تمام شد.

<br/>

::: danger چگونه فعال‌سازی‌ها را حذف کنیم؟

::: details  برای دیدن جزئیات اینجا را کلیک کنید

- **HWID:** یک مجوز دیجیتال در سرورهای مایکروسافت ذخیره شده و به سخت‌افزار شما گره خورده است. به معنای سنتی نمی‌توان آن را "حذف" کرد. یک تغییر عمده سخت‌افزاری (مانند مادربرد) آن را باطل می‌کند. برای بازگشت به حالت غیرفعال، می‌توانید یک کلید KMS عمومی نصب کنید. [جزئیات گسترده](./hwid)
- **آنلاین KMS / Ohook / KMS38:** از گزینه مربوطه "Uninstall" یا "Remove" در منوی اسکریپت MAS استفاده کنید، سپس گزینه "Fix Licensing" را از منوی Troubleshoot اجرا کنید. [جزئیات KMS](./kms) و [جزئیات KMS38](./kms38)
- **TSforge:** این روش فقط داده‌ها را اضافه می‌کند و فایل‌ها را نصب نمی‌کند. برای بازنشانی آن، به سادگی گزینه "Fix Licensing" را از منوی Troubleshoot در اسکریپت MAS اجرا کنید. [جزئیات TSforge](./tsforge)

:::

::: danger

اگر سوالی دارید، ابتدا صفحه [**سوالات پرتکرار**](./faq) را مرور کنید — به احتمال زیاد جواب‌تان اینجاست.
اگر همچنان مشکل پابرجا بود — با ما [**در ارتباط**](./troubleshoot) باشید.

:::

[1]: https://github.com/NiREvil/windows-activation

[2]: https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/add-a-custom-script-to-windows-setup?view=windows-11#windows-setup-scripts

[3]: https://www.anyburn.com/download.php

[4]: https://app.box.com/s/cwoxub9tqyowhnyva6ign6qnogb6vk0o

[5]: https://download.microsoft.com/download/1/6/F/16FA20E6-4662-482A-920B-1A45CF5AAE3C/14393.0.160715-1616.RS1_RELEASE_SERVER_EVAL_X64FRE_EN-US.ISO
