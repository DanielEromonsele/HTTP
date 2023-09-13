// import Event from "events"
import welcomeEvent from "./newFs"
import path from "path"
import fs from "fs"

// console.log(Event)

// console.log(time);s

setInterval(()=>{
    let date = new Date
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " Date: " + date.getDate()

    let rand = Math.floor(Math.random() * (9999 - 1111)) + 1111
    let info = `\nWecome to Codelab, you got in on ${time}, and your registration number is ${rand}`
    fs.appendFile(path.join(__dirname, "../NewFold", "sean.txt"), info, (error)=>{
        if(error){console.log("Failed", error)}
        else{
            console.log("done");
            
        }
        
    })
}, 2000)

