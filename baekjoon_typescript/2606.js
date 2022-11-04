"use strict";
// https://www.acmicpc.net/problem/2606
// 바이러스
exports.__esModule = true;
var fs = require("fs");
var Graph = /** @class */ (function () {
    function Graph(computerNumber) {
        var _this = this;
        this.graph = {};
        this.setGraphByEdges = function (edges) {
            for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
                var _a = edges_1[_i], start = _a[0], end = _a[1];
                _this.graph[start].push(end);
                _this.graph[end].push(start);
            }
        };
        this.isVisited = function (vertex) {
            if (_this.visited[vertex] === 1) {
                return true;
            }
            return false;
        };
        this.dfs = function (vertex) {
            _this.visited[vertex] = 1;
            _this.graph[vertex].forEach(function (vertex) {
                if (!_this.isVisited(vertex)) {
                    _this.dfs(vertex);
                }
            });
        };
        this.printAnswer = function () {
            var answer = _this.visited.reduce(function (prevValue, currentValue) { return prevValue + currentValue; }, 0) - 1;
            console.log(answer);
        };
        // for (let vertex = 1; vertex <= computerNumber; ++vertex) {
        //   this.graph[vertex] = [];
        // }
        this.visited = new Array(computerNumber + 1).fill(0);
    }
    return Graph;
}());
var inputLocation = 'inputs.txt';
var parseNumber = function (item) { return parseInt(item); };
var splitLine = function (item) { return item.split(' '); };
var splitLineAndParseNumber = function (item) {
    return splitLine(item).map(parseNumber);
};
var startVertex = 1;
var inputs = fs
    .readFileSync(inputLocation)
    .toString()
    .trim()
    .split('\n');
var _a = inputs.map(splitLineAndParseNumber), computerNumber = _a[0][0], edges = _a.slice(2);
var graph = new Graph(computerNumber);
graph.setGraphByEdges(edges);
graph.dfs(startVertex);
graph.printAnswer();
