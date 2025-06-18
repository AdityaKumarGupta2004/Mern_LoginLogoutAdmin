import { Schema,model } from "mongoose";
// import { string } from "zod";

const contactSchema = new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
});

export const Contact = new model("Contact",contactSchema);

