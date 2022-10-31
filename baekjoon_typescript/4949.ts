// https://www.acmicpc.net/problem/4949
// 균형잡힌 세상

import * as fs from "fs";

const inputs: string[][] = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.trim().split(""));

const testingInputs = inputs.slice(0, inputs.length - 1);

const answers: string[] = [];

testingInputs.forEach((input) => {
  let answer: string = "yes";
  const stack: string[] = [];
  for (let i = 0; i < input.length; ++i) {
    const value = input[i];
    if (value === "(") {
      stack.push(value);

    } else if (value === "[") {
      stack.push(value);

    } else if (value === "]") {
      const check = stack.pop();
      if (check !== "[") {
        answer = "no";
        break;
      }

    } else if (value === ")") {
      const check = stack.pop();
      if (check !== "(") {
        answer = "no";
        break;
      }

    }
  }

  if (stack.length !== 0) {
    answer = "no";
  }

  answers.push(answer);
});

console.log(answers.join("\n"));

// 들어온 문자열 중에서 [] ()를 제외한 모든 쓸모 없는 문자들은 모두 버림
// 들어온 문자가 [, ( 라면 stack에 저장
// 들어온 문자가 ], ) 라면 stack의 마지막 값과 비교해서 올바른 쌍이라면 넘어감
    // 만약 올바르지 않다면 해당 줄의 정답을 'no'로 세팅
// 해당 줄의 모든 문자를 확인한 이후 stack에 무언가 남아있다면 정답을 'no'로 세팅
    // stack에 무언가 남아 있다는 것은 [, (가 남아있는 것임으로 올바른 쌍을 이루지 않고 있음을 의미함
// 마지막에 저장된 answer들을 형식에 맞게 출력