---
layout: doc
outline: deep
lang: en-US
dir: ltr

title: "Complete Markdown Tutorial"
description: "Comprehensive Markdown tutorial — learn full text writing and formatting from beginner to advanced"

date: 2026-6-12
editLink: true

head:
- - meta
  - name: description
    content: Complete guide to the Markdown language and principles of writing, formatting, and documenting texts.

- - meta
  - name: keywords
    content: Markdown, Markdown Guide, Markdown Tutorial, Markdown Syntax, md, Documentation, Writing

- - meta
  - property: og:title
    content: Comprehensive Guide to Writing with Markdown

- - meta
  - property: og:description
    content: Complete Markdown tutorial from basics to advanced topics for producing documentation, articles, and web content.
---

# Complete Markdown Tutorial

### From Zero to Hero for Writing Articles

Hello! This guide is written so that you can easily write any type of text, from a simple note to a full article, using Markdown. Markdown is a very simple markup language that lets you write beautiful, structured text without needing complex software like Word.

Its big advantage is that it converts very easily to other formats like HTML, and platforms like GitHub, blogs, and many other tools support it.

Let's get started!

<br/>

## Part One: Basic and Essential Principles

Here you'll learn things that are enough for 90% of your work.

### Headings

To define titles and different sections of your text, use `#`. The number of `#` determines the heading level.

```markdown  
# This is a level 1 heading (main article title)  
## This is a level 2 heading (main section)  
### This is a level 3 heading (subsection)  
#### This is a level 4 heading  
##### And so on up to level 6  
###### This is level 6  
```

**Output:**

# This is a level 1 heading (main article title)  

## This is a level 2 heading (main section)  

### This is a level 3 heading (subsection)  

#### This is a level 4 heading  
 
##### And so on up to level 6  

###### This is level 6  

---

### Text Styles

You can easily make text **bold**, *italic*, or ~~strikethrough~~ .

```markdown  
*This text is italic*  
_This is also italic_  

**This text is bold**  
__This is also bold__  

***This text is both bold and italic***
**_This also works_**  

~~This text is strikethrough~~
  
```

**Output:**

*This text is italic*  
_This is also italic_  

*This text is bold*  
__This is also bold__  

***This text is both bold and italic***  
**_This also works_**  

~~This text is strikethrough~~

---

### Blockquotes

If you want to quote something or give it special emphasis, use `>` .

```markdown  
> This is a blockquote. All text after this symbol will be displayed as a blockquote.  
>  
> > You can also have nested blockquotes.  
```

**Output:**

> This is a blockquote. All text after this symbol will be displayed as a blockquote.  
> 
> > You can also have nested blockquotes.

---

## Part Two: Lists

Lists are great for organizing information.

### Unordered List

You can create an unordered list using `*`, `-`, or `+`.

```markdown  
* First item  
* Second item  
  * First sub-item (with a space or Tab)  
  * Second sub-item  
* Third item  
```

**Output:**

* First item
* Second item
  * First sub-item (with a space or Tab)
  * Second sub-item
* Third item

### Ordered List

For numbered lists, use numbers. The interesting thing is that you don't have to enter the numbers correctly — Markdown will fix them for you!

```markdown  
1. First item  
2. Second item  
3. Third item  
   1. First sub-item  
   2. Second sub-item  
```

**Output:**

1. First item
2. Second item
3. Third item
   1. First sub-item
   2. Second sub-item

---

## Part Three: Links and Images

No article is complete without links and images.

### Links

The general format for a link is: [link text](URL)

```markdown  
You can use [Google](https://www.google.com) for searching.  
Or visit [my GitHub page](https://github.com/your-username).  
```

**Output:**

[You can use Google for searching][1]  
Or  
[visit my GitHub page][2]  


### Images

Adding an image is very similar to a link, just add a ! at the beginning.
Format: ![alt text](image URL)

Alt text is for when the image doesn't load and is also important for accessibility.

```markdown  
![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)  
```

**OR**

```markdown
<p align="center">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo">
</p>
```

**Output:**

![GitHub Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)  

---

## Part Four: Code and Separators

### Code Display

To show a short piece of code inline, wrap it in backticks ( ` ).

```markdown  
In Python, we use the `print()` function to output text.  
```

**Output:**
In Python, we use the `print()` function to output text.

To display a full code block, wrap it in triple backticks ( ``` ). You can also specify the language for syntax highlighting.

````
def say_hello(name):
  print(f"Hello, {name}!")

say_hello("World")
````

**Output:**

```python  
def say_hello(name):  
  print(f"Hello, {name}!")  

say_hello("World")  
```

### Horizontal Rule

To separate different sections of your text, you can use three or more hyphens `---`, asterisks `***`, or underscores `___` on a separate line.

```markdown  
This is one section of text.  

***  

And this is another section.  
```

**Output:**

This is one section of text.

---

And this is another section.

---

## Part Five: Advanced Features (Great for Articles)

### Tables

Creating tables might seem a bit tricky at first, but it's very useful. Separate columns with `|` and the header with `---`.

