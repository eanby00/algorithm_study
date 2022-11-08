"use strict";
// https://www.acmicpc.net/problem/17219
// 비밀번호 찾기
exports.__esModule = true;
// 가설
// n개의 주소와 비밀번호를 이용하여 map을 만든다.
// 이후 m개의 주소에 대한 비밀번호를 출력한다.
var fs = require("fs");
var INPUT_LOCATION = 'inputs.txt';
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n');
var _a = inputs.map(function (input) {
    return input.trim().split(' ');
}), firstLine = _a[0], addressAndPasswords = _a.slice(1);
var _b = firstLine.map(function (item) { return parseInt(item); }), n = _b[0], m = _b[1];
var settingPasswords = addressAndPasswords.slice(0, n);
var findPasswordByAddress = addressAndPasswords.slice(n);
var addressToPassword = new Map();
settingPasswords.forEach(function (addressAndPassword) {
    var address = addressAndPassword[0], password = addressAndPassword[1];
    addressToPassword.set(address, password);
});
var answers = [];
findPasswordByAddress.forEach(function (address) {
    answers.push(addressToPassword.get(address[0]));
});
console.log(answers.join('\n'));
