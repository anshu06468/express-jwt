const express = require('express')
const userRouter = require('./routers/user')
const port = process.env.PORT
require('./db/db')
const app = express()

app.use(express.json())
app.use(userRouter)
// app.use(function(req,res,next){
//     console.log("hello")
//     next();
// });

// app.use(function(req,res,next){
//     console.log("hello1")
//     next();
// });

// app.get("/",function(req,res){
//     res.send("sdfghjk");
// })

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})