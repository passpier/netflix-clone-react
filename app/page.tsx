import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";
import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth");
  }
  const movies = await prismadb.movie.findMany();

  return (
    <>
      <Navbar />
      <BillBoard />
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
      </div>
    </>
  );
}
