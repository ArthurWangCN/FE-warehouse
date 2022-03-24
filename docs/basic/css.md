## 1 css sprite

+ 概念：将多个小图片**拼接到一个图片中**。通过background-position和元素尺寸调节需要显示的背景图案。

+ 优点：
  + 减少HTTP请求数，极大地提高页面加载速度
  + 增加图片信息重复度，提高压缩比，减少图片大小
  + 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现

+ 缺点：图片合并麻烦、维护麻烦，修改一个图片可能需要从新布局整个图片，样式。



## 2 display: none 与 visibility: hidden
+ 它们都能让元素不可见；
+ display:none 会让元素完全**从渲染树中消失**，渲染的时候不占据任何空间；visibility: hidden 不会让元素从渲染树消失，渲染时元素继续占据空间，只是内容不可见；
+ display: none 是**非继承属性**，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility: hidden 是继承属性，子孙节点消失由于继承了hidden，通过设置visibility: visible;可以让子孙节点显式；
+ 修改常规流中元素的display通常会造成**文档重排**。修改visibility属性只会造成**本元素的重绘**；
+ **读屏器**不会读取display: none;元素内容；会读取visibility: hidden;元素内容。



## 3 link 与 @import的区别

+ link是HTML方式， @import是CSS方式；
+ link最大限度支持并行下载，@import过多嵌套导致串行下载，出现FOUC(文档样式短暂失效)；
+ link可以通过rel="alternate stylesheet"指定候选样式；
+ 浏览器对link支持早于@import，可以使用@import对老浏览器隐藏样式；
+ @import必须在样式规则之前，可以在css文件中引用其他文件；
+ 总体来说：link优于@import。



## 4 什么是FOUC，如何避免
+ Flash Of Unstyled Content：用户定义样式表加载之前浏览器使用默认样式显示文档，用户样式加载渲染之后再从新显示文档，造成页面闪烁。
+ 解决方法：把样式表放到文档的 `<head>`



## 5 BFC

> BFC(Block Formatting Context)，块级格式化上下文，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响

**触发条件 (以下任意一条)：**

+ float的值不为none；
+ overflow的值不为visible；
+ display的值为table-cell、tabble-caption和inline-block之一；
+ position的值不为static或则relative中的任何一个；
+ 在IE下, Layout,可通过zoom:1 触发；

**普通布局：**

+ 浮动的元素是不会被父级计算高度
+ 非浮动元素会覆盖浮动元素的位置
+ margin会传递给父级元素
+ 两个相邻元素上下的margin会重叠

**BFC布局：**

+ 浮动的元素会被父级计算高度(父级元素触发了BFC)
+ 非浮动元素不会覆盖浮动元素的位置(非浮动元素触发了BFC)
+ margin不会传递给父级(父级触发BFC)
+ 属于同一个BFC的两个相邻元素上下margin会重叠

**BFC的应用：**

- 阻止margin重叠
- 可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个 div都位于同一个 BFC 区域之中)
- 自适应两栏布局
- 可以阻止元素被浮动元素覆盖


## 6 清除浮动

+ 父级div定义height
+ 结尾处加空div标签clear:both
+ 父级div定义伪类:after和zoom
+ 父级div定义overflow:hidden



## 7 为什么要初始化CSS样式

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。



## 8  CSS3新特性

+ 新增选择器 p:nth-child(n){...}
+ 弹性盒模型 display: flex;
+ 多列布局 column-count: 5;
+ 媒体查询 @media (max-width: 480px) {.box: {column-count: 1;}}
+ 个性化字体 @font-face{font-family: BorderWeb; src:url(BORDERW0.eot);}
+ 颜色透明度 color: rgba(255, 0, 0, 0.75);
+ 圆角 border-radius: 5px;
+ 渐变 background:linear-gradient(red, green, blue);
+ 阴影 box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3);
+ 倒影 box-reflect: below 2px;
+ 文字装饰 text-stroke-color: red;
+ 文字溢出 text-overflow:ellipsis;
+ 背景效果 background-size: 100px 100px;
+ 边框效果 border-image:url(bt_blue.png) 0 10;
+ 转换：旋转rotate、倾斜skew、位移translate、缩放scale；
+ 平滑过渡 transition: all .3s ease-in .1s;
+ 动画。



