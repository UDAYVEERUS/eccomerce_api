const Products = require("../productSchema")
const productsUpdate = async(req, res, next) => {
    try{
        const productId = req.params.id
        const product_response = await Products.findByIdAndUpdate(productId,req.body)
        if(product_response){
            return res.status(201).json({
                message : "products updated successfully",
                data : product_response,
                status :201
            })
        }
        return res.status(402).json({
            message : "unable to update product",
            status :402
        })
    }catch(Err){
        console.log(Err)
        return res.status(500).json({
            message : "something went wrong",
            data : Err,
            status :500
        })
    }
}
module.exports = productsUpdate