
import { redirect } from "next/navigation";
import { auth, signIn } from "../../../auth"
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

export default async function SignIn() {
    const session = await auth();
    // console.log('session==>' , session) 
    if (session) {
        if (session.user.role == 'user') redirect('/')
        if (session.user.role == 'admin') redirect('/admin/dashboard')
    }
    return (
        <body className={"bg-gray-200"}>
            <div className="min-h-screen flex items-center justify-center">
                <form
                    action={async () => {
                        "use server"
                        await signIn("google")
                    }}
                >
                    <div className=" flex flex-col gap-2 ">
                        <div className="flex gap-2 font-bold text-white bg-blue-600 px-2 py-2 border rounded-md">
                        <FaGoogle size={20} color="white" />
                        <button type="submit">SignIn with Google</button>
                        </div>
                        {/* <div className="flex gap-2 font-bold text-white bg-blue-600 px-2 py-2 border rounded-md">
                        <FaGithub size={20} color="white" />
                        <button type="submit">SignIn with Github</button>
                        </div>
                        <div className="flex gap-2 font-bold text-white bg-blue-600 px-2 py-2 border rounded-md">
                        <FaFacebook size={20} color="white" />
                        <button type="submit">SignIn with Facebook</button>
                        </div> */}
                    </div>
                </form>
            </div>

        </body>

    )
} 