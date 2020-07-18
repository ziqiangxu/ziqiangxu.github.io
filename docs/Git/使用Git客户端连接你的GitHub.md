# 使用 `Git` 客户端连接你的 `GitHub`

本教程同样适用于其他的 `git` 托管平台，比如 `coding`，`gitlab`等。（假设你知道 `git` 和 `github` 的区别）

## 先安装git客户端

我的是[Deepin操作系统](https://deepin.org)，使用命令`sudo apt install git` 安装

> 这里不用apt-get而使用get是因为get是友好版的apt-get，可以看进度条哦。还可以少打几个字，何乐而不为呢。

## 一 使用ssh方式连接

### 配置本机的git

``` bash
git config --global user.name "填用户名"
git config --global user.email "填邮箱"
# user.name是github用户名
# user.email是github绑定的邮箱
```

### 生成密钥

``` bash
 ssh-keygen -t rsa -C "邮箱同上"
```

![图一](./img/git-asking.png)
然后会出现上面的提示，按回车使用它的默认设置就好。
　　
### 提交密钥

从图一可以得知秘钥是存放地址。在c:\User\用户名\\.ssh\文件夹下。复制id_rsa.pub里面的文本，在github添加这个ssh key就好啦。

## 二 使用https方式连接

### 方法一

执行`git config --global credential.helper store`
开启记住密码。以后push就不用每次输入账号了。

以上的操作实际是操作`~/.gitconfig`文件，你还可以在`~/.git-credentials`找到你的账号和密码哦

### 方法二

将`.git/config`中的url改成
`https://{name}:{password}@github.com/name/project.git`
的格式。其中 `{name}` 表示账号，`{password}`表示密码。`push`的时候会自动提交你的密码。此法适用于大部分git托管网站。
享受高速的 `http` 传输吧
