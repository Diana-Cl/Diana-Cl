---
title: Introduction to REvil Activation
description: A reliable, open-source activation toolkit for Windows and Office. Activate your products in under 40 seconds using methods like HWID, KMS, and more.
author: 'Dìana'
date: 2025-1-11
---

# Introduction to REvil Activation  

A reliable, open-source activation toolkit for Windows and Office. Activate your products in under 40 seconds using methods like HWID, KMS, and more. 

<br/>  

# Getting Started with REvil  

Welcome to the REvil (Activation Enhancement Guide).   
This project provides a collection of reliable, open-source activation tools for `Windows` and `Office`.   
Our scripts leverage various methods to help you activate your products quickly and safely.

:::danger IMPORTANT
For most activation methods, a stable **internet connection** is required.   
A VPN is generally not necessary.
:::  

<br/>  

## Activation Methods Summary

For a quick overview, here is a summary of the activation methods available:

| Activation Type | Supported Product      | Activation Period                | Internet Needed?                 | More Info      |
|:---------------:|:-----------------------|:---------------------------------|:---------------------------------|:---------------|
| **HWID**        | Windows 10-11          | Permanent                        | Yes                              | [Details](./hwid) |
| **KMS**         | Windows 10-11          | 180 Days (Manual)                | Yes                              | [Details](./kms) |
| **Ohook**       | Office                 | Permanent                        | No                               | -              |
| **TSforge**     | Windows / ESU / Office | Permanent                        | Yes (on build 19041+)            | [Details](./tsforge) |
| **KMS38**       | Windows 10-11-Server   | Until 2038                       | No                               | [Details](./kms38) |
| **Online KMS**  | Windows / Office       | 180 Days (Lifetime with Renewal) | Yes                              | [Details](./kms) |

<p style="text-align: center;">
  For a detailed comparison of all methods, check out the <a href="./chart">Activation Methods Chart</a>.</p><br/>   

## Method 1: Permanent Activation with HWID 

For most users, the **HWID (Hardware ID)** method is the simplest way to get a permanent digital license for Windows 10 and 11.

<br><br/>  

### Step 1: Open PowerShell as Administrator

1.  Right-click the **Start menu**.
2.  Select **Windows Terminal (Admin)** on Windows 11 or **Windows PowerShell (Admin)** on Windows 10. [^1] [^2]   

