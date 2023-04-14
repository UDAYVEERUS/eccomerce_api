const mongoose = require('mongoose')

const MONGOURI = "mongodb+srv://uday:9670957901@cluster0.4j1e9wt.mongodb.net/test"

const connectToMongo = () => {
    mongoose.connect(MONGOURI)
    .then(console.log("connected successfully"))
}

module.exports = connectToMongo