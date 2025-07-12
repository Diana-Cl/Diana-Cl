---
layout: doc
outline: deep
title: 'All-in-One Windows & Office Activation Guide: HWID, KMS, TSforge and More.'
description: 'Comprehensive open-source guide to safely activate Windows 10/11 and Office using HWID, KMS, TSforge, Ohook in under 40 seconds. Includes troubleshooting tips and detailed comparisons.'
date: 2024-05-05
editLink: true
head:
  - - meta
    - name: description
      content: Safely activate Windows 10/11 and Microsoft Office using official open-source methods like HWID, KMS, TSforge, and more. Includes permanent and renewable options with full guides.
  - - meta
    - name: keywords
      content: windows activation, office activation, hwid, kms, tsforge, ohook, kms38, digital license, activate windows 11, activate office 2021, open-source activation
  - - meta
    - property: og:title
      content: Safe and Permanent Activation for Windows and Office
  - - meta
    - property: og:description
      content: A full open-source guide to activating Windows 10/11 and Microsoft Office using reliable tools like HWID, KMS, and TSforge.
---

# Welcome to the ultimate guide for activating Windows and Office using trusted open-source methods.


This comprehensive guide walks you through reliable, open-source methods — like HWID, KMS, TSforge, and more — to activate your `Windows` and `Office` safely and permanently. <br/>

::: tip **Author's Notes**

- After activation via the `HWID` method, you may encounter issues signing into your Microsoft account in **Microsoft Edge** browser settings!
- **Solution 1:** Skip this activation method< and use [KMS](./kms) instead (takes less than 2 minutes and requires renewal every 6 months).
- **Solution 2:** Avoid Edge and switch to alternative browsers like **Chrome** or **Firefox**.

::: details Click here to see the details

- **For Windows:** I personally use the **KMS method** [[see guides](./kms)] for my Windows 10/11 activations. It's official, leaves no files on the system, and takes less than 3 minutes. If for some reason that fails, HWID is my go-to, as it's also official and file-less.
- **For Office:** I use Ohook, TSforge, or Online KMS. The small differences are noted in the summary table above.
- **Need Help?** If you run into any issues, feel free to ask in the [GitHub Discussions][3] or [Email me][4] directly.

:::

<br/>

## Activation Methods Summary

For a quick overview, here is a summary of the activation methods available:

| Activation Type | Supported Product      | Activation Period                | Internet Needed?      | More Info               |
| :-------------: | :--------------------- | :------------------------------- | :-------------------- | :---------------------- |
|    **HWID**     | Windows 10-11          | Permanent                        | Yes                   | [Details](./hwid)       |
|     **KMS**     | Windows 10-11          | 180 Days (Manual)                | Yes                   | [Details](./kms)        |
|    **Ohook**    | Office                 | Permanent                        | No                    | -                       |
|   **TSforge**   | Windows / ESU / Office | Permanent                        | Yes (on build 19041+) | [Details](./tsforge)    |
|    **KMS38**    | Windows 10-11-Server   | Until 2038                       | No                    | [Details](./kms38)      |
| **Online KMS**  | Windows / Office       | 180 Days (Lifetime with Renewal) | Yes                   | [Details](./online_kms) |

<p style="text-align: center;">
  For a detailed comparison of all methods, check out the <a href="./chart">Activation Methods Chart</a>.</p><br/>

# Method 1. Permanent Activation with HWID

For most users, the **HWID (Hardware ID)** method is the simplest way to get a permanent digital license for Windows 10 and 11. <br/>

## Step 1. Open PowerShell as Administrator

**Run PowerShell using search bar**

- 1. Click on windows `Start` button or `Search` icon in the taskbar.
- 2. Type `powershell`.
- 3. Select **Run as administrator**. <br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/9b27cd4b-21d8-4970-98bb-3c97010e09bf" alt="open-powershell-as-admin" width="540px" /></p><br/>
  
::: tip Another ways to run PowerShell

::: details Click here to see more ways

**1. Using search bar**

