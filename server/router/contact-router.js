import express from "express";
// import { Contact } from "../models/contact-modal.js";
import { contactForm } from "../controller/contact-controllers.js";
const router = express.Router();


router.route("/contact").post(contactForm);


export default router;