import { NextResponse } from "next/server";
import serverAuth from "@/libs/serverAuth";
import prismadb from "@/libs/prismadb";

export async function GET() {
  try {
    const { currentUser } = await serverAuth();
    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    return NextResponse.json(favoriteMovies);
  } catch (e) {
    console.log(e);
    return NextResponse.json({}, { status: 400 });
  }
}
