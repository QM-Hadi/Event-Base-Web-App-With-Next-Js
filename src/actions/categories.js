

"use server"

import { revalidatePath } from "next/cache";

export const addCategory = async (obj) => {
    const added = await fetch(`${process.env.BASE_URL}api/categories`, {
        method: "POST",
        body: json.stringfy(obj),
    });
    console.log("Category Added Successfully")
    revalidatePath("/admin/categories")
}