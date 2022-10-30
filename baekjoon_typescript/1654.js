"use strict";
// https://www.acmicpc.net/problem/1654
// 랜선 자르기
exports.__esModule = true;
var fs = require("fs");
var findAnswer = function (lines, N) {
    var low = 1;
    var high = Math.max.apply(Math, lines);
    var answer = 0;
    var _loop_1 = function () {
        var mid = Math.floor((low + high) / 2);
        var cnt = lines.reduce(function (prev, current) { return prev + Math.floor(current / mid); }, 0);
        if (cnt >= N) {
            if (mid > answer) {
                answer = mid;
            }
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    };
    while (low < high) {
        _loop_1();
    }
    return answer;
};
var inputs = fs
    .readFileSync("inputs.txt")
    .toString()
    .trim()
    .split("\n");
var N = parseInt(inputs[0].trim().split(" ")[1]);
var _a = inputs.map(function (input) { return parseInt(input.trim()); }), lines = _a.slice(1);
console.log(findAnswer(lines, N));
