# 关闭 `chrome` 的安全策略：可用于跨域

对于 `Linux`，终端执行:
`google-chrome --disable-web-security --user-data-dir=<path to store the data>`。
> 如 `google-chrome --disable-web-security --user-data-dir=/home/xu/test-dir`

- 其中 `--disable-web-security` 选项关闭 `web` 的一些安全策略【其中包括阻止不合法的跨域请求】。
- 在 `Linux` 下，如果要关闭安全策略，则必须指定一个目录 `user-data-dir` 用于保存这样运行浏览器所产生的一些数据

## 使用场景

前后端分离开发时

- 前端运行在 `http://localhost:8080`
- 后端运行在 `http://localhost:8000`

这时前端对后端发起请求属于跨域了（只要协议、域名、端口有任何一个的不同，就被当作是跨域——不同**域**），正式上线网站的时候一般都会把前后端放到一个**域**里，比如将前端打包成静态资源后使用 `nginx` 进行部署或者直接由和后台代码放在一起。

## 限制跨域访问是浏览器的安全策略，主要有两种：

- `DOM` 同源策略：禁止对不同源页面 `DOM` 进行操作。这里主要场景是 `iframe` 跨域的情况，不同**域**的 `iframe` 是限制互相访问的。
- `XMLHttpRequest` 同源策略：禁止使用 `XHR` 对象向不同**域**发起 `HTTP` 请求。

## 为什么浏览器要这样做？

当然是为了安全啊

我们假设有两个**域**:

- **域**1：存着你血汗钱的网站： `http://money.com`
- **域**：一个恶意网站： `http://坏人.com`

为了方便在客户端存储少量信息，浏览器推出了 `cookie` 这样的功能。

> 即浏览器每次发起 `http` 请求，浏览器都会自动带上这个**域**的 `cookie`， 比如访问 `http://money.com` 的主页，浏览器则会自动帮你带上 `http://money.com` 这个**域**的 `cookie`

这样可以很方便的使得 `http://money.com` 的后台程序根据 `cookie` 所携带的信息来改善用户的使用体验，最常用的就是以此来识别用户，使用户保持登录状态。但是这样有一个副作用：
> 即使你是在其它**域**通过 `XMLHttpRequest` 对象发起这个 `http` 请求，也同样是带上 `money.com` 这个**域**的 `cookie`。这就给坏人带来了机会

**试想这样一个场景**:

你刚登录了 `http://money.com` 这个网站，验证信息保存在 `cookie` 里，而且还没有过期。然后你又进入了 `http://坏人.com` 这个网站，坏人网站载入的时候就在后台用 `XMLHttpRequest` 对象向 `http://money.com` 发请求。如果浏览器不管不顾，直接就允许了，那这个请求就带着 `cookie` 发出去了，服务端一看 `cookie` 里的验证信息，是 `OK` 的。坏人不就得到服务器返回的信息了么，然后他就拿着你的信息做坏事了，好可怕。

实际上呢，以 `google-chrome` 为例（`google-chrome` 默认打开了相关的安全策略）：

1. 如果服务端允许任何其它域来请求：则允许这个请求，然后坏人就得逞了。
2. 如果服务端只允许指定的域来请求：发现这个请求来自于`http://坏人.com` 域，不在设定的许可名单里，则不会允许这个陌生的请求

> 当我们关闭了 `google-chrome` 的安全策略的时候，这个请求直接就发出去了，根本不管服务端允许不允许的。这是怎么实现的呢，请求里不带发送域或者是直接将发送域替换成目的域吗？
