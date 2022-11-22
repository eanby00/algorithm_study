"use strict";
// https://www.acmicpc.net/problem/5525
// IOIOI
exports.__esModule = true;
// 순회를 통해서 해당 문자열에 P가 있는지 확인
// 있다면 순회를 할 때 +2를 해서 하나의 IOI를 스킵
var fs_1 = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var isValidIOI = function (testString, index, standardValue) {
    var testingValue = '';
    for (var i = 0; i < standardValue.length; ++i) {
        testingValue += testString[index + i];
    }
    return testingValue === standardValue;
};
var inputs = (0, fs_1.readFileSync)(INPUT_LOCATION).toString().trim().split('\n');
var _a = inputs.map(function (input) { return input.trim(); }), n = _a[0], m = _a[1], s = _a[2];
var P_N = 'I' + 'OI'.repeat(+n);
var answer = 0;
for (var index = 0; index < +m; ++index) {
    if (isValidIOI(s, index, P_N)) {
        answer += 1;
        index += 1;
    }
}
console.log(answer);
