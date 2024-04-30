import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dotenv from "dotenv";
dotenv.config();

const handler = nextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET
        })
    ]
})

export default handler;


declare global{
    namespace NodeJS{
        interface ProcessEnv{
            GOOGLE_ID:string,
            GOOGLE_SECRET:string
        }
    }
}