// https://www.acmicpc.net/problem/7569
// 토마토

// input으로 받은 것들을 이용해서 3차원 배열을 생성한다.
// matrix[h][n][m]
// 3차원 배열이 모두 1이라면 0을 출력한다.
// 3차원 배열에 bfs를 적용해서 모두 1이 될 경우의 count를 출력한다.
// 따로 count를 가지지는 않고 visited 배열에서 가장 값이 큰 것을 출력한다?
// 만약 bfs가 끝났는데 0인 값이 있다면 -1을 출력한다.

// 시간 초과 발생
// array.shift 연산을 효율화하기 위해 linked list 구현하여 개선

import { readFileSync } from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

class Node {
  height: number;
  row: number;
  col: number;
  next: Node | null = null;

  constructor(height: number, row: number, col: number) {
    this.height = height;
    this.row = row;
    this.col = col;
  }

  getArray() {
    return [this.height, this.row, this.col];
  }
}

class Queue {
  head: Node | null;
  tail: Node | null;
  length: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(height: number, row: number, col: number) {
    const node = new Node(height, row, col);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }
    this.tail = node;
    this.length += 1;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const retureNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length -= 1;
    return retureNode.getArray();
  }
}

const makeMatrix3D = (n: number, matrix: number[][]) => {
  const matrix3D: number[][][] = [];

  for (let i = 0; i < matrix.length; i += n) {
    const matrixTemp = matrix.slice(i, i + n);
    matrix3D.push(matrixTemp);
  }

  return matrix3D;
};

const getAnswer = (coordinate: number[], matrixs: number[][][]) => {
  const [m, n, h] = coordinate;
  const visited = Array.from(Array(h), () =>
    Array.from(Array(n), () => Array(m).fill(0))
  );
  const queue = new Queue();

  const visitIsValid = (height: number, row: number, col: number) => {
    try {
      return (
        visited[height][row][col] === 0 && matrixs[height][row][col] !== -1
      );
    } catch {
      return false;
    }
  };

  const bfs = () => {
    while (queue.length > 0) {
      const [standardHeight, standardRow, standardCol] = queue.shift()!;

      const nextHeights = [1, -1, 0, 0, 0, 0];
      const nextRows = [0, 0, 1, -1, 0, 0];
      const nextCols = [0, 0, 0, 0, 1, -1];

      for (let i = 0; i < nextHeights.length; ++i) {
        const nextHeight = standardHeight + nextHeights[i];
        const nextRow = standardRow + nextRows[i];
        const nextCol = standardCol + nextCols[i];
        const newVisited =
          visited[standardHeight][standardRow][standardCol] + 1;

        if (visitIsValid(nextHeight, nextRow, nextCol)) {
          queue.push(nextHeight, nextRow, nextCol);
          visited[nextHeight][nextRow][nextCol] = newVisited;
        }
      }
    }
  };

  const setVisited = () => {
    for (let height = 0; height < h; ++height) {
      for (let row = 0; row < n; ++row) {
        for (let col = 0; col < m; ++col) {
          if (matrixs[height][row][col] === -1) {
            visited[height][row][col] = -1;
          }

          if (matrixs[height][row][col] === 1) {
            queue.push(height, row, col);
            visited[height][row][col] = 1;
          }
        }
      }
    }

    bfs();
  };

  const findAnswer = () => {
    let maxValue = 0;

    for (let height = 0; height < h; ++height) {
      for (let row = 0; row < n; ++row) {
        for (let col = 0; col < m; ++col) {
          const currentValue = visited[height][row][col];

          if (currentValue === 0) {
            return -1;
          }

          if (maxValue < currentValue) {
            maxValue = currentValue;
          }
        }
      }
    }

    return maxValue - 1;
  };

  setVisited();

  return findAnswer();
};

const inputs = readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [[m, n, h], ...matrixs] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((item) => +item)
);

const matrix3D = makeMatrix3D(n, matrixs);

console.log(getAnswer([m, n, h], matrix3D));
