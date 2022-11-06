"use strict";
// https://www.acmicpc.net/problem/1620
// 나는야 포켓몬 마스터 이다솜
exports.__esModule = true;
// 가설: 그냥 들어온 N개의 값에 대해서 맵을 만들고 그것에 기초해서 출력하면 되지 않을까?
// 숫자에 대해서 영어인, 영어에 대해서 숫자인 두 경우를 모두 저장해야 한다.
// 데이터를 2배로 저장해야 할까? 개선안은 없을까?
// 들어온 값에 기반하여 맵을 만든다
// 출력이 필요한 만큼 값을 반환하여 배열에 담고 배열을 출력한다.
var fs = require("fs");
var INPUT_LOCATION = 'inputs.txt';
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n');
var _a = inputs.map(function (input) { return input.trim(); }), firstLine = _a[0], lines = _a.slice(1);
var _b = firstLine.split(' ').map(function (number) { return parseInt(number); }), n = _b[0], m = _b[1];
var books = new Map();
for (var index = 0; index < n; ++index) {
    books.set(String(index + 1), lines[index]);
    books.set(lines[index], String(index + 1));
}
for (var index = n; index < n + m; ++index) {
    console.log(books.get(lines[index]));
}
