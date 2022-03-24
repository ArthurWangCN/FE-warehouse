## 1 对闭包的理解

+ 闭包是指有权访问**另一个函数作用域中变量的函数**；
+ 创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域；
+ 闭包的特性：
  + 函数内再嵌套函数
  + 内部函数可以引用外层的参数和变量
  + 参数和变量不会被垃圾回收机制回收
+ 闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中；
+ 闭包的优点是可以避免全局变量的污染，缺点是闭包会常驻内存，会增大内存使用量，使用不当很容易造成内存泄露；
+ 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。



## 2 对作用域链的理解

+ 作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，变量访问到window对象即被终止，作用域链向下访问变量是不被允许的；
+ 简单的说，作用域就是变量与函数的可访问范围，即作用域控制着变量与函数的可见性和生命周期。



## 3 原型 原型链

+ 每个对象都会在其内部初始化一个属性，就是 `__proto__`，当我们访问一个对象的属性时
  如果这个对象内部不存在这个属性，那么他就会去 `__proto__` 里找这个属性，这个 `__proto__` 又会有自己的 `__proto__`，于是就这样一直找下去，也就是我们平时所说的原型链的概念。按照标准，`__proto__`  是不对外公开的，也就是说是个私有属性；

+ 关系：`instance.constructor.prototype == instance.__proto__`

  ```js
  var a = {}
  a.constructor.prototype === a.__proto__
  ```

+ 特点：JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变；

+ 当我们需要一个属性的时，Javascript会先看当前对象中是否有这个属性， 如果没有的就会查找他的Prototype对象是否有这个属性，如此递推下去，一直检索到 Object 内建对象；

**原型：**

- JavaScript的所有对象中都包含了一个 `__proto__` 内部属性，这个属性所对应的就是该对象的原型；
- JavaScript的函数对象，除了原型 `__proto__` 之外，还预置了 `prototype` 属性；
- 当函数对象作为构造函数创建实例时，该 prototype 属性值将被作为实例对象的原型 `__proto__`。

**原型链：**

- 当一个对象调用的属性/方法自身不存在时，就会去自己 `__proto__` 关联的前辈 `prototype` 对象上去找；
- 如果没找到，就会去该 `prototype` 原型 `__proto__` 关联的前辈 `prototype` 去找。依次类推，直到找到属性/方法或 undefined 为止。从而形成了所谓的“原型链”。



## 4 事件代理

- 事件代理（Event Delegation），又称之为事件委托。是 JavaScript 中常用绑定事件的常用技巧。顾名思义，“事件代理”即是把原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务。事件代理的原理是DOM元素的事件冒泡。使用事件代理的好处是可以提高性能；
- 可以大量节省内存占用，减少事件注册，比如在table上代理所有td的click事件；
- 可以实现当新增子对象时无需再次对其绑定。



## 5 Javascript如何实现继承？

+ 构造继承

+ 原型继承

+ 实例继承
+ 拷贝继承
+ 原型prototype机制或apply和call方法去实现较简单，建议使用构造函数与原型混合方式

```js
function Parent(){
	this.name = 'wang';
}
function Child(){
        this.age = 28;
}  
Child.prototype = new Parent();//继承了Parent，通过原型
var demo = new Child();
alert(demo.age);
alert(demo.name);//得到被继承的属性
```

## 6 this的理解

+ this总是指向函数的**直接调用者**（而非间接调用者）
+ 如果有new关键字，this指向**new出来的那个对象**
+ 在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window



## 7 事件模型

+ W3C中定义事件的发生经历三个阶段：捕获阶段（capturing）、目标阶段（targetin）、冒泡阶段（bubbling）
+ 冒泡型事件：当你使用事件冒泡时，子级元素先触发，父级元素后触发
+ 捕获型事件：当你使用事件捕获时，父级元素先触发，子级元素后触发
+ DOM事件流：同时支持两种事件模型：捕获型事件和冒泡型事件
+ 阻止冒泡：在W3c中，使用 `stopPropagation()` 方法；在IE下设置 `cancelBubble = true`
+ 阻止捕获：阻止事件的默认行为，例如`click - <a>`后的跳转。在W3C中，使用 `preventDefault()` 方法，在IE下设置 `window.event.returnValue = false`



