# `PHP` 与 `Nginx`的结合

- `nginx`：web服务器，反向代理软件
- `PHP`：脚本语言
- `php-fpm`：默认监听9000端口，处理来自nginx转发的任务。
用户发起网络请求时，对请求进行判断，PHP文件的时候，nginx会把请求转交给php-fpm监听的端口（在nginx的配置文件里面设置）。

整个流程：
浏览器发起请求
nginx处理进行转发（这就是所谓的负载均衡），转发到php-fpm监听的端口
php-fpm应该是php的一个进程管理工具，它把nginx的请求用CGI的形式告诉给PHP
PHP返回执行结果，再由php-fpm告诉nginx
nginx把结果返回给浏览器
### fastcgi_split_path_info
把uri分解成fastcgi_script_name和fastcgi_path
### try_files
### fastcgi_param
