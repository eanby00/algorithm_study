# 새로 알게된 것 모음

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

### 컴파일 에러 발생시
- events.js:291 throw er; // Unhandled 'error' event
- 해당 에러라면 그냥 조금 있다가 다시 돌려보기

### custom type의 type check
#### 방법 1
```
type MethodType =  'push' | 'pop' | 'size' | 'empty' | 'top' 
function isMethodType(command: any): command is MethodType {
    return ['push', 'pop', 'size', 'empty', 'top' ].indexOf(command) !== -1;
}
```
#### 방법 2
```
const methodType = ['push', 'pop', 'size', 'empty', 'top' ] as const;
type MethodType =  (typeof methodType)[number];
function isMethodType(command: any): command is MethodType {
    return methodType.includes(command);
}
```
- any type에서 custom type인 MethodType으로 변경해야 할 때 쓸 것
- typeof MethodType으로는 작동하지 않음
```
if (isMethodType(command)) {
    if (command !== 'push') {
        answer.push(stack[command]());
    }
    else {
        stack[command](parseInt(item));
    }
}
```
- 해당 조건문을 통과하면 command는 MethodType으로 type이 변경됨
- https://stackoverflow.com/questions/51528780/typescript-check-typeof-against-custom-type
