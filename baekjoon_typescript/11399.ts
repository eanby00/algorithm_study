// https://www.acmicpc.net/problem/11399
// ATM

// 가설
// 들어온 배열을 오름차순으로 정렬한다.
// 가장 먼저 들어온 사람의 시간 만큼 다른 사람들은 대기해야 하기 때문에
// 먼저 들어온 사람의 시간이 짧다면 그만큼 중복되는 시간에서 이득을 가질 수 있다.
// 배열을 순회하며 자신보다 낮은 인덱스의 값들을 모두 더한 값을 가지는 배열을 만든다.
// 생성된 배열의 값들을 모두 합치고 그것을 출력한다.

import * as fs from 'fs';

const INPUT_LOCATION = 'inputs.txt';

const sum = (args: number[]) => {
  return args.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
};

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [, watingTimes] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((watingTime) => parseInt(watingTime))
);

watingTimes.sort((a, b) => a - b);

const answers: number[] = [];
watingTimes.forEach((watingTime, index) => {
  if (index === 0) {
    answers.push(watingTime);
  } else {
    answers.push(answers[index - 1] + watingTime);
  }
});

console.log(sum(answers));