## 9 CSS3新增伪类

+ p:first-of-type 选择属于其父元素的首个p元素的每个p元素。
+ p:last-of-type 选择属于其父元素的最后 p 元素的每个p 元素。
+ p:only-of-type 选择属于其父元素唯一的 p元素的每个 p 元素。
+ p:only-child 选择属于其父元素的唯一子元素的每个 p 元素。
+ p:nth-child(2) 选择属于其父元素的第二个子元素的每个 p 元素。
+ :after 在元素之前添加内容,也可以用来做清除浮动。
+ :before 在元素之后添加内容。
+ :enabled 已启用的表单元素。
+ :disabled 已禁用的表单元素。
+ :checked 单选框或复选框被选中。



## 10 display的值

+ block 转换成块状元素。
+ inline 转换成行内元素。
+ none 设置元素不可见。
+ inline-block 象行内元素一样显示，但其内容象块类型元素一样显示。
+ list-item 象块类型元素一样显示，并添加样式列表标记。
+ table 此元素会作为块级表格来显示
+ inherit 规定应该从父元素继承 display 属性的值



## 11 盒模型

+ 有两种， IE盒子模型、W3C盒子模型；
+ 盒子模型构成：内容(content)、内填充(padding)、 边框(border)、外边距(margin)；
+ IE8及其以下版本浏览器，未声明 DOCTYPE，内容宽高会包含内填充和边框，称为怪异盒模型(IE盒模型)
+ 标准(W3C)盒模型：元素宽度 = width + padding + border + margin
+ 怪异(IE)盒模型：元素宽度 = width + margin
+ 标准浏览器通过设置 css3 的 box-sizing: border-box 属性，触发“怪异模式”解析计算宽高

**box-sizing的值：**

+ box-sizing: content-box; 默认的标准(W3C)盒模型元素效果
+ box-sizing: border-box; 触发怪异(IE)盒模型元素的效果
+ box-sizing: inherit; 继承父元素 box-sizing 属性的值



## 12 CSS优先级

+ 优先级**就近原则**，同权重情况下样式定义最近者为准；
+ 载入样式以**最后载入**的定位为准；
+ 优先级为: **!important > id > class > tag**， !important 比 内联优先级高。



## 13 position的值

+ absolute：生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位
+ fixed：生成绝对定位的元素，相对于浏览器窗口进行定位
+ relative：生成相对定位的元素，相对于其正常位置进行定位
+ static 默认值。没有定位，元素出现在正常的流中
+ inherit 规定从父元素继承 position 属性的值



## 14 display:inline-block 什么时候不会显示间隙

+ 移除空格
+ 使用margin负值
+ 使用font-size:0
+ letter-spacing负值
+ word-spacing负值



## 15 图片选择

+ GIF：8位像素256色、无损压缩、支持简单动画、支持boolean透明；
+ JPEG：颜色限于256、有损压缩、可控制压缩质量、不支持透明；
+ PNG：PNG8文件小，支持alpha透明度，无动画，适合图标、背景、按钮。



## 16 行内元素float:left后是否变为块级元素

行内元素设置成浮动之后变得更加像是inline-block（行内块级元素，设置成这个属性的元素会同时拥有行内和块级的特性，最明显的不同是它的默认宽度不是100%），这时候给行内元素设置padding-top和padding-bottom或者width、height都是有效果的



## 17 伪类和伪元素

