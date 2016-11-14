## DateSelectorSimple - 日期选择器简易版

#### 简易的主要表现在:
> 简易版的自定义功能，是能够满足任何需求的【单位】自定义功能

> 无论是年月日还是时分都能随心所欲的排列组合，并尽可能的进行数据合法性验证

<br/>
### 0.[在移动端下打开demo](https://appianz.github.io/multi-picker/DateSelectorSimple.html)
### 1.如何引用
> sass文件:引用DateSelectorSimple/DateSelectorSimple.scss

> css文件:引用DateSelectorSimple/DateSelectorSimple.css

> js文件:引用DateSelectorSimple/DateSelectorSimple.js

### 2.如何使用

**调用html的基本格式：**
```html
<link rel="stylesheet" type="text/css" href="./DateSelectorSimple.css"/>
<body>
    <input id="date-selector-input" type="text" readonly/>
    <div id="targetContainer"></div>
</body>
```

**调用js的基本格式：**
```html
<script src="./DateSelectorSimple.js"></script>
<script>
    new DateSelector({ ... });
</script>
```

**参数配置:**

| 参数 | 字符类型  |  取值  | 说明 | 
| -----| -----| -----| -----|
|  **input**    |  {String} | *eg:'date-selector-input'* | 点击触发插件的input框的id |
|  **container**    |  {String} |*eg:'targetContainers'*| 插件即将插入的容器id |
|  **type**    | {Number} |0 或 1 | 0为自定义插件的日期单位(不带tab切换)，1为固定插件的日期单位为【年月日】【时分】(带tab切换) |
|  **param**  |  {Array} |*eg:[1,1,0,0,0]*| 设置单位，元素分别对应设置['year','month','day','hour','minute'],1为需要，0为不需要,需要为连续的1 |
|  **range**   |  {Array} |*eg:[1990,2020]      1990年~2020年*| 设置年份范围，默认[1950,明年],在设置了需要年份的情况下才生效|
|  **callbackfuc**   |  {function} |*function(arr){alert(arr)}*| function(arr){} 回调函数，可以自定义结果格式化|


### 3.有什么优越性？

带有加速度的滑动 (•‿•)

能够动态设置年份范围 (•‿•) 

能够任意设置时间单位的组合 (•‿•) 
> "年月日"  OR  "月日时分"  OR  "年月日时分"

能够切换固定样式和自定义样式,简化参数 (•‿•)

能利用我的模型处理更多、更自由的联动 (•‿•)
> 比如城市多级联动，请移步[自定义json选择器 - MultiPicker.](https://github.com/AppianZ/multi-picker/tree/master/MultiPicker)

#### Trust Me.

### 4.有什么局限性？
> 样式主题可能和你的产品风格不符，可以通过更改sass中的全局变量来解决问题 >.<

> 只能动态控制年份范围 >.<  在实际开发过程中,产品总会告诉你,我要从2016-11-11 11:11开始! 还要在2016-12-12 12:12的时候结束! 必须这样!!  这时候,请移步[日期选择器优质版 DateSelectorPro.js](https://github.com/AppianZ/multi-picker/tree/master/DateSelectorPro)

> 如果遇到什么神bug,不要着急。这时候,请对我发起issue~ 一定让您满意！

#### Trust Me. Again.
   

