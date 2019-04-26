如果某些头文件的使用需要指明链接库的位置，但你没有在指明。很有可能会出现：
`error adding sysmbols: DSO missiong from command line`这样的错误。

如果你指明了链接库，但是没有指出全部的链接库，很有可能会出现 `undefined reference to symbol ***（头文件中的函数名）`或者`对函数未定义的引用`之类的错误。
在`CMakelists.txt`文件中，通过
```cmake
target_link_libraries([TARGET_NAME] [链接库名字])  # 按名字添加
target_link_directories([链接库目录])  # 按目录添加
```
如何确定这些库，还需继续努力学习
