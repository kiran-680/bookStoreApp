const mongoose =require("mongoose")

const bookSchema=mongoose.Schema({
    name:{
        type:String,
    
    },
    price:{
        type:Number
    },
    title:{
        type:String
    },
    category:{
        type:String
    },
    image:{
        type:String
    },

})



// model:create a modal for book 


const Book =mongoose.model("book",bookSchema)



module.exports=Book






