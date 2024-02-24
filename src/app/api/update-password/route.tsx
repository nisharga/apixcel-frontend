import { ConnectDB } from "@/config/dbconnect";
import { VerifyForgetToken } from "@/lib/Token";
import { UserModel } from "@/lib/User.Model";
import { NextRequest, NextResponse } from "next/server";
import { hash } from 'bcryptjs';


ConnectDB();
export const PUT = async (request: NextRequest) => {
  const { email, password, token, cpassword } = await request.json();

  if (cpassword !== password) {
    return NextResponse.json(
      { msg: null, error: "Password and Confirm password are not matched" },
      {
        status: 400,
      }
    );
    return;
  }

  const auth = token || "";

  if (!auth) {
    return NextResponse.json(
      { msg: null, error: "Please login First" },
      {
        status: 400,
      }
    );
    return;
  }

  const { userId } = await VerifyForgetToken(auth, email);
  if (!userId) {
    return NextResponse.json(
      { msg: null, error: "Invalid Token" },
      {
        status: 400,
      }
    );
    return;
  }
  const existUser = await UserModel.findById(userId);

  if (!existUser) {
    return NextResponse.json(
      { msg: null, error: "User Does not Exist" },
      {
        status: 401,
      }
    );
    return;
  }

  const hashPassword = await hash(password, 10);

  await UserModel.findByIdAndUpdate(userId, {
    $set: {
      password: hashPassword,
    },
  });

  return NextResponse.json(
    { error: null, msg: "Password Update successfully" },
    {
      status: 200,
    }
  );
};
