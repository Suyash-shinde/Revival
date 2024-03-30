import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
export const checkToken=async(req,res,next)=>{
    try{
        const incomingAccessToken = req.cookies?.accessToken || 
        req.header("Authorizaton")?.replace("Bearer ", "");
        if(!incomingAccessToken){
            return res
            .status(401)
            .json({
                msg:"Unauthorized Request",
                status:false,
            })
        }
        const decodedToken= jwt.verify(incomingAccessToken,process.env.ACCESS_TOKEN_SECRET);
        const user= await User.findById(decodedToken?._id).select("-password -refreshToken");
        if(!user){
            return res
            .status(401)
            .json({
                msg:"Invalid Token",
                status:false,
            })
        }
        next();
    }
    catch(error){
        res.status(405).json({msg:"Invalid Token"});
    }
}