"use strict";
// https://www.acmicpc.net/problem/10866
exports.__esModule = true;
var fs = require("fs");
var Node = /** @class */ (function () {
    function Node(item) {
        this.item = item;
        this.prev = null;
        this.next = null;
    }
    return Node;
}());
var Deque = /** @class */ (function () {
    function Deque() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    Deque.prototype.push_front = function (item) {
        var node = new Node(item);
        if (this.length === 0) {
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
        }
        this.head = node;
        this.length += 1;
    };
    Deque.prototype.push_back = function (item) {
        var node = new Node(item);
        if (this.length === 0) {
            this.head = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
        }
        this.tail = node;
        this.length += 1;
    };
    Deque.prototype.pop_front = function () {
        if (this.length === 0) {
            return -1;
        }
        else {
            var node = this.head;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                node.next.prev = null;
                this.head = node.next;
            }
            this.length -= 1;
            return node.item;
        }
    };
    Deque.prototype.pop_back = function () {
        if (this.length === 0) {
            return -1;
        }
        else {
            var node = this.tail;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            }
            else {
                node.prev.next = null;
                this.tail = node.prev;
            }
            this.length -= 1;
            return node.item;
        }
    };
    Deque.prototype.size = function () {
        return this.length;
    };
    Deque.prototype.empty = function () {
        if (this.length === 0) {
            return 1;
        }
        else {
            return 0;
        }
    };
    Deque.prototype.front = function () {
        if (this.length === 0) {
            return -1;
        }
        else {
            return this.head.item;
        }
    };
    Deque.prototype.back = function () {
        if (this.length === 0) {
            return -1;
        }
        else {
            return this.tail.item;
        }
    };
    return Deque;
}());
var inputs = fs.readFileSync('inputs.txt').toString().trim().split("\n");
var deque = new Deque();
var answer = [];
var number = parseInt(inputs[0]);
for (var i = 1; i <= number; ++i) {
    var _a = inputs[i].trim().split(" "), command = _a[0], item = _a[1];
    switch (command) {
        case 'push_front':
            deque.push_front(parseInt(item));
            break;
        case 'push_back':
            deque.push_back(parseInt(item));
            break;
        case 'pop_front':
            answer.push(deque.pop_front());
            break;
        case 'pop_back':
            answer.push(deque.pop_back());
            break;
        case 'size':
            answer.push(deque.size());
            break;
        case 'empty':
            answer.push(deque.empty());
            break;
        case 'front':
            answer.push(deque.front());
            break;
        case 'back':
            answer.push(deque.back());
            break;
    }
}
console.log(answer.join('\n'));
