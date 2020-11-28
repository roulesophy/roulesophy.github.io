---
filename: 2020-07-19-tiddlywiki-filter-expression-釋放-tiddlywiki-十倍威力的工具.md
layout: post
title: TiddlyWiki Filter Expression：釋放 TiddlyWiki 十倍威力的工具
tags: 學習筆記 知識管理 TiddlyWiki
date: 2020-07-19
permalink: 20200719-tiddlywiki-filter-expression/
thumbnail: "20200719-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20200719-1.jpeg)  
個人學習 [TiddlyWiki]({{ site.baseurl }}/%E7%9F%A5%E8%AD%98%E9%80%A3%E7%B5%90%E7%9A%84%E5%B7%A5%E5%85%B7-tiddlywiki/) 時，一個比較花時間去學習的是 [Filter Expression](https://tiddlywiki.com/#Filter%20Expression)。一旦學會了即使一點也好，也能為 TiddlyWiki 解封了十倍以上的威力。在這篇裡將會介紹什麼是 Filter Expression、Filter Expression 能做什麼、以及基本的語法和例子。

* 什麼是 Filter Expression，以及 Filter Expression 能做什麼？
* Filter Expression 的基本的語法是？
* Filter Expression 有甚麼基本和進階的應用？

## > 什麼是 Filter Expression，以及Filter Expression 能做什麼？

> Filter Expression 的的一個常見用途是用作找出符合條件的 tiddler 們，並在 tiddler 上展示。

Filter Expression 本身只是一個字串。例如是 `[tag[Today]field:caption[hello]]` 這樣。我們可以利用 Filter Expression 來找出符合條件的 tiddler 們（List of tiddler）。

例如最基本的例子是找出所有有某個 Tag 的 tiddler `[tag[Today]]`、找出所有標題含有某個字的 tiddler `[regexp:title[Journal]] `、或者複雜一點是找出所有有某個 Tag 的 tiddler 並且標題含有某個字的 tiddler 等`[tag[journal_2020]regexp:title[Journal]]`。

那麼我們找出這些符會條件的 tiddler 來做什麼？例如我們可以在一個 tiddler 裡加入一個 [list widget](https://tiddlywiki.com/#ListWidget)，而當我們把這句 Filter expression 放入這個 list widget 後，這個 tiddler 便會把所有符合這個條件的 tiddler 都展示出來，這對於我們管理和處理 tiddler 時十分有用。

![]({{ site.baseurl }}/images/20200719-2.jpeg)

一個常見例子就是用作 TODO List。我們可以把所有 tag 上 task 的 tiddler 展示出來，並在旁邊加上一個 check box。我們可以設定一旦該 check box 被打勾，這個 tiddler 的 tag 便會由 task 變成了 done，所以再也不會在這個 TODO List 上出現了。關於這個用途官網有一個 [詳細的例子](https://tiddlywiki.com/#TaskManagementExample)。                                                                                                                                                                                                                                                            

![]({{ site.baseurl }}/images/20200719-3.jpeg)

當然，實際上 Filter Expression 能做到的東西可以遠比剛才的例子強大得多。例如假設你把tiddler 們tag 上日子，而這個日子的格式例如是 `20200716 Journal (Week 29 Thu)`，我們甚至能找出所有Week 29 的 tiddler。

也因此，Filter Expression 的語法相對上比較複雜。以下會稍微介紹一下基本語法。

## > 基本的語法

我們以以下的這句 filter expression 作為例子來介紹：

`[tag[task]regexp:title[Blog]] -[regexp:title[omni]] +[tagging[]] ="Additional Tiddler" `

首先，一句 Filter Expression 裡是由一個或多於一個的 [run](https://tiddlywiki.com/#Filter%20Run) 所組成（由 " " 所分隔）。例如這個例子裡有 4 個 run，分別是：

1. `[tag[task]regexp:title[Blog]] `
2. `-[regexp:title[omni]]`
3. `+[tagging[]]` 以及
4. `="Additional Tiddler" `

至於那些 `-` 、 `+` 、`=` 是一個連接每個 run 的方式，稍後再談（留意這些 `-` 、 `+` 、`=` 並不是 run 的一部分）。

而每一個 run 是由一個或多於一個的 [step](https://tiddlywiki.com/#Filter%20Step) 所組成（都是由 `operator:suffix[parameter]` 的方式來表現）、或是直接以 `"<text>"` 的方式來代表。operator 指的是一些官方提供的操作，例如上面出現的 tag 等等。[這裡](https://tiddlywiki.com/#Filter%20Operators)有詳細的清單。

以以上的例子來說：

* `[tag[task]regexp:title[Blog]] ` 這個 run 裡有兩個 step。
	* 第一個是 `tag[task]` ，operator （名稱）是 [tag](https://tiddlywiki.com/#tag%20Operator)、parameter 是task。
	* 第二個是 `regexp:title[Blog]`，operator 是 [regexp](https://tiddlywiki.com/#regexp%20Operator)、suffix 是 title、parameter 是 Blog
	* 這個 run 的意思是找出所有有 tag 為 task 、並且標題包含 Blog 的 tiddler（以 [regular expression](https://en.wikipedia.org/wiki/Regular_expression) 來表達）。
* `-[regexp:title[omni]]`這個 run 裡有一個 step。
	* operator 是 [regexp](https://tiddlywiki.com/#regexp%20Operator)、suffix 是 title、parameter 是 omni
	* 這個 run 的意思是找出所有標題包含 omni 的 tiddler（以 [regular expression](https://en.wikipedia.org/wiki/Regular_expression) 來表達）。
	* 而每一個 run 是和前面的 run 有關係的。由於這個 run 的前面有 `-` 的關係變成了剔除這些 tiddler 的意思，這變成了這個加上前一個 run 加起來的意思是 "找出所有有 tag 為 task 、並且標題包含 Blog 的 tiddler，並且剔除標題包含 omni 的 tiddler。"
* `+[tagging[]]` 這個 run 裡有一個 step， 而這個 run 的 operator 是 [tagging](https://tiddlywiki.com/#tagging%20Operator)。
	* 假設之前兩個 run 得出來的結果只有兩個 tiddler ，分別是 "Blog : Post: aaa" 和 "Blog : Post: bbb" ，那麼這三個 run 得出的結果是所有有 tag 上"Blog : Post: aaa" 或 "Blog : Post: bbb" 的 tiddler們。
* 最後，`="Additional Tiddler"` 指的只是一個名為 "Additional Tiddler" 的 tiddler。而  `=` 的意思是在前面 3 個 run 的結果上直接加上這個 run 的結果，也就是"Additional Tiddler 這個 tiddler。

例子有點複雜。但我相信有了概念後，看這幾篇應該不是問題了。

* [Filter Syntax](https://tiddlywiki.com/#Filter%20Syntax)
* [Filter Expression](https://tiddlywiki.com/#Filter%20Expression)
* [Filter Run](https://tiddlywiki.com/#Filter%20Run)
* [Filter Step](https://tiddlywiki.com/#Filter%20Step)
* [Introduction to Filter notation](https://tiddlywiki.com/#Introduction%20to%20filter%20notation) 這篇有更多 Filter Expression 的例子。

## > 進階應用：Filter Expression 不只是為了找出 tiddler 們而存在喔

隨著時間的發展，Filter Expression 裡的 operator 也不只是為了 tiddler 而服務，例如加上了很多的關放文字操作的 operator（String operators） 和數學操作的 operator（Mathematics Operators）。

例如以下的 Filter Expression，你猜會出現了什麼的結果？

`=1 =2 =3 =4 +[multiply[4]multiply[3]] -12`

相信看到這裡，也知道這個 Filter Expression 有6個 run 了。以下來說每個 run 得出的結果吧。

||Run|每個 run 得出的結果（以逗號分隔的列表）|
|---|---|---|
|1|`=1`|1|
|2|`=2`|1, 2|
|3|`=3`|1, 2, 3|
|4|`=4`|1, 2, 3, 4|
|5|`+[multiply[4]multiply[3]]`|12, 24, 36, 48|
|6|`-12`|24, 36, 48|

我們可以只在 TiddlyWiki 裡不用寫程式便能進行這些數學運算，不要忘記這只是一個 Wiki 軟件而已！

## > 進階應用：把 variable 和 transclusion 和 Filter Expression 結合

另外，我們還可以在 step 裡放入 [variable](https://tiddlywiki.com/#Variables)（以 `<variable_name>` 的方式表達） 、或是 [transclusion](https://tiddlywiki.com/#Transclusion%20Basic%20Usage) 的表達式（以 `{transclusion_value}` 的方式表達）。因為 Variable 和 Transclusion 不是這篇的課題，在這裡不多談了，有興趣可以看 [這裡](https://tiddlywiki.com/#Filter%20Parameter)。

此外，我們可以把 Filter Expression 的結果以 transclusion 的方式展示出來（這叫做 Filtered transclusions）。方法是使用 {% raw %}`{{{ Filter Expression }}}` {% endraw %}。詳細[看此](https://tiddlywiki.com/#Widgets%20in%20WikiText)。但如果以這個方式以 [set widget](https://tiddlywiki.com/#SetWidget) 的方式放在 variable 裡，這個 variable 只包含該 Filter Expression 的第一個結果。

事實上，還真的有人利用以上的特性製造了一個為每個 tiddler 作計時器的工具（連結[按此](http://tiddlytools.com/timer.html)）。由於我有把 TiddlyWiki [當作任務管理軟體]({{ site.baseurl }}/%E6%88%91%E6%9C%83%E7%94%A8-tiddlywiki-%E4%BE%86%E5%81%9A%E7%94%9A%E9%BA%BC/)的習慣，最近我還把這個工具用作為自己的每個任務計時的工具。

## > 總結

 Filter Expression 雖然不算容易學習，但是這是我認為和其他 wiki 應用的很大的分別，這個功能和其他的 [widget](https://tiddlywiki.com/#Widgets%20in%20WikiText) 結合起來 ，就會變成了訂制度十分高的工具，功能基本上已經超越了 wiki 工具的範圍。

也因為 TiddlyWiki 有這麼彈性的功能，才能讓我們自己做出滿足自己需要的功能。
