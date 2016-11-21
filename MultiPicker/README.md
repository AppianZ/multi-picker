## MultiPicker - 自定义多级联动

#### 自定义的主要表现在:

> `任意联动级数 `的联动 (建议 ≤ 5级) ，即一个联动弹层中可以同时存在不用级数的联动

> 只要传入符合规范的 json ，就能自适应渲染多级联动

> 适合自定义json的自定义联动，如需要时间联动请使用 [日期选择器 DateSelector](https://github.com/AppianZ/multi-picker/tree/master/DateSelector) 的多级联动

### 0.[在移动端下打开demo](https://appianz.github.io/multi-picker/MultiPicker.html) 

### 1.如何引用 

> sass文件: 引用MultiPicker/MultiPicker.scss

> css文件: 引用MultiPicker/MultiPicker.css

> js文件: 引用MultiPicker/MultiPicker.js

> json文件 (js类型) ：引用MultiPicker/city.js

### 2.如何使用

**调用html的基本格式：**
```html
<link rel="stylesheet" type="text/css" href="./MultiPicker.css"/>
<body>
    <input id="multiPickerInput" type="text" readonly/>
    <div id="targetContainer"></div>
</body>
```

**调用js的基本格式：**
```html
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
|  **jsonData**    | {Array} |*eg:'[{'id':001,'value':'北京市'，'child':[{'id':00101,'value':'朝阳区'}，{'id':00102,'value':'海淀区'}]}]'*| 传入的json必须要是符合规范的格式，。'id'：为该联动标签的id，'value'为联动上显示的值，如果有下一级则传入一个'child'数组，如果没有继续联动，则不需要'child'这个属性 |
|  **success**   |  {function} |*function(arr){alert(arr)}*| function(arr){} 回调函数，可以自定义结果格式化|

**联动json的属性规范:**

| 属性 | 字符类型 | 说明 | 
| -----| -----|  -----|
|  **id**    |  {String} | 该级联动的唯一标识 |
|  **value**    |  {String} | 该级联动显示的内容  |
|  **child**    | {Array} | 该级联动是否需要子联动，如需要则继续传入数组，如不需要子联动，则不用设置child这个属性 |

` 可以同时存在不同级数的联动，但json规范和属性名要符合要求, 具体可参考json.js ` 

` 同时提供了一份自己整理的城市json -- city.js, 可以试用大部分城市选择的需求。 `

### 3.有什么优越性？

带有加速度的滑动 (•‿•)

能够动态自适应每个子级的联动(•‿•) 

能够通过回调函数动态控制联动返回的结果(•‿•)

#### Trust Me.

### 4.有什么局限性？

> 该选择器暂不开放定位功能 >.<

> 如果您需要的是时间选择器, 这时候, 请移步[日期选择器 DateSelector.js](https://github.com/AppianZ/multi-picker/tree/master/DateSelector)

> 如果遇到什么神bug,不要着急。这时候,请对我发起issue~ 一定让您满意！

>  我是嘉宝Appian，一个卖萌出家的算法妹纸。

#### Trust Me. Again.
   

