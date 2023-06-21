"use client";

import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <AiOutlineArrowLeft
      onClick={() => router.push("/")}
      className="text-white cursor-pointer"
      size={40}
    />
  );
};

export default BackButton;
