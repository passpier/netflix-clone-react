import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/app/LogoutButton";
import { redirect } from "next/navigation";
import serverAuth from "@/libs/serverAuth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth");
  }
  const { currentUser: user } = await serverAuth();
  return (
    <>
      <h1 className="text-4xl text-green-500">Netflix Clone</h1>
      <p className="text-white">Logged in as : {user?.email}</p>
      <LogoutButton />
    </>
  );
}
