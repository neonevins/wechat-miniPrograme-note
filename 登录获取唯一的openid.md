# （从自己后台登录）获取唯一的openid

用户登录是有用户的信息的, 但是直接获取的信息可能重复.

```js
wx.getUserInfo({
    success: res => {
        // 可以将 res 发送给后台解码出 unionId
        this.globalData.userInfo = res.userInfo
    }
})
//res有用户信息, 但是不是唯一也不是完全真实的
```

获取用户登录凭证(5min更换): 从用户的登录凭证调用接口返回用户的唯一的 openid 和 session_key,

`wx.login`微信小程序的代码

```js
function getUserOpenId(){
  return new Promise((resolve,reject) => {
    wx.login({
      success: res => {
        wx.request({
          url: "http://localhost:8000?res_code="+res.code,//你的服务器的url
          success: res => {
            resolve(res.data)
          }
        })
      }
    })
  })
}
getUserOpenId()
  .then(res =>{
  	console.log(res)
	})
```

后台的代码NodeJS

```JS
const app = require("express")()
const request = require("request")
app.use(function(req, res,next){
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

const appid = "wx8413e91a19259ba9",
      secret= "b00920a525d0dac905b33067dc137036"
  
app.use("/openid", function(req,res){
  const js_code = req.query.res_code
  var url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`
  request(url, (err, response, body)=>{
    res.send(body)
  })
})
app.listen(8000)
```



