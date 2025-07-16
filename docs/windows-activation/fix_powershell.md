---
layout: doc
outline: deep
title: 'Fix PowerShell'
description: 'Scripts may show an error related to Powershell not working.'
date: 2024-04-12
editelink: true
---

# Fix PowerShell

### Scripts may show an error related to Powershell not working.

<br><br/>

## ConstrainedLanguage

-  If the script is showing `ConstrainedLanguage` in error output then open the `ConstrainedLanguage`
- Open the <Badge type="danger" text="Command Prompt" /> as an <Badge type="info" text="Administrator" /> and ENTER:

```reg

reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v "__PSLockdownPolicy" /f

```

----

> - Retry the script, the error should be fixed.

::: danger Troubleshooting

If you have any questions, first review the [**FAQ section**](./faq) - your answer will most likely be there.
If your issue persists - [**contact us**](./troubleshoot).

:::
