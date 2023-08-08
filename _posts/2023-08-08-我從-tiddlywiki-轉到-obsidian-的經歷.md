---
filename: 2023-08-08-我從-tiddlywiki-轉到-obsidian-的經歷.md
layout: post
title: 我從 TiddlyWiki 轉到 Obsidian 的經歷
tags: 自我思考 TiddlyWiki 筆記術 Obsidian
date: 2023-08-08
permalink: 20230808-from-tiddlywiki-to-obsidian/
thumbnail: "20230806040847-TiddlyWiki-to-Obsidian.jpeg"
comments: true
---

![TiddlyWiki to Obsidian]({{ site.baseurl }}/images/20230806040847-TiddlyWiki-to-Obsidian.jpeg)  
話說其實在大半年前，我就已經從 TiddlyWiki 轉到 Obsidian 了。  
原因倒不是因為 TiddlyWiki 不好，這是一個我不得不做的決定。  
這篇我來說說為什麼我要轉到 Obsidian 和一點心得。  

這篇內容可能會有點 Technical ，因為似乎有在看 TiddlyWiki 的讀者都比較 Technical，所以我不花心力介紹普通的技術名詞了。至於本文中某些具體做法，有緣會寫文章講詳細做法，這篇只講大要。

## > 為什麼我要從 TiddlyWiki 離開？

原因很簡單，我的公司因為一些原因改變了它的網絡設定。由於我把我 TiddlyWiki 放在Hosting service（Linode），所以我再無法在公司電腦訪問我的 TiddlyWIki 了。

我試過更改網址，但不久後也不能訪問了。於是我走投無路，被迫轉會。

由於我的資料因為有每十五分鐘備份到 git ，所以理論上我是可以在公司電腦自己開一個 TiddlyWiki 的伺服器，然後和放在 Hosting service 中的內容以 git 進行同步，但考慮到我平時也有在其他地方訪問我的 TiddlyWIki ，如果工作途中有 git conflict 的話，我有機會在進入 Hosting service 中的電腦去處理 conflict，這樣太麻煩了，所以唯有果斷放棄。

如果你沒有技術背景看不明白以上的東西也沒關係，總之就是我無法在公司使用我的 TiddlyWiki，所以被迫轉會。

## > 為什麼是轉到 Obsidian 而不是其他的筆記軟體？

其實我也沒有考慮那麼多，當時考慮的只有幾個因素：

- 資料要在電腦和手機上，並且在 GitHub 進行同步。用其他同步方法例如 iCloud 或特定筆記軟件自帶的同步功能並不可行，因為公司的網絡設定把它們全部封鎖了，暫時 GitHub 還可行，因為我們還有一兩個專案在 GitHub 裡。
- 這個軟件要比較多人用：否則出了問題也無人懂得處理。
- 筆記內容格式要簡單和多人使用：不要說 evernote 那些它們自己定義的格式了，TiddlyWiki 的 WikiText 我也開始覺得有點複雜。基本上 Markdown 是一個好選擇，也算是唯一的選擇。
- 我要能夠在 iPad mini 上隨時使用和同步，如果能夠在 iPhone 上使用會更好。

這樣下來，Evernote 這個因為格式問題我不會考慮、Notion 因為使用時要上網我也不會考慮、LogSeq 我用過 5 分鐘後發現它主要使用日期開頭的筆記，不符合我的使用習慣所以不會考慮，基本上當時只剩下 Obsidian 可以考慮，於是決定一試。

## > 我對 Obsidian 的第一印象是？

當時我對 Obsidian 的第一印象有幾個：

