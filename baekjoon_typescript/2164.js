"use strict";
exports.__esModule = true;
// https://www.acmicpc.net/problem/2164
var readline = require("readline");
var Node = /** @class */ (function () {
    function Node(item) {
        this.item = item;
        this.next = null;
    }
    return Node;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    Queue.prototype.push = function (item) {
        var node = new Node(item);
        if (!this.head) {
            this.head = node;
            this.head.next = this.tail;
        }
        else if (this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
        this.length += 1;
    };
    Queue.prototype.popLeft = function () {
        var item;
        if (this.head) {
            item = this.head;
            this.head = this.head.next;
            this.length -= 1;
            return item;
        }
        else {
            return null;
        }
    };
    Queue.prototype.getHead = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.item;
    };
    return Queue;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var input;
rl.on('line', function (line) {
    input = parseInt(line.trim());
    rl.close();
});
rl.on('close', function () {
    var numbers = new Queue();
    Array(input).fill(0).map(function (value, index) { return numbers.push(index + 1); });
    while (numbers.length > 1) {
        numbers.popLeft();
        var second = numbers.popLeft();
        if (second) {
            numbers.push(second.item);
        }
    }
    console.log(numbers.getHead());
});
