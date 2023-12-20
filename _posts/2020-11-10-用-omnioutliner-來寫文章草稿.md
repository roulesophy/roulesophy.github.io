---
filename: 2020-11-10-用-omnioutliner-來寫文章草稿.md
layout: post
title: 用 Omnioutliner 來寫文章草稿
tags: 工作心法 程式學習 iOS工作術
date: 2020-11-10
permalink: 20201110-omnioutliner-blog-post-draft/
thumbnail: "20201110-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20201110-1.jpeg)  
如果大家有寫文章的習慣，相信其中一個遇到的問題是寫初稿的時候因為結構有問題要不斷修改、或是打字很慢所以花了很多時間才能完成初稿，又或是無法擁有一段完整的時間坐在電腦前完成初稿。這篇文章介紹的，是如何可以用空餘的時間快速地完成一篇初稿。

在這篇裡，我所使用的方法是利用 iPhone 的聽寫功能作輸入，在這裡分享我以前的做法和現在的做法給各位。

## 之前的做法：用 TickTick 來寫文章

以前我寫文章的流程一般都是平時在街上逛街 / 等待時用聽寫的方法把文章的內容變成文字並記在我的收集箱 TickTick 裡，然後在 TickTick 裡把這些文字複製到 [Ulysses](https://ulysses.app) 裡變成初稿並修改。

關於這個聽寫的功能，可以看看 [這篇]({{ site.baseurl }}/20201031-ios14-back-tap-dictate-text-to-ticktick/)。在那一篇裡是把靈感和想法放到 TickTick 裡，而這裡的使用方法完全一致，只是進行聽寫的不是靈感，而是初稿的內容。

這樣做的確可以省掉很多打字的時間，並且隨時隨地都能輪入內容。 例如在街上散步、或是在乘車時也能輸入內容。

但是用這個方法會有以下的不足之處。

第一個不足之處是在進行聽寫的方式輸入文章入前，大腦裡一定要已經已經要有全文的內容架構和大概內容，這樣才能夠把整篇文章以聽寫的方式進行輸入。

如果腦裡沒有文章結構的話，很可能會變成任意地聽寫輸入內容的不同片段，這麼做的話，之後編輯這篇"初稿"時會十分吃力，很可能覺得想重新寫一篇會比較快。

第二個不足之處就是當我正在聽寫輸入文章初稿時，如果突然有一些新靈感要進行聽寫輸入的話，因為這樣做的話 TickTick 裡同一時段裡會有文章初稿和其他的靈感想法，導致整理時會十分混亂要花很多時間整理。

第三個不足之處是我每次只能夠聽寫輸入一篇文章，因為聽寫的地方只有一個，所以我無法同時為不同的題目聽寫輸入文章內容。

第四個不足之處就是在聽寫輸入文章內容時會有很多分段，當我要把這些分段放到修改初稿的地方（對我來說就是 Ulysses）時，我需要把每個分段都分別地複製貼上，一旦有很多分段的話，這樣會花掉很多時間。

最近因為某些原因有在研究 OmniOutliner 這個應用程式，然後意外地發現可以用這個應用程式來寫文章初稿。

這個方法是要怎樣做呢？

## 現在的做法：使用 OmniOutliner

在介紹方法前，先來介紹 [OmniOutliner](https://www.omnigroup.com/omnioutliner/) 這個應用程式。

這個應用程式是一個用來整理想法和寫大綱的一個應用程式，分別有 [macOS](https://www.omnigroup.com/omnioutliner/) 和 [iOS](https://www.omnigroup.com/omnioutliner/ios/) 的版本。

![]({{ site.baseurl }}/images/20201110-2.jpeg)

我們可以看到，這份大綱可以有不同的層級，而這些層級是十分容易能夠更改次序和層級縮排。 這一點裡是我們寫文章初稿時修改結構的重要工具。

![]({{ site.baseurl }}/images/20201110-3.jpeg)

所以，當我們想寫一篇文章時，我們可以先在 OmniOutliner 裡新建一個檔案（一篇文章一個檔案），

當我們需要進行語音輸入初稿內容時，可以打開該 OmniOutliner 檔案，並直接在 OmniOutliner 裡的文字輸入框裡進行聽寫，並隨時發現結構有問題修改內容的次序和結構。

![]({{ site.baseurl }}/images/20201110-4.jpeg)

![]({{ site.baseurl }}/images/20201110-5.jpeg)

要注意的是由於這只是很快速的初稿，我不會把圖片放進 OmniOutliner，找圖片這個步驟我會留待使用 Ulysses 進行編輯時才會做。

最後，我們可以使用一個名為 [OmniJS](https://omni-automation.com/omnioutliner/item.html) 的程式框架來進行滙出到不同的文字編輯器裡進行修改（例如 Ulysses），以下我會用 Ulysses 來作例子。

我修改了[網上的一些 OmniJS 程式碼](https://www.productived.net/exporting-markdown-omnioutliner/)的做法，把我在 OmniOutliner 裡的內容變做包含了標題語法的 Markdown 文字格式，然後再運行這個 Shortcut 把廣東話以文字替換的方式盡量轉成書面語，最後再用 URL Scheme 的方式把內容匯出到我使用的文字編輯器 Ulysses 裡。

大家可以參考一下這份的 OmniJS 的程式碼，有程式底子的朋友歡迎修改，沒有程式底子的朋友也可以直接使用，只是變得只能滙出到 Ulysses 了。

## 要如何滙入這些工具？

第一步：我們可以下載這兩個 Shortcuts:

* [口語轉書面語](https://www.icloud.com/shortcuts/0a29e3174ad44869a559efd68204ad2a)
* [Share 口語轉書面語 to Ulysses](https://www.icloud.com/shortcuts/d6486c055cf44700be6eb8074f46494b)

第二步：我們可以在[這裡](https://github.com/roulesophy/ios-omnioutliner-to-ulysses/raw/main/blog.omnijs.zip)下載程式碼（omni.js），解壓縮後放到 iCloud Drive 的其中一個資料夾裡。

第三步：打開 OmniOutliner 的其一個文件，然後根據以下圖片進行操作：

![]({{ site.baseurl }}/images/20201110-6.jpeg)

![]({{ site.baseurl }}/images/20201110-7.jpeg)

![]({{ site.baseurl }}/images/20201110-8.jpeg)

然後應該在這裡看到一個名為 blog 的東西，代表程式碼成功滙入。

![]({{ site.baseurl }}/images/20201110-9.jpeg)

## 要如何使用這個工具？

我們可以在 OmniOutliner 想要匯出的初稿文件裡，進行以下的操作。然後打開 Ulysses 便會看到滙出的文章初稿內容。

![]({{ site.baseurl }}/images/20201110-10.gif)

## 這個做法有什麼優點？

第一個優點是，只要我有一些想法可以用來寫文章的話，我便可以把我的想法以及內容記錄在 該OmniOutliner 裡。 不會把不同的文章初稿內容混在一起。

第二個優點是因為分開了檔案的關係，我可以同時去為數篇文章進行初稿的聽寫輸入。可能我搭一個小時的地鐵，已經可以同時為兩三篇文章聽寫輸入內容並整理結構。

第三個優點是我開了我成篇文章有一個結構以及大概的內容之後，我可以一鍵把內容放在 Ulysses 裡，省掉以前很多複製貼上的時間。

第四個優點是在聽寫輸入內容時，如果發現結構有問題，也可以很方便地利用 Drag and Drop 的方式在 OmniOutliner 裡更改結構，不用留待 Ulysses 裡才更改。而 Drag and Drop 的方式使得就算在街上用 iPad / iPhone 進行修改也十分容易，不用把內容剪下貼上來更改次序。

## 結論

 我相信用這個方法可以使平時對寫文章有恐懼的人嘗試踏出第一步，分享想法或是經驗，使這個世界變得更好。

 一般來說，願意寫文章但是無法寫文章的人可能遇到的問題有：

* 沒有時間打這樣多字，
* 害怕寫下來的東西內容和結構不夠好。

這個方法應該可以解決到第一個問題，也就是可以很快地輸入內容，當有了最基本的內容後，要慢慢去修改內容的阻力應該比起從由零開始寫一篇文章的難度少很多。

{% include_relative index/skills_iOS.md %}
