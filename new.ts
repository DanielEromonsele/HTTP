import http, {IncomingMessage, ServerResponse} from "http";
import fs from "fs";
import os from 'os'
import path from "path";


const port: number =  5000

const DataSet = [
    {
        id: "1",
        name: "Daniel Okwudili",
        stack: "Half Stack"
    },
    {
        id: "2",
        name: "jemima Udoka",
        stack: "Entry Level"
    },
    {
        id: "3",
        name: "Sean Etang",
        stack: "Full Stack"
    },
]; 

const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    // res.writeHead(200);


    // if (req.url === "/" && req.method === "GET" && res.statusCode === 200) {
    //     res.setHeader("Content-Type", "application/json");
    //     res.write(JSON.stringify(DataSet));
    //     res.end();
    // }
    // if (req.url === "/" && req.method === "POST" && res.statusCode === 200) {
    //     res.setHeader("Content-Type", "application/json");
    //     const addHere = {id: "1", name: "Michael", stack: 'fullstack'}
    //     const addAll = DataSet.push(addHere)
    //     res.write(JSON.stringify(addAll));
    //     res.end();
    // }

    // res.end();

    let connect: string = "site/"

    switch (req.url) {
        case "/":
           connect +=  "home.html" 
           res.statusCode = 200;
            break;

            case "/contact":
                connect += "contact.html"
                res.statusCode = 200;
                break;

                case "/about":
                    connect += "about.html"
                    res.statusCode = 200;
                    break;
        default:
            connect += "404.html"
            res.statusCode  = 404
            break;
    }

    fs.readFile(path.join(__dirname, connect), (err, data) => {
        if (err) {
            console.log("an error occured", err);
            res.end();
        }else {
            res.write(data);
            res.end()
        }
    })
})

server.listen(port, ()=>{
    console.log("");
    console.log("Server is listening to port on port", port);
    
    
})