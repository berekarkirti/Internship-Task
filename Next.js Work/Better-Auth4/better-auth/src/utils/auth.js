import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db("Better-Auth"); 

const auth = betterAuth({
    database: db,
    emailAndPassword: {
        enabled: true
    },
    providers: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }
    }
});

console.log("Auth config file loaded successfully with MongoDB.");

export { auth };
export default auth;
