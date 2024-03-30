import mongoose from "mongoose";
import jwt from "jsonwebtoken"
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
    const accessToken= jwt.sign(
        {_id:findUser._id},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRY});
    const refreshToken= jwt.sign(
        {_id:findUser._id},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRY});
    const options={
        httpOnly:true,
        secure:true,
    }
    return res
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json({
        msg:"User Logged In",
        status:true,
    })
    } catch (error) {
        next(error);
    }
}

export const refreshAccessTokens = async(req,res,next)=>{
    try{
        const incomingRefreshToken = req.cookies?.refreshToken;
    if(!incomingRefreshToken){
        return res.json({
            msg:"Unauthorized Request",
            status:false,
        })
    }
    const decodedToken= jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET);
    const findUser = await User.findById(decodedToken?._id);
    if(!findUser){
        return res.json({
            msg:"Invalid Refresh Token",
            status:false,
        })
    }
    const accessToken= jwt.sign(
        {_id:findUser._id},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRY});
    const refreshToken= jwt.sign(
        {_id:findUser._id},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRY});
    findUser.refreshToken=refreshToken;
    await findUser.save({ validateBeforeSave: false })
    const options={
        httpOnly:true,
        secure:true,
    }
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json({
        msg:"Access Token Refreshed",
    })
    }catch(error){
        next(error);
    }
}

export const logout = async(req,res,next)=>{
    try {
        const incomingAccessToken = req.cookies?.accessToken;
        if(!incomingAccessToken){
            return res.json({
                msg:"Unauthorized Request",
                status:false,
            })
        }
        const decodedToken = jwt.verify(incomingAccessToken,process.env.ACCESS_TOKEN_SECRET);
        const findUser= await User.findById(decodedToken?._id);
        if(!findUser){
            return res.json({
                msg:"Invalid Access Token",
                status:false,
            })
        }
        findUser.refreshToken="";
        await findUser.save({ validateBeforeSave: false });
        return res
        .clearCookie("accessToken")
        .clearCookie("refreshToken")
        .json({
            msg:"User Logged Out",
            status:true,
        })
    } catch (error) {
        next(error);
    }
}