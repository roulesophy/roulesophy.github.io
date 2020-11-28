---
filename: 2019-01-06-知識連結的工具-tiddlywiki.md
layout: post
title: 知識連結的工具：TiddlyWiki
tags: 工作心法 程式學習 知識管理 TiddlyWiki
date: 2019-01-06
comments: true
---

![]({{ site.baseurl }}/images/20190106-1.jpeg)  
之前在 [這篇](https://roulesophy.github.io/尋找知識結構化工具之旅/) 裡提及過過去尋找過的知識結構化工具。而最近發現了 [TiddlyWiki](https://tiddlywiki.com)，可能就是我要找的東西。

> * 什麼是 TiddlyWiki?
> * 如何安裝 TiddlyWiki?

## > TiddlyWiki 介紹

[TiddlyWiki](https://tiddlywiki.com) 就是一個已經有十年歷史，類似 [維基百科](https://en.m.wikipedia.org/wiki/Main_Page) 的系統，但是在個人使用上，要設置比較簡單。因為只需要一個網頁檔案便能夠儲存所有的東西。

<iframe width="560" height="315" src="https://www.youtube.com/embed/KtCUr83XgyE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>

在 TiddlyWiki 裡，每一個條目叫做 Tiddler ，它可以是一個知識點、可以是一張圖片、也可以是程式碼等等。我們要做的就是開新的 Tiddler ，然後以類似 nvALT 的方式把它們進行連結（例如 [[咖啡]]），也可以把一個 Tiddler 的內容直接嵌入到另一個 Tiddler 裡（例如 &#123;&#123;咖啡&#125;&#125;）

和維基百科和其他應用程式不同的是，如果我們在其中一個 Tiddler 按下其他 Tiddler 的連結後，我們不會好像網頁般跳轉到另一頁，而是在同一頁裡打開該連結的 Tiddler (也就是同一頁裡同時展示這兩個 Tiddler），你可以決定何時關掉那些 Tiddler、也可以同時編輯它們。[TiddlyWiki 官網](https://tiddlywiki.com) 本身就是由 TiddlyWiki 製造，有興趣的同學可以去試試看。

根據它們設計 TiddlyWiki 時的思想，每一個 Tiddler 儘可以不要太長，這樣毎一個 Tiddler 可以被重複使用。這個也跟其他的網基類系統有少許不同。

由於 TiddlyWiki 是開源的，所以就算它的創造者不去維持它的時候也會有其他認同這個理念的人去支持它；由於它只需要用上網的瀏覽器就能開啟，所以就算轉了環境也能使用；由於只需要一個網頁檔案來儲存它們，我們可以決定它的儲存位置。由於它可以進行匯出和匯入的功能，而匯出的檔案格式都是純文字<sup>[^1]</sup>，出問題時也比較容易救援。

此外，TiddlyWiki 還可以定制很多的東西，但是由於這篇是入門，這些在這裡就不作介紹了。

## > 安裝方法

[TiddlyWiki 官網](https://tiddlywiki.com) 介紹了很多方法，在這裡補充一點。

最簡單的方法就是直接在官網的 [GettingStarted](https://tiddlywiki.com/#GettingStarted) 裡下載一個空白的 TiddlyWiki 來使用。

另一個方法就是使用 [NoteSelf](https://noteself.github.io)，直接打開 [這頁](https://noteself.github.io/online/) 來使用，那麼 TiddlyWiki 就會儲存在你的瀏覧器裡。需要轉換電腦時才匯出所有資料。

如果想要在不同電腦中使用，也就是把資料放在外部地方的話，可以使用 [TiddlySpot](https://tiddlywiki.com/#Saving%20on%20TiddlySpot)，申請了帳號和密碼便可以使用。

如果想放在雲端，也可以放在 [TiddlyDrive](https://tiddlywiki.com/#TiddlyDrive%20Add-on%20for%20Google%20Drive%20by%20Joshua%20Stubbs)，這個 Chorme 的插件能夠使用存放在 [Google Drive](https://www.google.com/drive/) 的 TiddlyWiki ，並且在儲存後能夠自動在 Google Drive 中儲存。

如果自己能夠開伺服器的話，也可以用 [node.js](https://tiddlywiki.com/#Installing%20TiddlyWiki%20on%20Node.js) 的方法來安裝。以這個方法來安裝的最大分別就是在伺服器上的 TiddlyWiki 不是只由一個網頁檔案組成，而是每一個 tiddler 也是一個檔案，這可以防止單一檔案變得過大。

這個方法也可以自己設置密碼，防止別人更改自己的東西，但由於不是 https 的關係，建議不要放私隱資料。

我是自己開伺服器，並以 [Docker](https://www.docker.com) 的方法來安裝。網絡上已經有人弄好了 [使用 Docker 來安裝](%20https://github.com/djmaze/tiddlywiki-docker) 的方法。

## > 參考資料

* [TiddlyWiki舞](http://tw5-zh.tiddlyspot.com)：一個對 TiddlyWiki 官網的中文翻譯版本。
* [TW5 Magick: Some tricks and snippets for TiddlyWiki 5](http://tw5magick.tiddlyspot.com)：一個比較進階關於 TiddlyWiki 的技巧分享網頁。

[^1]: csv、json、html 和它自家的 tid 格式，都是純文字格式。圖片等會以 base64 的方法來編碼成純文字，就算有問題時也算是能夠自己把編碼變回圖片等格式。
