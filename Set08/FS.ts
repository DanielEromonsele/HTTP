import { error } from "console";
import { errorMonitor } from "events";
import fs from "fs"
import path from "path"

fs.mkdir("./NewClass", (error):void =>{
    if(error){
        console.log("an error in creating folder", error);
    }else{
        console.log("folder created successfully");
        
    }
})


// const Msg= "Help me buy food"
// fs.writeFile(path.join(__dirname, "NewClass", "NewFile.txt"), Msg, (error): void=> {
//     if (error) {
//         console.log("Error witing a file", error);
//     }
//     else{
//         console.log("New file added");
        
//     }
// })



// // fs.appendFile(path.join(__dirname, "NewClass", "NewFile.txt"),  (error): void=> {
// //     if (error) {
// //         console.log("An error in appending a file", error);
// //     }
// //     else{
// //         console.log("New file appended");
        
// //     }
// // })


// const Msg2: string[]= ["\n Help me buy food ", "\n Be relentless ","\n Help me buy snacks "]
// setInterval(() => {
//     let randMsg = Math.floor(Math.random() * Msg2.length)
//     fs.appendFile(path.join(__dirname, "NewClass", "NewFile.txt"), Msg2[randMsg], (error): void=> {
//         if (error) {
//             console.log("Error witing a file", error);
//         }
//         else{
//             console.log("New file added");
            
//         }
      
//     })
// }, 5000)

// const Msg3= ".\nBuy snacks for stanley o"
// setTimeout(() => {
//     fs.appendFile(path.join(__dirname, "NewClass", "NewFile.txt"), Msg3, (error): void=> {
//         if (error) {
//             // console.log("Error witing a file", error);
//         }
//         else{
//             // console.log("New file added");
            
//         }
      
//     })
// }, 5000)

fs.readFile(path.join(__dirname, "NewClass", "NewFile.txt"), "utf-8", (error, data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
        
    }
})