>CSS 引入伪类和伪元素的概念是为了 **格式化文档树以外的信息** 。也就是说，伪类和伪元素是用来修饰不在文档树中的部分，比如，一句话中的第一个字母，或者是列表中的第一个元素。

+ 伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的，例如:hover。
+ 伪元素用于创建一些不在文档树中的元素，并为其添加样式。



## 18 手写动画的最小时间间隔

多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60*1000ms ＝ 16.7ms



## 19 CSS性能优化实践

+ css压缩与合并、Gzip压缩
+ css文件放在head里、不要用@import
+ 尽量用缩写、避免用滤镜、合理使用选择器



## 20 CSS3动画

+ 依靠CSS3中提出的三个属性：transition、transform、animation
+ transition：定义了元素在变化过程中是怎么样的，包含transition-property、transition-duration、transition-timing-function、transition-delay。
+ transform：定义元素的变化结果，包含rotate、scale、skew、translate。
+ animation：动画定义了动作的每一帧（**@keyframes**）有什么效果，包括animation-name，animation-duration、animation-timing-function、animation-delay、animation-iteration-count、animation-direction



## 21 base64原理及优缺点

>Base64是一种基于64个可打印字符来表示二进制数据的编码方式，是从二进制数据到字符的过程。
>原则上，计算机中所有内容都是二进制形式存储的，所以所有内容（包括文本、影音、图片等）都可以用base64来表示。

+ 优点可以加密，减少了HTTTP请求
+ 缺点是需要消耗CPU进行编解码、base64的体积约为原图的4/3。



## 22 几种常见的CSS布局

### 流体布局

```html
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
  <div class="main"></div>
</div>

<style>
	.left {
		float: left;
		width: 100px;
		height: 200px;
		background: red;
	}
	.right {
		float: right;
		width: 200px;
		height: 200px;
		background: blue;
	}
	.main {
		margin-left: 120px;
		margin-right: 220px;
		height: 200px;
		background: green;
	}
</style>
```

### 圣杯布局

+ 要求：三列布局；中间主体内容前置，且宽度自适应；两边内容定宽
+ 好处：重要的内容放在文档流前面可以优先渲染
+ 原理：利用相对定位、浮动、负边距布局，而不添加额外标签

```html
<div class="container">
  <div class="main"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>

<style>
.container {
  padding-left: 150px;
  padding-right: 190px;
}
div {
  height: 100px;
}
.main {
  float: left;
  width: 100%;
  background-color: wheat;
}
.left {
  float: left;
  width: 150px;
  margin-left: -100%;
  position: relative;
  left: -150px;
  background-color: tomato;
}
.right {
  float: left;
  width: 190px;
  margin-left: -190px;
  position: relative;
  right: -190px;
  background-color: aqua;
}
</style>
```

### 双飞翼布局

```html
<div class="main-wrap">
  <div class="main"></div>
</div>
<div class="left"></div>
<div class="right"></div>

<style>
  .main-wrap {
    width: 100%;
    float: left;
  }
  div {
    height: 100px;
  }
  .main {
    margin-left: 150px;
    margin-right: 190px;
    background-color: wheat;
  }
  .left {
    float: left;
    width: 150px;
    margin-left: -100%;
    /*position: relative;*/
    /*left:-150px;*/
    background-color: tomato;
  }
  .right {
    float: left;
    width: 190px;
    margin-left: -190px;
    /*position:relative;*/
    /*right:-190px;*/
    background-color: aqua;
  }
</style>
```

### flex布局

使用flex布局显得更加简单易懂，原理就是将容器设置为display: flex;

两侧设置固定宽度,并不允许弹性缩放flex: 0; flex-basis: 200px;

中间允许弹性缩放，不设置宽度flex:1;



## 23 stylus/sass/less区别

