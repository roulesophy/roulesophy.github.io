---
filename: 2020-08-08-重新命名-tiddler-很麻煩-relink-這個-plugin-可以解決這個煩惱.md
layout: post
title: 重新命名 Tiddler 很麻煩？ReLink 這個 Plugin 可以解決這個煩惱
tags: TiddlyWiki
date: 2020-08-08
permalink: 20200808-tiddlywiki-relink/
thumbnail: "20200808-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20200808-1.jpeg)  
當你正在為 TiddlyWiki 裡的 Tiddler 重新命名感到煩惱時，這篇可能會幫到你。

> * 不同的記事軟體的筆記連結方式有那兩種？
> * 什麼是 TiddlyWiki 的 Plugin?
> * ReLink 這個 Plugin 能夠如何解決重新命名 Tiddler 的問題？

## 不同的記事軟體的筆記連結方式有兩種

在有筆記連結功能的軟體裡，怎麼能知道這個連結是連結到那個筆記呢？一般來說有兩種方式。

像是 Evernote 這一類會為每一則筆記內定了一個 不會重覆的 ID 來代表這個筆記的身份，所以我們有筆記 A 裡加入筆記 B 的筆記連結時，其實我們加入的是筆記 B 的   ID。這樣的好處是可以有多於一篇相同名稱的筆記，以為就算筆記的名稱更改了，這個筆記的連結也不會斷掉。

而缺點就是我們很難把Evernote的筆記遷移出去。因為就算遷移了到其他的筆記軟體後，我們也不知道這篇筆記裡的所有筆記連結本來是要到那一篇筆記裡。

而 TiddlyWiki 所使用的 Tiddler 連接方法是以 TiddlyWiki 的名稱作為連結。這個方法有好有不好。這樣的好處是我們可以在編輯 Tiddler 時已經知道這個 Tiddler 裡的所有連結到底將會接到什麼的 Tiddler 裡。另一個優點是就算日後要轉換筆記軟體時的問題也沒有 Evernote 等的問題那麼嚴重。

但是缺點也很明顯，第一是每個 Tiddler 的名稱就是它的 ID ，所以我們在新建一個 Tiddler 時要很小心使用一些不會重覆的名稱，這最好在 Day 1 便要思考的問題。第二個缺點就是當我們要重新命名 Tiddler 時，如果有其他 Tiddler 有連結到這個 Tiddler，那些連接點便會斷了。 （提外話，使用 Tag 來進行連結的話不會有這個問題， TiddlyWiki 會自動把這些 Tag 重命名。

針對第二個問題，我最近發現的一個 Plugin 很好的解決這個問題。

## 什麼是 Plugin？

我好像在這裏也沒有介紹過這個概念。

Plugin 就是一些別人寫好的 Tiddler 系列，通常都是一些工具，而這些 Plugin 都是別人寫好後放到網上分享出來的。當你把它安裝（也就是把這些 Tiddler 放到自己的 TiddlyWiki 裡），便可以直接使用這些其他人已經做好的工具，其他人遇到過的問題，我們可以直接解決掉。

而安裝的方式有兩種。

第一個方法只是直接把網上的這些 Plugin 直接拖拉到自己的 TiddlyWiki 裏便可以了。

如果你是使用 node.js 來使用 TiddlyWiki 的話，雖要把這個 Plugin 放到特定的位置並更改 tiddlywiki.info。在這裡就不多說了。詳細[看此](https://tiddlywiki.com/#Installing%20a%20plugin%20from%20the%20plugin%20library)。

而且是介紹的這個接口，就解決了Tiddler重新命名的問題。

## 解決重新命名 Tiddler 的 Plugin：ReLink

這個 [ReLink](https://github.com/flibbles/tw5-relink) 的 Plugin 便是為了解決這個問題而生的。（[按此看 Demo](https://flibbles.github.io/tw5-relink/)）

當安裝了這個 Plugin 後。使用的方式十分簡單。

假設我們有一個名為 B 的 Tiddler，而 Tiddler A 會連結到 B、或是 Transclude B。看下圖：

![]({{ site.baseurl }}/images/20200808-2.jpeg)

當你重新命名 B 這個 Tiddler 為 C 時，你會發現在它會列出所有 連結到 這個Tiddler的Tiddler（這個例子就是 A）。並且你可以選擇是否把它們連接的 Tiddler 也更改為你將會命名的 Tiddler。

![]({{ site.baseurl }}/images/20200808-3.jpeg)

當你把 B 這個 Tiddler 命名為 C 後，你會發現所有在 Tiddler A 的連結全部都會由 B 自動改成 C 了。

![]({{ site.baseurl }}/images/20200808-4.jpeg)

而這個命名的範圍也很闊，簡單將普通的 Link，又或是 Transclusion、圖片、Macro 的 Tidder 都可以自動重命名。這算是在 TiddlyWiki 裡一個必裝的 Plugin。

{% include_relative index/tiddlywiki.md %}