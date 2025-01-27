import path from "path"
import {ProductsModel} from "../model/product.model.js"
import { url } from "inspector"
export default class ProductController{
    getProducts(req,res){
        console.log("message")
        const products = ProductsModel.get()
        res.render("products",{products:products})
    //     console.log(products)
    //    return res.sendFile(path.join(path.resolve(),"src","view","products.html"))
    }
    addForm(req,res,next){
        res.render('new-product',{errorMessage:null})
    }
    newData(req,res,next){
        // console.log(req.body)
        console.log("product is added")
        const {name,desc,price} = req.body
        const imageUrl = "images/"+req.file.filename
        console.log(imageUrl)
        ProductsModel.add(name,desc,price,imageUrl)
        const products = ProductsModel.get()
        res.render("products",{products:products})
    }
    getupdateProductById(req,res,next){
        const id = req.params.id
       const productFound = ProductsModel.getById(id)
        if(productFound){
            res.render("update-product",{product:productFound,errorMessage:null})
        }
        else{
            res.status(401).render("error-page")
        }
    }
    updateProduct(req,res){
        ProductsModel.update(req.body)
        const product = ProductsModel.get()
        res.render("products",{products:product})
    }
    deleteProduct(req,res){
      const id = req.params.id
      const productFound = ProductsModel.getById(id)
        if(!productFound){
          return res.status(401).render("error-page")
        }
       ProductsModel.delete(id)
       const product = ProductsModel.get()
    //    res.render("products",{products:product})
        return res.redirect("/")
    }
}
