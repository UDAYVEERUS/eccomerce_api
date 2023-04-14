const express = require('express')

const connectToMongo = require('./common/db')
connectToMongo()
const app = express()
app.use(express.json())

const cors = require("cors")
app.use(cors())

app.use("/home",require("./routes/home/route"))
app.use("/user", require('./routes/user/route'))
app.use("/categories" , require("./routes/categories/route"))
app.use("/products", require("./routes/product/route"))

app.get("/",(req,res,next)=>{
    res.send("Hello world!!")
})

const port = 3012

app.listen(port, () => {
    console.log("server started at localhost:"+port)
})