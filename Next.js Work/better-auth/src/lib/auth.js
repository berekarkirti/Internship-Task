import { betterAuth} from 'better-auth';


export const auth = betterAuth({
    emailAndPassword:
    {
        enabled: true,
        async sendResetPassword(data, request) 
        {
        },
    },
    socialProviders: 
    {
        github: 
        {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },

    /** if no database is provided, the user data will be stored in memory.
     * Make sure to provide a database to persist user data **/
});