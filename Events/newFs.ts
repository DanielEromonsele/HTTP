import { error } from "console"
import fs from "fs"
import path from "path"
 

const message = "welcome to Codelab"

const welcomeEvent = async () => {
    fs.mkdir("./Newfold", (error): void => {
        if (error) {
        console.log("error creating folder", error)
        } else {
            console.log("folder created successfully")
    }
})

    fs.appendFile(path.join(__dirname, "../Newfold", "sean.txt"), message, (error): void =>{
        if (error) {
            console.log("error creating sean", error)
        } else {
            console.log("Sean appended successfully")
        }
    })
}
console.log(welcomeEvent())

export default welcomeEvent;