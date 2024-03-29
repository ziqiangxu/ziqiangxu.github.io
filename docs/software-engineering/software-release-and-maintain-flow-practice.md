---
title: 软件发布和维护流程实践
date: 2021-11-07
---
> 哎，命名真是一件困难的事情！！！

在软件的整个生命周期中，测试和维护是十分重要的几个环节。

---
根据[语义化版本管理规范](https://semver.org/lang/zh-CN/)，版本使用这样的形式：

- major.minor.patch-{addtional lables}
- 主版本号.次版本号.修订号-额外标签

如：

- `1.0.0-beta.3+amd64`
- `1.0.0-beta.3`
- `1.0.0`

额外标签一般由先行版本和编译信息构成

## 软件的各个阶段

1. 开发，规划好各个版本应该具备的功能
2. 构建，使用语义化版本管理规范，编写更新文档
3. 测试，将程序部署到测试环境，并准备好前置条件，对各项功能进行完整的测试，发现影响使用的缺陷则再次回到开发阶段
4. 部署，将程序部署到生产环境，用户开始使用
5. 维护，用户发现问题，反馈给开发人员

### 1. 开发阶段

需要做好版本的规划，在 1.2.x 要加入什么功能， 1.3.x 要加入什么功能。如果不做规划，软件一直在开发过程中，迟迟无法发布，也得不到用户的反馈。

当然，规划也应根据业务的需要再做适当的调整。

规划版本的功能开发完毕，基本的测试通过（主要是单元测试和 UI 测试），则进入构建阶段。

### 2. 构建阶段

根据规划给构建好的软件做好版本标记，并发布更新日志。
> 一定要将版本信息放到用户容易获得的地方，方便报告缺陷，特别是在你不清楚用户使用的哪个版本的时候。

### 3. 测试阶段

将构建好的程序部署到测试环境，并准备好前置条件，安排测试人员对各项功能进行完整的测试，并对发现的缺陷进行等级划分（产品经理），根据缺陷的级别确定是否发布到线上系统。
> 在没有专职的测试人员的时候，建议编写一个测试用例模板文件，由各开发人员轮流承担测试工作，并填写相应的用例模板作为测试报告。

### 4. 部署阶段

将软件部署到生产环境，并将更新日志通知到用户。

### 5. 维护阶段

软件势必会有缺陷，我们应当给用户提供一个便于报告缺陷的途径。

## 如何修复一个线上系统的缺陷？

假设线上系统版本为 1.2.0, 此版本代码分支为 1.2.x。开发人员在紧锣密鼓地开发 1.3.0, 代码分支为 1.3.x。

此时线上系统发现了缺陷，我们收到了缺陷的报告。先确定该缺陷的级别（产品经理），如果不需要立即修复或者难以立马修复则规划到下一个次版本（1.3.0）中。需要立即修复，则按照如下的流程进行：

- 切换到线上系统所在的代码分支 1.2.x
- 基于线上系统的代码分支创建一个补丁分支
- 修复问题之后请求合并到 1.2.x 和 1.3.x 分支，这样后续的 1.3.x 也可以获得这个缺陷的修复
- 进入构建阶段，并将版本更新为 1.2.1，编写更新日志
- 进入测试阶段，由于此次更新是一个较小的缺陷的修复，只对该缺陷对应的范围进行测试即可
- 发布到生产环境

按照这种流程维护，简化后的代码分支结构图如下所示（可通过 `git log --graph` 获得类似的字符图像）：

``` bash
|      (1.4.x分支)
|     /
|    /
1.4.0
|
* __      (1.3.x 分支，线上运行的版本）
|    \   /
|     \ /
|      1.3.1
|     /
|    /
1.3.0       
|            
* _____      (1.2.x 分支，线上运行的版本，随着 1.3.0 的发布，应当下线)
|       \   /
|        \ / 
* __     1.2.2
|    \   /
|     \ /
|      1.2.1
|     /
|    /
1.2.0
|
```
