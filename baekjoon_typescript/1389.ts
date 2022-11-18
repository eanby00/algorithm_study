// https://www.acmicpc.net/problem/1389
// 케빈 베이컨의 6단계 법칙

// bfs를 이용해서 각 사람의 케빈 베이컨 수를 찾는다.
// 먼저 array를 이용해서 구현하고 시간 초과가 될 경우 linked list를 구현한다.

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

type GraphType = {
  [startVertex: number]: number[];
};

const getPersonWithMinKevinValue = (n: number, friendships: number[][]) => {
  const graph: GraphType = {};

  const setGraph = (n: number) => {
    for (let i = 1; i <= n; ++i) {
      graph[i] = [];
    }
  };

  const setEdge = (friendships: number[][]) => {
    friendships.forEach(([start, end]) => {
      graph[start].push(end);
      graph[end].push(start);
    });
  };

  const getKevinValueWithVertex = (vertex: number): number => {
    const visited: (number | null)[] = Array(n + 1).fill(null);
    const queue: number[] = [];

    const bfs = (startPerson: number) => {
      visited[startPerson] = 0;
      queue.push(startPerson);

      while (queue.length > 0) {
        const vertex = queue.shift()!;

        graph[vertex].forEach((endVertex) => {
          if (visited[endVertex] === null) {
            visited[endVertex] = visited[vertex]! + 1;
            queue.push(endVertex);
          }
        });
      }
    };

    bfs(vertex);
    const kevinValue = [, ...(visited as number[])].reduce(
      (prev, current) => prev! + current!,
      0
    ) as number;
    return kevinValue;
  };

  const solution = (n: number, friendships: number[][]) => {
    const answers: number[] = [];

    setGraph(n);
    setEdge(friendships);

    for (let i = 1; i <= n; ++i) {
      answers.push(getKevinValueWithVertex(i));
    }

    console.log(
      answers.findIndex((element) => element === Math.min(...answers)) + 1
    );
  };

  solution(n, friendships);
};

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [[n], ...friendships] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((item) => +item)
);

getPersonWithMinKevinValue(n, friendships);
