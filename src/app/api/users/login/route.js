import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function POST(request) {
    await connectDB();
    const obj = await request.json();

    //user exist or not.

    const user = await UserModal.findOne({ email: obj.email })
    if (!user) return Response.json(
        { error: true, msg: "user not found" },
        { status: 403 },
    );

    const isPasswardValid = await bcrypt.compare(obj.passward, user.passward); 
    if(!isPasswardValid) return Response.json(
        { error: true, msg: "Email is not valid" },
        { status: 403 },
    );

    let newUser = new UserModal(obj);
    await newUser.save();
    console.log("obj=> ", obj)

    var token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_KEY);

    return Response.json(
        {
            msg: "User login successfully!",
            user,
            token,
        },
        { status: 200 }
    );
}


