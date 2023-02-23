import Questions from '../models/Question.js'
import mongoose from 'mongoose'

export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new Questions({...postQuestionData, userId: req.userId})
    try {
        await postQuestion.save();
        res.status(200).json("Posted question success")
    } catch (error) {
        console.log(error)
        res.status(409).json("cant post the question")
    }
}

export const getAllQuestions = async (req, res) => {
    try {
        const questionList = await Questions.find()
        res.status(200).json(questionList)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}