## 8 new操作符干了啥

+ 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型
+ 属性和方法被加入到 this 引用的对象中
+ 新创建的对象由 this 所引用，并且最后隐式的返回 this



## 9 Ajax原理

+ Ajax的原理简单来说是在用户和服务器之间加了—个中间层(AJAX引擎)，通过XmlHttpRequest对象来向服务器发异步请求，从服务器获得数据，然后用 javascript 来操作 DOM 而更新页面。使用户操作与服务器响应异步化。这其中最关键的一步就是从服务器获得请求数据

+ Ajax的过程只涉及JavaScript、XMLHttpRequest和DOM。XMLHttpRequest是ajax的核心机制

  ```js
  // 1. 创建连接
  var xhr = null;
  xhr = new XMLHttpRequest()
  // 2. 连接服务器
  xhr.open('get', url, true)
  // 3. 发送请求
  xhr.send(null);
  // 4. 接受请求
  xhr.onreadystatechange = function(){
  	if(xhr.readyState == 4){
  		if(xhr.status == 200){
  			success(xhr.responseText);
  		} else { 
  			/** false **/
  			fail && fail(xhr.status);
  		}
  	}
  }
  ```

+ 优点：

  + 通过异步模式，提升了用户体验.
  + 优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用.
  + Ajax在客户端运行，承担了一部分本来由服务器承担的工作，减少了大用户量下的服务器负载。
  + Ajax可以实现动态不刷新（局部刷新）

+ 缺点：

  + 安全问题 AJAX暴露了与服务器交互的细节。
  + 对搜索引擎的支持比较弱。
  + 不容易调试。



## 10 跨域问题

> 同源策略/SOP（Same origin policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSFR等攻击。所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。

**解决跨域：**

+ jsonp

  ```js
  var script = document.createElement('script');
  script.type = 'text/javascript';
  
  // 传参并指定回调执行函数为onBack
  script.src = 'http://www.....:8080/login?user=admin&callback=onBack';
  document.head.appendChild(script);
  
  // 回调执行函数
  function onBack(res) {
      alert(JSON.stringify(res));
  }
  ```

+ document.domain + iframe跨域

  *因为浏览器是通过document.domain属性来检查两个页面是否同源，因此只要通过设置相同的document.domain，两个页面就可以共享Cookie（此方案仅限主域相同，子域不同的跨域应用场景。）*

  父窗口：(`http://www.domain.com/a.html`)

  ```html
  <iframe id="iframe" src="http://child.domain.com/b.html"></iframe>
  <script>
      document.domain = 'domain.com';
      var user = 'admin';
  </script>
  ```

  子窗口：(`http://child.domain.com/b.html`)

  ```js
  document.domain = 'domain.com';
  // 获取父窗口中变量
  alert('get js data from parent ---> ' + window.parent.user);
  ```

+ nginx代理跨域

+ nodejs中间件代理跨域

+ 后端在头部信息里面设置安全域名



## 11 模块化开发

立即执行函数,不暴露私有成员

```js
var module1 = (function(){
　　　　var _count = 0;
　　　　var m1 = function(){
　　　　　　//...
　　　　};
　　　　var m2 = function(){
　　　　　　//...
　　　　};
　　　　return {
　　　　　　m1 : m1,
　　　　　　m2 : m2
　　　　};
})();
```



## 12 异步加载JS的方式

+ 设置 `<script>` 属性 async="async" （一旦脚本可用，则会异步执行）
+ 动态创建 script DOM：`document.createElement('script');`
+ XmlHttpRequest 脚本注入
+ 异步加载库 LABjs
+ 模块加载器 Sea.js



## 13 那些操作会造成内存泄漏？

> JavaScript 内存泄露指对象在不需要使用它时仍然存在，导致占用的内存不能使用或回收

+ 未使用 var 声明的全局变量
+ 闭包函数(Closures)
+ 循环引用(两个对象相互引用)
+ 控制台日志(console.log)
+ 移除存在绑定事件的DOM元素(IE)
+ setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏
+ 垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收



## 14 XML和JSON的区别

