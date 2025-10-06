---
layout: doc
outline: deep
lang: fa-IR
dir: rtl
title: "توربوتل"
description: "راه حلی برای جلوگیری از کرش کردن توربوتل"
date: 2025-9-29
editLink: true
head:
  - - meta
    - name: description
      content: راه حلی برای جلوگیری از کرش کردن توربوتل
  - - meta
    - name: keywords
      content: کرش کردن توربوتل
---

# توربوتل 
و مشکلات پیرامون آن

توربوتل کرش می‌کنه، مشکل از فایل من فایل اون‌یکی نیست، خود نسخه اصلی گوگل‌پلی هم سکته‌ای شده 🤣 ولی نسخه‌های مود یکم بیشتر، چون توسعه‌دهنده‌ جنده‌ی برنامه تصمیم گرفته تبلیغات رو اجباری بکنه، قبلا از یه راه تبلیغات زو تزریق می‌کرد الان از سه‌چهار راه، تو [کانال تلکرامش][1] هم اینجوری نوشته: 

Make sure to watch the ads, otherwise you may face an error while using TurboTel. If you don’t watch the ads every day, you won’t be able to open other users’ profiles.

ولی به درک چون فکر می‌کنم میشه درستش کرد، از صبح که واسه خودم حل شده. دوتا راه داریم واسه حل مشکل.


## راه حل اول
راه آسون رو اول می‌گم، توربوتل رو حذف کرده و از اول نصب کنید، تمام مشکلات حل میشه.

::: details توضیحات بیشتر در رابطه با راه حل اول

تنها کاری که لازمه بکنید اینه که clean install کنید، یه نصب تر و تازه. جزئیات خاصی نداره برای دوستان سالخورده خودم می‌نویسم این چند خط رو چون ممکنه حواسشون نباشه. شما حرفه‌ای عا اصلا لزومی نداره که بخونید.

بهتره یه تلگرام دیگه رو گوشیتون نصب باشه، حالا اصلی غیر اصلی مهم نیست، هرچی، فرض می‌کنم که هیچی نداشتید، از فروشگاه گوگل تلگرام اصلی رو نصب کنید،

https://play.google.com/store/apps/details?id=org.telegram.messenger
 لاگین کنید.  
< بعد از اینکه شمارتون رو وارد کزدید کد ورود به تلگرام داخل توربوتل براتون ارسال میشه توسط سرویس اعلان تلگرام 
::: danger نکته
اگه روی توربو چندتا اکانت داشتید برای بقیه هم این پروسه رو تکرار کنید و داخل تلکرام اصلی که نصب کردید لاگین کنید باهاشون.

حواستون باشه به محض ورود به تلگرام اصلی برید از تنطیمات از بخش Data Storage سه تا گزینه که واسه دانلود خودکار هستن ببندید‌.

### لغو نصب توربوتل
حالا نوبت حذف توربوتل میشه. بعد توربوتل رو Clear Cache کنید و Clear Data (این دو مرحله خیلی مهم نیستن فقط برای محکم‌کاری‌ بودن). فارسیش میشه پاک کردن حافظه پنهان و پاک کردن داده، از کجا اینکارو بکنید؟؟ 
اگه توی منوی گوشی چند ثانیه دستتون رو نگهدارید رو آیکون هر برنامه‌ای، یه سری چیزا بالا میاد مثل گزینه حذف کردن، اضافه کردن به صفحه اصلی، ویجت و غیره، ما با اون ایکون گرد بالاش کار داریم، یه گردالوعه کوچیکه که وسطش هم علامت تعجب هست، این شکلی ℹ️ بزنید روی اون تا تنظیمات مربوط به اون اپ (توربوتل) باز بشه، حالا اگه منو فارسی هستید وارد قسمت فضای ذخیره سازی بشید اگه منو انگلیسی هستید اسم اون قسمت Storageعه، بعد پاک کردن حافظه پنهان و پاک کردن داده رو بزنید و بعد برگردید یه صفحه عقبتر و لغو نصب/Uninstall رو بزنید از بیخ حذف بشه. 
حالا دوباره نصبش کنید و لاگین کنید به اکانتتون (کد داخل اون تلگرام موقته که نصب کردید ارسال میشه).
بستن دانلود خودکار تلگرام یادتون نره(از ستینگ تلگرام از Data storage)
حالا همه چی عین ساعت کار می‌کنه. 
تنها مشکل تفاوت ساختار تنظیمات اضافی توربوتل با تلگرام جدید بود. 
:::

## راه حل دوم 
### از طریق فایل بکاپ

همونطور که گفتم مشکلمون مغایرت تنظیمات توربوتل بین نسخه v11 و v12 هستش، کاری که می‌گم رو انجام بدید.

قبل از هرکاری این سه تا لینک رو بفرستید تو پیام‌های ذخیره‌شده‌ی توربوتل دم دست باشن:

```
1. https://t.me/turbosettings/backup.backupRow

2. https://t.me/mtmanager/346
```

نمی‌دونم رو‌ گوشیاتون چه مدیریت فایلی نصب هست و می‌تونید یه فایل با فرمت xml رو ویرایش کنید یانه، اگه ندارید مدیریت فایل خاصی، پیشنهاد می‌کنم MT Manager رو نصب کنید واسه هر قشری واسه هرکاری تا ابد کافیه براتون. از کانال رسمی خودش دانلود و نصب کنید لینک شماره 2 . 

حالا ازتون می‌خوام که لینک شماره 1 رو داخل توربوتل باز کنید، روی گزینه Save Settings کلیک کرده و یه اسم دلخواه بذارید و OK بزنید، هدف فقط این بود فولدر TurboTel و یه فایل xml توی فولدر Downloads گوشی ایجاد بشه.
حالا MT Manager رو باز کنید، از storage گوشیتون فولدر downloads رو پیدا کرده و وارد شید، یه فولدر به اسم TurboTel خواهید دید، واردش که شدید داخلش یه فایلی هست با همون اسمی که یکم قبل خودتون ساختید، فایل بکاپه مثلا. الان باید هرچی که داخل این فایل هست رو پاک کنیم و با چیزی که من میدم جایگزین کنید.

بزنید روی فایل تا محتواشو بالا بیاد، حالا کل صفحه رو حذف کنید، خالی خالی، کد زیر رو کپی کنید و داخل فایل قرار بدید و اونو از بالای صفحه از نواز ابزار ذخیره کنید.

:::  details مشاهده اسکرین شات

:::

<Br/>

خب کارمون تمومه، کافیه برگردید داخل توربوتل و لینک شماره 2 رو باز کنید، بازم برمی‌گردید به بخش بکاپ، این‌بار گزینه Restore رو بزنید و همون فایل بکاپی که یکم قبل ویرایش کردیم رو انتخاب کنید. بعد از وارد کردن این بکاپ متناسب با این نسخه v12 مشکلمون حله، توربوتل یکبار ری‌استارت میشه حالا بدون مشکل می‌تونید ازش استفاده کنید
پیشنهاد می‌کنم یبار Clear cache هم بزنید براش نفسش باز بشه😄


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
    <string name="mini_link">https://t.me/F_NiREvil</string>
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

اگه جایی از پروسه گیر کردی تو گروه پیام بده بچه‌ها راهنمایی بکنن.
لینک گروه: https://t.me/NiREvil_GP

[1]: https://t.me/TurboTel/592
[2]: https://play.google.com/store/apps/details?id=org.telegram.messenger
