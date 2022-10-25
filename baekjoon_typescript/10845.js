"use strict";
// https://www.acmicpc.net/problem/10845
exports.__esModule = true;
var fs = require("fs");
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
        if (!this.head) {
            return -1;
        }
        else {
            if (this.head === this.tail) {
                this.tail = null;
            }
            var item = this.head.item;
            this.head = this.head.next;
            this.length -= 1;
            return item;
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
        if (this.head) {
            return this.head.item;
        }
        else {
            return -1;
        }
    };
    Queue.prototype.back = function () {
        if (this.tail) {
            return this.tail.item;
        }
        else {
            return -1;
        }
    };
    return Queue;
}());
// "./dev/stdin"
var input = fs.readFileSync('inputs.txt').toString().trim().split("\n").map(function (v) { return v.trim(); });
var answer = [];
var N = parseInt(input[0]);
var queue = new Queue();
for (var i = 1; i <= N; ++i) {
    var _a = input[i].split(" "), command = _a[0], item = _a[1];
    switch (command) {
        case 'push':
            queue.push(parseInt(item));
            break;
        case 'pop':
            answer.push(queue.pop());
            break;
        case 'size':
            answer.push(queue.size());
            break;
        case 'empty':
            answer.push(queue.empty());
            break;
        case 'front':
            answer.push(queue.front());
            break;
        case 'back':
            answer.push(queue.back());
            break;
    }
}
console.log(answer.join('\n'));
