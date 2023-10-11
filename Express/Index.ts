import express, {Application, Request, Response} from "express";

const port: number = 2300;

const app: Application = express();

app.use(express.json())

const db = [
    {
        name: "michael",
        age: 21,
        email: "michael@gmail.com"
    },
    {
        name: "Daniel",
        age: 20,
        email: "daniel@gmail.com"
    },
    {
        name: "Sylvia",
        age: 22,
        email: "sylvia@gmail.com"
    },
]

// Default Get


app.get("/", (req: Request, res: Response)=>{
    res.send("My first Server")
})


app.get("/get-all",(req:Request, res: Response)=>{
    res.send(db)
})

// POST 

app.post("/post", (req: Request, res: Response)=>{
    let newUser = req.body
    db.push(newUser)
    res.send(db)
})




app.listen(port, ()=>{
    console.log("listening on port", port)
})