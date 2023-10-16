import { Application, Response, Request } from "express";
import moment from "moment";
import {v4 as uuid} from "uuid"

import path from "path";
import fs from "fs";


interface iData{
    id: any;
    name: string;
    courses: string
    time: string
}


let database: Array<iData> = []
export const MainApp = (app: Application) =>{


    app.get("/read-data", (req: Request, res: Response): Response=>{
        try {
            return res.status(200).json({
                message: "data read successfully"
            })
        } catch (error) {
            return res.status(404).json({
                message: "error reading data", 
            })
        }
    })

    app.get("/create-data", (req: Request, res: Response): Response=>{
        try {
            const {name, email} = req.body;

            const data = {
                id: uuid(),
                name,
                email,
                time: moment(new Date().getTime()).format("LTS")
            }


            database.push()

            let myPath = path.join(__dirname, "./database.json")

            // fs.writeFile(myPath, )
            return res.status(200).json({
                message: "data created successfully"
            })
        } catch (error) {
            return res.status(404).json({
                message: "error creating data", 
            })
        }
    })

    app.get("/update-data", (req: Request, res: Response): Response=>{
        try {
            const {name} = req.params
            
         
            return res.status(200).json({
                message: "data updated successfully"
            })
        } catch (error) {
            return res.status(404).json({
                message: "error updating data", 
            })
        }
    })


    
}