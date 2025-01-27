const validateProduct = (req,res,next)=>{
    const errors=[]
    const {name,price,imageUrl} = req.body;
    if(!name || name.trim() == ''){
        errors.push("Name is required")
    }
    if(!price || price<1){
        errors.push("Price must be a Positive value")
    }
     if(!req.file){
        errors.push("Image is Required")
    }
    if(errors.length>0){
        return res.render("new-product",{errorMessage:errors[0]})
    } 
    next()
}

export default validateProduct