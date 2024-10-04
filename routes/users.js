import express from "express";
const router = express.Router();
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controller/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

//update new user
router.put("/:id",verifyUser, updateUser);

//delete new user
router.delete("/:id",verifyUser, deleteUser);

//get Single user
router.get("/:id",verifyUser, getSingleUser);

//get all user
router.get("/",verifyAdmin, getAllUser);


export default router;