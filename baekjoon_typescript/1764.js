"use strict";
// https://www.acmicpc.net/problem/1764
// 듣보잡
exports.__esModule = true;
// 가설
// 입력값을 받아서 첫 줄과 나머지를 분리함
// 한 번의 루프를 돌면서
// index가 n-1일 때까지는 map에 새로운 데이터로 추가
// index가 n이상일 때부터는 map에서 해당 인물이 존재하는지 여부를 체크하고 있다면 그 값을 배열에 담음
// 배열의 길이와 배열의 데이터를 출력
var fs = require("fs");
var INPUT_LOCATION = 'inputs.txt';
var inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
var _a = inputs.map(function (input) { return input.trim(); }), firstLine = _a[0], names = _a.slice(1);
var n = parseInt(firstLine.split(' ')[0]);
var people = new Map();
var answer = [];
names.forEach(function (name, index) {
    if (index < n) {
        people.set(name, true);
    }
    else {
        if (people.has(name)) {
            answer.push(name);
        }
    }
});
console.log(answer.length);
console.log(answer.join('\n'));
