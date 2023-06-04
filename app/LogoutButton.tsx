"use client";

import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <button className="h-10 w-full bg-white" onClick={() => signOut()}>
      Log out
    </button>
  );
};

export default LogoutButton;
