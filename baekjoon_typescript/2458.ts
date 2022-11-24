// https://www.acmicpc.net/problem/2458
// 키 순서

// 들어온 edge들을 이용해서 인접 행렬 그래프를 구현한다.
// 해당 그래프에 플로이드 워셜을 적용하여 어떤 vertex들과 연결되어 있는지 확인한다.
// 연결은 되었지만 갈 수 있다면 1을, 연결이 역방향으로 되어 있다면 -1로 설정한다.
// 3 -> 3 은 1로 설정한다. 3 -> 3 -> 4와 같은 방식으로 이동할 때
// 결국 3 -> 4와 같은데 1이 아니라면 이는 연결되지 않았다고 인식한다.
// 자신을 제외한 모든 vertex와 연결되었다면 (자신에게 0이 없다면) answer++를 한다.
// answer를 return한다.

import { readFileSync } from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const getAnswer = (n: number, edges: number[][]) => {
  const graph = Array.from(Array(n), () => Array(n).fill(0));
  let answer = 0;

  const setGraph = (edges: number[][]) => {
    edges.forEach(([start, end]) => {
      graph[start - 1][end - 1] = 1;
    });
  };

  const floyd = () => {
    for (let temp = 0; temp < n; ++temp) {
      for (let start = 0; start < n; ++start) {
        for (let end = 0; end < n; ++end) {
          if (
            (graph[start][temp] === 1 && graph[temp][end] === 1) ||
            start === end
          ) {
            graph[end][start] = -1;
            graph[start][end] = 1;
          }
        }
      }
    }
  };

  const setAnswer = () => {
    answer = graph.reduce((prev, current) => {
      if (current.includes(0)) {
        return prev;
      }
      return prev + 1;
    }, 0);
  };

  setGraph(edges);
  floyd();
  setAnswer();
  return answer;
};

const inputs = readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [[n, m], ...edges] = inputs.map((input) =>
  input.split(' ').map((item) => +item)
);

console.log(getAnswer(n, edges));
