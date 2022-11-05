// https://www.acmicpc.net/problem/1676
// 팩토리얼 0의 개수

// 가설: 특정 팩토리얼마다 뒤의 0의 갯수가 증가할 것이다.
// 성립확인: 5배수의 팩토리얼마다 뒤의 0의 갯수가 하나씩 증가한다.

// const factorialN = (n: number): number => {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorialN(n - 1);
// };
// const testingNumber = 25;

// for (let n = 0; n <= testingNumber; ++n) {
//   const testValue = factorialN(n);
//   console.log(`${n}: ${testValue.toString()}`);
// }

// 가설: input을 5로 나눈값을 정수로 반환하면 답이 되지 않을까?
// fail: 단수히 5로 나눈 값을 계산하면 25와 같이 5 ** 2인 값에 대한 고려가 되지 않는다.

// 가설: 만약 5로 나누었는데도 5보다 크다면 해당 값은 5의 거듭제곱을 넘은 값이 됨
// 그렇다면 거듭제곱된 횟수를 추가로 더해야 함으로 5로 나누어지지 않을 때까지 나누면서 그 값을 모으면 answer가 아닐까

// 예시
// 20 -> 4  (4)
// 25 -> 5 -> 1 ( 5 + 1 = 6 )
// 30 -> 6 -> 1 (7)
// 125 -> 25 -> 5 -> 1 (31)

import * as fs from 'fs';

const INPUT_LOCATION: string = 'inputs.txt';

let input: number = +fs.readFileSync(INPUT_LOCATION).toString().trim();
let answer: number = 0;

while (input >= 5) {
  const countZero = Math.floor(input / 5);
  answer += countZero;
  input = countZero;
}

console.log(answer);
