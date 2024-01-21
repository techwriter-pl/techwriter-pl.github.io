# techwriter.pl

This is a blog for technical writers, created using
[Docusaurus](https://docusaurus.io).

Notable topics below:

- Creating a post
- Setting up a GitHub codespace
- Setting up VS Code in your codespace

## Creating a new post

Your post is a Markdown file with a `.md` extension, usually along with some
graphics. The post is identified by a title, date, author, and tags.

**Prerequisite:** Before you add your first post, set up your codespace and VS
Code. See the relevant sections below.

To add a post:

0. Create a branch. You may be working from a GitHub issue. If so,
   [read about creating branches here](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue).

   If you are not working from a GitHub issue, you can manually create a branch.
   In VS Code, check the branch name at the bottom left. The branch name at this
   point should be `main` and you should have the latest changes. Click the
   branch name and select **Create new branch**. Name your branch something
   appropriate.

1. Start a preview. Open the terminal in VS Code and run the following commands:

   ```bash
   yarn install
   yarn start
   ```

   The preview should open in a new browser tab. Look out for messages from VS
   Code, there might be something there for you to enable, etc.

2. In the `blog` directory, create a new folder. The name of the folder is going
   to be the URL of your blog post.

   **HINT:** You can create a file and a folder in one go. Just select **Add
   file** and type in the folder name, slash, and then file name. VS Code
   creates the entire path. For example, `soap-2045-recap/index.md`.

3. Inside the folder, create a file called `index.md`. This file will contain
   your post contents.

4. At the top of the file, create a Markdown prolog with all the necessary
   metadata. For example:

```md
---
title:
  'Oferta pracy: Technical Content Writer (CKEditor) – Warszawa, Poznań, zdalnie'
authors: mojk
date: '2023-09-13'
tags:
  - 'oferty-pracy'
  - 'praca'
  - 'kariera'
coverImage: 'CKSource-logo-2.jpg'
---
```

- `title`: Look at the home page. The title will be displayed there prominently.
  It wil encourage people to read or not to read the article. Make sure it's not
  too long, more than 7 words is really pushing it. Don't use all caps.
- `authors`: What is your author ID? You can check in `blog/authors.yml`.
  (**HINT:** Press Ctrl+P or Cmd+P to open a file more easily, just type in the
  file name in the field that pops up and select the file you want to open.)

  If you're not in `authors.yml`, maybe you should be added? 🤔

  The `authors` field can be a single value or an array:

  ```
  authors: ['mojk', 'pensjonatus`]
  ```

- `date`: notice the date format: `YYYY-MM-DD`. The date becomes the ID for
  Disqus.
- `tags`: look at the list of used tags. Which ones suit your needs the most?
- `coverImage`: this image will be displayed on the home page preview of your
  post. Note that this image is located in the `static/img/cover` folder.

5. Add a cover image to the `static/img/cover` folder. When your VS Code is open
   in your browser, you can drag-and-drop the image from your local file
   explorer into the folder in the browser window. The optimal image dimension
   is 900x600 px.

6. Add your post contents. Read about Markdown features in
   [the official Docusaurus Markdown guide](https://docusaurus.io/docs/markdown-features).

7. Every post needs a preview section. This preview section appears as the
   summary of the blog post, and there's a "read more" link underneath. To mark
   where the preview section ends, add the following as a separate line:

   ```html
   <!--truncate-->
   ```

8. We use Code Spell Checker (cSpell). If you use unfamiliar words in your post,
   cSpell will underline them. If it's actually a word you want to use, hover
   over it with your mouse and select **Quick actions**, and select **Add to
   workspace settings**. This saves the word to be used in other posts and by
   other users of the project.

   **HINT:** Instead of hovering with your mouse, you can press Ctrl+P or Cmd+P.

9. We use Prettier to format code. It makes it easier for others to add comments
   to code fragments.

   **HINT:** Use Ctrl+S or Cmd+S shortcut.

10. If you want to add images, in the folder where you created your `index.md`
 file, create an `images` folder and place them there. Remember that file
 paths in this environment are **case sensitive**.

If you are working in VS Code in the browser, you can drag-and-drop images from
your file explorer into the browser window.

## Creating a PR

When you're done editing, it's time to create a **Pull Request (PR)**. Your
teammates can review the PR and give you helpful hints. The PR will also trigger
a validation build which can help you catch problems with broken links, etc.

1. Stage your changes. In VS Code, switch to the **Version control** tab (the
   little Git icon, looks like a graph). Hover over the list of changed files.
   If you hover over the top part, of the list, you should see a **+** (plus)
   icon. When you click it, all files are staged.
2. In the box above the list of staged files, type in the commit message. make
   is descriptive.
3. Click **Synchronize** (or Push).
4. Once your changes are pushed, VS Code will pop up a message to create a Pull
   Request. Click it and follow the onscreen guide.

   Don't forget to add reviewers by clicking **Request review**.

You can also create a PR in GitHub. Navigate to the root of the repo. You should
see an alert at the top which tells you pushed a new branch and you can create a
pull request.

### Delete the branch after merge

Once your PR is approved and the checks have passed, merge it and delete the
branch. Thanks~!

## Setting up a GitHub codespace

The easiest way to contribute to the site, is to set up a GitHub codespace. This
allows you to run VSCode in the browser, run a site preview, create branches and
commits, etc.

You can save a codespace and keep it for future use, so the procedure below is
one-time only.

To set up a new codespace:

1. In GitHub, click your user avatar and select **Your Codespaces**. If you
   don't see that option, go directly to
   [https://github.com/codespaces](https://github.com/codespaces).
2. Click **New codespace**.
3. Select the `techwriter-pl/techwriter-pl.github.io` repository.
4. Leave the rest as is, or change machine type to a stronger one 💪.
5. Click **Create codespace**.
6. Back on your codespaces dashboard, click the little ribbon that says "Keep
   codespace". This saves your codespace for later.
7. [Optional]: Rename the codespace.

Doing all this, also opens a browser tab with VS Code running.

## Setting up VS Code in your codespace

If you selected to keep your codespace, you can return to your VS Code later.
It's a good idea to configure it now, so your work goes more smoothly in the
future.

Install the following extensions:

- Code Spell Checker
- Polish - Code Spell Checker
- ESLint
- GitHub Actions (from the publisher called GitHub)
- MDX
- Prettier - Code formatter

## Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to
build the website and push to the `gh-pages` branch.
