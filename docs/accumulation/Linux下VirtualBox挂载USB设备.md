# `Linux` 下 `VirtualBox` 挂载 `USB` 设备

在Linux平台下让在VirtualBox里运行的系统可以挂载
USB设备，需要将当前用户加入到"vboxuser"组中

终端执行 `sudo gpasswd -a <usrname> vboxusers`
示例， `xu` 是我的用户名： `sudo gpasswd -a xu vboxusers`

注销后重新登陆生效
