const mongoose = require("mongoose")
const {Schema} = require('mongoose')

const categoriesSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required :true,
        default : ""
    },
    onHome : {
        type : Boolean,
        default : false,
        required : false
    },
    isActive : {
        type : Boolean,
        default : true,
        required :false
    },
    mastHead : {
        type : Boolean,
        required : false,
        default : false
    },
    image : {
        type : String,
        required :false,
        default : "https://m.media-amazon.com/images/I/71miJj-txUL._SL1500_.jpg"
    }
})

const Category = mongoose.model("categories", categoriesSchema)

module.exports = Category