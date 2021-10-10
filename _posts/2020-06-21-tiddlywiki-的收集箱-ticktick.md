---
filename: 2020-06-21-tiddlywiki-的收集箱-ticktick.md
layout: post
title: TiddlyWiki 的收集箱：TickTick
tags: 工作心法 TiddlyWiki
date: 2020-06-21
permalink: 20200621-tiddlywiki-ticktick/
thumbnail: "20200621-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20200621-1.jpeg)  
使用了 [TiddlyWiki]({{ site.baseurl }}/%E6%88%91%E6%9C%83%E7%94%A8-tiddlywiki-%E4%BE%86%E5%81%9A%E7%94%9A%E9%BA%BC/) 也有一年半的時間，TiddlyWiki 在知識整理方面十分好，加上我自己的修改，它已經變成了我的知識和任務管理軟體。而作為一個任務管理軟體，收集是一個基本的功能。在這篇裡介紹我是如何做這個收集的功能。

> * 什麼是收集和收集箱？
> * 我對 TiddlyWiki 的收集箱的要求是？
> * 為何我使用 TickTick 作為 TiddlyWiki 的收集箱？
> * 有了 TickTick 作為收集箱後要如何做？
> * 進階：如何在 macOS 上快速地把心中所想放入 TickTick？ 我們可以使用 Alfred 4
> * 進階：如何使用 WebServer API 來直接把資料放進 TiddlyWiki？


好了，甚麼是收集，以及為什麼這個收集的過程這麼重要？

## > 什麼是收集和收集箱？

我們有時在工作的時候會突然想到一些東西。我們可能會把它記在腦裡，又或是寫在紙裡。但是如果只是記在腦裡，我們大腦的記憶空間十分有限，所以很容易會忘記剛剛想到的事情；而寫在紙張裡，便會因為日後資料太過散亂，而無法找到當時找到所有的東西。

根據 GTD 的理論，我們需要有一個收集箱（Inbox）。換句話說，當我們突然有一些靈感，我們要把它先放到收集箱；當別人有任務給我們時，我們要把它先放到收集箱。

而最好的做法是，這個收集箱只能有唯一一個，把所有的東西都放進這個唯一的收集箱中集中處理。

當我們把東西收集後，每一天或每隔一段日子把收集箱內的東西處理，也就是把它們分類或整理，然後變成資料放到知識管理系統 或是 拆解為下一步的行動放到任務管理系統裡。

由於我的 TiddlyWiki 的兩個主要功能便是 知識管理系統 和 任務管理系統，所以收集箱其實扮演一個十分重要的角色。

所以，我需要一個 TiddlyWiki 專用的收集箱。

## > 關於作為 TiddlyWiki 收集箱的注意事項

在找出如何為 TiddlyWiki 作為收集箱的方法前，有兩個問題需要思考：

1. 我們可以如何用什麼的收集方法？
2. 收集後未經處理的資料應該直接放在 TiddlyWiki 還是在 TiddlyWiki 以外的地方？

先來回答第一個問題。

TiddlyWiki 是一個網頁應用程式，所以無法像一般的 iOS 原生應用程式一樣，能夠讓我快速的收集看到的東西或靈感。

例如平常在網上看到一個有用的連結，我們無法使用分享頁面把網頁連結直接分享到 TiddlyWiki 裏等，而是每一次也要打開TiddlyWIki，再輸入帳號和密碼打開，然後把我看到、或是想到的東西放進去。平常有空時這樣做還好，但是在收集靈感這類一瞬即逝的東西，多一個步驟或是多等候一秒也會讓這些靈感消失。這個時候 TiddlyWiki 便無法達到我的要求。

由於這個是使用網頁為應用程式的 TiddlyWIki原生的問題，所以第一時間想到的方案是只能在 TiddlyWiki 以外尋找方法解決，大概就是找一個 TODO list 類的應用程式作收集，然後有空再整理再放進 TiddlyWiki 裡。

