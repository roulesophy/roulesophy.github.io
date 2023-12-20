---
filename: 2021-10-26-tiddlywiki-教學與示範-如何像-evernote-般快速加入-checkbox-checkboxwidget-editortoolbar-actionsendmessagewidget-.md
layout: post
title: TiddlyWiki 教學與示範：如何像 Evernote 般快速加入 checkbox？（CheckboxWidget、EditorToolbar、ActionSendMessageWidget）
tags: TiddlyWiki
date: 2021-10-26
permalink: 20211026-tiddlywiki-tutorial-insert-checkbox/
thumbnail: "20211026-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20211026-1.jpeg)  
當我們使用 TiddlyWiki 時，好容易一開始就和其他的筆記軟件作比較。例如如果你是由 Evernote 轉過來的話，你就會第一時間想為什麼好像要加一個 check box 到 TiddlyWiki 都這樣困難的？

在Evernote 裡用一個列點然後加一個 check box 已經可以好簡單做到一個待辦清單。

![]({{ site.baseurl }}/images/20211026-2.jpeg)

## 為什麼會有這個問題？

會有這個問題是因為我都是從 Evernote 轉過來，一開始時我也不習慣。

但是開始慢慢留意到 Evernote 和 TiddlyWiki 的分別。例如是 Evernote 內在的格式其實是好複雜（一個名為 .enex 的他們自家格式的文件），而他的編輯器是好像Microsoft Word 那樣，即時寫就即時看到效果，而 TiddlyWiki 裡每一個 Tiddler 只是基本的純文字，這些文字就算展示為 Checkbox 也好，這個 Checkbox 也沒有自己獨立的狀態，就算有狀態也好，他們的狀態也需要在某一個 Tiddler 或 Tiddler 內的一些 field 中取得。這個就是為什麼好像要在 TiddlyWiki 裡要加一個可以點選的 check box 也不容易的原因。

