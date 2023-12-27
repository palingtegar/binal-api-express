import { excludeFields } from "../../helper/excludeFields";
import { findUserbyId } from "../../repositories/users/findUserByid";

export const keepLoginAction = async (id: number) => {
  try {
    const user = await findUserbyId(id);

    if (!user) {
      return {
        status: 404,
        message: `User with id: ${id} not found`,
      };
    }
    const dataWithoutPassword = excludeFields(user, ["password"]);

    return {
      status: 200,
      message: "success",
      data: dataWithoutPassword,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
