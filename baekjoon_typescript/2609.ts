// https://www.acmicpc.net/problem/2609
// 최대공약수와 최소공배수

import * as fs from "fs";

const findGreatestCommonDivisor = (num1: number, num2: number): number => {
  const min = Math.min(num1, num2);
  let commonDivisor = 1;

  for (let i = 2; i <= min; ++i) {
    if (num1 % i === 0 && num2 % i === 0) {
      commonDivisor = i;
      break;
    }
  }

  if (commonDivisor === 1) {
    return 1;
  } else {
    return (
      commonDivisor *
      findGreatestCommonDivisor(num1 / commonDivisor, num2 / commonDivisor)
    );
  }
};

const findLeastCommonMultiple = (GCD: number, num1: number, num2: number) => {
  const num1Multiple = num1 / GCD;
  const num2Multiple = num2 / GCD;
  return GCD * num1Multiple * num2Multiple;
};

const inputs = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split(" ")
  .map((input) => parseInt(input));
const GCD = findGreatestCommonDivisor(inputs[0], inputs[1]);
const LCM = findLeastCommonMultiple(GCD, inputs[0], inputs[1]);
console.log(GCD);
console.log(LCM);
