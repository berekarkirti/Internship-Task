import { createAuthClient } from "better-auth/client";

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL, // Ensure this is set correctly
});

export const signIn = async( provider , options = {}) => {
  try {
    const result = await authClient.signIn({
      provider , 
      redirect: true,
    });
    return result;
  } catch (error) {
    console.error("Error during social sign-in:", error.message);
    return { error: error.message };
  }
};

export const {
  signOut,
  signUp,
  useSession,
} = authClient;
