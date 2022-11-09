// https://www.acmicpc.net/problem/11659
// 구간 합 구하기 4

// 가설
// 누적합의 배열을 만들어서 그것에 기초하여 답을 return하자

import * as fs from 'fs';

const INPUT_LOCATION = 'inputs.txt';

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
const [, numbers, ...sliceIndexs] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((item) => parseInt(item))
);

const cumulativeSum: number[] = [];

numbers.forEach((number, index) => {
  if (index === 0) {
    cumulativeSum.push(number);
  } else {
    cumulativeSum.push(cumulativeSum[index - 1] + number);
  }
});

const answers: number[] = [];

sliceIndexs.forEach((sliceIndex) => {
  const [startIndex, endIndex] = sliceIndex;

  const endValue = cumulativeSum[endIndex - 1];
  let startValue = 0;

  if (startIndex - 2 >= 0) {
    startValue = cumulativeSum[startIndex - 2];
  }

  const answer = endValue - startValue;
  answers.push(answer);
});

console.log(answers.join('\n'));
