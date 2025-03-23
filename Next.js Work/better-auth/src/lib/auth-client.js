// import {createAuthClient} from "better-auth/react";


// export const authClient = createAuthClient({
//     baseURL: process.env.NEXT_PUBLIC_APP_URL,

// })

// export const {
//     signIn,
//     signOut,
//     signUp,
//     useSession
// } = authClient;

import { createAuthClient } from "better-auth/client"
const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL,

})

export const signIn = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}

export const {
    signOut,
    signUp,
    useSession
} = authClient;

