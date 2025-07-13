---
layout: doc
outline: deep
lang: 'en-US'
dir: 'ltr'
title: 'Official KMS Activation Guide — 180 Days, Renewable'
description: 'Step-by-step guide to activating Windows using the official KMS method for volume licensing.'
date: 2025-05-04
editLink: true
head:
  - - meta
    - name: description
      content: Activate Windows 10, 11 and Microsoft Office safely using the KMS method. Official, renewable every 180 days, and file-free.
  - - meta
    - name: keywords
      content: KMS, Windows activation, Office activation, Windows 10, Windows 11, volume license, activate Office 2021, digital license
  - - meta
    - property: og:title
      content: Activate Windows Using the Official KMS Method
  - - meta
    - property: og:description
      content: A complete guide to activating Windows using the secure, renewable KMS method.
---

# KMS Activation guide

### Official KMS Activation Guide — 180 Days, Renewable

> This guide walks you through activating Windows for <Badge type="tip" text="180 Days" /> using Microsoft’s official Key Management Service <Badge type="tip" text="KMS" /> method.
> 
> It is a safe and trusted activation approach for volume-licensed products, and can be renewed indefinitely. <br/>

<div class="rtl">

[من انگلیسی میفهمم ولی متوجه نمیشم ✋🤧😅](/fa/kms-fa)

</div>

# Method 2. Activating Win for 180 days with KMS

::: tip Prerequisites

A stable internet connection.  
Administrator privileges for CMD on your computer.

:::

<br/>

## Step 1. Open Command Prompt as Administrator

### Option A: Using Search Bar <Badge type="danger" text="Recommend" />

1. Click the "Start" button or "Search" icon in the taskbar
2. Type `cmd` or `Command Prompt`
3. Select "Run as administrator" <br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/4465a2d3-6c93-4ee1-bb63-94ab7b8e06ac" alt="run-cmd-as-dmin" width="580px" /></p><br/>

::: tip Another ways to run CMD

::: details Click here to see more details

### Option B: Using the Run box

1. Open the Run Dialog box: Press `Win (⊞) + R` keys Simultaneously
2. Type: `cmd` or `command prompt`
3. press `Ctrl + Shift + Enter` to run as administrator
4. If prompted by User Account Control, click `Yes` <br/>

### Option C: Using Power User Menu

1. Right-click the "Start menu"
2. Select "Windows Terminal (Admin)" on Windows 11 or "Windows PowerShell (Admin)" on Windows 10.  

Or You can visit [this Link][2] to see 8 ways to run **cmd**, And  [This Link][1] to see more than 10 ways For Running PowerShell on your windows.

:::

## Step 2. Install a Generic KMS Client Key

In the Command Prompt window, run the following command.  
You must replace `Your-License-Key` with the key from the table below that matches your Windows edition. <br/>

```reg
slmgr /ipk Your-License-Key
```

::: tip To find your Windows edition

### Option A: Using keyboard shortcuts <Badge type="danger" text="Recommend" />

1. Open the Run dialog box: Press `Win (⊞) + Pause/Break` keys Simultaneously
2. This will open the "About" section in "Settings" directly. and you will see the Edition of your Windows under "Windows specifications". <br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/647ef16b-9208-4ff3-a94b-825ffa99721f" alt="about-system" width="420px" /></p><br/>
  
::: details Click here to see more ways

### Option B: Using System Settings

1. Click the "🪟 Start" button and then click "⚙️ Settings"
2. Click on "💻 System"
3. Scroll down and click on "ℹ️ About"
4. Under `Windows specifications`, you will see the Edition of your Windows. <br/>

### Option C: Using Run Box

1. Open the Run dialog box: Press `Win (⊞) + R` keys Simultaneously
2. Type `winver` or `msinfo32` or `ms-settings:about` and press Enter key.
3. A window will appear showing the Windows version and build number, Done <br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/f764797a-e07f-4c58-b932-bfe7b359a7bd" alt="winver-command" width="480px" /></p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/4c7edc15-1c02-4d7b-ab5f-df70eaff8ad7" alt="winver-response" width="480px" /></p><br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/a6360712-0ad0-4be4-b0a4-01171d293d83" alt="msinfo32-command" width="480px" /></p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/8592c1bd-4a1a-47c1-bd21-0eb17049db31" alt="msinfo32-response" width="480px" /></p><br/>
  
