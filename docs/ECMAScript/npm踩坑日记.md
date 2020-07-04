# `npm` 踩坑日记

## 意外中断
`verbose stack ZlibError: zlib: unexpected end of file` 这个很有可能是在下载包的时候`npm` 被意外中断（比如说你按了 `Ctrl + C` ）导致的。

> 解决方案：清除 `npm` 缓存，`npm cache clear --force`

## 加速

默认镜像地址是 `npm` 官方的的地址 `https://registry.npmjs.org` 国内访问比较慢、容易出现下载失败的情况。所以我们可以改为国内的镜像：`npm config set registry https://registry.npm.taobao.org` 

> 尽量使用`npm` 或者 `yarn`， 建议别用 `cnpm` 了。反正我在用的时候老是出现一些奇奇怪怪的问题
