// https://www.acmicpc.net/problem/11659
// 구간 합 구하기 4

// 가설 실패
// 배열을 주면 모두 합쳐주는 함수인 sum 구현
// 해당 함수에 들어가는 배열은 slice하여 생성
// 사유: 메모리 초과

// 가설
// 누적합의 배열을 만들어서 그것에 기초하여 답을 return하자

import * as fs from 'fs';

const sum = (numbers: number[]): number => {
  return numbers.reduce((prev, current) => prev + current, 0);
};

const INPUT_LOCATION = 'inputs.txt';

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
const [, numbers, ...sliceIndexs] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((item) => parseInt(item))
);

const answers: number[] = [];

sliceIndexs.forEach((sliceIndex) => {
  const [startIndex, endIndex] = sliceIndex;
  const sliceNumbers = numbers.slice(startIndex - 1, endIndex);
  answers.push(sum(sliceNumbers));
});

console.log(answers.join('\n'));