- 它和 Evernote 有點相似，只是變成了使用 Markdown 而已，也許這次我真的可以試用 [電腦玩物](https://www.playpcesor.com) 站長的 [防彈筆記法](https://www.books.com.tw/products/0010929249) 的方法論去管理任務？
- 我對介面沒有任何意見，也不覺得它長很醜，因為我是軟體工程師，比它醜的 IDE 簡直多不勝數。
- 它的 Tag 的處理和 TiddlyWiki 十分不同（因為 TiddlyWiki 的 Tag 也可以是 Tiddler 的標題），但似乎每一行也可以加 Tag 能夠使任務管理更簡潔，只要把 Tag 設定為行動的狀態，這樣做便真正做到一篇筆記代表一個任務、一個任務有很多個不同的行動？

然後，就進行下一步：把 TiddlyWiki 的資料搬過來。

## > 當時我是如何把 TiddlyWiki 的資料搬到 Obsidian？

因為 TiddlyWiki 的資料是純文字檔案，加上我在 TiddlyWiki 中大量的 Tiddler 都是 tid 檔案而不是 .json 檔案，再加上我有技術背景，所以基本上不算太困難。

基本上我是使用 [tid2md](https://github.com/MaxGyver83/tid2md.git) 這個工具把所有 .tid 檔案變做 .md，然後再看內容盡量用 sed 等工具進行修改。

但要留意的是因為這個工具不會把 Tiddler 中的所有 fields 都轉換成 Markdown 的 metadata （在 yaml 區的那些資料），所以其實我也根據自己的需求把它的工具改了一下才使用。幸好那個工具只是 python script ，改起來還不算困難。

至於 .json 的 Tiddler ，坦白說我還未做，有需要時才轉換把，我只有不多於 100 個這樣的 Tiddler。

基本上在這樣的初步處理後我便沒有再處理內容了，把它們處理得漂漂亮亮、整整齊齊也只是浪費時間，只是資料還在，筆記連結還能正常運作便可以了。真的要看回那些資料並需要修改時再修改也不晚。

## > 我是如何在 Obsidian 同步資料？

如前述，在 Obsidian 中的資料都在 git 中，以 GitHub 來進行資料同步。

在電腦端的完全沒有問題，畢竟我們能用 git，Obsidian 還有一個叫做 [Obsidian Git](https://github.com/denolehov/obsidian-git) 的第三方 plugin 使用，可以每隔一段時間自動進行 git commit / pull / push 的動作。

在 iOS 的比較麻煩，日後可以寫一篇來詳細介紹。基本上我是使用 [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807) 這個 APP，先把 iOS 本地的的 Obsidian 資料夾和 Working Copy 進行連結，然後使用 Working Copy 的 git 功能來處理。

可以多講一點，我當時設定了兩個 iOS Shortcut Automation，分別是在進入 Obsidian 或離開 Obsidian 時令 Working Copy 進行 git commit -> git pull -> git push 的動作。詳細步驟可以參考 [這個影片](https://www.youtube.com/watch?v=FUSlKE19K5I)。

但在使用時發現，在使用電話時切換 APP 的頻率太高了，頻繁的進行 git pull 和 git push 這些花時間的動作會增加失敗率，所以最後決定使用 iOS 中的 Assistive touch 虛擬小白點來手動 Trigger iOS Shortcuts 令 Working Copy 進行 git commit -> git pull -> git push 的動作。

---

以下是一些我使用了 Obsidian 這大半年的心得和反思。有一部分是關於 TiddlyWiki 的。

## > 當年我把 TiddlyWiki 改得太複雜了

當年使用 TiddlyWiki 時，其實沒有做什麼研究，一開始本來只是想找個地方來把想法和知識記錄下來。

但是看了一些資料後，開始懵懵懂懂地了解到原來 TiddlyWiki 可以自己修改的地方實在太多，於是慢慢根據自己的需求，慢慢地把它加進了很多我自己才需要的東西，然後順便學了很多比較進階程度的 TiddlyWiki 的知識。

因為當時自己想到什麼想做的功能，便在 TiddlyWiki 增加這個功能，由於 TiddlyWiki 增加功能的彈性實在太大，所以很容易不小心弄了一大堆功能，現在回頭看，當年真是弄得太複雜了。

但因為有這樣的過程，我才知道對自己來說，一個用來管理自己知識和任務的軟件應該要有什麼功能，這件事情讓我在使用 Obsidian 時變得稍微容易上手一點。並且提醒自己在使用 Obsidian 時，不要為了一些自己可能不需要的功能弄複雜，知道自己需要什麼才是最重要的。

也因為有以前把 TiddlyWiki 改太複雜的教訓，現在使用 Obsidian 時，所有看上去很強很複雜的東西我也不用，例如是 dataview、一堆由其他人寫的 plugin 製造很強大功能等的東西我也不用。除了我再不想把用來思考的系統變得那麼複雜外，如果我們依賴這些太複雜的 Plugin，那麼那個人不再維護這個 Plugin 時，就算我懂得寫程式，有時也要很花時間去修改別人的 Plugin。

根據暫時使用了快一年的經驗來看，我只用到只帶有 tag 的 yaml 區、筆記內的 tag 和 Obsidian 內建的 query block（我只用來搜尋 tag 和帶有日期的文字），這樣做就算日後真的要轉移到其他的筆記軟件，切換成本也會變低。

## > Obsidian 使用 Markdown 對我來說十分適合

TiddlyWIki 使用的文字儲存格式為 WikiText，功能上比 Markdown 來說要豐富很多，至少在表格方面，他的支持度真是好太多了。

在 Obsidian 中使用的語言是 Markdown，這是一個比較好上手，功能相對簡單的文字格式。

現在讓我想起的是，當年我不會在 TiddlyWiki 裡寫文章的原稿，因為要用 WikiText 寫原稿，我日後還要花時間把 WikiText 轉換成我網頁文章的 Markdown 格式，所以當時我是用另一個叫做 [Ulysses](https://ulysses.app) 的 APP 來寫文章的，所以整個寫作流程很不順。

但是因為 Obsidian 和我在部落格的文章格式一樣也是 Markdown ，所以我可以很放心地在 Obsidian 寫文章初稿，然後把它直接複製到文章的文件裡便好。這樣讓我我省掉很多時間。

## > TiddlyWiki 其中一個問題是 code 和資料有時很難分開

當年使用 TiddlyWiki 時一個令我不斷使它變複雜的原因是因為在 TiddlyWiki 裡所以東西都是 Tiddler，你可以在 Tiddler 裡新增一個按鈕，甚至更改整個介面的格式等。所以有很多個通勤的時光，我也是拿着我的 iPad mini 不斷地修改 TiddlyWiki 來增加我需要的功能。

但是因為 TiddlyWiki 中所有東西都是 Tiddler，如果我要把這些我使用的功能分享出去會變得異常困難，因為我在一邊根據自己的需求改變功能的時候，這些功能的儲存位置和我的文件資料的儲存位置是一樣的，這意味着我需要花很大的力氣才能把這些功能抽出來變成 TiddlyWiki 的 Plugin 給大家使用，所以最後我決定放棄分享這些功能，改為把某部份容易寫的造成教學。

這個其實是一個很大的問題，反之在 Obsidian 裡，資料就是在 Markdown 檔案中，新增的功能就是放在 Obsidian Plugin 中。Obsidian Plugin 由 Typescript 寫成。這樣做能夠很好的把資料和功能分開（其實只是 TiddlyWiki 的做法有點另類），雖然這樣做的缺點是我必須要拿着我的電腦才能修改我的 Obsidian Plugin，不能再像以前那樣在街上拿着 iPad 便可以為 TiddlyWiki 新增新的功能。

## > 關於 TiddlyWiki 和 Obsidian 的 Tag

Obsidian 中每一行都可以插入 tag 這個特性徹底改變了我如何使用 Obsidian 來管理任務。

在我的定義中，一個專案有很多個任務，一個任務有很多個不同的步驟，也就是行動。

我在 TiddlyWiki 中也是使用 tag 來管理任務，也就是把每一個任務 Tiddler 或行動 Tiddler 中 tag 了這個任務或行動的狀態，例如是這個任務 / 行動是需要在這星期進行、在未來進行、正在等待別人、已完成或已放棄等狀態。只是當時的做法太碎片，因為每一個任務都由很多行動組成，這變成當時製造了太多沒有內容的 Tiddler，後期變得很難管理。

但是在 Obsidian 中因為每一行都可以插入 tag 這個特性則完美地解決了這個問題。因為我可以用一則筆記來代表一個任務，在這個任務筆記中，我可以用列表大鋼的方式來寫行動和想法，當在列表大鋼中的某一點是一個行動時，我只需要在這一行中加入一個標記著行動和其狀態的 tag 便可以了。

這樣做有兩個好處：

- 我不會製造了很多行動碎片筆記，日後管理時方便得多。
- 要搜尋要做的行動時，只需要搜尋這個 tag，便能夠找到這個任務名稱（在筆記標題），以及符合這個 tag 的任務（在該任務筆記的那一行）。

相對地，TiddlyWiki 中的 Tag 在筆記軟件中算是比較特別的一個：在 TiddlyWiki 中的 Tag 本身就可以是一個 Tiddler 的名稱。

這個設定使得 TiddlyWiki 獲得了一個特別的特性：筆記之間可以直接有一個層級的關係，並且由於一篇筆記可以有多於一個 Tag，所以這個層級關係可以不是一個樹狀層級，甚至可以有循環的層級。

我當時就是利用這個層級的特性來把 TiddlyWiki 變成一個任務管理軟體的、因為這樣做可以模仿專案管理中的 WBS（Work Breakdown Structure）。

現在使用 Obsidian 中逼不得已要使用筆記連結來當作層級使用，對我來說中開始使用時是十分的不習慣。

## > 在電話的 Obsidian 中編輯十分重要

因為生活變忙了，所以有時我們需要運用零碎時間在 iPhone 上寫和編輯文字。在我改造 Obsidian 時其中一個重點是令我能夠在電話裡使用 Obsidian 都能快速做到我要做的事，這需要十分了解自己如何使用 Obsidian。

這時我們需要十分了解如何快速地在文字編輯器中編輯文字，例如如果你用 iOS，在同一行裡連點三下可以選取整行內容，這個在文字編輯上有奇效。

知道自己如何使用 Obsidian 後，我們便可以把會用到的 command 放到 mobile toolbar 中，並且用 [commander](https://github.com/phibr0/obsidian-commander) 這個 plugin 來改變在 mobile toolbar 中顯示的行數。

此外，有技術背景的同學還可以自己寫一個給自己用的 Obsidian Plugin 來加入一些自己需要使用的 command 來方便自己在電話中使用 Obsidian 來編輯文字。

## > 總結

這篇有點長和很 Technical，但大概講述了我由 TiddlyWiki 轉到 Obsidian 的心路歷程。

之後我應該會寫一些我如何寫用 Obsidian 的心得，應該不會再像 TiddlyWiki 教學文般凌亂，因為寫 Obsidian 的教學文不用弄太多關於 syntax 的東西，寫起來應該比較簡單。

{% include_relative index/tiddlywiki.md %}

{% include_relative index/obsidian.md %}

<!--
- [我從 TiddlyWiki 轉到 Obsidian 的經歷]({{ site.baseurl }}/20230808-from-tiddlywiki-to-obsidian/) 
-->
