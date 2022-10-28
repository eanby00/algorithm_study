"use strict";
// https://www.acmicpc.net/problem/2609
// 최대공약수와 최소공배수
exports.__esModule = true;
var fs = require("fs");
var findGreatestCommonDivisor = function (num1, num2) {
    var min = Math.min(num1, num2);
    var commonDivisor = 1;
    for (var i = 2; i <= min; ++i) {
        if (num1 % i === 0 && num2 % i === 0) {
            commonDivisor = i;
            break;
        }
    }
    if (commonDivisor === 1) {
        return 1;
    }
    else {
        return (commonDivisor *
            findGreatestCommonDivisor(num1 / commonDivisor, num2 / commonDivisor));
    }
};
var findLeastCommonMultiple = function (GCD, num1, num2) {
    var num1Multiple = num1 / GCD;
    var num2Multiple = num2 / GCD;
    return GCD * num1Multiple * num2Multiple;
};
var inputs = fs
    .readFileSync("inputs.txt")
    .toString()
    .trim()
    .split(" ")
    .map(function (input) { return parseInt(input); });
var GCD = findGreatestCommonDivisor(inputs[0], inputs[1]);
var LCM = findLeastCommonMultiple(GCD, inputs[0], inputs[1]);
console.log(GCD);
console.log(LCM);
