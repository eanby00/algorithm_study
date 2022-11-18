"use strict";
// https://www.acmicpc.net/problem/1389
// 케빈 베이컨의 6단계 법칙
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
// bfs를 이용해서 각 사람의 케빈 베이컨 수를 찾는다.
// 먼저 array를 이용해서 구현하고 시간 초과가 될 경우 linked list를 구현한다.
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var getPersonWithMinKevinValue = function (n, friendships) {
    var graph = {};
    var setGraph = function (n) {
        for (var i = 1; i <= n; ++i) {
            graph[i] = [];
        }
    };
    var setEdge = function (friendships) {
        friendships.forEach(function (_a) {
            var start = _a[0], end = _a[1];
            graph[start].push(end);
            graph[end].push(start);
        });
    };
    var getKevinValueWithVertex = function (vertex) {
        var visited = Array(n + 1).fill(null);
        var queue = [];
        var bfs = function (startPerson) {
            visited[startPerson] = 0;
            queue.push(startPerson);
            var _loop_1 = function () {
                var vertex_1 = queue.shift();
                graph[vertex_1].forEach(function (endVertex) {
                    if (visited[endVertex] === null) {
                        visited[endVertex] = visited[vertex_1] + 1;
                        queue.push(endVertex);
                    }
                });
            };
            while (queue.length > 0) {
                _loop_1();
            }
        };
        bfs(vertex);
        var visitedWithoutNull = __spreadArray([,], visited, true);
        var kevinValue = visitedWithoutNull.reduce(function (prev, current) { return prev + current; }, 0);
        return kevinValue;
    };
    var solution = function (n, friendships) {
        var answers = [];
        setGraph(n);
        setEdge(friendships);
        for (var i = 1; i <= n; ++i) {
            answers.push(getKevinValueWithVertex(i));
        }
        console.log(answers.findIndex(function (element) { return element === Math.min.apply(Math, answers); }) + 1);
    };
    solution(n, friendships);
};
var inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
var _a = inputs.map(function (input) {
    return input
        .trim()
        .split(' ')
        .map(function (item) { return +item; });
}), n = _a[0][0], friendships = _a.slice(1);
getPersonWithMinKevinValue(n, friendships);
