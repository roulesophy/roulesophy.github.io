---
filename: 2021-01-03-tiddlywiki-教學-在每一個-tiddler-上加入子分頁連結.md
layout: post
title: TiddlyWiki 教學：在每一個 Tiddler 上加入子分頁連結
tags: TiddlyWiki
date: 2021-01-03
permalink: 20210103-tiddlywiki-tutorial-viewtemplate-footer-subpage/
thumbnail: "20210103-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20210103-1.jpeg)  
這篇承接上一篇 [在每一個 Tiddler 上加入自定義頁面]({{ site.baseurl }}/20210102-tiddlywiki-tutorial-viewtemplate-header/)。在這一篇裡我會利用相同的方法，在每一個 Tiddler 的內容下方加入第一個我個人認為實用的東西：子分頁。

所以在看這一篇文章前，請務必先看懂 [在每一個 Tiddler 上加入自定義頁面]({{ site.baseurl }}/20210102-tiddlywiki-tutorial-viewtemplate-header/)。

> 在這篇裡我會談及：
> 
> * 什麼是子分頁？
> * 我們想達成的東西：在每一個 tiddler 的最底部裡看到自己的所有子分頁連結
> * 我們要如何在 TiddlyWiki 實作這個在父頁看到子分頁連結的功能？
> * 後續要解決的問題

## 什麼是子分頁？

這個只是我的定義啦。

假設我們有一個名為 Test page 的 tiddler，那麼所有 Tag 了 "Test page" 的 tiddler 都是 Test page 這個 tiddler 的子分頁。

例如在這個情況下，Test subpage 1 就是 Test page 的子分頁，而 Test page 就是 Test subpage 1 的父頁。

