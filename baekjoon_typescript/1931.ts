// https://www.acmicpc.net/problem/1931
// 회의실 배정

// 대표적인 그리디 알고리즘 문제
// 회의가 끝나는 시간이 가장 짧은 것들을 모으면 된다.

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const getNumberOfMeetings = (meetings: number[][]) => {
  let answer = 0;
  let endTime = 0;

  const sortMeetings = () => {
    meetings.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return a[1] - b[1];
    });
  };

  const setAnswerAndEndTime = (meetings: number[][]) => {
    for (let index = 0; index < meetings.length; ++index) {
      if (meetings[index][0] >= endTime) {
        answer += 1;
        endTime = meetings[index][1];
      }
    }
  };

  const setAnswer = () => {
    sortMeetings();
    setAnswerAndEndTime(meetings);
  };

  setAnswer();
  return answer;
};

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [, ...meetings] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((item) => +item)
);

console.log(getNumberOfMeetings(meetings));
