
const os = require("os")
console.log("Esther");

const myOwn = os.cpus()
const result = (myOwn[0].model.split(" ")[2].split("-")[0].split("")[1]);
console.log(result);


const myArch = os.arch()
console.log(myArch);

const total = os.totalmem()
const getGb = Math.floor(total/1000000000)
console.log(getGb);

// console.log(os.homedir());
// console.log(os.hostname());
let getAdd = os.networkInterfaces()
let x = []
for(let el in getAdd ){
    x.push(getAdd[el])
    
}

console.log(x[1][11].address)




/** classwork: write a function that checks if a new intake's laptop matches the condition set by Codelab
 * 
 * the laptop must have the following:
 * A: model must be i3 and above
 * B: the laptop arch must be x64 and above
 * C: the laptop must be 4 totalmem and above
 */


if (result >= "3" && myArch === "x64" && getGb >= 4) {
    console.log("good laptop");
}else if(result < "3" && myArch === "x64" && getGb >= 4){
    console.log("Your laptop is Cpu info is not up to i3");
}
else if(result >= "3" && myArch !== "x64" && getGb >= 4){
    console.log("Your os architecture is less than x64 ");
}
else if(result >= "3" && myArch === "x64" && getGb < 4){
    console.log("Your total memory is really low and it needs a change");
}
else if (result >= "3" && myArch === "x64" || getGb < 4) {
    console.log("your total memory is manageable but still need some upgrades.");
}
else{
    console.log("get a new system please");
}