- 1. Click on windows `Start` button or `Search` icon in the taskbar.

2.  Type `powershell`.
3.  Select **Run as administrator**. <br/>

**2. Using the Run box**

- 1. **Open the Run dialog box:** Simultaneously Press `Win (⊞) + R` keys on your keyboard.
- 2. **Type:** `powershell`.
- 3. **Run as administrator:** Instead of just pressing Enter, press `Ctrl + Shift + Enter`. This combination will launch PowerShell with elevated (administrator) privileges.
- 4. If prompted by the User Account Control dialog, click `Yes` to grant administrative privileges. <br/>

**3. Using Power User Menu (Win+X)**

- 1. Right-click on the **Start menu**.
- 2. Then select **Windows Terminal (Admin)** on Windows 11 or **Windows PowerShell (Admin)** on Windows 10 to run PowerShell. <br/>

Or You can visit [this Link][1] to see 10 ways to run **PowerShell** And [this link][2] For Running CMD in your windows.

:::

## Step 2. Run the Activation Script

Copy the following command, paste it into the PowerShell window and press `Enter` key.

> You can `paste` everything you copied by **Right-clicking** in CMD Or PowerShell Or other terminals.

::: code-group

```powershell [Recommended]
irm https://get.activated.win | iex
```

```powershell [Alternative]
irm https://massgrave.dev/get | iex
```

:::

<br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/6b72787e-f5ad-47a2-ab2b-ae93de9f70bc" alt="Paste command in PowerShell" width="540px" /></p><br/>

## Step 3. Choose the HWID Option

A menu will appear in a new window. Press `1` number on your keyboard to select **HWID Activation** and wait a few moments for the process to complete.

<p align="center">
  <img src="https://github.com/user-attachments/assets/8b119e05-d506-4c42-91cb-ac58c9a2f189" alt="Select HWID Activation" width="540px" /></p><br/>

**Congratulations!**  
Your Windows is now permanently activated with a digital license. <br/>

To check the activation status of `Windows 10`, navigate to **Settings → Update & Security → Activation.** [^1]

To check the activation status of `Windows 11`, open Settings by clicking the Start button and then selecting **Settings → System → Activation.** [^2] <br/>

## Additional Information

::: danger How to Remove Activations

::: details Click here to see the details

- **HWID:** A digital license is stored on Microsoft's servers and tied to your hardware. It cannot be "removed" in the traditional sense. A major hardware change (like the motherboard) will invalidate it. To return to an unactivated state, you can install a generic KMS key. [Extended hwid details](./hwid)
- **Online KMS / Ohook / KMS38:** Use the corresponding "Uninstall" or "Remove" option within the MAS script menu, then run the "Fix Licensing" option from the Troubleshoot menu. [KMS details](./kms) and [KMS38 details](./kms38)
- **TSforge:** This method only appends data and doesn't install files. To reset it, simply run the "Fix Licensing" option from the Troubleshoot menu in the MAS script. [TSforge details](./tsforge)

:::

<br/>

::: info Supported Windows 10/11 Products for HWID

::: details Click here to see the products

