---
layout: doc
outline: deep
lang: fa-IR
dir: rtl
title: "توربوتل"
description: "راه‌حل‌های رفع مشکل کرش کردن توربوتل"
date: 2025-9-29
editLink: true
head:
  - - meta
    - name: description
      content:راه‌حل‌های رفع مشکل کرش کردن توربوتل
  - - meta
    - name: keywords
      content: کرش کردن توربوتل
---

# توربوتل 
و مشکلات پیرامون آن

[توربوتل][T] کرش می‌کنه، بزنی رو پروفایل کسی یا بخوای وارد تنظیمات بشی شوتت می‌کنه بیرون، مشکل از فایل من فایل اون‌یکی نیست، خود نسخه اصلی مارکت گوگل‌هم سکته‌ای شده 🤣 ولی نسخه‌های مود یکم بیشتر، چون توسعه‌دهنده‌ جنده‌ی برنامه تصمیم گرفته تبلیغات رو اجباری بکنه، قبلا از یه راه تبلیغات زو تزریق می‌کرد الان از سه‌چهار راه، تو [کانال تلکرامش][1] هم اینجوری نوشته: 

> Make sure to watch the ads, otherwise you may face an error while using TurboTel. If you don’t watch the ads every day, you won’t be able to open other users’ profiles.

ولی به درک، چون فکر می‌کنم میشه درستش کرد، از دیروز که واسه خودم و چندا از بچه‌ها حل شده. دوتا راه داریم واسه حل مشکل: 

