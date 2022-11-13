// https://www.acmicpc.net/problem/1012
// 유기농 배추

// 가설
// testcase를 분리
// 모두 0으로 이루어진 m, n의 행렬 생성
// 좌표값을 기준으로 1로 설정
// (0,0)부터 순회하면서 1을 만나면 dfs를 이용해서 연결된 1을 모두 0으로 초기화
// 마지막 좌표까지 돌면서 dfs를 실행한 횟수를 저장하고 그것을 return

// 주의할 것
// hasCabbage에서 try-catch의 이유
// 특정 좌표의 상하좌우를 검색할 떄 선언된 행렬을 넘어가는 경우에는 에러가 발생한다.
// 에러가 발생하는 경우, 즉 행렬을 넘어가는 경우는 당연히 해당 좌표에 배추가 존재하지 않는다.
// 따라서 false를 return한다.

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

class Ground {
  ground: number[][];
  answer: number;
  xLength: number;
  yLength: number;

  constructor(m: number, n: number) {
    this.ground = Array.from(Array(n), () => Array(m).fill(0));
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
