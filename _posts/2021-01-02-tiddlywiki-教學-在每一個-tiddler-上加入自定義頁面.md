---
filename: 2021-01-02-tiddlywiki-教學-在每一個-tiddler-上加入自定義頁面.md
layout: post
title: TiddlyWiki 教學：在每一個 Tiddler 上加入自定義頁面
tags: TiddlyWiki
date: 2021-01-02
permalink: 20210102-tiddlywiki-tutorial-viewtemplate-header/
thumbnail: "20210102-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20210102-1.jpeg)  
這篇來分享如何在每一個 Tiddler 裡加入頁面來放置一些自訂功能。這是使用 [TiddlyWiki]({{ site.baseurl }}/%E7%9F%A5%E8%AD%98%E9%80%A3%E7%B5%90%E7%9A%84%E5%B7%A5%E5%85%B7-tiddlywiki/) 效率提升的一大步。

## > 需求

使用了 TiddlyWiki 一段時間後，會發現要是能夠在每一個 Tiddler 裡也能有一些自訂的操作便好了。這樣做的話，使用 TiddlyWiki 的效率應該會快了不少。

例如，如果每一個 Tiddler 的內容前有一排按鈕，按下第一顆便能複製這 Tiddler 的標題到剪貼簿裡，按下第二顆按鈕便能進行某一個操作等等。

