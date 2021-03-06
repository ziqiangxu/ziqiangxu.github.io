# `Qt` 开发注意事项

使用 `PyQt 5.11` 开发时（版本不同也需要特别注意）

## 使用 `QSlider` 的时候进行如下操作

1. 使用 `setValue()` 会触发 `valueChanged` 事件
2. 默认最大值是 99，直接设置大于 99 的值，仍然是 99，所以需要事先设置一个 `maximum` 值
3. 当更改最大值最小值的时候需要特别注意，如果原本 `QSlider` 的值超出了新设置的值域，也会触发 `valueChanged` 事件。

这些隐式地触发 `valueChanged` 事件，可能会让程序大部分时间是正常的，比较复杂，难以调试。我们可以使用一些技巧避免发生这样的情况

## 解决办法

1. 一旦 `QSlider` 的值域设置好了，尽量不要修改
2. 如果一定要修改，务必小心，可在进行操作前断开信号槽连接，避免发送多余的信号。