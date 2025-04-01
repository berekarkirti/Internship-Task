"use client";

import { useSession, signIn, signOut } from "../../src/utils/auth-client";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Next.js GitHub OAuth Authentication</h1>

      {session ? (
        <div>
          <h2>Welcome, {session.user.name}!</h2>
          <img
            src={session.user.image}
            alt="User Avatar"
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
          <p>Email: {session.user.email}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>You are not signed in.</p>
          <button onClick={() => signIn("github")}>Sign In with GitHub</button>
        </div>
      )}
    </div>
  );
}
