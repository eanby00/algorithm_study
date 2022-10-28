"use strict";
// https://www.acmicpc.net/problem/11050
// 이항계수
exports.__esModule = true;
var fs = require("fs");
var findFactorial = function (num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * findFactorial(num - 1);
    }
};
var findBinomialCoefficient = function (n, k) {
    var nFactorial = findFactorial(n);
    var kFactorial = findFactorial(k);
    var nkFactorial = findFactorial(n - k);
    return nFactorial / (kFactorial * nkFactorial);
};
var inputs = fs
    .readFileSync("inputs.txt")
    .toString()
    .trim()
    .split(" ")
    .map(function (input) { return parseInt(input); });
console.log(findBinomialCoefficient(inputs[0], inputs[1]));
