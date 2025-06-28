---
layout: doc
outline: deep
lang: fa-IR
title: Cloudflare backend selector
description: "دامنه با آی‌پی‌های رندوم کلادفلر"
date: 2025-01-18
editLink: true
head:
  - - meta
    - name: keywords
      content: Cloudflare Workers, Failover backend, CDN Scan, Clean Ip, Load balance, Cloudflare pages
---

<br/>

# دامنه به جای آی‌پی تمیز کلادفلر  

**بعد از ساخت کانفیگ با وورکر، برای انتخاب آی‌پی تمیز چند حالت پیش میاد:** 
- یا باید از دامنه خود وورکر استفاده کنیم.  
- یا باید از کدهایی مثل [هارمونی] استفاده کنیم برای ساخت لینک ساب.  
- یا آی‌پی تمیز اسکن کنیم هر چند وقت یکبار و جایگزین کنیم در کانفیگ‌ها.  
- یا از دامنه‌ یکی از سایت‌هایی که پشت کلادفلر هستن استفاده کنیم در کانفیگ مثلا دامنه‌ `zula.ir`.  

**ولی بازم چندتا مشکل داریم:**  
- از دامنه وورکر نمی‌تونیم استفاده کنیم چون فیلتر میشه
- بخوایم از هارمونی کمک بگیریم حداقل ده دقیقه زمان میخواد و ممکنه هرکسی بلد نباشه وورکر اون رو بسازه  
- آی‌پی تمییز اسکن کردن خودش یه پروسه حوصله سر بر هست جایگزین کردنشون داخل کانفیگ از اونم بدتر
- از دامنه هایی مثل اسپیدتست هم استفاده کنیم ممکنه چند ساعت از روز اختلال داشته باشن یا سرورها تحت تعمیر باشن یا فیلتر بشن و ..، و دقیقا همین جاست که این کد به چشم میاد.  
- خیلی خلاصه توضیح میدم عملکرد کد رو  

  <br/>
  
## ایجاد وورکر کلادفلر 

