// Streams enables you to get chunks of data. Streams allows javascript/typescript to programmatically access chunks of data received over the network and process them as desired by the developer. It is also a process of transferring data fromm one part to another using buffers. They are collection of data, when working with streams, you can easily access them bits by bits. Stream Types are the readable streams, the Writeable streams, duplex streams, and transformed streams. They are basically 4 in total. 



//WRITEABLE STREAMS: The keywords used in writeable streams is the "createWriteStream"

import fs from "fs";

setInterval(()=>{
    const file = fs.createWriteStream("./streamFile.txt");

for (let i = 0; i < 1000; i++) {
  file.write(`\Welcome to set08 class ${i}`) 
}
file;
},5000)






