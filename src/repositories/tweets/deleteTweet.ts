import prisma from "../../helper/prisma";

export const deleteTweet = async (id: number) => {
  try {
    const deleted = await prisma.tweets.delete({
      where: { id },
    });

    return deleted;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
