---
layout: doc
outline: deep
lang: "fa-IR"
dir: "rtl"
title: "ترموکس"
description: "راهنمای کامل ترماکس — دستورات اساسی و پیشرفته"
date: 2025-06-26
editLink: true
head:
  - - meta
    - name: keywords
      content: Termux, Linux, Terminal, CMD, Powershell, Windows, Python, Bash, Shell script
---

# راهنمای کامل Termux — دستورات اساسی و پیشرفته

<br/> 

## مقدمه

ترماکس [^1] یک **شبیه‌ساز ترمینال Linux** قدرتمند برای **Android** است که امکان اجرای دستورات لینوکس و نصب پکیج‌های مختلف را فراهم می‌کند. این راهنما شامل دستورات اساسی و پیشرفته برای کار با **Termux** است.

<br><br/>

## تنظیم اولیه (بسیار توصیه می‌شود!)

### نصب Fish Shell - تجربه بهتر خط فرمان

قبل از شروع کار، توصیه می‌شود `Fish Shell` را نصب کنید. **Fish** یک **shell** هوشمند و کاربرپسند است که کار با خط فرمان را بسیار آسان‌تر می‌کند.

#### مزایای Fish Shell

- **تکمیل خودکار پیشرفته**: پیشنهاد دستورات بر اساس تاریخچه
- **رنگ‌بندی نحوی**: دستورات صحیح سبز و اشتباه قرمز نمایش داده می‌شوند
- **پیشنهاد هوشمند**: حین تایپ، دستورات احتمالی نمایش داده می‌شود
- **تاریخچه پیشرفته**: جستجوی آسان در تاریخچه دستورات
- **تنظیمات آسان**: نیازی به پیکربندی پیچیده نیست

#### نصب Fish

**برای نصب Fish Shell دستور زبر را اجرا کنید:**

```bash
pkg install fish
```

**برای اجرای fish دو راه پیش رو داریم**

1. هربار هنگام شروع کار در همان ابتدا عبارت `fish` را تایپ و کلید **Enter** را فشار داده تا به صورت دستی اجرا شود.
2. ابزار **fish** را تبدیل به **shell** پیشفرض خود کنیم که دیگر نیازی به اجرا در هر بار نباشد.

**تبدیل Fish به shell پیش‌فرض:**

```bash
chsh -s fish
```

#### استفاده از Fish

- **تکمیل خودکار**: Tab را فشار دهید
- **پیشنهاد دستور**: کلیدهای ← → برای پذیرش پیشنهاد
- **تاریخچه**: کلیدهای ↑ ↓ برای جستجو در تاریخچه
- **خروج از Fish**: تایپ کنید `exit` یا `Ctrl + D`

### جایگزین‌های دیگر (اختیاری)

#### Zsh با Oh-My-Zsh

```bash
# نصب Zsh
pkg install zsh

# نصب Oh-My-Zsh (نیاز به curl دارد)
pkg install curl
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### بروزرسانی اولیه

اگر پس از مدت طولانی به سراغ ترماکس رفتید بهتر است ابتدا با دستور زیر سیستم و بسته‌ها را به آخرین نسخه ارتقا دهید.

```bash
# بروزرسانی سیستم قبل از شروع
apt update && apt upgrade
```

<br/> 

## دستورات پایه‌ای

### خروج از Termux
برای بستن Termux دو روش وجود دارد:
- فشردن کلیدهای `Ctrl + D`
- تایپ کردن `exit` و سپس فشردن کلید Enter


### مدیریت فایل و دایرکتوری

#### مشاهده محتویات دایرکتوری

```bash
# نمایش فایل‌ها و پوشه‌های قابل مشاهده
ls

# نمایش تمام فایل‌ها شامل فایل‌های مخفی
ls -a

# نمایش محتویات یک دایرکتوری خاص بدون ورود به آن
ls -a storage/downloads/diana
```

#### تشخیص موقعیت فعلی

```bash
# نمایش مسیر فعلی
pwd
```

#### جابجایی بین دایرکتوری‌ها

```bash
# بازگشت به دایرکتوری home
cd

# رفتن یک سطح بالاتر
cd ..

# رفتن به دایرکتوری مشخص
cd storage/downloads/diana
```

#### دسترسی به حافظه داخلی

اگر هنگام دسترسی به فایل‌های حافظه داخلی با خطای دسترسی مواجه شدید، از دستور زیر استفاده کنید:

```bash
termux-setup-storage
```

پس از اجرای این دستور، یک پنجره تأیید ظاهر می‌شود که باید گزینه تأیید را انتخاب کنید.


#### حذف فایل و دایرکتوری

```bash
# حذف یک فایل
rm FileName

# حذف یک دایرکتوری به همراه تمام محتویاتش
rm -rf FolderName
```

<br/> 

::: danger ⚠️ هشدار

هنگام استفاده از دستور `rm -rf` بسیار محتاط باشید چون این دستور فایل‌ها را بدون امکان بازیابی حذف می‌کند.

:::

<br/> 

### ایجاد و ویرایش فایل

#### نصب ویرایشگر متن nano

```bash
pkg install nano
```

#### ایجاد فایل جدید

```bash
# ایجاد فایل جدید
nano diana

