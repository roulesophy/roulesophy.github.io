---
filename: 2019-05-04-tiddlywiki-表格教學.md
layout: post
title: TiddlyWiki 表格教學
tags: 程式學習 知識管理 TiddlyWiki
date: 2019-05-04
comments: true
---

![]({{ site.baseurl }}/images/20190504-1.jpeg)  
使用了 [TiddlyWiki]({{ site.baseurl }}/%E7%9F%A5%E8%AD%98%E9%80%A3%E7%B5%90%E7%9A%84%E5%B7%A5%E5%85%B7-tiddlywiki/) 有一段時間，今天來談談一些表格（table）中的小技巧。

## > 基本應用

這是最簡單的應用：每一行代表一個列（Row），而每一欄（Column）以`|`來分隔。我們用`|`來為表格的第一行決定了這個表格有多少列。

```md
|header 1|header 2|header 3|
|info 1|info 2|info 3|
|info 4|info 5|info 6|
```

![]({{ site.baseurl }}/images/20190504-2.jpeg)

如果想在資料格裡多於一行可以以 `<br>` 號來新增新行。

```md
|header 1|header 2|header 3|
|info 1|info 2<br>next line|info 3|
|info 4|info 5|info 6|
```

![]({{ site.baseurl }}/images/20190504-3.jpeg)

## > 格式設定

一般 TiddlyWiki 內的文字格式也是可以使用在表格裡，例如以下的格式：

| 字符 | 效果 |
|---|---|
|`// //`|斜體 (Italic)|
|`` ` `` `` ` ``|等寬字體 (Monospace)|
|`'' ''`|粗體 (Bold)|
| `__ __`|底線 (Underscore)|
|`[[ ]]`|連結 (Link)|
|`^^ ^^`|上標 (Superscript)|
|`,, ,,`|靠右 (Subscript)|

```md
|header 1|header 2|header 3|
|''info 1''|__info 2__|//info 3//|
|`info 4`|[[info 5]]|a^[^2]^^ b,,2,,|
```

![]({{ site.baseurl }}/images/20190504-4.jpeg)

## > 全列 Header, footer 和 Caption

* 要為全列加上 Header，可以在行末加上 `h`。
* 要為全列加上 Footer，可以在行末加上 `f`。
* 要為全列加上 Caption，可以在行末加上 `c`。留意 Caption 的那行只要有一欄便可。

另外，如果要為特定的格子變成 Header 的格式，只要在表格的內容後加上一個 `!`。

一起看例子：

```
|this is a caption|c
|header 1|header 2|header 3|h
|info 1|info 2|info 3|
|info 4|!info 5|info 6|
|info 7|info 8|info 9|
|footer 1|footer 2|footer 3|f
```

![]({{ site.baseurl }}/images/20190504-5.jpeg)

## > 表格的對齊（Alignment）

想為表格內的內容對齊也是可以的，可以向上下左右對齊。

* 要向左對齊，只要在表格的內容後加上一個空格。
* 要向右對齊，只要在表格的內容後前加上一個空格。
* 要置中對齊，只要在表格的內容前和後各加上一個空格。
* 要向上對齊，只要在表格的內容前加上一個 `^`。
* 要向下對齊，只要在表格的內容後加上一個 `,`。
* 上下對齊、左右的對齊、單格的 Header 和格式可以混著用。

一起看例子：

```md
|!header 1|!header 2 | !header 3|
|++++++++++++|++++++++++++|++++++++++++|
|info 1 | info 2 | info 3|
|info 4<br>new line|^info 5|,info 6|
|info 7<br>new line|^info 8 |^ info 9|
|info 10<br>new line|,info 11 |, info 12|
```

![]({{ site.baseurl }}/images/20190504-6.jpeg)


## > 合併儲存格

* 如果要合併左格的內容，只需在該格裡放進 `<`。
* 如果要合併右格的內容，只需在該格裡放進 `>`。
* 如果要合併上格的內容，只需在該格裡放進 `~`。

簡單例子：

```
|sub 1|<|sub 2|
|sub 3|sub 4|~|
```

![]({{ site.baseurl }}/images/20190504-7.jpeg)

再來是一個比較複雜的例子，留意 info 7 的那一格是如何做到 2x2 的合併：

```
|info 1|info 2|info 3|info 4|
|info 5|info 6|info 7|<|
|~|info 8|~|
|~|info 9|>|info 10|
```

![]({{ site.baseurl }}/images/20190504-8.jpeg)


## > 表格內放置表格

由於表格的一列只能用一行來表達，所以要處理一些複雜的表格會比較麻煩，但是我們可以以把一個 Tiddler 的內容放入表格的 Tiddler 來解決。這個在 TiddlyWiki 裡名為 [Transclusion](https://tiddlywiki.com/static/Transclusion%2520in%2520WikiText.html)。

這個方法比起 [AsciiDoc 的做法]({{ site.baseurl }}/AsciiDoc-%E8%A1%A8%E6%A0%BC%E6%95%99%E5%AD%B8/) 的來得麻煩，但是要修改時易讀性大勝。

我們看個例子。

這是一個名為 Table 的 Tiddler：

```
|inside 1|inside 2|
|inside 3|inside 4|
```

我們要把 Table 這個 Tiddler 放入（Transclude）進另一個表格裡。

```
|header 1|header 2|header 3|
|info 1|info 2<br><$transclude tiddler="Table" mode="block"/>|info 3|
|info 4|info 5|info 6|
```

![]({{ site.baseurl }}/images/20190504-9.jpeg)

## > 表格裡插入列表

和表格內放置表格一樣，我們也要使用 [Transclusion](https://tiddlywiki.com/static/Transclusion%2520in%2520WikiText.html) 來達到這個效果。以下是例子：

這是一個名為 List 的 Tiddler：

```md
* item 1
* item 2
```

我們要把 List 這個 Tiddler 放入（Transclude）進另一個表格裡。

```md
|header 1|header 2|header 3|
|info 1|info 2<br><$transclude tiddler="List" mode="block"/>|info 3|
|info 4|info 5|info 6|
```

![]({{ site.baseurl }}/images/20190504-10.jpeg)

## > 參考資料

* [TiddlyWiki 官網：Tables in WikiText ](https://tiddlywiki.com/static/Tables%2520in%2520WikiText.html)

{% include_relative index/ascii_character.md %}


{% include_relative index/tiddlywiki.md %}