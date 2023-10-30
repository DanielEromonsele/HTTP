import {Router} from "express"
import { createBook, deleteBook,  readBookbyId, readBookbycategory, readBooks, updateBook } from "../controller/bookController"

const router: Router = Router()

router.route("/create-book").post(createBook)
router.route("/read-book").get(readBooks)
router.route("/read-book-id/:bookID").get(readBookbyId)
router.route("/read-book-byCategory").get(readBookbycategory)
router.route("/read-book-id/:bookID").patch(updateBook)
router.route("/read-book-id/:bookID").delete(deleteBook)

export default router

