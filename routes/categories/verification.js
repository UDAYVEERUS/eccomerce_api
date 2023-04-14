const Category = require("./categoriesSchema")

const getCategoryIdByName = async(req, res, next) => {
    try{
        const {category} = req.body
        const categories_response = await Category.findOne({title: category.toLowerCase()})
        if(categories_response){
            req.category = categories_response
            return next()
        }
        return res.status(402).json({
            message : "unable to fetched categories",
            status : 402
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message : "server error",
            data : err,
            status : 500
        })
    }
}
const getCategoryIdByUrl = async(req, res, next) => {
    try{
        const category = req.params.category
        const categories_response = await Category.findOne({title: category.toLowerCase()})
        if(categories_response){
            req.category = categories_response
            return next()
        }
        return res.status(402).json({
            message : "unable to fetched categories",
            status : 402
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message : "server error",
            data : err,
            status : 500
        })
    }
}

const getCategoryById = async(req, res, next) => {
    try{
        const category_id = req.params.id
        const categories_response = await Category.findById(category_id)
        if(categories_response){
            req.category = categories_response
            return next()
            
        }
        return res.status(402).json({
            message : "category does not exist",
            status : 402
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message : "server error",
            data : err,
            status : 500
        })
    }
}
 module.exports = {getCategoryIdByName, getCategoryIdByUrl, getCategoryById}