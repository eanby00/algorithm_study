// https://www.acmicpc.net/problem/1654
// 랜선 자르기
// 실패 사유: 시간 초과
// max가 무엇이 올지도 모르는데 위에서부터 하나씩 체크하는 것은 별로 좋지 못한듯
// max부터 찾는 것, min부터 찾는 것이 시간이 너무 오래걸릴 것 같으면 이분 탐색을 하자

import * as fs from 'fs';

const inputs: string[] = fs.readFileSync('inputs.txt').toString().trim().split('\n');
const N: number = parseInt(inputs[0].trim().split(' ')[1]);
const [, ...lines] = inputs.map(input => parseInt(input.trim()));

let answer: number = 0;
for (let i = Math.max(...lines); i > 0; --i) {
    // console.log("i:", i)
    let numberlines: number[] = lines.map(line => Math.trunc(line / i));
    // console.log("numberlines: ", numberlines)
    const sum = numberlines.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
    // console.log("sum:", sum)
    if (sum === N) {
        answer = i;
        break
    }
}
console.log(answer)