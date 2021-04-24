# `Docker` 创建 `MariaDB` 实例

本文中的 “实例” 和 “容器” 具有相同含义

## 安装docker

[参考链接](https://yeasy.gitbooks.io/docker_practice/install/)

``` bash
docker run -p 0.0.0.0:3307:3306 \
--name [数据库名字]
-v [宿主机的路径]:[docker容器的路径] \
-e MYSQL_ROOT_PASSWORD=[数据库root用户密码] \
-dit mariadb
```

``` bash
-p 端口映射：宿主机 3307 端口映射到 docker 实例的 3306 端口
--name 指定实例名称
-v 将宿主机的文件路径挂载到容器的路径
-e 配置环境变量，这里是配置了数据库的密码
-dit其它的选项，d：让容器在后台运行； i：保持标准输出打开； t：分配一个tty
```

> 小提示，命令行参数，一般来说，宿主机的信息在前，`docker` 容器信息在后。如进行端口映射： `0.0.0.0:3307:3306`
