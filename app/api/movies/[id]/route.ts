import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/libs/serverAuth";
import prismadb from "@/libs/prismadb";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await serverAuth();
    const movieId = params.id;

    if (!movieId) {
      throw new Error("Missing Id");
    }

    const movies = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    return NextResponse.json(movies);
  } catch (e) {
    console.log(e);
    return NextResponse.json({}, { status: 500 });
  }
}
