# 02-常用的wxml标签

标签必须闭合

* **view** 类似于div

* **icon** 微信小程序自带的符合微信视觉的图标：行内元素

  type: 图标种类 

  size：图标大小

  color: 图标颜色，可以用css控制

```html
<icon type='success'></icon>
<icon type='success_no_circle'></icon>
<icon type='info'></icon>
<icon type='warn'></icon>
<icon type='waiting'></icon>
<icon type='cancel'></icon>
<icon type='download'></icon>
<icon type='search'></icon>
<icon type='clear'></icon>
```

* **process** 进度条

  percent: 百分比(0-100)

  等等

* **text** 文本

* **button** 按钮

* **image** 等价于img标签

image，图标默认样式宽高 320*240

具有mode属性， 控制图片展示效果。

mode: 

​	scaleToFill(默认) 变形拉伸到全屏

​	aspectFit: 不变形：全部显示，相当于contian

​	aspectFill: 不变形：完全占据图片空间 相当于cover

​	widthFix： 宽度不变： 高度自动伸缩

```html
<image src="图标地址" mode="aspectFit"/>
```

* **navigator** 跳转，相当于a标签，只能在小程序内部跳转

可以以?的形式传参数，其余参看文档

* **input和form**，本质上和普通的标签一致，多了很多控制的属性

* **picker** 从底部弹起的滚动选择器。

  * mode：range / time / date / region(地点) /
  * value： 当前选中的值
  * bindcancel： 取消选择触发的函数
  * disabled: 字面意思
  * bindchange: 修改完成之后触发的函数

* **slider** 滑动选择器

  * max / min /step / value / bindchange(完成一次拖动触发) / bindchanging（拖动时候触发）

* **scroll-view**

  参考文档

* **swiper**

  滑块视图容器，轮播

```html
<swiper>
	<swiper-item></swiper-item>	
</swiper>
```

