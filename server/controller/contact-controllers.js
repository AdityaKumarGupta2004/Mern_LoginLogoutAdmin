import { Contact } from "../models/contact-modal.js";


export const contactForm = async(req,res)=>{
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message:"message send successfull"});

    } catch (error) {
         res.status(500).json({msg:error });
    }
}