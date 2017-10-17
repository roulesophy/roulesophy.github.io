---
filename: 2017-10-18-iOS-工作術：大量輸入行事曆的第二個做法（用-Drafts-和-Fantastical-2）.md
layout: post
title: iOS 工作術：大量輸入行事曆的第二個做法（用 Drafts 和 Fantastical 2）
tags: Productivity
date: 2017-10-18
comments: true
---

大家有沒有試過在要重複輸入一些重複的活動到行事曆呢？例如一個課程有十二課，我們便要人手重複把活動放入行事曆十二次，這個過程十分繁複和浪費時間。  
幸好的是，我們可以在 iOS 上把這件事自動化來簡化輸入這個重覆的過程。**這篇是展示如何以 Drafts 和 Fantastical 來輸入重覆的行事曆。

**其實在以前我也有[以 Workflow 的方法來做過同樣的事]({{ site.baseurl }}/iPad-工作術-大量輸入行事曆/)，可是那個方法在運行中要不斷地輸入日期有點麻煩。今次的方法雖然要錢（Drafts 和 Fantastical 都不是免費的應用程式），可是我們可以把要加入的重覆行事曆放在一個檔案裡一次過輸入，不用在進行的時候才輸入日期和時間。

## > 使用流程

第一步，首先確定自己有 iOS 的 [Drafts](http://agiletortoise.com/drafts/) 和 [Fantastical 2](https://flexibits.com/fantastical-iphone)：

![drafts]({{ site.baseurl }}/images/20171018-1.jpeg)  
![fantastical 2]({{ site.baseurl }}/images/20171018-2.jpeg)

第二步，把這兩個 Actions 加入到 Drafts 中：

* [Lectures Fantastical](https://drafts4-actions.agiletortoise.com/a/2Gl)
* [Events in Fantastical-Quick](https://drafts4-actions.agiletortoise.com/a/2Gm)

第三步，把活動名稱放在 Drafts 的第一行、活動地點放在 Drafts 的第二行、活動時間放到 Drafts 的第三行、之後的行數分別放進活動的日期，然後執行 `Lectures Fantastical`  這個 Action 即可。

以下是一個放到 Drafts 內的例子：

```
Test Event
Hong Kong
19:30-21:30
18 Oct 2017
19 Oct 2017
20 Oct 2017
```

這是影片使用方法：

<iframe width="480" height="360" src="{{ site.baseurl }}/images/20171018-1.mov" volume="0" frameborder="0"> </iframe>

## > 解說

如果對 url scheme 和 x-callback-url 沒有認識的話，這個部分可以跳過。

這個方法需要以兩個 Drafts 的 Actions 來完成，`Lecture Fantastical` 是用來處理輸入的資料成為一行行可被 Fantastical 處理的行事曆資料，`Events in Fantastical-Quick` 則是用來以 Recursive 的方式來執行 x-callback-url 把它們放到 Fantastical 裡。

執行後 `Lecture Fantastical`便會把它們變成以下的形式，然後先加入第一行的活動加入行事曆，然後以 x-callback-url 的方式交後 `Events in Fantastical-Quick` 來 recursive 地分別把每行的活動加入到行事曆。

```
Test Event L1 at Hong Kong 18 Oct 2017 19:30-21:30
Test Event L2 at Hong Kong 19 Oct 2017 19:30-21:30
Test Event L3 at Hong Kong 20 Oct 2017 19:30-21:30
```

由於這個方法比較進階，具體情況情自行研究。

