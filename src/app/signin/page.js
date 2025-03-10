"use client"; // Add this at the top

import { signIn } from "next-auth/react"; // Import from next-auth/react
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="flex flex-col gap-5">
        <button
          className="flex gap-2 font-bold text-white bg-blue-600 px-2 py-2 border rounded-md"
          onClick={() => signIn("google")}
        >
          <FaGoogle size={20} color="white" />
          Sign In with Google
        </button>

        <button
          className="flex gap-2 font-bold text-white bg-blue-600 px-2 py-2 border rounded-md"
          onClick={() => signIn("facebook")}
        >
          <FaFacebook size={20} color="white" />
          Sign In with Facebook
        </button>

        <button
          className="flex gap-2 font-bold text-white bg-blue-600 px-2 py-2 border rounded-md"
          onClick={() => signIn("github")}
        >
          <FaGithub size={20} color="white" />
          Sign In with GitHub
        </button>
      </div>
    </div>
  );
}
