import http, {ServerResponse, IncomingMessage} from "http"

const port : number = 1234

const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>) =>{
    res.writeHead(200)
    res.write("server")
    res.end()
})


server.listen(port, () =>{
    console.log("listening");
    
})