"use strict";
// https://www.acmicpc.net/problem/2630
// 색종이 만들기
exports.__esModule = true;
// 가설
// 자신에게 할당된 영역의 행렬이 1로만 이루어져 있는지 0으로만 이루어져 있는지 체크한다.
// 어떤 하나의 값으로 이루어져 있지 않는다면, 영역을 4등분하여 각각 체크한다.
// 영역을 4등분할 때 값을 복사하는식이 된다면 메모리 낭비가 심함으로 좌표값을 통해서 체크하자
var fs = require("fs");
var INPUT_LOCATION = 'inputs.txt';
var solution = function (n, matrix) {
    var answers = {
        0: 0,
        1: 0
    };
    var checkMatrix = function (n, x, y) {
        var referenceValue = matrix[y][x];
        for (var i = y; i < n + y; ++i) {
            for (var j = x; j < n + x; ++j) {
                if (matrix[i][j] !== referenceValue) {
                    return false;
                }
            }
        }
        if (referenceValue === 0) {
            answers[0] += 1;
        }
        else {
            answers[1] += 1;
        }
        return true;
    };
    var checkAndDivide = function (n, x, y) {
        var isOneColor = checkMatrix(n, x, y);
        if (isOneColor) {
            return;
        }
        var nextN = n / 2;
        for (var i = 0; i < 2; ++i) {
            for (var j = 0; j < 2; ++j) {
                checkAndDivide(nextN, x + nextN * j, y + nextN * i);
            }
        }
    };
    checkAndDivide(n, 0, 0);
    return Object.values(answers).join('\n');
};
var inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
var _a = inputs.map(function (input) {
    return input
        .trim()
        .split(' ')
        .map(function (item) { return +item; });
}), n = _a[0][0], matrix = _a.slice(1);
console.log(solution(n, matrix));
