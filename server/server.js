import "dotenv/config";

import express from "express";
import cors from "cors";
import authroute from "./router/auth-router.js";
import { connectDB } from "./utils/db.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";
// import { Contact } from './models/contact-modal.js';
import contactroute from "./router/contact-router.js";
import serviceroute from "./router/service-router.js";
import adminRoute from "./router/admin-router.js";

const app = express();
const corsOptions ={
    origin:"http://localhost:5173",
    method: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authroute);
app.use("/api/form", contactroute);
app.use("/api/data",serviceroute);
app.use("/api/admin",adminRoute);
app.use(errorMiddleware);

// app.get("/",(req, res)=>{
//  res.status(200).send("Hello")
// })

const Port = 3000;
connectDB().then(() => {
  app.listen(Port, () => {
    console.log(`server is running at ${Port}`);
  });
});
