import {ObjectId} from "mongodb"

export class studentModel{
    public _id: ObjectId;
    public studentName: string;
    public age: number;
    public set: string;
    public course: Array<string>;
    public score: number

    constructor( studentName: string, age: number,
set: string, course: Array<string>, score: number){
    this._id = new ObjectId()
    this.studentName = studentName
    this.age = age
    this.set = set
    this.course = course
    this.score = score
    }
}