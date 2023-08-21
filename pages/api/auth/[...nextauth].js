import NextAuth from "next-auth"
//import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import Auth0Provider from "next-auth/providers/auth0"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_CLIENT_ID,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   }),
    // Auth0Provider({
    //     clientId: process.env.AUTH0_ID,
    //     clientSecret: process.env.AUTH0_SECRET,
    //     issuer: process.env.AUTH0_ISSUER,
    //   }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)