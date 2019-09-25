# 06-storage封装 url传对象 模块导入导出

**storage封装**

```js
export default class Storage {
  constructor(name = "addr", keyList = []) {
    // Object.assign(this, arguments)
    // 在实例化对象上的信息
    this.name = name
    this.keyList = keyList

    // 数据信息, 用于LocalStorage直接存储
    this.dataForStorage = this.getData() || {
      name: this.name,
      keyList: this.keyList,
      data: []
    }
  }

  // 合并数组中相同的部分
  static combine(tarArr = [], fromArr = []) {
    for (let i of fromArr) {
      if (tarArr.every(item => !(item == i))) {
        tarArr.push(i)
      }
    }
    return tarArr
  }

  // 给存储添加键名
  addKey(arr) {
    this.keyList = Storage.combine(this.keyList, arr)
    return this
  }

  //添加数据, 两种方式, 支持数组和对象
  //其中数组按keyList顺序添加, 对象只添加keyList存在的内容,其余 "" 补全

  push(obj) {
    let o = {}
    if (obj instanceof Array) {
      this.keyList.forEach((item, index) => {
        o[item] = obj[index]
      })
    } else {
      this.keyList.forEach(item => {
        o[item] = obj[item] || ""
      })
    }
    this.dataForStorage.data.push(o)
    return this
  }
  //获取所有数据
  getData() {
    this.dataForStorage = wx.getStorageSync(this.name)
    return this.dataForStorage
  }

  // 将dataForStorage保存到 wx中
  save() {
    wx.setStorageSync(this.name, this.dataForStorage)
  }

  // 查询 某个键key的值为value的第一项 并返回
  // 多项 功能
  find(key, value) {
    //单项
    // return this.dataForStorage.data.find(item=>item[key] === value)

    //多项
    return this.dataForStorage.data.filter(item => item[key] === value)
  }

  // 查询 某个键key的值为value的那项并返回下标

  findIndex(key, value) {
    return this.dataForStorage.data.findIndex(item => item[key] === value)
  }

  //删除 某个键key的值为value的那项并返回 满足条件的第一项
  delete(key, value) {
    if (this.find(key, value)) {
      //删除单项
      // return this.dataForStorage.data.splice(this.findIndex(key,value),1)
      //删除多项
      let arr = []
      for (let i = this.dataForStorage.data.length - 1; this.dataForStorage.data[i]; i--) {
        if (this.dataForStorage.data[i][key] === value) {
          arr.push(...this.dataForStorage.data.splice(i, 1))
        }
      }
      //保存
      return arr

    } else {
      return []
    }
  }

  //修改  
  change(key, value, newValue) {
    this.delete(key, value).forEach(item => {
      item[key] = newValue
      this.push(item)
    })
    return this
  }
}
```

**url传对象**

```js
//对象转字符串然后编码
url+encodeURI(JSON.stringify(obj))
//解码
JSON.parse(decodeURI(options.data))
```

**模块导入导出**

```js
//方法一
//导出
//index.js
module.exports = {
  foo: function(){}
}
//导入
let {foo} = require("index.js")


//方法二
//index2.js
//export方式导出，在导入时要加{ }, 使用export default命令, 不需要知道所要加载模块的变量名
export default function foo(){
  
}
//导入
import foo from "index2.js"
```

