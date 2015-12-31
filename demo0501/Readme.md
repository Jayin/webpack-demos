## config

```js
module.exports = {
  entry: {
      main: ['./main.js']
  },
  output: {
    filename: 'bundle.js',
    path: '/',
    publicPath: "http://127.0.0.1:8080/"
  },
  module: {
    loaders:[
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  }
};
```


## js

```js
var img1 = document.createElement("img");
img1.src = require("./small.png");
console.log(img1.src)
document.body.appendChild(img1);

var img2 = document.createElement("img");
img2.src = require("./big.png");
console.log(img2.src)
document.body.appendChild(img2);

var img3 = document.createElement("img");
img3.src = require("./ad.jpg");
console.log(img3.src)
document.body.appendChild(img3);
```

output:

```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAASaUlEQ…EFJsjI4AxwO/jDYo8cAfKBXDLC+7p4bA/4jIyQZsn653b/C1dJenOXZifXAAAAAElFTkSuQmCC
http://127.0.0.1:8080/4853ca667a2b8b8844eb2693ac1b2578.png
http://127.0.0.1:8080/87755575618786790ddfb4e8499e1d8e.jpg
```