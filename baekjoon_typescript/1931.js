"use strict";
// https://www.acmicpc.net/problem/1931
// 회의실 배정
exports.__esModule = true;
// 대표적인 그리디 알고리즘 문제
// 회의가 끝나는 시간이 가장 짧은 것들을 모으면 된다.
// 단 한 번의 반복으로 문제를 풀기 위해서 sort를 먼저해야 한다.
// sort의 조건은 기본적으로는 endTime을 기준으로 오름차순이지만, endTime이 같다면 startTime이 빠른 것이 먼저 오도록 정렬한다.
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var getNumberOfMeetings = function (meetings) {
    var answer = 0;
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
                answer += 1;
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
