---
layout: doc
outline: deep
title: 'Manual HWID Activation'
description: 'A step-by-step guide for manually activating Windows 10/11 via HWID, for users who prefer not to use automated scripts.'
date: 2024-02-11
editLink: true
---

# Manual HWID Activation for Windows 10/11

### Prefer to activate Windows yourself without using scripts or automated tools? This guide walks you through the HWID activation process, step by step.

::: info supported

HWID activation is supported **only** on Windows 10 and 11.

:::

<br/>

## How to Activate Manually

> Make sure you have an internet connection before doing anything

### Step 1. Identify Your Windows Edition

::: tip To find your Windows edition

#### Option A: Using keyboard shortcuts <Badge type="danger" text="Recommend" />

1. Open the Run dialog box: Press `Win (⊞) + Pause/Break` keys Simultaneously
2. This will open the "About" section in "Settings" directly. and you will see the Edition of your Windows under "Windows specifications" <br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/647ef16b-9208-4ff3-a94b-825ffa99721f" alt="about-system" width="420px" /></p><br/>
  
::: details Click here to see more ways

#### Option B: Using System Settings

1. Click the "🪟 Start" button and then click "⚙️ Settings"
2. Click on "💻 System"
3. Scroll down and click on "ℹ️ About"
4. Under `Windows specifications`, you will see the Edition of your Windows <br/>

#### Option C: Using Run Box

1. Open the Run dialog box: Press `Win (⊞) + R` keys Simultaneously
2. Type `winver` or `msinfo32` or `ms-settings:about` and press Enter key
3. A window will appear showing the Windows version and build number, Done <br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/f764797a-e07f-4c58-b932-bfe7b359a7bd" alt="winver-command" width="480px" /></p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/4c7edc15-1c02-4d7b-ab5f-df70eaff8ad7" alt="winver-response" width="480px" /></p><br/>

<p align="center">
  <img src="https://github.com/user-attachments/assets/a6360712-0ad0-4be4-b0a4-01171d293d83" alt="msinfo32-command" width="480px" /></p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/8592c1bd-4a1a-47c1-bd21-0eb17049db31" alt="msinfo32-response" width="480px" /></p><br/>
  
#### Option D: Using CMD or PowerShell [^2]  
1. Click on windows "Start" button or "Search" icon
2. Type `cmd` or `Command Prompt`
3. in running terminal, type: `systeminfo` or `systeminfo | findstr /B /C:"OS Name" /B /C:"OS Version"` and press "Enter" key.

<p align="center">
  <img src="https://github.com/user-attachments/assets/16e8f49a-0cec-4836-b841-0cbd9344fbb1" alt="findstdr command" width="420px" /></p><br/>

#### Option E: Using CMD like option D

1. Also, run "PowerShell" or "CMD"
2. Type `slmgr /dlv`, and press "Enter" key
3. The `/dlv` command displays the detailed licensing information.
4. Notice the output displays "Home" as seen in the following image:

<p align="center">
  <img src="https://github.com/user-attachments/assets/86925e56-7cac-4b53-8ccf-6addcd799ece" alt="slmgr-command" width="420px" /></p><br/>

