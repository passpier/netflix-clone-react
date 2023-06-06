import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import serverAuth from "@/libs/serverAuth";
import WelcomeAvatar from "@/app/profiles/welcomeAvatar";

export default async function Profiles() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth");
  }
  const { currentUser: user } = await serverAuth();
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className=" text-3xl md:text-6xl text-white text-center">
          Who is watching?
        </h1>
        <WelcomeAvatar name={user?.name} />
      </div>
    </div>
  );
}
