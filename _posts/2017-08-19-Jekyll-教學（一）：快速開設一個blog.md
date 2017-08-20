---
filename: 2017-08-19-Jekyll-教學（一）：快速開設一個blog.md
layout: post
title: Jekyll-教學（一）：快速開設一個blog
tags: Programming
date: 2017-08-19
comments: true
---

jekyll 是一個靜態網誌生成器，用家以 markdown 打了一篇網誌後， jekyll 便會把網誌轉換成網頁。  
其實這個網誌也是用 jekyll 寫的，所以也想分享一下建立這個網誌的方法。 

# > 用 Jekyll 寫網誌的好處
* 以 [markdown](https://daringfireball.net/projects/markdown/syntax) 或是 [kramdown](https://kramdown.gettalong.org) 寫
* 以 [git](https://git-scm.com) 做版本控制，也可以免費放上 [github](https://github.com)
* 自己可以完全控制這個網誌，例如資料和排版等。

# > 用 Jekyll 不足的地方
* 用家要有一點程式底子，例如懂得使用 `git` ，以及網得一點 `html` 和 `css` 。
* 由於這是靜態的網頁，所以便不能使用 database ，這變得一些功能要以其他方法解決，例如留言功能要以 [disqus](https://disqus.com) 解決。

# > 設定網誌

為了方便起見，我們會以一個預先做好的 jekyll 開始。

Fork 這個 repository: [jekyll-now](https://github.com/barryclark/jekyll-now)

```
$ git clone https://github.com/barryclark/jekyll-now.git
```

在 `config.yml` 裡填上自己的資料：
例如是 name, description, avatar(頭像連結網址）, url 等。
在 footer-links 上可以填入自己的社交網站資料，例如 twitter, github 等等。

如果是用 `eclipse` 管理這個 project 的，可以在 `.gitignore` 裡加入 `.project` 。

`.gitignore`
```
_site
.DS_Store
.jekyll
.jekyll-metadata
.bundle
.sass-cache
Gemfile
Gemfile.lock
node_modules
package.json
.project
```

在 `about.md` 裡以 [markdown](https://daringfireball.net/projects/markdown/syntax) 填上自己的介紹。

`about.md`
```
---
layout: page
title: About
permalink: /about/
---

Some information about you!

### More Information

A place to include any other types of information that you'd like to include about yourself.

### Contact me

[email@domain.com](mailto:email@domain.com)
```

# > 加入第一篇網誌

在 repository 裡，有一個名為 `_posts` 的資料夾，所有網誌都是以 [markdown](https://daringfireball.net/projects/markdown/syntax) 的方式於在這裡。

我們在這裡加入一篇網誌，有一點小技巧可以留意：

* 和普通的 markdown 有點不同，我們要在前面加入 header， header 裡可以加入一些屬性，日後能以一些方法拿出來。暫時我們會使用 `filename`, `layout`, `title` 和 `date`。
* 如果要連結自己網誌的其他內容，我們可以以 `{{ site.baseurl }}` 來代替真正的網址。
* 個人會把所有圖片放進另一個資料夾名為 `images` ，如果要在網誌裡加上圖片便會連結去 `images` 裡。

`2017-08-19-new-post.md`
```
---
filename: 2017-08-19-new-post.md
layout: post
title: New Post
date: 2017-08-19
---
這是一篇新網誌。一篇網誌是以 `markdown` 寫的。

這是一些常用的 markdown 的格式：

* 我們可以在網誌裡放入超連結：[點我](http://google.com)
* 我們可以放入超連結連到自己的其他網誌： [另一篇網誌]({{ site.baseurl }}/其他文章)  
* 我們可以放入圖片：
	* ![圖片介紹]({{ site.baseurl }}/images/jekyll-logo.png)

另外，我們也可以放入表格：

|標題1|標題2|
|---|---|
|條目1|條目2|
|條目3|條目4|
```

這樣的話 jekyll 便會生成網頁如下：  
![jekyll]({{ site.baseurl }}/images/20170819-1.png)

# > 在本地開這個網誌

我們也可以在本地開這個網誌看看樣子後才放上 `github` 上，或是直接租 server ` 以 jekyll 架站。

最好的 jekyll 安裝方法是以 [RubyGems](https://rubygems.org) 來安裝：

```
$ gem install jekyll
```

然後在 repository 的根目錄打 `jekyll serve`。

然後在瀏覽器開啟 [http://127.0.0.1:4000/](http://127.0.0.1:4000/) 便可以了。

# > 把網誌放上 github 上

以 git commit repository 後，便可以放上 [github pages](https://pages.github.com) 了。

```
$ git add --all
$ git commit -m "Initial commit"
```

首先，在 github 上建立一個 repository 名為 `<username>.github.io` 。

然後把本地的 repository 指去 github 上的 repository 上：

# 如果是用 https 的話：
{% highlight console %}
$ git remote set-url origin https://github.com/<username>/<username>.github.io.git
$ git remote -v
origin https://<username>/<username>.github.io.git (fetch)
origin https://<username>/<username>.github.io.git (push)
  
{% endhighlight %}

# 如果是用 ssh 的話：
{% highlight console %}
$ git remote set-url origin git@github.com:<username>/<username>.github.io.git
$ git remote -v
origin git@github.com:<username>/<username>.github.io.git (fetch)
origin git@github.com:<username>/<username>.github.io.git (push)
  
{% endhighlight %}

然後 push 本地的 repository 去 github：

```
$ git push -u origin master
```

然後打開 `https://<username>.github.io` 便可以見到網誌已經放在 github 上了。


