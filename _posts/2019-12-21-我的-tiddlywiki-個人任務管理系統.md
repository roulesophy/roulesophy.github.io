---
filename: 2019-12-21-我的-tiddlywiki-個人任務管理系統.md
layout: post
title: 我的 TiddlyWiki 個人任務管理系統
tags: 工作心法 自我思考 知識管理 TiddlyWiki
date: 2019-12-21
comments: true
---

![]({{ site.baseurl }}/images/20191221-1.jpeg)  
最近又計畫把本來使用的 [TiddlyWiki]({{ site.baseurl }}/%E7%9F%A5%E8%AD%98%E9%80%A3%E7%B5%90%E7%9A%84%E5%B7%A5%E5%85%B7-tiddlywiki/) 進行一些強化。本來 TiddlyWiki 是一個知識管理軟體，然後我為它加了一些功能，使它變成一個給自己用的 [任務管理系統]({{ site.baseurl }}/%E6%88%91%E6%9C%83%E7%94%A8-tiddlywiki-%E4%BE%86%E5%81%9A%E7%94%9A%E9%BA%BC/)。到底在 TiddlyWiki 自身的限制下，這個任務管理系統是甚麼樣子呢？

現階段我未能把它分享出來，但是我可以介紹一下它有甚麼功能。希望跟大家分享一下。

## 基本元素：Tiddler

Tiddler 就是一個基本的元素，基本上可以理解它為一個頁面，就像其他筆記軟體的一篇筆記一樣。我們可以用不同的語法為這個 Tiddler 製造列表 / 表格等，令筆記的元素更豐富。

但是 Tiddler 和其他軟體的筆記有以下四個不同的地方，這四個不同的地方展開了這個系統。

