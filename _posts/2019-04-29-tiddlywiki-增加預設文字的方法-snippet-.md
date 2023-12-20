---
filename: 2019-04-29-tiddlywiki-增加預設文字的方法-snippet-.md
layout: post
title: TiddlyWiki 增加預設文字的方法（Snippet）
tags: 工作心法 知識管理 TiddlyWiki
date: 2019-04-29
comments: true
---

![]({{ site.baseurl }}/images/20190429-1.jpeg)  
使用了 [TiddlyWiki]({{ site.baseurl }}/%E7%9F%A5%E8%AD%98%E9%80%A3%E7%B5%90%E7%9A%84%E5%B7%A5%E5%85%B7-tiddlywiki/) 一段時間，也有一些心得想分享。這次介紹的是一個目測比較少用的功能，就是增加預設文字的方法。

在 TiddlyWiki 裡，我們首先把一些預設的文字放在不同的 Tiddler 並加上特定的 Tag，然後我們便可以在新的 Tiddler （也就是筆記編輯頁）裡按下某些按鈕便可以立即令編輯器出現該特定的預設文字。

## 如何新增預設文字？

例如，我們想新增一款預設文字，我們可以：

1. 新增一個 Tiddler
2. 輸入這組預設文字（這組預設文字也可以是任何東西，包括 Macro 如下圖的 `<<copy-block-1 "">>`，這是我自己新增的 [Macro]({{ site.baseurl }}/tiddlywiki-實用-macro-copyblock1/)）
3. 為這個 Tiddler 加上 `$:/tags/TextEditor/Snippet` 這個 Tag，這是一個預設的 Tag ，有加上這個 Tag 的 Tiddler 都是預設文字。
4. 可以為 Tiddler 加上一個名為 caption 的 field， 這會改變預設文字顯示的名稱。如果沒有加上這個 field，預設文字會顯示為該 Tiddier 的名稱。這裡我們設置 caption 為 `copy-block-1` 

![]({{ site.baseurl }}/images/20190429-2.jpeg)

## 如何使用預設文字？

當我們新增了預設文字後，我們可以在編輯 Tiddler 時按下圖的按紐，然後選擇已新增的 預設文字，便可以插入該預設文字。

![]({{ site.baseurl }}/images/20190429-3.jpeg)

![]({{ site.baseurl }}/images/20190429-4.gif)


{% include_relative index/tiddlywiki.md %}