const Products = require("./productSchema")

const productsGetHome = async (req, res, next) => {
    try {
        console.log("here5")
        const product_response = await Products.find({}).where("onHome").equals(true)
        const latest_products_response = await Products.find({}).sort({ created_at: -1 }).limit(8)
        if (product_response) {
            req.products_home = product_response
            req.latest_products = latest_products_response
            return next()
        }
        return res.status(402).json({
            message: "unable to fetch products on home",
            status: 402
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "something went wrong",
            data: err,
            status: 500
        })
    }
}

module.exports = productsGetHome