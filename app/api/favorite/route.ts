import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/libs/serverAuth";
import prismadb from "@/libs/prismadb";
import { without } from "lodash";

export async function POST(request: NextRequest) {
  try {
    const { currentUser } = await serverAuth();
    const res = await request.json();
    const { movieId } = res;

    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }

    const user = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    });

    return NextResponse.json(user);
  } catch (e) {
    console.log(e);
    return NextResponse.json({}, { status: 400 });
  }
}
