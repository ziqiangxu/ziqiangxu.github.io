# `Java` 技术名词扫盲

## 三个版本（Edition）

- `Java ME（Java Platform， Micro Edition Embedded）`，一套运行专门为嵌入式设备设计的api接口规范
- `Java SE（Java Platform， Standard Edition）`， `JDK JVM` 以及自带的 `api` 合集的具体实现
- `Java EE（Java Platform， Enterprise Edition）`，基于 `Java SE` 发展出来的一套规范接口

> 以上英文全称来自于 `Oracle` 官网。`JDK` 不分 `ME, SE, EE`，我们平时开发 `Spring` 应用，使用的就是第三方的 `Java EE` 规范，但可以选择 `Oracle` 的 [`Java SE JDK`](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html)
>> 扩展阅读：
[https://www.jianshu.com/p/62c232f83e86](https://www.jianshu.com/p/62c232f83e86)
[https://blog.51cto.com/javaligang/1825681](https://blog.51cto.com/javaligang/1825681)
[https://www.zhihu.com/question/31455874](https://www.zhihu.com/question/31455874)

## `Eureke` 是什么？

简单讲，`Eureka` 就是 `Netflix` 开源的一款提供服务注册和发现的产品，并且提供了相应的Java客户端。
>> 扩展阅读：
[https://zhuanlan.zhihu.com/p/34976125](https://zhuanlan.zhihu.com/p/34976125)
[http://www.ityouknow.com/springcloud/2017/06/01/gateway-service-zuul.html](http://www.ityouknow.com/springcloud/2017/06/01/gateway-service-zuul.html)

## `Spring IoC/DI` 和 `Spring AOP`

### `IoC(Inversion of Control)` 控制反转与 `DI（Dependency Inject）` 依赖注入

- `IoC` 是一种编程范式，用于对程序进行解耦
- `DI` 是一种用 `Java` 践行 `IoC` 编程范式的具体方式

简单来说，`a` 依赖 `b`，但 `a` 不控制 `b` 的创建和销毁，仅使用 `b`，那么 `b` 的创建和销毁交给 `a` 之外处理( 如：`Spring` 框架)，这叫控制反转（`IoC`），而 `a` 要依赖 `b`，必然要使用 `b` 的 `instance`，那么我们可以:

1. 通过 `a` 的接口，把 `b` 实例传入
2. 通过 `a` 的构造，把 `b` 实例传入
3. 通过设置 `a` 的属性，把 `b` 实例传入

这样就实现了 `a` 使用 `b` 实例，但是不创建 `b` 实例。

>> 扩展阅读
[https://zhuanlan.zhihu.com/p/33492169](https://zhuanlan.zhihu.com/p/33492169)
[https://www.zhihu.com/question/32108444](https://www.zhihu.com/question/32108444)

### `AOP(Aspect Oriented Program)` 面向切片编程

一种编程范式，是对 `OOP` 的补充，在运行时，动态地将代码切入到类的指定方法、指定位置上的编程思想就是面向切面的编程。
>> 扩展阅读
[https://www.zhihu.com/question/24863332](https://www.zhihu.com/question/24863332)

## 杂项

- `Dubbo`： `Alibaba` 开源的分布式服务框架
- `Zookeeper` 是 `Apache Hadoop` 的一个子项目，它主要是用来解决分布式应用中经常遇到的一些数据管理问题，如：统一命名服务、状态同步服务、集群管理、分布式应用配置项的管理等等。
- `RabbitMQ`: 消息队列框架[https://juejin.im/post/5a67f7836fb9a01cb74e8931](https://juejin.im/post/5a67f7836fb9a01cb74e8931)
- `Quarz`：用于创建调度时间表，定时任务框架（高级的 `crontab`）
- `FastDFS`：轻量级的分布式文件系统[https://juejin.im/post/5a532bb06fb9a01ca2675678](https://juejin.im/post/5a532bb06fb9a01ca2675678)
- `poi`: `Apache` 开源软件，用于读写 `XML` 文件，包含 `Excel` 文件
- `JDBC(Java Database Connectivity)`: 用于 `Java` 语言和数据库之间的数据库无关的标准 `Java API`（这些 `API` 可以进行连接和数据库操作）。
- `servlet`：是一个接口规范，写一个实现 `servlet` 接口的类，实现它的五个方法，再将其部署到 `servlet` 容器（如 `Tomcat`）中，就可以运行一个网站了。
- `Struts2`： 流行和成熟的基于 `MVC` 设计模式的 `Web` 应用程序框架。
- `Shiro` 安全框架，类似 `Spring Security`，可以处理认证、授权、管理会话、密码加密
- `SOAP(Simple Object Access Protocol)` 简易对象访问协议，用于交换 `XML` 编码信息的轻量级协议
- `REST([Resource] Representational State Transfer)` 资源表现层状态转移