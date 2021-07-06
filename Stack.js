"use strict";
exports.__esModule = true;
var list_1 = require("./list");
var Stack = /** @class */ (function () {
    function Stack(value) {
        this.headS = new list_1["default"](value);
    }
    Stack.prototype.push = function (value) {
        this.headS.insertFirst(value);
    };
    Stack.prototype.pop = function () {
        return this.headS.deleteFirst();
    };
    return Stack;
}());
exports["default"] = Stack;
/*const stack = new Stack(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());*/ 
