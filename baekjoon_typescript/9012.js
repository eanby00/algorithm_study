"use strict";
// https://www.acmicpc.net/problem/9012
exports.__esModule = true;
var fs = require("fs");
var inputs = fs.readFileSync('inputs.txt').toString().trim().split('\n');
var num = inputs[0], testCases = inputs.slice(1);
var answer = [];
testCases.forEach(function (testCase) {
    var test = [];
    var line = testCase.trim().split('');
    var flag = 'YES';
    for (var i = 0; i < line.length; ++i) {
        if (line[i] === "(") {
            test.push(line[i]);
        }
        else {
            var check = test.pop();
            if (check === undefined) {
                flag = 'NO';
                break;
            }
        }
    }
    if (test.length !== 0) {
        flag = 'NO';
    }
    answer.push(flag);
});
console.log(answer.join('\n'));
