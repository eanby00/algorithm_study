"use strict";
// https://www.acmicpc.net/problem/9375
// 패션왕 신해빈
exports.__esModule = true;
// 타입이 1개이고 1개씩 옷이 있을 경우 가짓수: 1
// 타입이 1개이고 2개씩 옷이 있을 경우 가짓수: 2
// 타입이 1개이고 3개씩 옷이 있을 경우 가짓수: 3
// 타입이 1개이고 4개씩 옷이 있을 경우 가짓수: 4
// 타입이 2개이고 1개씩 옷이 있을 경우 가짓수: 3 (a), (b), (a, b)
// 타입이 2개이고 2개씩 옷이 있을 경우 가짓수: 8 (a) (a-1) (b) (b-1) (a, b) (a, b-1) (a - 1, b) (a-1, b-1)
// 특정 타입의 옷의 가짓수가 n개 있을 때 선택할 수 있는 가짓수: 0(아예 안 입을 경우), 1번, 2번 .... n번까지 -> n+1
// 2개의 타입과 각각 n, m개의 옷이 있을 경우 선택할 수 있는 가짓수: (n + 1) * (m + 1) -1
// 1을 빼주는 이유는 문제에서 알몸일 경우를 배제하라고 요구하였기 때문
// 타입이 늘어난다면 곱하는 가짓수가 늘어난다.
// 기능 구현 순서
// input을 받는다. o
// input을 기반으로 테스트 케이스를 분리한다.
// 하나의 테스트 케이스를 진행할 때 headgear와 같은 것을 키로 hat과 같은 것은 값으로 하여 객체를 생성한다.
// 값은 hat과 같은 것을 배열로 가지는 것이 아닌 그 갯수를 의미하는 숫자형으로 구현한다.
// 1번 테스트 케이스에 대한 예시: const test = { 'headgear': 2, 'sunglasses': 1}
// 객체를 순회하면서 값들을 모두 곱하고 1을 뺀 값을 정답 배열에 담는다.
// 모든 케이스를 테스트하면 정답을 출력한다.
var fs = require("fs");
var INPUT_LOCATION = 'inputs.txt';
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n');
var _a = inputs.map(function (input) { return input.trim(); }), n = _a[0], testCases = _a.slice(1);
var answers = [];
for (var i = 0; i < parseInt(n); ++i) {
    var clothesMap = {};
    var numOfTests = parseInt(testCases[0]);
    for (var index = 1; index <= numOfTests; ++index) {
        var _b = testCases[index].split(' '), type = _b[1];
        if (clothesMap[type]) {
            clothesMap[type] = clothesMap[type] + 1;
        }
        else {
            clothesMap[type] = 1;
        }
    }
    var answer = 1;
    for (var type in clothesMap) {
        answer *= clothesMap[type] + 1;
    }
    answers.push(answer - 1);
    testCases = testCases.slice(numOfTests + 1);
}
console.log(answers.join('\n'));
