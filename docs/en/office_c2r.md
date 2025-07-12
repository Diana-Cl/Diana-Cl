---
layout: doc
outline: deep
title: 'Office C2R Custom Install'
description: 'office custom installation method'
date: 2025-05-08
editLink: true
---

# Office C2R Custom Install

::: info Note
- If the below guide is confusing to you then the simplest option for you is to use [Office C2R Installer][1].     
- Retail Office (e.g. O365) has latest feature updates and Volume Office (e.g. ProPlus 2024) doesn't.    
- Please note that in the official C2R office custom installation method, there is no ISO or any one-click solution available. Below is the simplest guide to installing customized office.    

:::

<br/>  

## Custom Installation Guide

-   If Office was ever installed before,
	- Uninstall Office with the App and Features option in Windows settings.
	- Run `OfficeScrubber.cmd` file from [Office Scrubber][2] by abbodi1406 and select `[R] Remove all Licenses` option.
-   Create a new folder named `Office` in `C:\` drive, example `C:\Office`
-   Download [Office Deployment Tool][3] (ODT)
-   Copy the downloaded `setup.exe` file to that Office folder which you created, example `C:\Office\setup.exe`
-   Go to [config.office.com][4]
-   If you want Retail Office then select `Microsoft 365 Apps for enterprise` in the office suites section.
-   If you want Volume Office then select `Office LTSC Professional Plus 2024 - Volume License` in the office suites section. (Don't select the SPLA version)
-   You can add Visio and Project apps if you need them, but ensure that [Project][5] / [Visio][6] supported language is selected.
-   If you are planning to download Office files and install them later, then ensure that you select a specific version number instead of the latest in the `Select the version` option.
-   You need to configure the options till "Language" section only. You can leave the rest as default.
-   Click on the export button, select "Keep Current Settings" option and it will download a file named `Configuration.xml` (If the name is something else then change it to `Configuration.xml`
-   Copy the downloaded `Configuration.xml` file to that Office folder which you created, example `C:\Office\Configuration.xml`

-   Open the **command prompt** (not Powershell) **as admin** and run the below commands.  
    ```         
    cd /d C:\Office\
    setup.exe /configure Configuration.xml
    ```

**It will now install Office.**

-	Ensure that you have selected a specific version number in the configuration as per the above steps.
-   Open the **command prompt** (not Powershell) **as admin** and run the below commands  
	- Download Office files
    ```         
    cd /d C:\Office\
    setup.exe /download Configuration.xml
    ```
	- Install Office from the downloaded Office files (can be done Offline)
	```
	cd /d C:\Office\
    setup.exe /configure Configuration.xml
    ```

<br/>

::: tip **Common errors**  

- Make sure you are entering those commands in command prompt (CMD) as administrator privilege.  
 
- File name extensions are hidden by default in Windows. Due to that, some people might incorrectly rename `Configuration.xml` to `Configuration.xml.xml` because `.xml` was not visible.   

:::

<br/>  

### Alternative Methods  
-  [YAOCTRU][7] (Office Downloader) & [YAOCTRI][8] (Office Installer)
-  [Office Tool Plus][9].  

[1]: https://gravesoft.dev/office_c2r_links
[2]: https://github.com/abbodi1406/WHD/raw/master/scripts/OfficeScrubber_13.zip
[3]: https://officecdn.microsoft.com/pr/wsus/setup.exe
[4]: https://config.office.com/deploymentsettings
[5]: https://learn.microsoft.com/en-us/projectonline/supported-languages-for-project-online  
[6]: https://support.microsoft.com/en-us/office/display-languages-supported-in-the-visio-desktop-app-a921983e-fd5d-45ef-8af1-cedf70c53d75
[7]: https://github.com/abbodi1406/WHD/raw/master/scripts/YAOCTRU_v10.0.zip  
[8]: https://github.com/abbodi1406/WHD/raw/master/scripts/YAOCTRI_v11.1.zip  
[9]: http://otp.landian.vip/  
