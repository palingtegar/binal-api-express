import { NextFunction, Request, Response } from "express";
import { updateTweetAction } from "../../actions/tweets/updateTweetAction";

export const updateTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = Number(req.params.id);
  try {
    const updated = await updateTweetAction(id, req.body);
    res.status(updated.status).send(updated);
  } catch (error) {
    res.status(500).send(error);
  }
};
