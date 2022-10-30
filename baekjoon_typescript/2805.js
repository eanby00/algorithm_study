"use strict";
exports.__esModule = true;
// https://www.acmicpc.net/problem/2805
// 나무자르기
var fs = require("fs");
var inputs = fs
    .readFileSync("inputs.txt")
    .toString()
    .trim()
    .split("\n");
var m = parseInt(inputs[0].trim().split(" ")[1]);
var trees = inputs[1]
    .trim()
    .split(" ")
    .map(function (tree) { return parseInt(tree); });
var low = 1;
var high = Math.max.apply(Math, trees);
var answer = 0;
var _loop_1 = function () {
    var mid = Math.floor((low + high) / 2);
    var getTrees = trees.reduce(function (prev, current) {
        if (current >= mid) {
            return prev + (current - mid);
        }
        else {
            return prev + 0;
        }
    }, 0);
    console.log(low, mid, high, getTrees);
    if (getTrees >= m) {
        // getTrees 줄이기 => mid를 높이기 => low를 높이기
        low = mid + 1;
        if (mid > answer) {
            answer = mid;
            console.log(answer);
        }
    }
    else {
        high = mid - 1;
    }
};
while (low <= high) {
    _loop_1();
}
console.log(answer);
