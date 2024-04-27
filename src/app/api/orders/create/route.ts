import razorpay from "@/lib/razorpay";
import { NextResponse } from "next/server";
import { Orders } from "razorpay/dist/types/orders";

type CreateOrderRequest = {
  amount: string;
  mode: string;
  attempt: string;
};

export const POST = async (request: Request) => {
  const { amount, mode, attempt }: CreateOrderRequest = await request.json();

  const createOrderOptions: Orders.RazorpayOrderCreateRequestBody = {
    amount,
    currency: "INR",
    notes: {
      mode,
      attempt,
    },
  };

  const order = await razorpay.orders.create(createOrderOptions);

  return NextResponse.json({ ...order }, { status: 200 });
};
