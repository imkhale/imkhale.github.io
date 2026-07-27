---
title: "Welcome to the blog"
description: "Why this blog exists and what to expect: notes on analytics engineering, BI, and data modeling."
pubDate: 2026-01-01
tags: ["meta"]
---

This is a sample post to confirm Astro's Content Collections are wired up
correctly. Delete it once you've published your first real one.

## Writing a new post

Add a new `.md` or `.mdx` file under `src/content/blog/`. The required
frontmatter fields are:

```yaml
---
title: "Your title"
description: "One sentence for the listing page and SEO."
pubDate: 2026-01-15
tags: ["dbt", "bigquery"]
---
```

`updatedDate` and `draft` are optional — a post with `draft: true` is skipped
by the listing page but still builds, so you can preview it via its direct
URL before flipping the flag.
