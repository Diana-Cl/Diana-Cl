---
layout: doc
outline: deep
title: 'Windows 10 Updates After End-Of-Life'
description: 'This document explains how users can receive official updates after the retirement date of Windows 10 on October 14, 2025'
date: 2025-04-30
editLink: true
---

# Windows 10 Updates After End-Of-Life

This document explains how users can receive official updates after the retirement date of Windows 10 on October 14, 2025.

::: tip For many people

the most obvious solution would be to just upgrade to Windows 11, but they can not because the hardware is not supported for Windows 11. Some users might also not like Windows 11
and would like to stay on Windows 10 as long as they can.

- Here are several solutions for you to choose from; feel free to select the one you prefer the most.

:::

## Windows 10 ESU updates 🤍

Microsoft announced [Extended Security Updates (ESU)][1] where users can buy the ESU subscription to receive Windows updates. These updates will begin to roll out in November 2025.

**You can use [TSforge option in MAS](./index#step-2-run-the-activation-script) to activate 3 Years ESU (Oct 2025 to Oct 2028).**

<br><br/>

## Windows 10 (IoT) Enterprise LTSC 2021

Microsoft releases Windows 10/11 in two servicing channels.

1- GAC (General Availability Channel) (i.e. Home, Pro, Enterprise). It will reach the end of support on [October 14, 2025][2].
2- LTSC (Long-Term Servicing Channel) (i.e. Enterprise LTSC, IoT Enterprise LTSC). Windows 10 Enterprise LTSC 2021 will reach the end of support on [Jan 12, 2027][3]
and Windows 10 IoT Enterprise LTSC 2021 will reach the end of support on [Jan 13, 2032][4]

The solution is simple. You can just use the Official Windows 10 IoT Enterprise LTSC 2021 edition to get updates till Jan 13, 2032.

::: details Clean install Windows 10 (IoT) Enterprise LTSC 2021

The IoT edition ISO is available in English language only, but don't worry.

- Download [Enterprise LTSC 2021][5] ISO in your desired language.
- Install Windows using this [clean installation guide](./clean_install_windows).
- After installing Windows, to change the edition, enter the IoT LTSC 2021 key `QPM6N-7J2WJ-P88HH-P3YRH-YY74H` on the activation page in the Windows settings.

:::

::: details Upgrade Windows 10 Home, Pro, etc editions to Windows 10 IoT Enterprise LTSC 2021 while keeping files and apps

- Download Windows 10 Enterprise LTSC ISO from [here][5] in the **same Windows language and architecture**.
  - To check the installed Windows architecture, open Powershell as admin and enter,

```reg
Get-WmiObject -Class Win32_OperatingSystem | Format-List OSArchitecture
```

x64 means 64 Bit, x86 means 32 Bit
  - To check the installed Windows Language, open Powershell as admin and enter;

```
dism /english /online /get-intl | find /i "Default system UI language"
```

- Right-click on the downloaded ISO file, Open With → Windows Explorer
- A new DVD drive will appear in Windows Explorer, which means the installation image has been mounted successfully.
- Now open the command prompt as admin and enter:

```reg
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterpriseS /f
```

- Now quickly go into that DVD drive and run setup.exe, and continue until you reach the final confirmation screen. (Don't delay at this step, otherwise it won't show an option to keep files and apps)
- Make sure it says "**Keep personal files and apps**" on the final screen. Then you can continue the process and wait until it is done.

That's all.

:::

::: details Notes

- LTSC editions do not have Store apps installed by default. However, if you upgrade from GAC to LTSC, all your Store apps will be retained. In contrast, if you perform a clean installation of Windows LTSC, Store apps will not be installed. For instructions on how to install them manually, please refer to this [page][6]
- IoT editions are [binary identical][7] to Enterprise editions. The difference is in licensing. You can use it just fine on a general-purpose device.
- To learn about the advantages and disadvantages of LTSC, click [here][8]

:::

## Windows 11 IoT Enterprise 24H2
## Windows 11 IoT Enterprise LTSC 2024

Many users choose not to use Windows 11 due to hardware limitations, such as a lack of TPM, Secure Boot, or UEFI support. While it is possible to bypass these limitations, doing so is officially unsupported and may lead to issues with future updates.

However, a promising alternative is available.

In 2024, Microsoft released Windows 11 IoT Enterprise 24H2 (GAC) / IoT Enterprise LTSC 2024 (LTSC) which has [relaxed hardware requirements][9].

You can officially install these Windows 11 editions without meeting the usual hardware requirements, such as TPM, Secure Boot, and UEFI, while still receiving continued support in the future.

::: details Clean install Windows 11 IoT Enterprise (GAC/LTSC) 2024

The IoT edition ISO is available in English language only, but don't worry.

- Download any [Windows 11 24H2][10] (For GAC) or [Enterprise LTSC 2024][11] (For LTSC) ISO in your desired language.
- Follow [normal clean installation guide](./clean_install_windows) if you are using IoT edition English language ISO.
- Follow [PID.txt method](./clean_install_windows#windows-11-on-unsupported-hardware) to install IoT edition from scratch if you are using Non-IoT ISO.

Alternatively, you can install any Windows 11 24H2 (For GAC) or Enterprise LTSC 2024 (For LTSC) ISO file with [Rufus](./clean_install_windows#create-a-bootable-usb-with-rufus) and once the installation is done, you can use the change edition option in MAS to switch the edition to IoT Enterprise and enjoy official support on unsupported hardware.

:::

::: details Upgrade Windows 10 Home, Pro, etc editions to Windows 11 IoT Enterprise (GAC/LTSC) 2024 while keeping files and apps

The IoT edition is available in English language only, but don't worry.

- Download any [Windows 11 24H2][10] (For GAC) or [Enterprise LTSC 2024][11] (For LTSC) ISO in the **same Windows language and architecture**.
  - To check the installed Windows architecture, open Powershell as admin and enter:

```reg
Get-WmiObject -Class Win32_OperatingSystem | Format-List OSArchitecture
```

x64 means 64 Bit, x86 means 32 Bit
  - To check the installed Windows Language, open Powershell as admin and enter,

```reg
dism /english /online /get-intl | find /i "Default system UI language"
```

- Right-click on the downloaded ISO file, Open With → Windows Explorer
- A new DVD drive will appear in Windows Explorer, which means the installation image has been mounted successfully.
- Now open the command prompt as admin and enter:

**For GAC**

```reg
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterprise /f
```

**For LTSC**

```reg
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterpriseS /f
```

- Now quickly go into that DVD drive and run setup.exe, and continue until you reach the final confirmation screen. (Don't delay at this step, otherwise it won't show an option to keep files and apps)
- Make sure it says "**Keep personal files and apps**" on the final screen. Then you can continue the process and wait until it is done.

That's all.

:::

::: details Notes

- Many tools can let you install Windows 11 if the hardware is not supported and monthly updates would work fine. However yearly feature updates will fail to install if hardware requirements are not met.
- This is why IoT (24H2/2024) editions are mentioned so that you can get official support on future feature upgrades.
- LTSC editions do not have Store apps installed by default. However, if you upgrade from GAC to LTSC, all your Store apps will be retained. In contrast, if you perform a clean installation of Windows LTSC, Store apps will not be installed. For instructions on how to install them manually, please refer to this [page][6]
- Windows 11 24H2 / 2024 requires CPUs that support SSE4.2 and POPCNT instructions.
- IoT editions are [binary identical][12] to Enterprise editions. The difference is in licensing. You can use it just fine on a general-purpose device.

- To learn about the advantages and disadvantages of LTSC, click [here][8]
- You can install the [officially supported][13] Windows 11 24H2 IoT editions on a system without TPM; however, some games may not allow you to play if your system lacks TPM on Windows 11. In that case, you will need to stick with Windows 10.

:::

::: danger Troubleshoot

- If you need any help regarding this, first review the [**FAQ section**](./faq) — your answer will most likely be there.

- If your issue persists — You can [**Contact us**](./troubleshoot).

:::

[1]: https://learn.microsoft.com/en-us/windows/whats-new/extended-security-updates
[2]: https://learn.microsoft.com/en-us/lifecycle/products/windows-10-home-and-pro
[3]: https://learn.microsoft.com/en-us/lifecycle/products/windows-10-enterprise-ltsc-2021
[4]: https://learn.microsoft.com/en-us/lifecycle/products/windows-10-iot-enterprise-ltsc-2021
[5]: https://massgrave.dev/windows_ltsc_links
[6]: https://massgrave.dev/windows_ltsc_links#microsoft-store-app-installation-on-ltsc
[7]: https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Overview
[8]: https://massgrave.dev/windows_ltsc_links#what-is-ltsc-and-is-it-the-right-choice-for-you
[9]: https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements
[10]: https://massgrave.dev/windows_11_links
[11]: https://massgrave.dev/windows_ltsc_links
[12]: https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Overview
[13]: https://learn.microsoft.com/en-us/windows/iot/iot-enterprise/Hardware/System_Requirements?tabs=Windows11LTSC#optional-minimum-requirements