### Option D: Using CMD or PowerShell [^2]  
1. Click on windows "Start" button or "Search" icon
2. Type `cmd` or `Command Prompt`
3. in running terminal, type: `systeminfo` or `systeminfo | findstr /B /C:"OS Name" /B /C:"OS Version"` and press "Enter" key.

<p align="center">
  <img src="https://github.com/user-attachments/assets/16e8f49a-0cec-4836-b841-0cbd9344fbb1" alt="findstdr command" width="420px" /></p><br/>

### Option E: Using CMD like option D

1. Also, run "PowerShell" or "CMD"
2. Type `slmgr /dlv`, and press "Enter" key
3. The `/dlv` command displays the detailed licensing information.
4. Notice the output displays "Home" as seen in the following image:

<p align="center">
  <img src="https://github.com/user-attachments/assets/86925e56-7cac-4b53-8ccf-6addcd799ece" alt="slmgr-command" width="420px" /></p><br/>

:::

Please select one of the "license keys" from the list that "matches your version of Windows" and replace it (via Right-click) with the phrase `Your-License-Key` in the command. <br/>

### Generic Volume License Keys <Badge type="danger" text="GVLK" />

| Windows Edition               | GVLK Key         |
| :---------------------------- | :--------------- |
| TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 | Home             |
| 3KHY7-WNT83-DGQKR-F7HPR-844BM | Home N           |
| 7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH | Home sl [^3]     |
| PVMJN-6DFY6–9CCP6–7BKTT-D3WVR | Home cs [^4]     |
| W269N-WFGWX-YVC9B-4J6C9-T83GX | Pro              |
| MH37W-N47XK-V7XM9-C7227-GCQG9 | Pro N            |
| YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY | Education        |
| 84NGF-MHBT6-FXBX8-QWJK7-DRR8H | Education N      |
| NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 | Pro Education    |
| 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ | Pro Education N  |
| DXG7C-N36C4-C4HTG-X4T3X-2YV77 | Pro for W [^5]   |
| WYPNQ-8C467-V2W6J-TX4WX-WT2RQ | Pro N for W [^6] |
| NPPR9-FWDCX-D2C8J-H872K-2YT43 | Enterprise       |
| DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 | Enterprise N     |
| XKCNC-J26Q9-KFHD2-FKTHY-KD72Y | Team             |
| V3WVW-N2PV2-CGWC3-34QGF-VMJ2C | S                |
| KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W | SE               |

<br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/d5d93702-7865-4552-85d0-6916b1331bc0" alt="Install-KMS-Key" width="580px" /></p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/50c23cad-7690-49fb-bf1c-d1c7cc66f0fe" alt="install-KMS-keyy" width="580px" /></p><br/>
 
::: details An alternative license keys

|            **Key**            |  **Version**   |
| :---------------------------: | :------------: |
| TX9XD-98N7V-6WMQ6-BX7FG-H8Q99 |      Home      |
| 3KHY7-WNT83-DGQKR-F7HPR-844BM |     Home N     |
| 7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH |    Home sl     |
| PVMJN-6DFY6–9CCP6–7BKTT-D3WVR |    Home cs     |
| W269N-WFGWX-YVC9B-4J6C9-T83GX |  Professional  |
| MH37W-N47XK-V7XM9-C7227-GCQG9 | Professional N |
| NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |   Education    |
| 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |  Education N   |
| NPPR9-FWDCX-D2C8J-H872K-2YT43 |   Enterprise   |
| DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |  Enterprise N  |

:::

## Step 3. Set the KMS Server Address

Next, point your system to a public KMS server. Run this command:

