"use strict";
// https://www.acmicpc.net/problem/11404
// 플로이드
exports.__esModule = true;
// 플로이드 워샬을 적용하기 위해 인접 행렬로 그래프 생성
// 플로이드 워샬 적용
var fs_1 = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var MAX_LENGTH = 100001;
var pathWithBus = function (n, paths) {
    var graph = Array.from(Array(n), function () {
        return Array(n).fill(MAX_LENGTH);
    });
    var setGraph = function (paths) {
        paths.forEach(function (_a) {
            var start = _a[0], end = _a[1], number = _a[2];
            if (graph[start - 1][end - 1] > number) {
                graph[start - 1][end - 1] = number;
            }
        });
    };
    var floyd = function () {
        for (var temp = 0; temp < n; ++temp) {
            for (var start = 0; start < n; ++start) {
                for (var end = 0; end < n; ++end) {
                    if (graph[start][end] > graph[start][temp] + graph[temp][end] &&
                        start !== end) {
                        graph[start][end] = graph[start][temp] + graph[temp][end];
                    }
                }
            }
        }
    };
    var removeMaxLength = function () {
        graph.forEach(function (line, indexRow) {
            line.forEach(function (_, indexCol) {
                if (graph[indexRow][indexCol] === MAX_LENGTH) {
                    graph[indexRow][indexCol] = 0;
                }
            });
        });
    };
    var printGraph = function () {
        console.log(graph.map(function (line) { return line.join(' '); }).join('\n'));
    };
    setGraph(paths);
    printGraph();
    console.log('----------');
    floyd();
    printGraph();
    removeMaxLength();
    printGraph();
};
var inputs = (0, fs_1.readFileSync)(INPUT_LOCATION).toString().trim().split('\n');
var _a = inputs.map(function (input) {
    return input
        .trim()
        .split(' ')
        .map(function (item) { return +item; });
}), n = _a[0][0], paths = _a.slice(2);
pathWithBus(n, paths);
