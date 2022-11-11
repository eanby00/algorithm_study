// https://www.acmicpc.net/problem/1541
// 잃어버린 괄호

// 가설
// 식의 값을 최소로 만들기 위해서는 - 이후의 값이 최대가 되어야 한다.
// 55-(50+40)
// input을 0번 인덱스부터 순회하며 0~9로는 숫자를 만들고 -, +를 분리한다.
// 만약 -라면 다시 -가 나오기 전까지의 모든 숫자를 합친다.

import * as fs from 'fs';

const INPUT_LOCATION = 'inputs.txt';

type expressionType = (string | number)[];

const parseExpressionFromInput = (input: string): expressionType => {
  const expression: (string | number)[] = [];

  let tempNumber: string = '';

  for (let index = 0; index < input.length; ++index) {
    const current = input[index];
    if (current === '-' || current === '+') {
      expression.push(parseInt(tempNumber));
      expression.push(current);
      tempNumber = '';
    } else {
      tempNumber += current;
    }
  }
  expression.push(parseInt(tempNumber));

  return expression;
};

const findAnswer = (expression: expressionType): number => {
  let answer = 0;
  let tempNumber = 0;

  for (let index = expression.length - 1; index >= 0; --index) {
    const current = expression[index];
    if (current === '-') {
      answer -= tempNumber;
      tempNumber = 0;
    }

    if (+current) {
      tempNumber += +current;
    }
  }

  answer += tempNumber;

  return answer;
};

const input: string = fs.readFileSync(INPUT_LOCATION).toString().trim();
const expression: expressionType = parseExpressionFromInput(input);
console.log(findAnswer(expression));