然後再上網找了資料後，發現其實我們可以經由 iOS Shortcuts 呼叫 [WebServer API](https://tiddlywiki.com/prerelease/static/WebServer%2520API%253A%2520Put%2520Tiddler.html) 的方法直接把資料放進 TiddlyWIki 裡。這個方案的技術含量比較高，在本文的最後會稍微提一下（反正最後我也沒有使用這個方案，所以沒有興趣的人也可以省掉）。但是使用這個方法雖然很快速，但是需要的技術含量比較高、一不小心可以直接殺死自己的 TiddlyWiki Server、還有最致命的缺點：如果本身正在打開 TiddlyWiki 的頁面，要重新載入才能看到滙入的 Tiddler。

這個方法雖然很麻煩，至少能做到我的要求，所以也在考慮的方法之中。

所以現在有兩個方法：
1. 找一個 TODO list 類的應用程式作收集，然後有空再整理再放進 TiddlyWiki 裡。
2. 直接用 TiddlyWiki 內置的 WebServer API 把收集後的內容直接放入 TiddlyWiki 裡。

再來回答第二個問題：收集後未經處理的資料應該直接放在 TiddlyWiki 還是在 TiddlyWiki 以外的地方？

我個人是偏向放在 TiddlyWiki 以外的地方，原因是有了這個 TiddlyWiki 外的地方坐緩衝，我可以確保 TiddlyWiki 裡的資料都是有用和可靠的資料。但這只是我個人的偏意。

事實上，在我還未使用 TiddlyWiki 時，我有一段時間是在使用 Evernote ，這時我十分喜歡把很多東西直接匯入到 Evernote 的一個名為 Inbox 的記事本裡，然後在處理時只是把這些原材料沒有消化便放在不同的資料夾裡，然後便再沒有看過這些資料了。這做成了後悔我完全無法整理 Evernote 內的資料，因為資料量太大，而對自己有用的資料不多，扔掉又很可惜。

所以，最後決定是使用第一個方案：找一個 TODO list 類的應用程式作收集，然後有空再整理再放進 TiddlyWiki 裡。

## > 我對 TiddlyWiki 的收集箱的要求

在這個需求和這個應用的場景下，我需要的是一個收集功能要強，以及支援全平台的收集箱應用程式。我需要的東西如下。

* 這是一個 Todo List 的應用程式。我能把要收集的東西都放進去，然後在處理（也就是放到 TiddlyWiki）後把它在 Todo List 應用程式中打一個剔。
* 這個應用程式能夠支援除了Android 之外的全平台（Windows、iOS、Web）。因為我在公司的電腦是使用 Windows；我在家裏看是用MacOS；在街上我可能是用 iPhone 或 iPad ；在不是自己的電腦中使用網頁瀏覽器。而這些場合上都需要使用。watchOS 反而不是必要。
* 由放我是使用 Apple 生態為主，所以這個應用程式必須是能夠支援把一切的東西以 Share 的方式分享到這個 Todo List 的應用程式。
* 這個應用程式不需要分類或標籤等等的功能，因為它只是一個作為收集箱的存在，本身不是一個任務管理軟體。
* 令一點就是，這個應用程式在 iOS 裡不可以是只是一個網頁打包而成的應用程式。他必須要有內置的儲存。這樣我才能在網絡不通的環境內也能使用。
* 如果這個應用程式能夠支援 Shortcuts 會更好，這樣我便可以修改我本來的 [聽寫捷徑應用程式]({{ site.baseurl }}/%E5%A6%82%E4%BD%95%E5%BF%AB%E9%80%9F%E8%A8%98%E4%B8%8B%E9%9D%88%E6%84%9F%E4%BE%86%E5%AF%AB%E9%83%A8%E8%90%BD%E6%A0%BC-%E4%BD%BF%E7%94%A8-ios-%E8%81%BD%E5%AF%AB%E5%8A%9F%E8%83%BD%E5%BF%83%E5%BE%97/) 進行收集。
* 不用錢、或是只需要不是太多的金錢。因為我只是使用不多的功能。如果是那種要分開平台收錢或是每月付費的那種在這個用法下便有點貴了。

## > 我對 TiddlyWiki 的收集箱：TickTick

經過幾個選擇後，我決定最後使用的是這個名為 [TickTick](https://ticktick.com) 的應用程式。

![]({{ site.baseurl }}/images/20200621-2.jpeg)

這個應用程式符合以上所說的功能。其實我也有考慮過以下的應用程式：

* [Bear](https://bear.app)：它可以自製 Checkbox，但是它不是全平台也要要每月付費。
* Apple Reminder：原因同上，不是全平台。
* [Omnifocus](https://www.omnigroup.com/omnifocus/)：[網頁版](https://web.omnifocus.com) 要每月付費，也不是全平台。再者用 Omnifocus 來做這個真是殺雞用牛刀了。
* [Things](https://culturedcode.com/things/)：每個平台也要分開付費，以及 macOS 版實在是太貴了。
* [Todoist](https://todoist.com/?lang=en)：我有一段時間使用它的。因為它符合我本來的所有需求，在我的需求下免費，也支援全平台，只是在處理的過程中不太順手，另外它的每一個 TODO item 只有一行。如果能支持多於一行的話在使用[聽寫捷徑應用程式]({{ site.baseurl }}/%E5%A6%82%E4%BD%95%E5%BF%AB%E9%80%9F%E8%A8%98%E4%B8%8B%E9%9D%88%E6%84%9F%E4%BE%86%E5%AF%AB%E9%83%A8%E8%90%BD%E6%A0%BC-%E4%BD%BF%E7%94%A8-ios-%E8%81%BD%E5%AF%AB%E5%8A%9F%E8%83%BD%E5%BF%83%E5%BE%97/) 時能製造多於一行的內容。

而 TickTick 和 Todoist 相似：它符合我本來的所有需求、在我的需求下免費、支援全平台、每一個 TODO item 多於一行。

所以便決定便用它，另外也為它製造了一個聽寫捷徑應用程式（Shortcuts）。不懂 Shortcuts 的朋友也能直接使用應用程式的聽寫功能，只要在收集時按下這個咪高風按鍵便可以了。

![]({{ site.baseurl }}/images/20200621-3.jpeg)

## > 有了 TickTick 作為收集箱後要如何做？

在介紹了什麼是 GTD 中的收集箱，以及 TickTick 作為我收收集箱後，再來說說我在收集流程上的微調。

在以前使用收集箱的經驗裡，我發現一個麻煩的問題。

這個問題是一旦我把所有東西都先放到收集箱裡，這個收集箱很容易會無限擴張，最後無十分抗拒並拖延把收集箱裡的東西處理掉。

這個情況最常發生的情況是平時看到一些單純想收集的東西，但是其實自己沒有任何目標是和這個資料有關的話，這個時候把這個資料扔掉便十分可惜，但是又無法把它處理掉。一旦在處理收集箱的時候有很多這樣的東西，我們大腦便會不勝負荷而拖延處理。

所以，我也在 GTD 收集箱這個流程中做了一些妥協。就是除非時間十分緊迫，否則我會盡可能把想到的東西先放到 TiddlyWiki 中屬於它的位置，以減低日後處理收集箱的負荷；如果時間真是十分緊迫（例如在街上不能很快的打開 TiddlyWiki 或是一些靈感），我才會使用收集箱來進行收集。

## > 進階：如何在 macOS 上快速地把心中所想放入 TickTick？ 我們可以使用 Alfred 4

如果你有在 macOS 上使用 Alfred 4 並購買了 [Powerpack](https://www.alfredapp.com/powerpack/) 的話，也可以按 [這條連結](https://www.packal.org/workflow/ticktick) 匯入一個 Workflow 快速在 macOS 裡經由 Alfred 把心中所想真接加入 TickTick。

使用方法只需要以 opt + space 打開 Alfred ，再輸入 `t <what you think>` 便可以把你所想的東西直接加入 TickTick 了。

只是，這個 Workflow 應該是以 Rest API 的方式直接把東西放到 TickTick 的遠端資料庫而不是把東西放到 TickTick 的應用程式裡，所以如果不能在 TickTick 裡看到新加入的東西，我們要在 TickTick 裡按一次同步（cmd + s）讓應用程式能拿取遠端資料庫後應該便能看到了。


## > 附錄：如何使用 WebServer API 來直接把資料放進 TiddlyWiki？

方法就是便用 [http put request](https://tiddlywiki.com/prerelease/static/WebServer%2520API%253A%2520Put%2520Tiddler.html):

* `PUT http://<link>/recipes/default/tiddlers/<tiddler title>`
* Authorization: `Basic authorization` 並輸入 username 和 password
* Header 方面，要輸入這兩個：
	* X-Requested-With: TiddlyWiki
	* Content-Type: application/json

Request 的 Body 是一個類似以下的 Json：

```html
{
	"title": "Your title",
	"tags": "[[Your Tag]]",
	"text": "First Line\n\nSecond Line\n\nThird Line\n\n"
}
```

{% include_relative index/tiddlywiki.md %}