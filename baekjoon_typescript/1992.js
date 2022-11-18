"use strict";
// https://www.acmicpc.net/problem/1992
// 쿼드트리
exports.__esModule = true;
// 특정 행렬이 모두 0이나 1로 이루어졌다면 0, 1을 리턴
// 아니라면 4등분하고 위의 과정 반복
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var makeQuadTree = function (n, matrix) {
    var checkCompression = function (n, x, y) {
        var standardValue = matrix[y][x];
        for (var i = x; i < n + x; ++i) {
            for (var j = y; j < n + y; ++j) {
                if (matrix[j][i] !== standardValue) {
                    return false;
                }
            }
        }
        return true;
    };
    var getQuarTree = function (n, x, y) {
        if (checkCompression(n, x, y)) {
            return matrix[y][x].toString();
        }
        var answers = ['('];
        var nextN = n / 2;
        for (var i = 0; i < 2; ++i) {
            for (var j = 0; j < 2; ++j) {
                answers.push(getQuarTree(nextN, x + nextN * j, y + nextN * i));
            }
        }
        answers.push(')');
        console.log(answers);
        return answers.join('');
    };
    var solution = function () {
        console.log(getQuarTree(n, 0, 0));
    };
    solution();
};
var inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
var n = +inputs[0].trim();
var _a = inputs.map(function (input) {
    return input
        .trim()
        .split('')
        .map(function (item) { return +item; });
}), matrix = _a.slice(1);
makeQuadTree(n, matrix);
