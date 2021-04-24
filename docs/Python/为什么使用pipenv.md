# `Python` 依赖包管理

转了一圈，又回到了 `pipenv`, 它确实是更加现代的包管理工具，它是 `pip` 和 `virtualenv` 的结合体
它主要的改进在 `Pipfile.lock` 文件，它比一个纯文本的 `requirements.txt` 文件表达力要强得多。
更重要的是用 `pipreqs` 或 `freeze` 导出的包名、版本（生成一个 `requirements.txt` 文件）并不完全正确，它们是不可靠的，而 `pipenv` 是可靠的。

## 为什么说 `pipenv` 是可靠的

1. 而 `pipenv` 是在你安装依赖的时候就进行记录，理论上这是完全可靠的，这可以保证准确地记录你所安装的包，实际上也是可靠的。
2. `pipenv` 使用 `Pipenv.lock` 文件记录了 `Python` 版本、软件包 `hash` 值、软件包版本、`pip` 仓库地址等重要信息。
3. `Pipfile` 拥有独立的解析步骤，且不需要先将套件实际安装至环境中，当你将一个会破坏依赖结构的包加入 `Pipfile` 时，locking就会直接告知你这个依赖无法被解析。【这个特性在进行软件包更新的时候尤其有用，[更多细节](https://lax.v2ex.com/t/461581)】

## 为什么 `freeze` 不可靠和举例

1. `pipreqs` 和 `freeze` 这种工具是根据代码中的导入语句来进行分析，很有可能会出错，理论上是可靠的，但是实际上有副作用，因为这个过程比想象中的复杂。
2. 比如说你有一个自定义的包叫 `config` ，然而`pip` 软件源里有`config` 这个包，它们就会多导出一个config依赖，而实际上你不需要这个包，只是你的包和源里的包重名了而已。
3. 比如你的项目进行了 `yaml` 文件的读写， 用它们导出 `yaml` 相关的软件包试试？

[看 `pipenv` 项目的维护者说，它到底解决了什么？](https://lax.v2ex.com/t/461581)

``` bash
pip3 install pipenv  # 安装pipenv工具
pipenv install  # 从Pipfile.lock安装需要的依赖
pipenv bash  # 启动虚拟环境，需在有Pipfile的目录下执行此命令
```

更加详细的[指南](https://pipenv.readthedocs.io/en/latest/)

-------------------

## **以下内容已过时，今后不在项目中使用，但是对于非正式部署的项目仍然有价值**

## 导出开发环境需要的所有依赖包清单

使用pip freeze
`pip freeze > requirements.txt`

## 导出项目所需要的依赖包清单

使用`pipreqs`命令
安装pipreqs：`pip install pipreqs`
导出指定项目需要的依赖包：`pipreqs --savepath=[导出文件的路径] [项目目录]`

## 安装依赖包

`pip install -r [依赖文件清单]`

## 注意

用`pipreqs`或`freeze`导出的包名、版本并不完全正确，比如`yaml`相关的。
