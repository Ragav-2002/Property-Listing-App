require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/db')
const app = express()
app.use(express.json())
app.use(cors())
const recordCon = require('./app/controllers/recordCon')

//db connection
dbConnect()

//api's
app.post('/create/record', recordCon.create)
app.put('/update/record/:id', recordCon.update)
app.delete('/delete/record/:id', recordCon.delete)
app.get('/getRecords', recordCon.getRecords)

//starting server
const port = process.env.PORT || 4040
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})