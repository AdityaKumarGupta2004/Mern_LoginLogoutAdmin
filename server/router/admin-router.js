import express from "express";
// import { Contact } from "../models/contact-modal.js";
import { deleteUser, getAllcontacts, getAllusers,getusersbyId,UpdateUsersbyId ,deleteContactById} from "../controller/admin-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import { adminmiddleware } from "../middlewares/admin-middleware.js";
const router = express.Router();

router.route("/users").get(authMiddleware, adminmiddleware, getAllusers);
router.route("/users/:id").get(authMiddleware, adminmiddleware, getusersbyId);
router.route("/users/update/:id").patch(authMiddleware, adminmiddleware, UpdateUsersbyId);
router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminmiddleware, deleteUser);
router.route("/contacts").get(authMiddleware, adminmiddleware, getAllcontacts);
router.route("/contacts/delete/:id").delete(authMiddleware, adminmiddleware, deleteContactById);

export default router;
