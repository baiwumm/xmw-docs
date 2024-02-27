---
title: 如何解决跨域
---

# {{ $frontmatter.title }}

## 为什么会产生跨域

::: tip
跨域问题主要源于浏览器的[同源策略](https://baike.baidu.com/item/%E5%90%8C%E6%BA%90%E7%AD%96%E7%95%A5/3927875?fr=ge_ala)。该策略旨在保护客户端和服务器免受恶意攻击。当一个源（通常是 `A` 源）的网页尝试向另一个源（通常 `B` 源）的服务器地址发送请求时，如果不满足同源策略的要求，如协议、域名或端口不一致，那么就会产生跨域。
:::

## JSONP

原理：由于 `script` 标签不受浏览器同源策略的影响，允许跨域引用资源。因此可以通过动态创建 `script` 标签，然后利用 `src` 属性进行跨域，这也就是 `JSONP` 跨域的基本原理。

```js
// 1. 定义一个 回调函数 handleResponse 用来接收返回的数据
function handleResponse(data) {
  console.log(data);
}

// 2. 动态创建一个 script 标签，并且告诉后端回调函数名叫 handleResponse
var body = document.getElementsByTagName("body")[0];
var script = document.gerElement("script");
script.src = "http://www.laixiangran.cn/json?callback=handleResponse";
body.appendChild(script);

// 3. 通过 script.src 请求 `http://www.laixiangran.cn/json?callback=handleResponse`，
// 4. 后端能够识别这样的 URL 格式并处理该请求，然后返回 handleResponse({"name": "laixiangran"}) 给浏览器
// 5. 浏览器在接收到 handleResponse({"name": "laixiangran"}) 之后立即执行 ，也就是执行 handleResponse 方法，获得后端返回的数据，这样就完成一次跨域请求了。
```

缺点：只支持 `GET` 请求。由于是从其它域中加载代码执行，因此如果其他域不安全，很可能会在响应中夹带一些恶意代码。要确定 `JSONP` 请求是否失败并不容易。虽然 `HTML5` 给 `script` 标签新增了一个 `onerror` 事件处理程序，但是存在兼容性问题，且受到 `XSS` 攻击的风险。

## 跨域资源共享（CORS）

`CORS` 需要浏览器和服务器同时支持。整个 `CORS` 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，`CORS` 通信与同源的 `AJAX` 通信没有差别，代码完全一样。浏览器一旦发现 `AJAX` 请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

因此，实现 `CORS` 通信的关键是服务器。只要服务器实现了 `CORS` 接口，就可以跨源通信。

服务端配置：

::: warning

1. Access-Control-Allow-Origin：该头部指定哪些源站是允许访问的。可以使用通配符 "\*" 表示允许所有来源，或者指定具体的源站地址。
2. Access-Control-Allow-Methods：该头部指定允许的 HTTP 方法。通常指定 GET、POST、PUT、DELETE 等方法。
3. Access-Control-Allow-Headers：该头部指定允许的 HTTP 请求头部。例如，可以指定 X-Requested-With、Content-Type 等头部。
4. Access-Control-Allow-Credentials：该头部指定是否允许发送 Cookie、授权头等数据。如果设置为 true，则表示允许发送这些数据；否则，表示禁止发送这些数据。
   :::

`NodeJS` 代码：

```js
var http = require("http");
var server = http.createServer();
var qs = require("querystring");

server.on("request", function (req, res) {
  var postData = "";

  // 数据块接收中
  req.addListener("data", function (chunk) {
    postData += chunk;
  });

  // 数据接收完毕
  req.addListener("end", function () {
    postData = qs.parse(postData);

    // 跨域后台设置
    res.writeHead(200, {
      "Access-Control-Allow-Credentials": "true", // 后端允许发送Cookie
      "Access-Control-Allow-Origin": "http://www.domain1.com", // 允许访问的域（协议+域名+端口）
      /*
       * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代理可以实现)，
       * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问
       */
      "Set-Cookie": "l=a123456;Path=/;Domain=www.domain2.com;HttpOnly", // HttpOnly的作用是让js无法读取cookie
    });

    res.write(JSON.stringify(postData));
    res.end();
  });
});

server.listen("8080");
console.log("Server is running at port 8080...");
```

## 反向代理

跨域是浏览器的保护机制，如果绕过浏览器，使用代理服务器去请求目标服务器上的数据，就不会受跨域影响。因此前端可以通过脚手架或 `webpack` 配置 `devSever` 下的 `proxy` 选项，将 `/api` 开头的请求转发到真实服务器上。

```js
module.exports = {
  entry: {},
  module: {},
  ...
  devServer: {
      historyApiFallback: true,
      proxy: [{
          context: '/login',
          target: 'http://www.domain2.com:8080',  // 代理跨域目标接口
          changeOrigin: true,
          secure: false,  // 当代理某些https服务报错时用
          cookieDomainRewrite: 'www.domain1.com'  // 可以为false，表示不修改
      }],
      noInfo: true
  }
}
```

在生产环境下也可以使用 nginx 配置反向代理来解决跨域：

```nginx
#proxy服务器
server {
  listen       81;
  server_name  www.domain1.com;

  location / {
    proxy_pass   http://www.domain2.com:8080;  #反向代理
    proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
    index  index.html index.htm;

    # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
    add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
    add_header Access-Control-Allow-Credentials true;
  }
}
```
