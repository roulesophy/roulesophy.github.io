---
filename: 2023-08-01-在-tiddlywiki-中使用-css-的三個技巧.md
layout: post
title: 在 TiddlyWiki 中使用 CSS 的三個技巧
tags: TiddlyWiki
date: 2023-08-01
permalink: 20230801-tiddlywiki-css/
thumbnail: "20230801120840-Tw-css.jpeg"
comments: true
---

![Tw css]({{ site.baseurl }}/images/20230801120840-Tw-css.jpeg)    


這次我們來談談如何在 TiddlyWiki 中使用 CSS。

讀者 Ryan 問了一條關於 TiddlyWiki 的問題：

> 您好，我是Ryan，拜讀了您的blog，有css的問題想教。
> 
> 我想讓某條目的清單靠左浮動，於是我在此條目的最上方寫css，如下：`<style> li {float:left;} </style>`但這樣寫的話，會變成「全域」樣式，也就是每個條目都會讀取到，我希望CSS只作用在那一個條目就好。
> 
> 所以想請問，Tiddlywiki能在條目內容寫class供css使用嗎？或是能讀取外部的css樣式表嗎？   
> 
> 感謝，敬祝順安」

那麼這篇就來說關於 CSS 的三個技巧吧！

- 如何在 TiddlyWiki 設置 CSS
- 如何把 CSS 只作用於特定 Tiddler
- TiddlyWiki 中內置使用 CSS 的 Widget

這篇我不會介紹 CSS 是什麼，假定讀者有基本的 CSS 的認識。

## > 如何在 TiddlyWiki 設置 CSS：

在 [官方的文檔裡](https://tiddlywiki.com/static/Using%2520Stylesheets.html)有介紹如何加入 CSS ，只要把該 Tiddler Tag 上 `$:/tags/Stylesheet` 便可以了：

![TiddlyWiki css1]({{ site.baseurl }}/images/20230801120816-TiddlyWiki-css1.jpeg)  

你可以立即看到 h2 的標題已經立即轉了顏色。但因為這個設置是全局的，所以頁面上所有的 h2 element 都會 apply。

![TiddlyWiki css2]({{ site.baseurl }}/images/20230801120816-TiddlyWiki-css2.jpeg)  

## > 如何把 CSS 只應用於某些特定的 Tiddler？

[官網](https://tiddlywiki.com/static/Custom%2520styles%2520by%2520data-tags.html) 中有介紹做法叫做 data tags，例如我們可能設置以下的 css，那麼只有 tag了 exampleTag 的 Tiddler 的 `<li>` 也就是列表完素才會是綠色。

![TiddlyWiki css data tag1]({{ site.baseurl }}/images/20230801120832-TiddlyWiki-css-data-tag1.jpeg)  

這樣做，可以看到有 tag 了 exampleTag 的 Tiddler 的列表完素是綠色。

![TiddlyWiki css data tag3]({{ site.baseurl }}/images/20230801120833-TiddlyWiki-css-data-tag3.jpeg)  

但是沒有 tag 了 exampleTag 的 Tiddler 的列表完素則沒有改變。

![TiddlyWiki css data tag2]({{ site.baseurl }}/images/20230801120833-TiddlyWiki-css-data-tag2.jpeg)  

## > 部分 TiddlyWiki 內建的 Widget 也有支援 CSS class

這次我們在 CSS 檔案中加入一個叫做 sampleclass 的 CSS class，作用是把字體加大至 20 px：


![TiddlyWiki style1]({{ site.baseurl }}/images/20230801120842-TiddlyWiki-style1.jpeg)  

因為 TiddlyWiki 內建的 [LinkWidget](https://tiddlywiki.com/static/LinkWidget.html)可以加入 class 這個 attributes，所以如果我們這樣寫，那麼這個連結的字體就會變成 20px。

![TiddlyWiki style2]({{ site.baseurl }}/images/20230801120842-TiddlyWiki-style2.jpeg)  


## > 總結

這篇我們學會了：

- 如何在 TiddlyWiki 加入 CSS
- 如何把 CSS 只應用在特定的 Tiddler
- 如何在某些 Widget 中應用 CSS

如果想知多一點，可以多看 [官網](https://tiddlywiki.com)，那裡有更詳細的參考～



{% include_relative index/tiddlywiki.md %}



<!--
- [在 TiddlyWiki 中使用 CSS 的三個技巧]({{ site.baseurl }}/20230801-tiddlywiki-css/)
-->
