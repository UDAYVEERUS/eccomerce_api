const Products = require("../productSchema")
const productsGet = async(req, res, next) => {
    try{
        const product_response = await Products.find({})
        if(product_response){
            return res.status(201).json({
                message : "products fetched successfully",
                data : product_response,
                status :201
            })
        }
        return res.status(402).json({
            message : "unable to fetch product",
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
module.exports = productsGet