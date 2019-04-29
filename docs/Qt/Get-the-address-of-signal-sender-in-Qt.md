# `Qt` 获取信号发送者的地址

首先我们会定义 `input` 是一个 `QLineEdit` 类型的指针变量（ `connect` 的参数须是地址）

``` cpp
connect(input, &QLineEdit::returnPressed,
            this, [=]{
    if (sender() == input) qDebug("测试成功");    //sender()函数会返回信号发送者的指针
   qDebug() << sender();
});
```

拿到地址了就可以进行更多操作了，打开你的脑洞吧

注意：

``` cpp
qDebug("使用形式一")   //不需要include QDebug
qDebug() << "使用形式二"  //需要引入QDebug类
```
