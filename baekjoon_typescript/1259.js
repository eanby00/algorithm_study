"use strict";
exports.__esModule = true;
// https://www.acmicpc.net/problem/1259
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputs = [];
rl.on("line", function (line) {
    var input = line.trim();
    if (input === '0') {
        rl.close();
    }
    var numbers = input.split("").map(function (number) { return parseInt(number); });
    inputs.push(numbers);
});
rl.on("close", function () {
    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
        var numbers = inputs_1[_i];
        var check = true;
        while (numbers.length >= 2) {
            var firstNum = numbers.shift();
            var lastNum = numbers.pop();
            if (firstNum !== lastNum) {
                console.log('no');
                check = false;
                break;
            }
        }
        if (check === true) {
            console.log('yes');
        }
    }
});
