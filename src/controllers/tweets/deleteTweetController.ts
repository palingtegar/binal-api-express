import { NextFunction, Request, Response } from "express";
import { deleteTweetAction } from "../../actions/tweets/deleteTweetAction";

export const deleteTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deleted = await deleteTweetAction(Number(id));

    res.status(deleted.status).send(deleted);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
