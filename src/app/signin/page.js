
import { redirect } from "next/navigation";
import { auth, signIn } from "../../../auth"
export default async function SignIn() {
    const session =await auth();
    // console.log('session==>' , session) 
    if(session){
        if(session.user.role=='user') redirect ('/')
        if(session.user.role=='admin') redirect ('/admin/dashboard')
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                action={async () => {
                    "use server"
                    await signIn("google")
                }}
            >
                <div className=" flex items-center justify-center bg-purple-600 text-white font-semibold px-3 py-2 border rounded-md">
                    <button type="submit">Signin with Google</button>
                </div>
            </form>
        </div>
    )
} 