:::
### Step 2. Download the Correct Ticket File  
From the [table below](#product-keys-and-ticket-downloads), download the ticket file that matches your Windows edition.

### Step 3. Copy the Ticket File
Move the downloaded file to this address:  
`C:\ProgramData\Microsoft\Windows\ClipSVC\GenuineTicket`

::: danger Important

The `ProgramData` folder is hidden. Paste the path above directly into the Windows Explorer address bar to access it.  

:::

### Step 4. Open Activation Settings
Go to **Settings > Activation**, and click `Change product key`

### Step 5. Enter the Product Key  
Copy the product key from the table below (matching your edition) and paste it when prompted.

### Step 6. Complete Activation  
Wait a few moments, Windows should activate automatically. <br/>

### Step 7. Check Windows Activation Status

To check the activation status of "Windows 10" Navigate to:  
Settings > Update & Security > Activation. [^2]

To check the activation status of "Windows 11" Navigate to:  
Settings > System > Activation. [^3]

<p align="center">
  <img src="https://github.com/user-attachments/assets/da52f1bb-79c9-45db-bade-a0f56cd0a739" alt="activated" width="540px" /></p><br/>

::: info Troubleshooting

If you see error `0x803fa067` when entering the product key, temporarily disconnect from the internet and try again.  
Once you’ve entered the key and it's accepted, reconnect to the internet to finish activation.  

:::

<hr/><br/>

## Product Keys and Ticket Downloads

| Edition                               | Product Key                   | Ticket File                                                                                                                     |
| ------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Education                             | YNMGQ-8RYV3-4PGQ3-C8XTP-7CFBY | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Education.xml)                             |
| Education N                           | 84NGF-MHBT6-FXBX8-QWJK7-DRR8H | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Education.N.xml)                           |
| Enterprise                            | XGVPP-NMH47-7TTHJ-W3FW7-8HV2C | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.xml)                            |
| Enterprise N                          | 3V6Q6-NQXCX-V8YXR-9QCYV-QPFCT | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.xml)                          |
| Enterprise LTSB 2015                  | FWN7H-PF93Q-4GGP8-M8RF3-MDWWW | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSB.2015.xml)                  |
| Enterprise LTSB 2016                  | NK96Y-D9CD8-W44CQ-R8YTK-DYJWX | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSB.2016.xml)                  |
| Enterprise LTSC 2019                  | 43TBQ-NH92J-XKTM7-KT3KK-P39PB | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.LTSC.2019.xml)                  |
| Enterprise N LTSB 2015                | NTX6B-BRYC2-K6786-F6MVQ-M7V2X | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.LTSB.2015.xml)                |
| Enterprise N LTSB 2016                | 2DBW3-N2PJG-MVHW3-G7TDK-9HKR4 | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Enterprise.N.LTSB.2016.xml)                |
| Home                                  | YTMG3-N6DKC-DKB77-7M9GH-8HVX7 | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.xml)                                  |
| Home N                                | 4CPRK-NM3K3-X6XXQ-RXX86-WXCHW | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.N.xml)                                |
| Home China                            | N2434-X9D7W-8PF6X-8DV9T-8TYMD | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.China.xml)                            |
| Home Single Language                  | BT79Q-G7N6G-PGBYW-4YWX6-6F4BT | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Home.Single.Language.xml)                  |
| IoT Enterprise                        | XQQYW-NFFMW-XJPBH-K8732-CKFFD | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.xml)                        |
| IoT Enterprise Subscription           | P8Q7T-WNK7X-PMFXY-VXHBG-RRK69 | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.Subscription.xml)           |
| IoT Enterprise LTSC 2021              | QPM6N-7J2WJ-P88HH-P3YRH-YY74H | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.2021.xml)              |
| IoT Enterprise LTSC 2024              | CGK42-GYN6Y-VD22B-BX98W-J8JXD | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.2024.xml)              |
| IoT Enterprise LTSC Subscription 2024 | N979K-XWD77-YW3GB-HBGH6-D32MH | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/IoT.Enterprise.LTSC.Subscription.2024.xml) |
| Pro                                   | VK7JG-NPHTM-C97JM-9MPGT-3V66T | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.xml)                                   |
| Pro N                                 | 2B87N-8KFHP-DKV6R-Y2C8J-PKCKT | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.N.xml)                                 |
| Pro Education                         | 8PTT6-RNW4C-6V7J2-C2D3X-MHBPB | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.Education.xml)                         |
| Pro Education N                       | GJTYN-HDMQY-FRR76-HVGC7-QPF8P | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.Education.N.xml)                       |
| Pro for Workstations                  | DXG7C-N36C4-C4HTG-X4T3X-2YV77 | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.for.Workstations.xml)                  |
| Pro N for Workstations                | WYPNQ-8C467-V2W6J-TX4WX-WT2RQ | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Pro.N.for.Workstations.xml)                |
| S                                     | V3WVW-N2PV2-CGWC3-34QGF-VMJ2C | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Cloud.S.xml)                               |
| S N                                   | NH9J3-68WK7-6FB93-4K3DF-DJ4F6 | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Cloud.S.N.xml)                             |
| SE                                    | KY7PN-VR6RX-83W6Y-6DDYQ-T6R4W | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/CloudEdition.SE.xml)                       |
| SE N                                  | K9VKN-3BGWV-Y624W-MCRMQ-BHDCD | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/CloudEdition.SE.N.xml)                     |
| Team                                  | XKCNC-J26Q9-KFHD2-FKTHY-KD72Y | [Download](https://github.com/massgravel/hwid-kms38-tickets/releases/latest/download/Team.xml)                                  |
<br/>

::: tip Tip 

Looking for an easier solution? Try our [automatic activation tool](./index).

:::

<hr/><br/>

[^1]: Another easiest way to run **PowerShell** is **Using Power User Menu**. <br/> - 1. **Right-click** the **Windows Start** icon on the Taskbar to open the menu containing shortcuts to frequently used tools. Also you can open this menu with `Win (⊞) + x`. <br/> - 2. Select **Windows Terminal (admin)** at windows 11 Or **Windows PowerShell (admin)** at Windows 10.

[^2]: To check the activation status of Windows 10, Navigate to Settings → Update & Security → Activation. You will see your activation status listed there. If Windows is activated, you should see "Activated" with a green checkmark.

[^3]: To check the activation status of Windows 11, Navigate to Settings → System → Activation. The activation status will be displayed, showing whether Windows is activated, along with details about the activation method and any linked Microsoft account.

