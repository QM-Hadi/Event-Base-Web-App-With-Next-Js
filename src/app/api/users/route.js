import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function GET(request) {
    await connectDB();
    const users = await UserModal.find();
    return Response.json({
        msg: "Users Fetched succesfully",
        users,
    },
        { status: 200 });
}

export async function POST(request) {
    await connectDB();
    const obj = await request.json();

    //user exist or not.

    const user = await UserModal.findOne({ email: obj.email })
    if (user) return Response.json(
        { error: true, msg: "user is already exist with this email with another email!" },
        { status: 403 },
    );

    const saltRounds = 10;
    const hashedPassward = await bcrypt.hash(obj.passward, saltRounds);
    obj.passward = hashedPassward;

    let newUser = new UserModal(obj);
    await newUser.save();
    console.log("obj=> ", obj)

    var token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_KEY);

    return Response.json(
        {
            msg: "User added successfully!",
            user: newUser,
            token,
        },
        { status: 201 }
    );
}


export async function PUT(request) { }

export async function DELETE(request) { }
