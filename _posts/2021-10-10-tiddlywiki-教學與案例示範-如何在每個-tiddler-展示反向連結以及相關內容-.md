---
filename: 2021-10-10-tiddlywiki-教學與案例示範-如何在每個-tiddler-展示反向連結以及相關內容-.md
layout: post
title: TiddlyWiki 教學與案例示範：如何在每個 Tiddler 展示反向連結以及相關內容？
tags: TiddlyWiki
date: 2021-10-10
permalink: 20211010-tiddlywiki-tutorial-contextual-backlinks/
thumbnail: "20211010-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20211010-1.jpeg)  
這篇我們來談談如何在每個 Tiddler 展示反向連結以及相關內容。

## 為何需要反向連結？

如果想要好好地利用 [TiddlyWiki]({{ site.baseurl }}/%E7%9F%A5%E8%AD%98%E9%80%A3%E7%B5%90%E7%9A%84%E5%B7%A5%E5%85%B7-tiddlywiki/) 作為你的筆記軟件，一個很重要的功能就是反向連接。

如果我們要組成一個知識之網，我們需要把不同的 Tiddler 互相連結。但是這樣是不夠的。

假設 Tiddler A 附上了 Tiddler B 的連結時，我們的確能在 Tiddler A 裡看到為何它會連結到 Tiddler B。

如果有了反向連結的功能，我們能夠在 Tiddler B 看到了它被 Tiddler A 連結，這樣會令這個知識之網更完整。

## 如何在每一頁裡展示反向連結？

在以前這篇 「[Zettelkasten 筆記方法在 TiddlyWiki的應用：如何建立雙向連結？]({{ site.baseurl }}/20200626-zettelkasten-tiddlywiki-bidirectional-link/)」 中，我介紹一個不需要用 Filter Expression 來寫展示反向連接的方法。但是，如果大家懂得如何使用 [Filter Expression]({{ site.baseurl }}/20200719-tiddlywiki-filter-expression/) 的 [backlinks operators](https://tiddlywiki.com/#backlinks%20Operator) 和 [List Widget](https://tiddlywiki.com/#ListWidget) 的話，其實是很容易就能夠在頁面裏展示所有的反向連結：

	<ul>
	<$list filter="[all[current]backlinks[]]">
	<li><$link/></li>
	</$list>
	</ul>

只要把以上內容放到一個 Tiddler 裡（例如叫 BacklinkDisplay），然後在需要展示反向連結的 Tiddler 裡 [Transclude with template](https://tiddlywiki.com/#Transclusion%20with%20Templates) （也就是加入 {% raw %}`{{||BacklinkDisplay}}` {% endraw %} 到要展示反向連結的 Tiddler） 便能展示該 Tiddler 的反向連結。

這個方法也可結合 [ViewTemplate]({{ site.baseurl }}/20210102-tiddlywiki-tutorial-viewtemplate-header/) 使用，便能在每個 Tiddler 都展示每個 Tiddler 的反向連結。

## 除了展示反向連結外，我們還能展示反向連結的部分內容

如果我們除了能在 Tiddler B 裡看到它被 Tiddler A 連結，也能看到為何 Tiddler A 連結到 Tiddler B，這樣會省掉很多我們理解 Tiddler A和 Tiddler B 的時間。

要這樣做又不需花時間去輸入連結的原因，一個最好的方案就是把 Tiddler A 裡包含 Tiddler B 的該行內容也在 Tiddler B 的反向連結裡展示。

那麼，我們可以如何做呢？

以前我在研究 [TiddlyRoam](https://tiddlyroam.org/) 時，我有看過有人嘗試做過這樣的事情，但是當我嘗試在該 Tiddler 使用中文時便失效。

於是我便嘗試自己做一個，以下是我的做法，source 在 [這裡]({{ site.baseurl }}/TiddlyWiki_Demo/Display_backlink_with_related_content.html)（在 TiddlyWiki Self tools Backlink with related content 這個 Tiddler）。

在這個例子裡，假設 Tiddler B 有 Tiddler A 和 Tiddler C 的連結。

做法就是首先用 ListWidget 加上 Filter Expression 列出所有的反向連接，然後在每一個反向連接裡（這裡是 Tiddler A 和 Tiddler C），把 Tiddler A 的內容搜尋一遍，把每一句含有 Tiddler B 的句子都找出來，並且放在一起展示在反向連結的下方；然後把 Tiddler C 的內容搜尋一遍，把每一句含有 Tiddler B 的句子都找出來，並且放在一起展示在反向連結的下方。

這樣有點難懂，但是以下就是例子。

![]({{ site.baseurl }}/images/20211010-2.jpeg)

![]({{ site.baseurl }}/images/20211010-3.jpeg)

![]({{ site.baseurl }}/images/20211010-4.jpeg)

我們可以看到 Tiddler A 和 Tiddler C 能顯示 Tiddler B 作為反向連接，以及Tiddler B 裡對應的內容。

在這個例子裡，我們用了幾個 operator 和 widget，分別是：

* 展示反向連結的 [backlinks operator](https://tiddlywiki.com/#backlinks%20Operator)
* 用來把內容展示在 code block 的 [codeblock widget](https://tiddlywiki.com/#CodeBlockWidget)
* 把文字用 Regular Expression （這裡拆了 新行字元 new line character）來拆成幾句的 [splitregexp operator](https://tiddlywiki.com/#splitregexp%20Operator)
* 以及比較難懂的 [search operator](https://tiddlywiki.com/#search%20Operator)，留意要 exact search 的話就是用 literal 選項

## 總結

這個例子除了示範如何顯示反向連結和相關內容外，還對一些 widgets 和 filter expression 做了一個整合的示範。

{% include_relative index/tiddlywiki.md %}