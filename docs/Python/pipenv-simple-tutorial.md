---
date: 2021/04/24
title: pipenv简要教程
---
``` bash
# 安装 `pipenv` 命令
pip3 install pipenv
pipenv --version # 请保证 ~/.local/bin 被添加到 PATH 环境变量中
```

## 创建虚拟环境

在项目根目录执行
`pipenv shell --python path/to/specified/python`

使用指定版本的 `python` 解释器来创建虚拟环境，在执行成功后，项目根目录会自动生成一个`Pipfile`。

``` toml
# Pipfile文件的内容
[[source]]
# 软件源相关设置
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[packages]
# 项目运行时需要的依赖包

[dev-packages]
# 项目开发时需要的依赖包

[requires]
python_version = "3.6"
```

> `python` 的多版本管理推荐使用 `miniconda`

## 使用虚拟环境

> 特别注意：以下命令均需要在项目根目录执行

``` bash
# 激活项目的虚拟环境
pipenv shell

# 安装运行时依赖包，执行成功后软件包将被添加到 Pipfile 的 packages 下
pipenv install xxx==0.0.1

# 安装开发依赖包，执行成功后软件包将被添加到 Pipfile 的 dev-packages 下
pipenv install --dev xxx==0.0.1
```

在上述命令执行结束之后，会有一个 `Pipfile.lock` 文件生成，这个 `Pipfile.lock` 记录了「依赖包」和「依赖包的依赖」的信息，这些信息包含名字、具体版本、`markers`、`hash`和安装源。

> 特别注意：`Pipfile` 和 `Pipfile.lock` 这两个文件务必纳入版本管理。
> 直接使用 `pip` 命令安装软件包不会更新 `Pipfile` 和 `Pipfile.lock`

## 利用Pipfile和Pipfile.lock快速恢复虚拟环境

得益于 `Pipfile.lock` 强大的表达能力，它可以很准确地描述一个虚拟环境。

``` bash
# 假设某项目结构如下所示
pipenv-test/
├── appname
│   └── test.py
├── Pipfile
└── Pipfile.lock
```

我们使用以下命令就可以快速创建一个尽可能一致的环境

``` bash
cd pipenv-test
pipenv shell --python path/to/specified/python  # 创建虚拟环境
pipenv install  # 安装运行时依赖包
pipenv install --dev  # 安装包括开发时需要的依赖包
```
