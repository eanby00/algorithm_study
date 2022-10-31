"use strict";
// https://www.acmicpc.net/problem/10773
// 제로
exports.__esModule = true;
// stack에 더해야 하는 수를 저장한다.
// 배열의 push와 pop을 이용해 stack을 구현한다.
// 0을 만나면 stack에서 pop하여 가장 최근의 값을 제거한다.
// 모든 수가 stack에 들어오면 stack의 수를 합치고 출력한다.
// reduce함수를 이용해 구현할 수 있다.
var fs = require("fs");
var inputs = fs
    .readFileSync("inputs.txt")
    .toString()
    .trim()
    .split("\n")
    .map(function (input) { return parseInt(input); });
var K = inputs[0], values = inputs.slice(1);
var stack = [];
values.forEach(function (value) {
    if (value === 0) {
        stack.pop();
    }
    else {
        stack.push(value);
    }
});
var answer = stack.reduce(function (prev, current) { return prev + current; }, 0);
console.log(answer);
