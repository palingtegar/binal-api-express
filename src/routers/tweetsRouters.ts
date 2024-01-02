import express from "express";
import { createTweetController } from "../controllers/tweets/createTweetController";
import { getTweetsController } from "../controllers/tweets/getTweetsController";
import { deleteTweetController } from "../controllers/tweets/deleteTweetController";
import { updateTweetController } from "../controllers/tweets/updateTweetCotroller";

const router = express.Router();
//routers
router.post("/", createTweetController);
router.get("/", getTweetsController);
router.delete("/:id", deleteTweetController);
router.patch("/:id", updateTweetController);

export default router;
