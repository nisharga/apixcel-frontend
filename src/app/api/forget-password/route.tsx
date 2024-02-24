 import { ConnectDB } from "@/config/dbconnect";
import { SendEmail } from "@/lib/Mail.Service";
import { GenerateForgetToken } from "@/lib/Token";
import { UserModel } from "@/lib/User.Model";
import { NextRequest, NextResponse } from "next/server"; 

ConnectDB();
export const POST = async (request: NextRequest) => {
  const { email } = await request.json();

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

  // token

  const token = await GenerateForgetToken(existUser, email);

  const mailResponse = await SendEmail(existUser.name, token, email);

  const reponse = NextResponse.json(
    { error: null, msg: "Email Send Successfully " },
    {
      status: 200,
    }
  );

  return reponse;
};
