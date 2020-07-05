# ziqiangxu.github.io

基于 `vuepress` 的文档管理系统

## 使用场景

- 管理技术文档
- 管理个人博客

``` bash
# Now using node v14.5.0 (npm v6.14.5)
npm run docs:build  # 构建文档
npm run docs:dev  # 监控md文件变化
```

## TODO

- [x] 解决中文目录的 url 问题
- [x] 增加到 `Git` 仓库的链接
- [x] 增加社交平台的评论插件
- [ ] 进入到具体的文章里时，用标题导航代替左侧栏

## 特性记录

### 目录标题生成

来自于目录下的 `info.json`

### 文章标题生成

如果文章第一行是一级标题则使用，否则使用文件名