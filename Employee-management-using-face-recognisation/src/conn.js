const mongoose = require("mongoose");

exports.connectMongoose = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/emplyeeDB").then(() => {
        console.log(" connection successful");
    }).catch((e)=>{
        console.log(" no connection");
    });
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstname: String,
    lastname: String,
})

exports.User = mongoose.model("employee",userSchema);