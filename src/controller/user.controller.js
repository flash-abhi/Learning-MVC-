import UserModel from "../model/user.model.js"
import { ProductsModel } from "../model/product.model.js"
export default class UserController{
    getRegister(req,res){
        return res.render("registration")
    }
    getLogin(req,res){
        return res.render("login",{error:null})
    }
    postRegister(req,res){
        const {name,email,password} = req.body

        console.log(req.body)
        UserModel.add(name,email,password)
        res.render("login",{error:null})
    }
    postLogin(req,res){
        const {email,password}= req.body
        const result = UserModel.check(email,password)
        if(result){
            const product = ProductsModel.get()
            res.render("products",{products:product})
        }
        else{
            res.render("login",{error:"invalid credentials"})
        } 
    }
}