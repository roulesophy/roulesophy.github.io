---
filename: 2021-10-30-tiddlywiki-教學與示範-如何製作表格模版--edittextwidget-revealwidget-wikifywidget-.md
layout: post
title: TiddlyWiki 教學與示範：如何製作表格模版？（EditTextWidget、RevealWidget、WikifyWidget）
tags: TiddlyWiki
date: 2021-10-30
permalink: 20211030-tiddlywiki-tutorial-table-template/
thumbnail: "20211030-1.jpeg"
comments: true
---

![]({{ site.baseurl }}/images/20211030-1.jpeg)  
這篇來介紹一個實用按例：在 Tiddler 中插入可以直接更改內容的表格，並把它變成模版。

個人認為是使用 TiddlyWiki 時，一個編輯上來比較麻煩的地方就是關於表格。

由於每一個 Tiddler 的內容只是一個純文字的格式，所以要編輯用純文字表達的表格比較麻煩。另外，由於表格的語句也比較複雜加深了這個問題。

我以前寫過一篇文章「[TiddlyWiki 表格教學]({{ site.baseurl }}/tiddlywiki-%E8%A1%A8%E6%A0%BC%E6%95%99%E5%AD%B8/)」，有興趣的同學可以首先一看。

## > 在 TiddlyWiki 中使用表格會有什麼比較麻煩的痛點呢？

我想到的有兩個：

第一個是表格內容很多時，其實是很難閱讀的，特別是我們如果融合了兩個表格的儲存格時。

