const User=require("../model/user.model")

const bcrypt =require("bcrypt")

const handleSignUp=async(req,res)=>{

    // get data from the body
    
    try {

        const {fullname,email,password}=req.body
        // check if user already exists in the database:
        console.log(req.body)

        const user =await User.findOne({email:email})
        // console.log(user)
        if(user){
            return res.status(400).json({"message":"User already exists"})
        }else{

            const hashedPassword=await bcrypt.hash(password,10)


            // create User:
            const createdUser=  new User({
                fullname:fullname,
                email:email,
                password:hashedPassword
            })

            // save data 

            await createdUser.save()
            res.status(201).json({"message":"User created successfully","user":{
                _id:createdUser._id,
                fullname:createdUser.fullname,
                email:createdUser.email
            }})
        
        }
        
    } catch (error) {

        console.log("ERROR OCCURED WHILE CREATING AN USER"+error.message)
        res.status(500).json({"message":"Internal Server Error"})
        
    }

}


const handleLogin=async(req,res)=>{

try {
    const {email,password}=req.body

    const user=await User.findOne({email})
    console.log(user)

    const isMatched=bcrypt.compare(password,user.password)

    if(!user || !isMatched){
        return res.status(400).json({"message":"Invalid username or password"})
    }else{
        return res.status(200).json({"message":"user logged in successfully","user":{fullname:user.fullname,email:user.email,_id:user._id}})


    }





    
} catch (error) {

    console.log("ERROR OCCURED WHILE LOGGED IN "+error.message)
    return res.status(500).json({"message":"Internal Server Error"})
    
}



}


module.exports={handleSignUp,handleLogin}