"use strict";
// https://www.acmicpc.net/problem/24480
// 알고리즘 수업 - 깊이 우선 탐색 2
exports.__esModule = true;
// 24479번과 내림차순이라는 점을 제외하면 같은 문제이다.
var fs = require("fs");
// input 처리
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
}), first = _a[0], edges = _a.slice(1);
// graph 세팅
var graph = {};
for (var i = 1; i <= first[0]; ++i) {
    graph[i] = [];
}
edges.forEach(function (edge) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
});
for (var vertex in graph) {
    graph[vertex].sort(function (a, b) { return b - a; });
}
// dfs
var visited = new Array(first[0] + 1).fill(0);
var cnt = 1;
var dfs = function (vertex) {
    visited[vertex] = cnt;
    cnt += 1;
    graph[vertex].forEach(function (next) {
        if (visited[next] === 0) {
            dfs(next);
        }
    });
};
dfs(first[2]);
var answer = visited.slice(1);
console.log(answer.join("\n"));
