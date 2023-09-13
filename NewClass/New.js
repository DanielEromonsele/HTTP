const http = require("http")


const port = 4000

const server = http.createServer((req, res) =>{
   if (req.url === "/"){
    res.writeHead(200, {"content-type": "text/html"});
    res.write("<html><body><p>This is my Home Page</p></body></html>")
    res.end();
   }else if (req.url === "/about"){
    res.writeHead(200, {"content-type": "text/html"});
    res.write("<html><body><p>This is my About Page</p></body></html>")
    res.end();
   }else if (req.url === "/Contact"){
    res.writeHead(200, {"content-type": "text/html"});
    res.write("<html><body><p>This is my contact page</p></body></html>")
    res.end();
   } else res.end("Invalid request")
})


server.listen(port, () =>{
    console.log(`listening on ${port}`);
})

n 