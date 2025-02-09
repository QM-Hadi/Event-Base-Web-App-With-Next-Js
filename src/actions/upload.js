"use server";

export async function uploadImage(categoryForm) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error("Missing Cloudinary environment variables.");
  }

  const formData = new FormData();
  formData.append("file", categoryForm); // ✅ Correct key for Cloudinary
  formData.append("upload_preset", uploadPreset); // ✅ Add upload preset

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Cloudinary Upload Error:", data.error.message);
    throw new Error(data.error.message);
  }

  console.log("Uploaded Image URL:", data.secure_url);
  return data.secure_url; // ✅ Return uploaded image URL
}
