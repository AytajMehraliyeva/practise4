const cors=require("cors")
const express=require("express")

require('dotenv').config()
const mongoose=require("mongoose")
const productRouter=require('./routing/Products.router')
const app=express()
const PORT=process.env.PORT||3030

app.use(cors())
app.use(express.json())
app.use("/cards", productRouter)

mongoose.connect("mongodb+srv://tu7lzxxdc:aytac123@cluster0.fvv4h2i.mongodb.net/").then(res=>{
    console.log("Connect to db")
})

app.listen(PORT, ()=>{
    console.log("App runinig om 3030")
})


