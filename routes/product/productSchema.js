const mongoose = require("mongoose")
const {Schema} = require('mongoose')

const productsSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required :true,
        default : ""
    },
    description_short : {
        type : String,
        required : false,
        default : ""
    },
    price : {
        type :  Number,
        required :true,
    },
    stock : {
        type : Number,
        required : true
    },
    sku:{
        type : String,
        required : true,
        unique : true,
    },
    onHome : {
        type : Boolean,
        default : false,
        required : true
    },
    isActive : {
        type : Boolean,
        default : true,
        required :false
    },
    weight : {
        type : String,
        required : false,
    },
    
    image : {
        type : String,
        required :false,
        default : "https://futshut.com/pub/media/catalog/product/cache/dfe68f920b1e6b9bee086117b6f10a2a/f/t/ft-106.jpg"
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : "categories",
        required :true
    }
},{timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
}}
)

const Products = mongoose.model("products", productsSchema)

module.exports = Products