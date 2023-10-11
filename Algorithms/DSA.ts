import ProgressBar from "progress";

// const bar = new ProgressBar(":bar :percent :rate/bps :etas :current/:total ", {
//   total: 40,
// });

// const time = setInterval(() => {
//   bar.tick();
//   if (bar.complete) {
//     console.log("process completed");
//     clearInterval(time);
//   }
// }, 100);

// 1 + 2 + 3 + 4 + 5 + 6 = 21

// step 1
// const addUp = (n: number) => {
//     let count: number = n;
//     const arr: Array<number> = [];
  
//     for (let i = 1; i <= count; i++) {
//       arr.push(i);
//     }
  
//     return arr.reduce((a: number, b: number) => {
//       return a + b;
//     });
//   };
  
//   // step 2
//   const addUp2 = (n: number) => {
//     let count: number = n;
//     const arr: Array<number> = [];
//     let total: number = 0;
  
//     for (let i = 1; i <= count; i++) {
//       total += i;
//     }
  
//     return total;
//   };
  
//   // step 3
//   const addUp3 = (n: number) => {
//     return (n * (n + 1)) / 2;
//   };
  
//   console.time("start");
//   console.timeEnd("start");
  
//   console.time("addUp");
//   console.log(addUp(1000000000));
//   console.timeEnd("addUp");
//   console.log();
  
//   console.time("addUp2");
//   console.log(addUp2(1000000000));
//   console.timeEnd("addUp2");
//   console.log();
  
//   console.time("addUp3");
//   console.log(addUp3(1000000000));
//   console.timeEnd("addUp3");
//   console.log();


// MR PETER's ASSIGNMENT
// Step 1
const Reversal = (a: string[]) =>{
    let names : string[] = a;
    let reverse = names.toString().split("").reverse().join("")

    return reverse
}

// Step 2
const Reversal2 = (n: string[]) =>{
    let names : string[] = n;
    let reverse = names.reverse();

    return reverse
}

// Step 3








console.time("Reversal")
console.log(Reversal(["Daniel", "John", "stanley", "williams", "Habeeb"]));
console.timeEnd("Reversal")

console.log();

console.time("Reversal2")
console.log(Reversal2(["Daniel", "John", "Stanley", "Williams", "Habeeb"]));
console.timeEnd("Reversal2")











