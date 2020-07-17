# 将 `Gradle` 镜像源改为阿里源

1. 全局修改
文件`~/.gradle/init.gradle`
```
allprojects {
    repositories {
        maven {
            url "http://maven.aliyun.com/nexus/content/groups/public"
        }
    }
}
```
2. 根据项目修改
文件：项目根目录的文件`build.gradle`中
往`repositories`节点添加`maven{ url 'https://maven.aliyun.com/repository/public'} `
```
buildscript {
    repositories {
        maven{ url 'https://maven.aliyun.com/repository/public'}  // 修改1
        mavenCentral()  // maven官方的吧？
        mavenLocal()  // 本地仓库
        **************  // 其他镜像源，优先级较低
    }
}

repositories {
    maven{ url 'https://maven.aliyun.com/repository/public'}  // 修改2
    ************
}
```
