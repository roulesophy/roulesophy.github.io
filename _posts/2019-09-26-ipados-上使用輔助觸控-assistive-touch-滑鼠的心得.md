---
filename: 2019-09-26-ipados-上使用輔助觸控-assistive-touch-滑鼠的心得.md
layout: post
title: iPadOS 上使用輔助觸控 Assistive Touch 滑鼠的心得
tags: 工作心法
date: 2019-09-26
comments: true
---

![]({{ site.baseurl }}/images/20190926-1.jpeg)  
話說 iPadOS 終於可以使用滑鼠來操作了。  
雖然嚴格來說這只是使用滑鼠來控制 Assistive Touch 來模擬的手指活動，但是這個已經是一個突破。呢兩日使用iOS 10衫的時候，總結一下使用這個功能一些心得，以及如何更有效地使用這個方法。

## 如何開啟滑鼠功能？

要在 iPadOS 裡使用滑鼠，只需要任何一隻有線或藍牙的滑鼠，然後在設定那裡開了AssistiveTouch，並連接滑鼠就可以了。

![]({{ site.baseurl }}/images/20190926-2.jpeg)

![]({{ site.baseurl }}/images/20190926-3.jpeg)

![]({{ site.baseurl }}/images/20190926-4.jpeg)

![]({{ site.baseurl }}/images/20190926-5.jpeg)

![]({{ site.baseurl }}/images/20190926-6.jpeg)

後來會發現，在螢幕上面多了一個圖圈，移動滑鼠的時候那個圈就會相對地移動。

![]({{ site.baseurl }}/images/20190926-7.jpeg)

我們按滑鼠的左鍵時，就會模擬我們的手指在螢幕上的圖圈位置進行點擊。

我們首先說一些關於這個圓圈的設定。

首先在這裡能設定圓圈的大小和顏色。

![]({{ site.baseurl }}/images/20190926-8.jpeg)

![]({{ site.baseurl }}/images/20190926-9.jpeg)

而這裡能控制滑鼠的速度，這個因人而異，如果太快的話會變得很難控制。

![]({{ site.baseurl }}/images/20190926-10.jpeg)

另外，我也會關閉 Show Onscreen Keyboard 和 Always Show Menu，後者代表如果你正在使用滑鼠的時候，虛擬 Home 鍵的小白點就會消失。

![]({{ site.baseurl }}/images/20190926-11.jpeg)

## 一些 滑鼠 Assistive Touch 的用法

我們也可以利用滑鼠來開啟 App Switcher、控制中心、home 鍵、通知、Dock 等、甚至可以做到 Split View 等等的動作。

例如我們可以用滑鼠圓圈在屏幕的下沿向上拉便可以進入切換 Apps 的畫面。

但是使用滑鼠來做這件事有種「用滑鼠來模擬手指」的感覺，使用時總是有點怪怪的。

其實，我們有一些方法去改善這個情況。

你會發現當你按下滑鼠右鍵的時候，會出現了幾個按鈕，再按一下右鍵這些按鈕會消失。

![]({{ site.baseurl }}/images/20190926-12.jpeg)

而這些按鈕是可以自己設定的，我們可以在 Custom Top-Level Menu 裡設定它們。

![]({{ site.baseurl }}/images/20190926-13.jpeg)

我會設定以下的按鈕：

![]({{ site.baseurl }}/images/20190926-14.jpeg)

使用這個方法，我們可以用沒有這麼別扭的方法來開啟 App Switcher、控制中心、home 鍵、通知、Dock 等、甚至可以做到 Split View 等等的動作。

（2020-03-21 更新：在 iOS 13.4 後貌似右鍵不能打開 Custom Top-Level Menu 了。但可以留小白點在屏幕上並用滑鼠點擊小白點打開 Menu。）

加上實體鍵盤的話，應該有七八成的時候都可以只用滑鼠來控制 iPad。在需要打字的時候，這樣就能大幅這樣提升生產力。

