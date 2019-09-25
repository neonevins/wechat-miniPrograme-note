//数据格式
let example = {
  name: "通讯录",
  keyList: ["user", "phone", "address", "info"],
  data: [
    {
      user: "银时",
      phone: "181.....",
      address: "科技园",
      info: "信息"
    }
  ]
}


class Storage{
  constructor(name = "addr",keyList = []){
    // Object.assign(this, arguments)
    // 在实例化对象上的信息
    this.name = name 
    this.keyList = keyList

    // 数据信息, 用于LocalStorage直接存储
    this.dataForStorage = {
      name: this.name,
      keyList: this.keyList,
      data: []
    }
  }

  // 合并数组中相同的部分
  static combine(tarArr = [], fromArr = []){
    for(let i of fromArr){
      if(tarArr.every(item=>!(item==i))){
        tarArr.push(i)
      }
    }
    return tarArr
  }

  // 给存储添加键名
  addKey(arr) {
    this.keyList = Storage.combine(this.keyList, arr)
  }

  //添加数据, 两种方式, 支持数组和对象
  //其中数组按keyList顺序添加, 对象只添加keyList存在的内容,其余 "" 补全

  push(obj){
    let o = {}
    if(obj instanceof Array){
      this.keyList.forEach((item,index)=>{
        o[item] = obj[index]
      })
    }else{
      this.keyList.forEach(item=>{
        o[item] = obj[item] || ""
      })
    }
    this.dataForStorage.data.push(o)
    return this
  }


  //获取所有数据
  get(){
    return this.dataForStorage.data
  }

  // 将dataForStorage保存到 wx中
  save(){

  }

  // 查询 某个键key的值为value的第一项 并返回
  // 多项 功能
  find(key,value){
    //单项
    // return this.dataForStorage.data.find(item=>item[key] === value)

    //多项
    return this.dataForStorage.data.filter(item=>item[key] === value)
  }

  // 查询 某个键key的值为value的那项并返回下标

  findIndex(key,value){
    return this.dataForStorage.data.findIndex(item=>item[key] === value)
  }

  //删除 某个键key的值为value的那项并返回 满足条件的第一项
  delete(key,value){
    if(this.find(key,value)){
      //删除单项
      // return this.dataForStorage.data.splice(this.findIndex(key,value),1)
      //删除多项
      let arr = []
      for(let i = this.dataForStorage.data.length-1;this.dataForStorage.data[i];i--){
        if(this.dataForStorage.data[i][key]===value){
          arr.push(...this.dataForStorage.data.splice(i,1))
        }
      }
      //保存
      return arr

    }else{
      return []
    }
  }

  //修改  
  change(key,value, newValue){
    this.delete(key,value).forEach(item=>{
      item[key]=newValue
      this.push(item)
    })
    return this
  }
}

//初始化数据
let addrStorage = new Storage("address",["key2","key4"])

//添加属性名
addrStorage.addKey(["key1","key2","key3"])

//
addrStorage.push({
  key1: "val1",
  key3: "val3",
  key5: "val5"
})
addrStorage.push({
  key1: "val1",
  key3: "val2",
  key5: "val5"
})

addrStorage.change("key1", "val1","value5")
// console.log(addrStorage)
//or

