import http, {IncomingMessage, ServerResponse} from 'http';
import os from "os"

const server = http.createServer((req: IncomingMessage, res:ServerResponse<IncomingMessage>) => {
    res.writeHead(200)

    let userAgent = req.rawHeaders.splice(7,2).toString().split(",",)[2];
    console.log(userAgent)
    res.write(`you are using ${userAgent} with a version of ${os.version()}, a total memory of ${os.totalmem} and an arch of ${os.arch}to access me`);
    res.end();
})


const port: number = 4000
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});