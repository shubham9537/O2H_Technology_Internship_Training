
const express=require("express")
const prisma=require("../db/prismaClient")

const router=express.Router()

router.post("/register",async(req,res)=>{
    const {name,email,password}=req.body

    if(!name || !email || !password){
        return res.status(401).json({error:"Please fill all the fields"})
    }

    const findUser=await prisma.user.findUnique({
        where:{
            email:email
        }
    })

    if(findUser){
        return res.status(422).json({error:"User already exists"})
    }

    const user=new prisma.user({
        name,email,password
    })

    await prisma.user.create({
        data:user
    })

    res.status(201).json({message:"User registered successfully"})

})

module.exports=router