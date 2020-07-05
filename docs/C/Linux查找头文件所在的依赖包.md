# `Linux` 查找头文件所在的依赖包

在 `Linux` 下编译一些软件的时候，由于你的系统没有安装相关的开发库依赖包，有时候会出现找不到某些头文件的情况。

以 `Xlib.h` 为例，我们可以通过一些工具来搜索哪些软件包包含这些头文件。

## `Redhat` 系

`sudo yum provides */Xlib.h`

>> 命令里的 `*/` 很关键哦，参数是大小写敏感的，不能写成 `*/xlib.h`

## `Debian` 系

- 安装工具：`sudo apt install apt-file`
- 更新索引：`sudo apt update` 或者 `sudo apt-file update`
- 搜索头文件：`sudo apt-file search Xlib.h`
  
>> 可以通过加 `-i` 选项来忽略大小写

 
 <comment-comment/> 
 