![##例如是這樣。]({{ site.baseurl }}/images/20210103-2.jpeg)

但是要是先新建一個新的 tiddler，然後再 tag 回父頁太麻煩了。有沒有一些快捷的方法？

我們可以在每個 tiddler 的右上角按下這個指向下的按鈕，然後選擇 "new here" 便可以立即新建一個子分頁。

![]({{ site.baseurl }}/images/20210103-3.jpeg)

要再快一點的話，可以利用 [上一篇的方法]({{ site.baseurl }}/20210102-tiddlywiki-tutorial-viewtemplate-header/) 製作一個按鈕來新建子分頁，這樣可以減少一下按鍵，有興趣的同學可以試試自行研究如何實作這個按鍵。


有了分頁這個概念後，整個 TiddlyWiki 的世界會闊了很多。我們的 tiddler 不只是一個扁平的知識網絡，現在還多了「分類」這個概念（請看 [ 從維基百科學習管理個人知識的方法]({{ site.baseurl }}/%E5%BE%9E%E7%B6%AD%E5%9F%BA%E7%99%BE%E7%A7%91%E5%AD%B8%E7%BF%92%E7%AE%A1%E7%90%86%E5%80%8B%E4%BA%BA%E7%9F%A5%E8%AD%98%E7%9A%84%E6%96%B9%E6%B3%95/)）。這有三件值得提的事。

第一：有了分類的概念，我們可以把相同性質的 tiddler 都有同一個父頁（ tag ），這些子頁便有了一個不怎麼明顯的連結。

例如在這個情況下，Test subpage 1 和 Test subpage 2 這兩個 tiddler 都有相同的父頁 Test page，我們便可以按下 Test page 這個 Tag 便看到所有 Test page 的子分頁。

![]({{ site.baseurl }}/images/20210103-4.jpeg)

第二：也因為分頁的做法只是多了一個 tag，所以我們可以有沒有限層級的分類，以及每一個 tiddler 可以有多於一個的父頁。在多了一個管理 tiddler 的方式又不失本來的彈性。

第三：由於 tag 這個連結的方法只是 [soft link](https://tiddlywiki.com/#Hard%20and%20Soft%20Links)，所以我們就算更改了父頁的 tiddler 名稱，子分頁也沒有失去父頁這個問題。這個情況下不用 [Relink]({{ site.baseurl }}/20200808-tiddlywiki-relink/) 這個 Plugin 的幫忙解決重新命名的問題。

那麼，有了子分頁這個概念後，這次我們想做什麼呢？

## 我們想達成的東西：在每一個 tiddler 的最底部裡看到自己的所有子分頁連結

假設我們有以下的情況：

* 有五個 tiddler，分別名為 Test page、Test subpage 1、Test subpage 1a、Test subpage 1b、以及 Test subpage 2。
* Test subpage 1 和 Test subpage 2 都 tag 了 Test page，也就是說 Test page 有這兩個子分頁。
* Test subpage 1a 和 Test subpage 1b 都 tag 了 Test subpage 1、也就是說 Test subpage 1 有這兩個子分頁。

有點樹狀架構是嗎？我們就是想在 Test page 裡看到這些，應該說想在每一個 tiddler 裡都看到自己的子分頁連結，並以樹狀方式表達。留意子分頁的子分頁是可以摺疊的。這樣我們能在需要時才展開它們。

![##This is a page 上的兩顆按鈕的實作方法請看 \[上一篇\]({{ site.baseurl }}/20210102-tiddlywiki-tutorial-viewtemplate-header/)。]({{ site.baseurl }}/images/20210103-5.jpeg)

![]({{ site.baseurl }}/images/20210103-6.jpeg)

## 我們要如何在 TiddlyWiki 實作這個在父頁看到子分頁連結的功能？

如果有了 [上一篇]({{ site.baseurl }}/20210102-tiddlywiki-tutorial-viewtemplate-header/%20) 的概念，這個真的不難。

第一步：新建一個 tiddler 用來展示樹狀結構，就叫它做 ViewTemplate Footer 好了。

![]({{ site.baseurl }}/images/20210103-7.jpeg)

這裡我們寫了一個 macro 名為 `categories` 並呼叫它。這個 macro 呼叫了 [官方的 toc-selective-expandable macro](https://tiddlywiki.com/#Table-of-Contents%20Macros) 來把子分頁以樹狀方式展開。

有幾個能聊聊的點：

1. {% raw %} `{{!!title}}` {% endraw %}指的是這個 tiddler 的名稱，或是使用 transcluion template 時的呼叫者名稱，詳細看 [官網介紹 Tiddler fields](https://tiddlywiki.com/#TiddlerFields)。
2. 這裡我們使用 `<$macrocall $name="categories" xxx />` 而不是 [我們以前學習 macro]({{ site.baseurl }}/tiddlywiki-%E5%AF%A6%E7%94%A8-macro-copyblock1/) 時認知的 `<<categories xxx>>` 是因為 `<<categories xxx>` 無法放入{% raw %} `{{!!title}}` {% endraw %}作為參數，而 `$<macrocall $name="categories">` 作為 `<<categories>>` 的原始型態則可以，詳細看 [官網的 MacroCallWidget 介紹](https://tiddlywiki.com/#MacroCallWidget)。
3. 如果我們想把某文字以 tag 的樣子表達，可以使用官方的 [transclusion template](https://tiddlywiki.com/#Transclusion%20with%20Templates)，也就是 `$:/core/ui/TagTemplate`。

第二步：把 ViewTemplate Footer tag 上 `$:/tags/ViewTemplate`，原因請看 [上一篇]({{ site.baseurl }}/20210102-tiddlywiki-tutorial-viewtemplate-header/)。就是要在每一個 tiddler 都能展現這一頁的意思。

第三步：修改 `$:/tags/ViewTemplate` 並把 ViewTemplate Footer 加在 $:/core/ui/ViewTemplate/body 後。

![]({{ site.baseurl }}/images/20210103-8.jpeg)

好，完成。

這次我也把 source 放在 [這裡]({{ site.baseurl }}/TiddlyWiki_Demo/ViewTemplate_Footer_SubPage.html)，大家可以參考看看。

## 後續要解決的問題

可能你會問：這樣做要是某一頁有很多子分頁，那一個 tiddler 會變得很長，不好閱讀吧。

對，是有這個問題。

但是我們可以用 [Reveal Widget](https://tiddlywiki.com/#RevealWidget) 解決掉。簡單來說就是根據某 tiddler 的狀態來決定展開或是隱藏某些內容。

有了 Reveal Widget 的話，我們可以把整個子分頁樹都隱藏掉，有需要時才展示。

但是由於篇幅所限，這裡就不介紹 Reveal Widget 了、有興趣的同學可以自行研究如何做。

{% include_relative index/tiddlywiki.md %}