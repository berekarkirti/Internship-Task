import { BetterAuth } from "better-auth";

const options = {
  providers: [
    {
      id: "github",
      name: "GitHub",
      type: "oauth",
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  ],
};

const betterAuth = BetterAuth(options);

export default betterAuth;
