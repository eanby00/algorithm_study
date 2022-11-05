"use strict";
// https://www.acmicpc.net/problem/11723
// 집합
exports.__esModule = true;
// 해당 문제의 메모리 제한이 짧은 것을 고려
// length가 21인 배열을 생성, 배열은 boolean값을 가짐
// boolean값과 해당하는 index에 기반하여 해당 문제를 풀어보자
// boolean으로 조절하니 메모리 초과가 발동함
// number로 조정해도 메모리 초과가 발동함
// switch문을 안 쓰려고 하니 메모리 초과가 날수도 있다고 생각해서 switch문을 사용해본다.
// 기존 방식은 아무래도 커맨드의 종류를 가지는 배열을 추가로 가져야 하기 때문에
var fs = require("fs");
var Set = /** @class */ (function () {
    function Set() {
        var _this = this;
        this.set = [];
        this.add = function (x) {
            _this.set[x] = 1;
        };
        this.remove = function (x) {
            _this.set[x] = 0;
        };
        this.check = function (x) {
            return _this.set[x];
        };
        this.toggle = function (x) {
            _this.set[x] = Math.abs(_this.set[x] - 1);
        };
        this.all = function () {
            _this.set = new Array(21).fill(1);
        };
        this.empty = function () {
            _this.set = new Array(21).fill(0);
        };
        this.empty();
    }
    return Set;
}());
var commandType = [
    'add',
    'remove',
    'check',
    'toggle',
    'all',
    'empty',
];
var isCommand = function (command) {
    return commandType.includes(command);
};
var INPUT_LOCATION = 'inputs.txt';
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n')
    .map(function (line) { return line.trim().split(' '); });
var commands = inputs.slice(1);
var set = new Set();
for (var _i = 0, commands_1 = commands; _i < commands_1.length; _i++) {
    var _a = commands_1[_i], command = _a[0], x = _a[1];
    switch (command) {
        case 'add':
            set.add(parseInt(x));
            break;
        case 'remove':
            set.remove(parseInt(x));
            break;
        case 'check':
            console.log(set.check(parseInt(x)));
            break;
        case 'toggle':
            set.toggle(parseInt(x));
            break;
        case 'all':
            set.all();
            break;
        case 'empty':
            set.empty();
            break;
    }
}
