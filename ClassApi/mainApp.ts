import { Application, Request, Response } from "express";
import { statusCode } from "./utils/statusCode";
import student from "./Router/classRouter"

export const mainApp = (app: Application)=>{

app.use("/api/v1", student)

    app.get("/",(req: Request, res: Response)=>{
        try {
            return res.status(statusCode.OK).json({
                message: "Welcome to our Student API"
            })
        } catch (error) {
            return res.status(statusCode.BAD_REQUEST).json({
                message: "Error"
            })
        }
    })
}