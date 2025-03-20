"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome to Better Auth</h1>
      <div className="flex space-x-4">
        <button onClick={() => router.push("/signup")} className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600" >Sign Up</button>
        <button onClick={() => router.push("/signin")} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" >Sign In</button>
      </div>
    </div>
  );
}
