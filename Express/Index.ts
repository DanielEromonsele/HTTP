import express, {Application, Request, Response} from "express";

const port: number = 2300;

const app: Application = express();

app.use(express.json());

const db = [
    {
        id: 1,
        name: "Daniel",
        gmail: "daniel@gmail.com"
    },
    {
        id: 2,
        name: "Okwudili",
        gmail: "okwudili@gmail.com"
    },
    {
        id: 3,
        name: "Francis",
        gmail: "francis@gmail.com"
    }
]

// Default Get

app.get("/", (req: Request, res:Response)=>{
    res.send("My first Server");
    
})

app.get("/get-all", (req: Request, res: Response)=>{
    res.send(db)
});


// Post 

app.post("/post", (req: Request, res: Response)=>{
  let newUser= req.body;
  db.push(newUser);
  res.send(db)
})



app.listen(port, ()=>{
    console.log("");
    console.log("Listening on port ", port);
    
    
})