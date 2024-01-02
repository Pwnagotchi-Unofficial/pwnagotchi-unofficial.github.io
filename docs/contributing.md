---
sidebar_position: 99
toc_max_heading_level: 6
---

# Contributing
This article describes details about contributing to this Wiki, how to write, style guides, and some basic overview of Markdown language.

## Basics of contributing
To contribute directly to this wiki, you should [fork the repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo). You can do that simply by visiting [this wiki's repo on GitHub](https://github.com/Pwnagotchi-Unofficial/pwnagotchi-unofficial.github.io), and clicking the "Fork" button. Once you have forked the repo, you can `git clone` **the forked repo** to your local machine, like this (mind replacing `<YOUR-USERNAME>` in the URL):
```sh
git clone https://github.com/<YOUR-USERNAME>/pwnagotchi-unofficial.github.io.git
```
After that, do the initial set-up following [these instructions](https://github.com/Pwnagotchi-Unofficial/pwnagotchi-unofficial.github.io/blob/main/README.md#local-development) ("Local Development" section). After you have your development server up and running, you can begin the work.

## Articles and categories
The articles you will be working with are located inside the `/docs` folder in the repo. Every **article** is a `.md` (markdown) file. **Categories** are folders (named using lowercase kebab-case). See respective chapters for more information about these. Below is a tree-like overview of an example `/docs` folder structure:
```
docs
├── category1
│   ├── _category_.json
│   └── article.md
├── category2
│   ├── _category_.json
│   └── subcategory
│       ├── _category_.json
│       ├── article.md
│       └── another-article.md
├── article.md
└── intro.md
```

### Articles
An article is an individual [Markdown](https://en.wikipedia.org/wiki/Markdown) file, that is located somewhere in the underlying tree of the `/docs` folder. Article can be located in the `/docs` folder itself, or preferably, in appropriate [category](#categories). Before you create an article, please take some time to consider the proper (sub)category for your article. For editing markdown files, you can use whatever text editor you like, we recommend using [VS Code](https://code.visualstudio.com/) (or it's FOSS derivates), or dedicated markdown editors that have the ability to display the rendered text.

#### Creating new article
When you have decided on an appropriate category for your article, simply create a new Markdown file in there. The naming should follow kebab-case convention, and should be descriptive of your article (ideally, if not excessively long, should be the title of the article). For example, if you are writing about extinction of dinosaurs, a filename might look like `The-extinction-of-dinosaurs-66-millions-years-ago.md` . Once you have created the file, you **always have to** provide a number 1 heading, which is your article's name:
```markdown
# The extinction of dinosaurs, 66 million years ago
```
Your markdown file can also contain a [front matter](#front-matter) section (that has to be on the top of the file, even before the number 1 heading), that defines some extra parameters (like custom URL, custom name, specific position in the sidebar, etc. For more details see [Docusauru's docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)):
```markdown
---
sidebar_position: 3
slug: /extinction-of-dinos
title: Extinction of dinosaurs, 66 million years ago
---
```

After you have your number one heading, and optionally front matter, you can start writing your article. See [styling guide](#styling-guide) for inspiration on how to write well-formatted articles.

You can then head over to [submit your changes](#submitting-changes)

#### Editing existing article
You can edit any file you like, with your favourite text editor. Editing might be necessary in case of outdated or untrue information, typo correction, or better wording.

The [styling guide](#styling-guide) and [submitting process](#submitting-changes) is the same.

#### Deleting an article
Is just a matter of deleting the file from the folder. Please provide a good reason in the PR as to why you want this file to be deleted.
#### Front matter
This is a part of a Markdown file, typically on the very top of the file, that contains metadata for the rendering engine, such as the title of the text, time created, author, etc. Compatible metadata for this wiki, alongside more information can be found [here](https://docusaurus.io/docs/markdown-features#front-matter).

### Categories
A category is basically an ordinary folder located somewhere in the folder tree of the `/docs` parent folder. This folder can be named arbitrary (however try to stick with descriptive names, as well as kebab-case naming convention), since their metadata is described in an extra file created in it, called `_category_.json`. This file **has to be present** in each category folder. You can find more information about what this file can contain [here](https://docusaurus.io/docs/sidebar/autogenerated#category-item-metadata). The bare minimum is this:
```json
{
  "label": "Category Name",
  "position": positon_in_sidebar,
  "link": {
    "type": "generated-index",
    "description": "A description of your category"
  }
}
```
#### Creating new category
Is as simple as creating new folder. You can (and are encouraged to) nest them, like so:
```
category
├── subcategory1
│   ├── subsubcategory1
│   ├── subsubcategory2
│   └── subsubcategory3
└── subcategory2
    ├── subsubcategory1
    │   └── subsubsubcategory1
    └── subsubcategory2
```

#### Deleting a category
The same applies as when [removing an article](#deleting-an-article) (e.g. provide a valid reason why it should be done). You also have take into consideration it's articles, if it contains any, and where to move them after deletion.

### Submitting changes
Once you have your article written and in an appropriate category, with all images, links and formatting done, you can save the file and close the text editor. Next, you need to commit the changes to your repo. This can be done via various GUI Git clients, but also from terminal, using following:
```shell
git add .
git commit -m "[DOC] New article about extinction of dinosaurs"
git push
```

Once you have pushed the changes to your forked repo, you can head over to it in your browser, and [create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). A moderator (_and/or community_) will review your changes, optionally provides feedback on what needs to be fixed/edited, and accepts the pull request. That will include your changes into the main repo, which will automatically rebuild the webpage with your new content.


## Quick markdown guide
### Tools
Markdown is really simple to understand, and was designed to be easily readable even in its source code form. There are miriad of tools that will help you write markdown, like WYSIWYG editors (Word-like editors that compile to markdown), or editors where you write source code and you get live, rendered preview. 

You can use online tools such as [StackEdit](https://stackedit.io/app#), standalone tools like [Typora](https://typora.io/) (that also features seamless live preview), or if you are using Visual Studio Code, you can press [CTRL+K, V](https://code.visualstudio.com/docs/languages/markdown) (CTRL+K followed by V), which opens up a new pane with rendered markdown.

### Basics
**Bold text** is written by enclosing part of the text with two asterisk: `**bold text**`

_Italics_ is written by enclosing part of the text in single underscore: `_italics text_`

Headings are denoted by a hash symbol `#`, and the number of them in row denotes which heading size it is:
```markdown
# Size 1 heading (main title)
## Size 2 heading (main chapters)
### Size 3 heading (subchapters)
#### Size 4 heading (even more granular division)
```

> Quotes are written by using `>` symbol
```markdown
> Your life changing quote
```

Ordered lists are prefixed with number, like so:
```markdown
1. Item 1
2. Item 2
3. Item 3
```

Unordered lists have a dash insted of number in front:
```markdown
- Item 
- Another Item
- Another Different Item
```

Link are made from two pairs of brackets, first square ones contains the link text, and second round brackets contains the link itself:
```markdown
[link to this wiki](https://pwnagotchi-unofficial.github.io/)
```

By prefixing link with `!`, you can insert an image:
```markdown
![alt text](image.jpg)
```
Please note that the path to the image is _relative_ to the file's location, i.e. the `image.jpg` would have to be in the same folder as the source file is.

Code is written using backticks, singular backtics are used for `inline code`: `` `code` ``
By putting three consecutive backticks on a separate new line, you can create a code block:
````markdown
```
your
multiline
code
```
````
You can also specify a language that the code is in, that way the syntax highlighter will work. Note that there are some caveats, for more info see [here](https://docusaurus.io/docs/markdown-features/code-blocks#syntax-highlighting)
````markdown
```c
void main() {
    return 0;
}
```
````

### Cheatsheet
You can find a very useful cheatsheet with some more advanced tags [in this link](https://www.markdownguide.org/cheat-sheet/)

## Styling guide
### Divide article into logical chapters
The chances that you are writing a complex article are pretty high, and noone wants to dig through wall of text just to find that one important part. It is important to divide your work into chapters, that follows some logic. A good example might be [this article](/getting-started/building/Building-your-first-budget-Pwnagotchi-using-RPi-0-W). Create a cohersive text, with a beginning, an end, and with the main text. By this logic, every article should have at least 3 number 2 headings (chapters). 

First chapter usually introduces us to the article or the problematics, gives us an idea about the following work, and maybe the reasoning for its creation.

The content chapters should contain the main work - description of the problem, its dissection, solving, or a step-by-step documentation of it. It can (or rather shoud) be furthermore divided into more number 3 and 4 headings (chapters), or have multiple number 2 headings if needed. Remember, that less is sometimes more, and not to unnecessarily repeat yourself.

The last chapter should close the entire article, provide a definitive solution, closing thoughts and ideas. 

Optionally, you can provide a chapter that lists sources if needed, however due to nature of having [hotlinks](https://www.youtube.com/watch?v=dQw4w9WgXcQ) in the text itself, this shouldn't be necessary.

### Use images where needed
Don't be afraid to put in images, even if you think they won't be necessary. More often that not, it is better to have a simple image of something, rather than describing it with an entire paragraph. If you are going to provide images, try to make sure they are as high quality as possible. Screenshots should be high resolution, with clearly readable text, ideally containing only the part that interests us (e.g. crop you screenshots). Photographs should be also high resolution, with good lighting, not blurred. They can be edited in software like Gimp, Photoshop or others, for example to fix coloring, lighting, add text, arrows, etc.

Images **should not** contain any sensitive data (IP addresses not from private spaces, physical addresses, names, e-mail addresses, phone numbers, etc.). Take extra care while going over your photos, and censor everything that might be sensitive using a black strip, heavy pixelation or blur effect, or physical object such as a piece of paper. 

### Make source code readable
The beauty of Markdown is that it is well readable even in its source code form, and you can easily distinguish between different formatting options even if not rendered. Try to keep the source code readable and well written aswell. Divide paragraphs and headings by empty newlines. If you are going to put multiple commands or code snippets after each other, consider using code blocks rather than inline code tags. 

## Getting help
The best thing to do when in doubt is to get help. You can always rely on the good old UTFG and RTFM. If you still need help, you can head over to our 
[community Discord](https://discord.com/channels/717817147853766687/1166355369661042771), the link will take you to a channel dedicated to Wiki, where you can further discuss, plan, and primarily get help from the others. 
