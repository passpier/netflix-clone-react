import { NextResponse } from "next/server";
import serverAuth from "@/libs/serverAuth";
import prismadb from "@/libs/prismadb";

export async function GET() {
  try {
    await serverAuth();
    const movies = await prismadb.movie.findMany();
    return NextResponse.json(movies);
  } catch (e) {
    console.log(e);
    return NextResponse.json({}, { status: 400 });
  }
}