1. 我們可以在一個 Tiddler 裡以某些語法插入另一個 Tiddler 的連結。
2. 每一個 Tiddler 都可以指定複數的 Tag，而這些 Tag 也可以是一個 Tiddler。換句話說，這裡可以形成不同 Tiddler 之間的從屬關係。
3. 我們可以製造一些 Tiddler 放一些 [macro](https://tiddlywiki.com/static/Macros%2520in%2520WikiText.html)，而它們可以做到一些需要程式碼才能完成的功能。例如我可以在一個 Tiddler 裡呼叫某個 macro 的功能，使得能把自身 Tiddler 的標題放到剪貼薄裡（參考：[TiddlyWiki 實用 macro：copy-block-1]({{ site.baseurl }}/tiddlywiki-%E5%AF%A6%E7%94%A8-macro-copyblock1/)）。
4. 我們可以製造一些 [模版 Tiddler](https://tiddlywiki.com/static/TemplateTiddlers.html)，有了這個後我們能做到一些功能，例如在一個 Tiddler 裡放置另一個 Tiddler 模版來為自身展示所有子分頁的連結（也就是所有 Tiddler 有自身的 Tag）。

有了這四個特別的功能，我們可以為 Tiddler 製造以下兩個功能，而這兩個功能就是這個系統的核心。

### 第一功能：任務 Tiddler

我們可以為每個 Tiddler 加上兩個 Tag 來標置這是一個任務 Tiddler。

第一個 Tag 就是標示它是一個任務。為了分開這是工作和自身的任務，我使用了兩個 Tag， `task` 代表了公司上的任務，`ntask`代表了個人的任務。如果沒有需要把它們分隔開的同學便不需這個 Tag ，只需要下面的 Tag 便足夠了。

第二個 Tag 是用來標示這個任務的狀態。我會使用以下其中一個 Tag 來表達：

* `later`: 就是我在未來需要做的任務，有點像是 Backlog。
* `now`: 就是這個星期需要做的任務。
* `archive`: 決定不會再做的任務。如果它本來有一些資料在內的話便不會把它移除，只是把這個任務變成這個狀態。
* `waiting`: 就是一些自身因某些原因不能做的任務，例如是這個任務不是在當下能做的、又或是需要等待別人完成某事後自己才能繼續做。
* `done`: 就是完成了的任務。

因為有 [模版 Tiddler](https://tiddlywiki.com/static/TemplateTiddlers.html) 的關係，我們可以設計成在該 Tiddler 中或是在某些其他 Tiddler 裡以按鈕的方式來為 Tiddler 變成任務（加上以下兩款 Tag）、改變任務狀態（移除所有任務狀態 Tag 並加上要變成的任務狀態 Tag）、或是為它移除任務（移除任務這兩款 Tag）

另外，由於任務 Tiddler 也是一個 Tiddler ，所以我們可以在這些 Tiddler 裡放下自己當前的完成進度和經驗，方便下次繼續時跟進；此外也可以放以 checklist（以這個 [Plugin](https://github.com/tgrosinger/tw5-checklist) 實現）的方式來記錄還要做的事。

基本上我的做法也是從這頁開始改良，有興趣的同學可以參考一下：[Joe Armstrong: Fun with the TiddlyWiki](https://joearms.github.io/#2018-12-26%20Fun%20with%20the%20TiddlyWiki)

### 第二功能：子分頁 / 子任務

因為有 [模版 Tiddler](https://tiddlywiki.com/static/TemplateTiddlers.html) 的關係，我們可以隨意為毎一個 Tiddler 加上一個按紐來新建一個 Tiddler 有自身的 Tag 來代表這是子分頁。例如在 Tiddler A 裡加上一個按鈕，按後會新建了一個 Tiddler B ，而它有一個 Tag 是 A 。

這個子分頁的功能能夠演變為為一個 Tiddler / 任務 Tiddler 新建一個子任務 Tiddler。

同理，我們也可以做到在這個 Tiddler A 中看到這個 Tiddler 有甚麼子分頁和子任務，還可以根據子任務的狀態來分類。

在這個結構下，我們可以製造一個無限層級的系統，在這樣的結構下，Tiddler 本身可以是一個普通的文件、一個任務、也可以是一個交付物、甚至可以是一個專案。這視乎你如何看待它。

如果它是一個有完成條件的專案，那麼我會先製造一個專案 Tiddler ，它的子分頁就是這個專案不同的交付物，視乎複雜情況再決定是否為這些交付物製造子任務 Tiddler 。如果不太複雜我便直接把這個交付物 Tiddler 當作任務 Tiddler 般處理。

如果它是一個沒有完成條件的目標或是一件能無限進化的產品，那麼我會製造一個目標/產品 Tiddler ，它的子分頁會是 時間間隔的 Tiddler 或是 版本號 Tiddler，然後它們的子分頁才是交付物 和子任務。

另外，視乎情況我可能會在這個 專案 / 目標 / 產品 的 Tiddler 裡開一個子分頁來放置這個 專案 / 目標 / 產品 專用的知識或文件。

## 不同的視覺

介紹了這個系統的元件後，簡單介紹一下這個系統的不同視覺頁。簡單來就就是有幾個重要的 Tiddler 來以不同的角度來管理這些任務。

### 第一個視覺：全任務視覺

![]({{ site.baseurl }}/images/20191221-2.jpeg)

第一個就是任務視覺。這個任務頁會把所有的任務 Tiddler 分類為 `now` / `later` / `waiting` / `archive` / `done` 來展示，每個任務前有不同的按鈕用來改變它們的任務狀態。

我在每個星期日做 [每週回顧]({{ site.baseurl }}/%E6%88%91%E7%9A%84%E6%AF%8F%E9%80%B1%E5%9B%9E%E9%A1%A7%E6%B5%81%E7%A8%8B/) 時便會從 `later` 裡選擇出這星期要做的任務，並把它們變成 `now` 代表這星期要做的任務。

因為我有分開公司的任務和自身的任務，所以我需要兩頁這樣的視覺。

### 第二個視覺：專案 / 目標 / 產品 視覺

![]({{ site.baseurl }}/images/20191221-3.jpeg)

第二個是是專案 / 目標 / 產品 視覺，就是以一個 專案 / 目標 / 產品 的視覺出發，去看看它的所有任務狀態和它的子分頁。

同樣，這頁也有會把所有屬於該 專案 / 目標 / 產品 的任務 Tiddler 分類為 `now` / `later` / `waiting` / `archive` / `done` 來展示，每個任務前有不同的按鈕用來改變它們的任務狀態。

### 第三個視覺：日記視覺

TiddlyWiki 本來有一個名為 [Journal](https://tiddlywiki.com/static/Creating%2520journal%2520tiddlers.html) 的功能，就是快速到新增一個代表今天的 Tiddler。

在這一頁裡，我會放下一個小 checklist（以這個 [Plugin](https://github.com/tgrosinger/tw5-checklist) 實現） ，來放置一些今天要做的事，還有一些不需要為此新增任務 Tiddler 的小事來提醒自己今天要做完這些事。

另外，當我把任務 Tiddler 按下按鈕改為 `done` 時，這個按鈕還會自動為該 Tiddler 加上一個 Tag 為 Journal Tiddler 名稱的格式。這樣我便能夠在 Journal Tiddler 裡看到這天完成了甚麼任務，方便在 [每週回顧]({{ site.baseurl }}/%E6%88%91%E7%9A%84%E6%AF%8F%E9%80%B1%E5%9B%9E%E9%A1%A7%E6%B5%81%E7%A8%8B/) 時回顧自己做了甚麼，並把重要的任務放到回顧表格裡。

內心 OS: 以文字來描述這個系統有點複雜。


{% include_relative index/tiddlywiki.md %}