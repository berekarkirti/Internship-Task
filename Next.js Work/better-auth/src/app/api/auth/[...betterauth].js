// import { betterAuth } from "better-auth";
// import GithubProvider from "better-auth/social-providers"

// export const auth = betterAuth({
//   emailAndPassword: 
//   {
//     enabled: true,
//     async sendResetPassword(data, request) 
//     {
//       console.log("Reset password functionality can be implemented here.");
//     },
//   },
//   socialProviders: 
//   {
//     GithubProvider: 
//     {
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     },
//   },
// });

import { betterAuth } from "better-auth";
import GithubProvider from "better-auth/social-providers";

const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    async sendResetPassword(data, request) {
      console.log("Reset password functionality can be implemented here.");
    },
  },
  socialProviders: {
    github: {
      provider: GithubProvider,
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
});

export {auth as GET, auth as POST};
