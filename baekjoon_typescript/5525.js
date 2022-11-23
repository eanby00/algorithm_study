"use strict";
// https://www.acmicpc.net/problem/5525
// IOIOI
exports.__esModule = true;
var fs = require("fs");
var _a = fs
    .readFileSync('./input/inputs.txt')
    .toString()
    .trim()
    .split('\n'), str1 = _a[0], str2 = _a[1], s = _a[2];
var _b = [+str1, +str2], n = _b[0], m = _b[1];
var dp = Array(s.length).fill(0);
for (var i = 2; i < m; i++) {
    if (s[i - 1] === 'O' && s[i] === 'I') {
        if (s[i - 2] === 'I') {
            dp[i] = dp[i - 2] + 1;
        }
        i++;
    }
}
console.log(s);
console.log(dp);
var ans = 0;
dp.forEach(function (el) { return el >= n && ans++; });
console.log(ans);