+ 数据体积方面：JSON相对于XML来讲，数据的体积小，传递的速度更快些。
+ 数据交互方面：JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互
+ 数据描述方面：JSON对数据的描述性比XML较差
+ 传输速度方面：JSON的速度要远远快于XML



## 15 简单说一下webpack

+ webpack 是一个**模块打包工具**，你可以使用WebPack管理你的模块依赖，并编绎输出模块们所需的静态文件。
+ 它能够很好地管理、打包Web开发中所用到的HTML、Javascript、CSS以及各种静态文件（图片、字体等），让开发过程更加高效。
+ 对于不同类型的资源，webpack有对应的模块加载器。
+ webpack模块打包器会分析模块间的依赖关系，最后生成了优化且合并后的静态资源。



## 16 对AMD和Commonjs的理解

+ CommonJS是服务器端模块的规范，Node.js采用了这个规范。CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。AMD规范则是非同步加载模块，允许指定回调函数
+ AMD推荐的风格通过返回一个对象做为模块对象，CommonJS的风格通过对module.exports或exports的属性赋值来达到暴露模块对象的目的



## 17 常见web安全及防护原理

**sql注入：**

原理：就是通过把SQL命令插入到Web表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。

防范：

+ 永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等
+ 永远不要使用动态拼装SQL，可以使用参数化的SQL或者直接使用存储过程进行数据查询存取
+ 永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接
+ 不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息

**XSS：**

原理：XSS(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意html标签或者javascript代码。比如：攻击者在论坛中放一个看似安全的链接，骗取用户点击后，窃取cookie中的用户私密信息；或者攻击者在论坛中加一个恶意表单，当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点。

防范：首先代码里对用户输入的地方和变量都需要仔细检查长度和对`< > ;'`等字符做过滤；其次任何内容写到页面之前都必须加以encode，避免不小心把html标签弄出来。这一个层面做好，至少可以堵住超过一半的XSS 攻击。

**XSS与CSRF的区别：**

XSS是获取信息，不需要提前知道其他用户页面的代码和数据包。CSRF是代替用户完成指定的动作，需要知道其他用户页面的代码和数据包。要完成一次CSRF攻击，受害者必须依次完成两个步骤

1. 登录受信任网站A，并在本地生成Cookie
2. 在不登出A的情况下，访问危险网站B

**CSRF的防御：**

+ 服务端的CSRF方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数
+ 通过验证码的方法



## 18 用过哪些设计模式



## 19 简单说一下Promise 

+ 依照 Promise/A+ 的定义，Promise 有四种状态：

  + pending: 初始状态, 非 fulfilled 或 rejected.
  + fulfilled: 成功的操作.
  + rejected: 失败的操作.
  + settled: Promise已被fulfilled或rejected

+ Promise 对象用来进行延迟(deferred) 和异步(asynchronous) 计算

+ 构造一个 Promise：

  ```js
  var promise = new Promise((resolve, reject) {
  	if (...) {
      	resolve(result);
  	} else {
          reject(Error(errMsg))
      }                       
  })
  ```

+ Promise 实例拥有 then 方法（具有 then 方法的对象，通常被称为thenable）：

  ```js
  promise.then(onFulfilled, onRejected)
  ```

+ 接收两个函数作为参数，一个在 fulfilled 的时候被调用，一个在rejected的时候被调用，onFulfilled 对应resolve, onRejected对应 reject。



## 20 jQuery源码有哪些好的地方

+ jQuery源码封装在一个匿名函数的**自执行环境**中，有助于防止变量的全局污染，然后通过传入window对象参数，可以使window对象作为局部变量使用，好处是当jQuery中访问window对象的时候，就不用将作用域链退回到顶层作用域了，从而可以更快的访问window对象。同样，传入undefined参数，可以缩短查找undefined时的作用域链
+ jQuery将一些原型属性和方法封装在了jquery.prototype中，为了缩短名称，又赋值给了jquery.fn，这是很形象的写法
+ 有一些数组或对象的方法经常能使用到，jQuery将其保存为局部变量以提高访问速度
+ jQuery实现的链式调用可以节约代码，所返回的都是同一个对象，可以提高代码效率



