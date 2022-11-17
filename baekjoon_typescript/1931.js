"use strict";
// https://www.acmicpc.net/problem/1931
// 회의실 배정
exports.__esModule = true;
// 대표적인 그리디 알고리즘 문제
// 회의가 끝나는 시간이 가장 짧은 것들을 모으면 된다.
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var getNumberOfMeetings = function (meetings) {
    //   let answer = 0;
    var answer = [];
    var endTime = 0;
    var sortMeetings = function () {
        meetings.sort(function (a, b) {
            if (a[1] === b[1]) {
                return a[0] - b[0];
            }
            return a[1] - b[1];
        });
    };
    var setAnswerAndEndTime = function (meetings) {
        for (var index = 0; index < meetings.length; ++index) {
            if (meetings[index][0] >= endTime) {
                answer.push(meetings[index]);
                // answer += 1;
                endTime = meetings[index][1];
            }
        }
    };
    var setAnswer = function () {
        sortMeetings();
        setAnswerAndEndTime(meetings);
    };
    setAnswer();
    return answer;
};
var inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
var _a = inputs.map(function (input) {
    return input
        .trim()
        .split(' ')
        .map(function (item) { return +item; });
}), meetings = _a.slice(1);
console.log(getNumberOfMeetings(meetings));
