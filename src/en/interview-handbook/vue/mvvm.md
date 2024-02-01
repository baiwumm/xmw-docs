---
title: Understanding of MVVM
---
# {{ $frontmatter.title }}
`MVVM` is a software architecture pattern, `MVVM` is divided into `Model`, `View`, `ViewModel` :

* `Model` stands for data Model, data and business logic are defined in the `Model` layer
* `View` stands for `UI` view and is responsible for the presentation of data
* `ViewModel` is responsible for listening for changes in the data in `Model` and controlling the update of the view, handling user interaction

`Model` and `View` are not directly related, but through `ViewModel` to be connected, `Model` and `ViewModel` have a two-way data binding connection. Therefore, when the data in the `Model` changes, the refresh of the `View` layer is triggered, and the data changed in the `View` due to user interaction will also be synchronized in the `Model`.