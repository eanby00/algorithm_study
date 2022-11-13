// https://www.acmicpc.net/problem/1012
// 유기농 배추

// 가설
// testcase를 분리
// 모두 0으로 이루어진 m, n의 행렬 생성
// 좌표값을 기준으로 1로 설정
// (0,0)부터 순회하면서 1을 만나면 dfs나 bfs를 이용해서 연결된 1을 모두 0으로 초기화
// 마지막 좌표까지 돌면서 bfs, dfs를 실행한 횟수를 저장하고 그것을 return

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

class Ground {
  ground: number[][];
  answer: number;
  xLength: number;
  yLength: number;

  constructor(m: number, n: number) {
    this.ground = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
    this.answer = 0;
    this.xLength = m;
    this.yLength = n;
  }

  setCabbage = (coordinate: number[]) => {
    const [x, y] = coordinate;
    this.ground[y][x] = 1;
  };

  hasCabbasge = (x: number, y: number): boolean => {
    try {
      if (this.ground[y][x] === 1) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  dfs = (x: number, y: number) => {
    this.ground[y][x] = 0;

    if (this.hasCabbasge(x - 1, y)) {
      this.dfs(x - 1, y);
    }
    if (this.hasCabbasge(x, y - 1)) {
      this.dfs(x, y - 1);
    }
    if (this.hasCabbasge(x + 1, y)) {
      this.dfs(x + 1, y);
    }
    if (this.hasCabbasge(x, y + 1)) {
      this.dfs(x, y + 1);
    }
  };

  setAnswer = () => {
    for (let y = 0; y < this.yLength; ++y) {
      for (let x = 0; x < this.xLength; ++x) {
        if (this.ground[y][x] === 1) {
          this.dfs(x, y);
          this.answer += 1;
        }
      }
    }
  };

  getAnswer = () => {
    console.log(this.answer);
  };

  getGround = () => {
    let ground = '';
    this.ground.forEach((line) => {
      ground += line.join(' ') + '\n';
    });
    console.log(ground);
  };
}

const inputs = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n')
  .map((input) =>
    input
      .trim()
      .split(' ')
      .map((value) => +value)
  );

const [[t], ...testCases] = inputs;

let index = 0;

for (let i = 0; i < t; ++i) {
  const [m, n, k] = testCases[index];

  const ground = new Ground(m, n);

  for (let j = index + 1; j < index + 1 + k; ++j) {
    ground.setCabbage(testCases[j]);
  }

  ground.setAnswer();
  ground.getAnswer();

  index += k + 1;
}
