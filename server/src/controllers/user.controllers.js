import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { User } from "../models/user.model.js";
export const register= async (req,res,next)=>{
    try {
        const {name, password, email, mobile} = req.body;
        if(!name || !password || !email || !mobile){
            return res.json({
                msg:"All fields are required",
                status:false,
            })
        }
        const hashed_password = bcrypt.hashSync(password,10);
        const newUser = await User.create({
            name,
            password:hashed_password,
            email,
            mobile,
        })
        if(!newUser){
            return res.json({
                msg:"Error creating user. Try Again.",
                status:false,
            })
        }
        return res.json({
            msg:"Registered Sucessfully.",
            status:true,
        })
    } catch (error) {
        next(error);
    }
} 

export const login = async(req,res,next)=>{
    try {
        const{email,password} = req.body;
    if(!email || !password){
        return res.json({
            msg:"All fields are required",
            status:false,
        })
    }
    const findUser = await User.findOne({email});
    if(!findUser){
        return res.json({
            msg:"Invalid Username",
            status:false,
        })
    }
    const checkPassword = bcrypt.compareSync(password,findUser.password);
    if(!checkPassword){
        return res.json({
            msg:"Invaid Username or password",
            status:false,
        })
    }
    return res.json({
        msg:"User Logged In",
        status:true,
    })
    } catch (error) {
        next(error);
    }

}