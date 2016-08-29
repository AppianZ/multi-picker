## DateSelectorPro - 日期选择器优质版

#### 优质的主要表现在:

> 优化版的自定义功能不仅是【单位】自定义

> 【时间范围】也可以自定义,自定义的时间可以精确到分钟，并尽可能的进行数据合法性验证

> 例如可以设置【2011年13月(-27)日 102时12分 ~ 2020年10月21日 20时20分】的效果

<br/>
### 0.[在移动端下打开demo](http://appianz.github.io/Desert-or-Ocean/DateSelectorPro.html)
<br/>
### 1.如何引用css和js文件

> sass文件:引用productions/DateSelectorPro/DateSelectorPro.scss

> css文件:引用productions/DateSelectorPro/DateSelectorPro.css

> js文件:引用productions/DateSelectorPro/DateSelectorPro.js

<br/>

### 2.如何调用构造函数

#### 基本格式：new DateSelector({ ... });

#### 参数配置:

> input : {String}，点击触发插件的input框的id

> container ： {String}，插件即将插入的容器id

> type ：{0或1}，0为自定义插件的日期单位(不带tab切换)，1为固定插件的日期单位为【年月日】【时分】(带tab切换)

> param : {Array},例如 [1,1,0,0,0]，分别设置['year','month','day','hour','minute'],1为需要，0为不需要,需要为连续的1

> beginTime : {Array},空数组默认设置成1970年1月1日0时0分开始，如需要设置开始时间点如[2011,13,-27,102,12]，数组的值对应param参数的对应值,带有自动校正。

> endTime : {Array},空数组默认设置成次年12月31日23时59分结束，如需要设置结束时间点如[2020,10,21,20,20]，数组的值对应param参数的对应值,带有自动校正。

> recentTime : {Array},空数组默认设置为当前时间，如需要设置当前的时间点如[2016,8,5,12,0]，数组的值对应param参数的对应值,带有自动校正。

> callbackfuc : function(arr){} 回调函数，可以自定义结果格式化

<br/>

### 3.有什么优越性？

#### 带有加速度的滑动 (•‿•)

#### 能够动态设置任意开始和结束【时间点】 (•‿•)

> 是的,你可以设置任何尴尬的时间了!

> 【2016-11-11 11:11 ~ 2016-12-12 12:12】

#### 能够任意设置时间单位的组合 (•‿•) 

> 有时候需要"年月日",

> 有时候需要"月日时分",

> 有时候又需要"年月日时分"!

#### 能够切换固定样式和自定义样式,简化参数 (•‿•)

> 小清新的样式一定能够打动你冰封的心!

#### 能利用我的模型处理更多联动 (•‿•)

> 比如城市三级联动,但是有待开发喔!

#### Trust Me.
<br/>

### 4.有什么局限性？

> 样式主题可能和你的产品不符 >.<

> 在实际开发过程中,改变主题颜色只能靠自己了~

> 你可以选择改变css或改变sass的全局变量后重新编译

> 如果你只需要设置年份范围，不需要精确到后面的时间单位。

> 这时候,请移步[日期选择器简易版 DateSelectorSimple.js](https://github.com/AppianZ/Desert-or-Ocean/tree/master/AppianZ/productions/DateSelectorSimple)

> 一定让您满意！

> 如果遇到什么神bug,不要着急

> 这时候,请加我微信523938480


#### Trust Me. Again.

