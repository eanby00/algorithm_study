// https://www.acmicpc.net/problem/10845
import * as readline from 'readline';

class Queue {
    queue: number[] = [];
    frontIndex: number | null;
    rearIndex: number;
    lastIndex: number | null;
    queueSize: number = 0;
    length: number;
    
    constructor() {
        this.frontIndex = null;
        this.rearIndex = 0;
        this.lastIndex = null;
        this.length = 0;
    }

    setQueueSize(queueSize: number) {
        this.queue = Array(queueSize);
        this.queueSize = queueSize;
    }

    push(item: number) {
        this.queue[this.rearIndex] = item;
        if (this.rearIndex === 0) {
            this.frontIndex = 0;
        }
        this.lastIndex = this.rearIndex;
        this.rearIndex = this.rearIndex + 1
        this.length += 1
    }

    pop() : void {
        if (this.length !== 0) {
            console.log(this.queue[this.frontIndex!])
            this.frontIndex! += 1;
            this.length -= 1
        } else {
            console.log(-1)
        }
    }

    size(): void {
        console.log(this.length);
    }

    empty(): void {
        if (this.length === 0) {
            console.log(1)
        } else {
            console.log(0)
        }
    }

    front(): void {
        if (this.length !== 0) {
            console.log(this.queue[this.frontIndex!])
        } else {
            console.log(-1)
        }
    }

    back(): void {
        if (this.length !== 0) {
            console.log(this.queue[this.lastIndex!])
        } else {
            console.log(-1)
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputNumber: number = 0;
let count: number = 0;
const queue = new Queue();
rl.on("line", function(line: string): void {
    let input: string = line.trim();
    if (inputNumber === 0) {
        inputNumber = parseInt(input);
        queue.setQueueSize(inputNumber);
    } else {
        const [command, item] = input.split(" ");
        switch(command) {
            case 'push':
                queue.push(parseInt(item))
                break
            case 'pop':
                queue.pop();
                break
            case 'size':
                queue.size();
                break
            case 'empty':
                queue.empty();
                break
            case 'front':
                queue.front();
                break
            case 'back':
                queue.back();
                break
        }
        count += 1
    }
    if (inputNumber === count) {
        rl.close();
    }
})