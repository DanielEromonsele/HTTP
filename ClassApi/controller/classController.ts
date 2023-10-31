import {Request, Response } from "express"
import { statusCode } from "../utils/statusCode"
import { client, db } from "../utils/dbConfig"
import { studentModel } from "../Model/classModel"
import {ObjectId} from "mongodb"


export const createStudents = async(req: Request, res: Response)=>{
    try {

        await client.connect()
        const {studentName, age, set, course, score} = req.body

        const student = new studentModel(
            studentName,
            age,
            set,
            course,
            score
        )
            
        await db.insertOne(student)

        return res.status(statusCode.CREATED).json({
            message: "student created",
            data: student
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error"
        })
    }
}


export const seeStudents = async(req: Request, res: Response)=>{
    try {

        await client.connect()
    const student = await db.find().toArray()

        return res.status(statusCode.CREATED).json({
            message: "students found",
            data: student
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Students not seen"
        })
    }
}


export const readStudentsbyId = async(req: Request, res: Response)=>{
    try {

        await client.connect()
    const {studentID} = req.params

    const student = await db.findOne({_id: new ObjectId (studentID)})

        return res.status(statusCode.CREATED).json({
            message: "student found by Id",
            data: student,
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error"
        })
    }
}


export const readStudentsbyScore = async(req: Request, res: Response)=>{
    try {

        await client.connect()
    const {score} = req.params

    const student = await db.find({score}).toArray()

        return res.status(statusCode.CREATED).json({
            message: "student found by score",
            data: student,
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error"
        })
    }
}


export const readStudentsbyCourse = async(req: Request, res: Response)=>{
    try {

        await client.connect()
    const {course} = req.params

    const student = await db.find({course}).toArray()

        return res.status(statusCode.CREATED).json({
            message: "student found by course",
            data: student,
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error"
        })
    }
}


export const updateStudents = async(req: Request, res: Response)=>{
    try {

        await client.connect()
    const {studentID} = req.params
    const {studentName} = req.body;

    const book = await db.updateOne({_id: new ObjectId(studentID)}, {$set: {studentName}})

        return res.status(statusCode.CREATED).json({
            message: "student updated",
            data: book,
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error"
        })
    }
}

export const deleteStudents= async(req: Request, res: Response)=>{
    try {

        await client.connect()
    const {studentID} = req.params

    await db.deleteOne({_id: new ObjectId(studentID)})

        return res.status(statusCode.CREATED).json({
            message: "student deleted",
        
        })
    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: "Error"
        })
    }
}