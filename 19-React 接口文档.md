# React 接口文档

## 一.请求url

> http://47.100.98.54:9019

​	请求方式 get	

## 二.api参数

​	

	### 1.定位 

 + 请求url

		> http://route.showapi.com/9-4

 + api参数 
    + get请求

	>'showapi_appid':'37928',
	>'showapi_sign':'d0ca1605e19241c38849c3fb9a56b447'

 + 返回

```json
{
			"c1": "101010700",
			"c10": "3",
			"c11": "010",
			"c12": "102200",
			"c15": "80",
			"c16": "AZ9010",
			"c17": "+8",
			"c2": "changping",
			"c3": "昌平",
			"c4": "beijing",
			"c5": "北京",
			"c6": "beijing",
			"c7": "北京",
			"c8": "china",
			"c9": "中国",
			"latitude": 40.206,
			"longitude": 116.165
		},
```



 ### 2. 分类导航

 a) 主页

+ api 参数

  > /api/category

+ 返回

  ```css
  
  ```


b) 内页

- api 参数

> /api/category/list:id

+ 标题

  + 根据id

    ```
    ['美食','甜品饮品','商超便利','预定早餐','果蔬生鲜','新店特惠','准时达','晚餐','汉堡薯条','包子粥店','鲜花蛋糕','麻辣烫','川香菜','披萨意面','异国料理']
    ```

+ 返回

  ```css
  
  ```


 ### 3.抢购

a) 主页

+ api参数

> api/scarebuy

b) 内页

​	...

+ api参数

> /api/scarebuySub

### 4.  促销

a) 主页	

 + api参数

   > /api/promotion

b) 内页

 + api参数

> api/promotionSub



### 5. 商家列表

a) 主页

 + api参数

> /api/shoplist

​	

b) 内页

 + api参数

> /api/detail/:id



























































