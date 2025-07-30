---
layout: doc
outline: deep
title: 'Windows Evaluation Editions'
description: 'A complete guide to Windows Evaluation Editions for IT professionals, plus Persian translation.'
date: 2023-02-05
editLink: true
---

# Windows Evaluation Editions

Windows Evaluation Editions are official trial versions of Windows operating systems released by Microsoft. They’re designed to help IT professionals and advanced users test the features and compatibility of Windows (Enterprise & Server) before committing to a purchase.

- **Where to get:** [Microsoft Eval Center][1]
- **Available:** Windows 10/11 Enterprise & all current Server editions

::: danger Important

You _cannot_ activate evaluation editions after the trial period. For long-term use, always install a [genuine full version](./genuine-installation-media) instead.

:::

### Main Differences: Full vs. Evaluation

- **Trial Period:** 90 days for Enterprise, 180 days for Server.
- **Activation:** Not possible with product keys, digital licenses, or KMS after the trial expires.
- **Post-trial:** The system will display activation warnings and may restart automatically.
- **Permanent Activation:** Not supported on evaluation builds.

---

### How to Convert Evaluation to Full Version

#### Windows 10/11 Enterprise

Officially, you can’t directly convert evaluation to full.  
However, you can upgrade using an ISO and a registry tweak:

:::tabs

== Enterprise LTSC

**Enterprise LTSC**

**For LTSC editions:**

1. Download the same-language/architecture LTSC ISO from [windows ltsc links][2]
2. Mount the ISO (right-click → Open with Windows Explorer).
3. As administrator, run:

```reg
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d EnterpriseS /f
```

 _(For Windows 11 on unsupported hardware, use `IoTEnterpriseS` instead of `EnterpriseS`)_  
 
4. Run `setup.exe` from the mounted ISO, make sure “Keep personal files and apps” is selected.
5. Complete the upgrade.

== Enterprise GAC

**For General Availability Channel (GAC):**

1. Download the ISO from [MSDL][3].
2. Mount the ISO.
3. As administrator, run:

```reg
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d Enterprise /f
```

_(For Windows 11 on unsupported hardware, use `IoTEnterprise`)_

4. Run `setup.exe` and use key `NPPR9-FWDCX-D2C8J-H872K-2YT43` if prompted.
5. On the confirmation screen, ensure “Keep personal files and apps” is selected.

:::

#### Windows Server

- Official conversion is supported. See [Microsoft guide][4] or use the [MAS script](./index).

### Extending the Evaluation Period

- **Default:** 90 days (Enterprise), can be extended 2 more times (up to 270 days) with

```reg
slmgr /rearm
```

- **Other methods:** Use the TSforge option in MAS or reset WPA registry keys (see [gravesoft.dev][5]).

::: info Info

- Evaluation activation for Windows 10 Enterprise LTSC 2021 may fail—use MAS TSforge to fix.

:::

### Avoid License File Swapping

::: tip Avoiding

Applying full-version license files to eval builds is _not_ recommended and can break system updates, edition queries, and more.    
Always use official upgrade or extension methods.

:::

::: danger Troubleshoot

- If you need any help regarding this, first review the [**FAQ section**](./faq) — your answer will most likely be there.  

- If your issue persists — You can [**Contact Us**](./troubleshoot).

:::

[1]: https://www.microsoft.com/en-us/evalcenter
[2]: https://massgrave.dev/windows_ltsc_links
[3]: https://msdl.gravesoft.dev/
[4]: https://learn.microsoft.com/en-us/windows-server/get-started/upgrade-conversion-options
[5]: https://gravesoft.dev/fix-wpa-registry
[6]: https://github.com/NiREvil/windows-activation/discussions
