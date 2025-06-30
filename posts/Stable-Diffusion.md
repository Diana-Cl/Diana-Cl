---
layout: doc
outline: deep
title: Stable Diffusion
description: 'Stable Diffusion is a neural network that generates images from a text prompt'
date: 2025-02-06
editLink: true
head:
  - - meta
    - name: keywords
      content: Image generator, Stable Diffusion, text prompt, Telegram bot, DALL.E3, Flux, Midjourney
---

# Stable Diffusion

> Stable Diffusion is a neural network that generates images from a text prompt.

Welcome! Today, we’ll journey from the simplest generations to the most elegant ones, and I’ll provide examples along the way.

Before we begin, I’d like to mention that AI models are excellent at generating various types of content: girls, cities, guys, nature. However, we’ll focus on cats and something unusual to showcase the full potential! You can experiment on your own after reading this guide :)

**I recommend three bots for use,** but I will only explain the first one in detail, as the other two are quite similar:

1. [StableDiffusion_robot]
2. [stable_diffusion_bot]
3. [StableDiffusionWrapperBot]

---

## First Steps

Let’s start with the basics. We’ve just entered the bot and want to generate, say, a frog in a pink spacesuit. So, we’ll write:

![Example 1](https://github.com/user-attachments/assets/5958bdd9-ad29-49b5-a170-d5bb6c35c956)

> Frog in a pink spacesuit on the moon

You’ll notice that it doesn’t matter whether you use Russian or English for the bot, so for clarity, I’ll use English in the following examples.

---

## Upscale Function

Want to improve the quality of your image? Click the **Upscale** button under the art, and you’ll get a high-resolution PNG image.

![Upscale 1](https://github.com/user-attachments/assets/5b09e183-4bf1-4605-adb6-f0299bf297b7)  
![Upscale 2](https://github.com/user-attachments/assets/bf866f8b-bddd-41dc-973d-65121758afa9)

---

## Main Bot Functionality

Access the settings via the `/menu` command or by clicking the ⚙️ Menu button available under each generation.

![Bot Menu](https://github.com/user-attachments/assets/3712473f-5c37-4d24-aac2-d1aa5e0b8d06)

::: tip
**📐 Format** – The aspect ratio of your generation. The image can be horizontal (for landscapes), vertical (for portraits), or square.  
**📺 Model** – The foundation of your generation, determining the style. All models lean toward realism but retain their unique flair. Try them out and find your favorite! ❤️  
**🎨 Style** – Easily customize your generation. Be sure to try each one. Examples of all styles are available in the bot!
:::

::: info
**Models**  
The bot includes 4 different models: SD 1.5, SDXL 1, SDXL Turbo, SDXL Turbo X2.  
You get **8 free generations** every day.
:::

::: info
**How to Earn Generations?**  
We provide you with several free generations daily. If you run out, here’s how to get more:
:::

::: info
**Referral System**  
In the ⚙️ Menu, select **✨ Invite a Friend** and get your unique referral link in this format:  
`https://t.me/StableDiffusion_robot/?start=`  
For every person who clicks your link and creates art, you’ll earn **10 generations**!
:::

::: warning
**Shop**  
Find **🚀 Shop** in the menu and purchase additional generations.  
Developing and maintaining each model costs us a lot, so we’d appreciate your support.

💎 Premium subscription unlocks 18+ art generation.
:::

---

## Generation Contest

When you upscale a generation, a **🏆 Submit to Contest** button appears.

![Contest Button](https://github.com/user-attachments/assets/6170649a-181d-4326-a6c0-0bd73cb44df9)

- Click it—your masterpiece will be sent to our admin,
- who periodically selects works for publication in our channel!
- If your work is chosen, it will be published and you'll receive **30 bonus generations**.

---

## Advanced Input: Weighted Tags

Let’s learn how to adjust the **weights** of tag-words.

![Cat Example 1](https://github.com/user-attachments/assets/0fc8cdba-61d2-48d7-a99a-33298066556c)

> **a cat**, (jumping:0.5), (flowers at the background:1.5), **close up**

![Cat Example 2](https://github.com/user-attachments/assets/bb5ce6d4-76ac-46b8-a2ef-7275649ec7fa)

> **a cat**, (jumping:1.5), (flowers at the background:0.5), **close up**

You can see how adjusting weights changes emphasis.  
By default, weight is `1.0`. Use values between **0.5** and **1.6** to avoid distortion.

::: tip
- `(flowers in the background)` → 1.1 weight  
- `((flowers in the background))` → ~1.21 weight  
- You can also do: `(flowers in the background:1.4)`  
- To **decrease**, use: `[flowers in the background]` or `(flowers:0.7)`  

ℹ️ Only **round brackets** `()` support manual weights. Square brackets just reduce weight by ~10%.
:::

---

## Characters

::: info
We’ve compiled a huge list of character descriptions.  
You can find the tags you need or just write the character’s name in Russian—the bot will suggest tags!
:::

## Interesting Tags

::: info
Non-obvious but powerful tags you can use:
:::

## Framing Tips

::: info
**Frame Examples**  
- Wide shot  
- Low angle  
- Selfie  
- Dynamic pose  
- Close up  
- Medium close up  
- Full body  
- Cinematic frame
:::

---

## Tags for Different Genres

::: tip
**Abstract Art**: vibrant colors, geometric shapes, abstract patterns  
**Surrealism**: dreamlike, mystical creatures, twisted reality  
**Landscape**: majestic mountains, lush forests, desert dunes  
**Portrait**: emotive eyes, intense gazes, expressive gestures  
**Minimalism**: simplicity, clean lines, negative space  
**Realism**: hyper-realistic textures, precise details  
**Pop Art**: bold colors, famous faces  
**Street Photography**: candid moments, urban stories  
**Night Photography**: starry skies, moonlit streets, long exposures
:::

---

## Camera Lenses (for prompt enhancement)

- **Sigma 150–600mm**: Great for wildlife/sports.  
  Example: _mountain lion in the wild, Sigma 150-600mm lens, daylight, photo_

- **GoPro Max**: Ultra-wide shots for vlogging/action.  
  Example: _player kicking soccer ball, GoPro Max, stadium lights_

- **Tamron 10–24mm**: For landscapes/architecture.  
  Example: _luxury living room, Tamron lens, daylight_

- **Zeiss Otus 55mm**: Sharp, artistic portraits.  
  Example: _classic car, Zeiss Otus, street view_

- **Canon EF 100mm Macro**: Insects, flowers, soft portraits.  
  Example: _bee on flower, Canon EF 100mm, daylight_

---

## More Cool Tags

::: details More Contextual Tags
- holographic  
- in the style of kawaii aesthetic  
- neon light  
- pastel accent colors  
- surreal fashion photography  
- celebration of rural life  
- hyperrealistic animal portraits  
- liquid foil gradient  
- forestpunk  
- roman art and architecture  
- carpetpunk  
- euphoria  
- product photography  
- algeapunk  
- kodak, muted tones, ektachrome  
- conceptual installation art  
:::

---

## Inspiration

Coming up with a good prompt isn’t easy. You can explore amazing works by our users for ideas.

![Wolf Example](https://github.com/user-attachments/assets/abd03786-9704-4006-9b9a-722bdf43b434)

> A photorealistic image of an anthropomorphic wolf with human-like hands and feet,  
> wearing a suit and tie, playing electric guitar in a bustling NYC street.  
> Gibson Les Paul, blues riff, dramatic lighting, 8k masterpiece.  
> **Model**: RealVis Vanilla

---

![Totoro Minimalism](https://github.com/user-attachments/assets/923bd226-0482-4c50-9226-4b09d08cbfff)

> (totoro:1.5), (by hayao miyazaki:2), (minimalism:1.2), (miyazaki style:1.7)  
> **Model**: Stable Diffusion XL Midjourney

---

![Train Drawing](https://github.com/user-attachments/assets/b9ba3e8d-2871-4788-ae12-7b711d4b03e5)

> Three-dimensional white drawing of train placed on a blank page.  
> **Model**: Stable Diffusion XL Vanilla

---

![Rick and Morty](https://github.com/user-attachments/assets/000e92dc-3f5c-43f6-975d-07f518ae6b53)

> Rick from Rick and Morty  
> **Model**: Dreamshaper Vanilla

---

![Hygge Set](https://github.com/user-attachments/assets/1c2bfaf7-704e-40c6-973f-8ae18802ba0a)

> Hand-drawn vector, Scandinavian hygge doodle set.  
> **Model**: Dreamshaper Vanilla

---

![Beach Model](https://github.com/user-attachments/assets/86e218db-6801-40cf-9037-a76e1dad7b40)

> Skinny model wearing a dress at beach bar, drinking cocktail.  
> **Model**: EpicRealism Vanilla

---

::: tip Need more inspiration?
Be my guest: [Best of Stable Diffusion]
:::

---

[StableDiffusion_robot]: https://t.me/StableDiffusion_robot/?start=6064662462  
[stable_diffusion_bot]: https://t.me/stable_diffusion_bot  
[StableDiffusionWrapperBot]: https://t.me/StableDiffusionWrapperBot  
[Best of Stable Diffusion]: https://t.me/StableDiffusionBest

