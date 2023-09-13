// Http is a request response protocol that establish communication between the client and server side.
// HTTP request are requests that are being made that includes the method, URL and header.
// The HTTP request method tells the server what kind of action the client wants the server to take.
// POPULAR METHODS: 
// Get: Ask the server to retrieve a resource from a resource.
// Post: Asks the server to create a new resource.
// Update: It is divided into two (PUT and PATCH).The PUT makes changes throughout all the data in the database.
// The Patch makes changes just in one specific data in the database.
// Delete: This asks the server to delete a resource.


const { log } = require("console")
const http = require("http")

// const PORT = 2000

// const app = http.createServer((req, res)=>{
//     res.writeHead(200)
//     res.write("server is up and running 🥰")
//     res.end()
// })


// app.listen(PORT, ()=>{
//     console.log("port is up and listening");
// })

const NEW = 4000
const server = http.createServer((request, res) =>{
    res.writeHead(200)
    res.write("server is running")
    res.end()
})

server.listen(NEW, () =>{
    console.log("new is up");
})

const PORT2 = 3000 
const doc = http.createServer((reqs, res)=>{
    res.writeHead(200)
    res.write("Hello, your server is running")
    res.end()
})

doc.listen(PORT2, ()=>{
    console.log("doc is listening");
})

const PORT = 6000 
const first = http.createServer((reqs, res)=>{
    res.writeHead(200)
    res.write("Hey, your server is running")
    res.end()
})

first.listen(PORT, ()=>{
    console.log("first is listening");
})

const Esther = 5000
const newPort = http.createServer((first, second) =>{
    second.writeHead(200)
    second.write("Firm foundation")
    second.end()
})
newPort.listen(Esther, ()=>{
    console.log("gggg");
})