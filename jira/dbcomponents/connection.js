const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhisheksaxenasep:PTE3qfZH5kxGXWTz@cluster0.unitonu.mongodb.net/").then(()=>{
    console.log("Database connection successfully")
}).catch((e)=>{
    console.log("No connection",e)
})
//password=PTE3qfZH5kxGXWTz