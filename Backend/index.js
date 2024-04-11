// importing package 

const express=require("express")
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const cors=require("cors")
dotenv.config()



// importing routes 

const bookRoute=require("./route/book.route.js")
const userRoute=require("./route/user.route.js")





const app= express()


const PORT=process.env.PORT || 3456

const DATABASE_URI=process.env.MONGODB_URI

// connect to the mongodb :



try {
    
    mongoose.connect(DATABASE_URI)

    
} catch (error) {
    console.log("ERROR  WHILE CONNECTING TO MONGODB"+error)
    
}


// middleware

app.use(cors())
app.use(express.json())


// define routes :

app.use("/book",bookRoute)
app.use("/user",userRoute)


app.listen(PORT,()=>{
    console.log("App listening at PORT "+PORT)
})