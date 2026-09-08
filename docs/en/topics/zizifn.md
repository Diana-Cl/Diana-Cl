---
layout: doc
outline: deep
lang: "en-US"
dir: ltr
title: "ZiZifn Worker Setup Guide"
description: "Step-by-step tutorial on forking the repository, retrieving Cloudflare credentials, deploying automatically with GitHub Actions, and generating VLESS proxy configurations."
date: 2026-10-07
category: "Tools & Servers"
icon: "⚙️"
editLink: true
head:
  - - meta
    - name: description
      content: Complete tutorial for deploying a WebAssembly & Rust-based VLESS proxy on Cloudflare Workers using GitHub Actions.
  - - meta
    - name: keywords
      content: Serverless Runtime, cloudflare worker, vless proxy, github actions, rust wasm, zizifn, wrangler deploy
---

# Comprehensive Deployment & Setup Guide

**Step-by-step guide to forking, configuring security secrets, running GitHub Actions, and obtaining VLESS subscription links** {#serverless-runtime}

<br/>
<p align="center">
  <img src="/zizifn/pic.png" alt="Zizifn-Main-Page" >
</p><br/>

The **zizifn** project is a secure proxy configuration based on the VLESS-WS-TLS/TCP protocol. Specific core components are developed in Rust and compiled to WebAssembly (Wasm), running seamlessly on Cloudflare Workers using Wrangler. To deploy this project on your personal Cloudflare account, follow the step-by-step instructions below.

> **Cloudflare Errors 1101 and 1102**  
>  
> In this new architecture, there is no need for junk code inside JavaScript, heavy obfuscation, or function renaming!  
> The critical section that triggered these errors has been completely rewritten in Rust, compiled into Wasm, and deployed efficiently.

<br/>

<h2>📚 Table of Contents</h2>

[[toc]]

<br/> 

## Step 1: Forking the Repository {#fork}

First, you need to create a copy of this repository on your GitHub account.

1. Go to the project's main repository page [(Link)][1].

2. Click on the **Fork** button at the top right of the page (marked with a red arrow).

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic1.png" alt="How to fork the repository on GitHub" width="1080px" />
</p>
:::

<br/>

3. On the next page, you can optionally rename your fork; otherwise, leave the default name and click **Create fork** to transfer the project to your account.

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic2.png" alt="How to fork the repository on GitHub" width="1080px" />
</p>
:::

<br/>

## Step 2: Retrieving API Token from Cloudflare {#token}

For automated deployment, GitHub Actions requires access to your Cloudflare account. We need two critical credentials:  

- Cloudflare Account ID

- Cloudflare API Token

> 
> Previously, you had to navigate to the Workers & Pages dashboard and copy the Account ID from the bottom of the page. Now, it is displayed directly upon token creation, so we can copy it right from there.
>

<br/>

### Creating a Token with Worker Edit Permissions {#api}

1. Log in to your Cloudflare dashboard.

[⚙️ Log in to Cloudflare][2]

[🪩 Create a Cloudflare Account][3]

2. Open the navigation menu on the left, type **api** in the **Quick search** field, and select **Account API Tokens** from the search suggestions.

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic3.png" alt="Search for API tokens" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic4.png" alt="Select account API tokens" width="1080px" />
</p>
:::

<br/>

3. Click on the **Create Token** button.

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic5.png" alt="Click on Create token" width="1080px" />
</p>
:::

<br/>

4. Under the template section, find **Edit Cloudflare Workers** (marked with a red arrow) and click **Use template**.

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic6.png" alt="Change token template" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic7.png" alt="Select Edit Cloudflare Workers template" width="1080px" />
</p>
:::

<br/>

5. Under **Token Expiration**, choose a preferred expiration period based on your requirements, then proceed to the summary and creation step.

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic8.png" alt="Token expiration time" width="1080px" />
</p>

> Note: When your token expires, your deployed Worker will NOT stop working. However, you will no longer be able to deploy updates via GitHub Actions until you generate a new token and update your repository secrets.  
:::

<br/>

6. Copy the generated API token. **This token is displayed only once**, so store it securely if you plan to use it elsewhere. Your **Account ID** is also displayed at the top of this page; make sure to copy it as well. Once both are saved, click **Confirm** to close the window.

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic9.png" alt="Copy Cloudflare ID and Token" width="1080px" />
</p>
:::

<br/>

## Step 3: Configuring GitHub Secrets {#env} 

Now, introduce the retrieved credentials to your forked repository so that GitHub Actions can authenticate with your Cloudflare account.

1. In your forked repository, navigate to the **Settings** tab.

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic10.png" alt="Go to repo settings" width="1080px" />
</p>
:::

<br/>

2. In the left sidebar, click on **Secrets and variables**, then select **Actions**.

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic11.png" alt="Select Actions" width="1080px" />
</p>
:::

<br/>

3. Click **New repository secret** and define the secrets based on the table below:  

| Secret Name | Status | Default Value | Description |
|---|:---:|---|---|
| `CLOUDFLARE_API_TOKEN` | ✔️ Required | - | Your Cloudflare API Token with Worker edit permissions. |
| `CLOUDFLARE_ACCOUNT_ID` | ✔️ Required | - | Your Cloudflare Account ID. |
| `UUID` | ⚙️ Optional | Auto-generated during workflow execution if left blank | Your custom [UUID][4] (Version 4). |
| `PROXYIP` | ⚙️ Optional | `di.nscl.ir` | Proxy IP used for routing traffic through Cloudflare-backed services. |

<br/>

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic12.png" alt="Create secret 1" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic13.png" alt="Create secret 2" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic14.png" alt="Create final secret" width="1080px" />
</p>
:::

<br/>

::: danger Important Note
Both `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` are mandatory; the Worker cannot be deployed without them. The other two parameters (`UUID` and `PROXYIP`) are optional. If omitted, a default Proxy IP is embedded into the code, and GitHub Actions will automatically generate a random [UUID][4] for your Worker. To find the generated UUID, check your Cloudflare dashboard, navigate to the deployed Worker, and inspect its environment variables under the Settings tab.

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic15.png" alt="View assigned UUID" width="1080px" />
</p>

> To find alternative clean Proxy IPs, refer to this [Proxy Repository][5].
:::

<br/>	 

## Step 4: Enabling and Running GitHub Actions {#manual-deploy}

By default, GitHub disables Actions on forked repositories. You must manually enable and trigger the workflow once.

1. Go to the **Actions** tab at the top of your repository.

2. Click on the green button:

**"I understand my workflows, go ahead and enable them"**  

to authorize workflow runs.

::: details View Screenshot  
<p align="center">
  <img src="/zizifn/pic16.png" alt="Enable Actions" width="1080px" />
</p>
:::

<br/>

3. From the left sidebar, click **All workflows**, then select the **Deploy Worker** workflow.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic17.png" alt="Select Deploy" width="1080px" />
</p>
:::

<br/>

4. On the right side of the screen, click the **Run workflow** dropdown button.

5. In the popup form, you can optionally override `Proxy IP`, `UUID`, and `Worker name` for this specific execution. (Leaving them empty will fall back to your repository secrets or default values).

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic18.png" alt="Run workflow" width="1080px" />
</p>
:::

<br/>

6. Finally, click the green **Run workflow** button inside the popup.  
After 30 to 60 seconds, a green checkmark will appear next to the run, indicating a successful deployment.

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic19.png" alt="Deploy success" width="1080px" />
</p>
:::

<br/>

::: tip One-Time Execution Variables  
Values entered directly into the **Run workflow** modal are disposable and will not be saved to your repository settings. This is useful for quickly testing different Proxy IPs or changing UUIDs on the fly.  
:::

<br/>

> **Behind the Scenes**  
> When you click **Run workflow**, a GitHub Actions runner initializes, downloads, and configures the Rust `cargo` toolchain and `wasm-pack`, compiling the codebase into WebAssembly. Shortly after compilation, a new Worker named `0x00` is deployed to your Cloudflare account (or using the custom name provided in the workflow input).
> 
> If you wish to change the default Worker name permanently, edit the first line of [wrangler.toml][6] in the repository.
> 
> ::: details View Screenshot  
> <p align="center">
>   <img src="/zizifn/pic20.png" alt="Worker name" width="1080px" />
> </p>
> :::
> 
<br/>

## How to Use
### Accessing the Management Panel
After deployment, append your UUID to your Worker domain:

`https://Your-workers.dev-URL/<UUID>`

**For example:**

`https://0x00.workers.dev/be0ff9df-1468-41a0-8865-796d1c6800db`  

> If you did not provide a UUID in the repository secrets or the manual workflow dispatch form, GitHub Actions generated a random [UUID][4] automatically. You can retrieve it by going to your Cloudflare dashboard > Worker > Settings tab under Secrets and Variables.

<br/> 

### Retrieving Subscription Links {#sub}

Your subscription link contains dozens of configurations pre-loaded with clean Cloudflare IPs. You can import them automatically using the buttons inside the panel.

Alternatively, if you need to copy the subscription link manually for other clients, press and hold (Long Touch) on any of the `Import to ...` buttons. Your browser will prompt for clipboard permission (only once). After allowing access, the specific subscription link for that client will be copied to your clipboard.

::: details View Screenshot
<p align="center">
  <img src="/zizifn/pic21.png" alt="Copy Subscription link" width="1080px" />
</p>

### Subscription Link Examples {subex}

**For Xray Core clients:**  

`https://0x00.workers.dev/xray/be0ff9df-1468-41a0-8865-796d1c6800db`

**For Sing-box core clients:**  
`https://0x00.workers.dev/sb/be0ff9df-1468-41a0-8865-796d1c6800db`

**For PattNG Client:**  
`https://0x00.workers.dev/xray-enhanced/be0ff9df-1468-41a0-8865-796d1c6800db`

:::

## Additional Details {#pattng}

::: tip Differences Between xray, xray-enhanced, and sb

#### The `xray` prefix
Optimized for clients powered by the Xray core, such as:  
v2rayNG, MahsaNG, Hiddify, Nekoray, v2rayN, Streisand, Napsternet, NPVT, Happ, etc

<br/>

#### The `xray-enhanced` prefix
Configurations that include Patterniha parameters by default—meaning they are configured with Final Mask, Cipher suites, and Undafe for fingerprinting.

Best suited for Xray-based clients that support these features, such as:  
PattNG and v2rayNG  

<br/>

#### The `sb` prefix  
Optimized for clients powered by the Sing-box core, such as:  
Nekobox, Exclave, Sing-box, Husi, Karing, etc.

<br/>

#### Clean Cloudflare IPs  
The IP pool included in configurations is sourced from the [NiREvil/vless][7] repository. The IP list is refreshed automatically every 4 hours.
:::

<br/> 

::: tip **Optimized Configurations**  
Recently, [Patterniha][8] proposed adding two parameters to configurations built on Cloudflare Workers to combat severe internet disruptions, constant connection drops in Iran, and poor upload speeds:

- Final Mask   
- Cipher suites

To maximize performance, they released a fork of v2rayNG named PattNG on GitHub. Alongside normal configurations for v2rayNG, an **Enhanced** subscription is provided so that configurations are pre-tuned with these parameters. First, download and install [PattNG] from Patterniha's GitHub releases, then open your panel, click **Import to v2rayNG**, and select **Enhanced**.  
[PattNG GitHub Repository][PattNG]

<br/>
<p align="center">
  <img src="/zizifn/pic22.png" alt="PattNG" width="1920px" />
</p><br/>

::: tip Resolving Google Service & Gemini Issues 
Our dear friend Mehdi has published a comprehensive guide addressing regional blocking and connection errors with Google AI Studio and Gemini.  
[Click here to view the article.][9]  
:::

> **● Deployment Engine**
>
> - GitHub Actions runner (Ubuntu-24.04 VM)  
> - Cloudflare Wrangler Action v4  
> - Rust wasm-pack v0.13.1  
> 
> <br/> 
> 
> - **Many thanks to [NiREvil] and [zizifn]**   
>
> <br/>	

::: danger Security Warning  
::: details Click to expand  

**Never provide sensitive Cloudflare tokens inside manual workflow input text fields!** 

Values passed to manual run forms are stored in GitHub Actions workflow execution logs and become publicly visible if your repository is public. Sensitive Cloudflare credentials must always be stored via **Step 3** (Repository Secrets) so GitHub can encrypt them securely.  
:::

[1]: https://github.com/NiREvil/zizifn
[2]: https://dash.cloudflare.com/login
[3]: https://dash.cloudflare.com/sign-up
[4]: https://www.uuidgenerator.net
[5]: https://github.com/NiREvil/vless/blob/main/sub/ProxyIP.md
[6]: https://github.com/NiREvil/zizifn/blob/c3a3367c543f3f0f88492597e7b8fea8f6b00fa3/wrangler.toml#L1
[7]: https://github.com/NiREvil/vless/blob/main/Cloudflare-IPs.json
[8]: https://t.me/patt_channel_x/93
[9]: https://mehdi-hexing.github.io/mehdi-hexing/topics/WorkerPlacementGemini
[zizifn]: https://github.com/zizifn/edgetunnel 
[NiREvil]: https://github.com/NiREvil
[PattNG]: https://github.com/patterniha/v2rayNG/releases