+ 均具有“变量”、“混合”、“嵌套”、“继承”、“颜色混合”五大基本特性
+ scss和less语法较为严谨，less要求一定要使用大括号“{}”，scss和stylus可以通过缩进表示层次与嵌套关
+ scss无全局变量的概念，less和stylus有类似于其它语言的作用域概念
+ sass是基于Ruby语言的，而less和stylus可以基于NodeJS NPM下载相应库后进行编译；



## 24 postcss的作用

+ 可以直观的理解为：它就是一个平台。为什么说它是一个平台呢？因为我们直接用它，感觉不能干什么事情，但是如果让一些插件在它上面跑，那么将会很强大
+ PostCSS 提供了一个解析器，它能够将 CSS 解析成抽象语法树
+ 通过在 PostCSS 这个平台上，我们能够开发一些插件，来处理我们的CSS，比如热门的：autoprefixer
+ postcss可以对sass处理过后的css再处理 最常见的就是autoprefixer



## 25 rgba和opacity透明效果的区别

+ rgba()和opacity都能实现透明效果
+ opacity作用于**元素**，以及元素内的所有内容的透明度，
+ 而rgba()只作用于**元素的颜色或其背景色**。（设置rgba透明的元素的子元素不会继承透明效果！）


## 26 px和em

+ px和em都是长度单位，区别是，px的值是固定的，指定是多少就是多少，计算比较容易。em得值不是固定的，并且em会继承父级元素的字体大小。
+ 浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em。
+ px 相对于显示器屏幕分辨率，无法用浏览器字体放大功能
+ em 值并不是固定的，会继承父级的字体大小： em = 像素值 / 父级font-size



## 27 CSS中的content属性

css的content属性专门应用在 before/after 伪元素上，**用于来插入生成内容**。最常见的应用是利用伪类清除浮动：

```css
/**一种常见利用伪类清除浮动的代码**/
.clearfix:after {
    content:".";       //这里利用到了content属性
    display:block;
    height:0;
    visibility:hidden;
    clear:both; 
 }
.clearfix {
    *zoom:1;
}
```



## 28 如何使用CSS实现硬件加速

+ 硬件加速是指通过创建独立的复合图层，让GPU来渲染这个图层，从而提高性能，
+ 一般触发硬件加速的CSS属性有transform、opacity、filter，为了避免2D动画在开始和结束的时候的repaint操作，一般使用tranform:translateZ(0)



## 29 重绘和回流（重排）是什么，如何避免

+ 重绘：当渲染树中的元素外观（如：颜色）发生改变，不影响布局时，产生重绘
+ 回流：当渲染树中的元素的布局（如：尺寸、位置、隐藏/状态状态）发生改变时，产生重绘回流
+ 注意：JS获取Layout属性值（如：offsetLeft、scrollTop、getComputedStyle等）也会引起回流。因为浏览器需要通过回流计算最新值
+ 回流必将引起重绘，而重绘不一定会引起回流

**如何最小化重绘(repaint)和回流(reflow)：**

+ 需要要对元素进行复杂的操作时，可以**先隐藏**(display:"none")，操作完成后再显示；
+ 需要创建多个DOM节点时，使用**DocumentFragment**创建完后一次性的加入document；
+ **缓存Layout属性值**，如：var left = elem.offsetLeft; 这样，多次使用 left 只产生一次回流；
+ **尽量避免用table布局**（table元素一旦触发回流就会导致table里所有的其它元素回流）；
+ **避免使用css表达式**(expression)，因为每次调用都会重新计算值（包括加载页面）；
+ **尽量使用 css 属性简写**，如：用 border 代替 border-width, border-style, border-color；
+ **批量修改元素样式**：elem.className 和 elem.style.cssText 代替 elem.style.xxx。



## 30 css3的animation

