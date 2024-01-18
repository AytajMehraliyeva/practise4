const mongoose= require("mongoose")

const ProductsModel=mongoose.model("ProductsModel",new mongoose.Schema({
    name:String,
    price:Number,
    img:String,
    desc:String
}))

module.exports={ProductsModel}