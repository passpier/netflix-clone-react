"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface WelcomeAvatarProps {
  name: string;
  imageSrc?: string;
}
const WelcomeAvatar: React.FC<WelcomeAvatarProps> = ({ name, imageSrc }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center gap-8 mt-10">
      <div onClick={() => router.push("/")}>
        <div className="group flex-row w-44 mx-auto">
          <div
            className="
                  w-44
                  h-44rounded-md
                  flex
                  items-center
                  justify-center
                  border-2
                  border-transparent
                  group-hover:cursor-pointer
                  group-hover:border-white
                  overflow-hidden
              "
          >
            <img src="/images/default-blue.png" alt="Profile" />
          </div>
          <div
            className="
                mt-4
                text-gray-400
                text-2xl
                text-center
                group-hover:text-white
              "
          >
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAvatar;
