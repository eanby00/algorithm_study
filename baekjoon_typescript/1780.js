"use strict";
// https://www.acmicpc.net/problem/1780
// 종이의 개수
exports.__esModule = true;
// 가설
// n * n의 행렬을 받아서 모든 칸이 -1, 0, 1 중 하나로 이루어져 있는지 체크
// 아니라면 3 * 3으로 분리하고
// 9개의 조각에 대해서 각각 1번의 작업을 반복
// 어려웠던 점
// 의외로 n * n의 행렬을 9개의 행렬로 쪼개는 것이 어려웠음
// divide 함수 참고
// row를 기준으로 3등분 한 후 col을 기준으로 3등분한다.
// 분리된 matrix의 순서
// 1, 2, 3
// 4, 5, 6
// 7, 8, 9
var fs = require("fs");
var INPUT_LOCATION = 'inputs.txt';
var checkMatrix = function (matrix) {
    var checkMatrix = matrix.flat();
    var hasMinusOne = checkMatrix.includes(-1);
    var hasZero = checkMatrix.includes(0);
    var hasOne = checkMatrix.includes(1);
    if (hasMinusOne && !hasZero && !hasOne) {
        return '-1';
    }
    else if (!hasMinusOne && hasZero && !hasOne) {
        return '0';
    }
    else if (!hasMinusOne && !hasZero && hasOne) {
        return '1';
    }
    return null;
};
var answers = {
    '-1': 0,
    '0': 0,
    '1': 0
};
var divide = function (nextN, matrix) {
    var dividedMatrix = [];
    for (var i = 0; i < 3 * nextN; i += nextN) {
        var rowDivide = matrix.slice(i, i + nextN);
        var _loop_1 = function (j) {
            var colDivide = rowDivide.map(function (line) { return line.slice(j, j + nextN); });
            dividedMatrix.push(colDivide);
        };
        for (var j = 0; j < 3 * nextN; j += nextN) {
            _loop_1(j);
        }
    }
    return dividedMatrix;
};
var checkAndDivide = function (n, matrix) {
    var checkValue = checkMatrix(matrix);
    if (checkValue) {
        answers[checkValue] += 1;
        return;
    }
    var nextN = n / 3;
    var dividedMatrixs = divide(nextN, matrix);
    dividedMatrixs.forEach(function (dividedMatrix) {
        checkAndDivide(nextN, dividedMatrix);
    });
};
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n');
var _a = inputs.map(function (input) {
    return input
        .trim()
        .split(' ')
        .map(function (value) { return parseInt(value); });
}), n = _a[0][0], matrix = _a.slice(1);
checkAndDivide(n, matrix);
console.log("".concat(answers['-1'], "\n").concat(answers['0'], "\n").concat(answers['1']));
