```markdown
---
layout: doc
outline: deep
lang: "en-US"
dir: ltr
title: "ZiZifn Worker Setup Guide"
description: "Step-by-step tutorial for forking the project, obtaining Cloudflare credentials, and automated Worker deployment with GitHub Actions, finally generating VLESS proxy configs"
date: 2026-07-04
editLink: true
head:
  - - meta
    - name: description
      content: Complete guide for deploying VLESS proxy based on WebAssembly and Rust on Cloudflare Workers using GitHub Actions
  - - meta
    - name: keywords
      content: Serverless Runtime, cloudflare worker, vless proxy, github actions, rust wasm, zizifn, wrangler deploy
---

## Comprehensive Guide to Setup and Auto-Deploy VLESS Proxy Config
**Step-by-step tutorial for forking, configuring security secrets, and running GitHub Actions** {#serverless-runtime}

<br/>
<p align="center">
  <img src="/zizifn/pic.png" alt="ZiZifn Main Page" >
</p><br><br/>

The **zizifn** project is a secure proxy configuration based on the VLESS-WS-TLS/TCP protocol, developed with Rust and WebAssembly (Wasm) architecture, and deployed on Cloudflare Workers using the Wrangler tool. To implement this project on your personal account, follow the steps below carefully.


::: info `Error 1101 and 1102`

In this new structure, there is no need to add meaningless codes or heavy obfuscation!
:::

<br/>

<h2>📚 Table of Contents</h2>

[[toc]]

<br/> 

## Step 1: Fork the Repository {#fork}
In the first step, you need to clone a copy of this project to your GitHub account.

1. Go to the main repository page [(Link)][1]

2. Click the **Fork** icon (red arrow) at the top of the page.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic1.png" alt="How to fork the project on GitHub" width="1080px" />
</p>
:::

<br/>

3. On the next page, you can set a custom name for your fork; otherwise, click the **Create fork** button to transfer the project to your account.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic2.png" alt="How to fork the project on GitHub" width="1080px" />
</p>
:::

<br/>

## Step 2: Obtain API Token from Cloudflare {#token-time}
For automated deployment, GitHub Actions needs to connect to your Cloudflare account. We need two essential factors:

<Ltr>

- CloudFlare Account ID
- CloudFlare API Token

</Ltr>

::: tip **Note**

Previously, to get the Account ID, we had to go to the Workers & Pages section and copy it from the bottom of the page. But now, when creating the token, the Account ID is also displayed, so we copy it from there.
:::

<br/>

### Create Token with Worker Edit Permissions {#api-token}
1. Log in to your Cloudflare dashboard.

- [Login to Cloudflare Account][2]
- [Create Cloudflare Account][3]

::: details Click to view.

::: tip **Note**

Recently, Cloudflare doesn't allow creating accounts with fake emails. You can create one, but it won't be verified. Even if you try ten, thirty, or fifty times through the verification email they send, it will keep asking you to verify. So we recommend using G-Mail, Outlook, hotmail, protonmail, and similar reputable services to create a Cloudflare account.
:::

<br/>

2. After logging into your Cloudflare account, open the left menu from the top of the page, type **api** in the **Quick search** box, and then select **Account API Tokens** from the search results.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic3.png" alt="Search for API token" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic4.png" alt="Select account API tokens" width="1080px" />
</p>
:::

<br/>

3. Click the **Create Token** button.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic5.png" alt="Click on Create token" width="1080px" />
</p>
:::

<br/>

4. Among the ready-made templates (red arrow), click on the **Edit Cloudflare Workers** option.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic6.png" alt="Change token template" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic7.png" alt="Select edit worker template" width="1080px" />
</p>
:::

<br/>

5. In the **Token Expiration** section, set a time frame for your token expiration according to your needs, then click on the view and create token option.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic8.png" alt="Token expiration time" width="1080px" />
</p>
:::

::: tip **Note**

Please note that after the token expires, your worker will not stop functioning. However, you will no longer be able to redeploy the project through GitHub. In that case, you will need to create a new token and replace the old one in your GitHub repository settings.
:::

<br/>

6. On this page, copy the generated token (this token is displayed only once, so save it somewhere if needed). Also, the Account ID is displayed at the top of this page. Copy it as well since you'll need it. After confirming you've copied both, click the **confirm** button to close the window.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic9.png" alt="Copy Cloudflare ID and token" width="1080px" />
</p>
:::

<br/>

## Step 3: Configure Secrets in GitHub {#enviroments}
Now we need to introduce the obtained information to your forked repository on GitHub so that the action can authenticate with your Cloudflare account.

1. In your forked repository, go to the **Settings** tab.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic10.png" alt="Go to repo settings" width="1080px" />
</p>
:::

<br/>

2. From the menu, click on **Secrets and variables** and then select **Actions** from the submenu.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic11.png" alt="Select Actions" width="1080px" />
</p>
:::

<br/>

3. Click the **New repository secret** button and define the variables according to the table below:

<br/>

| Secret name | Status | Default value | Description |
|---|:---:|---|---|
| `CLOUDFLARE_API_TOKEN` | ✔️ Required | - | Your Cloudflare token with permission to edit workers. |
| `CLOUDFLARE_ACCOUNT_ID` | ✔️ Required | - | Your Cloudflare account ID. |
| `UUID` | ⚙️ Optional | `be0ff9df-1468-41a0-8865-796d1c6800db` | Your custom UUID (version 4). |
| `PROXYIP` | ⚙️ Optional | `di.nscl.ir` | Proxy IP for routing traffic to services behind Cloudflare. |

<br/>

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic12.png" alt="Create secret 1" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic13.png" alt="Create secret 2" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic14.png" alt="Final secret creation" width="1080px" />
</p>
:::

<br/>

::: danger **Important Note**
Both of the first variables (Cloudflare ID and token) are required, meaning without obtaining and setting them in GitHub secrets, deploying the worker won't be possible. However, the next two variables, `UUID` and `PROXYIP`, are optional because default values are set in the code for both. However, it is highly recommended to copy a custom ID from [(this site)][4] and use it instead of the default ID.
<br/>

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic15.png" alt="Get UUID" width="1080px" />
</p>

For other Proxy IPs, you can use this [Proxy Repository][5].
:::

<br/>	 

## Step 4: Enable and Run GitHub Action {#manual-deploy}
GitHub by default disables running actions on forked repositories. You need to enable it once and then run it.

1. Go to the **Actions** tab at the top of your repository.

2. Click the green button

**"I understand my workflows, go ahead and enable them"**

to allow actions to run.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic16.png" alt="Enable action" width="1080px" />
</p>
:::

<br/>

3. According to the screenshot below, first click on **All workflows** from the left side, then select the **Deploy Worker** workflow.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic17.png" alt="Select Deploy" width="1080px" />
</p>
:::

<br/>

4. On the right side of the page, a narrow bar with the **Run workflow** button will appear. Click on it.

5. In the pop-up form that opens, you can optionally set new `Proxy IP` or `UUID` values exceptionally for this specific run. (If left empty, the secrets or system defaults will be used. It's recommended to put both in the secrets.)

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic18.png" alt="RUN" width="1080px" />
</p>
:::

<br/>

6. Finally, click the green **Run workflow** button inside the form.   
After thirty to sixty seconds, a green checkmark will appear next to Deploy, indicating the process was successful.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic19.png" alt="Deploy-success" width="1080px" />
</p>
:::

<br/>

::: tip Important Note for One-Time Variables

Values entered in the **Run workflow** pop-up form are completely one-time use and won't be saved in the repository settings. This feature is useful for quickly testing different Proxy IPs or changing the UUID temporarily.
:::

<br/>

::: info **How It Works**

After clicking the **Run workflow** button, GitHub starts a cloud server, downloads and installs the Rust compiler (`cargo`) and `wasm-pack` tool, compiles the code, and then automatically creates a new Worker named `zr-wasm` in your Cloudflare account.

If you wish to change the Worker name, you can do so from the first line of the [wrangler.toml][6] file in the repository.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic20.png" alt="worker name" width="1080px" />
</p>
:::

<br/>


## How to Use

### Access the Admin Panel
After deployment, simply add your UUID to the end of your Worker URL:

<Ltr>

`https://Your-Worker-URL/Your-UUID`

