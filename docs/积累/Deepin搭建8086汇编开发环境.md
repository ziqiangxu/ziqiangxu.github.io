# `Deepin` 搭建 8086 汇编开发环境

最近通过王爽编写的《汇编语言（第3版）》在学习8086汇编，王爽被誉为著名的计算机科学教育家、<脑补加粗>哲学家</脑补加粗>果然是名不虚传啊，他编写的教材真是循序渐进，对新手非常友好，个人十分推荐使用本书进行初步学习。之前一直都是在Windows下用masm32进行模拟。然而我作为一个以deepin为主力系统的人，自然需要研究一下如何在Linux下搭建8086汇编开发环境，目前在Linux上的使用体验要优于Windows，主要是软件在对光标的处理上。网上找了找资料，下面进行整理总结。
> 注：本文讲到的dos特指dosemu软件模拟的dos版本(应该是freedos)

## 安装模拟软件

`sudo apt install dosemu`

然后终端执行 `dosemu` 即可启动dos
（PS:在Linux看到这样风格的窗口还是头一遭,不算在虚拟机虚拟Windows）
> 简短的介绍
进入dos后，执行 `？` 可以输出帮助信息
执行 `ver` 可以看到dos系统的信息
系统自带了debug程序和edit程序

## 复制汇编需要用到的工具到dos的C盘

系统的 `C` 盘对应在 `～/.dosemu/drive_c` 目录
然后下载[工具包](https://github.com/ziqiangxu/sources1/raw/master/assume/dosbox.zip)（包含 `link.exe` 和 `masm.exe` ），将其解压到drive_c这个目录之后，只需要在dos里边键入程序的路径就可以使用他们了
（另： `sudo apt install dosbox` 可以安装 `dosbox` 这个软件，也可以模拟 `dos`。）
参考链接：
https://www.jianshu.com/p/29114c96c36f
https://blog.csdn.net/doniexun/article/details/45438457
