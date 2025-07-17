# ارتقاء تعمیری درجا


ارتقاء تعمیری درجا با استفاده از فایل ISO ویندوز راه خوبی برای رفع خطاهای سیستم است. در اینجا نحوه انجام آن آمده است.



- فایل ISO ویندوز را ترجیحاً از [MSDL][1] با **همان زبان و معماری ویندوز** دانلود کنید.

    - برای بررسی معماری ویندوز نصب شده، Powershell را به عنوان مدیر باز کنید و دستور زیر را وارد کنید،

        ```

		(Get-ItemProperty "HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Environment").PROCESSOR_ARCHITECTURE

		```

        AMD64/x64 به معنای 64 بیتی، x86 به معنای 32 بیتی است.

    - برای بررسی زبان ویندوز نصب شده، این دستور را وارد کنید،

        ```

		dism /english /online /get-intl | find /i "Default system UI language"

		```

		از طرف دیگر، می‌توانید از این دستور استفاده کنید،

		```

		[Globalization.CultureInfo]::GetCultureInfo([Convert]::ToInt32((Get-ItemProperty "HKLM:\SYSTEM\CurrentControlSet\Control\Nls\Language").InstallLanguage, 16)).Name

		```

    - توجه: اگر از نسخه Enterprise LTSC استفاده می‌کنید، باید فایل ISO آن نسخه را دانلود کنید. نسخه Evaluation را دانلود نکنید، آن قابل فعال‌سازی نیست.

- روی فایل ISO دانلود شده راست کلیک کنید، Open With > Windows Explorer را انتخاب کنید.

- یک درایو DVD جدید در Windows Explorer ظاهر می‌شود، که به این معنی است که ایمیج نصب با موفقیت مونت شده است.

::: details برای اطلاعات بیشتر اینجا کلیک کنید: ویندوز 11 روی سخت‌افزار پشتیبانی‌نشده

- اگر از ویندوز 11 استفاده می‌کنید یا از ویندوز 10 ارتقا می‌دهید، ممکن است به دلیل سخت‌افزار پشتیبانی‌نشده با خطا مواجه شوید.

- برای حل این مشکل، باید نسخه IoT Enterprise 24H2 (2024) را که به طور [رسمی روی سخت‌افزار پشتیبانی‌نشده پشتیبانی می‌شود][2] نصب کنید.

  - برای انجام این کار، command prompt را به عنوان مدیر باز کنید و،

  - اگر از ISO معمولی ویندوز 11 24H2 استفاده می‌کنید، دستور زیر را وارد کنید:

`reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterprise /f`

  - اگر از ISO ویندوز 11 LTSC 2024 استفاده می‌کنید، دستور زیر را وارد کنید:

`reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterpriseS /f`

- اکنون به سرعت setup.exe را همانطور که در زیر توضیح داده شده است اجرا کنید.

:::

- وارد آن درایو DVD شوید و setup.exe را اجرا کنید، فقط تا زمانی که به صفحه تأیید نهایی برسید ادامه دهید.

- مطمئن شوید که در صفحه نهایی عبارت **«Keep personal files and apps»** را می‌بینید. سپس می‌توانید فرآیند را ادامه دهید و منتظر بمانید تا تمام شود.

<br/>

::: danger عیب یابی

- اگر در این مورد به کمکی نیاز دارید، ابتدا بخش [**سوالات متداول**](./faq) را مرور کنید — به احتمال زیاد پاسخ شما در آنجا خواهد بود.

- اگر گزینه حفظ فایل‌ها و برنامه‌ها را دریافت نمی‌کنید، یا نصب خطایی نشان می‌دهد — می‌توانید [**با ما تماس بگیرید**](./troubleshoot).

:::

[1]: https://msdl.gravesoft.dev/
[2]: https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements
