# `Python3` 缺失 `sqllite3` 模块解决办法

在编译安装之前安装 `sqlite-devel` 和 `zlib-devel`
下载 `Python3` 的源码，参考其README文件，开始编译安装

``` shell
./configure
make
make test    #安装前测试，可以看到还缺哪些
make install
```

 
 <comment-comment/> 
 