// https://www.acmicpc.net/problem/6064
// 카잉 달력

// M이 10이고 N이 12일 경우
// 3 : 1 => 10 + 3 === 12 + 1 => 13번째 해
// (13 - 1) % 12 = 0
// 10 : 12 => 10 + 10 * 5 === 12 + 12 * 4 => 60번째 해
// (10 + 10 * 5 - 12) % 12 = 0
// x + m * i - y % n === 0

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const getYears = (testDatas: number[][]) => {
  const answers: number[] = [];
  testDatas.forEach((testData) => {
    let [m, n, x, y] = testData;
    let answer = -1;

    while (x <= m * n) {
      if ((x - y) % n === 0) {
        answer = x;
        break;
      }
      x += m;
    }
    answers.push(answer);
  });

  return answers;
};

const [, ...testDatas] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n');

const testDatasCovertNumber: number[][] = testDatas.map((testData) =>
  testData
    .trim()
    .split(' ')
    .map((num) => +num)
);

console.log(getYears(testDatasCovertNumber).join('\n'));
