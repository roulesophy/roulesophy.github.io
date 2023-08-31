---
filename: 2023-08-31-我為什麼不用-obsidian-dataview.md
layout: post
title: 我為什麼不用 Obsidian Dataview?
tags: Obsidian
date: 2023-08-31
permalink: 20230831-obsidian-no-dataview/
thumbnail: "20230829080802-Table.jpeg"
comments: true
---

![Dataview]({{ site.baseurl }}/images/20230829080802-Table.jpeg)  
在 Obsidian 上，[Dataview](https://github.com/blacksmithgu/obsidian-dataview) 是 一個神 Plugin。很多人都在使用它。  
這個 Plugin 的作用是讓我們在筆記上加入不同的 metadata，然後便用這個 Plugin 作類似 SQL 的方式，以 metadata 的名稱當作資料庫的欄位名稱來搜尋，並用表格、清單 或 待辦事項等形式來顯示。  
看起來很方便很實用。那麼，是什麼原因我不使用這個 Plugin 呢？

## > 一個最重要的問題：我們使用 Obsidian 是為了什麼？

在這之前，我們要想想：我們使用 Obsidian 為了什麼？為了有美美的表格？還是為了幫助思考和增加產出？

對我來說，Obsidian 是一個以寫作來思考和管理任務的平台，而不是一個儲存資料的數據庫。

大多數情況下，只需要普通的段落和 列表就足夠了。真的十分有需要時，簡單的 Markdown 表格也可以考慮。

如果我要一個數據庫，那麼我用其他軟件例如是 Notion 會更好。

## > 一個數據庫有很大的維護成本

另外，把 Obsidian 當數據庫使用需要大量的維護成本。

例如是要把 Obsidian 當作數據庫使用，我需要記住對應的 metadata 的欄位名稱、又或是要弄一些 template / plugin 來為我貼上這些欄位，這些都會使使用成本上升。

例如是我突然發現想更改某一 metadata 欄位的名稱，那麼我要花時間去更改所有筆記的這個欄位的名稱還有查詢的語句，這些都沒有帶來生產力，只是**讓我們感覺自己有在做事**而已。

## > 如果開發者不再維護這個 Plugin 如何是好？

再者，如果我們依賴了這類方式來找資料，那麼一旦 Dataview 這個 plugin 不再維護了，我們怎麼辦？

你可能說如果這個 Plugin 好用的話，會有其他人接手維護這個 Plugin 啊。

這只是有機會而已。我們看過太多幾年沒有再更新的 Plugin 了（例如是使用率排名第五的 [Calendar](https://github.com/liamcain/obsidian-calendar-plugin) ）。除非你懂得修改這個 Plugin，否則不要把別人會修改這件事看得理所當然，否則在這件事上下重注，受苦的只會是自己。

另外最懷情況是，如果 Obsidian 日後要倒了，到時我們把資料從 Obsidian 轉移至另一個軟件時，又要花時間去想如何轉移和展示這些 metadata，又是另一個時間上的浪費。

我在 [TiddlyWiki 轉到 Obsidian]({{ site.baseurl }}/20230808-from-tiddlywiki-to-obsidian/) 時試過一次，雖然要轉換的東西不算多，但我只能說不要再有下一次了。

## > 與其花時間去弄不同的欄位，不如把時間花在寫作和思考上

所以，我在使用 Obsidian 時會盡量令筆記結構變得簡單，太複雜只會令自己日後花很多時間在建設 Obsidian 環境上，而不是真的進行思考或產出。

對我來說，真的要做 query 類的東西，我會盡量把自己的需求只使用 tag 和 Obsidian 內建的 Query block 就能完成就好，至少有官方的加持下，可信任度比 Community Plugins 般高。
## > 總結

我明白每人的使用習慣不同，這篇只是我的想法分享。每人都要依自己需求行事。

只是「保持筆記結構簡單」是我這一年使用知識管理軟件時學到最重要的東西。

特別是年紀大了，可以用來折騰的時間減少了，這時就要把時間放在最有價值的事上。在筆記軟件中，對我來說最有價值的事就是刺激思考個任務管理。

試試在 Obsidian 上不設置很多東西，把時間用在寫作吧！你會因此獲得更多～



{% include_relative index/obsidian.md %}



<!--
- [我為什麼不用 Obsidian Dataview?]({{ site.baseurl }}/20230831-obsidian-no-dataview/)
-->