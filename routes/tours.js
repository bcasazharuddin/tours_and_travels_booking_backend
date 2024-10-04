import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  updateTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "../controller/tourController.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//create new tour
router.post("/", verifyAdmin ,createTour);

//update new tour
router.put("/:id",verifyAdmin, updateTour);

//delete new tour
router.delete("/:id",verifyAdmin, deleteTour);

//get Single tour
router.get("/:id", getSingleTour);

//get all tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

//get featured
router.get("/search/getFeaturedTours", getFeaturedTour);
//get tour count
router.get("/search/getTourCount",getTourCount)
export default router;
