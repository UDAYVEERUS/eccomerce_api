const Products = require("./productSchema")
const productsGetByUser = async(req, res, next) => {
    try{
        const productId = req.params.id
        const product_response = await Products.findById(productId)
        const recommendedProducts = await Products.find({category : product_response.category}).limit(8)
        if(product_response){
            return res.status(201).json({
                message : "products fetched successfully",
                data : product_response,
                recommendation : recommendedProducts,
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
module.exports = productsGetByUser