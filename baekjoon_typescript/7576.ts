// https://www.acmicpc.net/problem/7576
// 토마토

// 7569의 2차원 버전으로 구현
// matrix[n][m]
// 2차원 배열이 모두 1이라면 0을 출력한다.
// 2차원 배열에 bfs를 적용해서 행렬을 변경하고 count의 최고값을 출력한다.
// 만약 bfs가 끝났는데 0인 값이 있다면 -1을 출력한다.
// array.shift 연산을 효율화하기 위해 linked list 구현하여 개선

import { readFileSync } from 'fs';

const INPUT_LOCATION = './input/inputs.txt';
// const INPUT_LOCATION = './dev/stdin';

class Node {
  row: number;
  col: number;
  next: Node | null;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
    this.next = null;
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

  push(row: number, col: number) {
    const node = new Node(row, col);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }
    this.tail = node;
    this.length += 1;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const node = this.head!;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
    }

    this.length -= 1;

    return [node.row, node.col];
  }
}

const getAnswer = (row: number, col: number, matrix: number[][]) => {
  const visited = Array.from(Array(row), () => Array(col).fill(0));
  const queue = new Queue();

  const visitIsValid = (row: number, col: number) => {
    try {
      return visited[row][col] === 0 && visited[row][col] !== -1;
    } catch {
      return false;
    }
  };

  const bfs = () => {
    const rowTemp = [1, -1, 0, 0];
    const colTemp = [0, 0, 1, -1];

    while (queue.length > 0) {
      const [rowStandard, colStandard] = queue.shift()!;

      for (let i = 0; i < rowTemp.length; ++i) {
        const rowNext = rowStandard + rowTemp[i];
        const colNext = colStandard + colTemp[i];

        if (visitIsValid(rowNext, colNext)) {
          queue.push(rowNext, colNext);
          visited[rowNext][colNext] = visited[rowStandard][colStandard] + 1;
        }
      }
    }
  };

  const setVisited = () => {
    for (let i = 0; i < row; ++i) {
      for (let j = 0; j < col; ++j) {
        if (matrix[i][j] === -1) {
          visited[i][j] = -1;
        }

        if (matrix[i][j] === 1) {
          queue.push(i, j);
          visited[i][j] = 1;
        }
      }
    }
    bfs();
  };

  const findAnswer = () => {
    let maxValue = 0;
    for (let i = 0; i < row; ++i) {
      for (let j = 0; j < col; ++j) {
        if (visited[i][j] === 0) {
          return -1;
        }

        if (visited[i][j] > maxValue) {
          maxValue = visited[i][j];
        }
      }
    }

    return maxValue - 1;
  };

  setVisited();

  return findAnswer();
};

const inputs = readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [[m, n], ...matrix] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((item) => +item)
);

console.log(getAnswer(n, m, matrix));
