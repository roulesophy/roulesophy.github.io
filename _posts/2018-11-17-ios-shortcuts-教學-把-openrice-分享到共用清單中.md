---
filename: 2018-11-17-ios-shortcuts-教學-把-openrice-分享到共用清單中.md
layout: post
title: iOS Shortcuts 教學：把 Openrice 分享到共用清單中
tags: 工作心法 程式學習 iOS工作術 iOS_Shortcuts分享
date: 2018-11-17
comments: true
---

![]({{ site.baseurl }}/images/20181117-1.jpeg)  
香港人在外找東西吃時通常也會使用 [Openrice](https://www.openrice.com/zh/hongkong) 。有時我們看到有興趣的店鋪時也可以在 [Openrice app](https://itunes.apple.com/hk/app/openrice/id310663323?l=en&mt=8) 裡收藏。可是，如果你有伴侣或兄弟姐妹時，想要有一個共用的 openrice 清單便有點麻煩了。因為 openrice 的收藏功能只限於個人使用，每次也要在 whatsapp 裡 分享自己的收藏也很麻煩。

這次我們示範如何使用 Shortcuts 來解決這個問題：以最方便的做法把 openrice 的餐廳放到一些共用清單中。而這次我們使用的清單是 [Wunderlist](https://www.wunderlist.com)。

[Shortcuts by Apple](https://itunes.apple.com/hk/app/shortcuts/id915249334?l=en&mt=8)  
![]({{ site.baseurl }}/images/20181117-2.jpeg)

[Wunderlist](Wunderlist:%20To-Do%20List%20&%20Tasks%20by%206%20Wunderkinderhttps://itunes.apple.com/hk/app/wunderlist-to-do-list-tasks/id406644151?l=en&mt=8)
![]({{ site.baseurl }}/images/20181117-3.jpeg)

這次使用 Wunderlist 的原因有幾個：

1. 只要不是非常重度使用，免費版的 Wunderlist 已經足夠使用，共享清單功能也是免費的。
2. Wunderlist 有 hashtag 的功能，我們可以在清單的標題中加入 hashtag 方便搜尋。在這個 Shortcuts 裡我們也會以地區 #尖沙咀 或菜式種類 #日本菜 來作 hashtag 。 

## > 給直接使用的朋友

大家可以先看使用影片來感受如何使用這個 Shortcuts:

<iframe width="480"	height="853" src="{{ side.baseurl }}/images/20181117-1.MOV" frameborder="0"> </iframe>

在使用前先安裝 Shortcuts 和 Wunderlist ，並製造一張新清單並和對方分享，然後 [按我下載 Shortcuts](https://workflow.is/workflows/0d48468b6bd44c898d9e03630bd88af5) ，並在下載的 Shortcuts 內替 Wunderlist 的帳號登入（Allow Access）。
![]({{ site.baseurl }}/images/20181117-4.jpeg)

然後便可以按上面的影片方式來使用了。

## > 給想學習如何寫 Shortcuts 的朋友

這個 Shortcuts 不算困難。我們把這個 Shortcut 以 Share sheets 地使用（Accepted Types = Text），就是能夠在 openrice 的分享頁面中使用我們的 shortcuts ，並以 openrice 給我們的資料作為 shortcuts 的 input。

![]({{ site.baseurl }}/images/20181117-5.jpeg)

如果我們設定 Accpeted Types 為 Text 時，openrice 會給以下的東西給我們的 shortcuts:
```
澳洲牛奶公司
    
網址: https://s.openrice.com/QrbS0MW0000
地址: 佐敦白加士街47-49號地下
電話: 27301356
(客戶資訊) 想以低至$0.5=1里數賺迎新高達40,000里數? 立即申請渣打亞洲萬里通卡。受條款及細則約束。
```
	
唔⋯有廣告、不太好，所以我們要把這些廣告去掉。另一方面我們也要把第一行的資料用作 wunderlist 清單項目的標題、並把其他資料用作清單項目的內容。

所以我們把這段文字轉變成一個 Workflow 內的清單（List），並把每一行當作清單的資料，並存到 List 這個 Variable 裡。

![]({{ site.baseurl }}/images/20181117-6.jpeg)

然後我們把這個 List Variable 的第一個項目作為 Wunderlist 項目的名稱，並以第二至四個項目（就是網址、地址和電話）組合，變成了 Wunderlist 項目的內容。

![]({{ site.baseurl }}/images/20181117-7.jpeg)

![]({{ site.baseurl }}/images/20181117-8.jpeg)

然後開始製作我們的 Hashtag 。

首先我們製造一個空的 Workflow List ，並命名為 TagList 。
![]({{ site.baseurl }}/images/20181117-9.jpeg)

然後問使用者這家餐廳在港島、九龍或新界，再根據地區使用對應的清單，並再問使用者這家餐廳的地區。然後把用家選擇的地區放到 TagList 裡。由於 Wunderlist 內的字詞只有有 # 便會自動變成 Hashtag ，所以我們可以把 # 加上去清單上的每一個項目便可以了。

![]({{ site.baseurl }}/images/20181117-10.jpeg)

![]({{ site.baseurl }}/images/20181117-11.jpeg)

同樣道理，然後問使用者選擇這家餐廳的菜式種類，並放入 TagList 裡。這裡我們使用 Select Multiple ，因為一家餐廳可以有多於一個的種類（例如可以是 #港式 和 #冰室 ）。

![]({{ site.baseurl }}/images/20181117-12.jpeg)

最後把 TagList 內的項目以空白 " " 組合變成例如 "#佐敦 #港式 #冰室" 的字樣，並和餐廳名稱一起變成 "#佐敦 #港式 #冰室 澳洲牛奶公司" 放在 Wunderlist 項目的標題，並把之前儲下的 網址、地址和電話 放到 Note 裡便可，最後我們讓用家在使用 Shortcut 時才決定把這個項目放在那一個清單裡。如果只有一個清單的話也可以在這裡預先選好存放在那一個清單裡，省了使用這個 Shortcuts 時的一個步驟。

![]({{ site.baseurl }}/images/20181117-13.jpeg)

{% include_relative index/skills_iOS.md %}