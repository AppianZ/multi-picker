# DateSelector

### DateSelector的自我介绍

> * Dateselector是自定义的DateTimePicker. 可自定义时间单位，任意设定时间范围。

> * 这框日期选择器主要有两种模式：简易日期选择器DateselectorSimple & 优质版日期选择器DateselectorPro.


> * 两种模式都能够任意的进行【年】【月】【日】【时】【分】的时间单位组合。

> * 简易日期选择器的【自定义时间范围】只能精确到【年】，优质版日期选择器的【自定义时间范围】能够精确到【分】。

> * 简洁实用的api，强大的合法性检测，能够根据实际情况【自定义时间格式】，满足产品需求。

<br/>
### DateSelectorPro的演示gif
 ![gif.](https://github.com/AppianZ/DateSelector/blob/master/productions/DateSelector1.gif)
 
### 固定单位为【年月日时分】的固定样式
 ![img1.](http://7xqsim.com1.z0.glb.clouddn.com/DateSelector2.png?imageView2/2/w/562/h/452)
 
### 自定义单位为【年月日时分】的任意组合
 ![img2.](http://7xqsim.com1.z0.glb.clouddn.com/DateSelector3.png?imageView2/2/w/186/h/332)
 
<br/>
### **API说明**

#### **基本格式：new DateSelector({ ... });**

#### **参数配置:**
> input : {String}，点击触发插件的input框的id

> container ： {String}，插件即将插入的容器id

> type ：{0或1}，0为自定义插件的日期单位(不带tab切换)，1为固定插件的日期单位为【年月日】【时分】(带tab切换)

> param : {Array},例如 [1,1,0,0,0]，分别设置['year','month','day','hour','minute'],1为需要，0为不需要,需要为连续的1

> range ： array类型，设置年份范围，默认[1950,明年],在设置了需要年份的情况下才生效(简易版中使用)

> beginTime : {Array},空数组默认设置成1970年1月1日0时0分开始，如需要设置开始时间点如[2011,13,-27,102,12]，数组的值对应param参数的对应值,带有自动校正。(优质版中使用)

> endTime : {Array},空数组默认设置成次年12月31日23时59分结束，如需要设置结束时间点如[2020,10,21,20,20]，数组的值对应param参数的对应值,带有自动校正。(优质版中使用)

> recentTime : {Array},空数组默认设置为当前时间，如需要设置当前的时间点如[2016,8,5,12,0]，数组的值对应param参数的对应值,带有自动校正。(优质版中使用)

> callbackfuc : function(arr){} 回调函数，可以自定义结果格式化

<br/>

### **(ෆ ͒•∘̬• ͒)◞ 下面是Demo & Instructions**

> [简易版日期选择器 DateSelectorSimple.Demo.](http://appianz.github.io/Desert-or-Ocean/DateSelectorSimple.html) 

> [简易版日期选择器说明书 DateSelectorSimple. Instructions.](https://github.com/AppianZ/Desert-or-Ocean/tree/master/AppianZ/productions/DateSelectorSimple)
<br/>

> [优质版日期选择器 DateSelectorPro.Demo.](http://appianz.github.io/Desert-or-Ocean/DateSelectorPro.html)

> [优质版日期选择器说明书 DateSelectorPro. Instructions.](https://github.com/AppianZ/Desert-or-Ocean/tree/master/AppianZ/productions/DateSelectorPro)

<br/>


### **Tips**
> * 【年】【月】【日】【时】【分】的时间单位组合，必须是连续单位的组合。

> * “固定样式”是指顶部有切换的tab，可以左右切换【年月日】和【时分】，而“自定义样式”是指不带有tab切换的样式。

> * 在优质版日期选择器DateselectorPro中，用正确的数组表示你要设置的时间点。

<br/>

### **Authors WeChat**

> #### 如果你遇到了什么神bug，可以通过微信【523938480】联系我~

 
