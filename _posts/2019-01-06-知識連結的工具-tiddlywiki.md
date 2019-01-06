---
filename: 2019-01-06-知識連結的工具-tiddlywiki.md
layout: post
title: 知識連結的工具：TiddlyWiki
tags: 工作心法 程式學習
date: 2019-01-06
comments: true
---

![]({{ site.baseurl }}/images/20190106-1.jpeg)  
之前看過這篇 [深度學習的技術]({{ site.baseurl }}/%E6%B7%B1%E5%BA%A6%E5%AD%B8%E7%BF%92%E7%9A%84%E6%8A%80%E8%A1%93/) 或是 [這篇關於碎片化學習的文章](https://www.darencademy.com/article/view/id/16485) 的話，也許明白到知識是一種網狀結構，也就是說一個知識點和另一些知識點有連結，從而形成一個網狀結構。當我們能把不同的知識點連結起來，我們便能夠把知識融會貫通並有了自己的世界觀；如果我們能夠從一個知識點延伸出新的知識點，這就是創新。  
明白了這件事後，其實一直都有在找一些工具去幫助自己建立這塊知識之網。最近發現了 [TiddlyWiki](https://tiddlywiki.com)，可能就是我要找的東西。

## > 過去的找尋之路

其實過去的找尋之路真是十分漫長，大概持續了好幾年。

### > iThoughts

以前我有找過 [iThoughts](https://www.toketaware.com/ithoughts-ios/)，就是一個用來畫 [心智圖](https://zh.m.wikipedia.org/zh-hk/%E5%BF%83%E6%99%BA%E5%9B%BE) 的工具，但是我是用來畫 [概念圖](https://zh.m.wikipedia.org/zh-hk/%E6%A6%82%E5%BF%B5%E5%9B%BE)。心智圖就是把知識形成一個樹狀結構，而概念圖就是把知識形成一個網狀結構。

這個工具的缺點，就是知識點很多的時候，要在一張圖裡把很多知識點和它們的連結都展示出來會令事情看起來十分亂。

### > Mindscope

另一個有找過的是 [Mindscope](http://www.mindscopeapp.com)，我們可以在這裡寫下知識點，以及為它們作連結。這裡的連結是可以直接跳到該知識點的頁面，防止 iThoughts 以一張圖把所有東西展示的亂象。

但是，這個工具的壞處是每一張圖的大小只是一個螢幕的大小，想把相關的知識點放在一張圖有時真是不夠用。另外，我們也不能在該知識點中加入很多的描述。

![##Mindscope 的例子。]({{ site.baseurl }}/images/20190106-2.jpeg)

然後，就到一些筆記類的應用程式了。

### > Evernote

最常聽過，我也使用了很久的就是 [電腦玩物](https://www.playpcesor.com) 大推的 [Evernote](https://evernote.com)。其實使用起來也不錯，特別我們可以以記事連結把不同的筆記 / 知識點連在一起。

只是因為這家公司多次傳出公關災難（例如 [已經徹回的容許用家存取用戶文件](https://hk.finance.yahoo.com/news/evernote%E6%96%B0%E7%A7%81%E9%9A%B1%E6%94%BF%E7%AD%96%E5%86%87%E7%A7%81%E9%9A%B1-%E5%93%A1%E5%B7%A5%E5%8F%AF%E4%BB%BB%E6%84%8F%E6%9F%A5%E7%9C%8B%E7%AD%86%E8%A8%98-031935996.html)）、以及間中就傳出[這家公司可能會倒閉](https://plus.104.com.tw/activity/4f0161e4-5589-4a32-8aeb-12992cd2bc6f) 的消息，所以現在我也很少用了。雖然現在已經很少把資料放進去，但是我也一直在頭痛如何把已經存放在 Evernote 的資料拿出來。

因為 Evernote 的事件，讓我很怕使用一些把資料存放在某一家特定公司的應用程式（雖然 iCloud 暫時是個例外，真是要跳出蘋果生存圈的話真的會很頭大）。

### > DEVONthnk

然後有嘗試過使用 [DEVONthink](https://www.devontechnologies.com/products/devonthink/overview.html)，這家由德國出品、有很多年歷史的資料管理軟件。它的好處是你可以決定存放資料的位置，可以是 iCloud、可以是 [Dropbox](https://www.dropbox.com) 、也可以是自己設置的伺服器。

雖然在 DEVONthink 中也可以很輕鬆地製造條目之問的連結，但它的缺點就是要使用上其實不太方便，例如要以 markdown 來寫作的話，似乎不能插入放在 DEVONthink 內的圖片（也許也是我未找到方法也不一定）。

儘管我沒有使用 DEVONthink 來製作知識網，可是因為可以決定資料的存放位置，以及它強大的資料搜尋能力，我有使用它來存放自己的文件。

介紹到這裡，以上的工具還有一個比較麻煩的問題，就是他們的資料存放格式都是一些特定的格式、如果公司有甚麼意外的話[^1]，要把這些資料存取出來，再轉換成其他格式並放到其他應用程式中是一件很難的事。這樣其中一個最麻煩的問題，就是這些應用程式中，用來定義知識點的連結（例如是 Evernote 的記事連結）都是一些由該應用程式生成的東西，我們並不能直接憑著這個連結來看到它其實屬於那一個條目。

所以，開始向開源（open source）的世界裡尋找一些以純文字儲存的應用程式。

### > nvALT

所以，便到 [nvALT](http://brettterpstra.com/projects/nvalt/) 登場了。這是一個存放純文字的應用程式，它用來定義連結的方式很簡單，例如有一個條目名為「咖啡」，那麼要在某一頁中要製造一個連結到咖啡這一頁，只要打`[[咖啡]]`便可以了，這樣我們很容易便能夠憑著連結便知道要連結在那裡。

另外就是因為它存放的只是純文字，所以要管理也十分容易，也不用設置很多麻煩的東西，我們也可以決定它們存放的位置。

只是，它的最優點也是它的缺點，就是除非我們使用外置的圖片/文件連結，否則我們很難插入圖片等複雜的東西。如果我們使用在互聯網的外置文件，我們很容易便會因為該外在網頁倒閉而失去了這張圖；如果我們自己設置東西來放置這些文件，又是另一件很麻煩的事情，因為我們要管理的東西又多了一個。

然後最近找到了 [TiddlyWiki](https://tiddlywiki.com)。

## > TiddlyWiki 介紹

[TiddlyWiki](https://tiddlywiki.com) 就是一個類似 [維基百科](https://en.m.wikipedia.org/wiki/Main_Page) 的系統，但是在個人使用上，要設置比較簡單。因為只需要一個網頁檔案便能夠儲存所有的東西。

<iframe width="560" height="315" src="https://www.youtube.com/embed/KtCUr83XgyE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>

在 TiddlyWiki 裡，每一個條目叫做 Tiddler ，它可以是一個知識點、可以是一張圖片、也可以是程式碼等等。我們要做的就是開新的 Tiddler ，然後以類似 nvALT 的方式把它們進行連結（例如 `[[咖啡]]`），也可以把一個 Tiddler 的內容直接嵌入到另一個 Tiddler 裡（例如 `&#123;&#123;咖啡&#125;&#125;`）

和維基百科和其他應用程式不同的是，如果我們在其中一個 Tiddler 按下其他 Tiddler 的連結後，我們不會好像網頁般跳轉到另一頁，而是在同一頁裡打開該連結的 Tiddler (也就是同一頁裡同時展示這兩個 Tiddler），你可以決定何時關掉那些 Tiddler、也可以同時編輯它們。[TiddlyWiki 官網](https://tiddlywiki.com) 本身就是由 TiddlyWiki 製造，有興趣的同學可以去試試看。

根據它們設計 TiddlyWiki 時的思想，每一個 Tiddler 儘可以不要太長，這樣毎一個 Tiddler 可以被重複使用。這個也跟其他的網基類系統有少許不同。

由於 TiddlyWiki 是開源的，所以就算它的創造者不去維持它的時候也會有其他認同這個理念的人去支持它（雖然這個應用程式已經有十年歷史）；由於它只需要用上網的瀏覽器就能開啟，所以就算轉了環境也能使用；由於只需要一個網頁檔案來儲存它們，我們可以決定它的儲存位置。由於它可以進行匯出和匯入的功能，而匯出的檔案格式都是純文字[^1]，出問題時也比較容易救援。

## > 安裝方法

[TiddlyWiki 官網](https://tiddlywiki.com) 介紹了很多方法，在這裡補充一點。

最簡單的方法就是直接在官網的 [GettingStarted](https://tiddlywiki.com/#GettingStarted) 裡下載一個空白的 TiddlyWiki 來使用。

另一個方法就是使用 [NoteSelf](https://noteself.github.io)，直接打開 [這頁](https://noteself.github.io/online/) 來使用，那麼 TiddlyWiki 就會儲存在你的瀏覧器裡。需要轉換電腦時才匯出所有資料。

如果想要在不同電腦中使用，也就是把資料放在外部地方的話，可以使用 [TiddlySpot](https://tiddlywiki.com/#Saving%20on%20TiddlySpot)，申請了帳號和密碼便可以使用。

如果想放在雲端，也可以放在 [TiddlyDrive](https://tiddlywiki.com/#TiddlyDrive%20Add-on%20for%20Google%20Drive%20by%20Joshua%20Stubbs)，這個 Chorme 的插件能夠使用存放在 [Google Drive](https://www.google.com/drive/) 的 TiddlyWiki ，並且在儲存後能夠自動在 Google Drive 中儲存。

如果自己能夠開伺服器的話，也可以用 [node.js](https://tiddlywiki.com/#Installing%20TiddlyWiki%20on%20Node.js) 的方法來安裝。以這個方法來安裝的最大分別就是在伺服器上的 TiddlyWiki 不是只由一個網頁檔案組成，而是每一個 tiddler 也是一個檔案，這可以防止單一檔案變得過大。

這個方法也可以自己設置密碼，防止別人更改自己的東西，但由於不是 https 的關係，建議不要放私隱資料。

我是自己開伺服器，並以 [Docker](https://www.docker.com) 的方法來安裝。網絡上已經有人弄好了 [使用 Docker 來安裝](%20https://github.com/djmaze/tiddlywiki-docker)的方法。

[^1]: 例如公司倒閉，又或是沒有人為這個應用程式更新，結果在新的作業系統裡不能使用，iOS 11 已經弄死了很多沒有人維持，沒有上64 bit 的應用程式。
[^2]: csv、json、html 和它自家的 tid 格式，都是純文字格式。圖片等會以 base64 的方法來編碼成純文字，就算有問題時也算是能夠自己把編碼變回圖片等格式。