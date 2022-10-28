// https://www.acmicpc.net/problem/11050
// 이항계수

import * as fs from "fs";

const findFactorial = (num: number): number => {
  if (num <= 1) {
    return 1;
  } else {
    return num * findFactorial(num - 1);
  }
};

const findBinomialCoefficient = (n: number, k: number) => {
  const nFactorial = findFactorial(n);
  const kFactorial = findFactorial(k);
  const nkFactorial = findFactorial(n - k);
  return nFactorial / (kFactorial * nkFactorial);
};

const inputs = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split(" ")
  .map((input) => parseInt(input));

console.log(findBinomialCoefficient(inputs[0], inputs[1]));
