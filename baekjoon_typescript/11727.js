"use strict";
// https://www.acmicpc.net/problem/11727
// 2×n 타일링 2
exports.__esModule = true;
// 가설
// 다이나믹 프로그래밍을 이용해서 구현
// n = 0 => 0
// n = 1 => 1
// n = 2 => 3 // || = ㅁ
// n = 3 => 3 + (1 * 2) = 5   // ||| =| ㅁ|  |= |ㅁ
// n = 4 => 5 + (3*2) = 11        // |||| =|| ㅁ|| |=| |ㅁ|  ||ㅁ ||= == =ㅁ ㅁ= ㅁㅁ
// 가설 dp[n] = dp[n-1] + 2 * dp[n-2]일 것이다.
var fs = require("fs");
var INPUT_LOCATION = 'inputs.txt';
var input = +fs.readFileSync(INPUT_LOCATION).toString().trim();
var df = [];
df.push(0);
df.push(1);
df.push(3);
for (var index = 3; index <= input; ++index) {
    df.push((df[index - 1] + 2 * df[index - 2]) % 10007);
}
console.log(df[input]);
