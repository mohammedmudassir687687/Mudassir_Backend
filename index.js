const express = require('express')
const fs= require("fs")
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())

const PORT = 7000;

var corsOrigin = {
    origin:'http://localhost:5000'
}

app.use(cors(corsOrigin))

app.use(cors())

const dirPath = path.join(__dirname,'/public')


app.use(express.static(dirPath))

app.get("/",(req,res)=>{
    res.sendFile(dirPath+'/index.html')
})


app.get("/api",(req,res)=>{
    var result = fs.readFileSync('./students.json')
    parsedData = JSON.parse(result)
    res.send(parsedData)
})

app.get("/api/students",(req,res)=>{
    var result = fs.readFileSync('./students.json')
    parsedData = JSON.parse(result)
    res.send(parsedData)
})

app.get("/api/faculty",(req,res)=>{
    var result = fs.readFileSync('./grades.json')
    parsedData = JSON.parse(result)
    res.send(parsedData)
})

app.listen(process.env.PORT || PORT,()=>{
    console.log('Server started')
})

