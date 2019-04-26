在Linux平台下让在VirtualBox里运行的系统可以挂载
USB设备，需要将当前用户加入到"vboxuser"组中
```
sudo gpasswd -a [usrname] vboxusers
```
示例，"xu"是我的用户名：
```sudo gpasswd -a xu vboxusers```

重新登陆Linux生效