![Open PowerShell as Admin](https://github.com/user-attachments/assets/5638557d-9bfe-4e7c-a851-218bec6559bf)

<br><br/>  

### Step 2: Run the Activation Script

Copy the following command, paste it into the PowerShell window by right-clicking, and press `Enter`.

::: code-group
```powershell [Recommended]
irm https://get.activated.win | iex
```
```powershell [Alternative]
irm https://massgrave.dev/get | iex
```
:::

![Paste command in PowerShell](https://github.com/user-attachments/assets/dfaa3f27-efb8-4979-bc32-081362274a2e)

<br><br/>  

### Step 3: Choose the HWID Option

A menu will appear in a new window. Press `1` on your keyboard to select **HWID Activation** and wait a few moments for the process to complete.

![Select HWID Activation](https://github.com/user-attachments/assets/c4289236-1d5d-421f-984f-5b3816575273)

**Congratulations!** Your Windows is now permanently activated with a digital license. <br/>  

To check the activation status of `Windows 10`, navigate to **Settings → Update & Security → Activation.** [^3]

To check the activation status of `Windows 11`, open Settings by clicking the Start button and then selecting **Settings → System → Activation.** [^4]

<br><br/>  

## Additional Information

::: tip Author's Suggestion & Tips  

::: details Click here to see the details  
- **For Windows:** I personally use the **KMS method** ([see guide](./kms)) for my Windows 10/11 activations. It's official, leaves no files on the system, and takes less than 3 minutes. If for some reason that fails, HWID is my go-to, as it's also official and file-less.  
- **For Office:** I use Ohook, TSforge, or Online KMS. The small differences are noted in the summary table above.  
- **Need Help?** If you run into any issues, feel free to ask in the [GitHub Discussions][2] or email me directly.  
:::

<br/>  

::: danger How to Remove Activations

::: details  Click here to see the details  
- **HWID:** A digital license is stored on Microsoft's servers and tied to your hardware. It cannot be "removed" in the traditional sense. A major hardware change (like the motherboard) will invalidate it.  To return to an unactivated state, you can install a generic KMS key.  
- **Online KMS / Ohook / KMS38:** Use the corresponding "Uninstall" or "Remove" option within the MAS script menu, then run the "Fix Licensing" option from the Troubleshoot menu.  
- **TSforge:** This method only appends data and doesn't install files. To reset it, simply run the "Fix Licensing" option from the Troubleshoot menu in the MAS script.   
:::

<br/>  

::: info Supported Windows 10/11 Products for HWID   

| Windows 10/11 Product Names           | EditionID                | Generic Retail/OEM/MAK Key    |
| :-------------------------------------: | :------------------------: | :-----------------------------: |
| Education                             | Education                | YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY |
| Education N                           | EducationN               | 84NGF-MHBT6-FXBX8-QWJK7-DRR8H |
| Enterprise                            | Enterprise               | XGVPP-NMH47-7TTHJ-W3FW7-8HV2C |
| Enterprise N                          | EnterpriseN              | 3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT |
| Enterprise LTSB 2015                  | EnterpriseS              | FWN7H-PF93Q-4GGP8-M8RF3-MDWWW |
| Enterprise LTSB 2016                  | EnterpriseS              | NK96Y-D9CD8-W44CQ-R8YTK-DYJWX |
| Enterprise LTSC 2019                  | EnterpriseS              | 43TBQ-NH92J-XKTM7-KT3KK-P39PB |
| Enterprise N LTSB 2015                | EnterpriseSN             | NTX6B-BRYC2-K6786-F6MVQ-M7V2X |
| Enterprise N LTSB 2016                | EnterpriseSN             | 2DBW3-N2PJG-MVHW3-G7TDK-9HKR4 |
| Home                                  | Core                     | YTMG3-N6DKC-DKB77-7M9GH-8HVX7 |
| Home N                                | CoreN                    | 4CPRK-NM3K3-X6XXQ-RXX86-WXCHW |
| Home China [^5]                       | CoreCountrySpecific      | N2434-X9D7W-8PF6X-8DV9T-8TYMD |
| Home Single Language [^6]             | CoreSingleLanguage       | BT79Q-G7N6G-PGBYW-4YWX6-6F4BT |
| IoT Enterprise                        | IoTEnterprise            | XQQYW-NFFMW-XJPBH-K8732-CKFFD |
| IoT Enterprise Subscription           | IoTEnterpriseK           | P8Q7T-WNK7X-PMFXY-VXHBG-RRK69 |
| IoT Enterprise LTSC 2021              | IoTEnterpriseS           | QPM6N-7J2WJ-P88HH-P3YRH-YY74H |
| IoT Enterprise LTSC 2024              | IoTEnterpriseS           | CGK42-GYN6Y-VD22B-BX98W-J8JXD |
| IoT Enterprise LTSC Subscription 2024 | IoTEnterpriseSK          | N979K-XWD77-YW3GB-HBGH6-D32MH |
| Pro                                   | Professional             | VK7JG-NPHTM-C97JM-9MPGT-3V66T |
| Pro N                                 | ProfessionalN            | 2B87N-8KFHP-DKV6R-Y2C8J-PKCKT |
| Pro Education                         | ProfessionalEducation    | 8PTT6-RNW4C-6V7J2-C2D3X-MHBPB |
| Pro Education N                       | ProfessionalEducationN   | GJTYN-HDMQY-FRR76-HVGC7-QPF8P |
| Pro for Workstations                  | ProfessionalWorkstation  | DXG7C-N36C4-C4HTG-X4T3X-2YV77 |
| Pro N for Workstations                | ProfessionalWorkstationN | WYPNQ-8C467-V2W6J-TX4WX-WT2RQ |
| S                                     | Cloud                    | V3WVW-N2PV2-CGWC3-34QGF-VMJ2C |
| S N                                   | CloudN                   | NH9J3-68WK7-6FB93-4K3DF-DJ4F6 |
| SE                                    | CloudEdition             | KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W |
| SE N                                  | CloudEditionN            | K9VKN-3BGWV-Y624W-MCRMQ-BHDCD |
| Team                                  | PPIPro                   | XKCNC-J26Q9-KFHD2-FKTHY-KD72Y |

*A generic key is automatically applied by the script where needed.*
:::

---

<br><br/>  

[^1]: [10 Ways to run PowerShell in windows][1]  

[^2]: Another easiest way to run PowerShell: **Right-click** on your Start menu to trigger the quick link menu and select **Windows Terminal (admin)** at win11 or **Windows powershell (admin)** at win 10 in the menu list.  

[^3]: To check the activation status of Windows 10, navigate to Settings → Update & Security → Activation. You will see your activation status listed there. If Windows is activated, you should see "Activated" with a green checkmark.  

[^4]: To check the activation status of Windows 11, open Settings by clicking the **Start button** and then selecting Settings → System → Activation. The activation status will be displayed, showing whether Windows is activated, along with details about the activation method and any linked Microsoft account.  

[^5]: Home Country Specific version.  

[^6]: Home Single language version.  

[^7]: Professional for Workstations & Professional N for Workstations.  

[1]: https://www.minitool.com/news/open-windows-11-powershell.html
[2]: https://github.com/NiREvil/windows-activation/discussions/new/choose
[3]: mailto:diana.clk01@gmail.com
[rainbow]: https://github.com/NiREvil/vless/assets/126243832/1aca7f5d-6495-44b7-aced-072bae52f256
