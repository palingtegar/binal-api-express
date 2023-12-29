import prisma from "../../helper/prisma";

export const getTweets = async () => {
  try {
    const tweets = await prisma.tweets.findMany({
      include: {
        User: true,
      },
    });

    return tweets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