# ایجاد فایل با پسوند مشخص
nano diana.py
```

#### کلیدهای کنترل در nano

- `Ctrl + X` خروج از ویرایشگر
- `Y` تأیید ذخیره فایل
- `N` عدم ذخیره تغییرات
- `Ctrl + O` ذخیره بدون خروج

### کپی و انتقال فایل

#### کپی فایل

```bash
# کپی فایل به مقصد مشخص
cp diana.txt storage/downloads
```

#### انتقال فایل (Cut & Paste)

```bash
# انتقال فایل به مقصد جدید
mv diana.txt storage/downloads
```

<br/> 

## ابزارهای شبکه

### نصب ابزارهای شبکه
```bash
pkg install dnsutils
```

### تست اتصال (Ping)

```bash
# پینگ به آدرس IP
ping 8.8.8.8

# پینگ به دامنه
ping aparat.com

# پینگ محدود (10 بار)
ping -c 10 8.8.8.8
```

### جستجوی DNS

```bash
# دریافت آدرس IP دامنه
nslookup nginx.nirevil.ir

# دریافت اطلاعات کامل DNS
dig aparat.com

# تست سرعت کوئری DNS
dig @8.8.8.8 google.com | grep "Query time"
```

<br/> 

## اسکن شبکه

### نصب و استفاده از Nmap

```bash
# نصب nmap
pkg install nmap

# اسکن پورت‌های باز
nmap YourIP/Domain

# اسکن سریع پورت‌های رایج
nmap -F target.com

# اسکن با تشخیص سیستم‌عامل
nmap -O target.com
```

<br/> 

## دانلود و مدیریت فایل

### دانلود فایل از اینترنت

```bash
# نصب wget
pkg install wget

# دانلود فایل
wget https://example.com/file.zip

# دانلود با نام مشخص
wget -O newname.zip https://example.com/file.zip

# دانلود در پس‌زمینه
wget -b https://example.com/largefile.zip
```

### استخراج فایل‌های فشرده

```bash
# نصب unzip
pkg install unzip

# استخراج فایل ZIP
unzip filename.zip

# استخراج در دایرکتوری مشخص
unzip filename.zip -d /path/to/destination
```

<br/> 

## نصب زبان‌های برنامه‌نویسی

### پایتون — Python

```bash
# نصب Python 3
apt install python

# یا
pkg install python

# بررسی نسخه نصب شده
python --version
python3 --version
```

### پی‌اچ‌پی — PHP

```bash
# نصب PHP
apt install php

# یا
pkg install php

# بررسی نسخه
php --version
```

### نود جی‌اس — Node.js

```bash
pkg install nodejs npm
```

### گیت — Git

```bash
pkg install git
```

<br/> 

## مدیریت کد با Git

::: info Git

گیت یک سیستم کنترل نسخه توزیع‌شده است که برای مدیریت کد و همکاری در پروژه‌ها استفاده می‌شود.

:::

### تنظیم اولیه Git

```bash
# تنظیم نام کاربری
git config --global user.name "Your Name"

# تنظیم ایمیل
git config --global user.email "your.email@example.com"

# بررسی تنظیمات
git config --list
```

### کلون کردن مخزن (Repository)

```bash
# کلون مخزن از GitHub
git clone https://github.com/username/repository.git

# کلون در دایرکتوری مشخص
git clone https://github.com/username/repo.git my-folder

# کلون فقط آخرین commit (کمتر حجم)
git clone --depth 1 https://github.com/username/repo.git
```

### دستورات پایه‌ای Git

```bash
# بررسی وضعیت مخزن
git status

# اضافه کردن فایل‌ها به staging area
git add filename
git add .  # همه فایل‌ها
git add *.py  # فایل‌های Python

# کامیت تغییرات
git commit -m "پیام توضیحی"

# ارسال تغییرات به مخزن آنلاین
git push origin main

# دریافت آخرین تغییرات
git pull origin main

# مشاهده تاریخچه کامیت‌ها
git log
git log --oneline  # خلاصه
```

### کار با برنچ‌ها

```bash
# مشاهده برنچ‌ها
git branch

# ایجاد برنچ جدید
git branch new-feature

# تغییر به برنچ دیگر
git checkout new-feature

# ایجاد و تغییر همزمان
git checkout -b new-feature

# ادغام برنچ
git checkout main
git merge new-feature

# حذف برنچ
git branch -d new-feature
```

<br/>


### مدیریت Remote Repository

```bash
# مشاهده remote ها
git remote -v

# اضافه کردن remote جدید
git remote add origin https://github.com/username/repo.git

# تغییر آدرس remote
git remote set-url origin https://github.com/username/new-repo.git
```

<br/>

### ترفندهای مفید Git

```bash
# لغو تغییرات فایل
git checkout -- filename

