---
filename: 2021-09-28-tiddlywiki-卡頓了-我的效能改善方案.md
layout: post
title: TiddlyWiki 卡頓了？我的效能改善方案
tags: TiddlyWiki
date: 2021-09-28
permalink: 20210928-tiddlywiki-performance-tuning/
thumbnail: "20210928-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20210928-1.jpeg)  
雖然 [TiddlyWiki]({{ site.baseurl }}/%E7%9F%A5%E8%AD%98%E9%80%A3%E7%B5%90%E7%9A%84%E5%B7%A5%E5%85%B7-tiddlywiki/) 十分有用，但和其他的筆記軟件一樣，筆記數量太多的時候時難免會有效能的問題。  
在這篇裡我就嘗試去分享一下我認為可以幫助改善效能的個要點，留意這篇比較深，建議使用 TiddlyWIki 有一段時間後，遇過效能問題的同學才參考。

## > 1. 圖片的處理

第一個要點就是盡可能把圖片並成連結並外部化，而不是把圖片放在 TiddlyWiki 裡。

如果你是使用本地端（例如所有的內容都在一個 html 檔案）的話，把圖片放在 TiddlyWiki 裡會令這個 html 檔案大小暴增，這會使得有效能上的問題。

如果使用 node.js 架計在伺服器，當我們打開 TiddlyWiki 時，便會一開始便下載所有的 Tiddler 和資源到瀏覽器，再去進行展示。

實際上，我們打開 TiddlyWiki 更新一個 Tiddler 後，只會和伺服器同步那一個 Tiddler。

所以，如果把所有圖片都放在 TiddlyWiki 會使得每次打開時都要下載所有東西包括圖片，這對效能和數據（如果你在外用流動數據的話）也是一個負擔。

所以我們可以以下的做法：

第一個做法就是我們可以把圖片放到其他圖床去把圖片外部化，然後插入 `[img[圖片連結]]` 來放入圖片。

第二個做法是如果你使用 node.js 來架設 TiddlyWiki 的話，可以使用 [Lazy Loading](https://tiddlywiki.com/#LazyLoading)。

方法是在伺服器開始 TiddlyWiki 時用以下的 Command: `tiddlywiki --listen root-tiddler=$:/core/save/lazy-images`。

使用了這個後，我們能夠把圖片放入 TiddlyWiki，但是在進入 TiddlyWIki 時不會立即下載圖片，只有在打開和該圖片有關的 Tiddler 時才會下載該圖片。

如果你有看到官網關於 LazyLoading 那一頁，其實它還有另一個選項是把所有非 System Tiddler 都延遲下載，這個就自行決定了。我個人是沒有這樣做的，因為怕這樣做會令某些 [Filter Expression]({{ site.baseurl }}/20200719-tiddlywiki-filter-expression/) 失效，無法搜尋自己要的東西。

## > 2. 減少頁面上的元件

當我們打開 TiddlyWiki 後，更改或是任何一個 Tiddler 的內容時（或者更改任何一個欄位，因為本質上這些內容也是某個 Tiddler 的一部分），其實整個頁面上顯示的所有東西也會重新計算一次，例如絕大部分和頁面上的元件有關的 Widget 或是 Filter Expression 等都會重新計算。

所以如果我們的頁面打開了太多複雜的 Tiddler，整個頁面就會很慢，嚴重的時候可能打字也會卡頓，因為每打一個字也算是更改某一個 Tiddler 的內容，所以所有東西都會重新計算。

所以，記得每一個 Tiddler 不要有太多的內容，以及不用的 Tiddler 記得關掉。

以外還有兩個小技巧。

第一個技巧是在 Sidebar 避免經常打開 Recent 這個 Tab，因為這個 Tab 有很多計算會比較慢。打開 Sidebar 裡的其他 Tab 的話，只有打開的 Tab 會在有改變內容時重新計算， Recent 這個較慢 Tiddler 不會計算。

第二個技巧是使用 [RevealWidget](https://tiddlywiki.com/#RevealWidget) 把在 Tiddler 裡不用的東西收起來，需要時才使用按鈕把它展示。日後有機會能夠介紹這個 Widget。

## > 3. Filter Expression 的改善

由於更改每一個 Tiddler 都會令頁面上顯示的元件都會重新計算一次，而一大部分比較慢的計算都和 [Filter Expression]({{ site.baseurl }}/20200719-tiddlywiki-filter-expression/) 有關。

所以，如何寫出比較快的 Filter Expression 也很重要。

由於每人使用的 Filter Expression 都不相同，所以在這裡先說如何找出每個 Filter Expression 的運算時間，這樣每個人都能找出自己 TiddlyWiki 裡慢的 Filter Expression 來作出改善。

我們可以在 `$:/ControlPanel` 這個 Tiddler 裡的 Settings tab 裡找到 Performance Instrumentation 並點擊 Enable performance instrumentation (或是直接改變 `$:/config/Performance/Instrumentation` 這個 Tiddler 的內容)
。然後重新打開 TiddlyWiki，然後在 developer console 裡（Chrome 是 View -\> Developer -\> JavaScript Console）裡打 `$tw.perf.log()`，使能看到自從開啟 TiddlyWiki 後，每個使用過的 Filter Expression 的平均計算時間和呼叫次數，還有每次更新所花的時間。

有了這個工具後，我們便可以設法改善我們的 Filter Expression 去令它們變得快一點。

個人的經驗有兩個。

第一個經驗是有些 Filter operator 比較慢，這些要小心使用。例如是 [filter operator](https://tiddlywiki.com/#filter%20Operator)、[count operator](https://tiddlywiki.com/#count%20Operator)、或是 [backlinks operator](https://tiddlywiki.com/#backlinks%20Operator)，當中 filter operator 的問題最嚴重。

第二個經驗是把一些會在同一頁重覆呼叫的 Filter Expression 先放在 variable 裡。例如如果之前
是：

	<$list filter="[tag[aaa]tag[bbb]search:eventdate:literal[\d]!tag[done]]">
	    <<currentTiddler>><br>
	</$list>
	
	<$list filter="[tag[aaa]tag[bbb]search:eventdate:literal[\d]tag[done]]">
	    <<currentTiddler>><br>
	</$list>

在這裡，`tag[aaa]tag[bbb]search:eventdate:literal[\d]` 這段要重覆呼叫兩次，做成效能上的浪費。我們可以先用 [SetWidget](https://tiddlywiki.com/#SetWidget) 把結果暫存在 variable（這裡的 variable 是 `commonexpressionresult`），再用 [enlist operator](https://tiddlywiki.com/#enlist%20Operator) 把這個 variable 變為 list 再使用：

	<$set name="commonexpressionresult" filter="[tag[aaa]tag[bbb]search:eventdate:literal[\d]]">
	   <$list filter="[enlist<commonexpressionresult>!tag[done]]">
	       <<currentTiddler>><br>
	    </$list>
	    <$list filter="[enlist<commonexpressionresult>tag[done]]">
	        <<currentTiddler>><br>
	    </$list>
	</$set>

但這招不一定有效，視乎你 common expression 比較快還是 enlist operator 比較快，也就是說如果你的 common expression 很慢的話，這便很有用了。

## > 總結

其實官網裡 [Performance](https://tiddlywiki.com/#Performance) 和 [Performance Instrumentation](https://tiddlywiki.com/#Performance%20Instrumentation) 這兩頁提及了很多可以做的效能提升方案，有需要的同學也可以參考一下。

