// for every one sec

setInterval(() =>{
    // console.log("i am Daniel");
    
}, 1000)

// after one sec

setTimeout(() =>{
    // console.log("I am a guy");
    
}, 1000)

let attempts : number = 0

setInterval(() => {
//    console.log(`i have run ${attempts++} times`);
   
},2000)


setInterval(() => {
    let ad = "skip this ad in the next 5seconds"

    // console.log(ad);
    
    
setTimeout(() => {
    // console.log(`click this button to skip ad`);
    
}, 5000);
},1000)

let money = 0
 function newMoney(money:number) {
    setInterval(() => {
        console.log(`you have ${money += 2}`);
    }, 2000)
 }

 console.log(newMoney(500));