</Ltr>

For example:

<Ltr>

`https://0x00.workers.dev/be0ff9df-1468-41a0-8865-796d1c6800db`

</Ltr>

> If you haven't set the UUID variable and the code default is used, the value is:
>
> ```reg
> be0ff9df-1468-41a0-8865-796d1c6800db
```

<br/> 

Get Subscription Link

Your subscription link contains dozens of configs with clean Cloudflare IPs. Use the keys inside the panel to get it automatically.

Or if you need the subscription address manually to use in other clients, simply long-touch (press and hold) on one of the Import to ... buttons. The browser will then ask for permission to copy the link (only once, forever). After confirming the permission request by clicking Allow, the subscription link for that specific client will be copied for you.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic21.png" alt="Copy Subscription link" width="1080px" />
</p> <br/>

Sample subscription link:

<Ltr>

https://0x00.workers.dev/xray/be0ff9df-1468-41a0-8865-796d1c68000b

https://0x00.workers.dev/sb/be0ff9df-1468-41a0-8865-796d1c68000b

</Ltr>

:::

<br/>

::: tip Difference between xray and sb

· xray path:

Suitable for clients that use the Xray core, such as:
v2rayNG, MahsaNG, Hiddify, Nekoray, v2rayN, Streisand, Napsternet, NPVT, Happ, and etc.

