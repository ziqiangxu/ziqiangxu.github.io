# Deepin文件管理器的文件夹共享

现在我有两台安装了 `Deepin` 的计算机 A 和 B，并且在同一局域网内，需要在从 A 向 B 发送数据（ B 开启文件夹的共享，并设置为读写模式）。
按照 `Deepin` 文件管理帮助里面的介绍对两台计算机进行操作之后，在 A 的网络邻居可以成功的发现 B 。但是点开双击无法打开，我以为是 Bug 呢。后来一想， `Deepin` 默认关闭了很多端口，应该是相关的网络端口没有打开吧！后来查了一下 `samba` （`Deepin` 文件管理的共享文件功能的基石）的[通信端口](https://blog.csdn.net/wangsifu2009/article/details/6780749)，那就打开文件和打印共享的端口吧（139）
开启共享文件夹的那台计算机（B）的139端口之后，果然好了。
>看来 `Deepin` 的文件管理器需要改进啦。samba是个很优秀的软件，可以在Windows和Unix Like下传输资源，有兴趣可以了解一下它的历史

推荐一个防火墙管理软件—— `ufw`，可以用它轻松地开关计算机端口

``` shell
sudo apt install ufw  # 安装ufw
sudo ufw allow 139  # 开启139端口
sudo ufw reject 139  # 关闭139端口
```
