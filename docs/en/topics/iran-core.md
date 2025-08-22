---
layout: doc
outline: deep
lang: en-US
dir: ltr
title: "Power Outages and Slow Internet – DNS Fix"
description: "Why the internet becomes unstable during power outages and how using DNS can help"
date: 2025-08-22
editLink: true
head:
  - - meta
    - name: description
      content: Power outages and their impact on mobile internet, weak cell towers, poor coverage, and using DNS to improve the situation
  - - meta
    - name: keywords
      content: DNS, power outage in Iran, weak internet, dead BTS batteries, internet issues, DNS tester, intra, dns tester, DoH, XStack
---

# Power Outages and the Story of Weak Internet

### You’ve probably experienced this  
When the power goes out, after a short while, your phone signal gets weaker and the internet becomes unstable, even if you’re on 4G with one or two bars.

**The reason is very simple:** `Mobile cell towers / BTS` need electricity to operate.  
When the power goes out, they rely only on their backup batteries.

<br/>
<p align="center">
  <img src="/dns/bts.jpg" alt="bts-1" width="1965px" />
</p>

<br/>

## Why do cell towers fail?
- **Limited battery capacity:** Most towers’ backup batteries last only 1–2 hours.  
- **Partial recharging:** If outages are frequent and prolonged, batteries don’t get enough time to fully recharge.  
- **Aging batteries:** Many of these batteries are too old and cannot handle keeping the equipment running anymore.  

## The result?

**Towers start shutting down one by one.**  
Your phone has to connect to towers that are further away (in other neighborhoods that still have electricity)  .
A farther tower means ← weaker signal ← more congestion on the remaining towers ← very low bandwidth ← slow internet ← frequent drops ← frustrating user experience.

::: danger Tip

If your phone doesn’t switch to another tower and you’re stuck on a weak one, switch to `Airplane Mode / ✈️` for a few seconds, then turn it off. Usually, your device will reconnect to a better tower.

<br/>
<p align="center">
  <img src="/dns/bts-2.png" alt="bts-2" width="2500px" />
</p><br/>

:::

<hr/><br/>

# Why VPN doesn’t work well during power outages

We already explained why the signal quality drops during outages. When internet weakens, VPNs stop working properly. Since almost everything in our online life is either censored or sanctioned, it feels like we can’t even rely on VPNs anymore.  

My suggestion: at least use a **DNS solution**. It won’t fix everything, but it’s lighter and often bypasses some restrictions applied by ISPs.

## Why DNS can sometimes still work while VPN cannot?  

### Let’s compare DNS and VPN with a simple analogy:

- **VPN** is like loading all your belongings into an armored truck and sending it on the road. It’s secure, but heavy, slow, and requires a stable path.  
- **DNS** is like a mail carrier who only asks for the exact address from somewhere reliable (not your ISP that blocks things). It’s lightweight and fast.  

<br/> 

### Why VPN is so bad over weak connections?
- VPN encrypts *all* your traffic ← heavy load ← needs a stable and persistent connection ← requires more bandwidth.
- If coverage and internet are weak, VPN constantly disconnects.

### Why DNS works better?
- It only sends small requests (website addresses).
- It doesn’t create a heavy persistent tunnel like VPN.
- It can bypass DNS-level censorship by sending queries over `HTTPS` to servers like Cloudflare or Google that are outside of ISP restrictions. That way you get the **real site address** and blocked international sites work again.

<br/>

## Summary

When the power is out and internet is weak:  
- VPNs are practically useless because they require strong, stable internet.  
- DNS-based tools like **`Intra`** or **`Shekan`** are lighter and have a much better chance of working.  

<hr/><br/>

# Which DNS to use?

So the question: Which DNS is best?  
This depends heavily on your ISP. (For example, one DNS may work great with Shatel broadband, while a different one works better with MCI or Rightel).  

For fixed-line (Telecom) and Shatel mobile, I personally recommend the **DoH server by the XStack group**. It’s really solid:

```
https://rustdns.devefun.org/dns-query
```

<hr/><br/>

## Mansour’s DNS Tester  

Here comes Mansour (The Darkness)’s great DNS tester.  
Just disable your VPN, open one of these links, click **Check**, and wait for the results.  

:::tabs

== GitHub

https://darknessshade.github.io/DNS-Tester/

== Cloudflare

https://dns-tester.pages.dev/

:::

<br/>

<p align="center">
  <img src="/dns/DNS-1.png" alt="DNS-Tester" width="1080px" />
</p><br/>

Then simply copy the DNS that had the best ping and paste it into the **Intra** app. Done!

::: danger Screenshot

::: details Click to view

<br/>
<p align="center">
  <img src="/dns/DNS-2.png" alt="DNS-Tester-2" width="1080px" />
</p><br/>

<br/>
<p align="center">
  <img src="/dns/DNS-3.png" alt="DNS-Tester-3" width="1080px" />
</p><br/>

:::

<br/>

Don’t forget to fork and star the repo ✋🏿  
[Link to Mansour’s GitHub][TD]

<br/>

## Setting up DoH in Intra

Now that you’ve found the best DNS for your connection (using Mansour’s tester), it’s time to add it into the **Intra** app.  

### Steps:
1. Open **Intra** and tap the settings icon (top-left).
2. Tap **Setting**.
3. Tap the first option: **Select DNS over HTTPS server**.
4. Tap **Custom server URL**.
5. Paste your chosen **DoH** link. For example, mine worked best with:

```reg
https://rustdns.devefun.org/dns-query
```

or the Shekan service:

```reg
https://free.shecan.ir/dns-query
```

6. Tap **Accept** and return to the main screen.
7. On the main screen, tap the toggle to activate. If it’s your first time, confirm the request.  

From now on, your phone will use this DNS instead of your ISP’s DNS resolver.  

Using the `Xstack` DNS or `Shekan` DNS, YouTube, Instagram, Twitter, and many international websites that are restricted will often load without issues.

<br/> 

::: danger Screenshots of Intra setup

::: details Click to view

<br/>
<p align="center">
  <img src="/dns/intra-1.png" alt="Intra-1" width="1080px" />
</p><br/>

<br/>
<p align="center">
  <img src="/dns/intra-2.png" alt="Intra-2" width="1080px" />
</p><br/>

<br/>
<p align="center">
  <img src="/dns/intra-3.png" alt="Intra-3" width="1080px" />
</p><br/>

<br/>
<p align="center">
  <img src="/dns/intra-4.png" alt="Intra-4" width="1080px" />
</p><br/>

<br/>
<p align="center">
  <img src="/dns/intra-5.png" alt="Intra-5" width="1080px" />
</p><br/>

:::

<hr/><br/> 

### Intra Download Links

The Intra app is developed by Google’s Jigsaw team.  
Official safe download links:

<br/>

| Platform | Download Link |
|----------|---------------|
| Android  | [Google Play – Intra][1] |
| Android APK | [APKMirror – Intra][2] |
| GitHub Repo | [GitHub – Jigsaw-Code/Intra][3] |

::: info Note

This app is mainly developed for **Android**. It doesn’t have an official iOS version.  
For desktop (Windows/macOS/Linux) you can use alternatives like **Nebulo** or set DNS manually. 

:::


[1]: https://play.google.com/store/apps/details?id=app.intra
[2]: https://www.apkmirror.com/apk/jigsaw/intra/
[3]: https://github.com/Jigsaw-Code/Intra
[XS]: https://t.me/devefun/4681
[TD]: https://github.com/darknessshade/
[MA]: https://telegram.me/mansor427
