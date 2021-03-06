# `Django` 开发微信公众号出现 `CSRF cookie not set` 错误

当用户向公众号发送消息的时候，使用
`python3 manage.py runserver 0.0.0.0:80`
出现错误 `Forbidden (CSRF cookie not set.): /wx`
这是 `Django` 默认开启的一种防止跨域攻击的选项，要求用 `POST` 访问网站的时候提供 `CSRF cookie`（这个一般会在用户使用 `GET` 请求 `Django` 网站时颁发）
截图
![DeepinScreenshot_select-area_20171017210442.png](./img/pic1.png)
此时，只要把项目中 `setting.py` 文件中

``` python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

第四行注释掉即可，关闭整个项目的 `CSRF`，这种方法可以快速解决这个问题
但是只关闭对应的 `url` 的处理函数更加优雅（请搜索 *局部关闭 `crsf`*）
