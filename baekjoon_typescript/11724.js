"use strict";
// https://www.acmicpc.net/problem/11724
// 연결 요소의 개수
exports.__esModule = true;
// input으로 받은 값들을 이용해 graph (인접 리스트) 생성
// dfs나 bfs를 구현하기
// graph를 순회하면서 해당 값이 아직 visited가 되지 않았을 경우 순회 알고리즘으로 연결된 모든 vertex 탐색하기
// 연결 요소의 개수를 저장해두고 graph 순회가 끝나면 그것을 가져오기
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var solution = function (n, edges) {
    var graph = {};
    var visited = Array(n + 1).fill(false);
    var countConnectedComponent = 0;
    var setGraph = function (edges) {
        for (var vertex = 1; vertex <= n; ++vertex) {
            graph[vertex] = [];
        }
        edges.forEach(function (_a) {
            var startVertex = _a[0], endVertex = _a[1];
            graph[startVertex].push(endVertex);
            graph[endVertex].push(startVertex);
        });
    };
    var dfs = function (startVertex) {
        visited[startVertex] = true;
        graph[startVertex].forEach(function (newStartVertex) {
            if (!visited[newStartVertex]) {
                dfs(newStartVertex);
            }
        });
    };
    var getConnectedComponent = function () {
        console.log(graph);
        for (var startVertex in graph) {
            if (!visited[startVertex]) {
                countConnectedComponent += 1;
                dfs(+startVertex);
            }
        }
        return countConnectedComponent;
    };
    setGraph(edges);
    console.log(getConnectedComponent());
};
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n')
    .map(function (input) {
    return input
        .trim()
        .split(' ')
        .map(function (vertex) { return +vertex; });
});
var n = inputs[0][0], edges = inputs.slice(1);
solution(n, edges);
