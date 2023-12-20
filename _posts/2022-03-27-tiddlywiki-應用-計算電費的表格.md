---
filename: 2022-03-27-tiddlywiki-應用-計算電費的表格.md
layout: post
title: TiddlyWiki 教學與示範：計算電費的表格
tags: TiddlyWiki
date: 2022-03-27
permalink: 20220327-tiddlywiki-bill-splitter-example/
thumbnail: "20220327-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20220327-1.jpeg)  
這次試試來示範如何使用 TiddlyWiki 來做一些簡單的計算表格。

這次的例子就是一個電錶分賬單的計算器。

假設因為一些原因，有兩家人共用電源，雖然他們有獨立的電錶（讀取電量的儀器），但是賬單是同一張。

每一個家庭都在上次看賑單時先記錄各自的度數，在這次看新賑單時再各自記錄各自的度數。計算使用比例後，便能計算各自要繳交的費用。

例子是：假設這次的賑單費用是 1000 元，單位 A 上次的電錶度數是 200 ，今次的電錶度數是300；單位 A 上次的電錶度數是 200 ，今次的電錶度數是300；單位 B 上次的電錶度數是 400 ，今次的電錶度數是700。

那麼單位 A 的電錶度數相差是 300 - 200 = 100，單位 B 的電錶度數相差是 700 - 400 = 300。

所以，單位 A 要繳交的電費是 $1000 x 100 / (100 + 300) = $250，單位 B 要繳交的電費是 $1000 x 300 / (100 + 300) = $750。

這是一個這麼簡單的應用，如果在 TiddlyWiki 要如何製作這個應用呢？

在這個應用中，介紹兩個 TiddlyWiki 的東西，一個是 [EditTextWidget](https://tiddlywiki.com/#EditTextWidget) ，另一個是 [Vars Widget](https://tiddlywiki.com/#VarsWidget) 。它們的用處會在這個例子中說明。

這次的例子比較簡單，就直接上程式碼了。

![]({{ site.baseurl }}/images/20220327-2.jpeg)

![]({{ site.baseurl }}/images/20220327-3.jpeg)

而這個就是在 TiddlyWiki 上的樣子。我們只要填上賬單費用和各自的上次讀數和今次讀數，下面便會立即計算結果。

## EditTextWidget：一個輸入資料的地方

我們可以在 TiddlyWiki 裡加入一些 text box 來輸入資料，這個 text box 在 TiddlyWiki 就是 EditTextWidget。

每一個 EditTextWidget 和一個 Tiddler 的 field 連接著，也就是說當我們在這個 EditTextWidget 上輸入文字時，該連接的 Tiddler field 就會被更改數值。

如果在 EditTextWidget 裡沒有指明 tiddler，那麼便會更改當前所在的 Tiddler；如果在 EditTextWidget 裡沒有指明 field，那麼便會更改 text 這個 field。 

這次我們就用它來作輸入電費、以為兩戶各自的前後讀數。

## VarsWidget：用來儲存 variable 的地方

我們有了 EditTextWidget 來作輸入後，這些輸入的數字應該在某處了。

這時，我們可以使用 [filter expression]({{ site.baseurl }}/20200719-tiddlywiki-filter-expression/) 來計算出它們的數值，然後把它們放在一些 variable 裡。這時我們便需要 VarsWidget。

假設 A 戶的上一次讀數被寫在 beforeA 這個 field 、這次的讀數寫在 afterA 裡；B 戶的上一次讀數被寫在 beforeB 這個 field 、這次的讀數寫在 afterB 裡。

我們想計出 A 戶的讀數相差加上 B 戶的讀數相差時，我們可以先計算 A 戶的讀數相差和 B 戶的讀數相差，然後再把兩個相差加總。

我們可以這樣做。 diffA 就是 A 戶的讀數相差， diffB 就是 B 戶的讀數相差，diffSum 就是它們的相加。

![]({{ site.baseurl }}/images/20220327-4.jpeg)

有了這樣的方法，我們便可以計算出各自的電費了。 [Source 看此]({{ site.baseurl }}/TiddlyWiki_Demo/BillCalculator.html)。 

希望這個小教學能幫到大家。

{% include_relative index/tiddlywiki.md %}
