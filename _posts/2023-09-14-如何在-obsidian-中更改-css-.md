---
filename: 2023-09-14-如何在-obsidian-中更改-css-.md
layout: post
title: 如何在 Obsidian 中更改 CSS？
tags: Obsidian
date: 2023-09-14
permalink: 20230914-obsidian-css/
thumbnail: "20230914100919-Obsidian-css.jpeg"
comments: true
---

![Obsidian css]({{ site.baseurl }}/images/20230914100919-Obsidian-css.jpeg)  
這篇來講講我們如何使用 CSS 在 Obsidian 筆記中改善顯示方法。<br/>
這次的教學假設讀者有基本的 CSS 知識。

## 簡單例子：假設我們想令以下的筆記中的 「This is a H2」 變成紅色可以如何做？

![Obsidian css 1]({{ site.baseurl }}/images/20230914120929-Obsidian-css-1.jpeg)

### Step 1：在 Obsidian 中打開 Developer Tools 找出對應元件的 HTML


![Obsidian css 3]({{ site.baseurl }}/images/20230914120940-Obsidian-css-3.jpeg)


打開後我們會看見整個 Obsidian 頁面背後的 HTML 結構。


![Obsidian css 3]({{ site.baseurl }}/images/20230914120911-Obsidian-CSS1.jpeg)

然後我們按下左上方的箭頭按鈕。

然後把滑鼠放在想要更改 CSS 的元件上（這次用這個 H2 作例子）


![Obsidian css 5]({{ site.baseurl }}/images/20230914120951-Obsidian-css-5.jpeg)


然後在 Developer Tools 便會出現對應的 HTML 元件。

這樣做我們便可以取得這個 H2 元件的 CSS class。這個元件有一個叫 cm-header 和 cm-header-2 的 class。我們稍後會利用 cm-header-2 這個 class。


![Obsidian css 6]({{ site.baseurl }}/images/20230914120957-Obsidian-css-6.jpeg)

### Step 2：更改 CSS

我們在使用的 Obsidian Vault 中 找出 `.obsidian/snippets` 這個資料夾，然後新建一個名 testCSS.css 的檔案並加入對應的 CSS。

這代表所有用了 cm-header-2 CSS class 的元件都會變成紅色。

![Obsidian css 8]({{ site.baseurl }}/images/20230914120918-Obsidian-CSS2.jpeg)  

然後在 Obsidian 中的 Settings -> Appearance 確認這個 CSS 是 enabled：

![Obsidian css 8]({{ site.baseurl }}/images/20230914120908-Obsidian-css-8.jpeg)

然後所有筆記的 H2 就會變成紅色了。

![Obsidian css 8]({{ site.baseurl }}/images/20230914120925-Obsidian-CSS3.jpeg)

那麼問題來了：我們如何在 Obsidian 中讓 CSS 只作用在某一個筆記頁面？

## Advanced Question：我們如何在 Obsidian 中讓 CSS 只作用在某一個筆記頁面？

我們只需要在筆記上加入一個名為 cssclass 的 properties 就可以了。

### Step 1：為對應筆記加入一個 properties

這個 properties 名為 `cssclass`，我把名稱先叫做 test。

![Obsidian css 2]({{ site.baseurl }}/images/20230914120934-Obsidian-css-2.jpeg)


打開 Developer Tools 後，test class 出現在對應的筆記 html 元件上。

![Obsidian css 4]({{ site.baseurl }}/images/20230914120945-Obsidian-css-4.jpeg)

### Step 2：更改 CSS

我們同樣修改在  `.obsidian/snippets` 資料夾中的 testCSS.css 的檔案來修修改 CSS。

![Obsidian css 7]({{ site.baseurl }}/images/20230914120902-Obsidian-css-7.jpeg)


這個選擇了某元件用 cm-header-2 CSS class，而這個元件也要是某個有 test CSS class 元件的子元件。

然後有 cssclass: test 的筆記的 H2 才會變成紅色了。

![Obsidian CSS4]({{ site.baseurl }}/images/20230914120931-Obsidian-CSS4.jpeg)


有需要的同學試試看吧！


{% include_relative index/obsidian.md %}



<!--
- [如何在 Obsidian 中更改 CSS？]({{ site.baseurl }}/20230914-obsidian-css/)
-->
