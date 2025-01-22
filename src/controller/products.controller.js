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
    newData(req,res,next){
        // console.log(req.body)
        ProductsModel.add(req.body)
        const products = ProductsModel.get()
        res.render("products",{products:products})
        res.send()
    }
}
