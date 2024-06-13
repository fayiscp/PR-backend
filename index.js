const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv').config()
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.mongourl).then(() => {
    console.log('database are connected')
})


let userRouter = require("./routes/userRoute")
let serviceRouter = require("./routes/serviceRoute")


// app.use('user',userRouter)
// app.use('/services', serviceRouter)

app.listen(3000, ()=>{
    console.log("port 3000 connected");
})