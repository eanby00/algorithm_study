"use strict";
// https://www.acmicpc.net/problem/17626
// Four Squares
exports.__esModule = true;
// 가설
// return 값은 1~4 사이로 정해짐
// 만약 n의 루트가 정수라면 return 1 => 1개의 수의 제곱이니까
// n의 루트까지 1씩 더하면서 제곱수를 구하여 뺀 값의 루트가 정수라면 return 2
// return 3의 경우는 2에서 한 번 더 뺀 값을 구하여 구함
// 나머지는 모두 return 4
var fs = require("fs");
var INPUT_LOCATION = 'inputs.txt';
var sqrtNumisInteger = function (expression) {
    return Number.isInteger(Math.sqrt(expression));
};
var getFourSquares = function (num) {
    var rootFirst = Math.sqrt(num);
    if (sqrtNumisInteger(num)) {
        return 1;
    }
    for (var i = 1; i <= rootFirst + 1; ++i) {
        if (sqrtNumisInteger(num - Math.pow(i, 2))) {
            return 2;
        }
    }
    for (var i = 1; i <= rootFirst + 1; ++i) {
        for (var j = 1; j <= i; ++j) {
            if (sqrtNumisInteger(num - Math.pow(i, 2) - Math.pow(j, 2))) {
                return 3;
            }
        }
    }
    return 4;
};
var input = +fs.readFileSync(INPUT_LOCATION).toString().trim();
console.log(getFourSquares(input));
