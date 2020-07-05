# `Deepin` 搭建深度学习环境（安装显卡驱动、`cuda`、`cuDNN`）

## 写在最前面

本文不是针对超级新手的教程，本文默认读者有阅读 `NVIDIA` 官方指南的能力。由于 `NVIDIA` 官方指南的手册只提到了很少的发行版。连 `Debian` 都没有提到，让我等 `Deepin` 铁杆用户感觉到有些犹豫，想着是不是应该换个发行版了？还好有一个 `Debian` 系的发行版—— `Ubuntu` ，所以我依照 `NVIDIA` 针对 `Ubuntu` 给出的指南进行了安装。基本顺利，主要就是安装的选择上需要注意一下。下面就是我多次踩坑总结出来的。显卡型号 `NVIDIA Corporation GP102 [TITAN X] (rev a1)` ，有可能是我运气好，没有把系统搞崩。

不同版本操作可能略有差别，请各位操作前备份

- 驱动版本： 410
- cuda版本： 10

## 需要知晓的知识点

`nouveau`： 单词本意是“新”， 开源驱动。

## 一 用深度的显卡驱动器切换到使用闭源驱动

> 注意了，这一步很重要。因为如果你的电脑使用了 `nouveau` 开源驱动（如果电脑有 `NVIDIA` 显卡的话， `Deepin 15.9` 是默认使用它的）的话，是没办法安装 `NVIDIA` 的闭源驱动的
<!--
下载驱动 https://www.nvidia.com/Download/index.aspx，应该会得到一个形如`NVIDIA-linux-XXX.run`的文件。
安装过程是需要关闭显示服务器的
1. 注销当前登录用户
2. 按`Ctrl + Alt + F3`进入tty3，登录后执行
``` shell
sudo systemctl stop lightdm  # 关闭显示服务器
```
3. `sudo sh <*.run文件>`
-->

## 二 安装CUDA  

> 这一步是比较凶险的，所以请在操作前用 `深度备份还原工具` 备份一下你的系统（一般只用备份 `/` 分区），我是备份了 `home` 以外的和系统相关的所有分区。中途被搞坏了一次，还好我机智，这是我第一次使用 `深度备份还原工具` ，还是很给力的。

依照官方指南进行操作https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html
下载 `Ubuntu` 的 `runfile(local)`，别选 `deb` 或者 `cluster`，装不上的。

安装过程是需要关闭显示服务器的

1. 注销当前登录用户
2. 按 `Ctrl + Alt + F3` 进入 `tty3` ，登录后执行 `sudo systemctl stop lightdm  # 关闭显示服务器`
3. 执行`sudo sh <*.run文件>`

安装的中途它会提示：
a. 移除比较老的驱动（深度的显卡驱动管理器安装的软件源里的驱动，奈何 `cuda` 需要配合指定版本的驱动）
`sudo apt autoremove nvidia*`
b. 是否安装比较新的驱动，要选 `yes` 哈，否则没办法开机了。

## 三 安装CUDNN

依照官方指南进行操作https://docs.nvidia.com/deeplearning/sdk/cudnn-install/index.html#installlinux
下载`cuDNN Library for Linux`

### 参考链接

https://wiki.deepin.org/wiki/%E6%98%BE%E5%8D%A1#.E5.AE.89.E8.A3.85.E9.97.AD.E6.BA.90.E9.A9.B1.E5.8A.A8

本文永久更新链接[https://www.jianshu.com/p/faece1be1c87](https://www.jianshu.com/p/faece1be1c87)
最近一次修订：20190526

 
 <comment-comment/> 
 