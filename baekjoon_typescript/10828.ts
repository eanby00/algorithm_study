// https://www.acmicpc.net/problem/10828
import * as fs from 'fs';

class Stack {
    stack: number[];

    constructor() {
        this.stack = [];
    }

    push(item: number) {
        this.stack.push(item);
    }

    pop(): number {
        let item = this.stack.pop();
        if (item === undefined) {
            return -1
        } else {
            return item;
        }
    }

    size(): number  {
        return this.stack.length;
    }

    empty(): number {
        if (this.stack.length === 0) {
            return 1
        } else {
            return 0
        }
    }

    top(): number {
        if (this.stack.length === 0) {
            return -1
        } else {
            return this.stack[this.stack.length -1]
        }
    }
}

let inputs: string[] = fs.readFileSync('inputs.txt').toString().trim().split('\n');
const [num, ...commands] = inputs;
let answer: number[] = []
const stack = new Stack();

const methodType = ['push', 'pop', 'size', 'empty', 'top' ] as const;
type MethodType = (typeof methodType)[number];

function isMethodType(command: any): command is MethodType {
    return methodType.includes(command);
}

commands.forEach(line => {
    let command = line.trim().split(" ")[0];
    let item = line.trim().split(" ")[1];

    if (isMethodType(command)) {
        if (command !== 'push') {
            answer.push(stack[command]())
        } else {
            stack[command](parseInt(item))
        }
    }
})

console.log(answer.join('\n'));