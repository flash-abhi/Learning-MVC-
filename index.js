import express, { urlencoded } from "express"
import ProductController from "./src/controller/products.controller.js"
import UserController from "./src/controller/user.controller.js"
import path from "path"
import ejsLayouts from "express-ejs-layouts"
import validateProduct from "./src/middlewares/validateProduct.middleware.js"
import {uploadFile}  from "./src/middlewares/fileupload.middleware.js"
import session from "express-session"
import { auth } from "./src/middlewares/auth.middleware.js"
import cookieParser from "cookie-parser"
import { setLastVisit } from "./src/middlewares/lastVisit.middleware.js"
const server = express()
server.use(express.urlencoded({extended:true}))
server.set("view engine","ejs")
server.set("views",path.join(path.resolve(),"src","view"))
server.use(ejsLayouts)
server.use(express.static("src/view"))
server.use(express.static("src/public"))
server.use(session({
    secret:"SecretKey",
    resave: false,
    saveUninitialized:true,
    cookie:{secure:false}
}))
server.use(cookieParser())
server.use(setLastVisit)
const productcontroller = new ProductController()
const usercontroller = new UserController()
server.get("/",auth,productcontroller.getProducts)
server.get("/register",usercontroller.getRegister)
server.post("/register",usercontroller.postRegister)
server.get("/login",usercontroller.getLogin)
server.post("/login",usercontroller.postLogin)
server.get("/logout",usercontroller.logout)
server.post('/delete-product/:id',auth,productcontroller.deleteProduct)
server.post('/',auth,uploadFile.single('imageUrl'),validateProduct,productcontroller.newData)
server.get("/new",auth, productcontroller.addForm);
server.get("/update-product/:id",auth,productcontroller.getupdateProductById)
server.post("/update-product",auth,productcontroller.updateProduct)
server.listen(3100,()=>{
    console.log("port running on 3100")
})
