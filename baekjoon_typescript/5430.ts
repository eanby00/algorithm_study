// https://www.acmicpc.net/problem/5430
// AC

// 문제에서 요구하는데로 구현하기
// reverse와 shift 중 어떤 값으로 인해 시간 초과가 발생한다.

import { readFileSync } from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const parseArray = (input: string) => {
  const filteredInput = input.slice(1, -1).split(',');

  if (filteredInput[0] === '') {
    return [];
  }

  return filteredInput;
};

const parseStringFromArray = (input: string[]) => {
  return `[${input.join(',')}]`;
};

const ac = (commends: string, testCase: string[]) => {
  let isReverse = false;

  const rCommend = () => {
    isReverse = !isReverse;
  };

  const dCommend = () => {
    let result: string | undefined;
    if (isReverse) {
      result = testCase.pop();
    } else {
      result = testCase.shift();
    }

    if (result === undefined) {
      throw new Error('d 명령 에러');
    }
  };

  const commendHandler = (commends: string) => {
    for (let i = 0; i < commends.length; ++i) {
      if (commends[i] === 'R') {
        rCommend();
      }

      if (commends[i] === 'D') {
        dCommend();
      }
    }
  };

  try {
    commendHandler(commends);
  } catch {
    return 'error';
  }

  if (isReverse) {
    return parseStringFromArray(testCase.reverse());
  }
  return parseStringFromArray(testCase);
};

const inputs = readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [n, ...testCases] = inputs;

for (let i = 0; i < +n; ++i) {
  const commend = testCases[3 * i];
  const testArray = parseArray(testCases[2 + 3 * i]);
  console.log(ac(commend, testArray));
}