```reg
slmgr /skms kms8.msguides.com
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/edd0835f-c314-4ef8-a87d-a33e29f3f7c0" alt="set-kms-server" width="580px" /></p><br/>

## Step 4. Activate Windows

Finally, trigger the activation by running command:

```reg
slmgr /ato
```

<p align="center">
  <img src="https://github.com/user-attachments/assets/95e014e5-8946-4036-84ca-77ebb6122b1b" alt="active-windows" width="580px" /></p><br/>

## Step 5. Check Activation Status

<Badge type="tip" text="You're all set!!" />

To check the activation status of "Windows 10" Navigate to:  
Settings > Update & Security > Activation. [^7]

To check the activation status of "Windows 11" Navigate to:  
Settings > System > Activation. [^8]

<p align="center">
  <img src="https://github.com/user-attachments/assets/da52f1bb-79c9-45db-bade-a0f56cd0a739" alt="activated" width="580px" /></p><br/>

### Troubleshooting

- **Error 0xC004F074:** This usually means your internet connection is unstable or the server is busy. Ensure you are online and try the `slmgr /ato` command again.
- **Method Not Working?** If you're still having trouble, try the **HWID method** from the [Main guide](./index).
  - For additional help, visit the **[Discussion Section][3]** Or send [Email][4] Directly to me. <br/>

<p align="left"><Huge> Be curious 🤍</Huge></p><br/>

## About Hotkeys <Badge type="danger" text="For enthusiasts" />

::: details Use the hotkeys to open default programs in the Win+X Menu

**Power user menu** is a brief menu listing some advanced system tools like event viewer, device manager, disk management, computer management, task manager, etc.  
So, you can quickly access those tools through the Power user menu.

<p align="center">
  <img src="https://github.com/user-attachments/assets/7fa52188-2ac2-4b4d-9600-cf3f92e11d3d" alt="windows-plus-x-menu" width="480px" /></p><br/>
  
The default programs in the Power User Menu have a corresponding hotkey. Familiarity with the hotkeys of common programs can save a lot of time and improve efficiency.  
For example:

- Press `Win (⊞) + X` opens the **Power User Menu** (Win+X Menu).
- The second keypress (e.g., `F`, `B`, `U`) selects the corresponding program.
- For shutdown/restart options, `U` opens the submenu, followed by `I`, `S`, `U`, or press `R` for reatart system.

The following are the hotkeys corresponding to each program:

| Keyboard Shortcut            | Program                  |
| ---------------------------- | ------------------------ |
| `Windows + X`, then `F`      | Apps and Features        |
| `Windows + X`, then `B`      | Mobility Center          |
| `Windows + X`, then `O`      | Power Options            |
| `Windows + X`, then `V`      | Event Viewer             |
| `Windows + X`, then `Y`      | System                   |
| `Windows + X`, then `M`      | Device Manager           |
| `Windows + X`, then `W`      | Network Connections      |
| `Windows + X`, then `K`      | Disk Management          |
| `Windows + X`, then `G`      | Computer Management      |
| `Windows + X`, then `A`      | Windows Terminal (Admin) |
| `Windows + X`, then `T`      | Task Manager             |
| `Windows + X`, then `N`      | Settings                 |
| `Windows + X`, then `E`      | File Explorer            |
| `Windows + X`, then `S`      | Search                   |
| `Windows + X`, then `R`      | Run                      |
| `Windows + X`, then `U`, `I` | Sign out                 |
| `Windows + X`, then `U`, `S` | Sleep                    |
| `Windows + X`, then `U`, `U` | Shut Down                |
| `Windows + X`, then `U`, `R` | Restart                  |
| `Windows + X`, then `D`      | Desktop                  |

:::

<hr/><br/> 

[^1]: 10 Ways to run PowerShell in windows [read here][1].

[^2]: Another easiest way to run **PowerShell** is **Using Power User Menu**. <br/> - 1. **Right-click** the **Windows Start** icon on the Taskbar to open the menu containing shortcuts to frequently used tools. Also you can open this menu with **`Win (⊞) + x`**. <br/> - 2. Select **Windows Terminal (admin)** at windows 11 Or **Windows PowerShell (admin)** at Windows 10.

[^3]: Home Single language version.

[^4]: Home Country Specific version.

[^5]: Professional for Workstations.

[^6]: Professional N for Workstations.

[^7]: To check the activation status of Windows 10, navigate to Settings → Update & Security → Activation. You will see your activation status listed there. If Windows is activated, you should see "Activated" with a green checkmark.

[^8]: To check the activation status of Windows 11, open Settings by clicking the Start button and then selecting Settings → System → Activation. The activation status will be displayed, showing whether Windows is activated, along with details about the activation method and any linked Microsoft account.

[1]: https://www.minitool.com/news/open-windows-11-powershell.html
[2]: https://www.minitool.com/news/open-command-prompt-windows-11.html
[3]: https://github.com/NiREvil/windows-activation/discussions/
[4]: mailto:diana.clk01@gmail.com
[rainbow]: https://github.com/NiREvil/vless/assets/126243832/1aca7f5d-6495-44b7-aced-072bae52f256
