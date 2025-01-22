import path from "path"
import {ProductsModel} from "../model/product.model.js"
import { url } from "inspector"
export default class ProductController{
    getProducts(req,res){
        const products = ProductsModel.get()
        res.render("products",{products:products})
    //     console.log(products)
    //    return res.sendFile(path.join(path.resolve(),"src","view","products.html"))
    }
    addForm(req,res){
        res.render('new-product',{errorMessage:null})
    }
    newData(req,res){
        // console.log(req.body)
        const errors=[]
        const {name,price,imageUrl} = req.body;
        if(!name || name.trim() == ''){
            errors.push("Name is required")
        }
        if(!price || price<1){
            errors.push("Price must be a Positive value")
        }
        try{
            const validUrl = new URL(imageUrl)
        }catch(err){

            errors.push("Enter a valid URL")
        }
        if(errors.length>0){
            return res.render("new-product",{errorMessage:errors[0]})
        } 
        ProductsModel.add(req.body)
        const products = ProductsModel.get()
        res.render("products",{products:products})
        res.send()
    }
}