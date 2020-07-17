# 使用 `Git` 客户端连接你的 `GitHub`

本文适用于Windows客户端，Linux终端。想必macOS也应该是一样的。本教程同样适用于其他的git托管平台，比如coding，gitlab等。（假设你知道git和github的区别）
- 先安装git客户端
Windows点一点，Linux用命令安装git就OK。
我的电脑是[Deepin操作系统](https://deepin.org)，使用以下命令：
`sudo apt install git`

> 这里不用apt-get而使用get是因为get是友好版的apt-get，可以看进度条哦。还可以少打几个字，何乐而不为呢。
- 配置本机的git

```
 git config --global user.name "填用户名"
 git config --global user.email "填邮箱"
```

user.name是github用户名
user.email是github绑定的邮箱
- 生成密钥

```
 ssh-keygen -t rsa -C "邮箱同上"
```

![图一](http://upload-images.jianshu.io/upload_images/6434906-06d91778a43a0f16.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
然后会出现上面的提示，按回车使用它的默认设置就好。
　　
- 提交密钥
从图一可以得知秘钥是存放地址。在c:\User\用户名\\.ssh\文件夹下。复制id_rsa.pub里面的文本，在github添加这个ssh key就好啦。
## https方式

### 方法一

```git config --global credential.helper store```
开启记住密码，以后push就不用每次输入账号了。
以上的操作实际是操作`~/.gitconfig`文件，你还可以在`~/.git-credentials`找到你的账号和密码哦

### 方法二

将`.git/config`中的url改成
`https://name:password@github.com/name/project.git`
的格式。其中`name `表示账号，`password`表示密码。`push`的时候会自动提交你的密码。此法适用于大部分git托管网站。
享受高速的http传输吧
