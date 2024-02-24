import { ConnectDB } from "@/config/dbconnect";
import { UserModel } from "@/lib/User.Model";
import { NextRequest, NextResponse } from "next/server";

ConnectDB();

export const POST = async (request: NextRequest) => {
  const { email, password } = await request.json();

  const existUser = await UserModel.findOne({ email });

  if (existUser) {
    return NextResponse.json(
      { msg: null, error: "User Already Exist" },
      {
        status: 400,
      }
    );
  }

  await UserModel.create({
    email,
    password,
  });
  return NextResponse.json(
    { error: null, msg: "User Register Successfully" },
    {
      status: 201,
    }
  );
};
