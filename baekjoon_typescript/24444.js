"use strict";
// https://www.acmicpc.net/problem/24444
// 알고리즘 수업 - 너비 우선 탐색1
exports.__esModule = true;
var fs = require("fs");
var inputs = fs
    .readFileSync("inputs.txt")
    .toString()
    .trim()
    .split("\n");
var _a = inputs.map(function (inputLine) {
    return inputLine
        .trim()
        .split(" ")
        .map(function (input) { return parseInt(input); });
}), firstLine = _a[0], edges = _a.slice(1);
var graph = {};
for (var i = 1; i <= firstLine[0]; ++i) {
    graph[i] = [];
}
edges.forEach(function (edge) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
});
for (var vertex in graph) {
    graph[vertex].sort(function (a, b) { return a - b; });
}
var visited = new Array(firstLine[0] + 1).fill(0);
var cnt = 1;
var queue = [];
var bfs = function (vertex) {
    visited[vertex] = cnt;
    cnt += 1;
    queue.push(vertex);
    while (queue.length !== 0) {
        var checkVertex = queue.shift();
        graph[checkVertex].forEach(function (endVertex) {
            if (visited[endVertex] === 0) {
                queue.push(endVertex);
                visited[endVertex] = cnt;
                cnt += 1;
            }
        });
    }
};
bfs(firstLine[2]);
var answer = visited.slice(1);
console.log(answer.join("\n"));
