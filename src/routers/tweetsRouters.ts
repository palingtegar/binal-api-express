import express from "express";
import { createTweetController } from "../controllers/tweets/createTweetController";
import { getTweetsController } from "../controllers/tweets/getTweetsController";
import { deleteTweetController } from "../controllers/tweets/deleteTweetController";
import { updateTweetController } from "../controllers/tweets/updateTweetCotroller";
import { getTweetsByUserIdController } from "../controllers/tweets/getTweetsByUserIdController";

const router = express.Router();

router.post("/", createTweetController);
router.get("/", getTweetsController);
router.delete("/:id", deleteTweetController);
router.patch("/:id", updateTweetController);
router.get("/:id", getTweetsByUserIdController);

export default router;