<br/>

· sb path:

Suitable for clients that use the SingBox core, such as:
Nekobox, Exclave, Singbox, Husi, Karing, and etc.

<br/>

· Clean Cloudflare IP

The IPs in the configs are sourced from the clean IP repository [NiREvil/vless][7]. IP update cycle: every 4 hours.

:::

<br/> 

::: info Enhanced Configs

Recently, patterns have been suggested to address disruptions on Iran's internet and the upload speed weakness in configs built with Cloudflare Workers by adding two parameters to configs:

· Final Mask
· Cypher suites

Additionally, to further optimize config performance, they have published a fork of v2rayNG called PattNG on GitHub. Therefore, alongside normal configs for v2rayNG, we will have another subscription called Enhanced, which will add configs with these new parameters pre-applied to your client. First, download and install the [PattNG] client from the patterniha GitHub repository, then from your panel, click on Import to v2rayNG and select Enhanced.

[PattNG GitHub Link]

<br/>

<p align="center">
  <img src="/zizifn/pic22.png" alt="PattNG" width="1920px" />
</p>

<br/>

::: info

<Ltr>

Deployment Engine

· GitHub Actions workflow runner (Ubuntu-24.04 VM)
· Cloudflare Wrangler Action v3
· Many thanks to [NiREvil] and [zizifn]

</Ltr>

:::

<br/>

::: danger Security Warning

::: details Click to view important security notes

Never define sensitive Cloudflare tokens in manual input text fields!

Values entered manually in the form are stored in GitHub's log history and will be visible to everyone if your repository is public. Sensitive Cloudflare secrets must be registered through the path mentioned in Step 3 (Repository Secrets section) so that GitHub encrypts them.

:::

[1]: https://github.com/NiREvil/zizifn
[2]: https://dash.cloudflare.com/login
[3]: https://dash.cloudflare.com/sign-up
[4]: https://www.uuidgenerator.net
[5]: https://github.com/NiREvil/vless/blob/main/sub/ProxyIP.md
[6]: https://github.com/NiREvil/zizifn/blob/main/wrangler.toml
[7]: https://github.com/NiREvil/vless/blob/main/Cloudflare-IPs.json
[zizifn]: https://github.com/zizifn/edgetunnel 
[NiREvil]: https://github.com/NiREvil
[PattNG]: https://github.com/patterniha/v2rayNG/releases
