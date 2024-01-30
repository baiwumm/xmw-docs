---
title: MVVM 的理解
---
# MVVM 的理解
`MVVM` 是一种软件架构模式，`MVVM` 分为`Model`、`View`、`ViewModel`：

* `Model` 代表数据模型，数据和业务逻辑都在 `Model` 层中定义
* `View` 代表 `UI` 视图，负责数据的展示
* `ViewModel` 负责监听 `Model` 中数据的改变并且控制视图的更新，处理用户交互操作

`Model` 和 `View` 并无直接关联，而是通过 `ViewModel` 来进行联系的，`Model` 和 `ViewModel` 之间有着双向数据绑定的联系。因此当 `Model` 中的数据改变时会触发 `View` 层的刷新，`View` 中由于用户交互操作而改变的数据也会在 `Model` 中同步。