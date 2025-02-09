"use client";

import * as React from "react";
import { Plus, Folder, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { uploadImage } from "@/actions/upload";
import { addCategory } from "@/actions/categories";

export function AddCategory() {
const [open,setOpen]=React.useState(false);
const [loading , setLoading]=React.useState(false);

async function handleAddCategory(event) {
  event.preventDefault();
  try {
    const formData = new FormData(event.target);
    const file = formData.get("thumbnail"); // Get uploaded file

    if (!file || !(file instanceof File)) {
      throw new Error("No valid file selected.");
    }

    const imageUrl = await uploadImage(file);
    const obj ={
      title:formData.get("title"),
      description :formData.get("description"),
      thumbnail :imageUrl,
    };
    console.log("imageUrl:", obj);
  } catch (error) {
    console.log(error.message || "Failed to upload image.");
  };
  await addCategory(obj);

}

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Category
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-[400px] sm:w-[540px] h-full" side="left">
        <div className="h-full flex flex-col">
          <DrawerHeader className="flex-shrink-0">
            <DrawerTitle className="text-2xl font-bold flex items-center gap-2">
              <Folder className="h-6 w-6" />
              Add New Category
            </DrawerTitle>
            <DrawerDescription>Create a new category to organize your items.</DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="flex-grow px-4">
            <form className="space-y-6 pb-6" onSubmit={handleAddCategory}>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input required name="title" id="title" placeholder="sports" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input required name="description" id="description" placeholder="About Category" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="thumbnail">Thumbnail</Label>
                <Input required name="thumbnail" type="file" />
              </div>
              <DrawerFooter className="flex-shrink-0 border-t pt-4">
                <Button type="submit" className="gap-2" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
                  {loading ? "Saving..." : "Save Changes"}
                </Button>
              </DrawerFooter>
            </form>
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
