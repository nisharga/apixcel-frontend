 
import { ConnectDB } from "@/config/dbconnect";
import { VerifyToken } from "@/lib/Token";
import { UserModel } from "@/lib/User.Model";
import { NextRequest, NextResponse } from "next/server";

ConnectDB();
export const GET = async (request: NextRequest) => {
  
  const auth = request.cookies.get("token") || "";
 

  if (!auth) {
    return NextResponse.json(
      { msg: null, error: "Please login First" },
      {
        status: 401,
      }
    );
  }
  
  const { userId } = await VerifyToken(auth);

  if (!userId) {
    return NextResponse.json(
      { msg: null, error: "Invalid Token" },
      {
        status: 401,
      }
    );
  }

  const existUser = await UserModel.findById(userId).select("-password");

  if (!existUser) {
    return NextResponse.json(
      { msg: null, error: "User Does not Exist" },
      {
        status: 401,
      }
    );
    return;
  }

  return NextResponse.json(
    { error: null, msg: "data fetched", user: existUser },
    {
      status: 200,
    }
  );
};
