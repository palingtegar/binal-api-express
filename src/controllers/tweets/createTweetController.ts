import { NextFunction, Request, Response } from "express";
import { createTweetAction } from "../../actions/tweets/createTweetAction";

export const createTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const result = await createTweetAction(data);
    res.status(result.status).send(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
