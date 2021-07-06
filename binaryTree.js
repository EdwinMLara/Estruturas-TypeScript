"use strict";
exports.__esModule = true;
var queque_1 = require("./queque");
var NodeBT = /** @class */ (function () {
    function NodeBT(data, height) {
        if (height === void 0) { height = 0; }
        this.data = data;
        this.height = height;
        this.left = null;
        this.right = null;
    }
    return NodeBT;
}());
var BTree = /** @class */ (function () {
    function BTree(data) {
        this.root = new NodeBT(data);
    }
    BTree.prototype.insert = function (data, child) {
        var parent = ((child === undefined) ? this.root : child);
        if (parent.data < data) {
            parent.right === null ? parent.right = new NodeBT(data, parent.height + 1) : this.insert(data, parent.right);
        }
        else {
            parent.left === null ? parent.left = new NodeBT(data, parent.height + 1) : this.insert(data, parent.left);
        }
    };
    BTree.prototype.preOrdenFindMaxHeigh = function (maxHeight, child) {
        var parent = ((child === undefined) ? this.root : child);
        if (parent !== null) {
            var aux = this.preOrdenFindMaxHeigh(maxHeight, parent.left);
            if (aux > maxHeight[0]) {
                maxHeight[0] = aux;
            }
            aux = this.preOrdenFindMaxHeigh(maxHeight, parent.right);
            if (aux > maxHeight[0]) {
                maxHeight[0] = aux;
            }
        }
        else {
            return 0;
        }
        return parent.height;
    };
    /**Recorrido en Anchura */
    BTree.prototype.ordenPorNivel = function () {
        var queue = new queque_1["default"](this.root);
        var auxNodeBT;
        while (!queue.isEmpty()) {
            auxNodeBT = queue.dequeue();
            console.log(auxNodeBT.data);
            if (auxNodeBT.left !== null) {
                queue.enqueue(auxNodeBT.left);
            }
            if (auxNodeBT.right !== null) {
                queue.enqueue(auxNodeBT.right);
            }
        }
    };
    return BTree;
}());
exports["default"] = BTree;
