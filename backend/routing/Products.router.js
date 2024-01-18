const express =require("express")
const { ProductsController } = require("../controller/Products.controller")

const router=express.Router()

router.get("/", ProductsController.getAll)
router.get("/:id", ProductsController.getById)
router.post("/", ProductsController.add)
router.delete("/:id", ProductsController.delete)

module.exports= router