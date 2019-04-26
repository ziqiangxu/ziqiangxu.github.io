`pip` 安装数据库驱动 `mysqlclient` 的时候出现 `mysql_config not found` 错误
在终端运行`sudo apt install libmysqld-dev`
`Python3` 连接 `MySQL`，使用扩展库 `pymysql`。若使用django的数据库模型，需要在项目或`APP`的 `__init__.py` 添加如下代码:

``` python
import pymysql
pymysql.install_as_MySQLdb()
```
不然可能出现 `No module named MySQLdb` 的错误
