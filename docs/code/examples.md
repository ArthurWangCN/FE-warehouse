## 1 如何在页面上实现一个圆形的可点击区域？

**方法一：**

`<img>`通过usemap映射到`<map>`的circle形`<area>`。

```html
<img src="images/lanlvseImg.png" usemap="#Map" /> 
<map name="Map" id="Map">
     <area shape="circle" coords="100,100,50" href="http://www.baidu.com" rel="external nofollow" target="_blank"/>
</map>
```

**方法二：**

border-radius

```css
<div id="circle"></div>
#circle{
 background:red;
 width:100px;
 height:100px;
 border-radius:50%;
}
```

**方法三：**

```js
document.onclick = function(e) { 
    var r = 50; 
    var x1 = 100;
    var y1 = 100;
    var x2= e.clientX;
    var y2= e.clientY; 
    var distance = Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))); 
    if (distance <= 50) alert("Yes!"); 
}
```



