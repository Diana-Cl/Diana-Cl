---
layout: doc
outline: deep
title: 'Change Edition Issues'
description: 'During a Home to Pro upgrade, the script may show some errors'
date: 2024-04-05
editLink: true
---

# Change Edition Issues

## Error 0x80070490

- During a Home to Pro upgrade, the script may show the below error:
```
Exception calling "_DismSet Edition" with "6" argument(s): "Element not found. (Exception from HRESULT: 0x80070490)"
```
- This issue often appears when .NET Framework 3.5 is installed.
- To solve this, it needs to be disabled. To do that, open Command Prompt as admin and enter
  `DISM /Online /English /Disable-Feature /FeatureName:"NetFx3"`
- Once that's done, try to change the edition again.
- After the edition change, you can enable .NET 3.5 again:
  `DISM /Online /English /Enable-Feature /FeatureName:"NetFx3"`

---

## Other Errors

::: danger Troubleshooting

- Restart the system and then try to change the edition again.
- If it's still not resolved then follow [this guide][1].

- If you have any questions, first review the [**FAQ section**](./faq) - your answer will most likely be there.

- If your issue persists - [**Contact us**](./troubleshoot).

:::

[1]: https://gravesoft.dev/in-place_repair_upgrade
