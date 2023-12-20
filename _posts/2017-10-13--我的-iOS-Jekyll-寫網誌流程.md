---
filename: 2017-10-13--我的-iOS-Jekyll-寫網誌流程.md
layout: post
title:  我的 iOS Jekyll 寫網誌流程
tags: 工作心法 iOS工作術 iOS_Shortcuts分享
date: 2017-10-13
comments: true
---

其實這個網誌我是主要以 iPad 來更新的。以下是我每寫一篇的工作流程。
先來說一下，這個網誌的背後其實是用一個名為 [Jekyll](https://jekyllrb.com/) 的系統，而每一篇的文章也是以 [markdown](https://daringfireball.net/projects/markdown) 來寫成。所以這個流程並不是每人也合適。

如果你是以 [Blogspot](https://www.blogger.com/) 來寫網誌的話，聽說 [BlogTouch Pro for Blogspot Blogger](https://itunes.apple.com/us/app/blogtouch-pro-for-blogspot-blogger/id583725471?mt=8) 會是一個不錯的選擇；而使用 [Wordpress](https://wordpress.com/) 來寫網誌的話，他們也有一個 [BlogTouch Pro for Wordpress Blogging](https://itunes.apple.com/us/app/blogtouch-pro-for-wordpress-blogging/id898784682?mt=8) 可供使用。

使用 Jekyll 來建立網誌有一定的技術門檻，日後有機會分享一下如何以 Jekyll 來建立一個網誌。

## 第一步：以 Bear 來寫文章
Jekyll 內的每一篇文章都是由 markdown 來寫的，以這種方式管理文章有優點也有缺點。優點是因為它是純文字格式，日後要做轉換/把網誌搬家也會比較容易；而缺點就是在 iOS 上編輯會變得比較麻煩。

其中一個最麻煩的例子就是加入插圖。很多時候一篇網誌的形成並不是一氣呵成的，可能今天輸入了一點資料、明天整理了那些資料、然後後天改變一下格式、然後大後天才完成一篇網誌。因為這個過程中我也是使用 markdown 的，所以中間要插入圖片的話便會十分麻煩，因為純文字不能儲存圖片的關係，很快便忘記了要使用那一張圖片了。

最近我使用了一個名為 [Bear](https://itunes.apple.com/us/app/bear/id1016366447?mt=8) 的 markdown 的文字編輯應用程式來寫網誌內容，這個應用程式特別的地方的是，作為一個 markdown 編輯器裡，我們可以插入圖片，之後匯出成 markdown 時能夠獲得圖片和它們在文章的位置。

![bear]({{ site.baseurl }}/images/20171013-1.jpeg)

這是 Bear 的編輯介面，可以見到超連結會自動隱藏不會干擾用家外，我們還能夠放入圖片（還能夠支持 iOS 11 的 drag and drop）。基本上每一篇文章的內容都可以在這裡完成。  
![bear]({{ site.baseurl }}/images/20171013-2.jpeg)	
完成後便可以按這個位置匯出到 Drafts 進行下一步的流程。  
![bear]({{ site.baseurl }}/images/20171013-3.jpeg)  
![bear]({{ site.baseurl }}/images/20171013-4.jpeg)  
![bear]({{ site.baseurl }}/images/20171013-4.jpeg)  

## 第二步：以 Drafts 來轉換文章格式
然後我們會用 [Drafts](http://agiletortoise.com/drafts/) 來把這篇文章變成 Jekyll 專用的 markdown 格式。

![Drafts]({{ site.baseurl }}/images/20171013-6.jpeg)

Drafts 是另一個純文字編輯器，它本身的設計是一個文字的入口，每當我們有甚麼想法都可以快速地打開 Drafts ，然後再使用它那自定性極高的功能來把這些文字傳送至不同的地方，例如傳送至 [Evernote](https://evernote.com/) / [Dropbox](https://www.dropbox.com/) 、又或是用文字內容來新建行事曆和建立 [Omnifocus](https://www.omnigroup.com/omnifocus)  的行動等。

Drafts 最吸引我的地方是它那極高的自定性，我們可以寫一些名為 [action](https://drafts4-actions.agiletortoise.com/) 的東西，例如先以 javascript 改變文字的格式，再把它們以 URL Schemes 的方法來把這些文字傳送給其它應用程式，又或是以其他的應用程式來幫忙處理這些文字。

另外，大家也可以看到 drafts 的下方有一排按鍵，這是一些名為 [Enhanced Keyboard](https://agiletortoise.zendesk.com/hc/en-us/articles/202865034-Using-the-Enhanced-Keyboard) 的東西，這是一些可以自己設定功能的按鍵，我們可以以 javascript 來處理文字，例如加入一些特別字符，又或是插入日期，插入行數等等。

順帶一提，當年寫 [RouOutliner](https://rououtliner.github.io/) 的原因其實也是因為想在 Drafts 內寫一個 outline processor 而已，所以它們的 API 是一樣的。

![Drafts]({{ site.baseurl }}/images/20171013-7.jpeg)

在這一步裡，我會以 Enhanced Keyboard 來更換 Bear 中的圖片連結格式，然後再以 [這個action](https://drafts4-actions.agiletortoise.com/a/2G2) 來改變這篇文字的格式為 jekyll 中的 markdown 格式，然後傳送去下一步： Working Copy 。

## 第三步：以 Working Copy 來把儲存網誌內容
[Working Copy](https://workingcopyapp.com/) 其實是一個在 iOS 上的 [git](https://git-scm.com/) client。git 是一個程式來保存檔案的變動，就好像時光機一樣，我們可以看到檔案以前的版本。因為這個好處，我會把整個網誌以 git 來保存每次的改動。

![Working Copy]({{ site.baseurl }}/images/20171013-8.jpeg)

在這個階段裡，除了把文章從 Drafts 傳送至 Working Copy 外，我也會在 Bear 中以 drag and drop 的方式把圖片放到 Working Copy 裡，這些圖片放到 Working copy 後，便會在下一步以 share extension 的方式以 Workflow 處理一下。

## 第四步：以 Workflow 和 ViewExif 來處理圖片
[Workflow](https://workflow.is/) 在 iOS automation 中扮演十分重要的角色，而 [ViewExif](https://itunes.apple.com/us/app/viewexif/id945320815?mt=8)  是用來看圖片中的一些名為 [Exif](https://en.wikipedia.org/wiki/Exif) 的資料，這些資訊本要是用來描述這張圖片，例如相片是由甚麼器材拍攝、相片的光圈快門、以及是相片的拍攝位置等等。

![Workflow]({{ site.baseurl }}/images/20171013-9.jpeg) 
![ViewExif]({{ site.baseurl }}/images/20171013-10.jpeg)  

在這個步驟裡，我是利用 [這個Workflow](https://workflow.is/workflows/7776bd773ebb4126b1b366aff4cd7280) 來進行縮圖的程序以減少讀者的流量負荷。另一方面，我利用 ViewExif 來移除 Exif 資料來保障私隱。這兩個步驟都是在 Working Copy 內以 Action Extension 來完成的。

![Working Copy Action Extension]({{ site.baseurl }}/images/20171013-11.jpeg)

然後這篇文章便可以以 git 的方式上傳了。

## 第五步：以 Textastic 來修改已發佈的文章

最後的步驟是一個把文章發表後，日後發現有東西要修改時進行的流程。在這個階段我會使用 [Textastic](https://www.textasticapp.com)。

![Textastic]({{ site.baseurl }}/images/20171013-12.jpeg)

這是另一個文字編輯器，由於對文字的處理功能沒有 Drafts 那麼強大，所以我只會用作事後編輯。那麼為甚麼會使用它呢？原因是它能夠和 Working Copy 一同連結。這個好用的地方是，當我打開 Textastic 時，它能夠展示 Working Copy 內的資料，當我修改完後，在 Working Copy 內的檔案也是修改後的樣子，因為它們的資料都是在 Working Copy 內。所以在 Textastic 修改後，便可以立即在 Working Copy 裡上傳了。

![Textastic]({{ site.baseurl }}/images/20171013-13.jpeg)

順帶一提，我們其實也可以在 Working Copy 內修改文章的，只是那個編輯器的功能太陽春而已。

以上就是我在 iOS 裡打一篇網誌的工作流程。

{% include_relative index/skills_iOS.md %}