 
import { ConnectDB } from "@/config/dbconnect";
import { GenerateToken } from "@/lib/Token";
import { UserModel } from "@/lib/User.Model";
import { NextResponse } from "next/server";

ConnectDB();

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  const existUser = await UserModel.findOne({ email });
  if (!existUser) {
    return NextResponse.json(
      { msg: null, error: "User Not Exist" },
      {
        status: 400,
      }
    );
    return;
  }

  const isMatch = await existUser.ConfirmPassword(password);
  if (!isMatch) {
    return NextResponse.json(
      { msg: null, error: "Invalid Credentails" },
      {
        status: 400,
      }
    );
    return;
  }

  // token

  const token = await GenerateToken(existUser);

  const reponse = NextResponse.json(
    { error: null, msg: "User Login Successfully", token },
    {
      status: 200,
    }
  );

  reponse.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
  });

  return reponse;
};
