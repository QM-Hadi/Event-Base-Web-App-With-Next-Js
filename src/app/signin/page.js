
import { signIn } from "../../../auth"
export default function SignIn() {
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