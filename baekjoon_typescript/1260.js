"use strict";
// https://www.acmicpc.net/problem/1260
// DFS와 BFS
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fs = require("fs");
var Graph = /** @class */ (function () {
    function Graph(vertexNumber, edges) {
        var _this = this;
        this.graph = {};
        this.visited = [];
        this.answer = [];
        this.setGraphByEdges = function (edges) {
            for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
                var _a = edges_1[_i], startVertex_1 = _a[0], endVertex = _a[1];
                _this.graph[startVertex_1].push(endVertex);
                _this.graph[endVertex].push(startVertex_1);
            }
            for (var vertex in _this.graph) {
                _this.graph[vertex].sort(function (a, b) { return a - b; });
            }
        };
        this.isVisited = function (vertex) {
            if (_this.visited[vertex] === 1) {
                return true;
            }
            return false;
        };
        this.printAnswer = function () {
            console.log(_this.answer.join(' '));
        };
        for (var vertex = 1; vertex <= vertexNumber; ++vertex) {
            this.graph[vertex] = [];
        }
        this.visited = new Array(vertexNumber + 1).fill(0);
        this.setGraphByEdges(edges);
    }
    return Graph;
}());
var DFSGraph = /** @class */ (function (_super) {
    __extends(DFSGraph, _super);
    function DFSGraph(vertexNumber, edges) {
        var _this = _super.call(this, vertexNumber, edges) || this;
        _this.dfs = function (vertex) {
            _this.visited[vertex] = 1;
            _this.answer.push(vertex);
            _this.graph[vertex].forEach(function (vertex) {
                if (!_this.isVisited(vertex)) {
                    _this.dfs(vertex);
                }
            });
        };
        return _this;
    }
    return DFSGraph;
}(Graph));
var BFSGraph = /** @class */ (function (_super) {
    __extends(BFSGraph, _super);
    function BFSGraph(vertexNumber, edges) {
        var _this = _super.call(this, vertexNumber, edges) || this;
        _this.queue = [];
        _this.bfs = function (vertex) {
            _this.visited[vertex] = 1;
            _this.answer.push(vertex);
            _this.queue.push(vertex);
            while (_this.queue.length > 0) {
                var checkVertex = _this.queue.shift();
                _this.graph[checkVertex].forEach(function (vertex) {
                    if (!_this.isVisited(vertex)) {
                        _this.visited[vertex] = 1;
                        _this.answer.push(vertex);
                        _this.queue.push(vertex);
                    }
                });
            }
        };
        return _this;
    }
    return BFSGraph;
}(Graph));
var INPUT_LOCATION = 'inputs.txt';
var splitLine = function (item) { return item.split(' '); };
var parseNumber = function (item) { return parseInt(item); };
var splitLineAndParseNumber = function (item) {
    return splitLine(item).map(parseNumber);
};
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n');
var _a = inputs.map(splitLineAndParseNumber), _b = _a[0], vertexNumber = _b[0], startVertex = _b[2], edges = _a.slice(1);
var dfsGraph = new DFSGraph(vertexNumber, edges);
dfsGraph.dfs(startVertex);
dfsGraph.printAnswer();
var bfsGraph = new BFSGraph(vertexNumber, edges);
bfsGraph.bfs(startVertex);
bfsGraph.printAnswer();
