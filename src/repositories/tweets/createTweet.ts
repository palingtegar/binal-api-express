import prisma from "../../helper/prisma";
import { ITweet } from "../../types/tweet.type";

export const createTweet = async (data: ITweet) => {
  try {
    const { userId, tweet } = data;
    const tweets = await prisma.tweets.create({
      data: {
        userId,
        tweet,
      },
    });

    return tweets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
