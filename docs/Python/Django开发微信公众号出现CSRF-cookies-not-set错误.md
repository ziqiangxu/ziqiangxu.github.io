当用户向公众号发送消息的时候，使用
```python3 manage.py runserver 0.0.0.0:80```
出现如下错误
```Forbidden (CSRF cookie not set.): /wx```
这是django默认开启的一种防止跨域攻击的选项，要求用POST访问网站的时候提供CSRF cookie（这个一般会在用户使用GET请求django网站时颁发）
截图
![DeepinScreenshot_select-area_20171017210442.png](http://upload-images.jianshu.io/upload_images/6434906-b0273ed1b982f173.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
此时，只要把项目setting.py中
```
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
第四行注释掉即可，关闭整个项目的CSRF，这种方法可以快速解决这个问题
但是只关闭对应的url的处理函数更加优雅（请搜索局部关闭crsf）
