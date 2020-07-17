# 用 `chroot` 修复 `Linux` 系统

我用的操作系统是 `Deepin`
自己手残，卸载了某个软件，导致无法进入桌面环境，且没有办法进入其他tty。

> 既然我清晰地记得是因为卸载某个软件导致的这个问题，那么就有解决办法了。我只要把这个软件装回去就好啦！所以我需要能够使用apt工具

还好一直保留者 `Deepin` 的 `live` 系统
进入 `live` 系统后我进行了如下操作：

## 步骤概览

1. 将要修复系统的根分区挂载到`/mnt`目录下，如果还有其它分区都统一以`/mnt`为根目录进行挂载
2. `chroot`到`mnt`目录下
3. 安装我不小心删掉的软件

### 第一步：挂载要修复系统的分区

```shell
# 备注，sda5是我的根分区，sda6是我的home分区。请根据实际情况执行指令
sudo mount /dev/sda5 /mnt
sudo mount /dev/sda6 /mnt/home 
```

系统运行的时候还需要其它的一些虚拟分区【一些和设备有关的分区，这句话对不对各位看官自行斟酌】

``` sh
# 这条命令依次将live系统的 /dev /dev/pts /proc /sys /run 分区挂载到要修复的
# 系统的根目录，这些分区在系统运行的时候是需要的
for i in /dev /dev/pts /proc /sys /run; do sudo mount -B $i /mnt$i; done
```

### 第二步： `chroot`到`mnt`目录下

`sudo chroot /mnt`
这步执行完了之后，就登录到了要修复的系统的 `root` 账户

### 第三步：安装我不小心删掉的软件

在这一步，遇到了困难，`apt` 没办法解析软件源的地址`packages.deepin.com`。ping了一下`packages.deepin.com`对应的 `ip` 地址，是通的，估计是 `dns` 的服务没启动吧，然后改了一下 `/etc/hosts`，搞定

## 题外话

`Deepin` 是我用得最久的 `Linux` 桌面发行版。现在用的电脑已经一年多没有重装系统了
