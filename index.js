import express, { urlencoded } from "express"
import ProductController from "./src/controller/products.controller.js"
import path from "path"
import ejsLayouts from "express-ejs-layouts"
import validateProduct from "./src/middlewares/validateProduct.middleware.js"
const server = express()
server.use(express.urlencoded({extended:true}))
server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),"src","view"))
server.use(ejsLayouts)
server.use(express.static("src/public"))
const productcontroller = new ProductController()
server.get("/",productcontroller.getProducts)
server.post('/',validateProduct,productcontroller.newData)
server.get("/new", productcontroller.addForm);
server.get("/update-product/:id",productcontroller.getupdateProductById)
server.post('/delete-product/:id',productcontroller.deleteProduct)
server.post("/update-product",productcontroller.updateProduct)
server.use(express.static("src/view"))
server.listen(3100,()=>{
    console.log("port running on 3100")
})
