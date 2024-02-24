
import { stripePay } from "@/lib/stripe.pay";
import { NextResponse } from "next/server";

   

export const POST = async (request: Request) => {
  const { price } = await request.json();
  const amount =  price * 100  
  const result = await stripePay(amount)
  
  return NextResponse.json(
    { error: null, msg: "Payment sucess", data: result },
    {
      status: 200,
    }
  );
};
