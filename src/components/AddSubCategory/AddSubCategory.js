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
      <DrawerContent className="w-[400px] sm:w-[540px] h-full" side="left">
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
                <Label htmlFor="name">Category Name</Label>
                <Input id="name" placeholder="Enter category name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter category description" rows={4} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="icon">Icon</Label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <Folder className="h-5 w-5" />
                  </Button>
                  <span className="text-sm text-muted-foreground">Choose an icon (optional)</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Parent Category</Label>
                <Button variant="outline" className="w-full justify-between">
                  <span>Select parent category (optional)</span>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </Button>
              </div>
            </form>
          </ScrollArea>
          <DrawerFooter className="flex-shrink-0 border-t pt-4">
            <div className="flex justify-between w-full">
              <DrawerClose asChild>
                <Button variant="outline" className="gap-2">
                  <X className="h-4 w-4" />
                  Cancel
                </Button>
              </DrawerClose>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add Sub Category
              </Button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
