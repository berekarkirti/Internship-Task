"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState(
    {
      email: "",
      password: "",
      rememberMe: false,
    });

  const updateField = (field, value) => 
  {
    setCredentials((prev) => ({ ...prev, [field]: value }));
  };

  const handleGitHubSignIn = async () => 
  {
    setError("");
    setLoading(true);

    console.log("GitHub Client ID:", process.env.GITHUB_CLIENT_ID);
    console.log("GitHub Client Secret:", process.env.GITHUB_CLIENT_SECRET);
    console.log("App URL:", process.env.NEXT_PUBLIC_APP_URL);

    try 
    {
      const result = await signIn("github", { redirect: false });
      console.log("GitHub Sign-In Full Result:", result);

      if (result.error) 
      {
        setError("Failed to sign in with GitHub. Please try again.");
      }
      else 
      {
        router.push("/dashboard");
      }
    } 
    catch (err) 
    {
      console.error("GitHub sign-in error:", err);
      setError("Failed to sign in with GitHub. Please try again.");
    } 
    finally 
    {
      setLoading(false);
    }
  };




  const handleEmailSignIn = async () => {
    try {
      console.log("Email sign-in initiated...");
      setLoading(true);
      await signIn.email(
        {
          email: credentials.email,
          password: credentials.password,
        });
      console.log("Email sign-in successful.");
      router.push("/dashboard");
    }
    catch (err) {
      console.error("Error during email sign-in:", err);
      setError("Invalid email or password. Please try again.");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-teal-600">Sign In</h1>
        {error && (<p className="text-red-500 text-center mb-4">{error}</p>)}
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleEmailSignIn(); }}>

          <input type="email" placeholder="Email" required value={credentials.email} onChange={(e) => updateField("email", e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />


          <input type="password" placeholder="Password" autoComplete="current-password" value={credentials.password} onChange={(e) => updateField("password", e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" checked={credentials.rememberMe} onChange={() => updateField("rememberMe", !credentials.rememberMe)} className="w-4 h-4 border-gray-300 rounded focus:ring-teal-500" />
            <label htmlFor="remember" className="text-sm text-gray-600">Remember Me</label>
            <Link href="#" className="text-sm ml-auto underline text-teal-500">Forgot your password?</Link>
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-400" disabled={loading}>
            {loading ? (<Loader2 size={16} className="animate-spin inline" />) : ("Login")}
          </button>
        </form>

        <button type="button" className="w-full py-2 px-4 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 flex items-center justify-center gap-2 mt-4" onClick={handleGitHubSignIn} disabled={loading} >
          {loading ? (<Loader2 size={16} className="animate-spin inline" />) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" >
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
              </svg>
              Sign in with GitHub
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
