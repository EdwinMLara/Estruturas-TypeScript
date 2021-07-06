"use strict";
exports.__esModule = true;
var list_1 = require("./list");
var Queue = /** @class */ (function () {
    function Queue(value) {
        this.headQ = new list_1["default"](value);
    }
    Queue.prototype.isEmpty = function () {
        if (this.headQ.head === null) {
            return true;
        }
        else {
            return false;
        }
    };
    Queue.prototype.size = function () {
        return this.headQ.size();
    };
    Queue.prototype.enqueue = function (value) {
        this.headQ.insertLast(value);
    };
    Queue.prototype.dequeue = function () {
        return this.headQ.deleteFirst();
    };
    Queue.prototype.peak = function () {
        return this.headQ.head.data;
    };
    return Queue;
}());
exports["default"] = Queue;
/*const queue = new Queue(1);
console.log(queue.dequeue());
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.isEmpty());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
console.log(queue.isEmpty());*/ 
