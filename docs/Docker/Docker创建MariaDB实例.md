# `Docker` 创建 `MariaDB` 实例

## 安装docker

[参考链接](https://yeasy.gitbooks.io/docker_practice/install/)

## docker创建mariadb数据库记录

``` shell
docker run -p 0.0.0.0:3307:3306 \
--name maraidb_for_cloud_printing \
-v $PWD/mariadb_for_cloud_printing_data:/mariadb_data \
-e MYSQL_ROOT_PASSWORD=abc123mariadb \
-dit mariadb
```
-p 端口映射：宿主机3307映射docker实例的3306
--name 指定实例名称
-v 数据存放目录
-e 配置环境变量，这里是配置了数据库的密码
-dit其它的选项
