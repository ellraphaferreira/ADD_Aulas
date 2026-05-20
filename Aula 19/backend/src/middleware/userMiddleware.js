import { response } from "express"

export function validateRegister(req,res,next){
    const {name,email,password} = req.body
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!name || name.length <3 || name.trim() == ""){
        return res.status(400).send({response: "Revise o dado name"}

            
        )
    }
    if(!emailRegex.test(email)){
        return res.status(400).send({response: "Email incorreto!"})
    }

    next();
}