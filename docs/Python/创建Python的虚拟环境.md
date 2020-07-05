# 创建 `Python` 虚拟环境

> 如果你同时负责多个Python项目，或者想要轻松打包某个项目及其关联的库文件，再或者你担心已经安装的库之间会发生冲突，你可以创建一个虚拟环境来分而治之。

## 创建虚拟环境

在Linux终端里输入：
`virtualenv env`
这样就创建了一个名为 `env` 的虚拟环境。如果提示 `virtualen：未找到命令` 的话，
安装一下这个命令就好了： `sudo apt-get install virtualenv`

## 激活虚拟空间：

``` shell
cd env
source bin/activate
```

激活虚拟空间之后你会发现环境名称会出现在命令提示符前面。我这里显示：
`(env) xu@xu-pc:~/env$:`
现在你安装的所有库和执行的程序都是在这个虚拟环境里进行的。

## 退出环境

输入： `deactivate`
就会回到真实的全局环境。
将项目关联的所有库单独放在一个虚拟的环境里，可以轻松打包整个环境发送给其他人。只要他们的 `python` 版本和你的相同，你打包的代码就可以直接通过虚拟环境运行，不需要再安装任何库。

参考文献：《Python网络数据采集》Ryan Mitchell著

 
 <comment-comment/> 
 