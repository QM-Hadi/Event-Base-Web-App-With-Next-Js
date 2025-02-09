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
    });

    newUser = await newUser.save();
    return newUser;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GoogleProvider()],
    callbacks: {
        async signIn({ account, profile }) {
            const user = await handlerUser(profile)
            console.log("user.role==> ", user.role)
            return { ...profile, role: user.role };
        },
        async jwt({ token, user }) {
            console.log("jwt token=>", token)
            console.log("jwt user=>", user)
            const userFromDB=await handlerUser(token);
            console.log('userFromDB==>' , userFromDB)
             if (user) {
                token._id = userFromDB._id;
                token.role = userFromDB.role;
            }
            return token;
        },
        async session({ session, token }) {
            console.log('session data=>  ', session)
            session.user._id = token._id;
            session.user.role = token.role;
            return session;
        },
    },
});
