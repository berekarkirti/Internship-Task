'use client';

import { signIn } from "@/lib/auth-client";

const SignIn = () => {
  const handleGitHubSignIn = async () => {
    try {
      const response = await signIn("github");
      if (response.success) {
        // Redirect to the dashboard
        window.location.href = "/dashboard";
      } else {
        console.error("GitHub sign-in failed", response.message);
      }
    } catch (error) {
      console.error("Error during GitHub sign-in:", error.message);
    }
  };

  return (
    <button onClick={handleGitHubSignIn} className="...">Sign in with GitHub</button>

  );
};

export default SignIn;