![##例如是這樣。]({{ site.baseurl }}/images/20211030-2.jpeg)

第二個是我們很難在表格裡寫一些多於一行的內容。我想到的只有兩個方案：

第一個方案是用 `<br>` 來代表新行：

![]({{ site.baseurl }}/images/20211030-3.jpeg)

第二個方案就是使用 [transclusion]({{ site.baseurl }}/tiddlywiki-%E8%A1%A8%E6%A0%BC%E6%95%99%E5%AD%B8/#-%E8%A1%A8%E6%A0%BC%E8%A3%A1%E6%8F%92%E5%85%A5%E5%88%97%E8%A1%A8)。例如：

![]({{ site.baseurl }}/images/20211030-4.jpeg)

但這兩個做法都有些問題。第一個方案會使 編輯 Tiddler 時變得異常困難，因為易難性很差；第二個方案則需要新建其他 Tiddler 的幫忙，這樣會使得比較難管理。

##  \> 解決方案：在表格裡放入 EditTextWidget

EditTextWidget 簡單來說就是一個輸入文字的地方，只要加入了這個，Tiddler 便會出現了一個文字輸入框，而內容就會寫在指定的 field 裡。

在這裡向不知道什麼是 [field](https://tiddlywiki.com/#TiddlerFields) 的同學說明，一個 tiddler 除了內容外，本身也會儲存其他內容。例如是這個 tiddler 是何時建立又或是上一次修改的日期等等。這些內容全部放在一些名為 field 的地方。一個 tiddler 可以有很多個 field，這些 field 都有各自的名稱來標示。例如何時建立這個 tiddler 對應的 field 是 created、上一次修改的日期對應的 field 是 modified。而每一個 tiddler 中我們在編輯器裡看到的內容，其實只是這個 tiddler 中一個名為 text 的 field 的內容。除了這些 field 外，我們還可以自訂不同的 field。

而 EditTextWidget 是可以單行或多行的，這取決於 tag 是輸入 input 還是 textarea。

![]({{ site.baseurl }}/images/20211030-5.jpeg)

更多相關資訊可以看官網的 [這頁](https://tiddlywiki.com/#EditTextWidget)。

而我的方案是把這些 EditTextWidget 放入表格裡。

我們只要寫以下的 [macro]({{ site.baseurl }}/tiddlywiki-%E5%AF%A6%E7%94%A8-macro-copyblock1/)，寫一個 EditTextWidget 並指定連結的 field 便可以了。

```html
\define TableCellMultiLine(field, height:"100px")
<$edit-text field="$field$" placeholder="" tag=textarea minHeight="$height$" autoHeight="yes"/>
\end
```

![]({{ site.baseurl }}/images/20211030-6.jpeg)

只要把以上的 macro tag 了 `$:/tags/Macro`，我們便可以在任何 Tiddler 中使用這個 macro了。

只是這個方法一定要在 TiddlyWiki 5.2.0 或以上的版本才能用。原因是以前的版本中，如果這個 EditTextWidget 連結到相同的 Tiddler 的 field 時，每在 EditTextWidget 打一個字，因為要更新頁面的關係，那個EditTextWidget 的 focus 會消失，所以我們要再點擊該 EditTextWidget 才能輸入。以前的 workaround 是把該 EditTextWidget 的內容連結到另一個 Tiddler 就沒有了這個問題。

不過背後的成因不重要，只要在 5.2.0 或以上的版本中使用就可以了。

##  \> 下一個改良：用 RevealWidget 來切換編輯模式和閱讀模式

如果，我們能夠有一個按鈕，按一下內容會是 EditTextWidget，再按一下會變成 EditTextWidget 對應的 field 的內容顯示出來呢？

![]({{ site.baseurl }}/images/20211030-7.jpeg)

![]({{ site.baseurl }}/images/20211030-8.jpeg)

這裡可以介紹一個名為 [RevealWidget](https://tiddlywiki.com/#RevealWidget) 的東西。

簡單來說，這個 Widget 做的是如果某個 field 的狀態達到某個條件，某些內容就會顯示出來。

例如：

```html
<$reveal type="nomatch" state="!!readwritemode" text="readmode">
    <$button set="!!readwritemode" setTo="readmode">To View Mode</$button>
</$reveal>
<$reveal type="match" state="!!readwritemode" text="readmode">
    <$button set="!!readwritemode" setTo="writemode">To Write Mode</$button>
</$reveal>
```

實際效果如下：

![]({{ site.baseurl }}/images/20211030-9.gif)

這裡其實有兩個按鈕。一個名為 `To View Mode`，另一個名為 `To Write Mode`。To View Mode 這個按鈕被一個 RevealWidget 包圍，而這個RevelWidget 的顯示條件是當這個 Tiddler 的一個名為 readwritemode 的 field 的數值不是 readmode 時才會顯示，這代表 To View Mode 這個按鈕 只有在 readwritemode 不是 readmode 時才會顯示。

相似原理，To Write Mode 這個按鈕 只有在 readwritemode 是 readmode 時才會顯示。

因為一開始這個 Tiddler 的一個名為 readwritemode 的 field 的內容不是 readmode ，所以 To View Mode 這個按鈕便顯示了，也因為這個相同的原因，所以 To Write Mode 這個按鈕沒有顯示。

當我們按下這個 To View Mode 的按鈕時，這個按鈕會改變 readwritemode 這個 field 的數值變成 readmode，所以這些由於 readwritemode 是 readmode，所以 To View Mode 不會顯示，而 To Write Mode 這個按鈕則能夠被顯示。

我們可以用以上的東西來切去換閲讀模式和編輯模式。只要使用以上的女按鈕和稍稍修改 TableCellMultiLine 這個 macro：

```html
\define TableCellMultiLine(field, height:"100px")
<$reveal type="nomatch" state="!!readwritemode" text="readmode">
<$edit-text field="$field$" placeholder="" tag=textarea minHeight="$height$" autoHeight="yes"/>
</$reveal>
<$reveal type="match" state="!!readwritemode" text="readmode"><$wikify name="fieldvalue" text="{{!!$field$}}" output="html"><<fieldvalue>></$wikify></$reveal>
\end
```

這裡在顯示模式下使用了一個名為 [WikifyWidget](https://tiddlywiki.com/#WikifyWidget) 的東西，就是把內容變成顯示的樣子，例如內容是表格的語句的話，用了這個 Widget 後便會變成顯示的表格。

效果如下：

![]({{ site.baseurl }}/images/20211030-10.jpeg)

![]({{ site.baseurl }}/images/20211030-11.gif)

但是要留意，這個方法也有它的問題，都是關於在表格中的 EditTextWidget 插入其他 Tiddler 的連結有關。第一個問題是 [Relink]({{ site.baseurl }}/20200808-tiddlywiki-relink/) 這個 plugin 會對在這些連結的重命名失效；第二個問題是這些連結無法在 [反向描結]({{ site.baseurl }}/20211010-tiddlywiki-tutorial-contextual-backlinks/) backlink 中顯示。

這次的 source 在 [這裡]({{ site.baseurl }}/TiddlyWiki_Demo/Editable_Table.html)。

## > 我們還能夠把這個表格變成模板

用以上的方法的另一個好處是，我們還能夠把這個表格變成模版來重用。

這樣的好處有很多。例如是製作標準的內容、或是每一次要製作類似的東西時也可以使用模版來減少出錯。

那麼我們要如何做呢？

假設我們弄了一個這樣的表格，命名為 Test Table Template 時，我們還可以用 [Transclusion with Templates](https://tiddlywiki.com/#Transclusion%20with%20Templates) 的方法來重用這個表格。而這樣做的話寫入的 field 是使用這個 Template 的 Tiddler ，而不是 Test Table Template 的 field 裡。

![]({{ site.baseurl }}/images/20211030-12.jpeg)

![]({{ site.baseurl }}/images/20211030-13.jpeg)

## > 總結

這次我們示範了這個實用的功能，也介紹了以下的元件：

* [EditTextWidget](https://tiddlywiki.com/#EditTextWidget) 能夠在 Tiddler 裡插入編輯文字的地方。
* [RevealWidget](https://tiddlywiki.com/#RevealWidget) 能夠決定在 Tiddler 裡展示什麼內容。
* [WikifyWidget](https://tiddlywiki.com/#WikifyWidget) 能夠把各語法的內容變成顯示的內容。

{% include_relative index/tiddlywiki.md %}