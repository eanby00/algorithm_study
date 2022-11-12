"use strict";
// https://www.acmicpc.net/problem/1780
// 종이의 개수
exports.__esModule = true;
// 가설
// n * n의 행렬을 받아서 모든 칸이 -1, 0, 1 중 하나로 이루어져 있는지 체크
// 아니라면 3 * 3으로 분리하고
// 9개의 조각에 대해서 각각 1번의 작업을 반복
// 기존 코드는 컴파일에러가 발생한다.
// 백준의 코드 테스트를 하는 node 버전이 낮다는 것을 보고 es5로 다운그레이드한 코드를 node.js로 테스트했지만, 메모리 초과가 발생한다.
// 들어온 행렬를 복사하는 코드가 한두개가 아닌 시점에서 메모리 초과는 당연했다.
// 코드 개선안
// 기존의 복사해서 주던 값들을 대신해서 index들로 주자
// 기존의 행렬은 가만히 두고 좌표를 통해서 체크하도록 만들자
var fs = require("fs");
var INPUT_LOCATION = 'inputs.txt';
var solution = function (matrix, n) {
    var totalMatrix = matrix;
    var answers = {
        '-1': 0,
        '0': 0,
        '1': 0
    };
    var checkMatrix = function (currentN, x, y) {
        var numsOfMatrix = {
            '-1': 0,
            '0': 0,
            '1': 0
        };
        for (var i = y; i < currentN + y; ++i) {
            for (var j = x; j < currentN + x; ++j) {
                numsOfMatrix[totalMatrix[i][j]] += 1;
            }
        }
        if (Math.pow(currentN, 2) === numsOfMatrix['-1']) {
            answers['-1'] += 1;
            return true;
        }
        else if (Math.pow(currentN, 2) === numsOfMatrix['0']) {
            answers['0'] += 1;
            return true;
        }
        else if (Math.pow(currentN, 2) === numsOfMatrix['1']) {
            answers['1'] += 1;
            return true;
        }
        return false;
    };
    var checkAndDivide = function (n, x, y) {
        var changeAnswer = checkMatrix(n, x, y);
        if (changeAnswer) {
            return;
        }
        var nextN = n / 3;
        for (var i = 0; i < 3; ++i) {
            for (var j = 0; j < 3; ++j) {
                checkAndDivide(nextN, x + i * nextN, y + j * nextN);
            }
        }
    };
    checkAndDivide(n, 0, 0);
    return "".concat(answers['-1'], "\n").concat(answers['0'], "\n").concat(answers['1']);
};
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n');
var n = parseInt(inputs[0]);
var _a = inputs.map(function (input) {
    return input
        .trim()
        .split(' ')
        .map(function (value) { return parseInt(value); });
}), matrix = _a.slice(1);
console.log(solution(matrix, n));
