# 指定 `XMind` 和 `DBeaver` 的 `JDK` 版本

因为 `Linux` （我的是 `Deepin`）系统安装了新版本的 `JDK`，导致 `XMind` 和 `DBeaver` 无法启动（截止2017.12.19他们依赖于 `JDK 1.8`，就是 `Java 8` 的 `JDK`）。当然你的电脑安装了新版的 `JDK`，肯定是有原因的，总不能把它给卸载了吧。所以我们就需要给这两个软件指定一个匹配的 `JDK` 版本。
下面以 `XMind` 为例，`DBeaver` 进行类似的操作即可

## 第一步： 找到需要的 `JDK` 版本

找到 `JDK` 的安装路径，我的是在这里64位的哦： `/usr/lib/jvm/java-8-openjdk-amd64/bin`
你也可以直接在文件管理器搜索 `JDK`

## 第二步： 修改配置文件，使用指定的 `JDK`

用 `root` 用户编辑 `XMind` 的 `XMind.ini` 文件
我的是在这里哦： `/usr/share/xmind/XMind_amd64/XMind.ini`
加入两行(指定 `Java` 虚拟机)

``` sh
-vm
/usr/lib/jvm/java-8-openjdk-amd64/bin
```

![深度截图_选择区域_20171219192153.png](http://upload-images.jianshu.io/upload_images/6434906-e20d528976b092cc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## Tips

注意这两行要加在 `-vmargs` 之前（`-vmargs` 用于指定虚拟机参数）

![image.png](https://upload-images.jianshu.io/upload_images/6434906-f73deb33be84cc29.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

重新打开软件，愉快的使用吧！

## `macOS`

`macOS` 下也是一样的解决办法，相关的配置文件在
`/Applications/DBeaver.app/Contents/Eclipse/dbeaver.ini`

 
 <comment-comment/> 
 