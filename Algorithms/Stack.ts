console.clear();


class Stack {
    public stack: Array<number>

    constructor(){
        this.stack = [];

    }
    addValue(val: number){
        this.stack.push(val);

        return this.stack
    }

    size(){
        return this.stack.length
    }

    removeValue(){
        this.stack.pop();
        return this.stack;
    }

    peek(){
        return this.stack[this.size() - 1]
    }

    isEmpty(){
        if (this.size() == 0) {
            return true
        }else{
            return false
        }
    }
}


let stack = new Stack()

stack.addValue(4)
stack.addValue(5)
stack.addValue(2)
stack.addValue(1)

console.log(stack);
console.log(stack.isEmpty());


// Lagos sky appears to be white and suuny today.


// const changeString = (x: string)=>{
//     let z:string = x.split(" ").reverse().join(" ");
//     return z;
// }

// console.log(" Lagos sky appears to be white and suuny today.");


const nextString = (x: string) =>{
    let z: Array<string> = x.split(" ");
    let w: string = " "

    while(z.length !== 0){
        let k = z.pop();
        w += ` ${k}`
    }

    return w
}

let word: string = "Lagos sky appears to be white and suuny today."
console.log(nextString(word));





// Assignment : 3344556 => 6554433. Find the biggest value and the smallest value after you've reversed






