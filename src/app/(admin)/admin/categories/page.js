"use client"
import {  useEffect, useState } from "react";
import { AddCategory } from "@/components/AddCategory/AddCategory";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();
    setCategories(data);
  };

  const handleCategoryAdded = (newCategory) => {
    setCategories((prev) => [newCategory, ...prev]);
  };

  return (
    <div className="min-h-screen p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl m-2">Categories</h1>
        <AddCategory onCategoryAdded={handleCategoryAdded} />
      </div>

      <Table>
        <TableCaption>A list of your Categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category._id}>
              <TableCell>
                <Image src={category.thumbnail} alt="Category Thumbnail" height={40} width={40} />
              </TableCell>
              <TableCell>{category.title}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>{new Date(category.date).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
