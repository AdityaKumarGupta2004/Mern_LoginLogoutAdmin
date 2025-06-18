import { Service } from "../models/service-modal.js";

export const services = async (req, res) => {
  try {
    const response = await Service.find();
    if(!response) {
        res.status(404).json({msg:"No service found"});
        return;
    }
    return res.status(200).json({msg:response });
  } catch (error) {
    res.status(500).json({ msg: "error from service" });
  }
};