+ css3的animation是css3新增的动画属性，这个css3动画的每一帧是通过@keyframes来声明的，keyframes声明了动画的名称，通过from、to或者是百分比来定义
+ 每一帧动画元素的状态，通过animation-name来引用这个动画，同时css3动画也可以定义动画运行的时长、动画开始时间、动画播放方向、动画循环次数、动画播放的方式，
+ 这些相关的动画子属性有：animation-name定义动画名、animation-duration定义动画播放的时长、animation-delay定义动画延迟播放的时间、animation-direction定义 动画的播放方向、animation-iteration-count定义播放次数、animation-fill-mode定义动画播放之后的状态、animation-play-state定义播放状态，如暂停运行等、animation-timing-function。

 :exclamation: TODO

## 31 css可继承属性

1. 字体系列属性，如font-size、font-family等；
2. 文本系列属性，如text-indent、text-align、line-height、color、word-spacing等；
3. 元素可见性：visibility；
4. 表格布局属性：caption-side、border-collapse、border-spacing；
5. 列表属性：list-style-type、list-style-image、list-style-position、list-style；
6. 生成内容属性：quotes；
7. 光标属性：cursor；



## 32 纯CSS创建一个三角形

```css
/* 把上、左、右三条边隐藏掉（颜色设为 transparent） */
#demo {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```



## 33 网页中的应该使用奇数还是偶数的字体

在网页中的应该使用**偶数**字体：

+ 偶数字号相对更容易和 web 设计的其他部分构成比例关系
+ 使用奇数号字体时文本段落无法对齐
+ 宋体的中文网页排布中使用最多的就是 12 和 14



## 34 响应式设计

+ 响应式设计就是网站能够兼容多个终端，而不是为每个终端做一个特定的版本

+ 基本原理是利用CSS3媒体查询，为不同尺寸的设备适配不同样式

+ 对于低版本的IE，可采用JS获取屏幕宽度，然后通过resize方法来实现兼容：

  ```js
  $(window).resize(function () {
    screenRespond();
  });
  screenRespond();
  function screenRespond(){
      var screenWidth = $(window).width();
      if(screenWidth <= 1800){
        $("body").attr("class", "w1800");
      }
      if(screenWidth <= 1400){
        $("body").attr("class", "w1400");
      }
      if(screenWidth > 1800){
        $("body").attr("class", "");
      }
  }
  ```



## 35 ::before 和 :after 中双冒号和单冒号有什么区别

+ 在 CSS 中伪类一直用 : 表示，如 :hover, :active 等；
+ 伪元素在CSS1中已存在，当时语法是用 : 表示，如 :before 和 :after；
+ 后来在CSS3中修订，伪元素用 :: 表示，如 ::before 和 ::after，以此区分伪元素和伪类；
+ 由于低版本IE对双冒号不兼容，开发者为了兼容性各浏览器，继续使用 :after 这种老语法表示伪元素；
+ 综上所述：::before 是 CSS3 中写伪元素的新语法； :after 是 CSS1 中存在的、兼容IE的老语法。



## 36 chrome表单优化

**修改自动填充密码的黄色背景：**

+ 产生原因：由于Chrome默认会给自动填充的input表单加上 input:-webkit-autofill 私有属性造成的
+ 解决方案1：在form标签上直接关闭了表单的自动填充：autocomplete="off"
+ 解决方案2：input:-webkit-autofill { background-color: transparent; }

**搜索框右侧小图标美化：**

```css
input[type="search"]::-webkit-search-cancel-button{
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  border-radius: 8px;
  background:url("images/searchicon.png") no-repeat 0 0;
  background-size: 15px 15px;
}
```



## 37 对 line-height 的理解

+ line-height 指一行字的高度，包含了字间距，实际上是下一行基线到上一行基线距离；
+ 如果一个标签没有定义 height 属性，那么其最终表现的高度是由 line-height 决定的；
+ 一个容器没有设置高度，那么撑开容器高度的是 line-height 而不是容器内的文字内容；
+ 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中；
+ line-height 和 height 都能撑开一个高度，height 会触发 [hasLayout](https://blog.csdn.net/weixin_34406796/article/details/93058591)，而 line-height 不会。