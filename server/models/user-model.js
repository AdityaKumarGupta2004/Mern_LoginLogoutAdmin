// import 'dotenv/config';
import bcrypt from "bcryptjs";
// import { request } from "express";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
    },
    phone:{
        type:Number,
        require: true,
    },
    password:{
        type:String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default:false,
    }
});

userSchema.pre('save',async function(next){
    const user = this ;
    if(!user.isModified("password")){
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_pass = await bcrypt.hash(user.password,saltRound);
        user.password= hash_pass;
    } catch (error) {
        next(error)
    }
})

userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password,this.password);
};

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        
        {
            expiresIn: "30d",
        }
    );
    } catch (error) {
        console.error("error from token",error);
    }
}

export const User = new mongoose.model('User',userSchema);