

// // import { signupSchema } from "../validators/auth-validator.js";


// export const validate = (schema)=>async(req,res,next)=>{
//     try {
//         const parseBody = await schema.parseAsync(req.body);
//         req.body= parseBody;
//         next();
//     } catch (err) {
//         // res.status(400).json({msg:error });
//         const status =422;
//         const message = "fill the input properly";
//         const extraDetails = 
//         console.log("exact eror",err);
//         console.log(message);

//         const error ={
//             status,
//             message,
//             extradetails,

//         }
//         next(error);
//     }
// };

export const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        console.log("Exact error:", err);

        const error = {
            status: 422,
            message: "Fill the input properly",
            extraDetails: err.issues[0].message ,// Include validation details
        };

        next(error);
    }
};
