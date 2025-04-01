export const signIn = async (provider, options = {}) => {
  const res = await fetch(`/api/auth/[...betterauth]/${provider}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(options),
  });
  
  if (!res.ok) {
    throw new Error("Failed to sign in");
  }
  
  return res.json();
};
