"use strict";
// https://www.acmicpc.net/problem/18111
// 마인크래프트
exports.__esModule = true;
// 들어온 땅 높이를 하나의 배열로 변환
// 0~256까지의 높이만 체크하면 됨
// 256의 loop를 돌리면서 주어진 B로 채울 수 있는지 체크
// 불가능하다면 다음 빈도로 체크
// 일정 조건에서 loop를 break할 조건 추가
// 일정 높이부터는 어차피 B가 부족해서 실패할수밖에 없기 때문
// 모든 loop를 끝내고 시간이 가장 낮으면서 높이가 가장 높은 것을 출력
var fs = require("fs");
// input
var inputs = fs
    .readFileSync("inputs.txt")
    .toString()
    .trim()
    .split("\n");
var first = inputs[0], values = inputs.slice(1);
var _a = first.split(" ").map(function (item) { return parseInt(item); }), N = _a[0], M = _a[1], B = _a[2];
// input받은 땅 높이를 하나의 number 배열로 전환
var groundLengths = [];
values
    .map(function (value) { return value.trim().split(" "); })
    .forEach(function (line) {
    groundLengths.push.apply(groundLengths, line.map(function (item) { return parseInt(item); }));
});
// 정답 구하기
var answers = [];
var _loop_1 = function (i) {
    var spare = B;
    var answer = 0;
    var shortFall = 0;
    groundLengths.forEach(function (length) {
        if (length > i) {
            answer += 2 * (length - i);
            spare += (length - i);
        }
        else {
            shortFall += i - length;
        }
    });
    if (shortFall <= spare) {
        answer += shortFall;
    }
    else {
        answer = Number.MAX_SAFE_INTEGER;
    }
    answers.push({ time: answer, height: i });
};
for (var i = 0; i <= 256; ++i) {
    _loop_1(i);
}
answers.sort(function (a, b) {
    if (a.time < b.time) {
        return -1;
    }
    else if (a.time > b.time) {
        return 1;
    }
    else {
        if (a.height < b.height) {
            return 1;
        }
        else if (a.height > b.height) {
            return -1;
        }
        else {
            return 0;
        }
    }
});
// console.log(answers);
console.log(answers[0].time, answers[0].height);
