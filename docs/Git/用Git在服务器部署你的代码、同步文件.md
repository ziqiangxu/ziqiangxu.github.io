# 用 `Git` 在服务器部署你的代码、同步文件

应用场景：
1.构建私有仓库，只是保存代码的话还是推荐coding或github；
2.需要在服务器和本地同步文件；
3.需要在服务器部署代码；
4......还有很多，等你去发现呢
开始干活儿：

### 第一步 配置服务端：

 假设:
- 当前用户名是test;
- ip地址是：45.76.222.90
- 当前目录是/home/test/
1、服务器安装git，并初始化仓库 git init [仓库名]
```git init git-test```
然后就出现了一个git-test文件夹
2、允许仓库接受远程推送
先切换到仓库目录下
```git config receive.denyCurrentBranch ignore```
这样就产生了一个远程仓库，仓库地址是
```ssh://test@45.76.222.90:/home/test/git-test.git```

### 第二步 配置本地端：

```git clone ssh://test@45.76.222.90:/home/test/git-test.git```
然后就可以向服务端push文件了,要使用这一组命令
```
git add .
git commit -m "fast-commit"
git push master
```

### 第三步 服务端接收文件

```git update-server-info
git checkout -f
```
还可以直接编辑仓库里.git/hooks/目录下新建一个post-update文件，内容是
``` shell
#!/bin/sh
cd [仓库路径]
unset GIT_DIR
git checkout -f
```
> 记得给这个脚本添加可执行权限

这样本地提交代码之后服务器就可以自动检出了，当然你也可以在这个文件里加入更多的Linux命令，实现你的想要执行的操作。
> 这样配置，每次提交和拉取数据都要输入密码进行验证，很烦。可以配置服务器的[ssh免密登录](https://www.jianshu.com/p/6761199bedba)来进一步简化工作。

您还可以参考[其他教程](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)，本教程适合快速实现需求，您需要学习更多git知识

 
 <comment-comment/> 
 