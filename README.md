# MultiPicker - A  Flexible Picker for Mobile

DateSelector : ![mob-date-selector-npm](https://img.shields.io/npm/dt/mob-date-selector.svg)

MultiPicker : ![mob-multi-picker-npm](https://img.shields.io/npm/dt/mob-multi-picker.svg)

## **Intro**
MultiPicker was born for `several product requirements` in the mobile.  It’s free, cute and customized.   There are now over **Hundreds of thousands of users**.

This plugin is made up of **two parts**：
* One part of  the MultiPicker is  [DateSelector - A  Picker for Selecting an Interval ](https://github.com/AppianZ/multi-picker/tree/master/DateSelector) 
![gif0.](https://github.com/AppianZ/multi-picker/blob/master/DateSelector/DateSelector1.gif) 

* The other part of MultiPicker is [ MultiPicker - A  Picker for User-Defined Json](https://github.com/AppianZ/multi-picker/tree/master/MultiPicker) 
![gif1.](https://github.com/AppianZ/multi-picker/blob/master/MultiPicker/MultiPicker.gif) 

**And, there are two kinds of DateSelector:**
* One kind of the DateSelector was made up by year, month, date, hour and minute. And the style is fixed.
 ![img2.](http://7xqsim.com1.z0.glb.clouddn.com/DateSelector4.jpeg) 

* The other kind of DateSelector was made up by free unit. And the style without *tab*.
 ![img1.](http://7xqsim.com1.z0.glb.clouddn.com/DateSelector5.jpeg) 

## **Demo & How to Use**
### DateSelector - A  Flexible Picker for Selecting an Interval
* [DateSelector - Demo.](https://appianz.github.io/multi-picker/DateSelector.html)

* [DateSelector - NPM.](https://www.npmjs.com/package/mob-date-selector)

* [DateSelector - How to Use.](https://github.com/AppianZ/multi-picker/tree/master/DateSelector)

###  MultiPicker - A  Flexible Picker for User-Defined Json
* [MultiPicker - Demo.](https://appianz.github.io/multi-picker/MultiPicker.html)

* [MultiPicker - NPM.](https://www.npmjs.com/package/mob-multi-picker)

* [MultiPicker - How to Use.](https://github.com/AppianZ/multi-picker/tree/master/MultiPicker)

## **Tips**

> * You can make full use of callback to do anything.
> * Please make sure to read the guide and use it correctly.


## **Logs**
### 2017.5.28(update)
> * Use with flexible.

### 2017.4.8(update)
> * Add an new prop in  MultiPicker.

### 2016.11.24(update)
> * The new style. 

### 2016.11.23(update)
> * Refactoring DateSelector with a new calculation.

### 2016.11.19(delete)
> * delete project DateSelectorSimple, rename project DateSelectorPro to DateSelector.

### 2016.11.6(add)
> * New Project -- MultiPicker,  with Chinese city JSON.


## **Authors**
>  For questions and issues please use  [THIS WAY](https://github.com/AppianZ/multi-picker/issues/new)
>  I am Appian. 


---

# MultiPicker -『为移动端而生』的自定义多级联动选择器
## **MultiPicker - 自我介绍**
MultiPicker是为了满足移动端对`各种选择器`的需求而生的，兼容性强，灵活度高。目前已有 **几十万** 的实际用户正在使用。

MultiPicker主要是由`两个部分`组成，
* 一个部分是 [日期选择器 - DateSelector](https://github.com/AppianZ/multi-picker/tree/master/DateSelector) 

* 另一个部分是 [自定义json选择器 - MultiPicker](https://github.com/AppianZ/multi-picker/tree/master/MultiPicker) 


`日期选择器有两种样式，一种带tab的固定样式，另一种是不带tab的自定义样式`
* 带tab切换，固定单位【年月日时分】的固定样式

* 自定义单位，【年月日时分】的自定义任意组合


## **Demo & How to Use**
### 日期选择器 - DateSelector
* [日期选择器-DateSelector.Demo.](https://appianz.github.io/multi-picker/DateSelector.html)

* [日期选择器-DateSelector. NPM.](https://www.npmjs.com/package/mob-date-selector)

* [日期选择器说明书-DateSelector. How to Use.](https://github.com/AppianZ/multi-picker/tree/master/DateSelector)

### 自定义json选择器 - MultiPicker
* [自定义json选择器-MultiPicker.Demo.](https://appianz.github.io/multi-picker/MultiPicker.html)

* [自定义json选择器-MultiPicker - NPM.](https://www.npmjs.com/package/mob-multi-picker)

* [自定义json选择器说明书-MultiPicker. How to Use.](https://github.com/AppianZ/multi-picker/tree/master/MultiPicker)

## **Tips**

> * 可以充分利用callback，对返回的结果执行相应操作，比如：拼接出期望的字符串，或构造后台期望的存储对象。
>
> * 在日期选择器DateSelector中，用正确的数组表示你要设置的时间点。
>
> * 在自定义json选择器MultiPicker中，构造符合规范的json数据。


## **常见问题**
1. 配色可以改吗?样式可以修改吗?
    > 这个插件主要实现的是逻辑方便的功能，所以在样式上是很开放的，甚至你可以审查元素到你想修改的dom上，直接覆盖样式。样式问题根据你的需要，实时修改即可。
    >
    > 如果你使用的是rem或flexible，可以用sass版本的样式。
    > 
    > 如果你使用的是px，可以使用css版本的样式。

2. 这个插件能配合Vue，React，Angluar 或者 jQuery 吗？
    > 这是一个原生插件，能够配合任何框架使用。同时，插件支持多个实例，可放心使用。
    
3. 触发弹窗的dom一定要是input吗？
    > 在文档中明确指出，触发弹层的dom可以是任意的dom。并建议弹层的容器，是body的第一级子元素。
    >
 	> demo中使用了input disabled只是为了返回值可以通过设置value返回，演示方便。**input readonly可能存在一些兼容问题**.
 	>
    > 开发者可以使用任意dom，将回调的返回值innerHTML或者双向绑定等。这里不再赘述。

4. 在使用[自定义json选择器说明书-MultiPicker](https://github.com/AppianZ/multi-picker/tree/master/MultiPicker)的过程中，城市数据哪里来？
    > 我提供一份我用过的[三级联动城市数据](https://github.com/AppianZ/multi-picker/blob/master/MultiPicker/city.js)，这份数据来自一位我认识的海大小伙伴，如果使用者想要其他格式的城市数据，建议也找你们的后台小伙伴爬一份。

5. 在使用[自定义json选择器说明书-MultiPicker](https://github.com/AppianZ/multi-picker/tree/master/MultiPicker)的过程中，支持默认定位、设置初始数据吗？
    > 暂时不支持在[自定义json选择器说明书-MultiPicker](https://github.com/AppianZ/multi-picker/tree/master/MultiPicker)中使用默认定位、设置初始数据。



## **Logs**
### 2017.5.28(update)
> * 配合flexible使用

### 2017.4.8(update)
> * 给自定义json选择器的返回值添加了一个index新参数

### 2016.11.24(update)
> * 新的灰白样式, 更大众, 更简洁

### 2016.11.23(update)
> * 重构DateSelector 的算法, 减少了50+行冗余代码

### 2016.11.19(delete)
> * 删除DateSelectorSimple, 重命名DateSelectorPro为DateSelector

### 2016.11.6(add)
> * 新增MultiPicker, 并配套中国城市json
        
    
## **常见问题** 
>* 配色可以改吗?样式可以修改吗?



## **Authors**
> *   如果你遇到了什么神bug，请发起[ISSUE](https://github.com/AppianZ/multi-picker/issues/new)联系我 ~
> *   发起[ISSUE](https://github.com/AppianZ/multi-picker/issues/new)时，请注明 1.使用的是哪个级联选择器？ 2.附上实例化的数据 3.用简单易懂的语言描述问题，能配上截图最好了。
> *   如果想了解选择器的开发过程，可以参考[ 如何造一个『为移动端而生』的联动选择器 ](https://segmentfault.com/a/1190000007658156)
> *   我是嘉宝Appian，一个卖萌出家的算法妹纸。
