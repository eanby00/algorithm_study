"use strict";
// https://www.acmicpc.net/problem/2667
// 단지번호붙이기
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
// 받은 행렬을 순회하면서 dfs나 bfs를 적용한다.
// 답을 하나의 배열에 담아두고 그것을 출력하게 만든다.
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var apartment = function (matrix) {
    var answers = [];
    var isValidCoordinate = function (row, col) {
        try {
            return matrix[row][col] === 1;
        }
        catch (_a) {
            return false;
        }
    };
    var setHouseNumber = function () {
        var numberOfHouseNumber = 0;
        var tempRow = [0, 0, 1, -1];
        var tempCol = [1, -1, 0, 0];
        var stack = [];
        var dfsBehavior = function (row, col) {
            matrix[row][col] = 0;
            numberOfHouseNumber += 1;
            stack.push([row, col]);
        };
        var dfs = function (row, col) {
            dfsBehavior(row, col);
            while (stack.length > 0) {
                var _a = stack.pop(), nextRow = _a[0], nextCol = _a[1];
                for (var i = 0; i < 4; ++i) {
                    if (isValidCoordinate(nextRow + tempRow[i], nextCol + tempCol[i])) {
                        dfsBehavior(nextRow + tempRow[i], nextCol + tempCol[i]);
                    }
                }
            }
            answers.push(numberOfHouseNumber);
            numberOfHouseNumber = 0;
        };
        matrix.forEach(function (rows, rowIndex) {
            rows.forEach(function (_, colIndex) {
                if (isValidCoordinate(rowIndex, colIndex)) {
                    dfs(rowIndex, colIndex);
                }
            });
        });
        answers.sort(function (a, b) { return a - b; });
    };
    setHouseNumber();
    return __spreadArray([answers.length], answers, true);
};
var inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
var _a = inputs.map(function (input) {
    return input
        .trim()
        .split('')
        .map(function (cell) { return +cell; });
}), matrix = _a.slice(1);
console.log(apartment(matrix).join('\n'));
