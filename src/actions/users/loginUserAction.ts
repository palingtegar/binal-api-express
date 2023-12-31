//LOGIC STEP
//pertama cek dulu apakah variable usernameOrEmail itu adalah email atau bukan
//kalau email, cari data email tsb di database
//kalau username, cari data username tsb di database
//kalau misalkan datanya ga ada? langsung return account not found
//kalau datanya ada baru cek password yang ada di database dengan password yng dimasukkan oleh user (req.body)
//kalau misalnya pasword ga sama, return salah password
//kalau passwordnya sama, return sukses beserta data usernya

import { comparePasswords } from "../../helper/bcrypt";
import { excludeFields } from "../../helper/excludeFields";
import { createToken } from "../../helper/jwt";
import { findUserbyEmail } from "../../repositories/users/findUserByEmail";
import { findUserbyUsername } from "../../repositories/users/findUserByUsername";

export const loginUserAction = async (
  usernameOrEmail: string,
  password: string
) => {
  try {
    let user;

    if (usernameOrEmail.includes("@")) {
      // FIND USER BY EMAIL
      user = await findUserbyEmail(usernameOrEmail);
    } else {
      // FIND USER BY USERNAME
      user = await findUserbyUsername(usernameOrEmail);
    }
    // VALIDASI AKUN ADA ATAU ENGGAK
    if (!user) {
      return {
        status: 404,
        message: "Account Not Found",
      };
    }

    // CEK USER UDAH KE-DELETE ATAU BELUM
    if (user.isDeleted) {
      return {
        status: 400,
        message: "Account Deleted",
      };
    }

    const isPasswordValid = await comparePasswords(password, user.password);
    // CEK PASSWORD SAMA APA ENGGAK
    if (!isPasswordValid) {
      return {
        status: 400,
        message: "Wrong Password",
      };
    }
    // PENGECUALIAN DATA YANG AKAN DITAMPILKAN OLEH FRONTEND
    const dataWithoutPassword = excludeFields(user, ["password"]);

    const token = createToken({ id: user.id });

    return {
      status: 200,
      message: "Login Success",
      data: dataWithoutPassword,
      token,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
