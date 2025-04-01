"use client";
import React from "react";
import { signIn } from "../../utils/auth-client";

const LoginPage = () => {
  const handleGitHubLogin = async () => {
    await signIn("github"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={handleGitHubLogin}
        className="py-2 px-4 border border-white rounded-md hover:bg-white hover:text-black transition-all duration-300"
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default LoginPage;
