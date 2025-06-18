import { Contact } from "../models/contact-modal.js";
import { User } from "../models/user-model.js"

export const getAllusers = async (req,res)=>{
    try {
        const users = await User.find({},{password:0});

        console.log(users);
        if (!users || users.length==0) {
            return res.status(404).json({message:"No users Found"});
        }
        return res.status(200).json(users);
        
    } catch (error) {
        next(error)
    }
}

export const getusersbyId =async (req,res)=>{
    try {
        const id = req.params.id;
        const data =await User.findOne({_id:id},{password:0});
        return res.status(200).json(data);
        
    } catch (error) {
        next(error);
    }

}
export const UpdateUsersbyId =async(req,res)=>{
    const id = req.params.id;
    const Updatebody = req.body;
    const updatedbody=await User.updateOne({_id:id},{
        $set: Updatebody,
    });

    return res.status(200).json(updatedbody);


}

export const deleteUser =async (req,res)=>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Successfully"});
        
    } catch (error) {
        next(error);
    }

}

export const getAllcontacts = async (req,res)=>{
    try {
        const contacts = await Contact.find();

        console.log(contacts);
        if (!contacts || contacts.length==0) {
            return res.status(404).json({message:"No contacts Found"});
        }
        return res.status(200).json(contacts);
        
    } catch (error) {
        next(error)
    }
}

export const deleteContactById=async (req,res)=>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"contact Deleted Successfully"});
        
    } catch (error) {
        next(error);
    }
}