import express from "express"
import ProductController from "./src/controller/products.controller.js"
const server = express()
const productcontroller = new ProductController()
server.get("/",productcontroller.getProducts)
server.use(express.static("src/view"))
server.listen(3100)