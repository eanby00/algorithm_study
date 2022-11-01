"use strict";
// https://www.acmicpc.net/problem/1260
// DFS와 BFS
exports.__esModule = true;
// 인접 리스트 방식으로 그래프 구현
var fs = require("fs");
var Graph = /** @class */ (function () {
    function Graph() {
        this.dfs_visited = {};
        this.dfs_answer = [];
        this.nodes = {};
    }
    Graph.prototype.addNewVertex = function (node) {
        this.nodes[node] = [];
    };
    Graph.prototype.addNewEdge = function (startNode, endNode) {
        if (!this.hasVertex(startNode)) {
            this.addNewVertex(startNode);
        }
        if (!this.hasVertex(endNode)) {
            this.addNewVertex(endNode);
        }
        if (!(endNode in this.nodes[startNode])) {
            this.nodes[startNode].push(endNode);
        }
        if (!(startNode in this.nodes[endNode])) {
            this.nodes[endNode].push(startNode);
        }
    };
    Graph.prototype.sortEdges = function () {
        for (var edges_1 in this.nodes) {
            this.nodes[edges_1].sort(function (a, b) { return parseInt(a) - parseInt(b); });
        }
    };
    Graph.prototype.hasVertex = function (node) {
        if (this.nodes[node]) {
            return true;
        }
        else {
            return false;
        }
    };
    Graph.prototype.dfs_start = function (startVertex) {
        this.dfs_visited = {};
        this.dfs_answer = [];
        this.sortEdges();
        this.dfs(startVertex);
        console.log(this.dfs_answer.join(" "));
    };
    Graph.prototype.dfs = function (startVertex) {
        var _this = this;
        if (this.dfs_visited[startVertex] === true) {
            return;
        }
        this.dfs_visited[startVertex] = true;
        this.dfs_answer.push(startVertex);
        this.nodes[startVertex].forEach(function (endVertex) {
            if (!_this.dfs_visited[endVertex]) {
                _this.dfs(endVertex);
            }
        });
    };
    Graph.prototype.bfs = function (startVertex) {
        this.sortEdges();
        var visited = [];
        var needVisited = [];
        needVisited.push(startVertex);
        while (needVisited.length !== 0) {
            var vertext = needVisited.shift();
            if (!visited.includes(vertext)) {
                visited.push(vertext);
                this.nodes[vertext].forEach(function (vertex) {
                    if (!visited.includes(vertex)) {
                        needVisited.push(vertex);
                    }
                });
            }
        }
        console.log(visited.join(" "));
    };
    return Graph;
}());
var inputs = fs.readFileSync("inputs.txt").toString().trim().split("\n");
var _a = inputs.map(function (input) { return input.trim().split(" "); }), first = _a[0], edges = _a.slice(1);
var graph = new Graph();
edges.forEach(function (edge) {
    graph.addNewEdge(edge[0], edge[1]);
});
graph.dfs_start(first[2]);
graph.bfs(first[2]);
