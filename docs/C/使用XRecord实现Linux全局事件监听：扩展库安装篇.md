# 使用XRecord实现Linux全局事件监听：扩展库安装篇

深度科技的王勇分享了
[Linux全局事件监听](http://www.jianshu.com/p/80cf81413d31)
赞！在个人项目中也用到了他的源代码，但是他的文章中没有提到如何安装相关的库，XRecord是XServer的一个扩展。  

本文只能解决 `#include <X11/extensions/record.h>` 头文件不存在的问题。

也许你只需要一条安装代码： `sudo apt install libxtst-dev`

## 最新的方法：2018-05-23

老王推荐了一个很赞的工具： `apt-file`， 我们可以通过输入 `man apt-file` 或者通过搜索查询更多的用法

``` shell
sudo apt install apt-file    # 安装apt-file
apt-file search X11/extensions/record.h    # 搜索缺少的头文件
```

然后我得到了如下结果

``` shell
xu@xu-PC:~$ apt-file search X11/extensions/record.h
libxtst-dev: /usr/include/X11/extensions/record.h
```

左边的libxtst-dev就是我们要安装的扩展库了

-----------------------
后面的是老办法了，可忽略

### 开始搜索：

中文搜索没有找到，那就搜英文的吧，在百度键入 “Xlib XRecord”，果然有收获。都是很常用的英文句子，各位要有信心。
[传送门](http://www.geekub.com/137125/in-xlib-why-does-libxtst-so-contain-xrecord-functions)
在一句“in-xlib-why-does-libxtst-so-contain-xrecord-functions”捕风捉影。
然后我就输入sudo apt search libxtst，得到如下结果

``` shell
正在排序... 完成
全文搜索... 完成  
libxext-dev/panda,now 2:1.3.3-1+b2 amd64 [已安装]
  X11 miscellaneous extensions library (development headers)

libxext-doc/panda,panda 2:1.3.3-1 all
  X11 miscellaneous extensions library (documentation)

libxext6/panda,now 2:1.3.3-1+b2 amd64 [已安装]
  X11 miscellaneous extension library

libxext6-dbg/panda 2:1.3.3-1+b2 amd64
  X11 miscellaneous extensions library (debug package)

libxtst-dev/panda,now 2:1.2.3-1 amd64 [已安装]
  X11 Record extension library (development headers)

libxtst-doc/panda,panda,now 2:1.2.3-1 all [已安装]
  X11 Record extension library (documentation)

libxtst6/panda,now 2:1.2.3-1 amd64 [已安装]
  X11 Testing -- Record extension library

libxtst6-dbg/panda 2:1.2.2-1+b1 amd64
  X11 Record extension library (debug package)

```

然后安装了libxtst-dev（这个后面介绍是development headers很好理解吧）
，在Qt Creater中，示例代码的 `#include <X11/extensions/record.h>` 就不会提示不存在了。

### 总结

其实
`sudo apt search X11 extension library|grep Record` 是更好的解决方案。泪奔
