## baekjoon의 알고리즘 풀이 저장
- typescript 주력으로 하루에 1~2문제씩 풀기
- 문제 풀이를 통해 typescript 실력 향상과 사고력 향상을 노림
- [solved.ac](https://solved.ac/class)의 클래스를 기준으로 진행할 예정

### typescript에서의 input, output
```
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input: string = ''
rl.on("line", function(line): void {
    input = line.toString().trim();
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