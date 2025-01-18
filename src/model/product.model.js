
export class ProductsModel{
    constructor(_id,_name,_desc,_price,_imgURL){
        this.id = _id
        this.name = _name
        this.desc = _desc
        this.price = _price
        this.imageURL = _imgURL
    }

     static get(){
        return products
    }
}
let products =[
        new ProductsModel(1,"product-1","Description for product 1", 19.99, "https://picsum.photos/id/237/200/300"),
        new ProductsModel(2,"product-2","Description for product 2", 29.99, "https://picsum.photos/seed/picsum/200/300"),
        new ProductsModel(3,"product-3","Description for product 3", 39.99, "https://picsum.photos/200/300?grayscale"),
     ]
