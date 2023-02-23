import  express  from "express";
import {AskQuestion} from "../controllers/Question.js"
import {getAllQuestions} from  "../controllers/Question.js"

const router = express.Router();

router.post('/Ask', AskQuestion)
router.get('/get', getAllQuestions)

export default router