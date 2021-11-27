---
filename: 2021-11-27-ios15-使用picture-in-picture-作為剪貼簿應用程式的yoink.md
layout: post
title: iOS15 使用picture in picture 作為剪貼簿應用程式的Yoink
tags: iOS工作術
date: 2021-11-27
permalink: 20211127-ios15-yoink-review/
thumbnail: "20211127-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20211127-1.jpeg)  
在 [剪貼簿應用程式]({{ site.baseurl }}/%E5%89%AA%E8%B2%BC%E7%B0%BF%E6%87%89%E7%94%A8%E7%A8%8B%E5%BC%8F/) 這篇文章裡，我們介紹了在 iOS 可以如何使用它們（比如是 [Yoink](https://apps.apple.com/us/app/yoink-improved-drag-and-drop/id1260915283) 或 [Gladys](http://www.bru.build/app/gladys)）。可是，因為 iOS 的限制，我們無法長按複製時便把它們自動放在這些剪貼簿應用程式裡。主要原因是 iOS 會因應系統資源來自動關閉應用程式，所以就算這些剪貼簿應用程式能夠在背景執行，這個功能也會隨時被系統關閉。

在 iOS15 裡， [Yoink](https://apps.apple.com/us/app/yoink-improved-drag-and-drop/id1260915283) 這個剪貼簿應用程式很巧妙地運用了 [picture in picture](https://support.apple.com/guide/iphone/multitask-with-picture-in-picture-iphcc3587b5d/ios) 的特性來解決這個問題。我們一齊來看看。

我們可以在這裡打開它的 Monitor clipboard 的功能，打開後會打開一個 picture in picture 的視窗。由於有這個在後台運行著，所以我們在系統裡複製任何東西時，也會順便複制一份到 yoink 裡。

![]({{ site.baseurl }}/images/20211127-2.gif)

這個功能不只是在 iPad 中才能用，在 iPhone 也能使用。

![]({{ site.baseurl }}/images/20211127-3.jpeg)

關於這個用 picture in picture 來監控系統剪貼簿的視窗裡，其實也有一些有趣的設定。

第一就是我們打開 Monitor clipboard 時，我們可以按暫停 / 繼續鍵來暫停或繼續把複製到系統剪貼的東西放到 Yoink 裡。

![]({{ site.baseurl }}/images/20211127-4.gif)

第二就是我們可以按前轉或後退按鈕來過濾要的文件格式。例如是下圖，我們設定成只把圖片放到 yoink 的話，我們複製文字的話並不會自動放到 yoink 裡，但複製圖片的話會自動放到 yoink 裡。

![]({{ site.baseurl }}/images/20211127-5.gif)

當我們要把以前複製過的東西貼上，就要打開 yoink ，找出想貼左的東西放到系統剪貼簿裡，再在應用程式中貼上。這也有點麻煩，所以可以用 slide over 來打開 yoink 會比較方便一點。

![]({{ site.baseurl }}/images/20211127-6.gif)

以上，有剪貼簿應用程式需求的 iOS 人可以試試看。

{% include_relative index/skills_iOS.md %}
