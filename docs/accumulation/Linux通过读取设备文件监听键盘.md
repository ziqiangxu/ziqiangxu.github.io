# 通过读取设备文件监听键盘事件 `Linux`

``` cpp
#include <stdio.h>
#include <linux/input.h>
#include <fcntl.h>
#include <unistd.h>

#define DEV_PATH "/dev/input/event5"   //根据需要修改为你的键盘对应的设备文件，可以直接sudo cat /dev/input/event5并按键盘，看是否有输出，见附图

int main()
{
    int keys_fd;  //文件标志
    char ret[2];
    struct input_event t;  //读取到的input设备数据是一个结构体

    keys_fd = open(DEV_PATH, O_RDONLY);  //权限不通过的时候一般会返回-1
    if(keys_fd <= 0)
{
    printf("open /dev/input/event2 device error!\n");
    return -1;
}
while(1)
{
    if(
        read(keys_fd, &t, sizeof(t)) == sizeof(t)
        )  /*keys_fd指向打开的设备文件，read将从设备文件传送sizeof(t)个字节的数据到&t这个内存地址。函数执行顺利的话返回值是实际读取的字节数*/
    {
        if(t.type == EV_KEY)
        {
            if(t.value==0 || t.value==1)
            {
                printf("key %d %s\n", t.code, (t.value) ? "Pressed" : "Released");  //t.code值所对应的按键在/usr/include/linux/input-event-codes.h可以查到
				}
		}
	}
}
close(keys_fd);

return 0;
}
```

![附图](https://upload-images.jianshu.io/upload_images/6434906-f9c35524dc87577e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
操作其他的设备类似，不过要提前了解相关的数据结构
但是这种监听是需要有设备文件的读取权限的（默认 `root` 用户才有）， `read` 函数是系统函数，阻塞地读取设备文件，当设备文件中的缓存为空时挂起等待。

## 扩展阅读

事件监听方案，推荐[Linux全局事件监听技术](https://www.jianshu.com/p/80cf81413d31)
 