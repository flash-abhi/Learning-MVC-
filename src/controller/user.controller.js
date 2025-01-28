// import UserModel from "./model/user.model.js"

export default class UserController{
    getRegister(req,res){
        return res.render("registration")
    }
}