- [راه حل آسون](#اول)
- [راه حل نه خیلی آسون](#دوم)
  - [کد بکاپ](#بکاپ)
  - [حذف لوکال دیتابیس](#کش)

## راه حل اول {#اول}
راه آسون رو اول می‌گم، توربوتل رو حذف کرده و از اول نصب کنید، تمام مشکلات حل میشه. (دیگه بعدش بکاپ قدیمی رو نباید بزنید. فقط بکاپ جدید)


**توضیحات بیشتر در رابطه با راه حل اول**

تنها کاری که لازمه بکنید اینه که **Clean Install** کنید، یه نصب تر و تازه. جزئیات خاصی نداره و این چند سطر رو برای دوستان سالخورده خودم می‌نویسم چون ممکنه حواسشون نباشه. شما حرفه‌ای‌ها غلط کردید که بخونید اصلا لزومی نداره که بخونید توضیحات راه حل اول رو 😏

### نصب تلگرام موقت
بهتره یه تلگرام دیگه رو گوشیتون نصب باشه، حالا اصلی غیر اصلی مهم نیست، هرچی، فرض می‌کنم که هیچی نصب نداشتید، از مارکت گوگل یا وب‌سایت تلگرام اصلی رو نصب کنید: 

<Ltr>

- [play.google.com/store/telegram.messenger][2]


- [telegram.org/android][3]  
</Ltr>

بریم برای لاگین کردن.
 
> بعد از اینکه شمارتون رو وارد کردید، کد ورود داخل توربوتل براتون ارسال میشه توسط سرویس اعلان تلگرام.

::: danger نکته

اگه روی توربوتل چندتا اکانت داشتید برای بقیه هم این پروسه رو تکرار کنید و داخل تلگرام اصلی که نصب کردید لاگین کنید همه‌رو.

و هم‌چنین حواستون باشه به محض ورود به تلگرام همیشه تو هر نسخه‌ای برید از تنطیمات از بخش Data Storage یا داده‌ها و ذخیره‌سازی سه تا گزینه که واسه دانلود خودکار رسانه‌ها هستن رو ببندید.

::: details مشاهده اسکرین‌شات

<p align="center">
  <img src="/turbotel/1.png" alt="Google" width="960x" />
</p>  
:::

<br/>

### لغو نصب توربوتل
حالا که لاگین کردن تو تلکرام موقتمون تموم شد نوبت به حذف توربوتل می‌رسه. پیشنهاد می‌کنم توربوتل رو **Clear Cache** و هم‌چنین **Clear Data** (این دو مرحله خیلی مهم نیستن فقط برای محکم‌کاری‌ بودن). فارسیش میشه پاک کردن حافظه پنهان و پاک کردن داده، از کجا اینکارو بکنید؟؟ 
اگه توی منوی گوشی چند ثانیه دستتون رو نگه‌دارید رو آیکون هر برنامه‌ای، یه سری چیزا بالا میاد مثل گزینه حذف کردن، اضافه کردن به صفحه اصلی، ویجت و غیره، ما با اون آیکون گرد بالای کادر کار داریم، یه گردالوعه کوچیکه که وسطش هم علامت تعجب هست، تقریبا این شکلی `ℹ️` 

::: details مشاهده اسکرین‌شات

<p align="center">
  <img src="/turbotel/2.png" alt="Google" width="960x" />
</p>  
:::

بزنید روش تا تنظیمات مربوط به اون برنامه «توربوتل» باز بشه، حالا اگه منو فارسی هستید وارد قسمت `فضای ذخیره سازی` بشید اگه منو انگلیسی هستید اسم اون قسمت `Storage`عه، بعد پاک کردن حافظه پنهان و پاک کردن داده رو بزنید و بعد برگردید یه صفحه عقبتر و `لغو نصب` یا همون `Uninstall` رو بزنید از بیخ حذف بشه. 
حالا دوباره نصبش کنید. اگه از قبل ییو نکردید از انباری می‌تونید مثل همیشه دانلود کنید:

- [telegram.me/new_folder][4]


و لاگین کنید به اکانتتون (کد ورود داخل اون تلگرام موقته که نصب کردید ارسال میشه).
بستن دانلود خودکار تلگرام یادتون نره (از ستینگ تلگرام از Data storage)

::: details مشاهده اسکرین شات

<p align="center">
  <img src="/turbotel/3.png" alt="Google" width="960x" />
</p>  
:::

حالا همه چی عین ساعت کار می‌کنه. 
تنها مشکل تفاوت ساختار تنظیمات اضافی توربوتل با تلگرام جدید بود. 

<br><br/>

## راه حل دوم {#دوم}
**از طریق ساخت فایل بکاپ**

همونطور که گفتم مشکلمون مغایرت تنظیمات توربوتل بین نسخه‌های v11 و v12 هستش، کاری که می‌گم رو انجام بدید.

قبل از هرکاری این چهارتا تا لینک رو کپی کنید و بفرستید تو پیام‌های ذخیره‌شده‌ی توربوتل دم‌دستتون باشن:

```
**1.** https://t.me/turbosettings/backup.backupRow

**2.** https://t.me/mtmanager

**3.** https://diana-cl.github.io/Diana-Cl/topics/turbotel

**4.** https://t.me/addtheme/REvil
```

<br/>

### مدیریت فایل اندروید 
نمی‌دونم رو‌ گوشیاتون چه برنامه‌ای برای مدیریت فایل نصب هست و اصلا می‌تونید یه فایل با فرمت xml رو ویرایش کنید یانه، اگه همونین برنامه‌ای ندارید، پیشنهاد می‌کنم MT Manager رو نصب کنید واسه هر قشری واسه هرکاری تا ابد کافیه براتون. از کانال رسمی خودش دانلود و نصب کنید از لینک `شماره 2` که گفتم بغرستید تو پیام‌های ذخیره شده دم دستتون بمونه. اون فایل که اسمش ساده‌ست نصب کنید، جلوش clone و target و این‌چیزا ننوشته. 

حالا ازتون می‌خوام که لینک `شماره 1` رو داخل توربوتل باز کنید، روی گزینه **Save Settings** کلیک کرده و یه اسم دلخواه بذارید و **OK** بزنید، هدف فقط این بود فولدر TurboTel و یه فایلبا اکستنشن xml توی فولدر Downloads گوشی ایجاد بشه.
حالا MT Manager رو باز کنید، از storage گوشیتون فولدر downloads رو پیدا کرده و وارد شید، یه فولدر به اسم TurboTel خواهید دید، اصولا باید توی این مسیر باشه: 

<Ltr>

> storage/emulated/0/Download/TurboTel  
</Ltr>

وارد که شدید داخلش یه فایلی هست با همون اسمی که یکم قبل خودتون ساختید، فایل بکاپه مثلا. الان باید هرچی که داخل این فایل هست رو پاک کنیم و با چیزی که من میدم جایگزین کنید.  

::: details مشاهده اسکرین‌شات

<p align="center">
  <img src="/turbotel/4.png" alt="MT-Manager" width="960x" />
</p>  
:::

بزنید روی فایل تا محتوای اون بالا بیاد، حالا همشو حذف کنید، هرچی که هست، [ایـن کـد XML](#بکاپ) رو کپی کرده و داخل فایل قرار بدید و در نهایت از بالای صفحه از نواز ابزار تغییرات رو ذخیره کنید.

:::  details مشاهده اسکرین شات

<p align="center">
  <img src="/turbotel/5.png" alt="MT-2" width="960x" />
</p>  
:::

<Br/>

خب کارمون تقریبا تمومه، کافیه برگردید داخل توربوتل و لینک `شماره 2` رو باز کنید، بازم برگشتید سراغ بخش بکاپ، این‌بار گزینه `Restore Settings` رو بزنید و همون فایل بکاپی که یکم قبل ویرایش کردیم انتخاب کنید. بعد از وارد کردن این بکاپ که متناسب با نسخه v12 بود مشکل کرش کردن برنامه حل میشه. اصولا بعدش توربوتل یک‌بار ری‌استارت میشه و خب بدون مشکل می‌تونید ازش استفاده کنید
پیشنهاد می‌کنم یبار **Clear cache** هم بزنید براش نفسش باز بشه😄.  

<h3> تامام، کنجکاو باشید 🩶✋🏿 </h3>

<br/>


## محتوای فایل بکاپ خودمون {#بکاپ}

```xml
<?xml version='1.0' encoding='utf-8' standalone='yes' ?>
<map>
    <boolean name="ads_native_main" value="false" />
    <boolean name="ads_native_profile" value="false" />
    <boolean name="ads_native_chat" value="false" />
    <int name="profile_ad_count" value="0" />
    <int name="ads_full_proxies" value="0" />
    <int name="ads_full_changes" value="0" />
    <string name="admob_id"></string>
    <string name="admob_interstitial"></string>
    <string name="admob_app_open"></string>
    <string name="admob_native"></string>
    <string name="ads_f_list"></string>

    <string name="url">https://raw.githubusercontent.com/NiREvil/vless/refs/heads/main/edge/assets/Manifest/TurboTel-Settings</string>
    <string name="remote_lnk"></string>
    <string name="mini_link">https://F_NiREvil.t.me</string>
    <string name="mini_text">All Turbotel team developers are either motherfucking assholes or cocksucking faggots.</string>
    <boolean name="mini_alert_show" value="false" />
    <boolean name="mini_alert" value="false" />

    <int name="join_counter" value="0" />
    <boolean name="confirm_join" value="true" /> <boolean name="iranian" value="false" />
    <int name="drawer_icons" value="0" />
    <boolean name="keep_contacts" value="true" />
    <boolean name="invisible" value="true" />
    <boolean name="itabs_profile" value="true" />
    <boolean name="exact_count" value="true" />
    <int name="delay_native_req" value="180" />
    <boolean name="full_instead_native" value="false" />
    <boolean name="turbo_face" value="false" />
    <int name="medium_font_pos" value="8" />
    <boolean name="always_expand" value="true" />
    <int name="delay_full" value="4" />
    <int name="chea_count" value="21" />
    <int name="member_long_touch" value="1" />
    <string name="turbo_check_style">MaxLinesPro</string>
    <boolean name="enable24HourFormat" value="true" />
    <boolean name="avatar_as_drawerbg" value="true" />
    <string name="normal_font_path">/data/user/0/ellipi.messenger/files/vazir.ttf</string>
    <boolean name="copy_sender" value="false" />
    <boolean name="add_to_dm" value="false" />
    <boolean name="cancel_download_on_closing" value="false" />
    <boolean name="back_basges" value="false" />
    <int name="group_avatar_touch" value="3" />
    <boolean name="bar_centerbtn" value="false" />
    <boolean name="hide_contacts_dialogs" value="false" />
    <boolean name="name_title" value="true" />
    <int name="delay_app_open" value="8" />
    <boolean name="show_dtm" value="true" />
    <boolean name="turbo_face_title" value="false" />
    <boolean name="acc_indicator" value="false" />
    <boolean name="fast_edit" value="false" />
    <int name="avatar_tr" value="22" />
    <int name="cat_id" value="0" />
    <boolean name="show_hnotification" value="false" />
    <int name="delay_native_seen" value="180" />
    <boolean name="disable_stories" value="false" />
    <boolean name="indonesian" value="false" />
    <int name="mono_font_pos" value="5" />
    <boolean name="reaction_menu" value="true" />
    <boolean name="malaysian" value="false" />
    <boolean name="uzbek" value="false" />
    <boolean name="bottom_overlay" value="true" />
    <int name="avatar_tl" value="22" />
    <int name="editor_font_size" value="15" />
    <boolean name="chat_unlocked" value="false" />
    <int name="turbo_bubble_style" value="2" />
    <boolean name="title_center" value="true" />
    <boolean name="tface_ios_style" value="false" />
    <boolean name="menu_context_blur" value="true" />
    <boolean name="show_deleted" value="true" />
    <boolean name="avatar_in_action" value="true" />
    <int name="avatar_bl" value="22" />
    <boolean name="start_main_camera" value="true" />
    <int name="avatar_br" value="22" />
    <boolean name="hide_round_avatar" value="true" />
    <boolean name="editor_translator" value="false" />
    <string name="mono_font_path">/data/user/0/ellipi.messenger/files/rmono.ttf</string>
    <boolean name="only_unmuted" value="true" />
    <boolean name="turbo_face_search" value="false" />
    <boolean name="downloads_icon" value="false" />
    <string name="italic_font_path">/data/user/0/ellipi.messenger/files/ritalic.ttf</string>
    <boolean name="chat_contact_status" value="false" />
    <boolean name="ios_chat" value="true" />
    <boolean name="loop_all_videos" value="true" />
    <boolean name="always_expand_bio" value="true" />
    <boolean name="for_pro" value="true" />
    <boolean name="use_fingerprint" value="false" />
    <boolean name="bookmark" value="true" />
    <boolean name="edit_pencil" value="false" />
    <boolean name="chatbar" value="true" />
    <boolean name="blur_drawerbg" value="true" />
    <boolean name="confirm_forward" value="false" />
    <boolean name="copy_part" value="false" />
    <boolean name="gif_autod_profile" value="false" />
    <int name="tabs_style" value="0" />
    <boolean name="keep_selection" value="true" />
    <boolean name="darken_drawerbg" value="true" />
    <boolean name="reactions_on_bottom" value="false" />
    <boolean name="multi_for" value="true" />
    <string name="medium_font_path">/data/user/0/ellipi.messenger/files/vazir_bold-medium.ttf</string>
    <boolean name="auto_pause_video" value="true" />
    <boolean name="sender_as_channel" value="false" />
    <boolean name="dis_counters" value="true" />
    <int name="sticker_size1" value="12" />
    <boolean name="hide_anim_emoji_tabs" value="true" />
    <int name="italic_font_pos" value="4" />
    <boolean name="first_run_3108" value="true" />
    <int name="contact_avatar_touch" value="3" />
    <int name="action_snow_effect" value="0" />
    <boolean name="add_to_save" value="true" />
    <boolean name="persian_date" value="true" />
    <boolean name="account_unlocked" value="false" />
    <int name="normal_font_pos" value="7" />
    <boolean name="keep_opened_chats" value="true" />
</map>
```


## پاکسازی {#کش}



## عیب‌یابی و رفع مشکلات 
اگه جایی از پروسه گیر کردید حتما توی گروه پیام بدید (با توضیح کافی درباره مشکل و مراحلی که برای برطرف کردنش طی کردید + اسکرین شات از گزارش خطا در صورت وجود) تا بچه‌ها راهنمایی کامل بکنن.  

لینک گروه:

- [NiREvil_GP.t.me][5]


[1]: https://t.me/TurboTel/592
[2]: https://play.google.com/store/apps/details?id=org.telegram.messenger
[3]: https://telegram.org/android
[4]: https://t.me/new_folder_revil/3503
[5]: https://NiREvil_GP.t.me
