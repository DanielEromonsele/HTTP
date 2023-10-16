import express, {Application, Request, Response} from "express";

const port: number = 2300;

const app: Application = express();

app.use(express.json())


app.listen(port, ()=>{
    console.log("listening on port", port)
})

process.on("uncaughtException", (error: Error|any)=>{
    console.log("uncaught exception", error);

    process.exit(1)
})

process.on("rejectionHandled", (reason: any)=>{
    console.log("rejectionHandled", reason);
    
    process.exit(1)
})