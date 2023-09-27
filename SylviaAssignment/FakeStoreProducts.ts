import http, {ServerResponse, IncomingMessage} from 'http'
import axios from 'axios';

const port: number = 2007
interface iMessage {
    message: string;
    success: boolean;
    data: null|{}|{}[]
}

const Server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>)=>{
   res.setHeader("Content-Type", "application/json")
   const {method, url } = req
   let status:number = 404

   let response:iMessage = {
     message: "NOT FOUND",
     success: false,
     data: null,
   }
   let Container = ""

 req.on('data', (chunk: any)=>{
    Container += chunk
 });
 req.on("end" ,async ()=>{
    if (method === "GET"){
        const First:any = url?.split("/")[1];
        const Second = parseInt(First);

        const FakeStoreApi = await axios.get("https://fakestoreapi.com/products")

        if(FakeStoreApi.status){
            let MainData = FakeStoreApi.data;
            let FakeStoreData = MainData.filter((el:any)=>{
                return el?.id === Second
            })
            status= 200
            response.data = FakeStoreData
            response.message = "Products successfully delivered"
            response.success = true
            res.write(JSON.stringify({response, status}))
            res.end()
        }else{
            res.write(JSON.stringify({ status, response }));
            res.end();
        }
    }else{
        response.message = "Route Not Found";
        response.data = null;
        response.success = false;
        res.write(JSON.stringify({ status, response }));
        res.end();
    }
 })

    res.end()
})

Server.listen(port, ()=>{
    console.log(`server listening on port ${port}`);    
})