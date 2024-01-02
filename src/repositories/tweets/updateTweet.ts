import prisma from "../../helper/prisma";
import { ITweet } from "../../types/tweet.type";

export const updateTweet = async (data: ITweet, id: number) => {
  const { tweet } = data;

  try {
    const updated = await prisma.tweets.update({
      where: {
        id,
      },
      data: {
        tweet,
      },
    });
    return updated;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
