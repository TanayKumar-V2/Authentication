
import { getServerSession } from "next-auth";
import { useSession, SessionProvider, signOut, signIn } from "next-auth/react";

export default function Home(){
  const session= await getServerSession()

  
}