# 服务器免密登录：`ssh` 公钥配置

我们知道，用
`ssh <用户名>@<ip地址>` 登录远程服务器的时候，是需要输入登录密码的，有时候就很烦，比如以下情况：

1. 在密码比较复杂的时候，你要花费很长时间来输入密码；
2. 你在使用git的时候进行频繁提交：使用代码托管平台以及自建的git服务器。

> 实际上有一种解决方法——ssh免密验证。

## 步骤概览：

1. 在本地生成公钥
2. 将本地公钥存储在远程主机上
3. 开启远程主机上的ssh公钥认证登录功能

### 1. 生成公钥

``` sh
# -t 指定加密算法；
# -b 指定生成的密钥长度；
# -C 一段字符，一般都填邮箱地址。
# 更多参数说明可以在终端输入：ssh-keygen --help 查看
ssh-keygen -t rsa -b 4096 -C "你的邮箱地址"
```

这条命令执行完之后，会提示你指定公钥和私钥的存储位置。
![深度截图_选择区域_20180803235726.png](https://upload-images.jianshu.io/upload_images/6434906-1e172ec7abc663b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
截图中指定的是 `/home/xu/test` 这个位置，届时私钥就存储在 `/home/xu/test`，公钥存储在 `/home/xu/test.pub`。公钥和私钥是成对的

### 2. 将公钥存储到远程主机

``` sh
# i后面接的参数是保存你公钥的文件(我们这里是.ssh/id_rsa.pub)；
# git是远程主机的用户，这条指令会往git这个用户的主目录下的
# .ssh/authorized_keys文件写入id_rsa.pub保存的公钥
ssh-copy-id -i .ssh/id_rsa.pub git@12.56.224.61  
```

> 网上好多教程说直接将公钥内容写到 `.ssh/authorized_keys` 就可以了，我是没成功，最后还是用这条命令写入才成功的。（后续添加公钥倒是可以直接添加文本内容到.ssh/authorized_keys，一个公钥一行。也许ssh-copy-id命令还做了其他事情吧。你可以执行 `cat /usr/bin/ssh-copy-id` 看一下它的内容）

### 3. 开启远程主机ssh的公钥登录

检查 `ssh` 服务的配置文件—— `/etc/ssh/sshd_config`

``` sh
RSAAuthentication yes    # 这行一定要取消注释的（删掉#号）
PubkeyAuthentication yes    # 我的服务器没这行，不添加似乎也能用
AuthorizedKeysFile .ssh/authorized_keys    # 我的服务器没这行，不添加似乎也能用
```

重启 `ssh` 服务: `systemctl restart sshd`
