"use client"

import * as React from "react"
import { Plus, X, Folder, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function AddSubCategory() {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Sub Category
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-[400px] sm:w-[540px] h-full" side="right">
        <div className="h-full flex flex-col">
          <DrawerHeader className="flex-shrink-0">
            <DrawerTitle className="text-2xl font-bold flex items-center gap-2">
              <Folder className="h-6 w-6" />
              Add New Sub Category
            </DrawerTitle>
            <DrawerDescription>Create a new category to organize your items.</DrawerDescription>
          </DrawerHeader>
          <ScrollArea className="flex-grow px-4">
            <form className="space-y-6 pb-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter category name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea required type='file' id="description" placeholder="Enter category description" rows={4} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="thumbnail">Thumbnail</Label>
                <Input type='file' id="thumbnail" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" placeholder="Enter category name" />
              </div>
              <DrawerFooter className="flex-shrink-0 border-t pt-4">
                <div className="flex-shrink-0 border-t pt-4">
                  <div className="flex justify-between w-full">
                    <Button type='submit' className="gap-2">
                      <Plus className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </DrawerFooter>
            </form>
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
