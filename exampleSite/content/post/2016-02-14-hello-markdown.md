---
title: A Plain Markdown Post
author: Yihui Xie
date: '2016-02-14'
categories:
  - Example
  - Hugo
tags:
  - blogdown
  - Markdown
  - MathJax
  - Pandoc
  - RStudio
---

This sample post is mainly for
[**blogdown**](https://github.com/rstudio/blogdown) users. If you do not use
**blogdown**, you can skip the first section.

# 1. Markdown or R Markdown

This is a post written in plain Markdown (`*.md`) instead of R Markdown
(`*.Rmd`). The major differences are:

1.  You cannot run any R code in a plain Markdown document, whereas in an R
    Markdown document, you can embed R code chunks (```` ```{r} ````);
2.  A plain Markdown post is rendered through
    [Goldmark](https://gohugo.io/overview/configuration/) by default, and an R
    Markdown document is compiled by
    [**rmarkdown**](http://rmarkdown.rstudio.com) and
    [Pandoc](http://pandoc.org).

There are differences in syntax between Goldmark's Markdown and Pandoc's
Markdown. For example, Goldmark does not support LaTeX math and Pandoc does. I
have added the KaTeX support to this theme (i.e.,
[hugo-xmin](https://github.com/yihui/hugo-xmin))

As of Hugo v0.122.0, you can enable typesetting \(\LaTeX\) math in Markdown using
the standard syntax. To do so, you have make use of the goldmark `passthrough`
extension inside your config file (e.g., `hugo.yaml`). Afterwards you can use
standard \(\TeX\) syntax (inline: `\( ... \)`; display style: `$$ ... $$`) to
display formulae, e.g., \(S_n = \sum_{i=1}^n X_i\). For details, please refer to
the official [Hugo docs](https://gohugo.io/content-management/mathematics/).
Alternatively, you may see
[this post](https://yihui.org/en/2018/07/latex-math-markdown/) for a general
solution, which works with any Hugo version and requires no configuration.

When creating a new post, you have to decide whether the post format is Markdown
or R Markdown, and this can be done via the `rmd` argument of the function
`blogdown::new_post()`, e.g.

``` r
blogdown::new_post("Post Title", rmd = FALSE)
```

Actually I recommend you to use the RStudio addin "New Post" instead:

![RStudio addin New Post](https://bookdown.org/yihui/blogdown/images/new-post.png)

# 2. Sample Text

## Second-level header

### Third-level header

#### Fourth-level header

A paragraph (with a footnote):

**Lorem ipsum** dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore *magna aliqua*. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.[^1]

[^1]: I'm sure you are bored by the text here.

A blockquote (a gray bar at the left and lightgray background):

> Quisque mattis volutpat lorem vitae feugiat. Praesent porta est quis porta
> imperdiet. Aenean porta, mi non cursus volutpat, mi est mollis libero, id
> suscipit orci urna a augue. In fringilla euismod lacus, vitae tristique massa
> ultricies vitae. Mauris accumsan ligula tristique, viverra nulla sed, porta
> sapien. Vestibulum facilisis nec nisl blandit convallis. Maecenas venenatis
> porta malesuada. Ut ac erat tortor. Orci varius natoque penatibus et magnis
> dis parturient montes, nascetur ridiculus mus. Nulla sodales quam sit amet
> tincidunt egestas. In et turpis at orci vestibulum ullamcorper. Aliquam sed
> ante libero. Sed hendrerit arcu lacus.

Some code (with a drop-shadow effect):

``` js
(function() {
  var quotes = document.getElementsByTagName('blockquote'), i, quote;
  for (i = 0; i < quotes.length; i++) {
    quote = quotes[i];
    var n = quote.children.length;
    if (n === 0) continue;
    var el = quote.children[n - 1];
    if (!el || el.nodeName !== 'P') continue;
    // right-align a quote footer if it starts with ---
    if (/^—/.test(el.textContent)) el.style.textAlign = 'right';
  }
})();
```

A table (centered by default):

| Sepal.Length | Sepal.Width | Petal.Length | Petal.Width | Species |
|-------------:|------------:|-------------:|------------:|:--------|
|          5.1 |         3.5 |          1.4 |         0.2 | setosa  |
|          4.9 |         3.0 |          1.4 |         0.2 | setosa  |
|          4.7 |         3.2 |          1.3 |         0.2 | setosa  |
|          4.6 |         3.1 |          1.5 |         0.2 | setosa  |
|          5.0 |         3.6 |          1.4 |         0.2 | setosa  |
|          5.4 |         3.9 |          1.7 |         0.4 | setosa  |

An image (automatically centered when it is appropriate):

![Happy Elmo](https://slides.yihui.org/gif/happy-elmo.gif)

Looks good?
