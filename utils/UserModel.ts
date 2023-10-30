import { ObjectId } from "mongodb";


 export class userModel {
        public _id : ObjectId
        public name: string;
        public score: number;
        public subject: Array<string>

    constructor(name: string, subject:  Array<string>, score: number) {
        this._id = new ObjectId()
        this.name = name;
        this.subject = subject;
        this.score = score;
    }
}