|      Windows 10/11 Product Names      |        EditionID         |  Generic Retail/OEM/MAK Key   |
| :-----------------------------------: | :----------------------: | :---------------------------: |
|               Education               |        Education         | YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY |
|              Education N              |        EducationN        | 84NGF-MHBT6-FXBX8-QWJK7-DRR8H |
|              Enterprise               |        Enterprise        | XGVPP-NMH47-7TTHJ-W3FW7-8HV2C |
|             Enterprise N              |       EnterpriseN        | 3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT |
|         Enterprise LTSB 2015          |       EnterpriseS        | FWN7H-PF93Q-4GGP8-M8RF3-MDWWW |
|         Enterprise LTSB 2016          |       EnterpriseS        | NK96Y-D9CD8-W44CQ-R8YTK-DYJWX |
|         Enterprise LTSC 2019          |       EnterpriseS        | 43TBQ-NH92J-XKTM7-KT3KK-P39PB |
|        Enterprise N LTSB 2015         |       EnterpriseSN       | NTX6B-BRYC2-K6786-F6MVQ-M7V2X |
|        Enterprise N LTSB 2016         |       EnterpriseSN       | 2DBW3-N2PJG-MVHW3-G7TDK-9HKR4 |
|                 Home                  |           Core           | YTMG3-N6DKC-DKB77-7M9GH-8HVX7 |
|                Home N                 |          CoreN           | 4CPRK-NM3K3-X6XXQ-RXX86-WXCHW |
|            Home China [^3]            |   CoreCountrySpecific    | N2434-X9D7W-8PF6X-8DV9T-8TYMD |
|       Home Single Language [^4]       |    CoreSingleLanguage    | BT79Q-G7N6G-PGBYW-4YWX6-6F4BT |
|            IoT Enterprise             |      IoTEnterprise       | XQQYW-NFFMW-XJPBH-K8732-CKFFD |
|      IoT Enterprise Subscription      |      IoTEnterpriseK      | P8Q7T-WNK7X-PMFXY-VXHBG-RRK69 |
|       IoT Enterprise LTSC 2021        |      IoTEnterpriseS      | QPM6N-7J2WJ-P88HH-P3YRH-YY74H |
|       IoT Enterprise LTSC 2024        |      IoTEnterpriseS      | CGK42-GYN6Y-VD22B-BX98W-J8JXD |
| IoT Enterprise LTSC Subscription 2024 |     IoTEnterpriseSK      | N979K-XWD77-YW3GB-HBGH6-D32MH |
|                  Pro                  |       Professional       | VK7JG-NPHTM-C97JM-9MPGT-3V66T |
|                 Pro N                 |      ProfessionalN       | 2B87N-8KFHP-DKV6R-Y2C8J-PKCKT |
|             Pro Education             |  ProfessionalEducation   | 8PTT6-RNW4C-6V7J2-C2D3X-MHBPB |
|            Pro Education N            |  ProfessionalEducationN  | GJTYN-HDMQY-FRR76-HVGC7-QPF8P |
|       Pro for Workstations [^5]       | ProfessionalWorkstation  | DXG7C-N36C4-C4HTG-X4T3X-2YV77 |
|      Pro N for Workstations [^6]      | ProfessionalWorkstationN | WYPNQ-8C467-V2W6J-TX4WX-WT2RQ |
|                   S                   |          Cloud           | V3WVW-N2PV2-CGWC3-34QGF-VMJ2C |
|                  S N                  |          CloudN          | NH9J3-68WK7-6FB93-4K3DF-DJ4F6 |
|                  SE                   |       CloudEdition       | KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W |
|                 SE N                  |      CloudEditionN       | K9VKN-3BGWV-Y624W-MCRMQ-BHDCD |
|                 Team                  |          PPIPro          | XKCNC-J26Q9-KFHD2-FKTHY-KD72Y |

_A generic key is automatically applied by the script where needed._

:::

<hr/><br/>

[^1]: To check the activation status of Windows 10, <br/> navigate to Settings → Update & Security → Activation. You will see your activation status listed there. <br/> If Windows is activated, you should see "Activated" with a green checkmark.

[^2]: To check the activation status of Windows 11, <br/> open Settings by clicking the **Start button** and then selecting Settings → System → Activation. The activation status will be displayed, <br/> showing whether Windows is activated, along with details about the activation method and any linked Microsoft account.

[^3]: Home China Country Specific version.

[^4]: Home Single language version.

[^5]: Professional for Workstations

[^6]: Professional N for Workstations.

[1]: https://www.minitool.com/news/open-windows-11-powershell.html
[2]: https://www.minitool.com/news/open-command-prompt-windows-11.html
[3]: https://github.com/NiREvil/windows-activation/discussions
[4]: mailto:diana.clk01@gmail.com
[rainbow]: https://github.com/NiREvil/vless/assets/126243832/1aca7f5d-6495-44b7-aced-072bae52f256
