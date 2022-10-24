// https://www.acmicpc.net/problem/1259
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs: number[][] = [];

rl.on("line", function(line:string):void {
    let input: string = line.trim();
    if (input === '0') {
        rl.close();
    }
    let numbers: number[] = input.split("").map(number => parseInt(number));
    inputs.push(numbers);

});

rl.on("close", function(): void {
    for (const numbers of inputs) {
        let check: boolean = true;
        while (numbers.length >= 2) {
            let firstNum: number | undefined = numbers.shift();
            let lastNum: number | undefined = numbers.pop();
            if (firstNum !== lastNum) {
                console.log('no')
                check = false;
                break;
            }
        }
        if (check === true) {
            console.log('yes')
        }
    }
});