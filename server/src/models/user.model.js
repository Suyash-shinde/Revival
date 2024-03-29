import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
    },
    refreshToken:{
        type:String,
    }
})

export const User = mongoose.model("User",userSchema);
