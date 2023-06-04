import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Profiles() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <p className="text-white text-4xl">Profiles</p>
    </div>
  );
}
