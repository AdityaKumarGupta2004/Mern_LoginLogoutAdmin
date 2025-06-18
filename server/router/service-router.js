import express from "express";
import { services } from "../controller/service-controller.js";
const router = express.Router();



router.route("/service").get(services);


export default router;