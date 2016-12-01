# DateSelector - A  Flexible Picker for Selecting an Interval
## Intro
> * User-defined units. You can set year and month or month, date, hour and minute.
> * User-defined time ranges. You can set anytime with the precision of a minute
> * For example, you can set begin time at  Dec -27(th), 2011 102:12 and end time at Oct 21(st), 2020 20:20
> * You also can use [ NPM. ](https://www.npmjs.com/package/mob-date-selector)
> * [ Open the demo on the mobile](https://appianz.github.io/multi-picker/DateSelector.html)
<br/>


## Use NPM

### 1. How to use
> npm i mob-date-selector --save-dev

### 2. How to import
**webpack.config.js:**
```javascript
var path = require('path');
module.exports = {
entry : {...},
output : {...},
module : {
	loaders :[{
		test: /\.css$/,
		loader: 'style!css'
	}, {
		test: /\.js$/,
		exclude: path.resolve('./node_modules'),
		loader: 'babel',
	}]
}
}
```

**html：**
```html
<body>
	<input id="date-selector-input" type="text" readonly/>
	<div id="targetContainer"></div>
</body>
```

**js：**
```javascript
import DateSelector from 'mob-date-selector';
new DateSelector({ ... });
```


## Use JS

### 1. How to import

> sass: DateSelector/DateSelector.scss

> css: DateSelector/DateSelector.css

> js: DateSelector/DateSelector.js

### 2. How to use
**html：**
```html
<link rel="stylesheet" type="text/css" href="./DateSelector.css"/>
<body>
    <input id="date-selector-input" type="text" readonly/>
    <div id="targetContainer"></div>
</body>
```

**js：**
```html
<script src="./DateSelector.js"></script>
<script>
    new DateSelector({ ... });
</script>
```

**Parameter List：**

| Attributes |  Type  |  Value  | Details | 
| -----| -----| -----| -----|
|  **input**    |  {String} |*eg:'date-selector-input'* | the id of the dom you touch. |
|  **container**    |  {String} |*eg:'targetContainers'*| the id of the container you ready to append dom. |
|  **type**    | {Number} |0 OR 1 | 0: fixed style with *tab*;  1: free style without *tab*. |
|  **param**  |  {Array} |*eg:[0, 1, 1, 1, 1]*| user-defined units, every position means ['year', 'month', 'day', 'hour', 'minute']. 1 means you need the unit，0 means you dont need it. There must be serial 1.|
|  **beginTime**   |  {Array} |*eg:[3,27,12,12]     Mar 27(th) 12:12*  `default : [1970, 1, 1, 0, 0]`| user-defined begin time points. An empty array means default array. The equivalent of every position is  the sequent position of `1` in `param`. |
|  **endTime** |  {Array} |the same to beginTime `default : [nextYear, 12, 31, 23, 59]`| user-defined end time points. An empty array means default array. The equivalent of every position is  the sequent position of `1` in `param`. |
|  **recentTime**  |  {Array} |the same to beginTime| user-defined recent time points. An empty array means NOW. The equivalent of every position is  the sequent position of `1` in `param`.  |
|  **success**   |  {function} |*function(arr){alert(arr)}*| function(arr){} User-defined callback. The first param is the result. |

* type = 0，this type can set unit freely, and the style without *tab*.

 ![img2.](http://7xqsim.com1.z0.glb.clouddn.com/DateSelector5.jpeg) 

* type = 1  this type was made up by year, month, date, hour and minute. And the style is fixed.

 ![img1.](http://7xqsim.com1.z0.glb.clouddn.com/DateSelector4.jpeg)  

## 3. Tips
> * If you want to define the JSON by yourself, you can go to see [MultiPicker.](https://github.com/AppianZ/multi-picker/tree/master/MultiPicker)

> * For questions and issues please use  [THIS WAY](https://github.com/AppianZ/multi-picker/issues/new)

> * I am Appian. 

---

## DateSelector - 日期选择器

### 该日期选择器的优秀主要表现在:
> 【时间单位】自定义组合, 无论是年月日还是时分都能随心所欲的排列组合

> 【时间范围】自定义设置, 自定义的时间可以精确到分钟，并尽可能的进行数据合法性校正

> 例如可以设置【2011年13月(-27)日 102时12分 ~ 2020年10月21日 20时20分】的效果

> 你也可以使用 [ NPM. ](https://www.npmjs.com/package/mob-date-selector)

> [点击, 在移动端查看DEMO](https://appianz.github.io/multi-picker/DateSelector.html)


<br/>

## 使用NPM
### 1. 如何安装
> npm i mob-date-selector --save-dev

### 2. 如何引用
**webpack.config.js:**
```javascript
var path = require('path');
module.exports = {
entry : {...},
output : {...},
module : {
	loaders :[{
		test: /\.css$/,
		loader: 'style!css'
	}, {
		test: /\.js$/,
		exclude: path.resolve('./node_modules'),
		loader: 'babel',
	}]
}
}
```

**html：**
```html
<body>
	<input id="date-selector-input" type="text" readonly/>
	<div id="targetContainer"></div>
</body>
```

**js：**
```javascript
import DateSelector from 'mob-date-selector';
new DateSelector({ ... });
```


## 使用传统js
### 1.如何引用

> sass文件:引用DateSelector/DateSelector.scss

> css文件:引用DateSelector/DateSelector.css

> js文件:引用DateSelector/DateSelector.js

### 2.如何使用

**html的基本格式：**
```html
<link rel="stylesheet" type="text/css" href="./DateSelector.css"/>
<body>
    <input id="date-selector-input" type="text" readonly/>
    <div id="targetContainer"></div>
</body>
```

**调用js的基本格式：**
```html
<script src="./DateSelector.js"></script>
<script>
    new DateSelector({ ... });
</script>
```

**参数配置：**

| 参数 | 字符类型  |  取值  | 说明 | 
| -----| -----| -----| -----|
|  **input**    |  {String} | *eg:'date-selector-input'* | 点击触发插件的input框的id |
|  **container**    |  {String} |*eg:'targetContainers'*| 插件即将插入的容器id |
|  **type**    | {Number} |0 或 1 | 0为自定义插件的日期单位(不带tab切换)，1为固定插件的日期单位为【年月日】【时分】(带tab切换) |
|  **param**  |  {Array} |*eg:[0, 1, 1, 1, 1]*| 设置单位，元素分别对应设置['year','month','day','hour','minute'],1为需要，0为不需要,需要为连续的1 |
|  **beginTime**   |  {Array} |*eg:[3,27,12,12]    3月27日12点12分*| 设置开始时间点,空数组默认设置成1970年1月1日0时0分开始，数组的值对应param参数的对应值。 |
|  **endTime** |  {Array} |同beginTime| 设置结束时间点,空数组默认设置成次年12月31日23时59分结束，数组的值对应param参数的对应值。 |
|  **recentTime**  |  {Array} |同beginTime| 设置当前时间点,空数组默认设置为系统当前时间，数组的值对应param参数的对应值。 |
|  **success**   |  {function} |*function(arr){alert(arr)}*| function(arr){} 回调函数，可以自定义结果格式化|

* type = 0 自定义单位，【年月日时分】的自定义任意组合

* type = 1 带tab切换，固定单位【年月日时分】的固定样式


### 3.有什么优越性？

带有加速度的滑动 (•‿•)

能够动态设置任意开始和结束【时!间!点!】 (•‿•)

> 是的,你可以设置任何尴尬的时间了~ 比如:【2016-11-11 11:11 ~ 2016-12-12 12:12】

能够任意设置时间单位的组合 (•‿•) 

> "年月日"  OR  "月日时分"  OR  "年月日时分"

能够切换固定样式和自定义样式,简化参数 (•‿•)

能利用我的模型处理更多、更自由的联动 (•‿•)

> 比如城市多级联动，请移步[自定义json选择器 - MultiPicker.](https://github.com/AppianZ/multi-picker/tree/master/MultiPicker)

#### Trust Me. 

### 4.有什么局限性？
 
> 样式主题可能和你的产品风格不符，可以通过更改sass中的全局变量来解决问题 >.<

> 如果遇到什么神bug,不要着急。这时候,请对我发起issue~ 一定让您满意！

>  我是嘉宝Appian，一个卖萌出家的算法妹纸。

#### Trust Me. Again.

