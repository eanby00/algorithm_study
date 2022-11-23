// https://www.acmicpc.net/problem/5525
// IOIOI
// 참고: https://github.com/HojinAn/algo-js/blob/main/boj/string/BOJ5525_IOIOI.ts

// dp를 이용해서 IOI인 곳을 체크하고 IOI의 마지막 I인 곳의 dp는 +1 한다
// 정확히는 IOI의 첫번째 I 인덱스의 dp에 +1을 이용해서 IOI가 얼마나 연속되는지 체크한다.
// dp 배열에서 n보다 큰 경우만 체크해서 출력한다.

import * as fs from 'fs';
const [str1, str2, s] = fs
  .readFileSync('./input/inputs.txt')
  .toString()
  .trim()
  .split('\n');
const [n, m] = [+str1, +str2];
const dp = Array(s.length).fill(0);

for (let i = 2; i < m; i++) {
  if (s[i - 1] === 'O' && s[i] === 'I') {
    if (s[i - 2] === 'I') {
      dp[i] = dp[i - 2] + 1;
    }
    i++;
  }
}
console.log(s);
console.log(dp);
let ans = 0;
dp.forEach((el) => el >= n && ans++);
console.log(ans);
