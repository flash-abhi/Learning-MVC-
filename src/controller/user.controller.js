import UserModel from "../model/user.model.js"
import { ProductsModel } from "../model/product.model.js"
import session from "express-session"
export default class UserController{
    getRegister(req,res){
        return res.render("registration")
    }
    getLogin(req,res){
        return res.render("login",{error:null,userEmail:req.session.userEmail})
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
            req.session.userEmail = email
            const product = ProductsModel.get()
            res.render("products",{products:product,userEmail:req.session.userEmail})
        }
        else{
            res.render("login",{error:"invalid credentials",userEmail:req.session.userEmail})
        } 
    }
    logout(req,res){
            req.session.destroy((err) =>{
                if(err){
                    console.log(err)
                }
                else{
                    res.clearCookie('lastVisit')
                    res.redirect('/login')
                }
                
            })
        }
}