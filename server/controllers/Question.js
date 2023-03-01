import Questions from '../models/Question.js'
import mongoose from 'mongoose'

export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const postQuestion = new Questions(postQuestionData)
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

export const deleteQuestion = async(req, res) => {
    const {id:_id} = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("question unavailable...")
    }

    try {
        await Questions.findByIdAndRemove(_id)
        res.status(200).json({message: "Successfully deleted..."})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const voteQuestion = async(req, res) => {
    const {id:_id} = req.params
    const { value, userId } = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("question unavailable...")
    }

    try {
        const question = await Questions.findById(_id)
        const upIndex = question.upvote.findIndex((id) => id === String(userId))
        const downIndex = question.downvote.findIndex((id) => id === String(userId))

        if(value === 'upvote'){
            if(downIndex !== -1){
                question.downvote = question.downvote.filter((id) => id !== String(userId))
            }
            if(upIndex === -1){
                question.upvote.push(userId) 
            }else{
                question.upvote = question.upvote.filter((id) => id !== String(userId))
            }
        }
        if(value === 'downvote'){
            if(upIndex !== -1){
                question.upvote = question.upvote.filter((id) => id !== String(userId))
            }
            if(downIndex === -1){
                question.downvote.push(userId) 
            }else{
                question.downvote = question.downvote.filter((id) => id !== String(userId))
            }
        }

        await Questions.findByIdAndUpdate(_id, question)
        res.status(200).json({message: "Vote done..."})
    } catch (error) {
        res.status(404).json({message: "id not found"})
    }
}