import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json("hello", { status: 200 });
};

export const POST = async (request: Request) => {
  const { text } = await request.json();
  return NextResponse.json({ text }, { status: 200 });
};
