// https://www.acmicpc.net/problem/2178
// 미로 탐색

// 기본적인 bfs를 이용한다.
// 1. n * m의 배열을 만들어서 (n,m)까지 갈 동안 갔던 루트의 최소 칸 수를 기록한다.
// n, m에 도달하였을 경우 해당 칸에 기록된 값을 리턴한다.

// 2. 만약 1이 메모리 초과가 날 경우, 입력 받은 배열 자체를 변경하자

// 다행이도 1번으로 해결할 수 있었다.
// bfs를 구현할 때는 당연하게도 queue를 이용함으로 shift 연산으로 계산해야 한다.

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const getNumberOfEscapeMaze = (n: number, m: number, maze: number[][]) => {
  const recordPathOfMaze: number[][] = Array.from(Array(n), () =>
    Array(m).fill(0)
  );
  const queue: number[][] = [];

  const setMaze = (n: number, m: number, maze: number[][]) => {
    for (let y = 0; y < n; ++y) {
      for (let x = 0; x < m; ++x) {
        if (maze[y][x] === 0) {
          recordPathOfMaze[y][x] = 1;
        }
      }
    }
  };

  const isValidCoordinate = (x: number, y: number) => {
    try {
      if (recordPathOfMaze[y][x] === 0) {
        return true;
      }
    } catch {
      return false;
    }
    return false;
  };

  const bfs = (x: number, y: number) => {
    recordPathOfMaze[y][x] = 1;
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    queue.push([x, y]);

    while (queue.length > 0) {
      const [targetX, targetY] = queue.shift()!;

      for (let i = 0; i < 4; ++i) {
        const newX = targetX + dx[i];
        const newY = targetY + dy[i];
        if (isValidCoordinate(newX, newY)) {
          queue.push([newX, newY]);
          recordPathOfMaze[newY][newX] = recordPathOfMaze[targetY][targetX] + 1;
        }
      }
    }
  };

  setMaze(n, m, maze);
  bfs(0, 0);
  console.log(recordPathOfMaze[n - 1][m - 1]);
};

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [n, m] = inputs[0]
  .trim()
  .split(' ')
  .map((item) => +item);

const [, ...maze] = inputs.map((input) =>
  input
    .trim()
    .split('')
    .map((item) => +item)
);

getNumberOfEscapeMaze(n, m, maze);