# حذف فایل از Git (اما نه از سیستم)
git rm --cached filename

# مشاهده تفاوت‌ها
git diff
git diff --staged

# اصلاح آخرین کامیت
git commit --amend -m "پیام جدید"

# بازگشت به کامیت قبلی
git reset --soft HEAD~1  # حفظ تغییرات
git reset --hard HEAD~1  # حذف تغییرات
```

<br/> 

### کار با GitHub از Termux

برای کلون مخازن خصوصی یا ارسال تغییرات، نیاز به احراز هویت دارید:

```bash
# استفاده از Personal Access Token (توصیه می‌شود)
git clone https://token@github.com/username/private-repo.git

# یا تنظیم credential helper
git config --global credential.helper store
```

<br/>

::: danger نکته مهم

برای کلون مخازن بزرگ از GitHub، بهتر است از `--depth 1` استفاده کنید تا فقط آخرین نسخه دانلود شود.

:::

<br/>

## مدیریت پکیج‌ها

### بروزرسانی سیستم

```bash
# بروزرسانی لیست پکیج‌ها و نصب آپدیت‌ها
apt update && apt upgrade

# یا
pkg update && pkg upgrade
```

### جستجو و نصب پکیج

```bash
# جستجوی پکیج
pkg search package_name

# نمایش اطلاعات پکیج
pkg show package_name

# حذف پکیج
pkg uninstall package_name
```

<br/>

## نکات و ترفندهای مفید

### تاریخچه دستورات

```bash
# نمایش تاریخچه دستورات
history

# اجرای مجدد آخرین دستور
!!

# جستجو در تاریخچه
Ctrl + R
```

### مدیریت فرآیندها

```bash
# نمایش فرآیندهای در حال اجرا
ps aux

# کشتن فرآیند
kill PID

# نمایش استفاده از منابع سیستم
top
```

### کلیدهای میانبر مفید

- `Ctrl + C` متوقف کردن فرآیند فعلی
- `Ctrl + Z` معلق کردن فرآیند
- `Ctrl + L` پاک کردن صفحه ترمینال
- `Tab` تکمیل خودکار
- `↑/↓`: مرور تاریخچه دستورات

<br><br/> 

## رفع مشکلات رایج

### مشکل دسترسی به حافظه  
اگر نمی‌توانید به فایل‌های حافظه داخلی دسترسی پیدا کنید:

1. `termux-setup-storage` را اجرا کنید
2. دسترسی را در پنجره تأیید، مجاز کنید
3. مجدداً تلاش کنید


### مشکل نصب پکیج‌ها

```bash
# پاک کردن cache
apt clean

# بروزرسانی مخزن پکیج‌ها
apt update

# بررسی فضای ذخیره‌سازی
df -h
```

### تنظیم منطقه زمانی

```bash
pkg install tzdata
```

<br><br/> 

## لینک‌های دانلود برنامه

|  **منبع**  |     **لینک دانلود**    |
|--------:| :-------------------:|
| F-Droid  | [دریافت کنید][1] |
| GitHub | [دریافت کنید][2] |
| Google Play | [دریافت کنید][3] |
| ISH Shell for IOS | [دریافت کنید][4] |
| How to fix the installation error of Termux packages on Android 5/6 | [رفع خطاهای احتمالی][5] |

> به شدت توصیه می‌کنم حتما حتما ترماکس رو از مخزن گیت‌هاب پروژه نصب کنید، و یا نهایتا از مارکت F-Droud، چون نسخه مارکت گوگل یک فاحعه به تمام معناست، پر از باگ‌های عجیب غریب، دستورات به درستی احرا نمیشن، پکیج ها آپدیت نمیشن، دیوانه کننده‌است. بهترین انتخاب شما در هر برنامه‌‌ی اوپن سورس؛ قطعا دانلود از گیت‌هاب آن پروژه‌است، کافیست در مخزن گیت‌هاب دنبال بخش Released بگردید.

<br>

## منابع اضافی

**برای یادگیری بیشتر**

- [مستندات رسمی][6]
- [مخزن گیت‌هاب][7]
- [ویکی ترماکس][8]

[^1]: فرقی نداره که چی تلفظ میکنی اسم برنامه‌رو، ترموکس، ترماکس، هردو درستن، استرالیا و انگلیس و یه سری کشورهای دیگه روی ترماکس تاکید دارن و آمریکا بیشتر ترموکس، برگرفته شده از ترمینال linux هست اسمش. اهمیت ندید. <br/> شما دوست داشتید اصلا اصغر صداش کنید.


[1]: https://f-droid.org/en/packages/com.termux
[2]: https://github.com/termux/termux-app/releases
[3]: https://play.google.com/store/apps/details?id=com.termux
[4]: https://apps.apple.com/us/app/ish-shell/id1436902243
[5]: https://t.me/F_NiREvil/5040
[6]: https://termux.dev
[7]: https://github.com/termux/termux-app
[8]: https://wiki.termux.com
