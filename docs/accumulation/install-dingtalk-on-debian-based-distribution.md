---
title: 给debian系发行版安装钉钉
date: 2021-10-31
meta:
  - name: keywords
    content: deepin linux debian 钉钉
---
深度应用商店在今年上架了钉钉 `linux` 版，但是在钉钉官网却没有找到 `linux` 版本的安装包。

因为一些原因我需要在 `debian` 上使用钉钉，所以在 `deepin` 上下载了钉钉的安装包。

``` shell
# 下载安装包，然后在 /var/cache/apt/archives 可以找到这个安装包
sudo apt reinstall --download-only com.alibabainc.dingtalk
```

然后在 `debian` 上执行

``` shell
# 由于钉钉依赖 deepin-elf-verify， debian上没有这个包，所以加上 --force-depends选项
# 实验证明通过这种方法，钉钉 1.1.0.338_amd64 版本可以在 debian 上正常使用
sudo dpkg --force-depends -i com.alibabainc.dingtalk_1.1.0.338_amd64.deb
```
