// https://www.acmicpc.net/problem/1260
// DFS와 BFS

// 인접 리스트 방식으로 그래프 구현

// 실패
// 인접 리스트 구현은 성공했지만, dfs나 bfs에서 오류가 발생
// dfs, bfs 문제를 따로 풀어보고 다시 해보기

import * as fs from "fs";

class Graph {
  nodes: {
    [node: string]: string[];
  };
  dfs_visited: {
    [node: string]: boolean;
  } = {};
  dfs_answer: string[] = [];

  constructor() {
    this.nodes = {};
  }

  addNewVertex(node: string) {
    this.nodes[node] = [];
  }

  addNewEdge(startNode: string, endNode: string) {
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
  }

  sortEdges() {
    for (const edges in this.nodes) {
      this.nodes[edges].sort((a, b) => parseInt(a) - parseInt(b));
    }
  }

  hasVertex(node: string): boolean {
    if (this.nodes[node]) {
      return true;
    } else {
      return false;
    }
  }

  dfs_start(startVertex: string) {
    this.dfs_visited = {};
    this.dfs_answer = [];
    this.sortEdges();
    this.dfs(startVertex);
    console.log(this.dfs_answer.join(" "));
  }

  dfs(startVertex: string) {
    if (this.dfs_visited[startVertex] === true) {
      return;
    }
    this.dfs_visited[startVertex] = true;
    this.dfs_answer.push(startVertex);

    this.nodes[startVertex].forEach((endVertex) => {
      if (!this.dfs_visited[endVertex]) {
        this.dfs(endVertex);
      }
    });
  }

  bfs(startVertex: string) {
    this.sortEdges();
    const visited: string[] = [];
    const needVisited: string[] = [];

    needVisited.push(startVertex);

    while (needVisited.length !== 0) {
      const vertext = needVisited.shift()!;
      if (!visited.includes(vertext)) {
        visited.push(vertext);
        this.nodes[vertext].forEach(vertex => {
            if (!visited.includes(vertex)) {
                needVisited.push(vertex)
            }
        });
      }
    }

    console.log(visited.join(" "));
  }
}

const inputs = fs.readFileSync("inputs.txt").toString().trim().split("\n");
const [first, ...edges] = inputs.map((input) => input.trim().split(" "));
const graph = new Graph();

edges.forEach((edge) => {
  graph.addNewEdge(edge[0], edge[1]);
});

graph.dfs_start(first[2]);
graph.bfs(first[2]);
