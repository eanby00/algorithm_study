# baekjoon의 알고리즘 풀이 저장
- typescript 주력으로 하루에 1~2문제씩 풀기
- 문제 풀이를 통해 typescript 실력 향상과 사고력 향상을 노림
- [solved.ac](https://solved.ac/class)의 클래스를 기준으로 진행할 예정

### typescript에서의 input, output 1
```
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input: string = ''
rl.on("line", function(line): void {
    input = line.trim();
    rl.close();
})

rl.on("close", function():void {
    let numbers: number[] = input.split(" ").map(number => (parseInt(number)**2));
    let sum: number = numbers.reduce((accumulator: number, number : number): number => accumulator + number);
    let result: number = sum % 10;
    console.log(result)
})
```
- input은 rl.on("line", ...)에서
- output은 rl.on("close", ...)에서

```
rl.on("line", function(line:string):void {
    let input: string = line.trim();
    if (input === '0') {
        rl.close();
    }
    let numbers: number[] = input.split("").map(number => parseInt(number));
    inputs.push(numbers);
});
```
- 여러줄 입력을 받아야 하는 경우 rl.close()를 엔드 조건에 하게 만들어라

### typescript에서의 input, output 2
```
import * as fs from 'fs';
const input = fs.readFileSync('inputs.txt').toString().trim().split("\n"); 
```
- 위의 코드를 이용해서 또 다른 방식으로 input할 수 있음
- 위의 코드의 경우 1번 방식과는 달리 inputs.txt에 미리 값을 넣어둠으로써 테스트를 간소화할 수 있음
- 실제 코드 제출 시에는 "./dev/stdin"를 사용해주어야 함

### shift 연산은 효율적이지 못하다.
- shift 연산은 최악의 경우 O(n)의 시간복잡도를 보여준다.
- shift 연산이 계속 필요한 경우 queue를 구현하라

### 시간 초과가 나올 경우 생각해볼것
- console.log()를 이곳저곳에서 하는 경우 시간 초과가 나올 수 있다.
- 답은 한 곳에 묶어서 한 번에 출력할 것