因为Linux（我的是deepin）系统安装了新版本的jdk，导致XMind和DBeaver无法启动（截止2017.12.19他们依赖于jdk1.8，似乎就是那个Java8吧，我不会Java）。当然你的电脑安装了新版的jdk，肯定是有原因的，总不能把它给卸载了吧。所以我们就需要给这两个软件指定一个jdk。
下面以XMind为例，DBeaver进行类似的操作即可
1.在文件管理器搜索jdk，找到jdk的安装路径
我的是在这里64位的哦：/usr/lib/jvm/java-8-openjdk-amd64/bin
2.用root权限编辑XMind的XMind.ini文件
我的是在这里哦：/usr/share/xmind/XMind_amd64/XMind.ini
加入两行
```
-vm
/usr/lib/jvm/java-8-openjdk-amd64/bin
```
![深度截图_选择区域_20171219192153.png](http://upload-images.jianshu.io/upload_images/6434906-e20d528976b092cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> ps: 注意dbeaver的这两行要加在-vmargs之前

![image.png](https://upload-images.jianshu.io/upload_images/6434906-f73deb33be84cc29.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


3.重新打开软件，愉快的使用吧！
ps: mac下也是一样的，相关的配置文件在
`/Applications/DBeaver.app/Contents/Eclipse/dbeaver.ini`
