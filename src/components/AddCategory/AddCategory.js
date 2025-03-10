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
import { addCategory, getCategory } from "@/actions/categories";

export function AddCategory() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([])
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    thumbnail: null,
  });

  React.useEffect( ()=>{
    async function fetchData(){

      const res = await getCategory();
      setData(res);
      console.log(res);
      
    }
    fetchData();
  },[data])

  function handleChange(event) {
    const { name, value, type, files } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value, // Handle file input separately
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      let imageUrl = "";

      if (formData.thumbnail) {
        imageUrl = await uploadImage(formData.thumbnail); // Upload image if selected
      }

      const obj = {
        title: formData.title,
        description: formData.description,
        thumbnail: imageUrl,
      };

      const newData = await addCategory(obj);
      console.log("Category Added Successfully:", newData);
      setData(...data, newData);

      // Reset form and close drawer
      setFormData({ title: "", description: "", thumbnail: null });
      setOpen(false);
    } catch (error) {
      console.error("Failed to upload image:", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
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
            <form className="space-y-6 pb-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  required
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  id="title"
                  placeholder="Category Title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  required
                  name="description"
                  type="text"
                  value={formData.description}
                  onChange={handleChange}
                  id="description"
                  placeholder="About Category"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="thumbnail">Thumbnail</Label>
                <Input required name="thumbnail" type="file" onChange={handleChange} />
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

    {/* Render */}

    {data.map(elem => {
      return (
        <div key={elem.id} className="flex flex-col items-center justify-center p-4">
          elem.title
        </div>
      )
    })}

    </>
    
  );
}
