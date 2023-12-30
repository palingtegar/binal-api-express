import { updateTweet } from "../../repositories/tweets/updateTweet";
import { ITweet } from "../../types/tweet.type";

export const updateTweetAction = async (id: number, data: ITweet) => {
  try {
    const updated = await updateTweet(data, id);

    return {
      status: 200,
      message: "Kebinalan berhasil diganti",
      data: updated,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
