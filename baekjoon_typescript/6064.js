"use strict";
// https://www.acmicpc.net/problem/6064
// 카잉 달력
exports.__esModule = true;
// M이 10이고 N이 12일 경우
// 3 : 1 => 10 + 3 === 12 + 1 => 13번째 해
// 10 : 12 => 10 + 10 * 5 === 12 + 12 * 4 => 60번째 해
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var _a = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n'), testDatas = _a.slice(1);
var testDatasCovertNumber = testDatas.map(function (testData) {
    return testData
        .trim()
        .split(' ')
        .map(function (num) { return +num; });
});
