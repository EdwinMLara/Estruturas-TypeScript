"use strict";
exports.__esModule = true;
var queque_1 = require("./queque");
var NodeMMH = /** @class */ (function () {
    function NodeMMH(data) {
        this.data = data;
        this.left = null,
            this.right = null;
    }
    return NodeMMH;
}());
var MaxAndMinHean = /** @class */ (function () {
    function MaxAndMinHean(data) {
        this.root = new NodeMMH(data);
    }
    MaxAndMinHean.prototype.ordenPorNivel = function () {
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
    MaxAndMinHean.prototype.checkBalance = function (node) {
        var _a, _b;
        var auxRight = node.right === null ? 0 : node.right.right === null ? 1 : 2;
        if ((auxRight > 0) && (((_a = node.right) === null || _a === void 0 ? void 0 : _a.left) !== null)) {
            auxRight = 2;
        }
        var auxLeft = node.left === null ? 0 : node.left.left === null ? 1 : 2;
        if ((auxLeft > 0) && (((_b = node.left) === null || _b === void 0 ? void 0 : _b.right) !== null)) {
            auxLeft = 2;
        }
        return auxRight - auxLeft;
    };
    MaxAndMinHean.prototype.insert = function (data, child) {
        var parent = ((child === undefined) ? this.root : child);
        var balance = 0;
        if (parent.data < data) {
            parent.right === null ? parent.right = new NodeMMH(data) : this.insert(data, parent.right);
            balance = this.checkBalance(parent);
        }
        else {
            parent.left === null ? parent.left = new NodeMMH(data) : this.insert(data, parent.left);
            balance = this.checkBalance(parent);
        }
        if (-1 > balance || balance > 1) {
            switch (true) {
                case balance > 1:
                    this.rightBalance(parent.data);
                    break;
                case balance < -1:
                    this.leftBalance(parent.data);
                    break;
            }
        }
    };
    MaxAndMinHean.prototype.rightBalance = function (value) {
        var _a, _b;
        console.log("Right balancing node with " + value);
        var aux = this.root;
        if (aux.data === value) {
            if (((_a = aux.right) === null || _a === void 0 ? void 0 : _a.right) !== null) {
                this.root = aux.right;
                aux.right = null;
                this.root.left = aux;
            }
            else {
                var auxNode1 = aux.right;
                var auxNode2 = aux.right.left;
                auxNode2.right = auxNode1;
                auxNode1.left = null;
                auxNode2.left = aux;
                aux.right = null;
                this.root = auxNode2;
            }
        }
        else {
            while (aux.right !== null) {
                if (((_b = aux.right) === null || _b === void 0 ? void 0 : _b.data) === value) {
                    var auxNode = aux.right;
                    aux.right = aux.right.right;
                    auxNode.right = null;
                    aux.right.left = auxNode;
                    break;
                }
                aux = aux.right;
            }
        }
    };
    MaxAndMinHean.prototype.leftBalance = function (value) {
        var _a, _b;
        console.log("Left balancing node with " + value);
        var aux = this.root;
        if (aux.data === value) {
            if (((_a = aux.left) === null || _a === void 0 ? void 0 : _a.left) !== null) {
                this.root = aux.left;
                aux.left = null;
                this.root.right = aux;
            }
            else {
                var auxNode1 = aux.left;
                var auxNode2 = aux.left.right;
                auxNode2.left = auxNode1;
                auxNode1.right = null;
                auxNode2.right = aux;
                aux.left = null;
                this.root = auxNode2;
            }
        }
        else {
            while (aux.left !== null) {
                if (((_b = aux.left) === null || _b === void 0 ? void 0 : _b.data) === value) {
                    var auxNode = aux.left;
                    aux.left = aux.left.left;
                    auxNode.left = null;
                    aux.left.right = auxNode;
                    break;
                }
                aux.left;
            }
        }
    };
    return MaxAndMinHean;
}());
/**
 * balanceando a la izquierda
 */
var arbol = new MaxAndMinHean(4);
arbol.insert(3);
arbol.insert(2);
arbol.ordenPorNivel();
/**
 * balancenando a la derecha
 */
var arbol2 = new MaxAndMinHean(2);
arbol2.insert(3);
arbol2.insert(4);
arbol2.ordenPorNivel();
/**
 * balanceo de derecha a izquierda
 */
var arbol3 = new MaxAndMinHean(2);
arbol3.insert(5);
arbol3.insert(4);
arbol3.ordenPorNivel();
/**
* balanceando de izquierda a derecha
*/
var arbol4 = new MaxAndMinHean(5);
arbol4.insert(2);
arbol4.insert(4);
arbol4.ordenPorNivel();
