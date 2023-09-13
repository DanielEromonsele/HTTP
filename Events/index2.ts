import fs from 'fs';


function readMyFile() {
    const readFile = fs.createReadStream("./streamFile.txt", "utf-8");
    readFile.on("error",function error () {
        console.log(`An error occurred`, error);
        
    })

    readFile.on("data", (buffer) => {
        console.log("Reading data from my file", buffer);
        
    })
}

readMyFile();