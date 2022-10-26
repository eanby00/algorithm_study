"use strict";
// https://www.acmicpc.net/problem/18258
exports.__esModule = true;
var fs = require("fs");
var Node = /** @class */ (function () {
    function Node(item) {
        this.next = null;
        this.item = item;
    }
    return Node;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    Queue.prototype.push = function (item) {
        var node = new Node(item);
        if (this.length === 0) {
            this.head = node;
        }
        else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length += 1;
    };
    Queue.prototype.pop = function () {
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
                this.head = node.next;
            }
            this.length -= 1;
            return node.item;
        }
    };
    Queue.prototype.size = function () {
        return this.length;
    };
    Queue.prototype.empty = function () {
        if (this.length === 0) {
            return 1;
        }
        else {
            return 0;
        }
    };
    Queue.prototype.front = function () {
        if (this.length === 0) {
            return -1;
        }
        else {
            return this.head.item;
        }
    };
    Queue.prototype.back = function () {
        if (this.length === 0) {
            return -1;
        }
        else {
            return this.tail.item;
        }
    };
    return Queue;
}());
var inputs = fs.readFileSync('inputs.txt').toString().trim().split("\n");
var number = parseInt(inputs[0]);
var anwser = [];
var queue = new Queue();
for (var i = 1; i <= number; ++i) {
    var _a = inputs[i].trim().split(" "), command = _a[0], item = _a[1];
    switch (command) {
        case 'push':
            queue.push(parseInt(item));
            break;
        case 'pop':
            anwser.push(queue.pop());
            break;
        case 'size':
            anwser.push(queue.size());
            break;
        case 'empty':
            anwser.push(queue.empty());
            break;
        case 'front':
            anwser.push(queue.front());
            break;
        case 'back':
            anwser.push(queue.back());
            break;
    }
}
console.log(anwser.join('\n'));
