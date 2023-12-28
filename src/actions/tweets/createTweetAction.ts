import { createTweet } from "../../repositories/tweets/createTweet";
import { ITweet } from "../../types/tweet.type";

export const createTweetAction = async (data: ITweet) => {
  try {
    const tweets = await createTweet(data);
    return {
      status: 200,
      message: "UH BINAL DEH",
      data: tweets,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
