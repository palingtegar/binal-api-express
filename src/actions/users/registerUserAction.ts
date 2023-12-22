//LOGIC STEP
//cari email/ username di database
// kalau ada langsung return email/ username telah digunakan
//kalau tidak ada yang menggunakan email/ username tsb create ke database

import { hashPassword } from "../../helper/bcrypt";
import { createUser } from "../../repositories/users/createUser";
import { findUsersbyEmailAndUsername } from "../../repositories/users/findUsersbyEmailAndUsername";
import { IUser } from "../../types/user.type";
export const registerUserAction = async (data: IUser) => {
  try {
    const { email, username, password } = data;
    const users = await findUsersbyEmailAndUsername(email, username);

    if (users.length) {
      return {
        status: 400,
        message: "Email atau Username sudah terdaftar",
      };
    }
    //create user di database berarti harus masukin data/ query data ke database
    //nah untuk enhance fiturnya, pake hashing
    const hashedPassword = await hashPassword(password);
    data.password = hashedPassword;
    await createUser(data);
    return {
      status: 200,
      message: "Register Sukses",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
