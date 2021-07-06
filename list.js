"use strict";
exports.__esModule = true;
exports.NodeL = void 0;
var NodeL = /** @class */ (function () {
    function NodeL(value) {
        this.data = value;
        this.next = null;
    }
    return NodeL;
}());
exports.NodeL = NodeL;
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = new NodeL(value);
    }
    LinkedList.prototype.insertFirst = function (value) {
        var aux = new NodeL(value);
        aux.next = this.head;
        this.head = aux;
    };
    LinkedList.prototype.insertLast = function (value, next) {
        var auxNode = ((next === undefined) ? this.head : next);
        if (auxNode !== null) {
            if (auxNode.next === null) {
                var aux = new NodeL(value);
                auxNode.next = aux;
            }
            else {
                this.insertLast(value, auxNode.next);
            }
        }
        else {
            this.head = new NodeL(value);
        }
    };
    LinkedList.prototype.size = function () {
        var aux = this.head;
        var auxSize = 0;
        while (aux !== null) {
            auxSize += 1;
            aux = aux.next;
        }
        return auxSize;
    };
    /*update(updatedValue: Type,newValue : Type, next ?: NextL) : boolean{
        let updatedStatus : boolean = false;
        let auxNode = ((next === undefined) ? this.head : next) as NodeL<Type>;
        if(auxNode.data.value === updatedValue){
            auxNode.data.value = newValue;
            return true;
        }else{
            auxNode.next != null && (updatedStatus = this.update(updatedValue,newValue,auxNode.next));
        }
        return updatedStatus;
    }*/
    LinkedList.prototype.deleteFirst = function () {
        var dataDelete = this.head.data;
        var auxDelete = this.head.next;
        this.head = auxDelete;
        return dataDelete;
    };
    LinkedList.prototype["delete"] = function (value, next) {
        var _a;
        var auxPrev = ((next === undefined) ? this.head : next);
        if (auxPrev.data === value) {
            var auxDelete = this.head.next;
            this.head = auxDelete;
        }
        else if (((_a = auxPrev.next) === null || _a === void 0 ? void 0 : _a.data) === value) {
            auxPrev.next = auxPrev.next.next;
        }
        else {
            this["delete"](value, auxPrev.next);
        }
        return true;
    };
    LinkedList.prototype.printList = function () {
        var strResult = "";
        var aux = this.head;
        while (aux !== null) {
            strResult += aux.data + " ";
            aux = aux.next;
        }
        return strResult;
    };
    LinkedList.prototype.removeDuplicates = function () {
        var aux = this.head;
        var nodeCheck = aux.next;
        while (aux !== null) {
            while (nodeCheck !== null) {
                if (aux.data === nodeCheck.data) {
                    this["delete"](aux.data);
                    break;
                }
                else {
                    nodeCheck = nodeCheck.next;
                }
            }
            if (aux.next !== null) {
                aux = aux.next;
                nodeCheck = aux.next;
            }
            else {
                aux = aux.next;
            }
        }
    };
    return LinkedList;
}());
exports["default"] = LinkedList;
