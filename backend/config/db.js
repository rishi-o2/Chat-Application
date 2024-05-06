const mongoose = require("mongoose");
const color = require("colors");
const connectDB= async()=>{
    try{
        const uri = "mongodb+srv://rishiind94:rishiind94@cluster0.e1e8xqg.mongodb.net/?retryWrites=true&w=majority";
        const conn = await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected `.cyan.underline)

    }catch(error)
    {
          console.log(error);
          process.exit();
    }
}

module.exports = connectDB;