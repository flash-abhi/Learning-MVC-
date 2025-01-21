import express, { urlencoded } from "express"
import ProductController from "./src/controller/products.controller.js"
import path from "path"
import ejsLayouts from "express-ejs-layouts"
const server = express()
server.use(express.urlencoded({extended:true}))
server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),"src","view"))
server.use(ejsLayouts)

const productcontroller = new ProductController()
server.get("/",productcontroller.getProducts)
server.post('/',productcontroller.newData)
server.get("/new", productcontroller.addForm);
server.use(express.static("src/view"))
server.listen(3100,()=>{
    console.log("port running on 3100")
})
