import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import BillBoard from "@/components/BillBoard";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/auth");
  }
  return (
    <>
      <Navbar />
      <BillBoard />
    </>
  );
}
