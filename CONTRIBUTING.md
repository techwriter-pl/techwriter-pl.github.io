# Contributing to techwriter.pl

Thank you for your interest in contributing to techwriter.pl! This guide will
help you get started and ensure your contributions align with our standards.

## Getting Started

Before contributing, please read the [README.md](./README.md) for instructions
on setting up your environment, creating posts, and submitting pull requests.

## Best Practices for Blog Posts

- **Folder Structure**: Each post should have its own folder under `blog/`,
  named after the post's URL slug (e.g., `my-awesome-post/`).
- **File Naming**: The main content file should be named `index.md`.
- **Metadata**: Include the following metadata at the top of your `index.md`
  file:

  ```yaml
  ---
  title: 'Your Post Title'
  authors: your-author-id
  date: 'YYYY-MM-DD'
  tags:
    - tag1
    - tag2
  coverImage: 'your-image.jpg'
  ---
  ```

  - Use concise, engaging titles (avoid all caps).
  - Ensure your author ID is listed in `blog/authors.yml`.
  - Use existing tags where possible; new tags should be lowercase and
    hyphenated.
  - Place cover images in `static/img/cover/`.

- **Content**:

  - Use Markdown headers (`#`, `##`, etc.) to structure your post.
  - Add a preview section with `<!--truncate-->` to define the summary.
  - Use clear, concise language and avoid jargon unless necessary.

- **Images**:
  - Store additional images in an `images/` folder within your post's directory.
  - Provide proper attribution for external images.

## Best Practices for Events (Wydarzenia)

- **Folder Structure**: Each event should have its own folder under
  `wydarzenia/`, named after the event's URL slug.
- **File Naming**: Use `index.md` for the main content.
- **Metadata**: Include metadata similar to blog posts, with additional fields
  for event-specific details (e.g., date, location).
  - **Date**: The `date` field in the metadata should reflect the date of the
    event, not the publication date of the blog post.
- **Content**:
  - Highlight key details like date, time, location, and agenda.
  - Use Markdown for formatting and structure.

### Featuring Upcoming Events

- Events with future dates will be featured prominently on the home page to
  ensure visibility.

## Style Guidelines

- **Headers**: Use Markdown headers to organize content. Start with `#` for the
  title, followed by `##` and `###` for subsections.
- **Language**: Write in a professional yet approachable tone. Avoid overly
  technical language unless necessary.
- **Formatting**:
  - Use bullet points or numbered lists for clarity.
  - Highlight important terms with **bold** or _italic_ text.
- **Code**: Use fenced code blocks (```language) for code snippets.

## Submitting Your Contribution

1. Create a new branch for your changes.
2. Follow the steps in the [README.md](./README.md) to preview your changes
   locally.
3. Submit a pull request and request a review from the maintainers.

Thank you for contributing to techwriter.pl! Your efforts help us grow the
technical writing community.
