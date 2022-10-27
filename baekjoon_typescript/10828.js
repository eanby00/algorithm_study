"use strict";
exports.__esModule = true;
// https://www.acmicpc.net/problem/10828
var fs = require("fs");
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (item) {
        this.stack.push(item);
    };
    Stack.prototype.pop = function () {
        var item = this.stack.pop();
        if (item === undefined) {
            return -1;
        }
        else {
            return item;
        }
    };
    Stack.prototype.size = function () {
        return this.stack.length;
    };
    Stack.prototype.empty = function () {
        if (this.stack.length === 0) {
            return 1;
        }
        else {
            return 0;
        }
    };
    Stack.prototype.top = function () {
        if (this.stack.length === 0) {
            return -1;
        }
        else {
            return this.stack[this.stack.length - 1];
        }
    };
    return Stack;
}());
var inputs = fs.readFileSync('inputs.txt').toString().trim().split('\n');
var num = inputs[0], commands = inputs.slice(1);
var answer = [];
var stack = new Stack();
var methodType = ['push', 'pop', 'size', 'empty', 'top'];
function isMethodType(command) {
    return methodType.includes(command);
}
commands.forEach(function (line) {
    var command = line.trim().split(" ")[0];
    var item = line.trim().split(" ")[1];
    if (isMethodType(command)) {
        if (command !== 'push') {
            answer.push(stack[command]());
        }
        else {
            stack[command](parseInt(item));
        }
    }
});
console.log(answer.join('\n'));
