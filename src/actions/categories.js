

"use server"


// import { revalidatePath } from "next/cache";

export const addCategory = async (obj) => {
    
    const added = await fetch(`${process.env.BASE_URL}api/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
    })
    // const test = await axios.post("/api/categories",obj);
    const data = await added.json();
    return data.category

};
export const getCategory = async ()=>{
    const res = await fetch(`${process.env.BASE_URL}api/categories`);
    const data =await res.json();
    return data;
}


