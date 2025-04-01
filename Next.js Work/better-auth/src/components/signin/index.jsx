// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signIn } from "@/lib/auth-client";

// const SignIn = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [credentials, setCredentials] = useState({ email: "", password: "", rememberMe: false });

//   const updateField = (field, value) => setCredentials((prev) => ({ ...prev, [field]: value }));

//   const handleGitHubSignIn = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       const result = await signIn("github", { redirect: false });
//       if (result?.error) {
//         setError("Failed to sign in with GitHub.");
//       } else {
//         router.push("/dashboard");
//       }
//     } catch (err) {
//       setError("Failed to sign in with GitHub.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEmailSignIn = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       // Call email sign-in function here.
//       router.push("/dashboard");
//     } catch (err) {
//       setError("Invalid email or password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-2xl font-bold text-center mb-6 text-teal-600">Sign In</h1>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleEmailSignIn(); }}>
//           {/* <input type="email" placeholder="Email" required value={credentials.email} onChange={(e) => updateField("email", e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-teal-500" /> */}
//           <input
//   type="email"
//   placeholder="Email"
//   required
//   className="w-full px-4 py-2 border rounded-md focus:ring-teal-500"
//   autoComplete="username"
// />

//           {/* <input type="password" placeholder="Password" value={credentials.password} onChange={(e) => updateField("password", e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-teal-500" /> */}
//           <input type="password" placeholder="Password" value={credentials.password} autocomplete="current-password" class="w-full px-4 py-2 border rounded-md focus:ring-teal-500" />

//           <div className="flex items-center gap-2">
//             <input type="checkbox" checked={credentials.rememberMe} onChange={() => updateField("rememberMe", !credentials.rememberMe)} className="w-4 h-4" />
//             <label className="text-sm">Remember Me</label>
//           </div>
//           <button type="submit" className="w-full py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600" disabled={loading}>
//             {loading ? "Signing in..." : "Sign In"}
//           </button>
//         </form>
//         <button onClick={handleGitHubSignIn} className="mt-4 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">Sign In with GitHub</button>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const updateField = (field, value) =>
    setCredentials((prev) => ({ ...prev, [field]: value }));

  const handleGitHubSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await signIn("github", { redirect: false });
      if (result?.error) {
        setError("Failed to sign in with GitHub.");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("Failed to sign in with GitHub.");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      // Call email sign-in function here.
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-teal-600">Sign In</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleEmailSignIn();
          }}
        >
          <input
            type="email"
            placeholder="Email"
            required
            value={credentials.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-teal-500"
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => updateField("password", e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-teal-500"
            autoComplete="current-password"
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={credentials.rememberMe}
              onChange={() => updateField("rememberMe", !credentials.rememberMe)}
              className="w-4 h-4"
            />
            <label className="text-sm">Remember Me</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <button
          onClick={handleGitHubSignIn}
          className="mt-4 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
        >
          Sign In with GitHub
        </button>
      </div>
    </div>
  );
};

export default SignIn;
