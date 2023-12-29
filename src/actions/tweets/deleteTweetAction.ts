import { deleteTweet } from "../../repositories/tweets/deleteTweet";
import { getTweets } from "../../repositories/tweets/getTweets";

export const deleteTweetAction = async (id: number) => {
  try {
    await deleteTweet(id);

    const tweets = await getTweets();

    return {
      status: 200,
      message: "Delete Tweet Success",
      data: tweets,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
