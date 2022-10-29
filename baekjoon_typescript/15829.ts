// https://www.acmicpc.net/problem/15829
// Hashing
import * as fs from "fs";

const inputs: string[] = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split("\n");
const [num, checkValue] = inputs;
const hash = new Map<number, number>(); // index : (31 ** index) % 1234567891의 map
hash.set(0, 1); // 초기값 세팅, 어떤 값의 0제곱은 항상 1임

let sum: number = 0;
checkValue
  .trim()
  .split("")
  .forEach((alphabet, index) => {
    let specialValue = hash.get(index);
    if (specialValue === undefined) {
        // 현재 값 = 이전 값 * 31 % 1234567891
      specialValue = (hash.get(index - 1)! * 31) % 1234567891;
      hash.set(index, specialValue);
    }
    const a: number = alphabet.charCodeAt(0) - 96;
    sum += a * specialValue;
  });

console.log(sum % 1234567891);
