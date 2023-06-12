import serverAuth from "@/libs/serverAuth";
import prismadb from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await serverAuth();

    const moviesCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * moviesCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return NextResponse.json(randomMovies[0]);
  } catch (e) {
    console.log(e);
    return NextResponse.json({}, { status: 500 });
  }
}
