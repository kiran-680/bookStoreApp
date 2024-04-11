const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({

fullname:{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    unqiue:true
},
password:{
    type:String,
    required:true
}





})


// create modal

const User=mongoose.model("User",userSchema)

module.exports=User