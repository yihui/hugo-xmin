/**
 * 本代码修改自：https://www.cnblogs.com/qiudeqing/p/3229583.html
 *
 *
 */
// =================添加变量控制标题深度
// 默认是h2至h4;
// 定于全局divID，方便toc函数和diyStyle参数调用
function isInArray(value, arr)
{
    for (var i = 0; i < arr.length; i++)
    {
        if (value === arr[i])
        {
            return true;
        }
    }
    return false;
}

function toc(firstLevel = 2, lastLevel = 3, divID = "TOC", divToSearch = "")
{

    // 如果参数设置不正确的调整
    if (firstLevel < 1 || firstLevel > 6 || firstLevel > lastLevel)
        firstLevel = 2;
    if (lastLevel < firstLevel || lastLevel > 6)
        lastLevel = 3;
    if (divToSearch == "")
    {
        elementToSearch = document.body;
    }
    else
    {
        elementToSearch = document.getElementById(divToSearch);
    }
    var depth = lastLevel - firstLevel + 1;
    var searchHeadings = new Array();

    // Find the TOC container element.
    // If there isn't one, create one at the start of the document.
    var toc = document.getElementById(divID);
    if (!toc)
    {
        toc = document.createElement("div");
        toc.id = divID;
        document.body.insertBefore(toc, document.body.firstChild);
    }
    // Find all section heading elements
    var headings;
    // =================生成要生成toc标题的标签
    for (var i = firstLevel; i < firstLevel + depth; i++)
    {
        searchHeadings[i] = "H" + i;
    }
    //if (document.querySelectorAll) // Can we do it the easy way?
    //    headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    //else   // Otherwise, find the headings the hard way
    // ==================用elementToSearch控制搜索范围
    headings = findHeadings(elementToSearch, [], searchHeadings);
    // Recursively traverse the document body looking for headings
    function findHeadings(root, sects)
    {
        for (var c = root.firstChild; c != null; c = c.nextSibling)
        {
            if (c.nodeType !== 1)
                continue;
            //if (c.tagName.length == 2 && c.tagName.charAt(0) == "H")
            // ================= 判断tagName是否在设置的标签里面
            if (isInArray(c.tagName, searchHeadings))
                sects.push(c);
            else
                findHeadings(c, sects);
        }
        return sects;
    }
    // Initialize an array that keeps track of section numbers.
    var sectionNumbers = [0, 0, 0, 0, 0, 0];
    // Now loop through the section header elements we found.
    for (var h = 0; h < headings.length; h++)
    {
        var heading = headings[h];
        // Skip the section heading if it is inside the TOC container.
        if (heading.parentNode == toc)
            continue;
        // Figure out what level heading it is.
        var level = parseInt(heading.tagName.charAt(1));
        if (isNaN(level) || level < 1 || level > 6)
            continue;
        // Increment the section number for this heading level
        // and reset all lower heading level numbers to zero.
        sectionNumbers[level - 1]++;
        for (var i = level; i < 6; i++)
            sectionNumbers[i] = 0;
        // Now combine section numbers for all heading levels
        // to produce a section number like 2.3.1.
        //=================修改成从firstLevel开始生成toc
        var sectionNumber = sectionNumbers.slice(firstLevel - 1, level).join(".")
            // Add the section number to the section header title.
            // We place the number in a <span> to make it styleable.
            var span = document.createElement("span");
        span.className = "TOCSectNum";
        span.innerHTML = sectionNumber;
        heading.insertBefore(span, heading.firstChild);
        //===============改成直接在headlines上添加id用于链接跳转
        heading.setAttribute("id", divID + sectionNumber);

        // Wrap the heading in a named anchor so we can link to it.
        //var anchor = document.createElement("a");
        //anchor.name = "TOC"+sectionNumber;
        //heading.parentNode.insertBefore(anchor, heading);
        //anchor.appendChild(heading);

        // Now create a link to this section.
        var link = document.createElement("a");
        link.href = "#" + divID + sectionNumber; // Link destination
        link.innerHTML = heading.innerHTML; // Link text is same as heading
        // Place the link in a div that is styleable based on the level.
        var entry = document.createElement("div");
        //=================修改成firstLevel的标题在生成cssClass的名称的level为1开始递增
        level = level - firstLevel + 1;
        entry.className = "TOCEntry TOCLevel" + level;
        entry.appendChild(link);
        // And add the div to the TOC container.
        toc.appendChild(entry);
    }
}

// 添加样式函数
function addNewStyle(newStyle)
{
    var styleElement = document.getElementById('styles_js');

    if (!styleElement)
    {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}
// 自定义样式，用不同的divid也可以有默认样式
function diyStyle(divID)
{
    addNewStyle('#' + divID + ' .TOCSectNum { padding-right: 0.3em; }');
    addNewStyle('#' + divID + ' a { text-decoration: none; color: #0077bb !important; }');
    addNewStyle('#' + divID + ' .TOCLevel1 { padding-left: 0.2em; border-left:#0077bb solid 0.2em;}');
    for (i = 2; i <= 6; i++)
    {
        k = i - 1;
        addNewStyle('#' + divID + ' .TOCLevel' + i + ' { margin-left: ' + k + 'em;}');
    }
    addNewStyle('#' + divID + ' {float:right;margin:0 0 1em 1em;position:fixed;top:50px;right:50px;border: 1px solid #ccc;webkit-border-radius: 6px;moz-border-radius: 6px;border-radius: 12px;padding: 0.8em;}');
}
