import prisma from "../../helper/prisma";

export const getTweetsByUserId = async (userId: number) => {
  try {
    const getTweetsId = await prisma.tweets.findMany({
      where: {
        userId,
      },
      orderBy: {
        id: "desc",
      },
      include: {
        User: true,
      },
    });

    return getTweetsId;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
