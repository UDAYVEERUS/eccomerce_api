const Products = require('../productSchema')

const productsAdd = async (req, res, next) => {
    try {

        const {
            title,
            description,
            description_short,
            price,
            stock,
            sku,
            image,
            onHome,
            weight,

        } = req.body
        const product_response = await Products.create({
            title: title,
            description: description,
            description_short: description_short,
            price: price,
            stock: stock,
            sku: sku,
            weight :weight,
            image: image,
            category: req.category.id,
            onHome: onHome
        })
        if (product_response) {
            return res.status(201).json({
                message: "product added successfully",
                data: product_response,
                status: 201
            })
        }
        return res.status(402).json({
            message: "unable to add product",
            status: 402
        })
    } catch (Err) {
        console.log(Err)
        return res.status(500).json({
            message: "something went wrong",
            data: Err,
            status: 500
        })
    }
}


module.exports = productsAdd