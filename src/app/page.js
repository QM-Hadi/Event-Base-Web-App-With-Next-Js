import { Button } from "@/components/ui/button";
import { auth, signOut } from "auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  return (
    <div className="min-h-screen p-20" >
      <h1 className="font-bold text-center text-3xl">Event Base Web App</h1>
      {
        session ?
          <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <Button type="submit">Sign Out</Button>
          </form> :
          <Link href={'/signin'}>
            <Button type="submit">Sign In</Button>
          </Link>
      }
    </div>
  );
}
