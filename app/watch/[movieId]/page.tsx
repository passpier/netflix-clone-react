import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import prismadb from "@/libs/prismadb";
import BackButton from "@/components/BackButton";

const Watch = async ({ params }: { params: { movieId: string } }) => {
  const movie = await prismadb.movie.findUnique({
    where: {
      id: params?.movieId,
    },
  });
  console.log("movie", movie);
  return (
    <div className="h-screen w-screen bg-black">
      <nav
        className="
            fixed
            w-full
            p-4
            z-10
            flex
            flex-row
            items-center
            gap-8
            bg-black
            bg-opacity-70
    "
      >
        <BackButton />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {movie?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="w-full h-full"
        src={movie?.videoUrl}
      />
    </div>
  );
};

export default Watch;
