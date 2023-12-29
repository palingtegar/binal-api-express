import { getTweets } from "../../repositories/tweets/getTweets";

export const getTweetsAction = async () => {
  try {
    const tweets = await getTweets();

    return {
      status: 200,
      message: "success",
      data: tweets,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
