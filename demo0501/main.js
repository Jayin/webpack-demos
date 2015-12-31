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