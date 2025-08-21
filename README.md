# HUGO XMIN

## _Keep it simple, but not simpler_

**XMin** is a Hugo theme written by [Yihui Xie](https://yihui.org) in about four hours: half an hour was spent on the Hugo templates, and 3.5 hours were spent on styling. The main motivation for writing this theme was to provide a really minimal example to beginners of Hugo templates. This XMin theme contains about 140 lines of code in total, including the code in HTML templates and CSS (also counting empty lines).


``` bash
find . -not -path '*/exampleSite/*' \( -name '*.html' -o -name '*.css' \) | xargs wc -l
```

```
      12 ./layouts/single.html
      20 ./layouts/list.html
      13 ./layouts/terms.html
       5 ./layouts/404.html
       0 ./layouts/_partials/foot_custom.html
       0 ./layouts/_partials/head_custom.html
       9 ./layouts/_partials/footer.html
      20 ./layouts/_partials/header.html
      51 ./static/css/style.css
       7 ./static/css/fonts.css
     137 total
```

I can certainly further reduce the code, for example, by eliminating the CSS, but I believe a tiny bit of CSS can greatly improve readability. You cannot really find many CSS frameworks that only contain 50 lines of code.

[![Screenshot](https://github.com/yihui/hugo-xmin/raw/master/images/screenshot.png)](https://xmin.yihui.org)
