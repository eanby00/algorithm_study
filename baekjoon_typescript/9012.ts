// https://www.acmicpc.net/problem/9012

import * as fs from 'fs';

const inputs : string[] = fs.readFileSync('inputs.txt').toString().trim().split('\n');
const [num, ...testCases] = inputs;
const answer: string[] = []

testCases.forEach(testCase => {
    const test: string[] = []
    const line: string[] = testCase.trim().split('');
    let flag = 'YES';

    for (let i = 0; i < line.length; ++i) {
        if (line[i] === "(") {
            test.push(line[i]);
        } else {
            const check = test.pop();
            if (check === undefined) {
                flag = 'NO';
                break;
            }
        }
    }

    if (test.length !== 0) {
        flag = 'NO'
    }

    answer.push(flag);
})
console.log(answer.join('\n'))