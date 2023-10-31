import {Router} from "express"
import { createStudents,  seeStudents, readStudentsbyId, readStudentsbyScore, readStudentsbyCourse, updateStudents, deleteStudents } from "../controller/classController"

const router: Router = Router()

router.route("/create-Students").post(createStudents)
router.route("/read-Students").get(seeStudents)
router.route("/read-Students-id/:StudentsID").get(readStudentsbyId)
router.route("/read-Students-byscore").get(readStudentsbyScore)
router.route("/read-Students-byCourse").get(readStudentsbyCourse)
router.route("/update-Students-id/:StudentsID").patch(updateStudents)
router.route("/delete-Students-id/:StudentsID").delete(deleteStudents)

export default router