```markdown  
| Header 1 | Header 2 | Header 3 |  
| :--- | :---: | ---: |  
| Column 1 text | Column 2 text | Column 3 text |  
| Second row | center-aligned | right-aligned |  
| Third row | this is also centered | `123` |  
```

::: tip **Explanation**

Using `:` in the `---` line aligns columns to the left, center, and right respectively.

:::

**Output:**

| Header 1 | Header 2 | Header 3 |
| :--- | :---: | ---: |
| Column 1 text | Column 2 text | Column 3 text |
| Second row | center-aligned | right-aligned |
| Third row | this is also centered | `123` |

### Task Lists

This feature is very popular on GitHub and is great for tracking tasks.

```markdown  
- [x] Teach basic sections  
- [x] Write about lists and links  
- [ ] Add the tables section  
- [ ] Write a comprehensive example  
```

**Output:**

- [x] Teach basic sections
- [x] Write about lists and links
- [ ] Add the tables section
- [ ] Write a comprehensive example

### Footnotes

Very useful for scientific articles and citations.

```markdown  
This is a text that needs a footnote.[^1] And this is another text with a second footnote.[^footnote2]  

[^1]: This is the explanation for the first footnote.  
[^footnote2]: The explanation for the second footnote goes here.  
```

**Output:**
This is a text that needs a footnote.[^1] And this is another text with a second footnote.[^footnote2]

[^1]: This is the explanation for the first footnote.
[^footnote2]: The explanation for the second footnote goes here.

### Escaping Characters

