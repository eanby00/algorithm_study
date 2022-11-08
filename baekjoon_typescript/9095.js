"use strict";
// https://www.acmicpc.net/problem/9095
// 1, 2, 3 더하기
exports.__esModule = true;
// 가설
// 1을 나타내는 방법: 1
// 2를 나타내는 방법: 1 + 1, 2 => 2
// 3을 나타내는 방법: 1 + 1 + 1, 1 + 2, 2 + 1, 3 => 4
// 4를 나타내는 방법: 7
// 1+1+1+1 -> 3을 나타내는 방법 + 1
// 1+1+2 -> 2을 나타내는 방법 + 2
// 1+2+1 -> 3을 나타내는 방법 + 1
// 2+1+1 -> 3을 나타내는 방법 + 1
// 2+2 -> 2을 나타내는 방법 + 2
// 1+3 -> 1을 나타내는 방법 + 3
// 3+1 -> 3을 나타내는 방법 + 1
// n을 나타내는 방법 = (n-1)의 방법 + (n-2)의 방법 + (n-3)의 방법
// 5 -> 2 + 4 + 7 = 13
// 6 -> 4 + 7 + 13 = 24
// 7 => 7 + 13 + 24 = 44
var fs = require("fs");
var INPUT_LOCATION = 'inputs.txt';
var inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
var _a = inputs.map(function (input) { return parseInt(input.trim()); }), n = _a[0], testCases = _a.slice(1);
var numOfRepresentN = [0, 1, 2, 4];
var answers = [];
testCases.forEach(function (testCase) {
    if (!numOfRepresentN[testCase]) {
        for (var index = numOfRepresentN.length; index <= testCase; ++index) {
            numOfRepresentN.push(numOfRepresentN[index - 1] +
                numOfRepresentN[index - 2] +
                numOfRepresentN[index - 3]);
        }
    }
    answers.push(numOfRepresentN[testCase]);
});
console.log(answers.join('\n'));
