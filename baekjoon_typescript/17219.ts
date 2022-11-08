// https://www.acmicpc.net/problem/17219
// 비밀번호 찾기

// 가설
// n개의 주소와 비밀번호를 이용하여 map을 만든다.
// 이후 m개의 주소에 대한 비밀번호를 출력한다.

import * as fs from 'fs';

const INPUT_LOCATION = 'inputs.txt';

const inputs: string[] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n');

const [firstLine, ...addressAndPasswords] = inputs.map((input) =>
  input.trim().split(' ')
);

const [n, m] = firstLine.map((item) => parseInt(item));

const settingPasswords = addressAndPasswords.slice(0, n);
const findPasswordByAddress = addressAndPasswords.slice(n);

const addressToPassword = new Map<string, string>();

settingPasswords.forEach((addressAndPassword) => {
  const [address, password] = addressAndPassword;
  addressToPassword.set(address, password);
});

const answers: string[] = [];

findPasswordByAddress.forEach((address) => {
  answers.push(addressToPassword.get(address[0])!);
});

console.log(answers.join('\n'));
