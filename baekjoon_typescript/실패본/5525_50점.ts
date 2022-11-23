// https://www.acmicpc.net/problem/5525
// IOIOI

// 순회를 통해서 해당 문자열에 P가 있는지 확인
// 있다면 순회를 할 때 +1를 해서 하나의 IOI를 스킵

import { readFileSync } from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const isValidIOI = (
  testString: string,
  index: number,
  standardValue: string
) => {
  let testingValue = '';
  for (let i = 0; i < standardValue.length; ++i) {
    if (index + i > testString.length - 1) {
      return false;
    }

    testingValue += testString[index + i];
  }
  return testingValue === standardValue;
};

const inputs = readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [n, m, s] = inputs.map((input) => input.trim());

const P_N = 'I' + 'OI'.repeat(+n);
let answer = 0;

let flag = false;
for (let index = 0; index < +m; ++index) {
  if (flag) {
    if (isValidIOI(s, index, 'IOI')) {
      answer += 1;
      index += 1;
    } else {
      flag = false;
    }
  }
  if (isValidIOI(s, index, P_N)) {
    answer += 1;
    index += P_N.length - 2;
    flag = true;
  }
}

console.log(answer);
