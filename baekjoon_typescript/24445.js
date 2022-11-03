"use strict";
// https://www.acmicpc.net/problem/24445
// 알고리즘 수업 - 너비 우선 탐색 2
exports.__esModule = true;
var fs = require("fs");
var inputs = fs
    .readFileSync('inputs.txt')
    .toString()
    .trim()
    .split('\n');
var _a = inputs.map(function (inputLine) {
    return inputLine
        .trim()
        .split(' ')
        .map(function (input) { return parseInt(input); });
}), firstLine = _a[0], edges = _a.slice(1);
var N = firstLine[0];
var startVertex = firstLine[2];
var graph = {};
for (var i = 1; i <= N; ++i) {
    graph[i] = [];
}
edges.forEach(function (edge) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
});
for (var vertex in graph) {
    graph[vertex].sort(function (a, b) { return b - a; });
}
var visited = new Array(N + 1).fill(0);
var count = 1;
var queue = [];
var visitedLogic = function (vertex) {
    visited[vertex] = count;
    count += 1;
    queue.push(vertex);
};
var bfs = function (vertex) {
    visitedLogic(vertex);
    while (queue.length !== 0) {
        var checkVertex = queue.shift();
        graph[checkVertex].forEach(function (endVertex) {
            if (visited[endVertex] === 0) {
                visitedLogic(endVertex);
            }
        });
    }
};
bfs(startVertex);
var answer = visited.slice(1);
console.log(answer.join('\n'));
