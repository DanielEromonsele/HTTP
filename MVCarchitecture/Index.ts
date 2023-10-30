import express, {Application} from "express"
import cors from "cors"
import "./utils/dbConfig"
import { mainApp } from "./mainApp";

const port: number = 4455;
const app: Application = express();


app.use(cors());
app.use(express.json());
mainApp(app)

const server = app.listen(port, ()=>{
        console.log("Connected Successfully");
        
})

process.on("uncaughtException", (err: Error)=>{
    console.log("uncaughtException", err);

    process.exit(1)
})

process.on("rejectionHandled", (reason: Error)=>{
    console.log("rejectionHandled", reason);

    server.close(()=>{
        process.exit(1)
    })
})