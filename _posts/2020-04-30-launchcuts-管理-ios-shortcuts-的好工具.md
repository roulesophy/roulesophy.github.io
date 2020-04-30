---
filename: 2020-04-30-launchcuts-管理-ios-shortcuts-的好工具.md
layout: post
title: LaunchCuts：管理 iOS Shortcuts 的好工具
tags: iOS工作術
date: 2020-04-30
permalink: ios-launchcuts-review/
comments: true
---

![有了 LaunchCuts，Shortcuts 們再也不會亂]({{ site.baseurl }}/images/20200430-1.jpeg)  
在 iOS Shortcuts（以前名為 Workflows）推出後，幫助了很多的用家利用它作自動化並解決了很多的問題。  
隨著時間的發展，我們這些重度用家都會遇到一個問題：那就是我們製造了太多 Shortcuts，每次需要找出需要的 Shortcuts 很麻煩（總不能每次也記住關鍵字並搜尋）。另一方面，密密麻麻的 Shortcuts 也會使我們的強迫症發作。  
針對這個問題，[LaunchCuts](https://launchcuts.com) 能夠很好的幫助解決這個問題。

## > LaunchCut 是甚麼？

簡單來說，這是一個幫忙整理 Shortcuts 的一個工具，你可以想像為這個 App 為 Shortcuts 加上了 Folder 的整理。

![]({{ site.baseurl }}/images/20200430-2.jpeg)

有了Folder後，我們便會比較容易地找到我們需要使用的 Shortcuts，而管理上亦方便得多。

例如，我會把所有關於寫這個部落格的流程需要用的 Shortcuts 都會放在同一個資料夾裡。

App Store 下載連結 [按此](https://apps.apple.com/hk/app/launchcuts/id1489780246?l=en)。

![]({{ site.baseurl }}/images/20200430-3.jpeg)

我們就來寫一下使用這個 App 的心得。

## > 第一次注意

在第一次使用這個 App 的時候，我們要先安裝一個名為 "LaunchCuts Helper 的工具"。這個工具在第一次開啟 LaunchCuts 的時候便會要求你安裝。在安裝前記緊先在 Setting 裡先按 "Allow Untrusted Shortcuts" 才能安裝。

![]({{ site.baseurl }}/images/20200430-4.jpeg)

因為現在 iOS 的限制，LaunchCuts 並不能直接知道你本來有什麼 Shortcuts，所以需要這個 Shortcuts 作跳版來獲取你現在有的 Shortcuts 來作整理。

也因此，每次我們更新任何 Shortcuts 後，都必需在 LaunchCuts 裡按這個按鈕來讓 LaunchCuts 獲得更新後你所擁有的 Shortcuts。而這個按鈕的作用就是運行 LaunchCuts Helper 這個 Shortcuts。

![]({{ site.baseurl }}/images/20200430-5.jpeg)

正如前面所述，這個 App 不能直接得知 Shortcuts 的內容，所以它只是作為一個管理的角色。所有關於 Shortcuts 的運作（例如新建 Shortcuts、修改 Shortcuts 或是運行 Shortcuts），我們都是在原生的 Shortcuts App 裡運行的。

好消息是，這些東西都可以在 LaunchCuts 裡進行，只是打開後會自動跳轉到 Shortcuts App 裡運作。

## > Folder的功能

LaunchCuts 是以 Folder 來把 Shortcuts 作 Folder 的，但個人認為用詞有點不當，因為一個 Shortcuts 可以放在多於一個 Folder 中。但在這裡姑且稱它為 Folder 吧。

在 LaunchCuts 中，我們可以手動把 Shortcuts 放到 Folder 裡，或是為 Folder 設立一些規劃作自動分類。

### > 手動處理法：手動新增、移除 Shortcuts 到 Folder

如何把 Shortcuts 放到某一 Folder 裡、或者在 Folder 中移除某一 Shortcuts？

第一個方法，我們可以在該 Folder 裡按 Edit，然後再按 Shortcuts ，最後選取 / 移除 Shortcuts。

![]({{ site.baseurl }}/images/20200430-6.jpeg)

![]({{ site.baseurl }}/images/20200430-7.jpeg)

![]({{ site.baseurl }}/images/20200430-8.jpeg)

在增加 Shortcuts 到 Folder 上，我們還可以長按該 Shortcuts 打開 Contextual Menus 並點選 Add to Folder 來選取要把這個 Shortcuts 加到某個 Folder 裡。
![]({{ site.baseurl }}/images/20200430-9.jpeg)

## > 自動處理法：利用 Shortcuts 本身的資料作分類

除了手動把 Shortcuts 放入Folder外，我們還有其他比較自動的方法。例如能夠自動根據 Shortcuts 的 顏色 或 icon 自動分類。但這兩個自動分類法個人認為沒有太大意思。以下說一個比較有用的自動分類法，它們稱之為Tags。

![]({{ site.baseurl }}/images/20200430-10.jpeg)

在運行 LaunchCuts Helper 時，似乎它也會看到一點點的內容資訊。

我們可以在 Shortcuts 裡新建一個 Comments 的 block，並且加上以下的內容：

	LaunchCutsTags
	category1
	category2

![]({{ site.baseurl }}/images/20200430-11.jpeg)

然後在 LaunchCuts 裡的某個 Folder 的 Tags 裡加上 category1 或是 category2 後，那麼這個 Shortcuts 便會自動被加到這個 Folder 裡。

另外，如果我們在 Setting 裡有開啟 “Include Shortcuts Names in Search" 的話，只要該 Shortcuts 的名稱裡有某 Folder 設定的 Tags 內的關鍵字的話，也會自動被加進該 Folder 裡。

![]({{ site.baseurl }}/images/20200430-12.jpeg)

### > Folder 內的 Shortcuts 排序

我們可以設定 Shortcuts 們的排序方式(例如根據 Shortcuts 的名稱、大小、顏色、icon 等)，也可以手動把它們排序。

## > 分類的另一個管理意義

有了這個 App，寫 Shortcuts 能夠盡情分拆大型 Shortcuts 到很多小 Shortcuts

有了這個工具，我們在設計 Shortcuts 時能夠更加把一個 Shortcuts 打開成不同的小 Shortcuts，增加重用性。（當然，這也會使得分享 Shortcuts 變得更困難）

如果該 Shortcuts 有很多步驟的話，我們也可以把它拆成不同的小 Shortcuts 並由本來的 Shortcuts 呼叫並使用，並把所有的小 Shortcuts 放在同一 Folder 裡方便管理。

最佳的情況是其中一些小 Shortcuts 分別被多於一個的 Shortcuts 呼叫，那麼便可以減少重覆並容易管理。由於在 LaunchCuts 裡，一個 Shortcuts 可以有多於一個 Folder，所以變得更易管理。

{% include_relative index/skills_iOS.md %}
