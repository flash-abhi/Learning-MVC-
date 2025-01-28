import express, { urlencoded } from "express"
import ProductController from "./src/controller/products.controller.js"
import UserController from "./src/controller/user.controller.js"
import path from "path"
import ejsLayouts from "express-ejs-layouts"
import validateProduct from "./src/middlewares/validateProduct.middleware.js"
import {uploadFile}  from "./src/middlewares/fileupload.middleware.js"
const server = express()
server.use(express.urlencoded({extended:true}))
server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),"src","view"))
server.use(ejsLayouts)
server.use(express.static("src/view"))
server.use(express.static("src/public"))
const productcontroller = new ProductController()
const usercontroller = new UserController()
server.get("/",productcontroller.getProducts)
server.get("/register",usercontroller.getRegister)
server.post('/delete-product/:id',productcontroller.deleteProduct)
server.post('/',uploadFile.single('imageUrl'),validateProduct,productcontroller.newData)
server.get("/new", productcontroller.addForm);
server.get("/update-product/:id",productcontroller.getupdateProductById)
server.post("/update-product",productcontroller.updateProduct)
server.listen(3100,()=>{
    console.log("port running on 3100")
})
