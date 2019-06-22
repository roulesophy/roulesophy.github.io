---
filename: 2019-06-22-tiddlywiki-製造記事連結的方法.md
layout: post
title: TiddlyWiki 製造記事連結的方法
tags: 工作心法 TiddlyWiki
date: 2019-06-22
comments: true
---

![]({{ site.baseurl }}/images/20190622-1.jpeg)  
大家如果有用過 [Evernote](https://evernote.com/) 的話，想必也會知道 [記事連結](https://help.evernote.com/hc/zh-tw/articles/208313588-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-%E8%A8%98%E4%BA%8B%E9%80%A3%E7%B5%90-%E5%BF%AB%E9%80%9F%E5%9C%A8%E8%A8%98%E4%BA%8B%E4%B9%8B%E9%96%93%E9%80%A3%E6%8E%A5-) 這個功能。 在 [TiddlyWiki]({{ site.baseurl }}/%E7%9F%A5%E8%AD%98%E9%80%A3%E7%B5%90%E7%9A%84%E5%B7%A5%E5%85%B7-tiddlywiki/) 裡，[記事連結](https://tiddlywiki.com/static/Linking%2520in%2520WikiText.html) 這個功能十分容易做到，只要加入 `<Tiddier 的名稱> ` 便可以了。只是，如果在只有 手機 或 平板電腦的場合下，要在編輯器裡輸入 `[[]]` 或是使用 內置的連結工具 會比較不方便和比較慢，有沒有方法能夠十分方便地獲得 `[[<Tiddier 的名稱>]] `這個記事連結呢？於是，便開始研究如何做到這個個人認為對效率提升是挺重要的功能。

由於實作上需要學習一些 TiddlyWiki 的概念，如果只想直接使用這個功能的話，請看本文的最後一個部份。

首先，我們在學習如何做到這個之前，首先學習兩個概念，分別為 [Transclusion](https://tiddlywiki.com/static/Transclusion%2520in%2520WikiText.html) 和 [Transclusion with Templates](https://tiddlywiki.com/static/Transclusion%2520with%2520Templates.html)。

## > Transclusion

Transclusion 就是把一個 Tiddler 的內容直接放在另一個 Tiddler 裡的意思。如果我們在一個 Tiddler 裡這樣寫： `&#123;&#123;IncludedTiddler&#125;&#125;`，這樣便會展示 IncludedTiddler 這個 Tiddler 的內容。

![]({{ site.baseurl }}/images/20190622-2.jpeg)

我們也可以只 Transclude 該 Tiddler 的某些內容，只要在 Tiddler 名後加上 `!!` 和該欄位的名稱，例如只要 IncludedTiddler 這個 Tiddler 的標題我們可以這樣寫：`&#123;&#123;IncludedTiddler!!title&#125;&#125;`。

![]({{ site.baseurl }}/images/20190622-3.jpeg)

如果我們要展示自己的標題的話，我們可以這樣寫：`&#123;&#123;!!title&#125;&#125;`

例如，當我們這樣寫：

![]({{ site.baseurl }}/images/20190622-4.jpeg)

結果便會變成這樣。

![]({{ site.baseurl }}/images/20190622-5.jpeg)

那麼問題來了，如果 IncludedTiddler 這個 Tiddler 的作用是為了顯示標題的話，我們有沒有方法在 Display 這個 Tiddler 裡 Transclude IncludedTiddler 這個 Tiddler 而得出 Display 這個Tiddler的標題呢？

如果我們只是單純地 Transclude IncludedTiddler 的話，得到的只是 IncludedTiddler 的標題 :(

![]({{ site.baseurl }}/images/20190622-6.jpeg)

這個時候，我們要的是一個新概念。

## > Transclusion with Templates

沒錯，就如上面所述，這個概念名為 [Transclusion with Templates](https://tiddlywiki.com/static/Transclusion%2520with%2520Templates.html) 。

簡單來說，這個概念是我們 Transclude 一張模板（Template），然後由這個模板來展示本體的資料。

要Transclude 一張模板的方法很簡單，只要這樣寫便可以了 `&#123;&#123;||<Template Tiddler的名稱&#125;&#125;`（就是加上 `||` 在前面）。

例如，當我們這樣寫：

![]({{ site.baseurl }}/images/20190622-7.jpeg)

結果便會變成這樣。

![]({{ site.baseurl }}/images/20190622-8.jpeg)

好了，得知了這個後，我們回到正題：如何快速獲得某 Tiddler 的連結呢？

## > 複製記事連結

我們想要做到的是在每個 Tiddler 裡都以 [預設文字]({{ site.baseurl }}/tiddlywiki-%E5%A2%9E%E5%8A%A0%E9%A0%90%E8%A8%AD%E6%96%87%E5%AD%97%E7%9A%84%E6%96%B9%E6%B3%95-snippet/) 的方法來加上一個按紐，從而我們能夠在該 Tiddler 裡按下這個按紐便能夠把 `[[<該 Tiddler 的標題>]]` 放到剪貼簿裡。

我們想要做到的是在每個 Tiddler 裡都 Transclude 一個能把該 Tiddler 的連結放到剪貼簿裡的模版。例如該展示的模版名為 `Copy Tiddler Link` 的話，那麼我們加上 `&#123;&#123;||Copy Tiddler Link&#125;&#125;`，便會顯示一個按紐，按下的話便便能夠把 `[[<該 Tiddler 的標題>]]` 放到剪貼簿裡。

![]({{ site.baseurl }}/images/20190622-9.jpeg)

要防止不斷複製貼上 `&#123;&#123;||Copy Tiddler Link&#125;&#125;` 的話，我們可以用 [預設文字]({{ site.baseurl }}/tiddlywiki-%E5%A2%9E%E5%8A%A0%E9%A0%90%E8%A8%AD%E6%96%87%E5%AD%97%E7%9A%84%E6%96%B9%E6%B3%95-snippet/) 的方法加上 `&#123;&#123;||Copy Tiddler Link&#125;&#125;` 這段字。

而 `Copy Tiddler Link` 這個 Tiddler 的內容如下。大概做法是先把標題 （`!!title`）放到一個變數 variable 裡，然後使用一個自製的 [macro]({{ site.baseurl }}/tiddlywiki-%E5%AF%A6%E7%94%A8-macro-copyblock1/) （`createLink`）把標題變成 `[[<該 Tiddler 的標題>]]` 的樣子，最後製造一個按紐（button），按下後會呼叫預設的 [tm-copy-to-clipboard](https://tiddlywiki.com/static/WidgetMessage%253A%2520tm-copy-to-clipboard.html) 把 `[[<該 Tiddler 的標題>]]` 放到剪貼簿裡。

另外，`$:/core/images/copy-clipboard` 只是系統內預設的 Icon。就是按紐上的那個。

```html
\define createLink(content, openBracket:"[[", closeBracket:"]]")
$openBracket$$content$$closeBracket$
\end

<$set name=title value=&#123;&#123;!!title&#125;&#125;>
    <$set name=link value=<<createLink $(title)$>> >
        <$button message="tm-copy-to-clipboard" param=<<link>>>[ &#123;&#123;$:/core/images/copy-clipboard&#125;&#125; ]</$button>
    </$set>
</$set>
```

想繼續研究的同學可以參考 [Tiddlywiki set widget](https://tiddlywiki.com/static/SetWidget.html) 和 [tm-copy-to-clipboard](https://tiddlywiki.com/static/WidgetMessage%253A%2520tm-copy-to-clipboard.html)。

內心 OS: 這種做法還可以造更多有其他功能的按紐。








