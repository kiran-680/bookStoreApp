const express=require("express")

const {handleLogin,handleSignUp}=require("../controller/user.controller.js")

const router =express.Router()


router.post("/signup",handleSignUp)

router.post("/login",handleLogin)




module.exports=router;