import prisma from "../../helper/prisma";

export const findUserbyId = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