![]({{ site.baseurl }}/images/20210102-2.jpeg)
￼
![##這篇就是介紹如何製作這兩顆不在這 Tiddler 上的按鈕。完全後這兩顆按鈕會出現在每一個 Tiddler 裡。]({{ site.baseurl }}/images/20210102-3.jpeg)

這樣的話，使用 TiddlyWiki 的效率應該會快了很多。例如我可以弄一顆按鈕用來把今天的日期 tag 進這 Tiddler 裡、又或是弄一顆按鈕來新增一個 Tiddler，這個新的 Tiddler 有了一個 Tag 是剛剛按下的 Tiddler 的名稱等等。

當然，你看著上圖應該能夠猜到，這些都是能夠在 TiddlyWiki 上實行的。

我那麼喜歡使用 TiddlyWiki 的原因，就是因為它的彈性十分好，我們可以自定義很多東西來符合自己的使用習慣。

## > 如何做

根據 TiddlyWiki 官網上的這一頁 TiddlyWiki: [Page and tiddler layout customisation](https://tiddlywiki.com/static/Page%2520and%2520tiddler%2520layout%2520customisation.html)，我們能夠這樣做。

### > 第一步：先製作兩顆按鈕

第一顆按鈕（名為 Copy Title Button）用來把當前的 Tiddler 標題的複製到剪貼簿上；第二顆按鈕（名為 Dummy Second Button）只是一顆假按鈕，不會作任何東西（只作 demo 用）。

複製標題的那顆按鈕的語法我就不介紹了，具體可以看[官網 tm-copy-to-clipboad   介紹](https://tiddlywiki.com/static/WidgetMessage%253A%2520tm-copy-to-clipboard.html)。值得一提的是，這個不是 [macro](https://tiddlywiki.com/static/Macros.html)，所以雖然感覺上和我以前寫過的這一頁 [TiddlyWiki 實用 macro：copy-block-1]({{ site.baseurl }}/tiddlywiki-%E5%AF%A6%E7%94%A8-macro-copyblock1/) 很相似，但其實是兩個完全不同的概念。

![]({{ site.baseurl }}/images/20210102-4.jpeg)

![]({{ site.baseurl }}/images/20210102-5.jpeg)

### > 第二步：把這兩顆按鈕加到一個 Tiddler 裡（例如名為 ViewTemplate）

很好，我們現在有兩顆按鈕了。下一步就要製作一個 Tiddler （名為 ViewTemplate Header）把這兩顆按鈕放進去。

![]({{ site.baseurl }}/images/20210102-6.jpeg)

在加入按鈕時，有兩個地方要留意：

{% raw %}

1. 我們是使用 [Transclusion](https://tiddlywiki.com/static/Transclusion%2520in%2520WikiText.html) 的方法把這兩個 Tiddler 的內容放進 ViewTemplate Header。
2. 嚴格來說，我們是做用 [Transclusion with Templates](https://tiddlywiki.com/static/Transclusion%2520with%2520Templates.html) 的方法來把這兩個 Tiddler 的內容放進 ViewTemplate Header。否則在複製標題到剪貼簿的按鈕裡，會複製的標題不會是當前 Tiddler 的標題，而是 "Copy Button Title" ，也就是複製標題按鈕的那個 Tiddler 標題了。Transclusion with Templates 就是比普通的 Transclusion 多了 `||`，例如是 `{{||Copy Title Button}}`。

{% endraw %}

具體的分別我也有一篇文章，詳細也可以看這篇 [TiddlyWiki 製造記事連結的方法]({{ site.baseurl }}/tiddlywiki-%E8%A3%BD%E9%80%A0%E8%A8%98%E4%BA%8B%E9%80%A3%E7%B5%90%E7%9A%84%E6%96%B9%E6%B3%95/)。

### > 第三步：把 ViewTemplate Header 加到每一個 Tiddler 裡

然後就是想辦法把 ViewTemplate Header 加到每一個 Tiddler 裡。具體有三個步驟。

第一步：把 ViewTemplate Header 這個 Tiddler 加入這個神奇的 Tag: [$:/tags/ViewTemplate](https://tiddlywiki.com/static/SystemTag%253A%2520%2524%253A%252Ftags%252FViewTemplate.html)。這會把 ViewTemplate Header 這個 Tiddler 的內容放在每一個 Tiddler 的頁面裡。

![]({{ site.baseurl }}/images/20210102-7.jpeg)

$:/tags/ViewTemplate 這個 Tiddler 是系統內置的，所以不用自己增加。所有 開頭為 $:/ 的 Tiddler 都叫 [System Tiddler](https://tiddlywiki.com/static/SystemTiddlers.html)。你也可以自己寫一個 System Tiddler。System Tiddler 和普通 Tiddler 的最大分別只是不能被輕易搜尋。要在 [Advanced Search](https://tiddlywiki.com/static/Searching%2520in%2520TiddlyWiki.html) 裡才能搜尋到。

第二步：進入 `$:/tags/ViewTemplate` 這個 Tiddler 裡。在 ViewTemplate Header 裡按下$:/tags/ViewTemplate 這個 tag 便可以進入。

![]({{ site.baseurl }}/images/20210102-8.jpeg)

第三步：修改 `$:/tags/ViewTemplate`。系統會先出一個 warning 問你是否修改 System Tiddler，選擇 OK 便可。

![]({{ site.baseurl }}/images/20210102-9.jpeg)

然後把 ViewTemplate Header 這個字加在 list 這個 field 內的 `$:/core/ui/ViewTemplate/body` 前便可以了。這樣 ViewTemplate Header 這排按鈕便會出現在 Tiddler 的內容前面而不是後面。list 這個 field 是用定義所有 tag 過 `$:/tags/ViewTemplate` 的 Tiddler 的先後次序。

好，完成。我們現在加一個普通的 tiddler（名為 Test page），完成後應該能看到這兩顆按鈕。

![]({{ site.baseurl }}/images/20210102-2.jpeg)
￼
![]({{ site.baseurl }}/images/20210102-3.jpeg)

￼有了這個方法，我們日後能玩的東西多著呢。

btw ，這次我把 source 放在 [這裡]({{ site.baseurl }}/TiddlyWiki_Demo/ViewTemplate_Header.html)，大家可以參考看看。

內心 OS: 這篇很重要，日後還有教學的話應該有不少教學也需要使用這一頁的方法。
