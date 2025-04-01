"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() 
{
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [userData, setUserData] = useState(
  {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    image: null,
    imagePreview: null,
    imageBase64: "",
  });

  const updateField = (field, value) => 
  {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-teal-600">Sign Up</h1>
        <form className="space-y-4">
          <input type="text" placeholder="First Name" value={userData.firstName} onChange={(e) => updateField("firstName", e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
          <input type="text" placeholder="Last Name" value={userData.lastName} onChange={(e) => updateField("lastName", e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
          <input type="email" placeholder="Email" value={userData.email} onChange={(e) => updateField("email", e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
          <input type="password" placeholder="Password" value={userData.password} onChange={(e) => updateField("password", e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
          <input type="password" placeholder="Confirm Password" value={userData.passwordConfirmation} onChange={(e) => updateField("passwordConfirmation", e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500" />
          <button type="button"
            onClick={() => 
            {
              setLoading(true);
              setTimeout(() => 
              {
                setLoading(false);
                router.push("/signin"); 
              }, 2000);
            }}
            disabled={loading}
            className="w-full py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-400"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
