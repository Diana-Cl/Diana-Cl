---
layout: doc
outline: deep
title: 'Download Windows / Office'
description: 'All download links available on our website lead to genuine files only'
date: 2025-01-05
editLink: true
---

# Download Windows / Office

::: info Note

All download links available on our website lead to genuine files only.

:::

## Download Windows
-  [Windows 11](./windows_11_links)
-  [Windows 10](./windows_10_links)
-  [Windows 10 / 11 Enterprise **LTSC**](./windows_ltsc_links)
-  [Windows ARM64](./windows_arm_links)
-  [Windows 8.1](./windows_8.1_links)
-  [Windows 7](./windows_7_links)
-  [Windows Vista][winvist]
-  [Windows XP](./windows_xp_links)
-  [Windows Server][winserv]
-  Windows Insider [10-11][1] - [Server][2] / [Registration][3] is needed to download.

## Download Office

Activation with [MAS](./index#step2) is required after the installation of Office.

-  [Office C2R Installers][4] 🤍 (O365 / 2024 / 2021 / 2019 / 2016 / 2013)
-  [Office C2R Custom Install][5] (O365 / 2024 / 2021 / 2019 / 2016)
-  [Office MSI VL (Old versions)][winmsi] (2016 / 2013 / 2010 / 2007)
-  [Office For **Mac**][winmac]

<hr/><br/>

## FAQ

#### Guides

- [Clean Install Windows](./clean_install_windows)
- [In-place Repair Upgrade (Keeping files and apps)](./in-place_repair_upgrade)
- [Windows 11 on Unsupported Hardware](./clean_install_windows#windows-11-on-unsupported-hardware)
- [Edition List During Windows Installation](./clean_install_windows#edition-list-during-windows-installation)
- [Windows 10 Updates After End-Of-Life](./windows10_eol)

#### Why are we hosting files on our server when we can download them from Microsoft?

::: details Click here for info

Microsoft provides consumer ISOs for free on their [site][6], but business, enterprise, and older ISOs are behind paywalls such as [MVS][7] and [M365 Admin Center][8]. That's why we need to host files on our servers.

:::

#### How to ensure that these files are genuine?

::: details Click here for info

You can check [here](./genuine-installation-media#verify-authenticity-of-files) on how to be sure that files are genuine by verifying the checksum available on the official Microsoft website.

:::

#### There are both consumer and business ISOs listed here. What is the difference between them?

::: details Click here for info

For Windows 10/11 General Availability Channel (GAC) releases (i.e., Home and Pro), Microsoft produces two types of ISO files: Consumer and Business.

The Consumer ISO includes all editions such as Home, Pro, and Education, but excludes the Enterprise edition. In contrast, the Business ISO contains all editions except for the Home-level editions, and these ISO files come with a KMS key pre-installed (not activated) by default.

:::

#### How can I obtain an official Microsoft ISO that is not available here?

::: details Click here for info

You can request the file [Discord][9].

:::


## Verify Authenticity Of Files

You can use the [file hashing method][10] to verify if a file is genuine. This can be done using tools like [7-Zip][11] (After installing 7-Zip, right-click on the ISO file and go to 7-Zip > CRC SHA).

There are many places where you can find these checksums for verification. Examples can be found below.

- [files.rg-adguard][12] (the most complete collection)
- [MVS dump][13]
- [genuine-iso-verifier][14]
- [msdn.rg-adguard][15]
- [sha1.rg-adguard][16]
- Google

Microsoft's Official free links for checksums:

- [MVS][17]
- [Windows 11][18]
- [Windows 10][19]


::: details More info on Official links!

**MVS**  
- On MVS, you need to login and click on 'All Downloads' button and then search the product name.

**MVS Limitations:**  
- They used to publish only SHA-1, but later started publishing SHA-1 and SHA-256 both and from 2022 they now publish only SHA-256.

- However they removed all the SHA-1 data and as a result, old files checksums are simply not available on MVS site.

- Also, around the time when they were publishing SHA-1 and SHA-256 both, they messed up some SHA-256 data, for example

```shell
Incorrect SHA-256 example
SHA256: BDB3D0C5C933B201ECE736A172FB604AA5D7D0705DD75681F9FCC4B1EE79FAC8
File name: en-uk_windows_10_enterprise_ltsc_2019_x64_dvd_723dfbc1.iso
```

- So its useful only for the latest files.

**Windows 11**
- SHA-256 list will appear if you download the ISO file.

**Windows 10**
- Microsoft doesn't allow you to download ISO file directly if browser's useragent is Windows OS. So you need to change it to something else like Android or IOS and then download the ISO file to see the list.

:::


#### Video Tutorial

<video class="video-js vjs-default-skin vjs-fluid" controls preload="auto" data-setup='{}'>
  <source src="/how_to_verify_files.mp4" type="video/mp4" />
  <p class="vjs-no-js"></p>
</video>

::: danger Troubleshoot

- If you need any help regarding this, first review the [**FAQ section**](./faq) — your answer will most likely be there.  

- If your issue persists — You can [**Contact us**](./troubleshoot).

:::

[1]: https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewiso
[2]: https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewserver
[3]: https://www.microsoft.com/en-us/windowsinsider/getting-started
[4]: https://gravesoft.dev/office_c2r_links
[5]: https://gravesoft.dev/office_c2r_custom
[6]: https://www.microsoft.com/en-us/software-download
[7]: https://visualstudio.microsoft.com/subscriptions/
[8]: https://learn.microsoft.com/en-us/licensing/vlsc-faqs-home-page
[9]: https://discord.gg/FajfGaH3nD
[10]: https://en.wikipedia.org/wiki/File_verification
[11]: https://7-zip.org/
[12]: https://files.rg-adguard.net/search
[13]: https://awuctl.github.io/mvs/
[14]: https://genuine-iso-verifier.weebly.com/
[15]: https://msdn.rg-adguard.net/
[16]: https://sha1.rg-adguard.net/
[17]: https://my.visualstudio.com/Downloads
[18]: https://www.microsoft.com/en-us/software-download/windows11
[19]: https://www.microsoft.com/en-us/software-download/windows10
[win11]: https://massgrave.dev/windows_11_links
[win10]: https://massgrave.dev/windows_10_links
[winen]: https://massgrave.dev/windows_ltsc_links
[winarm]: https://massgrave.dev/windows_arm_links
[win8]: https://massgrave.dev/windows_8.1_links
[win7]: https://massgrave.dev/windows_7_links
[winvist]: https://massgrave.dev/windows_vista__links
[winxp]: https://massgrave.dev/windows_xp_links
[winserv]: https://massgrave.dev/windows_server_links
[winmsi]: https://massgrave.dev/office_msi_links
[winmac]: https://massgrave.dev/office_for_mac
