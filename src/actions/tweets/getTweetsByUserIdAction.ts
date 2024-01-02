import { getTweetsByUserId } from "../../repositories/tweets/getTweetsByUserId";

export const getTweetsByUserIdAction = async (userId: number) => {
  try {
    const getTweetId = await getTweetsByUserId(userId);
    if (!getTweetId) {
      return {
        status: 404,
        message: "data not found",
      };
    }
    return {
      status: 200,
      message: "succes get date data",
      data: getTweetId,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
