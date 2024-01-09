---
filename: 2024-01-09-如何看到-iphone-的-obsidian-的元件來進行除錯-.md
layout: post
title: 如何看到 iPhone 的 Obsidian 的元件來進行除錯？
tags: Obsidian
date: 2024-01-09
permalink: 20240109-mobile-obsidian-css-troubleshooting/
description: "本文介紹了如何在iPhone上識別和調試Obsidian元件。你可以在電腦上模擬手機界面來尋找元件，或者使用macOS和iOS的組合工具來針對iOS特有的問題進行調試。這些方法旨在提高開發者在移動平台上的工作效率，並確保Obsidian插件的順利運行。"
thumbnail: "20231223061205-CSS.jpeg"
comments: true
excerpt_separator: <!--more-->
---


![CSS]({{ site.baseurl }}/images/20231223061205-CSS.jpeg)  

我們如果要寫一些 Obsidian Plugin，或是現有的 Plugin 有問題時，我們都需要知道到底是那個元件出了問題。

由於 Obsidian 的底層是網頁，所以我們使用電腦版的 Obsidian 時，可以使用Web Developer Tools 來除錯。

但是如果我們使用的是 iOS 的 Obsidian，那麼我們可以如何除錯？

這篇介紹兩個做法。

<!--more-->

**目錄：**

* Table of Content
{:toc}

## 方法一：在電腦上模擬移動端的介面來除錯

第一個做法是在電腦上模擬移動端的介面。

我們首先在電腦的 Obsidian 上打開 View，然後 Toggle Developer Tools。

![Css]({{ site.baseurl }}/images/20231223061246-Css.jpeg)  

這樣做會打開 Developer Tools。

然後在 Console 的位置輸入 `this.app.emulateMobile(true)`。

![Emulate Mobile mode]({{ site.baseurl }}/images/20231223061214-Emulate-Mobile-mode.jpeg)  

你會發現 Obsidian 會重新打開，打開後便會變成我們在手機上看到的樣子。

這樣做，我們便可以在電腦上找出手機介面的不同元件。

![Mobile view]({{ site.baseurl }}/images/20231223061211-Mobile-view.jpeg)  

## 方法二：直接在電腦上展示 iPhone Obsidian 上的元件來除錯

但是我們會遇到更麻煩的問題。

就是有些 Obsidian 的功能是專門為了 iOS 而設，剛才的方法只是模擬在手機端上的介面，並不是在 iOS 上的介面。兩者有一點分別。

那麼對於那些只有在 iOS 上才有的功能，我們可以如何找出他們的元件？

我們首先在 macOS 上的 Safari 按 Cmd + ,，來進入 Preferences。

然後按 Advanced，再點選 Show Develop menu in menu bar。

![Dev menu]({{ site.baseurl }}/images/20231223061210-Dev-menu.jpeg)  


然後在 iPhone 上打開 Settings -> Safari -> Advanced -> 打開 Web Inspector。


![Web inspector]({{ site.baseurl }}/images/20231223061205-Web-inspector.jpeg)  

然後再把 iPhone 和電腦用數據傳輸線連接，然後在 iPhone 上打開 Obsidian。

這是我們打開 Safari，在 Developer Menu 裡會看到我們的 iPhone，然後我點選 Obsidian 的 localhost。

![Localhost]({{ site.baseurl }}/images/20231223061229-Localhost.jpeg)  

然後便會在電腦上打開了 Web Inspector 的視窗。

這樣做，我們便可以在 Safari 中找出在 iPhone 上 Obsidian 介面的元件了。

![Finish]({{ site.baseurl }}/images/20231223061218-Finish.jpeg)  

## 例子
 
一個例子如下：

在 Obsidian 1.4.16 中，iOS 上的 Mobile Toolbar 突然多了一顆收起 Mobile Toolbar 的按鈕。

![Mobile obsidian CSS1]({{ site.baseurl }}/images/20231231130450-Mobile-obsidian-CSS1.jpeg)  

對我來說，由於我覺得這個按鈕很佔位置，我不想看到這顆按扭。


這是 Obsidian 1.4.16 的 Release note。可以看到這顆按鈕只在 iOS 上生效。

![obsidian]({{ site.baseurl }}/images/20231231125736-Obsidian-1.4.16.jpeg)  


由於這只在 iOS 中出現，所以 `this.app.emulateMobile(true)` 沒有用。

所以我直接在電腦上展示 iPhone Obsidian 上的元件來找出這是什麼按鈕，然後發現這是一個 div，class 是 `mobile-toolbar-floating-options`。這是一個在 1.4.16 中新建的 div。


![CSS1]({{ site.baseurl }}/images/20240101120531-CSS1.jpeg)  

它的後面也有一個元件（`::after`）。

![CSS2]({{ site.baseurl }}/images/20240101120532-CSS2.jpeg)  

至於本來的 mobile toolbar 就放在一個 `class=mobile-toolbar-options-list` 的 div 中。 

![CSS3]({{ site.baseurl }}/images/20240101120532-CSS3.jpeg)  


所以，我們用在 [如何在 Obsidian 中更改 CSS？]({{ site.baseurl }}/20230914-obsidian-css/#step-2更改-css-1) 中學到的方法修改 CSS。

在 `.obsidian/snippets` 新建一個名為 `mobileToolbar.css` 並加入以下內容讓這兩個 div 不會顯示：

```
.mobile-toolbar-floating-options {display:none}
.mobile-toolbar-options-container.mod-fade:after {display:none}
```

然後在 Preferences -> Apperance 中 enable 這張 CSS。

![Mobile obsidian CSS2]({{ site.baseurl }}/images/20231231130451-Mobile-obsidian-CSS2.jpeg)  

然後這個很佔位置的按鈕便消失了～

![Mobile obsidian CSS3]({{ site.baseurl }}/images/20231231130451-Mobile-obsidian-CSS3.jpeg)  

希望這個小技巧可以幫到你～


<!-- Meta Summary -->
<!--
本文介紹了如何在iPhone上識別和調試Obsidian元件。你可以在電腦上模擬手機界面來尋找元件，或者使用macOS和iOS的組合工具來針對iOS特有的問題進行調試。這些方法旨在提高開發者在移動平台上的工作效率，並確保Obsidian插件的順利運行。
-->


{% include_relative index/obsidian.md %}



<!--
- [如何看到 iPhone 的 Obsidian 的元件來進行除錯？]({{ site.baseurl }}/20240109-mobile-obsidian-css-troubleshooting/)
-->
