function deleteProduct(id){
    const check = confirm("Are you sure you want to delete this item ?")
    if(check){
        fetch('delete-product/'+id,{
            method:"POST"
        }).then(res => {
            if(res.ok){
                location.reload()
            }
        })
    }
}