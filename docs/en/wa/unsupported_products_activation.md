---
layout: doc
outline: deep
title: 'Unsupported Products Activation'
description: 'only those product activation methods are mentioned that are -not supported- by MAS script'
date: 2024-04-19
editLink: true
---

# Unsupported Products Activation

::: info

- On this page, only those product activation methods are mentioned that are **not supported by [MAS](./index) script**.
- If you are unsure, run [MAS](./index#step2) script activation options first.

:::

## MS Office For Mac

- Check [here][1].

## Windows XP Pro VL

- Download Windows XP Pro VL - [Link](./windows_xp_links)
- 32-bit (x86) Windows XP Pro VL SP3 ISO Activation key - `XCYBK-2B3KV-G8T8F-WXJM7-WCTYT`
- 64-bit (x64) Windows XP Pro VL SP2 ISO Activation key - `VCFQD-V9FX9-46WVH-K3CD4-4J3JM`

----

## Office 2010 VL on Windows XP

- Download Office 2010 VL - [Link][2]
- Activate with KMS-VL-ALL by qewlpal [Official thread][3] | [Mirror][4] (Use 7.2RC2 version from the mirror link)

> - MAS supports Office on Windows Vista and later versions.

## Office 2007 Enterprise

- Download Office 2007 Enterprise - [Link][5]
- Activation key - `BQDQB-KRRY9-43DBR-4P9J4-DH7D8`

## Remote Desktop Services / Client Access Licenses (RDS CALs)

**Installation**  

::: details Click here to see info

- Sign into the server you want to use as the license server using an administrator account.
- In Server Manager, select Manage > Add Roles and Features.
- On the Select installation type page, select Role-based or feature-based installation.
- Specify the server on which you install the licensing role.
- On the Server Roles page, check the box for Remote Desktop Services, then select Next until you see the Remote Desktop Services page.
- Select the roles you want to install. Make sure you include the Remote Desktop Licensing role.
- In the Add Roles and Features Wizard dialog box, select Add Features.
- Select Next until you see the Confirmation page, then select Install.

::: 

**Activation**

There is no validation during the activation of RDS licenses.

- Open "Remote Desktop Licensing Manager"
- Right-click the server and click "Activate Server"
- Select the connection method of choice and click next (default is fine)
- Fill the first company information with garbage and click next
- Leave the next page blank and click next
- The wizard should complete and say "The license server has been successfully activated"
- Keep "Start Install Licenses Wizard" checked and click next until it asks you to select a "License program"
- Change the License Program to "Service Provider License Agreement" in the dropdown and click next
- Set the agreement number to `1234567` and click next
- Fill out the next page with your chosen values and click next
- The license wizard should report "The requested licenses have been successfully installed"

Alternatively, you can generate a key on the page below. Use web browser option in activation process to get Product ID. It works on old Server versions as well.  

Website:  
[thecatontheceiling.github.io/Lyssa][6] 

Source code and details:  

[LyssaRDSGen][7]

[gist.github.com/WitherOrNot][8]

## HEVC Video Extensions

- It's a [paid Microsoft extension][9] to play High Efficiency Video Coding (HEVC) videos in any video app on your Windows 10/11 device.
- Microsoft provides digitally signed installers to M365 Admin Center subscribers, you can download them below.

Download link: [app.box.com/s/rozw][10] 
Alternatively, you can download AppxBundle installer from [store.rg-adguard.net][11] search `9nmzlz57r3t7` in ProductId.

## Visual Studio

- Download - [visualstudio.microsoft.com/downloads/][12]
- Activation keys:

| Editions                        | Activation Key                |
|---------------------------------|-------------------------------|
| Visual Studio 2022 Professional | TD244-P4NB7-YQ6XK-Y8MMM-YWV2J |
| Visual Studio 2022 Enterprise   | VHF9H-NXBBB-638P6-6JHCY-88JWH |
| Visual Studio 2019 Professional | NYWVH-HT4XC-R2WYW-9Y3CM-X4V3Y |
| Visual Studio 2019 Enterprise   | BF8Y8-GN2QH-T84XB-QVY3B-RC4DF |

## Microsoft DaRT

Microsoft DaRT (Diagnostics and Recovery Toolset, formerly ERD Commander) is an official bootable WinPE-based recovery image from Microsoft that contains diagnostic and troubleshooting tools for Windows recovery.

This product is no longer under active development.

**Download Link:** Microsoft Desktop Optimization Pack 2015  
[mu_microsoft_desktop_optimization_pack_2015_x86_x64.iso][13]

**Guide:** [woshub.com/create-dart-10-recovery-image/][14]

## SQL Server

- Download - [microsoft.com/evaluate-sql-server-2022][15]
- Activation keys:

| Editions                        | Activation Key                |
|---------------------------------|-------------------------------|
| SQL Server 2022 Enterprise      | J4V48-P8MM4-9N3J9-HD97X-DYMRM |
| SQL Server 2022 Enterprise Core | 2Q48Q-PB48J-DRCVN-GB844-X2H4Q |
| SQL Server 2022 Standard        | FG86G-CHH2T-CB7NJ-XT7D2-V8V4X |
| SQL Server 2022 Web             | 2R97W-F4XNT-T6MYV-3TKB7-6X3JM |
| SQL Server 2022 Developer       | 22222-00000-00000-00000-00000 |
| SQL Server 2019 Enterprise      | HMWJ3-KY3J2-NMVD7-KG4JR-X2G8G |
| SQL Server 2019 Standard        | PMBDC-FXVM3-T777P-N4FY8-PKFF4 |

## Microsoft Configuration Manager

Also known as ConfigMgr, Microsoft Endpoint Configuration Manager (MECM).  
Formerly known as Systems Management Server (SMS), System Center Configuration Manager (SCCM). [More info][16] on name changes.  

**Microsoft Configuration Manager (Current Branch)**

Download - [microsoft.com/evaluate-endpoint-config-manager][17]   
Activation Key - `BXH69-M62YX-QQD6R-3GPWX-8WMFY`

## Troubleshoot  

::: danger Troubleshoot

- If you need any help regarding this, first review the [**FAQ section**](./faq) — your answer will most likely be there.  

- If your issue persists — You can [**Contact Us**](./troubleshoot).

:::

[1]: https://massgrave.dev/office_for_mac
[2]: https://massgrave.dev/office_msi_links#office-2010
[3]: https://forums.mydigitallife.net/threads/kms-vl-all-online-offline-kms-activator-for-microsoft-products.63471/
[4]: https://app.box.com/s/q0nyib6bfylosvbbm5x8ztg87vy0kl8a
[5]: https://massgrave.dev/office_msi_links#office-2007
[6]: https://thecatontheceiling.github.io/LyssaRDSGen/
[7]: https://github.com/thecatontheceiling/LyssaRDSGen
[8]: https://gist.github.com/WitherOrNot/c34c4c7b893e89ab849ce04e007d89a9
[9]: https://apps.microsoft.com/detail/9nmzlz57r3t7
[10]: https://app.box.com/s/rozwl3zsx6o90xw2568by61fhp3z3icw 
[11]: https://store.rg-adguard.net/
[12]: https://visualstudio.microsoft.com/downloads/
[13]: https://drive.massgrave.dev/mu_microsoft_desktop_optimization_pack_2015_x86_x64_dvd_5975282.iso
[14]: https://woshub.com/create-dart-10-recovery-image/
[15]: https://www.microsoft.com/en-us/evalcenter/evaluate-sql-server-2022
[16]: https://craigtwall.com/how-sccm-became-memcm-or-just-configmgr/
[17]: https://www.microsoft.com/en-us/evalcenter/evaluate-microsoft-endpoint-configuration-manager  
