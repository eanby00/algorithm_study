"use strict";
// https://www.acmicpc.net/problem/11403
// 경로 찾기
exports.__esModule = true;
// dfs로 풀어보려다가 fail
// 정확히는 인접행렬에다가 dfs를 적용하려다가 fail
// input으로 받은 값을 이용해서 인접배열로 만들고 그 값에 dfs를 적용하여 인접행렬을 만든다면 해결 가능할 듯?
// 확인해보니 플로이드 워샬 유형의 문제
// 이번 기회에 플로이드 워샬 익히기
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
var setPath = function (n, matrix) {
    var visited = Array.from(Array(n), function () { return Array(n).fill(0); });
    var printAnswer = function (matrix) {
        return matrix.map(function (row) { return row.join(' '); }).join('\n');
    };
    for (var temp = 0; temp < n; ++temp) {
        for (var start = 0; start < n; ++start) {
            for (var end = 0; end < n; ++end) {
                console.log(start, temp, end);
                if (matrix[start][temp] === 1 && matrix[temp][end] === 1) {
                    matrix[start][end] = 1;
                }
                console.log(printAnswer(matrix));
                // console.log(printAnswer(visited));
                console.log('------');
            }
        }
    }
    console.log(printAnswer(matrix));
};
var _a = inputs.map(function (input) {
    return input
        .trim()
        .split(' ')
        .map(function (item) { return +item; });
}), n = _a[0][0], matrix = _a.slice(1);
setPath(n, matrix);
