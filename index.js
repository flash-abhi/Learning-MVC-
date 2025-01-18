import express from "express"
import ProductController from "./src/controller/products.controller.js"
import path from "path"
const server = express()
server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),"src","view"))
const productcontroller = new ProductController()
server.get("/",productcontroller.getProducts)
server.use(express.static("src/view"))
server.listen(3100,()=>{
    console.log("port running on 3100")
})
