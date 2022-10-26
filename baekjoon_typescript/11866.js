"use strict";
exports.__esModule = true;
// https://www.acmicpc.net/problem/11866
var fs = require("fs");
var Node = /** @class */ (function () {
    function Node(item) {
        this.item = item;
        this.next = null;
    }
    return Node;
}());
var circleQueue = /** @class */ (function () {
    function circleQueue(size) {
        this.size = 0;
        this.prev = null;
        this.queueSize = size;
        this.tail = null;
    }
    circleQueue.prototype.push = function (item) {
        var node = new Node(item);
        if (this.size === 0) {
            node.next = node;
        }
        else {
            node.next = this.tail.next;
            this.tail.next = node;
        }
        this.tail = node;
        this.size += 1;
    };
    circleQueue.prototype.pop = function (space) {
        var prevTarget;
        var target;
        if (this.prev) {
            target = this.prev;
        }
        else {
            target = this.tail;
        }
        for (var i = 0; i < space; ++i) {
            prevTarget = target;
            target = target.next;
        }
        this.prev = target;
        prevTarget.next = target.next;
        return target.item;
    };
    return circleQueue;
}());
var inputs = fs.readFileSync('inputs.txt').toString().trim().split(" ")
    .map(function (input) { return parseInt(input); });
var number = inputs[0], space = inputs[1];
var queue = new circleQueue(number);
for (var i = 1; i <= number; ++i) {
    queue.push(i);
}
var answer = [];
for (var i = 0; i < number; ++i) {
    answer.push(queue.pop(space));
}
console.log("<" + answer.join(', ') + ">", answer.length);
