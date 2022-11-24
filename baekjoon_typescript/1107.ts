// https://www.acmicpc.net/problem/1107
// 리모컨

// 0 ~ 1,000,000의 숫자를 탐색한다.
// 만약 해당 값에 고장난 버튼이 있을 경우 continue한다.
// 없다면 해당 값을 누르기 위해 필요한 버튼 조작과 n까지의 차이를 저장한다.
// 저장된 값 중 가장 작은 케이스를 출력한다.

import { readFileSync } from 'fs';

const INPUT_LOCATION = './input/inputs.txt';
const MAX_NUMBER = 1000000;
const START_CHANNEL = 100;

const getMinNumberOfFindTarget = (n: number, breakNumber: number[]) => {
  let minValue = Infinity;

  for (let i = 0; i <= MAX_NUMBER; ++i) {
    const parseStringI = i.toString();
    const stringIArray = parseStringI.split('');

    const hasBreakNumber = stringIArray.filter((element) => {
      return breakNumber.includes(+element);
    });

    if (hasBreakNumber.length > 0) {
      continue;
    }

    const currentNumber = stringIArray.length + Math.abs(n - i);

    if (currentNumber < minValue) {
      minValue = currentNumber;
    }
  }
  if (Math.abs(START_CHANNEL - n) < minValue) {
    return Math.abs(START_CHANNEL - n);
  }
  return minValue;
};

const inputs = readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const n = +inputs[0];
let breakNumber: number[] = [];

try {
  breakNumber = inputs[2].split(' ').map((item) => +item);
} catch {}

console.log(getMinNumberOfFindTarget(n, breakNumber));
