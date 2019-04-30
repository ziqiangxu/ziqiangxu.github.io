# Deepin如何休眠

[deepin官网](https://www.deepin.org)
休眠这个功能还是很酷很实用的，对于 `Linux` 系统，休眠一般就是把内存中的数据写入硬盘（`swap`文件），然后关机。在下一次开机的时候将数据重新载入内存，让你快速回到上一次的工作状态，这在你开启了大量的程序但需要暂停工作的时候尤其好用。

## 情况一

如果你的电脑有 `swap` 分区， `deepin` 会探测到，关机的时候会有休眠选项了，这个功能终于加到关机菜单里了，给 `deepin` 点赞。

~~一般来说，如果你有一个可以正常使用的swap分区，只需要在终端执行~~
~~```systemctl hibernate```~~
~~就可以休眠了。~~
~~如果你休眠之后开机发现你的电脑并没有恢复现场，则需要指定一下启动的磁盘（从swap分区启动），操作方法如下：~~
~~修改/etc/default/grub这个文件中的相关内容~~
~~```GRUB_CMDLINE_LINUX_DEFAULT="resume=/dev/sda3 quiet"```
其中/dev/sda3改为你的swap分区对应的标志即可（推荐使用gparted查看）
然后再执行~~
~~```sudo update-grub```~~

## 情况二

如果你没办法从硬盘划分一个swap分区，你可以通过使用swap文件来进行休眠。
[本教程参考了Debian的wiki](https://wiki.debian.org/Hibernation/Hibernate_Without_Swap_Partition)
大体思路：创建swap文件-->配置swap文件-->安装uswsusp-->配置uswsusp

### 1. 创建一个swap文件

``` shell
fallocate -l 256m /swap
mkswap /swap
```

“256”是指以MB为单位的大小（其后的'm'）。将其设置为RAM的至少一半大小(这个是debian wiki给定的数据，我建议设置为至少设置为内存相同大小)。“/swap”是交换文件的路径。它可以位于任何分区（例如root或home）。

### 2. 进行swap文件相关设置

- 挂载swap文件
将此行添加到/etc/fstab文件中：
`/swap swap swap defaults 0 0` 

- 减少使用swap文件
终端执行 `sudo sysctl -w vm.swappiness = 1`
并在/etc/sysctl.d中创建一个名为local.conf的文件，为了使vm.swappiness保持不变，文件内容如下:

``` text
vm.swappiness = 1
```

> [vm.swappiness扩展知识](http://blog.sina.com.cn/s/blog_13cc013b50102wskd.html)
减少内核对 `swap` 的使用这一步主要是针对使用机械硬盘的同学，因为在机械硬盘中大量对 `swap` 进行读写会拖慢系统的速度， Debian wiki 里面写的是停止内核使用 `swap` 文件，可能是原作者笔误，也可能是他瞎说的🤗

- 激活swap文件：
终端执行 `sudo swapon /swap`

### 3. 安装和配置相关软件

使用uswsusp这个软件，这是linux内核使用swap文件代替swap分区来进行挂起（休眠）的方法，并且还支持压缩和加密等功能。

- 安装uswsusp：
终端执行 `aptitude install uswsusp`

- 配置uswsusp：
终端执行 `sudo dpkg-reconfigure -pmedium uswsusp`，然后会出现如下提示框
![深度截图_选择区域_20180605160224.png](https://upload-images.jianshu.io/upload_images/6434906-f8a2c6817f602996.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
从这个问题开始全部选择确定，直到出现：

![选择swap文件](https://upload-images.jianshu.io/upload_images/6434906-56736ba5323f58ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
此处选择你要使用的swap文件，注：我这里是/var/swapfile这个文件

![选择是否对休眠写入swap的数据加密](https://upload-images.jianshu.io/upload_images/6434906-e5389c6168ee53db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
根据需要选择就好（需要知晓的是，开启加密功能之后休眠的启动所消耗的时间会增加）。如果选择加密的话，它会提示你设定一个密码

- 对uswsusp进行进一步配置

一般配置文件/etc/uswsusp.conf内容如下所示：

``` text
＃/etc/uswsusp.conf（8） -- Configuration file for s2disk / s2both

resume device= /swap

compress = y

early writeout= y

image size= 238941634

RSA key file = /etc/uswsusp.key

shutdown method = platform

resume offset = 8288

# encrypt = y 如果你选择了对数据加密，则会有这一行
```

`resume offset = 8288` 是交换文件实际存放的地方（应该是硬盘的物理地址）。你可以终端执行 `swap-offset /swap` 获得这个值。
`resume device` 必须是分区而不是交换文件。一般这行的值会在上一步完成后变成你的 `swap` 文件的路径，需要改成你的 `swap` 文件所在的分区，如 `/dev/sda1`

编辑 `/etc/uswsusp.conf` 文件后：
终端执行 `sudo update-initramfs -u`

1. 默认启动的配置
为了让系统启动时，默认从swap文件加载数据。将 `/etc/default/grub` 文件中的相关设置进行修改：
 `GRUB_CMDLINE_LINUX_DEFAULT ="resume = /dev/sda1 quiet"`
其中 `/dev/sda1` 是交换文件所在的分区。
终端执行 `sudo update-grub`

## 测试休眠

终端执行：`sudo s2disk `

**注**：配置成功之后，如果再次修改了uswsusp的设置需要执行 

``` shell
sudo update-initramfs -u
sudo update-grub
```

## 附录

如果你的磁盘分区结构变了，比如 `sda3` 变成了 `sda4`，按照上面步骤再来一遍就好啦（因为需要更新 `grub` 和 `uswsusp.conf`）。
