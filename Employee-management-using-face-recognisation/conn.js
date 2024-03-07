const mongoose = require("mongoose");

exports.connectMongoose = async ()=>{
    await mongoose.connect(process.env.Mongo_URL).then(() => {
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