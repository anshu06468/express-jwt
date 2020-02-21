const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log("Mongodb connected at port 27017 ");
 });
 mongoose.connection.once('open',()=>{
    console.log("MongoDB connection is now open");
 })
 
 mongoose.connection.on("error",(err)=>{
    console.log(err);
 })