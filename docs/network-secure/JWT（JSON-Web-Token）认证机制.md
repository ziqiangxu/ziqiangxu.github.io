# JWT(JSON-Web-Token)认证机制

`JWT` 是`JSON Web Token`的缩写。我们用大写的`JWT`表示这种认证机制，我们用小写的`jwt`来表示`JWT`机制中的生成的`token`，`jwt`是一个字符串

阮一峰老师的文章非常清楚地介绍了如何生成`jwt`这个`token`
[http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html](http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)

拜读了阮一峰老师的文章，我知道了`jwt`不仅是一个`token`，它还是一个包含了其他信息的`token`
看了文章底下的评论，甚是精彩！我觉得该文还需要一些补充

## 认证流程

### 一：申请凭证`jwt`：

1. 客户端发送账号和密码给服务器
2. 服务器查询数据库，认证成功后服务器返回凭证`jwt`
> 为了防止伪造，需要确保`jwt`只能由服务端生成，实现方法阮一峰老师的文章有讲

### 二：拿着凭证`jwt`访问服务器

1. 把`jwt`放到`HTTP`请求头的`Authorization`字段里【当然可以放在其他位置，只要确保服务器可以拿到】
2. 服务器拿到客户端提交的`jwt`之后，通过对`jwt`里的字段进行签名运算来验证这个`jwt`是否有效
> 签名运算只需要用到服务器的`secret`和`jwt`里的其它信息【这样就不需要去查询数据库了】

## 总结
使用`JWT`认证，服务器变成无状态了，从而比较容易实现扩展。
`JWT`的最大缺点，由于服务器不保存`session`状态，因此无法在使用过程中废止某个`token`，或者更改 `token`的权限。也就是说，一旦`JWT`签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。
说一句套话但绝对不是空话：还是需要根据实际应用场景选用认证方式的

## 使用案例

公司有一个对外提供的服务，用`gRPC`实现，用户身份验证的时候使用了`JWT`

## 扩展阅读
[OAuth2简单解释](http://www.ruanyifeng.com/blog/2019/04/oauth_design.html)
[OAuth2的四种授权方式](http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html)
