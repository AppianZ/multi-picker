## DateSelectorSimple - 日期选择器简易版

#### 简易的主要表现在:

> 简易版的自定义功能，是能够满足任何需求的【单位】自定义功能

> 无论是年月日还是时分都能随心所欲的排列组合，并尽可能的进行数据合法性验证

<br/>
### 0.[在移动端下打开demo](http://appianz.github.io/Desert-or-Ocean/DateSelectorSimple.html)
<br/>
### 1.如何引用css和js文件

> sass文件:引用productions/DateSelectorSimple/DateSelectorSimple.scss

> css文件:引用productions/DateSelectorSimple/DateSelectorSimple.css

> js文件:productions/DateSelectorSimple/DateSelectorSimple.js

<br/>

### 2.如何调用构造函数

#### 基本格式：new DateSelector({ ... });

#### 参数配置:

> input : {String}，点击触发插件的input框的id

> container ： {String}，插件即将插入的容器id

> type ：0或1，0为自定义插件的日期单位(不带tab切换)，1为固定插件的日期单位为【年月日】【时分】(带tab切换)

> param : array类型,例如 [1,1,0,0,0]，分别设置['year','month','day','hour','minute'],1为需要，0为不需要，需要为连续的1

> range ： array类型，设置年份范围，默认[1950,明年],在设置了需要年份的情况下才生效

> callbackfuc : function(arr){} 回调函数，可以自定义结果格式化

<br/>

### 3.有什么优越性？

#### 带有加速度的滑动 (•‿•)

#### 能够动态设置年份范围 (•‿•) 

#### 能够任意设置时间单位的组合 (•‿•)

> 有时候需要"年月日",

> 有时候需要"月日时分",

> 有时候又需要"年月日时分"!

#### 能够切换固定样式和自定义样式,简化参数 (•‿•) 

> 小清新的样式一定能够打动你冰封的心!

#### Trust Me.
<br/>

### 4.有什么局限性？

> 只能动态设置年份范围 >.<
<br/>
> 在实际开发过程中,改变主题颜色只能靠自己了~

> 你可以选择改变css或改变sass的全局变量后重新编译
<br/>
> 在实际开发过程中,

> 产品总会告诉你,我要从2016-11-11 11:11开始我的活动!

> 还要在2016-12-12 12:12的时候结束我的活动!其他时间点不可选!!!必须这样!!

> 这时候,请移步[日期选择器优质版 DateSelectorPro.js](https://github.com/AppianZ/DateSelector/tree/master/productions/DateSelectorPro)

> 一定让您满意！

> 如果遇到什么神bug,不要着急

> 这时候,请加我微信523938480

#### Trust Me. Again.
   

