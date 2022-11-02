"use strict";
// https://www.acmicpc.net/problem/24479
// 알고리즘 수업 - 깊이 우선 탐색 1
exports.__esModule = true;
// 들어온 입력값들을 기반으로 그래프 생성
// 그래프에서 dfs 실행
// 문제 좀 제대로 읽자
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
        .map(function (item) { return parseInt(item); });
}), first = _a[0], edges = _a.slice(1);
// input으로 받은 edge를 기준으로 graph 구성
var graph = {};
for (var i = 1; i <= first[0]; ++i) {
    graph[i] = [];
}
edges.forEach(function (edge) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
});
// 오름차순 방문을 위한 sort
for (var vertex in graph) {
    graph[vertex].sort(function (a, b) { return a - b; });
}
// console.log(graph);
// dfs 시작
var visited = new Array(Object.keys(graph).length + 1).fill(0);
// console.log(visited)
var cnt = 1;
var dfs = function (vertex) {
    visited[vertex] = cnt;
    cnt += 1;
    //   console.log(vertex, ":", visited);
    graph[vertex].forEach(function (vertex) {
        if (visited[vertex] === 0) {
            dfs(vertex);
        }
    });
};
var answers = [];
dfs(first[2]);
var answer = visited.slice(1);
console.log(answer.join('\n'));
var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(test);
test.reverse();
console.log(test);
test.sort();
console.log(test);
