import express from 'express'
import mongoose, { Mongoose } from 'mongoose'
import cors  from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Question.js'

const app = express();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/', (req, res) => {
    res.send('This is a stack overflow API')
}) 

app.use('/user', userRoutes)
app.use('/questions', questionRoutes)

const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://hrushikeshpatra24:Vh9Cx8XhJnZbK68@stackoverflowhp.cbdyvve.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))