在這裡向不知道什麼是 [field](https://tiddlywiki.com/#TiddlerFields) 的同學說明，一個 tiddler 除了內容外，本身也會儲存其他內容。例如是這個 tiddler 是何時建立又或是上一次修改的日期等等。這些內容全部放在一些名為 field 的地方。一個 tiddler 可以有很多個 field，這些 field 都有各自的名稱來標示。例如何時建立這個 tiddler 對應的 field 是 created、上一次修改的日期對應的 field 是 modified。而每一個 tiddler 中我們在編輯器裡看到的內容，其實只是這個 tiddler 中一個名為 text 的 field 的內容。除了這些 field 外，我們還可以自訂不同的 field。

## TiddlyWiki 中關於 checkbox 的介紹

如果有看到 TiddlyWiki 官網關於 [checkbox](https://tiddlywiki.com/#CheckboxWidget) 的例子，你會發現以下的東西：

{% raw %}

	<$checkbox field="status" checked="open" unchecked="closed" default="closed"> Is it open?</$checkbox><br>''status:'' {{!!status}}

{% endraw %}

這段也就是說，，這個 checkbox widget 會展示為一個 checkbox，而這個 checkbox 的狀態是和一個名為 status 的 state 連結在一起。如果點了這個 checkbox，那麼 status 這個 field 的內容是 open，反之就是 closed。

![]({{ site.baseurl }}/images/20211026-3.jpeg)

## 我們可以如何在 Tiddler 中模仿 Evernote 中的 checkbox？

那麼，我們可以如何在 Tiddler 中模仿 Evernote 中的 checkbox 呢？

我們先看看在 Evernote 裡我們如何使用 checkbox。一個常用的例子像這樣：

![]({{ site.baseurl }}/images/20211026-4.jpeg)

這樣做，我們便可以快速製作一個待辦清單。

理論上我們也可以在 TiddlerWiki 裡做類似的事，例如是：

![]({{ site.baseurl }}/images/20211026-5.jpeg)

嗯⋯如果每次加入一個 checkbox 也要花這麼多的力氣的話，相信不會有人想用。除了要打很多字外，我們還要為每一個 checkbox 對應的 field 想名字。

這裡有兩個難點：

* 每次加入 checkbox 時也要想這個 checkbox 對應的 field 的名稱。
* 每次加入 checkbox 也要輸入大量語法，由於有大量這法，造成在編輯器裡的內容十分難懂。

我們先從 field 中的名字著手。如果我們能夠以當前的時間為 field 的名稱，那麼我們便不用想名稱了？

至於如何快速地輸入當前的時間，這個會稍後討論。

下一個問題就是語法。這個比較好處理，只要加入一個 [macro]({{ site.baseurl }}/tiddlywiki-%E5%AF%A6%E7%94%A8-macro-copyblock1/) 便好了。例如是這樣：

	\define checkboxByTime(timestamp)
	<$checkbox field="checkboxbytime_$timestamp$" checked="open" unchecked="closed" default="closed"></$checkbox> 
	\end

很簡單，只是把當前的時間放進 checkboxByTime 這個 macro 便可以了。例如是這樣。

	<<checkboxByTime "20211023135009">>

下一個步驟是，如何能夠快速插入以上的語法？

這裡我們需要用到一個名為 EditorToolbar 的概念。

## EditorToolbar 是什麼？

如果一個 tiddler tag 了 `$:/tags/EditorToolbar` 並加入了某些元素，它便會在編輯器裡出現。

例如是這一排的按鈕，其實每一個都是一個 Tag 了 `$:/tags/EditorToolbar` 的  Tiddler。

![]({{ site.baseurl }}/images/20211026-6.jpeg)

那麼說，如果我們在那裡弄一個按鈕，並且當我們按下這個按鈕時會自動在 editor 貼上例如是 `<<checkboxByTime "20211023135009">>` 的東西，而這段 macro 的 argument 是當前的時間，便解決了這個問題了？

我們現在就這樣做。

## 繼續寫我們的 checkbox

這個是完整的內文。

![]({{ site.baseurl }}/images/20211026-7.jpeg)

我們看到這個 tiddler tag 了`$:/tags/EditorToolbar`，那麼它便會出現在編輯器裡。當我們按了那個對應的按鈕，便會執行這個 tiddler 的內容。

這個按鈕的圖案由 `TiddlyWiki Icon Checkbox` 這個 Tiddler 所提供，只要把這個 tiddler 的名稱放在 icon 這個 field 便可。

如果在想編輯器裡使用鍵盤快捷鍵，我們可以自定一個代表這個快捷鍵的名稱（這裡用了 checkbox），並變成 ((checkbox)) 放在 shortcuts 這個 field ，然後新建一個名為 `$:/config/shortcuts/checkbox` 的 tiddler，把想要的快捷鍵放入即可。

![]({{ site.baseurl }}/images/20211026-8.jpeg)

至於執行的動作，我們先用 [now](https://tiddlywiki.com/#now%20Macro) 這個官方 macro 找出當前的時間並變成 `YYYY0MM0DD0hh0mm0ss` 這個格式（詳細格式 [看此](https://tiddlywiki.com/#DateFormat)）並放在 `timestamptext` 這個 variable 裡，然後把 [tm-edit-text-operation](https://tiddlywiki.com/#WidgetMessage%3A%20tm-edit-text-operation) 這個 message 放進 [action-sendmessage](https://tiddlywiki.com/#ActionSendMessageWidget) 這個 widget 來為當前的編輯器位置加入 `insertCheckbox` 這個 macro 的結果，而 `insertCheckbox` 的結果就是一個例如是 `<<checkboxByTime "20211023135009">>` 的純文字。

其他關於 EditorToolbar 的詳細解釋可以 [看此](https://tiddlywiki.com/#How%20to%20create%20dynamic%20editor%20toolbar%20buttons)。

![]({{ site.baseurl }}/images/20211026-9.gif)

完成，以下是 demo。Source 在[這裡]({{ site.baseurl }}/TiddlyWiki_Demo/Add_Checkbox_As_Evernote.html)。

## 總結

這次一次介紹了很多 TiddlyWiki 的功能：

* 什麼是 [field](https://tiddlywiki.com/#TiddlerFields)
* [checkbox widget](https://tiddlywiki.com/#CheckboxWidget) 來加入 checkbox
* [EditorToolbar](https://tiddlywiki.com/#How%20to%20create%20dynamic%20editor%20toolbar%20buttons) 來為編輯器加入自定義的功能
* [now macro](https://tiddlywiki.com/#now%20Macro) 來插入當前的時間
* [action-sendmessage](https://tiddlywiki.com/#ActionSendMessageWidget) 這個 message 來改變 tiddler 的狀態

特別是 action-sendmessage 這個 Widget，配合不同的 [message](https://tiddlywiki.com/#Messages) 使用會是一個十分常用並強大的功能，有興趣的同學可以多加留意。

{% include_relative index/tiddlywiki.md %}