另外，如果使用文字編輯器時，要使用滑鼠來選擇整段文字時，只需要在文字上方雙擊滑鼠，並在第二下點擊滑鼠時按著不放手再向其它方向拖（drag）便可以選擇文字。不過個人認為如果正在使用實體鍵盤的話，使用鍵盤上的快捷鍵或許會更有效率。

## 注意：使用 Swiftpoint GT 和 JumpDesktop 來遠端控制電腦的時候要關閉 Assistive Touch

在這一篇 [介紹關於如何使用滑鼠來遠端控制電腦的文章]({{ site.baseurl }}/ipad-%E5%B7%A5%E4%BD%9C%E8%A1%93-%E4%BB%A5-ipad-%E9%8D%B5%E7%9B%A4%E5%92%8C%E6%BB%91%E9%BC%A0-swiftpoint-gt-%E9%81%A0%E7%AB%AF%E6%8E%A7%E5%88%B6%E9%9B%BB%E8%85%A6/) 裡，我們介紹了 Swiftpoint GT 這支滑鼠。因為它也是一支藍牙滑鼠，所以也可以當作滑鼠 Assistive Touch 使用。

但是，當我們是用 JumpDesktop 來遠端控制電腦的時候，由於暫時有不兼容的情況發生，所以請在遠端控制電腦前，把 Assistive Touch 關閉掉。

溫馨提示，iPadOS 裡的 Shortcuts 能夠提供開關 Assistive Touch 的功能。

在這個時候，我們應該要係使用中desktop遠端控制電腦之前，首先把AssistiveTouch關閉。

## 如何快速地開關 Assistive Touch?

有兩個方法。

第一個是使用 Shortcuts。

第二個是使用控制中心，我們可以在設定裡的 Accessibility 按 Accessibility Shortcut 並選擇 AssistiveTouch

![]({{ site.baseurl }}/images/20190926-15.jpeg)

![]({{ site.baseurl }}/images/20190926-16.jpeg)

然後再在設定裡的 Control Center 裡加入 Accessibility Shortcuts 便可以了。

![]({{ site.baseurl }}/images/20190926-17.jpeg)

這樣做的話，我們只要在呼叫控制中心時按這個按紐，便可以開關 Assistive Touch 了。

![]({{ site.baseurl }}/images/20190926-18.jpeg)

![]({{ site.baseurl }}/images/20190926-19.jpeg)


## 使用滑鼠 Assistive Touch 的用後感

基本上使用了一段短時間後，個人認為只有一種情況下開啟滑鼠 Assistive Touch 會比較適合，這就是有實體鍵盤的情況下，並正在進行需要鍵盤工作的情況下。

我們使用鍵盤來輸入文字時，一邊打字一邊觸控屏幕是一個很慢的方法，在這個情況下，使用滑鼠 + 鍵盤和鍵盤快捷鍵能在手不需要提高手來觸控螢幕的情況下控制 iPad。這樣對手的負擔也不會太重。

但是，如果在其它情況下，其實手指才是我們最好的觸控方式，一方面比使用滑鼠要精準和直覺得多，二來也能做一些功能多點觸控的功能（延伸閱讀：[ iOS 11 上的 iPad 上手多重選擇模式注意事項 ]({{ site.baseurl }}/iOS-11%E4%B8%8A%E7%9A%84iPad%E4%B8%8A%E6%89%8B%E5%A4%9A%E9%87%8D%E9%81%B8%E6%93%87%E6%A8%A1%E5%BC%8F%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85/)）。

（2020-03-21 更新：在 iOS 13.4 後正式支援滑鼠和 Trackpad，Trackpad 教學可看這篇 [iPadOS 13.4 使用 TrackPad 的心得（開啟 Dock、Control Center 、 Notification Center 、 Slide Over 、 Split View 等）]({{ site.baseurl }}/ipados-13-4-使用-trackpad-的心得-開啟-dock-control-center-notification-center-slide-over-split-view-等/)

{% include_relative index/skills_iOS.md %}
