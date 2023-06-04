import { NextResponse } from "next/server";
import serverAuth from "@/libs/serverAuth";

export async function GET() {
  try {
    const { currentUser } = await serverAuth();
    return NextResponse.json(currentUser);
  } catch (e) {
    console.log(e);
    return NextResponse.json({}, { status: 500 });
  }
}
