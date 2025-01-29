import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/User";

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
        let newUser = new UserModal(obj);
        await newUser.save();
    
        return Response.json(
            {
                msg: "User added successfully!",
                user: newUser,
            },
            { status: 201 }
        );
    }
    

export async function PUT(request) { }

export async function DELETE(request) { }
