import prisma from "../../helper/prisma";

export const findUserbyEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
