// https://www.acmicpc.net/problem/9095
// 1, 2, 3 더하기

// 가설
// 1을 나타내는 방법: 1
// 2를 나타내는 방법: 1 + 1, 2 => 2
// 3을 나타내는 방법: 1 + 1 + 1, 1 + 2, 2 + 1, 3 => 4
// 4를 나타내는 방법: 7
// 1+1+1+1 -> 3을 나타내는 방법 + 1
// 1+1+2 -> 2을 나타내는 방법 + 2
// 1+2+1 -> 3을 나타내는 방법 + 1
// 2+1+1 -> 3을 나타내는 방법 + 1
// 2+2 -> 2을 나타내는 방법 + 2
// 1+3 -> 1을 나타내는 방법 + 3
// 3+1 -> 3을 나타내는 방법 + 1

// n을 나타내는 방법 = (n-1)의 방법 + (n-2)의 방법 + (n-3)의 방법
// 5 -> 2 + 4 + 7 = 13
// 6 -> 4 + 7 + 13 = 24
// 7 => 7 + 13 + 24 = 44

import * as fs from 'fs';

const INPUT_LOCATION = 'inputs.txt';

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
const [n, ...testCases] = inputs.map((input) => parseInt(input.trim()));

const numOfRepresentN: number[] = [0, 1, 2, 4];
const answers: number[] = [];

testCases.forEach((testCase) => {
  if (!numOfRepresentN[testCase]) {
    for (let index = numOfRepresentN.length; index <= testCase; ++index) {
      numOfRepresentN.push(
        numOfRepresentN[index - 1] +
          numOfRepresentN[index - 2] +
          numOfRepresentN[index - 3]
      );
    }
  }

  answers.push(numOfRepresentN[testCase]);
});

console.log(answers.join('\n'));
