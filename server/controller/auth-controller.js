import { User } from "../models/user-model.js";
// import bcryptjs from 'bcryptjs';


export const home = async (req, res) => {
  try {
    res.status(200).send("Hello this is Adi");
  } catch (error) {
    console.log(error);
  }
};
export const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, phone } = req.body;
    const userExist =  await User.findOne({ email });

    if (userExist) return res.status(400).json({ message: "email already exist" });
    // // hash the password 1st way
    // const saltRound= 10;
    // const  hash_pass = await bcryptjs.hash(password.saltRound);
    const userCreated=await User.create({username, email, password, phone});
    // res.status(200).send("Welcome to the Register ");
    res.status(200).json({ message: "registration Successfull",token: await userCreated.generateToken(),UserId: userCreated._id.toString()});
  } catch (error) {
    console.log(error);
  }
};

export const login = async(req,res) =>{
  try {
    const {email,password} = req.body;
    const userExist =  await User.findOne({ email });

    if (!userExist) return res.status(400).json({ msg: "invalid credintals" });

    // const user = await bcryptjs.compare(password,userExist.password);
    const user = await userExist.comparePassword(password);
    if(user){res.status(201).json({ message: "login Successfull",token: await userExist.generateToken(),UserId: userExist._id.toString()})}
    else {res.status(401).json({message:"invalid Credintals"})};
  } catch (error) {
    console.log("Loginn error",error);
    res.status(500).json("Internal server error");
    // next(error);
  }
}

export const user = async(req,res)=>{
  try {
    const userData = req.user;

    return res.status(200).json({userData});
  } catch (error) {
    console.log(`error form the userr route ${error}`);
    res.status(500).json("Internal server error");
   
    // next(error);

  }
}