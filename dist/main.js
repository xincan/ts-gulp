"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function hello(compiler) {
    console.log("Hello from " + compiler);
}
hello("TypeScript hello");
console.log(greet_1.sayHello("TypeScript sayHello"));
document.body.innerHTML = greet_1.sayHello("TypeScript sayHello");
