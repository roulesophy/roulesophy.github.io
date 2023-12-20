---
filename: 2019-10-10-沒有港鐵下如何預備交通方案-citymapper介紹.md
layout: post
title: 沒有港鐵下如何預備交通方案？Citymapper介紹
tags: iOS工作術 iOS_Shortcuts分享
date: 2019-10-10
comments: true
---

![]({{ site.baseurl }}/images/20191010-1.jpeg)  
由放自小坐車暈車的關係，通常可以的話我出門也會選擇乘坐港鐵。因為長年累月依賴了港鐵，使得對其他的交通工具十分陌生，例如不知道如何在不使用港鐵的情況下到達經常去的地點。  
而最近的事件把我拉回現實：站在風險管理的角度來說，要減低對港鐵的依賴是十分重要的。最近發現了 [Citymapper](https://citymapper.com/hong-kong) 這個應用程式對解決不知道如何坐車到某目的地這個問題十分實用，所以在這裡介紹一下。

![]({{ site.baseurl }}/images/20191010-3.jpeg)

[Citymapper iOS 下載按我](https://apps.apple.com/hk/app/citymapper-transit-navigation/id469463298?l=en)

簡單來說，這是一個能夠幫你找出不同途徑到達目的地的一個應用程式。選擇了路徑後，它會詳細告訴你要先坐那個交通工具，然後在那裡下車，並步行到那裡並轉搭哪個交通工具等。以香港來說，它可支援的交通工具有 巴士、港鐵、電車、小輪、紅色小巴、綠色小巴、單車、輕鐵、以及 Uber。

只要在 Citymapper 裡搜尋某個地點，它便可以幫你以目前的地方之起點，找到不同的途徑到達目的地。Citymapper 會把現場交通環境、不同交通工具是否在這個時候開放（包括突發意外的情況）也會計算在內。它還會幫你計算所需的車費和時間。

![]({{ site.baseurl }}/images/20191010-2.jpeg)

另外，我們也可以自行選擇起點，也就是說不一定要在當前的地點開始搜尋。

我們也可以選擇在不同的日期和時間裡進行搜尋。這個應用程式也會以當時的情況來計算。例如我們可以看看30分鐘後才開始出發到某地，用甚麼方法到目的地會比較好。

![]({{ site.baseurl }}/images/20191010-4.jpeg)

當你決定了選擇的路線時，你可以按 Go 來開始這段旅程。Citymapper 會因應你在這段旅程經過的地點而告訴你下一步要如何做。例如當你到達要轉交通工具，又或是要上落交通工具的時候，他還會發出通知，提示你要在這個時候下車。

![]({{ site.baseurl }}/images/20191010-5.jpeg)

此外，他Apple Watch還支援複雜功能（Complications），如果你在選擇了路線後按 Go 來開始這段旅程的話，你可以在旅程中在 Apple Watch 的 複雜功能 （Complications） 裡看到你現在需要做什麼來到達目的地。

![]({{ site.baseurl }}/images/20191010-6.jpeg)

Citymapper 這個應用程式令我最欣賞的一點就是，他對香港的本地化做得十分好。例如他會使用「紅Van」、「叮叮」這些香港人會用的字眼。這點讓我對它的印象大大加分。

由於這個工具實在太好用的關係，它已經變成我在不使用港鐵時的必備應用程式。

## 和 Google Maps 的導航功能的分別

可能你會問，這個應用程式究竟和 Google Maps 的規劃路線 有什麼分別？首先， Google Maps 的那個是除了交通工具外，他還可以使用自駕的方法，但是Citymapper並只是包括交通工具、步行、單車和 Uber 的方法到達目的地。

但是， Citymapper 使用的資料來源很多，除了Google Maps外，它還會把以下的資料庫的內容也包含在內，協助計算最好的路線。

![]({{ site.baseurl }}/images/20191010-7.jpeg)

## 其他實用功能

由於 Citymapper 包含了不同交通工具的資料，所以我們也可以在這個 Citymapper 裏搜尋到個例如巴士的班次，以及每個站的到站時間和他們在地圖上的地點。

![]({{ site.baseurl }}/images/20191010-8.jpeg)

此外，你也可記錄儲存某幾個常用的地點，例如住所和公司的地點等，方便日後快速在任何地點下找到回去的方法。

## 以 iOS Shortcuts 分享到達該地點的方法

在使用這個應用程式時，我發現要分享這個地點，讓大家都知道要如何到達目的地這個情景中，還是會有一點麻煩。

例如是舉辦一個活動在某一個地點集合時，如果有一個快速的方法，可以讓不同的人由他們自己身處的位置出發，能夠知道如何到達該集合地點那該多好。

幸好的是， Citymapper 有自己的 [URL Scheme](https://citymapper.com/tools/1053/launch-citymapper-for-directions)，所以我寫了以下的Shortcuts 來做這個功能。 （[下載按此](https://www.icloud.com/shortcuts/d747bf27dfe94a24b83c2661b0d1e87c)）

這個Shortcuts 的用法是，我們首先在Apple Map裏搜尋在某個地方，然後我們可以按分享，然後選擇這個Shortcut。

![]({{ site.baseurl }}/images/20191010-9.jpeg)

然後，這個Shortcut會立刻指出在以你現在的地點出發的話可以如何到達該處，並會生成一條連結放到你的剪貼簿裏。

只要你分享這條連結給不同的人，而他們也是使用 iOS 並有安裝 Citymapper 的話，他們便可以按這條連結進入 Citymapper 應用程式，並立即便可以知道在他們的地點裏如何到達該目的地。
