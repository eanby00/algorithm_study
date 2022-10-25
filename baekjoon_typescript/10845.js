"use strict";
exports.__esModule = true;
// https://www.acmicpc.net/problem/10845
var readline = require("readline");
var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
        this.queueSize = 0;
        this.frontIndex = null;
        this.rearIndex = 0;
        this.lastIndex = null;
        this.length = 0;
    }
    Queue.prototype.setQueueSize = function (queueSize) {
        this.queue = Array(queueSize);
        this.queueSize = queueSize;
    };
    Queue.prototype.push = function (item) {
        this.queue[this.rearIndex] = item;
        if (this.rearIndex === 0) {
            this.frontIndex = 0;
        }
        this.lastIndex = this.rearIndex;
        this.rearIndex = this.rearIndex + 1;
        this.length += 1;
    };
    Queue.prototype.pop = function () {
        if (this.length !== 0) {
            console.log(this.queue[this.frontIndex]);
            this.frontIndex += 1;
            this.length -= 1;
        }
        else {
            console.log(-1);
        }
    };
    Queue.prototype.size = function () {
        console.log(this.length);
    };
    Queue.prototype.empty = function () {
        if (this.length === 0) {
            console.log(1);
        }
        else {
            console.log(0);
        }
    };
    Queue.prototype.front = function () {
        if (this.length !== 0) {
            console.log(this.queue[this.frontIndex]);
        }
        else {
            console.log(-1);
        }
    };
    Queue.prototype.back = function () {
        if (this.length !== 0) {
            console.log(this.queue[this.lastIndex]);
        }
        else {
            console.log(-1);
        }
    };
    return Queue;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputNumber = 0;
var count = 0;
var queue = new Queue();
rl.on("line", function (line) {
    var input = line.trim();
    if (inputNumber === 0) {
        inputNumber = parseInt(input);
        queue.setQueueSize(inputNumber);
    }
    else {
        var _a = input.split(" "), command = _a[0], item = _a[1];
        switch (command) {
            case 'push':
                queue.push(parseInt(item));
                break;
            case 'pop':
                queue.pop();
                break;
            case 'size':
                queue.size();
                break;
            case 'empty':
                queue.empty();
                break;
            case 'front':
                queue.front();
                break;
            case 'back':
                queue.back();
                break;
        }
        count += 1;
    }
    if (inputNumber === count) {
        rl.close();
    }
});
