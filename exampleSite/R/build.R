file.copy('content/_index.markdown', '../README.md', overwrite = TRUE)
if (Sys.which('sed') != '') system("sed -i '' -e '1,6d' -e '34,38d' ../README.md")
cat(
  '[![Screenshot](https://github.com/yihui/hugo-xmin/raw/master/images/screenshot.png)](https://xmin.yihui.name)\n',
  file = '../README.md', append = TRUE
)
