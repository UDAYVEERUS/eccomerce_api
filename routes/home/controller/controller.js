const getHome = async(req, res, next) => {
    try{
        const {categories_home, products_home, latest_products,categories_masthead} = req
        if(categories_home, products_home){
            return res.status(201).json({
                categories_home : categories_home,
                products_home : products_home,
                categories_masthead : categories_masthead,
                latest_products : latest_products
            })
        }
        return res.status(402).json({
            message : "unable to process this request",
            status : 402
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message : "something went wrong",
            data : err,
            status : 500
        })
    }
}

module.exports = getHome