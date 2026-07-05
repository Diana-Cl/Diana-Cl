---
layout: doc
outline: deep
lang: "en-US"
dir: ltr
title: "ZiZifn Worker Setup Guide"
description: "Step-by-step guide to fork the project, retrieve Cloudflare credentials, auto-deploy the worker using GitHub Actions, and generate VLESS proxy configurations"
date: 2026-07-04
editLink: true
head:
  - - meta
    - name: description
      content: Comprehensive guide to deploying a WebAssembly and Rust-based VLESS proxy on Cloudflare Workers using GitHub Actions
  - - meta
    - name: keywords
      content: Serverless Runtime, cloudflare worker, vless proxy, github actions, rust wasm, zizifn, wrangler deploy
---

## Comprehensive Guide to Setting Up and Auto-Deploying VLESS Proxy Configurations
**Step-by-step tutorial for forking, configuring security secrets, and running GitHub Actions** {#serverless-runtime}

<br/>
<p align="center">
  <img src="/zizifn/pic.png" alt="ZiZifn Main Page" >
</p><br><br/>

The **zizifn** project is a secure proxy configuration based on the VLESS-WS-TLS/TCP protocol. It is developed in Rust and WebAssembly (Wasm) architecture and runs on Cloudflare Workers using Wrangler. To deploy this project on your personal account, follow the step-by-step instructions below.


::: info `Error 1101 and 1102`

In this new structure, there is no need to add useless code or heavy obfuscation!
:::

<br/>

<h2>📚 Table of Contents</h2>

[[toc]]

<br/> 

## Step 1: Forking the Repository {#fork}
First, you need to create a copy of this project in your own GitHub account.

1. Go to the main repository page [(Link)][1]

2. Click on the **Fork** icon (marked with a red arrow) at the top of the page.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic1.png" alt="How to fork the project on GitHub" width="1080px" />
</p>
:::

<br/>

3. On the next page, you can optionally set a custom name for your fork. Otherwise, click on **Create fork** to transfer the project to your account.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic2.png" alt="How to fork the project on GitHub" width="1080px" />
</p>
:::

<br/>

## Step 2: Retrieving Cloudflare API Token and Account ID {#token-time}
For automated deployment, GitHub Actions needs to connect to your Cloudflare account. To do this, we need two key parameters:

<Ltr>

- CloudFlare Account ID
- CloudFlare API Token

</Ltr>

::: tip **Note**

Previously, to get the Account ID, you had to navigate to the Workers & Pages section and copy it from the bottom of the page. Now, when creating a token, the Account ID is displayed right there, so you can copy it directly from that screen.
:::

<br/>

### Creating a Token with Worker Editing Permissions {#api-token}
1. Log in to your Cloudflare dashboard.

- [Log in to Cloudflare Account][2]
- [Sign up for Cloudflare][3]

::: details Click to expand details

::: tip **Note**
 
Recently, Cloudflare does not allow account creation with disposable/temporary emails. The account might get created but won't get verified, and you might get stuck in an endless email verification loop. Therefore, it is highly recommended to use reliable email providers such as G-Mail, Outlook, Hotmail, ProtonMail, etc., to register your Cloudflare account.
:::

<br/>

2. Once logged in, open the left sidebar/menu at the top of the page, type **api** in the **Quick search** box, and select **Account API Tokens** from the search results.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic3.png" alt="Search API token" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic4.png" alt="Select Account API Tokens" width="1080px" />
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

4. From the API token templates, click on **Edit Cloudflare Workers**. 

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic6.png" alt="Token templates" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic7.png" alt="Select Edit Cloudflare Workers template" width="1080px" />
</p>
:::

<br/>

5. Under the **Token Expiration** section, set an expiration date for your token if needed, then proceed to view and create the token.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic8.png" alt="Token expiration" width="1080px" />
</p>
:::

::: tip **Note**

Please note that if the token expires, your deployed worker will NOT stop working. However, you will no longer be able to redeploy the project via GitHub Actions. If that happens, you must generate a new token and update the corresponding secret in your GitHub repository settings.
:::

<br/>

6. Copy the generated API token on this page (this token is only shown once, so save it somewhere secure if needed). Also, copy your Account ID shown near the top of the page. After safely copying both values, click on the confirmation button to close the window.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic9.png" alt="Copy Cloudflare ID and Token" width="1080px" />
</p>
:::

<br/>

## Step 3: Setting up GitHub Secrets {#enviroments} 
Now, you need to add the retrieved credentials to your forked GitHub repository so the workflow can authenticate with your Cloudflare account.

1. In your forked repository, go to the **Settings** tab.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic10.png" alt="Navigate to repository settings" width="1080px" />
</p>
:::

<br/>

2. From the sidebar menu, click on **Secrets and variables** and select **Actions**.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic11.png" alt="Select Actions secrets" width="1080px" />
</p>
:::

<br/>

3. Click on the **New repository secret** button and define the variables according to the table below:

<br/>

| Secret Name | Status | Default Value | Description |
|---|:---:|---|---|
| `CLOUDFLARE_API_TOKEN` | ✔️ Required | - | Your Cloudflare API token with Workers editing permissions. |
| `CLOUDFLARE_ACCOUNT_ID` | ✔️ Required | - | Your Cloudflare Account ID. |
| `UUID` | ⚙️ Optional | `be0ff9df-1468-41a0-8865-796d1c6800db` | Your custom UUID (v4). |
| `PROXYIP` | ⚙️ Optional | `di.nscl.ir` | Proxy IP to route traffic to backend services behind Cloudflare. |

<br/>

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic12.png" alt="Create secret step 1" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic13.png" alt="Create secret step 2" width="1080px" />
</p><br/>

<p align="center">
  <img src="/zizifn/pic14.png" alt="Final secret creation" width="1080px" />
</p>
:::

<br/>

::: danger **Important Note**
The first two variables (Cloudflare Account ID and API Token) are strictly required. Without them, you cannot deploy the worker. The other two variables (`UUID` and `PROXYIP`) are optional because the code falls back to pre-defined values. However, it is highly recommended to generate a unique UUID using [(this website)][4] and use it instead of the default value.
<br/>

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic15.png" alt="Get UUID" width="1080px" />
</p>

To find other Proxy IPs, you can refer to this [Proxy Repository][5].
:::

<br/>	 

## Step 4: Activating and Running GitHub Actions {#manual-deploy}
By default, GitHub disables actions on forked repositories. You need to enable and run the workflow manually once.

1. Navigate to the **Actions** tab at the top of your repository.

2. Click on the green button:

**"I understand my workflows, go ahead and enable them"**

to authorize the actions to run.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic16.png" alt="Enable actions" width="1080px" />
</p>
:::

<br/>

3. As shown in the screenshot below, select **All workflows** from the left panel, then choose the **Deploy Worker** workflow.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic17.png" alt="Select Deploy workflow" width="1080px" />
</p>
:::

<br/>

4. On the right side of the screen, a menu bar with a **Run workflow** button will appear. Click on it.

5. In the dropdown form that opens, you can optionally input custom values for `Proxy IP` or `UUID` exclusively for this specific run. (If left blank, the workflow will fallback to your repository secrets or default values; it is generally recommended to set them up as secrets instead).

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic18.png" alt="Run workflow" width="1080px" />
</p>
:::

<br/>

6. Finally, click the green **Run workflow** button inside the form. After about 30 to 60 seconds, a green checkmark will appear next to the run, indicating that the deployment process completed successfully.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic19.png" alt="Deploy success" width="1080px" />
</p>
:::

<br/>

::: tip Important Note on Temporary Variables

Values entered directly into the **Run workflow** prompt form are strictly temporary (one-time use) and are not stored in your repository configuration. This feature is particularly useful for quickly testing different Proxy IPs or changing the UUID on the fly.
:::

<br/>

::: info **Technical Details**

After clicking **Run workflow**, GitHub boots up an Ubuntu runner, downloads and installs the Rust toolchain (`cargo`) and `wasm-pack`, compiles the Rust codebase to WebAssembly, and automatically deploys a new Worker named `zr-wasm` to your Cloudflare account.

If you wish to change the default worker name, you can edit the first line of the [wrangler.toml][6] file inside your repository.

::: details View Screenshot

<p align="center">
  <img src="/zizifn/pic20.png" alt="Worker name configuration" width="1080px" />
</p>
:::

<br/>


## How to Use

### Accessing the Management Panel
Once deployed, simply append your UUID to your Worker's URL:

<Ltr>

`https://Your-Worker-URL/Your-UUID`

</Ltr>

For example:

<Ltr>

`https://zr-wasm.workers.dev/be0ff9df-1468-41a0-8865-796d1c6800db`

</Ltr>

> If you did not create a custom UUID secret and are using the default code value, the UUID will be:
>
> ```reg
> be0ff9df-1468-41a0-8865-796d1c6800db
> ```

<br/> 

### Retrieving the Subscription Link
Your subscription link automatically serves multiple configurations populated with clean Cloudflare IPs. You can use the buttons inside the panel to copy it automatically.

Alternatively, if you need the subscription URL manually for external clients, append `xray` or `sb` between the Worker URL and your UUID:

<Ltr>

`https://Your-Worker-URL/xray/Your-UUID`

`https://Your-Worker-URL/sb/Your-UUID`

</Ltr>

For example:

<Ltr>

`https://zr-wasm.workers.dev/xray/be0ff9df-1468-41a0-8865-796d1c6800db`

</Ltr>

::: tip **Differences Between xray and sb**

- **xray suffix:**

Suitable for clients utilizing the Xray core, such as:  
v2rayNG, MahsaNG, Hiddify, Nekoray, v2rayN, Streisand, Napsternet, NPVT, Happ, etc.

<br/>

- **sb suffix:**

Suitable for clients utilizing the Sing-Box core, such as:  
Nekobox, Exclave, Singbox, Husi, Karing, etc.

<br/>

- **Clean Cloudflare IPs**

The clean IPs in your configurations are sourced from the [NiREvil/vless][7] repository. The IPs are updated automatically every 4 hours.
:::

<br/> 


::: info

<div dir="ltr">

**Deployment Engine**

- GitHub Actions workflow runner (Ubuntu-24.04 VM)
- Cloudflare Wrangler Action v3

- Many thanks to [NiREvil] and [zizifn]

</div>

:::

<br/>

::: danger Security Warning

::: details Click to view important security tips

**Never hardcode or type sensitive Cloudflare tokens in manual workflow run forms!** 

Values typed directly into the manual workflow execution inputs are saved in your GitHub Actions run history. If your repository is public, these credentials will be visible to everyone. Sensitive secrets must always be defined via **Step 3** (Repository Secrets) so GitHub can securely encrypt them.

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
