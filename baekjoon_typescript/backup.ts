// https://www.acmicpc.net/problem/10845
import * as readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputNumber: number = 0;
let count: number = 0;
let queue: number[] = []

rl.on("line", function(line: string): void {
    let input: string = line.trim();
    if (inputNumber === 0) {
        inputNumber = parseInt(input);
    } else {
        const [command, item] = input.split(" ");
        switch(command) {
            case 'push':
                queue.push(parseInt(item))
                break
            case 'pop':
                if (queue.length === 0) {
                    console.log(-1)
                } else {
                    console.log(queue.shift());
                }
                break
            case 'size':
                console.log(queue.length);
                break
            case 'empty':
                console.log(queue.);
                break
            case 'front':
                console.log(queue.front());
                break
            case 'back':
                console.log(queue.back());
                break
        }
        count += 1
    }
    if (inputNumber === count) {
        rl.close();
    }
})


var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var queue = [];
var answer = '';
for(var i in input){
    if(input[i].split(' ').length === 1){
        if(input[i] === 'pop'){
            if(queue.length !== 0){
                answer += queue.shift() + '\n';
            }else{
                answer += '-1\n'
            }
        }else if(input[i] === 'size'){
            answer += queue.length + '\n';
        }else if(input[i] === 'empty'){
            if(queue.length !== 0){
                answer += '0\n';
            }else{
                answer += '1\n'
            }
        }else if(input[i] === 'front'){
            if(queue.length !== 0){
                answer += queue[0] + '\n';
            }else{
                answer += '-1\n'
            }
        }else if(input[i] === 'back'){
            if(queue.length !== 0){
                answer += queue[queue.length-1] + '\n';
            }else{
                answer += '-1\n'
            }
        }
    }else{
         queue.push(input[i].split(' ')[1]);
    } 
}
console.log(answer);

