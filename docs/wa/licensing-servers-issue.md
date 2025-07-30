---
layout: doc
outline: deep
title: 'مشکل سرورهای لایسنس'
description: 'در برخی موارد، فعال‌سازی HWID ممکن است به دلیل عدم اتصال سیستم به سرورهای لایسنس HWID با شکست مواجه شود.'
date: 2023-02-11
editLink: true
---

# مشکل سرورهای لایسنس

در برخی موارد، **فعال‌سازی HWID** ممکن است به دلیل عدم اتصال سیستم به سرورهای لایسنس HWID با شکست مواجه شود. اسکریپت فعال‌سازی در این صورت به شما اطلاع خواهد داد.
پیشنهاد می‌کنیم راهنمای زیر را فقط زمانی دنبال کنید که اسکریپت به شما بگوید.

<hr/><br/>

## بازنشانی شبکه

::: tip نکته

- در ویندوز 10/11، به تنظیمات بروید و بازنشانی شبکه را جستجو کنید، سپس این گزینه را اعمال کنید.
- سیستم خود را مجدداً راه‌اندازی کنید و فعال‌سازی HWID را امتحان کنید.
- اگر همان خطای اینترنت را نشان می‌دهد، گزینه زیر را دنبال کنید.

:::

## بازنشانی فایروال / پروکسی

- Powershell را به عنوان مدیر باز کنید و دستورات زیر را وارد کنید:

```shell
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings" -Name ProxyEnable -Type DWord -Value 0
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings" -Name ProxyServer -Type String -Value ""

$filePath = "$env:SystemRoot\System32\drivers\etc\hosts"
Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace '.*licensing.mp.microsoft.com.*', ''}) -force
Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace '.*purchase.mp.microsoft.com.*', ''}) -force
Set-Content -Path $filePath -Value (Get-Content $filePath | ForEach-Object { $_ -replace '.*login.live.com.*', ''}) -force

netsh int ip reset
netsh winsock reset
netsh advfirewall reset
netsh winhttp reset proxy
bitsadmin /util /setieproxy localsystem NO_PROXY RESET
ipconfig /flushdns
```

- سیستم خود را مجدداً راه‌اندازی کنید و فعال‌سازی HWID را امتحان کنید.
- اگر همان خطای اینترنت را نشان می‌دهد، گزینه زیر را دنبال کنید.

## VPN / اتصال اینترنت دیگر

- VPN Cloudflare WARP را نصب کنید - https://1.1.1.1/
  VPN را وصل کنید و فعال‌سازی HWID را امتحان کنید.

- اگر کار نمی‌کند، از یک اتصال اینترنت دیگر استفاده کنید یا از اینترنت تلفن همراه خود از طریق اتصال USB استفاده کنید.


::: danger عیب یابی

- اگر در این مورد به کمکی نیاز دارید، ابتدا بخش [**سوالات متداول**](./faq) را مرور کنید — به احتمال زیاد پاسخ شما در آنجا خواهد بود.

- اگر فعال‌سازی HWID هنوز کار نمی‌کند — می‌توانید [**با ما تماس بگیرید**](./troubleshoot).

:::
