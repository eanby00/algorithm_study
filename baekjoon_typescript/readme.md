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
- reference: https://stackoverflow.com/questions/51528780/typescript-check-typeof-against-custom-type

#### 해당 코드 분석
```
const methodType = ['push', 'pop', 'size', 'empty', 'top' ] as const;
```
- as const로 인해 methodType의 type은 readonly ["push", "pop", "size", "empty", "top"]
    - readonly의 경우 후에 수정하는 것이 불가능함
    - 해당 문구를 제거하면 type은 정상적으로 바뀌지 않음
```
type MethodType = (typeof methodType)[number];
```
> The type T[K] is a lookup type which gets the type of the property of T whose key is K. In (typeof list)[number], you're getting the types of the properties of (typeof list) whose keys are number. Arrays like typeof list have numeric index signatures, so their number key yields the union of all numerically-indexed properties.
- T[k]의 경우 키가 K인 T의 타입 유형을 가져옴
- 해당 예시에서처럼 배열에는 [숫자 인덱스](https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types)가 있음으로 숫자 키는 인덱스와의 결합을 의미함

- 해당 과정을 통해 readonly ["push", "pop", "size", "empty", "top"]가 "push" | "pop" | "size" | "empty" | "top"로 변함

```
function isMethodType(command: any): command is MethodType {
    return methodType.includes(command);
}
```
- const methodType과 들어온 값을 비교해 있다면 true return
- true로 인해 command is MethodType이 성립되고
- 들어온 command는 type이 MethodType으로 인식됨?