If you want to use characters that have special meaning in Markdown (like * or #) as normal text, just put a backslash \ before them.

```markdown  
I want to show the asterisk itself, not italic text: \*this text is not italic\*  
```

**Output:**

I want to show the asterisk itself, not italic text: \*this text is not italic\*  

---

## Table of Contents

This table of contents helps you quickly jump to the section you want in this guide. The table itself is also a great example of one of Markdown's important features: **internal linking**.

**How does this table of contents work?**

1. When you create a heading using `#`, platforms like GitHub automatically generate a unique `id` for that heading.
2. This id is usually created by converting the heading text to lowercase and replacing spaces with hyphens (-). For example, the heading `## Part One: Basic Principles` becomes an `id` named `part-one-basic-principles`.
3. Now you can link to this id using the Markdown link format: `[your desired text](#generated-id)`.

In the table below, nested lists are used to better show the structure of the article.

**For example:**

```markdown
## Table of Contents

* [Part One: Basic and Essential Principles](#part-one-basic-and-essential-principles)
  - [Headings](#headings)
  - [Text Styles](#text-styles)
  - [Blockquotes](#blockquotes)
* [Part Two: Lists](#part-two-lists)
  - [Unordered List](#unordered-list)
  - [Ordered List](#ordered-list)
* [Part Three: Links and Images](#part-three-links-and-images)
  - [Links](#links)
  - [Images](#images)
  and ...
```

**Output:**

<br/>	

## Table of Contents

* [Part One: Basic and Essential Principles](#part-one-basic-and-essential-principles)
  - [Headings](#headings)
  - [Text Styles](#text-styles)
  - [Blockquotes](#blockquotes)
* [Part Two: Lists](#part-two-lists)
  - [Unordered List](#unordered-list)
  - [Ordered List](#ordered-list)
* [Part Three: Links and Images](#part-three-links-and-images)
  - [Links](#links)
  - [Images](#images)
* [Part Four: Code and Separators](#part-four-code-and-separators)
  - [Code Display](#code-display)
  - [Horizontal Rule](#horizontal-rule)
* [Part Five: Advanced Features (Great for Articles)](#part-five-advanced-features-great-for-articles)
  - [Tables](#tables)
  - [Task Lists](#task-lists)
  - [Footnotes](#footnotes)
  - [Escaping Characters](#escaping-characters)
* [Part Six: Advanced and Pro Tips](#part-six-advanced-and-pro-tips)
  - [Combining HTML and Markdown](#combining-html-and-markdown)
  - [Internal Linking to Headings](#internal-linking-to-headings-linking-to-heading-ids)
  - [Math Expressions](#math-expressions)
  - [Adding Emoji](#adding-emoji)
* [Additional Tips and Best Practices](#additional-tips-and-best-practices)
* [Resources for Further Learning](#resources-for-further-learning)
  - [Guides and Cheatsheets](#guides-and-cheatsheets)
  - [Online Tools](#online-tools)

## Part Six: Advanced and Pro Tips

Now that you're familiar with the basics and advanced topics, it's time to learn a few tricks that will make your writing stand out. These features may not be supported on all platforms (especially older Markdown versions), but they work well in places like GitHub (GFM - GitHub Flavored Markdown).

### Combining HTML and Markdown

One of Markdown's most powerful features is that you can write HTML code directly inside it. This gives you infinite flexibility.

### Changing Text Color and Style

You can use the `<font>` or `<span>` tag to change text color.

```html
This is a <font color="red">red</font> text.  
```

**Output:**

This is a <font color="red">red</font> text.


### Centering Text or Elements

```html  
<div align="center">
This text or image will be centered.
</div>
```

**Output:**

<div align="center">

This text or image will be centered.

</div>

### Collapsible Sections

This feature is great for hiding long content and keeping the page organized.

```html  
<details>  
<summary>Click here to see details</summary>  

You can put any text, code, image, or anything else here. This content is hidden by default and will be shown when you click on the summary.  

</details>  
```

**Output:**

<details>
<summary>Click here to see details</summary>

You can put any text, code, image, or anything else here. This content is hidden by default and will be shown when you click on the summary.

</details>

### Internal Linking to Headings

On GitHub and many other platforms, each heading automatically receives an ID. This ID is usually generated from the heading text (lowercase, with spaces replaced by hyphens). You can link to these IDs.

```markdown  
### An Important Section in the Article  

Click to go to the [Important Section](#an-important-section-in-the-article).  
```

::: info INFO
This is very useful for creating a Table of Contents at the beginning of long articles.
::: 

<br/>

### Math Expressions

On platforms that support MathJax or KaTeX (like some GitHub versions and scientific tools), you can write mathematical formulas using LaTeX format.

- **Inline formula:** with a single `$` on both sides.
- **Block formula:** with double `$$` on both sides.

```markdown  
Einstein's famous energy formula is written as $E=mc^2$.  

The general quadratic equation is:  
$$ax^2 + bx + c = 0$$  
```

**Output (if supported):**

Einstein's famous energy formula is written as $E=mc^2$.

The general quadratic equation is:

Inline $E = mc^2$ and a block:
$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

<br/>

### Adding Emoji

On GitHub and many other places, you can add emoji to your text by writing the emoji code between two colons `:`  

```markdown  
Writing with Markdown is so cool! :joy: :rocket:
```

**Output:**

Writing with Markdown is so cool! :joy: :rocket:


::: tip Emojis

Need a list of all the emoji names?
So [Click here][3]
:::

---

## Additional Tips and Best Practices

1. **Readability of Markdown code:** Always try to keep the .md file itself readable. Use horizontal rules ``---`` or several blank lines between different sections. If you don't want two lines to stick together, then you should put `two spaces` at the end of the first line.
2. **Compatibility:** Remember that Markdown has different "flavors" (like CommonMark, GFM, Markdown Extra). Advanced features like tables or task lists might not work the same everywhere. It's always better to prioritize core features.
3. **Alt text for images:** Always write appropriate alt text for images. This helps with SEO and also allows people using screen readers to understand the image content.
4. **Use a proper editor:** Use a code or text editor that supports Markdown and has a live preview feature. Tools like **VS Code**, **Typora**, **Obsidian**, or even **GitHub's online editor** are great.

<br/>

## Telegram Markup Revolution

Recently, support for messages with Markdown formatting has been added to Telegram, allowing bots to send fully structured texts. [^3]
For example, AI-generated responses can be published with proper, standard, organized, and readable formatting, without messing up tables and headings.
It will likely be available to the general public in the near future. For now, you can write your text in Markdown and send it to the awesome Telegram bot [@RichTextEchoBot][5] and [@MarkdownRenderBot][6] to render and send it back to you, that's how cool it is ;)

---

Resources for Further Learning

The internet is full of great resources for learning Markdown more deeply. Here are a few of the best:

## Guides and Cheatsheets

These pages are great for quick reference and remembering syntax.

- **[The Markdown Guide:][7]** The most complete and best reference for learning Markdown. It has both a tutorial section and a comprehensive cheatsheet.
- **[The Vitepress Guide:][8]** VitePress comes with many built in Markdown Extensions.
- **[Markdown Cheatsheet on GitHub:][9]** A very popular and complete cheatsheet that covers most topics.
- **[Markdown Tutorial by CommonMark:][10]** An interactive and good tutorial for learning the standard Markdown basics.

## Online Tools

- **[Dillinger:][11]** An online Markdown editor with live preview, where you can export your files to different formats like HTML and PDF.
- **[StackEdit:][12]** Another powerful online editor that syncs with services like Google Drive and Dropbox.
- **[Markdown Tables Generator:][13]** Creating complex tables by hand can be tedious. This tool lets you build a table graphically and get the Markdown code for it.

## Final Word

**Congratulations!** You now have all the tools needed to write professional articles with Markdown. The best way to learn is to practice. Try writing your daily notes or your next article in this format. You'll soon see how fast and enjoyable it becomes.

[^3]: [Telegram Markup Revolution][4]

[1]: https://www.google.com
[2]: https://github.com/mehdi-hexing/mehdi-hexing
[3]: https://github.com/Diana-Cl/Diana-Cl/blob/main/docs/topics/full.mjs
[4]: https://core.telegram.org/bots/api-changelog#june-11-2026
[5]: https://t.me/RichTextEchoBot
[6]: https://t.me/MarkdownRenderBot
[7]: https://www.markdownguide.org/extended-syntax
[8]: https://vitepress.dev/guide/markdown
[9]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[10]: https://commonmark.org/help
[11]: https://dillinger.io
[12]: https://stackedit.io
[13]: https://www.tablesgenerator.com/markdown_tables  
