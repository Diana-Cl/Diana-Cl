---
layout: doc
outline: deep
title: 'Get genuine Office'
description: 'Office Click-to-Run builds since February 2021, that are activated with KMS check the existence of a KMS server name in the registry'
date: 2024-08-05
editLink: true
---

# 'Get genuine Office' banner

<img width="1118" height="87" alt="image" src="https://github.com/user-attachments/assets/80014636-3c17-4509-a3fc-4a63e436a240" />


To discourage the use of pirated Office, the Office team began implementing checks in Office C2R in February 2021 to display a banner prompting users to buy genuine Office. Since most piracy tutorials on YouTube used retail Office installers and then manually installed volume licenses and activated them with m-s-guides KMS server, the Office team started to show them banners to buy genuine licenses. Along the way, they added some more checks and mistakenly started showing it to Volume Office 2024 genuine users as well (MS forgot to update the checks). Below you can find more details on it.

## When does the banner appear?

- Office Click-to-Run builds (since February 2021) that are activated with KMS check the existence of a KMS server name in the registry. If the KMS server is not present, a banner is shown in Office programs notifying that "Office isn't licensed properly"
- If 32-bit Office is installed on 64-bit Windows, Office checks the KMS server existence in the corresponding WOW6432Node registry key as well.
- Apart from this, they also detect if a registered KMS server is on their blacklist or not. As far as I know, the below 3 addresses are blacklisted.
  `km-s8.MSG-uides.com` `km-s9.MSG-uides.com` `0.0.0.0` (Remove hyphen)
  The first two are public KMS servers and the last one is not a real IP.
- These above checks are not performed by Office if the proper installation of the Volume version of Office is done with the PerpetualVL2019 / PerpetualVL2021 channel.
    However, with the release of the Office PerpetualVL2024 channel, they haven't updated the checks yet, and as a result, if any of the above conditions are met then Office will show a banner, even to the genuine customers.

---

## Solutions:

Below, you can find various ways of avoiding this banner. The simplest option for you is to just use an Office activation tool mentioned here.



### 1- Activation Tools

-   Use [MAS](./index#step-2-run-the-activation-script) or abbodi1406's [KMS_VL_ALL][1] to activate Office.


### 2- Manual Activation

In this section, I'm only going to mention how to set up the KMS server in the registry properly.

-   **If using Public KMS server:**
    Since they can put any public KMS server on the blacklist, as a permanent solution, we can instead use server IP instead of hostname.

-   **If using private KMS server IP:**
    Make sure to use a valid private IP address.

Below, you can find how to set the KMS server address in the registry. For example, with a private IP `10.0.0.10`

```
reg delete "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform\0ff1ce15-a989-479d-af46-f275c6370663" /f

reg delete "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform\0ff1ce15-a989-479d-af46-f275c6370663" /f /reg:32

reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform" /f /v KeyManagementServiceName /t REG_SZ /d "10.0.0.10"

reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\SoftwareProtectionPlatform" /f /v KeyManagementServiceName /t REG_SZ /d "10.0.0.10" /reg:32
```

### 3- Install VL Office

As mentioned in the Reasons section, these checks are performed only if Retail Office is installed and was later converted to VL. The office doesn't perform any kind of related checks if the proper installation of the VL office is done. (Not applicable to PerpetualVL2024)

Please see the guide [here][2] for VL Office installation.

### 4- Change Update Channel

If we change the Insider or Current update channel **to** Monthly Enterprise or Semi-Annual channel then such non-genuine banners won't appear by default.

You can find this option in [MAS](./index#step-2-run-the-activation-script) under Change Office edition option.


::: danger Troubleshooting

If you have any questions, first review the [**FAQ section**](./faq) - your answer will most likely be there.

If your issue persists - [**Contact us**](./troubleshoot).

:::


[1]: https://github.com/abbodi1406/KMS_VL_ALL_AIO/
[2]: https://gravesoft.dev/office_c2r_custom
