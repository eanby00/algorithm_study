"use strict";
// https://www.acmicpc.net/problem/11659
// 구간 합 구하기 4
exports.__esModule = true;
// 가설
// 누적합의 배열을 만들어서 그것에 기초하여 답을 return하자
var fs = require("fs");
var sum = function (numbers) {
    return numbers.reduce(function (prev, current) { return prev + current; }, 0);
};
var INPUT_LOCATION = 'inputs.txt';
var inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
var _a = inputs.map(function (input) {
    return input
        .trim()
        .split(' ')
        .map(function (item) { return parseInt(item); });
}), numbers = _a[1], sliceIndexs = _a.slice(2);
var cumulativeSum = [];
numbers.forEach(function (number, index) {
    if (index === 0) {
        cumulativeSum.push(number);
    }
    else {
        cumulativeSum.push(cumulativeSum[index - 1] + number);
    }
});
var answers = [];
sliceIndexs.forEach(function (sliceIndex) {
    var startIndex = sliceIndex[0], endIndex = sliceIndex[1];
    var endValue = cumulativeSum[endIndex - 1];
    var startValue = 0;
    if (startIndex - 2 >= 0) {
        startValue = cumulativeSum[startIndex - 2];
    }
    var answer = endValue - startValue;
    answers.push(answer);
});
console.log(answers.join('\n'));
