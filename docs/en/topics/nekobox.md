---
layout: doc
outline: deep
title: 'NekoBox for Android'
description: 'Things to know before using NekoBox'
date: 2025-06-17
editLink: true
head:
  - - meta
    - name: keywords
      content: NekoBox, nekobox, NB4A, nekobox for Android, Exclave, Android, v2ray, singbox, clients, xray, clash meta
---

# NB4A
## Nekobox for Android

> Notes regarding Nekobox [version 1.4.0][1]

## First Note - Updating Subscriptions

First off, another point: in the latest update, some subscription links cannot be added to the program. In my own backup, there are about ten subscription links at the end that don't update, whereas they work fine in other clients. I still don't know the reason. If this issue is important to you, don't update to this version at all. My suggestion is still to use [Exclave][2].

::: details Examples of subscriptions that don't update

- https://robin.victoriacross.ir

- https://raw.githubusercontent.com/Rayan-Config/C-Sub/refs/heads/main/configs/proxy.txt

- https://raw.githubusercontent.com/MatinGhanbari/v2ray-configs/refs/heads/main/subscriptions/base64/all_sub.txt

- https://raw.githubusercontent.com/Kolandone/v2raycollector/refs/heads/main/ss.txt

- https://raw.githubusercontent.com/4n0nymou3/multi-proxy-config-fetcher/refs/heads/main/configs/proxy_configs.txt

But it's not really a big deal when we have our own [repository of various subscription links][3]. If this one doesn't work, use another one 😅🤧

:::

<br/>

## Second Note - Rules

As always, notes about Routing Rules.
If rules for blocking ads and bypassing Iranian IPs and websites are not important to you, don't bother reading the rest.

I turned off the rules from the Route section because if the geosite and geoip files weren't updated for someone, no config would connect anymore. I set it to off by default. If it's important for you to be able to access Iranian sites and block some ads with the VPN on, then first go to the Route section like in this screenshot:

<p align="center">
  <img src="/clients/NB4A-1" alt="Routing-Rules" width="640px" />
</p>
<br/>

Then go here

<p align="center">
  <img src="/clients/NB4A-2" alt="Routing-Rules2" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-3" alt="Routing-Rules3" width="640px" />
</p>
<br/>

And here you need to click on Update and wait for both geo asset files to update. I also wrote in the image that after updating, the current date should be written below them.

<p align="center">
  <img src="/clients/NB4A-4" alt="Routing-Rules4" width="640px" />
</p>
<br/>

Now that these are updated, you can go back to the previous page and turn on any rule you want. I recommend turning them all on, except the last one. The last one is very heavy and overkill. If that one is on, it takes one or two seconds to start any config you try to connect to.

<p align="center">
  <img src="/clients/NB4A-5" alt="Routing-Rules5" width="640px" />
</p>

<br><br/>

## Bypassing Domestic Apps

If you want to open an app like Irancell-man when Nekobox is active, it won't open because you need to access it with an Iranian IP. To avoid turning Nekobox on and off every minute, it's better to add Iranian apps to the bypass list. Where from?
Right here:

`Nekobox settings → Apps VPN Mode → Bypass`

<p align="center">
  <img src="/clients/NB4A-6" alt="Apps-VPN-Mode" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-7" alt="Apps-VPN-Mode2" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-8" alt="Apps-VPN-Mode3" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-9" alt="Apps-VPN-Mode4" width="640px" />
</p>
<br/>

Enable My Irancell, My Shuttle, Bargh Man, Shaad, Rubika, Eita, and other domestic rascals so that their traffic doesn't go through the VPN tunnel.
In the first part of this note, we bypassed Iranian websites and IPs so they operate outside the VPN tunnel, and now we've done the same for the apps installed on our phones. And that's it! 😆

<br/>

## How to Import a Backup File

For those who don't know how to import someone else's backup file into the client.
First, download and save my backup file or anyone else's.   
[Backup file link][4]

<p align="center">
  <img src="/clients/NB4A-10" alt="Backup-Files" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-11" alt="Backup-Files2" width="640px" />
</p>
<br/>

<p align="center">
  <img src="/clients/NB4A-12" alt="Backup-Files3" width="640px" />
</p>
<br/>

### The Nekobox Backup File has three parts:
**Configs, Rules, and App Settings**

You can always safely check the Rules and App Settings parts and import them into Nekobox. But be careful: if you check the third part, Configs, they will replace your own configs, and whatever you had before in Nekobox will be deleted. So it's better to backup your own configs and settings first (using the Export option in the Tools menu shown in the screenshot above) before importing my backup. If you don't have any specific configs or they aren't important, then ignore this and just import any file you see, it'll be fine!

If you didn't understand and need a video tutorial, you can find [one][6] or [two][7] [here][6].

<br/>

## Update and Test
You've been using some other VPN for a week, now you're back to Nekobox or Exclave or Victoria or whatever. If you use public subscription links, then the configs inside are probably dead by now. The first thing you should do is:

<p align="center">
  <img src="/clients/NB4A-13" alt="Update-Test" width="640px" />
</p>
<br/>

First, enter your desired group and tap the

🟢 `Update current Groups subscription`

option and wait for it to update.

The second thing to do is tap the

🟠 `Remove Duplicate servers`

option to remove duplicate configs so you don't waste time and data testing them.
If you imported my backup, this option isn't needed because I enabled the duplicate removal from within the group itself during the update.

The third thing to do is tap the:

🟡 `URL Test`

option. Be careful, before doing this test, any VPN that is on must be turned off, otherwise the test results won't be accurate.

And the last step is to tap the:

🔴 `Order / By Delay`

option so the configs are listed in order of their speed and ping quality. Tapping this once is enough.

Now you can connect to one of the configs at the top of the list that has a small green number next to it. The ones with 'Timeout' next to them are dead.

## Download Links

- [Nekobox GitHub][1]
  - [Nekobox APK in telegram][8]
  - [Nekobox Backup File][4]
- [Exclave GitHub][5]
  - [Exclave Installer File in telegram][2]
  - [Exclave Backup File][9]
- [Subscription Links Repository][3]


[1]: https://github.com/MatsuriDayo/NekoBoxForAndroid/releases
[2]: https://t.me/new_folder_revil/3417
[3]: https://github.com/NiREvil/vless/
[4]: https://t.me/new_folder_revil/3497
[5]: https://github.com/dyhkwong/Exclave/releases
[6]: https://t.me/F_NiREvil/5123
[7]: https://t.me/F_NiREvil/5518
[8]: https://t.me/new_folder_revil/3495
[9]: https://t.me/new_folder_revil/3412
