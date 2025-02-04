import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/User";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handlerUser = async (profile) => {
    await connectDB();
    let user = await UserModal.findOne({ email: profile.email });
    if (user) return user;
    
    let newUser = new UserModal({
        fullName: profile.name,
        email: profile.email,
        passward: profile.picture, // Consider renaming "passward" to "password"
        bio: "", // Default empty string instead of 'String'
    });
    
    newUser = await newUser.save();
    return newUser;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GoogleProvider()],
    callbacks: {
        async signIn({ account, profile }) {
            console.log("account=>", account);
            console.log("profile=>", profile);
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            return session;
        },
    },
});
