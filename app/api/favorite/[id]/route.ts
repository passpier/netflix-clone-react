import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/libs/serverAuth";
import prismadb from "@/libs/prismadb";
import { without } from "lodash";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { currentUser } = await serverAuth();
    const movieId = params.id;
    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      throw new Error("Invalid ID");
    }

    const updateFavoriteIds = without(currentUser.favoriteIds, movieId);

    const updateUser = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: updateFavoriteIds,
      },
    });

    return NextResponse.json(updateUser);
  } catch (e) {
    console.log(e);
    return NextResponse.json({}, { status: 400 });
  }
}
