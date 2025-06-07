import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler= NextAuth({
  providers: [
  CredentialsProvider({
   
    name: "Login with E-mail",
    
    credentials: {
      username: { label: "Username", type: "text", placeholder: "example@email.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const username=credentials?.username
      const password=credentials?.password

      const user={
        name:"Tanay",
        id:"1",
        username:"tanay@email.com"
      }

      if(user){
        return user
      }else{
        return null
      }
    }


  })
],
secret: process.env.NEXTAUTH_SECRET,
})

export{handler as GET, handler as POST}