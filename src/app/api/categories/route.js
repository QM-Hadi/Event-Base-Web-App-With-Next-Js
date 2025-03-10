import { NextRequest, NextResponse } from "next/server";
import { Category } from "../../../lib/models/Category";
import { connectDB } from "@/lib/db/connectDB";

export async function POST(req) {
  await connectDB();

  try {
    var data = await req.json()
    console.log(data);
    
    // return NextResponse.json({ message: "Category created successfully" }, {data: data});
    const { title, description, thumbnail } = data;
    if (!title || !description || !thumbnail) {
      return NextResponse.json({ error: "All fields are required." }, { status: 404 });
    }

    const newCategory = new Category({ title, description, thumbnail });
    await newCategory.save();

    return NextResponse.json({ message: "Category added!", category: newCategory }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error saving category" }, { status: 400 });
  }
}
export async function GET(){
  await connectDB();
  try{
    data=await Category.find();

    return NextResponse.json({data:data}, {status:200})
  }
  catch(err){}
}
