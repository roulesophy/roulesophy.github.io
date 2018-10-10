---
filename: 2018-10-10-ios工作術-以shortcuts為圖片加上水印.md
layout: post
title: iOS工作術：以Shortcuts為圖片加上水印
tags: 工作心法
date: 2018-10-10
comments: true
---

![]({{ site.baseurl }}/images/20181010-1.jpeg)  
最近在 [MacStories](https://www.macstories.net/ios/visualizing-photos-taken-on-this-day-in-previous-years-with-shortcuts/) 上看到了一篇文章，令我懂了如何在 [iOS Shortcuts](https://itunes.apple.com/hk/app/shortcuts/id915249334?l=en&mt=8)（以前的 Workflow） 上解決加上水印的問題。

這個 Shortcuts 應該會對我以 iOS 來打文章時作圖片處理會十分有用。之前我會以一個 Shortcuts 來為文章內的每一張圖片來變成特定的解像度、壓縮圖片大小、移除 metadata（例如地點資訊）、把圖片放到 Working Copy 裡並命名為一個特定的圖片名稱。有了這個 Shortcuts 後，我的圖片處理 Shortcuts 又可以多做一件事了。

先來看示範影片：（為了大家的數據流量著想，影片畫質比較差）

<video width="640" src="{{ site.baseurl }}/images/20181010-1.MOV" controls> </video>

這個為圖片加上水印的流程如下：

1. 打一段 html 和 CSS 來製作水印的樣式 並加入要加上水印的文字 （Shortcuts 組件名稱：Text）
2. 把這段 html 轉成 rich text （Shortcuts 組件名稱：Make Rich Text from HTML）
3. 再把這段 rich text 轉為 PDF （Shortcuts 組件名稱：Make PDF）
4. 把這個 PDF 轉成圖片（Shortcuts 組件名稱：Get Images from Input）
5. 把這張圖片剪裁成某個特定的解像度。解像度的大小視乎 html 而定，需要自己去嘗試調整圖片大小（Shortcuts 組件名稱：Crop Image）
6. 把這張圖片剪裁為圓角（Shortcuts 組件名稱：Mask Image，Type 為 Rounded Rectangle）
7. 留下這張水印圖片備用
8. 拿取將要加上水印的圖片的寬度和高度（Shortcuts 組件名稱：Get Details of Images，分別拿取 Height 和 Width）
9. 根據要加上水印的圖片的大小來計算水印圖片的大小和放置在加上水印圖片上的位置
10. 把水印圖片和要加上水印的圖片重疊（Shortcuts 組件名稱：Overlay Image）
11. 完成，可根據自己需求儲存到相簿或是作其他處理。

其中最重要的步驟 1 至 7 可以參考以下的圖片。  
![]({{ site.baseurl }}/images/20181010-2.jpeg)

對 Shortcuts 有基本認識的朋友可以試試弄一個，不懂使用 Shortcuts 的朋友也可以直接 [按我](https://www.icloud.com/shortcuts/c13208c9fbce45819e7dd84319181162) 使用，只要把 HTML 上（上圖）的 「Roulesophy 點字記」換成自己需要的文字便可以了。

{% include_relative index/skills_iOS.md %}