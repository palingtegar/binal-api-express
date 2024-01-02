import { NextFunction, Request, Response } from "express";
import { getTweetsByUserIdAction } from "../../actions/tweets/getTweetsByUserIdAction";

export const getTweetsByUserIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await getTweetsByUserIdAction(Number(id));
    res.status(result.status).send(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
