import express from 'express'
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json())

app.get('/helo', (req,res)=>{
    return res.status(200).json('hello');
})

app.listen(3000, () => {
    console.log('API esta no ar!')
})  