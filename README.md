
# DateSelector

### DateSelector的自我介绍

> * Dateselector是自定义的DateTimePicker. 可自定义时间单位，也可任意设定时间范围。

> * 这框DateSelector主要有两种版本：简易日期选择器DateselectorSimple & 优质版日期选择器DateselectorPro.

> * 两种版本都能够任意的进行【年】【月】【日】【时】【分】的时间单位组合。

> * 简易版日期选择器的【自定义时间范围】只能精确到【年】，优质版日期选择器的【自定义时间范围】能够精确到【分】。

> * 简洁实用的api，强大的合法性检测，能够根据实际情况【自定义时间格式】，满足产品需求。

> * 目前已有超过**2W**的实际用户，并有良好的兼容性。

> * [查 看 首 页](https://appianz.github.io/DateSelector/) 

### DateSelectorPro的演示gif
![gif.](https://github.com/AppianZ/DateSelector/blob/master/productions/DateSelector1.gif) 
 
### 固定单位为【年月日时分】的固定样式
![img1.](http://7xqsim.com1.z0.glb.clouddn.com/DateSelector4.jpeg) 
 
### 自定义单位为【年月日时分】的自定义任意组合
![img2.](http://7xqsim.com1.z0.glb.clouddn.com/DateSelector5.jpeg) 
 

### **API说明**

**html的基本格式：**
```
<link rel="stylesheet" type="text/css" href="./DateSelectorPro.css"/>
<body>
    <input id="date-selector-input" type="text" readonly/>
    <div id="targetContainer"></div>
</body>
```

**调用js的基本格式：**
```
<script src="./DateSelectorPro.js"></script>
<script>
    new DateSelector({ ... });
</script>
```

**参数配置:**

| 参数 | 版本  | 字符类型  |  取值  | 说明 | 
| ----- |-----| -----| -----| -----|
|  **input**   | Simple && Pro |  {String} | *eg:'date-selector-input'* | 点击触发插件的input框的id |
|  **container**   | Simple && Pro |  {String} |*eg:'targetContainers'*| 插件即将插入的容器id |
|  **type**   | Simple && Pro | {Number} |0 或 1 | 0为自定义插件的日期单位(不带tab切换)，1为固定插件的日期单位为【年月日】【时分】(带tab切换) |
|  **param**   | Simple && Pro |  {Array} |*eg:[1,1,0,0,0]*| 设置单位，元素分别对应设置['year','month','day','hour','minute'],1为需要，0为不需要,需要为连续的1 |
|  **range**   | Simple |  {Array} |*eg:[1990,2020]      1990年~2020年*| 设置年份范围，默认[1950,明年],在设置了需要年份的情况下才生效|
|  **beginTime**   |  Pro |  {Array} |*eg:[2011,3,27,12,12]      2011年3月27日12点12分*| 设置开始时间点,空数组默认设置成1970年1月1日0时0分开始，数组的值对应param参数的对应值。 |
|  **endTime**   |  Pro |  {Array} |同beginTime| 设置结束时间点,空数组默认设置成次年12月31日23时59分结束，数组的值对应param参数的对应值。 |
|  **recentTime**   |  Pro |  {Array} |同beginTime| 设置当前时间点,空数组默认设置为系统当前时间，数组的值对应param参数的对应值。 |
|  **callbackfuc**   | Simple && Pro |  {function} |*function(arr){alert(arr)}*| function(arr){} 回调函数，可以自定义结果格式化|

### **Demo & Instructions**

* [简易版日期选择器 DateSelectorSimple.Demo.](https://appianz.github.io/DateSelector/DateSelectorSimple.html) 

* [简易版日期选择器说明书 DateSelectorSimple. Instructions.](https://github.com/AppianZ/DateSelector/tree/master/productions/DateSelectorSimple)
<br/>

* [优质版日期选择器 DateSelectorPro.Demo.](https://appianz.github.io/DateSelector/DateSelectorPro.html)

* [优质版日期选择器说明书 DateSelectorPro. Instructions.](https://github.com/AppianZ/DateSelector/tree/master/productions/DateSelectorPro)



### **Tips**
> * 【年】【月】【日】【时】【分】的时间单位排列组合，必须是连续单位的组合（如不连续，则会校正为连续单位）。

> * “固定样式”是指已经固定单位为【年、月、日、时、分】的场景，顶部有切换的tab，且可以左右切换【年月日】和【时分】，而“自定义样式”是指不带有tab切换的样式。

> * 在优质版日期选择器DateselectorPro中，用正确的数组表示你要设置的时间点。



### **Authors**

>  如果你遇到了什么神bug，请发起issue联系我 ~
