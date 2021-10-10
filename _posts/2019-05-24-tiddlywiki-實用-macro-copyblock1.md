---
filename: 2019-05-24-tiddlywiki-實用-macro-copyblock1.md
layout: post
title: TiddlyWiki 實用 macro：copy-block-1
tags: 程式學習 TiddlyWiki
date: 2019-05-24
comments: true
---

![]({{ site.baseurl }}/images/20190524-1.jpeg)  
這是一個 [TiddlyWiki]({{ site.baseurl }}/知識連結的工具-tiddlywiki/) 的 macro 教學。這次我們會試試寫一個簡單的 macro ，為這個 Tiddler 的特定文字旁加上一個按紐，按下便會把該文字放到剪貼簿裡。方便在其它程式中使用。  
雖然這個功能實作起來十分簡單，但是對放有時需要快速使用把某些已知的特定文字時可是能省下「選擇文字並複製」這個步驟。

## > 甚麼是 Macro?

我們看看甚麼是一個 macro。一個 [macro](https://tiddlywiki.com/static/Macros.html) 就是一個程式把你的輸入以自定的方式輸出並放到 Tiddler 的方法。

比如說，如果我們定義了一個名為 `display-hello` 的 macro 是展示 `Hello` 這個文字時，我們可以這樣寫：

```md
\define display-hello()
Hello
\end
```

當我們要使用這個 macro 時，我們可以這樣寫：

```md
<<display-hello>>
```

又或是這樣寫（這是最原始的用法）：

```md
<$macrocall $name="display-hello" />
```

![]({{ site.baseurl }}/images/20190524-2.jpeg)

## > 開始實作這個 macro

好吧，其實我們也要使用 TiddlyWiki 系統內的 Macro 才能完成我們這次的任務。

在 [TiddlyWiki 的官網](https://tiddlywiki.com/) 裡有得多實用的資訊，善用搜尋使可以很容易找到一個名為 [copy-to-clipboard](https://tiddlywiki.com/static/copy-to-clipboard%2520Macro.html) 的內置 macro。

於是我們試試使用這個 macro：

![]({{ site.baseurl }}/images/20190524-3.jpeg)

我們試試按 copy to clipboard 的按紐，test 這個字真的被放到剪貼簿裡，只是感覺有點奇怪，因為我們看到這個 copy to clipboard 的時候，其實我們不知道將會把甚麼東西放進剪貼簿裡。所以最好的做法是當我們呼叫這個 macro 時，我們能知道自己將會把甚麼放到剪貼簿裡，這段字最好能夠以等寛字體 [monospace / code](https://tiddlywiki.com/static/Formatting%2520in%2520WikiText.html) 的方法顯示。

所以，參考了 TiddlyWiki 裡關於 [定義 macro](https://tiddlywiki.com/static/MacroCallWidget.html) 的介紹 後，我們可以寫出以下的 macro：

```md
\define copy-block-1(src) `$src$` <<copy-to-clipboard "$src$">>
```

這裡的 src 就是輸入到這個 macro 的資料，然後在介紹頁裡可以以 $src$ 的方式把 src 這個輸入文字展示出來，所以如果我們呼叫 `copy-block-1` 這個 macro 時的效果便會變成這樣，而按下 copy to clipboard 時便會把 test 這個字放到剪貼簿裡。

![]({{ site.baseurl }}/images/20190524-4.jpeg)

## > 每一次都要把 macro 寫一次很麻煩啊

放心，就像 以 [TiddlyWiki 使用預設文字]({{ site.baseurl }}/tiddlywiki-%E5%A2%9E%E5%8A%A0%E9%A0%90%E8%A8%AD%E6%96%87%E5%AD%97%E7%9A%84%E6%96%B9%E6%B3%95-snippet/) 般，我們只需要把 macro 的定義放入 `$:/tags/Macro` 這個 tag 裡，那麼這個 macro 便會被放到系統裡，不用每次定義一次，直接使用便可以了。

![]({{ site.baseurl }}/images/20190524-5.jpeg)

## > 如果我們呼叫的文字裡有雙引號怎麼辦？

根據 [官網關於呼叫 macro 的介紹](https://tiddlywiki.com/static/Macro%2520Calls%2520in%2520WikiText.html) 裡，在呼叫 macro 時，除了把要使用的文字放在 `""`（雙引號） 外，我們還可以使用 `' '`（單引號） 或是 `""" """`（三個雙引號）

例如：

![]({{ site.baseurl }}/images/20190524-6.jpeg)


## > 參考資料

* [TiddlyWiki: Macros in WikiText](https://tiddlywiki.com/static/Macros%2520in%2520WikiText.html)


{% include_relative index/tiddlywiki.md %}