در ابتدا کد [worker.js](https://github.com/NiREvil/vless/blob/main/edge/cf-proxy-selector.js) رو از گیتهاب کپی و یک وورکر جدید Deploy کنید بعد لینک وورکری که ساختید رو در قسمت آی‌پی آدرس هر کانفیگی که خواستید می‌تونید استفاده کنید.

<br/>
  
## عملکرد اسکریپت 

عملکردش به این‌شکل هست که با هر بار قطع و وصل کردن کانفیگ، یکی از دامنه‌هایی که از قبل داخل کد قرار دادیم به شکل رندوم انتخاب میشه. برای مثال وقتی به کانفیگ کانکت شدید فرضا این بار آی‌پی تمیز شما `zula.ir` انتخاب شده و حس می‌کنید کانکشن خوبی ندارید یا پینگ بالا هست فقط کافیه یکبار قطع و وصل کنید تا یک دامین دیگه‌ای از لیست جایگزین زولا انتخاب کنه براتون، به همین سادگی.  

  <br/>
  
## متغیرها

لیست دامنه‌های داخل کد رو به دلخواه خودتون می‌تونید تغییر بدید، دوتا دامنه توی لیست باقی بذارید یا صدتا مهم نیست. میتونید از اسکنر ویندوزی که لینکش رو پایین پست گذاشتم کمک بگیرید برای اسکن CDN و قرار دادن نتایج از طریق ... الان میگم.  
مهم اینه که از دفعه بعد دیگه سراغ ویرایش کد نرید، با ایجاد یک متغیر به اسم `HOST` هر دامنه‌ای رو که می خواستید اضافه کنید به اسکریپت. دامنه ها باید با کاما از هم جدا بشن مثل bpb، مثلا:  

> zula.ir,creativecommons.org,ip.sb

و الی آخر. دوتا متغیر دیگه هم می‌تونیم تعریف کنیم ولی برای شما اصلا نیاز نیست، دو متغیر دیگه صرفا برای مقاصد خاص استفاده میشن و فعلا نادیده می‌گیریم.  

<br/>

### جدول متغیرها  

| نام متغیر       | توضیحات                                                                 | مقدار پیش‌فرض | مثال                     |
|:-------------:|:-------------------------------------------------------------------------:|:---------------:|:---------------------------------:|
| `HOST`      | لیست دامنه‌های پشت کلادفلر (با کاما جدا شده‌اند)                            | لیست پیش‌فرض  | `zula.ir,ip.sb,fbi.gov`         |
| `PATH`      | مسیر درخواست ارسالی به دامنه‌ها                                 | `/`           | `/api/assets/data`                  |
| `CODE`      | کد وضعیت HTTP مورد انتظار از پاسخ دامنه‌ها                     | `200`         | `200` یا `404`                  |

<hr><br/>

### Environment variables  

| Variable Names   | Description                                                             | Default Value | Example                   |
|:-------------:|:-------------------------------------------------------------------------:|:---------------:|:---------------------------------:|
| `HOST`      | List of backend domains (separated by commas)                           | Default List  | `zula.ir,ip.sb,fbi.gov`         |
| `PATH`      | Request path sent to backend domains                                    | `/`           | `/api/assets/data`                  |
| `CODE`      | Expected HTTP status code from backend domains                          | `200`         | `200` or `404`                  |  

<br/>  

### متغیر 1. **`HOST`**

- **لیست دامنه‌های پشت کلادفلر که با کاما از هم جدا شده‌اند.** اگر تنظیم نشود، از لیست پیش‌فرض داخل کد استفاده می‌شود.  

> **English:** A comma-separated list of backend domains. If not set, the default list is used

<br/>

### متغیر 2. **`PATH`**

- **مسیر درخواست ارسالی به دامنه‌ها،** اگر تنظیم نشود، مقدار پیش‌فرض `/` استفاده می‌شود.  

> **English:** The request path sent to domains. If not set, the default value `/` is used.

<br/>
  
### متغیر 3. **`CODE`**

- **کد وضعیت HTTP مورد انتظار از پاسخ دامنه‌های لیست،** اگر تنظیم نشود، مقدار پیش‌فرض `200` استفاده می‌شود.  

> **English:** The expected HTTP status code from backend domains. If not set, the default value `200` is used  

<br/> 

## ساختار کد  

کدی که در پایین صفحه قرار داره فقط واسه مشاهده ساختار کد هست و قابل استفاده نیست لطفا فقط از [![Here](https://img.shields.io/badge/worker.js-red?logo=cloudflareworkers)](https://github.com/NiREvil/vless/blob/main/edge/cf-proxy-selector.js) اون رو کپی کنید.    
```javascript
export default {
  async fetch(request, env, ctx) {
    let url = new URL(request.url);
    const path = url.pathname;
    const params = url.search;
    
    // backend domain list
    let backendDomains = [
      "creativecommons.org",
      "go.inmobi.com",
      "diana.nscl.ir",
      "gur.gov.ua",
      "fbi.gov",
      "ip.sb",
      "skk.moe",
      "time.is",
      "zula.ir",
      "www.gov.ua",
      "www.wto.org",
      "www.csgo.com",
      "www.cdnjs.com",
      "www.iakeys.com",
      "www.udacity.com",
      "www.ipaddress.my",
      "www.speedtest.net",
      "www.ipchicken.com",
      "www.glassdoor.com"
    ];

    // If HOST exists in environment variables, get new backend domain list using ADD function
    if (env.HOST) backendDomains = await ADD(env.HOST);

    // Get test path, default is '/sub'
    let testPath = env.PATH || "/";
    // Ensure test path starts with '/'
    if (testPath.charAt(0) !== "/") testPath = "/" + testPath;
    let responseCode = env.CODE || "200";
    // Log number of backend domains and their list
    console.log(
      `Backend count: ${backendDomains.length}\nBackend domains: ${backendDomains}\nTest path: ${testPath}\nResponse code: ${responseCode}`,
    );

    // Store failed backend domains
    let failedBackends = [];

    // Function to wrap request logic with timeout functionality
    async function fetchWithTimeout(resource, options = {}) {
      const { timeout = 1618 } = options;

      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(resource, {
        ...options,
        signal: controller.signal,
      }).finally(() => clearTimeout(id));

      return response;
    }

    // Function to select backend domain and make request
    async function getValidResponse(request, backendDomains) {
      // Loop while backend domain list is not empty
      while (backendDomains.length > 0) {
        // Randomly select a backend domain
        const randomBackend =
          backendDomains[Math.floor(Math.random() * backendDomains.length)];
        // Remove selected domain from the list
        backendDomains = backendDomains.filter(
          (host) => host !== randomBackend,
        );

        url.hostname = randomBackend; // domain
        url.pathname = testPath.split("?")[0];
        url.search =
          testPath.split("?")[1] == "" ? "" : "?" + testPath.split("?")[1];
        try {
          // Make request with timeout
          const response = await fetchWithTimeout(new Request(url), {
            timeout: 1618,
          });
          // If response status is 200, request is successful
          if (response.status.toString() == responseCode) {
            if (path != "/") url.pathname = path;
            console.log(`Using backend: ${url.hostname}`);
            //console.log(`Failed backends: ${failedBackends}`);
            console.log(`Remaining backends: ${backendDomains}`);
            url.search = params;
            return await fetch(new Request(url, request));
          } else {
            console.log(`Failed backend: ${url.hostname}:${response.status}`);
          }
        } catch (error) {
          // Catch request errors, add failed backend to the failed list
          failedBackends.push(randomBackend);
        }
      }
      // If all backends fail, throw error
      return new Response("All backends are unavailable!", {
        status: 404,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    // Call getValidResponse function to get valid response
    return await getValidResponse(request, backendDomains);
  },
};

async function ADD(envadd) {
  // Replace tabs, double quotes, single quotes and newlines with commas
  // Then replace multiple consecutive commas with single comma
  var addtext = envadd.replace(/[ |"'\r\n]+/g, ",").replace(/,+/g, ",");

  // Remove leading and trailing commas (if any)
  if (addtext.charAt(0) == ",") addtext = addtext.slice(1);
  if (addtext.charAt(addtext.length - 1) == ",")
    addtext = addtext.slice(0, addtext.length - 1);

  // Split string by comma to get address array
  const add = addtext.split(",");

  return add;
}
```

<hr><br/>    

## اسکنر دامنه  

برای اسکن کردن دامنه های پشت کلادفلر کافیه این فایل نصبی رو دانلود و روی ویندوز اجرا کنید با اینترنت عادی خودتون، حواستون باشه vpn روشن نباشه.  

دو سه دقیقه طول میکشه تا تموم شه و پس از اتمام کار اسکنر، پنجره `cmd` رو ببندید و برگردید داخل فولدر اسکنر، یه فایل به اسم `CDNym.txt` خواهید دید که تازه ایجاد شده و داخلش نتایج اسکن اخیر هست. لیست دامنه‌ها به ترتیب بهتر بودن پینگ نسبت به اینترنت شماست.  

[Download CDN Scanner - Win-64 - v23.8.18](https://github.com/NiREvil/vless/raw/refs/heads/main/edge/cdn%20scanner-win64-v23.8.18.exe)  
  
![image](https://github.com/user-attachments/assets/4e2e4b0d-a1ea-4c30-a1ea-b1a8c5581c12)  

<hr><br/>  

[هارمونی]: https://github.com/NiREvil/Harmony "harmony"
