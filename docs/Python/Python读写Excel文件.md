# `Python` 读写 `Excel` 表格文件

## 常用库

- `openpyxl`： 读写 `xlsx` 格式的，可直接对表格文件进行修改
- `xlrd`: `xls` 和 `xlsx` 读取
- `xlwt`：`xls` 和 `xlsx` 写入，不能基于现有表格进行修改，只能直接创建

## 注意事项

`openpyxl` 的索引是从 1 开始的，而 `xlrd` 和 `xlwt` 是从 0 开始的。
 
 <comment-comment/> 
 