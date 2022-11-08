# 목차

- [알고리즘](#알고리즘)
- [트러블슈팅](#트러블-슈팅)
- [새로 알게 된 것](#새로-알게-된-것)

# 알고리즘

### 이분탐색의 기본

- 1654번 문제 참고

```
while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const cnt = lines.reduce((prev, current) => prev + Math.floor(current/mid), 0);
    if (cnt >= N) {
        if (mid > answer) {
            answer = mid;
        }
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}
```

- while 조건을 줄 때 low <= high를 주어야 하는 것에 주의할 것
- low < high의 경우 오답인 경우가 있음
- low === high일 경우 mid는 low나 high가 되고 그 때의 값을 체크해봐야 하기 때문?
- low, high를 갱신할 때는 mid + 1, mid - 1이어야 함을 주의할 것

### 자바스크립트로 graph 구현하기

#### 인접 리스트(Adjacency List)의 경우

```
const graph: { [vertex: number]: number[] } = {};

for (let i = 1; i <= first[0]; ++i) {
  graph[i] = [];
}

edges.forEach((edge) => {
  graph[edge[0]].push(edge[1]);
  graph[edge[1]].push(edge[0]);
});

for (const vertex in graph) {
  graph[vertex].sort((a, b) => b - a);
}
```

- graph의 역할을 하는 객체를 생성
- 문제에서 주어진 조건에 따라 노드 초기화
- 문제에서 주어진 edges를 이용해서 인접 리스트의 내용물 생성

### dfs

- 재귀 함수의 형식으로 작성함
- 함수 시작과 동시에 매개변수로 온 자기 자신이 방문되었음을 표시, 경우에 따라서 추가적인 로직이 필요할 수 있음
- 자기 자신과 연결된 노드 중 방문되지 않은 값들을 대상으로 dfs함수 호출

```
const dfs = (vertex: number) => {
  visited[vertex] = 1

  graph[vertex].forEach((next) => {
    if (visited[next] === 0) {
      dfs(next);
    }
  });
};

```

- forEach이전에도 방문 여부를 체크하는 경우를 봤는데 아직까지 필요는 없었음

### bfs

- queue의 자료구조를 이용
- 함수 시작과 동시에 매개변수로 온 시작 노드가 방문되었음을 표시, 해당 노드를 queue에 push
- queue에 무언가가 들어있는 동안 반복
  - queue의 shift로 나온 노드와 연결된 노드들 중에 방문하지 않은 것이 있는지 확인
  - 방문하지 않은 노드를 방문했음을 표시하고 queue에 push

```
const visited: number[] = new Array(N + 1).fill(0);
let count = 1;
const queue: number[] = [];

const visitedLogic = (vertex: number) => {
  visited[vertex] = count;
  count += 1;
  queue.push(vertex);
};

const bfs = (vertex: number) => {
  visitedLogic(vertex);

  while (queue.length !== 0) {
    const checkVertex = queue.shift();

    graph[checkVertex!].forEach((endVertex) => {
      if (visited[endVertex] === 0) {
        visitedLogic(endVertex);
      }
    });
  }
};
```

# 트러블 슈팅

### shift 연산은 효율적이지 못하다.

- shift 연산은 최악의 경우 O(n)의 시간복잡도를 보여준다.
- shift 연산이 계속 필요한 경우 queue를 구현하라

### 시간 초과가 나올 경우 생각해볼것

- console.log()를 이곳저곳에서 하는 경우 시간 초과가 나올 수 있다.
- 답은 한 곳에 묶어서 한 번에 출력할 것

#### 17219 제출 내역

- 동일 알고리즘에서 답을 하나의 배열로 합치고 그것을 출력할 경우
  - 메모리: 81888KB 시간: 536ms
- 동일 알고리즘에서 여러군데에서 출력할 경우
  - 메모리: 94096 시간: 5948ms

### 컴파일 에러 발생시

- events.js:291 throw er; // Unhandled 'error' event
- 해당 에러라면 그냥 조금 있다가 다시 돌려보기

### sort함수는 기본적으로 문자형에 대해서 작동한다.

```
const test = [1,2,3,4,5,6,7,8,9,10,11,12,13]
console.log(test)
test.reverse();
console.log(test)
test.sort()
console.log(test)
```

- reverse한 값을 sort했을 경우 나오는 값은
- 최초의 test와 동일한 값이 아닌 1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9이다.
- 즉 문자열을 기본으로 하기 때문에 숫자형에 대해 sort할 경우에는 무조건 콜백 함수를 사용하자

# 새로 알게 된 것

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

### key와 value 쌍의 hash를 만들고자 할 때

- 결론: map함수를 이용해서 구현하는 것이 메모리와 시간을 절약할 수 있음

#### 코드 비교

- Map함수를 이용한 경우
  - 메모리: 140576KB
  - 시간: 776ms

```
const hash = new Map<number, number>();
let target = hash.get(numItem); // get방식
hash.set(numItem, target + 1);  // set방식
```

- Object를 이용해서 Map을 구현한 경우
  - 메모리: 204292KB
  - 시간: 1240ms

```
type Hash = {
    [item: number]: number;
}
const hash: Hash = {};
hash[numItem] // get방식
hash[numItem] += 1; // set방식
```

### 알파벳을 숫자로 변환하고 싶을 때

- alphabet.charCodeAt(index)함수를 이용하면 됨
- 하나의 알파벳만 검사한다면 index는 0으로 설정

### forEach에서 index를 구하고자 할 때

```
checkValue.trim().split("").forEach((alphabet, index) => {
    const a: number = alphabet.charCodeAt(0) - 96;
    console.log(a, index)

})
```

- 콜백함수의 파라미터 값으로 index를 주면 됨
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

### hash를 구현하고자 할 때 메모리를 너무 차지하는 경우가 있다면

- hash에서 값의 충돌을 방지하고자 특정 값을 제곱하면서 곱할 경우

```
console.log(31 ** 7 % 1234567891, (31 ** 6 % 1234567891 * 31) % 1234567891)
```

- 두 값은 같다
- 즉 아래의 두 식은 같다.
  - 31 \*\* n % 1234567891
  - (31 \*_ (n - 1) % 1234567891) _ 31 % 1234567891
- 거듭제곱의 경우 n의 값이 커질수록 값이 기하급수적으로 늘기 떄문에 많은 메모리를 차지한다.
- 따라서 이전 값에 특정 값을 곱하고 나머지를 구하는 식으로 구하는 편이 메모리를 절약할 수 있다.
- hash 함수를 구현했다면 해당 함수가 한 번만 쓰일 일은 없음으로 위의 특별한 값을 특정 map에 저장하고 쓰는 것도 고려할만하지 않을까?

### 문제를 잘 읽자 \*\*

- 2805번

```
if (getTrees >= m) {
    // getTrees 줄이기 => mid를 높이기 => low를 높이기
    low = mid + 1;
    if (mid > answer) {
    // mid가 기존의 answer보다 높아야지 기존에 가지고 가던 getTrees보다는 적게 가져가니까
    // getTrees === m이 없는 이유는 문제가 적어도 m을 가져가는 경우라서
      answer = mid;
      console.log(answer)
    }
} else {
    high = mid - 1;
}
```

- 위의 경우 mid > answer의 부분에 getTrees === m을 주면 오답이 되는데
- 문제에서 요구하는 답안이 정확히 m일 경우의 답을 원하는 것이 아니기 때문
- 즉, 문제를 잘 읽자

### 자바스크립트 객체의 length 구하기

- Object.keys(this.nodes).length

### sort 함수의 콜백함수

- compareFunction(a, b) < 0이라면 a가 먼저 옴
- compareFunction(a, b) > 0이라면 b가 먼저 옴

#### 내림차순 정렬

```
groundFrequency.sort((a, b) => {
    if (a.frequency < b.frequency) {
        return 1
    } else {
        return -1
    }
})
```

- a가 b보다 작을 때 1을 return한다면 b -> a 순으로 정렬됨

### class 상속시 constructor에 관하여

- 만약 상속 받은 class가 따로 constructor가 필요하지 않는 경우 constructor 생략 가능
- 즉, super도 생략 가능
