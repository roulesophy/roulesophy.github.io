---
filename: 2020-06-26-zettelkasten-筆記方法在-tiddlywiki的應用-如何建立雙向連結-.md
layout: post
title: Zettelkasten 筆記方法在 TiddlyWiki的應用：如何建立雙向連結？
tags: TiddlyWiki
date: 2020-06-26
permalink: 20200626-zettelkasten-tiddlywiki-bidirectional-link/
thumbnail: "20200626-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20200626-1.jpeg)  
最近 [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten) 這個筆記的方法也重回大家的眼前，我也分享一下這個方法在 TiddlyWiki 裡，特別是針對筆記 / tiddler 的連結的一些使用方法。

如果你是因為 Zettelkasten  這個關鍵字而來到這裡， TiddlyWiki 是一個可調整度十分大的開源筆記軟體，它的最基礎元件名為 tiddler ，大概就是 Zettelkasten 裡的卡片這個類別的東西。詳細可以看這篇：[知識連結的工具：TiddlyWiki]({{ site.baseurl }}/%E7%9F%A5%E8%AD%98%E9%80%A3%E7%B5%90%E7%9A%84%E5%B7%A5%E5%85%B7-tiddlywiki/) 。

## > Zettelkasten 方法的中心思想

這篇不詳細介紹 Zettelkasten 筆記方法了。這個方法的主要中心思想為，把一些想法以及知識，以卡片的形式寫下來，並且每一張卡片只有以自己文字寫下的一個小知識點或想法。

然後在卡片內利用一些索引的技巧，**把有關聯的卡片連結起來**，製造一個知識的網絡。

這個方法的作者 Niklas Luhmann 是一名社會學家，他就是以這個方式建立起他的知識網絡，並且藉著這個知識網絡，在他的生涯中寫了60多本書和過百篇的文章。

而看到這裡你可能會想：其實根本就是 TiddlyWiki 的用法吧！只是當年的技術問題只能用原始的卡片來記錄，現在我們可以使用數位軟體輕易地為筆記製造連結。

## > 雙向連結的功能

最近因為這套方法十分有名的 [Roam Research](https://roamresearch.com)、或是 [Obsidian](https://obsidian.md)，都以雙向連結作賣點，也就是雙向連結。

雙向連結的意思是，我們為 筆記 A 建立了一個連結到 筆記 B 後，我們可以自動在筆記 B 裡找到一個連結到筆記 A。這樣的用處是我們可以很方便地在筆記軟體裡不停地經筆記連結的方法跳轉並能返回之前的筆記，在日後查找資料時十分有用。

今天在這裏說的，就是要說明這個雙向連結功能，是如何在 TiddlyWiki 裏實踐的。

## > TiddlyWiki 的雙向連結的功能

其實 TiddlyWiki 也有內置雙向連結的功能，只是顯示不怎麼明顯。

在介紹它之前，先重溫 TiddlyWiki 的記事連結功能。

TiddlyWiki 裡把記事連結的方法有三個，第一個是 Hard Link、第二個是 Soft Link、第三個是 Tagging（標簽）。（參考：[Hard and Soft Links](https://tiddlywiki.com/static/Hard%2520and%2520Soft%2520Links.html)）

Hard Link 指的是我們在 Tiddler A 裡輸入 `[[Tiddler B]]` 的話，便會變成了一個連結，按下去會跳到 Tiddler B 裡。

Soft Link 比較複雜，比如說以 transclusion 的方法把一個 Tiddler 的內容直接顯示在另一個 Tiddler 的內容裡、又或是以 [macro]({{ site.baseurl }}/tiddlywiki-%E5%AF%A6%E7%94%A8-macro-copyblock1/) 的方法來動態顯示一個 Tiddler 的連結。

而 Tagging 指的是把一個 Tiddler 打上一個或多於一個的 Tag。由於在 TiddlyWiki 裡，一個 Tag 也可以是一個 Tiddler，所以這樣也算是一個連結。

雙向連結來說， 由於生成方式太動態的關係，Soft Link 是不能製造雙向連結的。以下介紹 Hard link 和 Tagging 是如何找到雙向連結。

## > Hard Link 的雙向連結

以下連結來說，假設我們要把 Tiddler B的連結放在 Tiddler A裏，只需要很簡單地在 Tiddler A 裡輸入 `[[Tiddler B]]` 的話，便會變成了一個連結，按下去會跳到 Tiddler B 裡。

但是，雙向連結的意思是我們應該有方法從 Tiddler B 回到 Tiddler A。我們當然可以在 Tiddler B 裡手動加插一個 Tiddler A的連結，但是這樣一旦有需要修改的時候，兩側筆記都要作出相應的改變。

幸運的是，我們可以在 Tiddler B的 Info -\> References，便能找到所有連結，筆記B的筆記。實現雙向連結。

![]({{ site.baseurl }}/images/20200626-2.jpeg)

![]({{ site.baseurl }}/images/20200626-3.jpeg)

## > Tagging 標簽的雙向連結

假設 Tiddler A 和 Tiddler B 各自加了一個名為 Tag A。

![]({{ site.baseurl }}/images/20200626-4.jpeg)

如果我們要在 Tiddler A 裡連結到 Tag A 的話，我們可以按下 Tag A 的 icon。這樣便能跳到 Tag A、以及所有帶有 Tag A 作為標簽的 Tiddler（在這個例子裡是 Tiddler A 和 Tiddler B）。

![]({{ site.baseurl }}/images/20200626-5.jpeg)

如果我們在 Tag A 這個 Tiddler 裡 ，想回到 Tiddler A 或是 Tiddler B （也就是有標簽自身的 Tiddler），我們可以在 Tag A 的 Info -\> Taggings，便能找到所有連結，筆記B的筆記。實現雙向連結。

![]({{ site.baseurl }}/images/20200626-6.jpeg)

## > 總結

既然 TiddlyWiki 本來就內置了雙向連結的功能，大家不妨在使用 TiddlyWiki 的時候不妨多加一些連結（例如是每新建一個 Tiddler 時都盡量和已有的 Tiddler 作連結），令這個自己的知識網絡變得更強大。
