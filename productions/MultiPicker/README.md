## MultiPicker - 自定义多级联动

#### 自定义的主要表现在:

> `任意联动级数 `的联动 (建议 ≤ 5级) ，即一个联动弹层中可以同时存在不用级数的联动

> 只要传入符合规范的 json ，就能自适应渲染多级联动

> 适合自定义json的自定义联动，如需要时间联动则使用DateSelector系列多级联动
<br/>


### 0.示例演示
 ![img1.](https://github.com/AppianZ/DateSelector/blob/master/productions/MultiPicker.gif) 

### 1.如何引用css和js文件

> sass文件: 引用productions/MultiPicker/MultiPicker.scss

> css文件: 引用productions/MultiPicker/MultiPicker.css

> js文件: productions/MultiPicker/MultiPicker.js

> json文件 (js类型) ：productions/MultiPicker/json.js
<br/>

### 2.如何调用构造函数

**调用html的基本格式：**
```html
<link rel="stylesheet" type="text/css" href="./MultiPicker.css"/>
<body>
    <input id="multiPickerInput" type="text" readonly/>
    <div id="targetContainer"></div>
</body>
```

**调用js的基本格式：**
```js
<script src="./MultiPicker.js"></script>
<script>
    new MultiPicker({ ... });
</script>
```

**构造函数的参数配置:**

| 参数 | 字符类型  |  取值  | 说明 | 
| -----| -----| -----| -----|
|  **input**    |  {String} | *eg:'multiPickerInput'* | 点击触发插件的input框的id |
|  **container**    |  {String} |*eg:'targetContainers'*| 插件即将插入的容器id |
|  **jsonData**    | {Arrar} |*eg:'[{'id':001,'value':'北京市'，'child':[{'id':00101,'value':'朝阳区'}，{'id':00102,'value':'海淀区'}]}]'*| 传入的json必须要是符合规范的格式，。'id'：为该联动标签的id，'value'为联动上显示的值，如果有下一级则传入一个'child'数组，如果没有继续联动，则不需要'child'这个属性 |
|  **callbackfuc**   |  {function} |*function(arr){alert(arr)}*| function(arr){} 回调函数，可以自定义结果格式化|
<br/>

**联动json的属性规范:**

` 可以同时存在不同级数的联动，但json规范和属性名要符合要求 `

 ![img1.](http://7xqsim.com1.z0.glb.clouddn.com/MultiPicker.png) 

| 属性 | 字符类型 | 说明 | 
| -----| -----|  -----|
|  **id**    |  {String} | 该级联动的唯一标识 |
|  **value**    |  {String} | 该级联动显示的内容  |
|  **child**    | {Arrar} | 该级联动是否需要子联动，如需要则继续传入数组，如不需要子联动，则不用设置child这个属性 |
<br/>

### 3.有什么优越性？

带有加速度的滑动 (•‿•)

能够动态设置每个子级的联动(•‿•) 

能够通过回调函数动态操作联动结果(•‿•)

#### Trust Me.
<br/>

### 4.有什么局限性？

> 暂不开放定位功能 >.<

> 一定让您满意！

> 如果遇到什么神bug,不要着急

> 这时候,请加我微信523938480
<br/>

#### Trust Me. Again.
   

