import { Application, Request, Response } from "express";
import { statusCode } from "../util/Statuscode";
import   {v4 as uuid}  from "uuid";
import moment from "moment";
import fs from "fs";
import path from "path";

interface iData{
    id: string;
    time: string;
    name: string;
    course: string;
}



let database : Array<iData> = [
    {
        id: "100",
        time: "2022",
        name: "Zubby",
        course: "mongo db"
    },
    {
        id: "200",
        time: "2022",
        name: "Regina",
        course: "nextjs"
    },
    {
        id: "300",
        time: "2022",
        name: "Daniel",
        course: "React"
    },
    {
        id: "400",
        time: "2022",
        name: "Michael",
        course: "Node"
    },
]

const mainApp = (app: Application) =>{
    
 


    app.get("/api/v1/read-data", (req:Request, res:Response): Response => {
        try {



            return res.status(statusCode.OK).json({
                message: "Reading from database",
                data: database,
            })
        } catch (error) {
            return res.status(statusCode.BAD_REQUEST).json({
                message: "Error reading from database"
            })
        }
    })


    // CREATE

    app.post("/api/v1/create-data", (req:Request, res:Response): Response => {
        try {

            const {name, course} = req.body;

            const data: iData = {
                id: uuid(),
                name,
                course,
                time: moment(new Date().getTime()).format("LTS")
            
            }

            database.push(data)

            const dataPath = path.join(__dirname, "data", "./database.json");

            fs.writeFile(dataPath, JSON.stringify(data), ()=>{
                
            })
            return res.status(statusCode.OK).json({
                message: "creating from database",
              data: data,
            })
        } catch (error) {
            return res.status(statusCode.BAD_REQUEST).json({
                message: "Error creating from database"
            })
        }
    });



    app.get("/api/v1/get1-data", (req:Request, res:Response): Response => {

      try {
        const {name, course} = req.body;
        const {userID} = req.params

        const user = database.find((el: iData)=>{
            return el.id === userID
        });
        return res.status(statusCode.OK).json({
            message: "getting from database",
          data: user,
        })

      } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error getting from database"
        })
      };

})


// UPDATE

app.patch("/api/v1/update-one-data/:userID", (req:Request, res:Response) => {
  try {
    const {course} = req.body;
    const {userID} = req.params

    const user: iData|any = database.find((el: iData)=>{
        return el.id === userID;
    })

    user.course  = course

    return res.status(statusCode.OK).json({
        message: "updating from database",
        data: user
    })
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
        message: "error updating from database",
    })
  }
})

// DELETE

app.delete("/api/v1/delete-one-data/:userID", (req:Request, res:Response) => {
  try {
   
    const {userID} = req.params

    const user: iData|any = database.find((el: iData)=>{
        return el.id === userID;
    })

  const newdataBase = database.filter((el: iData)=>{
    return el.id !== userID
  })

  database = newdataBase

    return res.status(statusCode.OK).json({
        message: `${user.name} has successfully been deleted from database`,
        
    })
  } catch (error) {
    return res.status(statusCode.BAD_REQUEST).json({
        message: "error deleting from database",
    })
  }
})


}

export default mainApp;