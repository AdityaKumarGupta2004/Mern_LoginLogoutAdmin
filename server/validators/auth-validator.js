import { z } from "zod";



// export const loginSchema = loginSchema.extend({
export const loginSchema = z.object({
    email: z
      .string({ required_error: "Email is required." })
      .trim()
      .email({ message: "Invalid email-address" })
      .min(3, { message: "Email must be exactly of 3 characters." })
      .max(255, { message: "Email must not be more than 255 characters." }),
    password: z
      .string({ required_error: "Password is required." })
      .min(7, { message: "Password must atleast be of 6 characters." })
      .max(1024, { message: "Password can't be greater than 1024 characters." }),
  });

  export const signupSchema = z.object({
    username: z
      .string({ required_error: "Name is required" })
      .trim()
      .min(3, { message: "Name atleast be of 3 chars" })
      .max(255, { message: "not more than 255" }),
    email: z
      .string({ required_error: "email is required" })
      .trim()
      .email({message:"Invalid Email address"})
      .min(3, { message: "email atleast be of 3 chars" })
      .max(255, { message: "not more than 255" }),
    phone : z
      .string({ required_error: "phone is required" })
      .trim()
      .min(5, { message: "phone atleast be of 3 chars" })
      .max(12, { message: "not more than 12" }),
    password: z
      .string({ required_error: "Name is required" })
      .min(4, { message: "min 7 chars" })
      .max(255, { message: "not more than 255" }),
  });