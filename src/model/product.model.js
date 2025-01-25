
export class ProductsModel{
    constructor(_id,_name,_desc,_price,_imgURL){
        this.id = _id
        this.name = _name
        this.desc = _desc
        this.price = _price
        this.imageUrl = _imgURL
    }

     static get(){
        return products
    }
    

    static add(bodyObj){
        const newProduct = new ProductsModel(
            products.length+1,
            bodyObj.name,
            bodyObj.desc,
            bodyObj.price,
            bodyObj.imageURL,
        )
        products.push(newProduct)
    }
    static update(UpdateProduct){
        const index = products.findIndex(p => p.id == UpdateProduct.id) 
        products[index] = UpdateProduct

    }
    static getById(id){
        return products.find(p => p.id == id)
    }
}
let products =[
        new ProductsModel(1,"Iphone-15","Experience the iPhone 15 your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy.", 60099.99, "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6525/6525459_sd.jpg"),
        new ProductsModel(2,"Electric room heater","You can keep this Electric room heater in a significant small space of your room and travel with it anywhere, thanks to its compact design.", 689.99, "https://m.media-amazon.com/images/I/71oOenG+JpL._AC_SL1500_.jpg"),
        new ProductsModel(3,"Fan","You can stay cool even on hot and humid days with the Orient Electric Ujala Air Ceiling Fan. Its wide-ribbed blades are designed to last long while also reducing your maintenance efforts.", 2239.99, "https://th.bing.com/th?id=OIP.8SExPphEx5-anUOB0dGtZQHaLV&w=202&h=309&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"),
     ]
