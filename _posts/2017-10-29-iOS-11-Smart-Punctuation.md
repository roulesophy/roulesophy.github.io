---
filename: 2017-10-29-iOS-11-Smart-Punctuation.md
layout: post
title: iOS 11 Smart Punctuation
tags: Productivity
date: 2017-10-29
comments: true
---

![header]({{ site.baseurl }}/images/20171030-1.jpeg)
iOS 11 中新增了一個對程式設計師來說十分麻煩的一個功能：Smart Punctuation。這個功能會令用家在鍵盤上打的字符有變化： 打 `' '` 時會出了 ‘ ’ 、打 `" "` 時會出了 “ ” 、打 `--` 或 `---` 時會出了 — 。由於程式裡不會有這些字符，所以對程式設計師來說最好把這個功能關掉。

## > 甚麼是 Smart Punctuation
其實為何會有這個 Smart Punctuation 呢？

在排版學裡，設計師用了一些字符來讓讀者令讀者看得更舒服，在這裡介紹幾個：

假如我們要為一些文字加入引號，為了方便閱讀我們最好用 single curly quotes (‘ ’) 又或是 double curly quotes (“ ”) 而不是 straight quotes （`' "`）。留意 curly quotes 是一對的，前引號和後引號是不同的。而 apostrophe 就是用 single right quotes (’) 。有些人還會把 curly quotes 叫做 [smart quotes](https://practicaltypography.com/straight-and-curly-quotes.html) ， 把 straight quotes 叫做 dumb quotes。  
![Smart quote##人們總喜歡用名詞來製造分化。]({{ site.baseurl }}/images/20171030-2.png)

另外，原來我們平常用的一橫也有分三種。

第一個就是平常用的 [hyphen](http://www.thepunctuationguide.com/hyphen.html)（ - ），就是用來把一些字串起來，例如 eye-opener。

第二個就是名為 [en dash](http://www.thepunctuationguide.com/en-dash.html)（ – ），這個字比 hyphen 稍長了一點（據說是因為闊度和 N 字一樣），有時用來形容數字的間距（例如 The 2010—2011 season）、又或是為兩件東西作出連結（例如 The liberal–conservative debate）。

第三個就是名為 [em dash](http://www.thepunctuationguide.com/em-dash.html)（ — ），這個字又比 en dash 稍長了一點（據說是因為闊度和 M 字一樣），用來取代逗號、取代括號、為前面作出重點等。

![]({{ site.baseurl }}/images/20171030-5.png)

我們平時用鍵盤打字時只能夠打出 straight quotes 和 hyphen，並不能打 curly quotes 、en dash 或 em dash 的，Smart punctuation 就是為了方便作家在寫文章時不用為了鍵盤上無法打出的 curly quotes 和 em dash 而設計的。這個功能讓我們在打 straight quote 時系統會自動替我們打了 curly quote、打 2 次或 3 次 hyphen 時會自動替我們打了 em dash。 ~~其實我也不明白為何打 2 次 hyphen 時會出現 em dash 而不是 en dash。~~

|我們打的字符|iOS 顯示的字符|字符名稱|
|---|---|---|
|`'`|‘ 或 ’|single curly quote|
|`"`|“ 或 ”|double curly quote|
|`--`|—|em dash|
|`---`|—|em dash|

## > 對程式設計師有甚麼影響？
更新了 iOS 11 後，由於 Smart punctuation 是預設打開的，這對程式設計師來說是一個困擾，因為程式設計師的代碼裡只有 straight quote 和 hyphen，是沒有 curly quote 、 en dash 或是 em dash 的。一旦不小心打錯了它們的話程式是不能運作的。  
![compile error##要知道，真正發生這種事時往往要用很多時間才發現自己打錯了字。]({{ site.baseurl }}/images/20171030-3.jpeg)

## > 如何解決？
而解決方法就是在設定裡的 General -> Keyboard 關掉這個功能。  
![Close smart punctuation]({{ site.baseurl }}/images/20171030-4.png)

如果日後有需要打 curly brackets 或 em dash的話，在實體鍵盤上可以用以下的快捷鍵：

|字符名稱|characters|鍵盤快捷鍵|
|---|---|---|
|opening single quote|‘|option ]|
|closing single curly quote|’|shift option ]|
|opening double curly quote|“|option [|
|closing double curly quote|”|shift option ]|
|en dash|–|option -|
|em dash|—|shift option -|

至於在虛擬鍵盤上，長按 quote 或 hyphen 便可以選擇 curly quote 、 en dash 和 em dash 了。
![Soft keyboard]({{ site.baseurl }}/images/20171030-6.jpg)