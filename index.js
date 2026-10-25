import express from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()
const port = 5500
app.get("/",(req,res)=>{
    return res.status(200).json({message:"New Server Is Running V2"})
})
app.get("/Health",(req,res)=>{
    return res.status(200).json({message:"The Node Server is Healthy."})
})

app.listen(port,()=>{
    console.log("The Server is Running!!!",port)
})
