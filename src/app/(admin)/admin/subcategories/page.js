import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { AddSubCategory } from "@/components/AddSubCategory/AddSubCategory";


const subcategory = [
  {
    title: " Cricket",
    category:"Sports",
    description: "BirthDay Party Day",
    thumbnail:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    title: " Tennis",
    category:"Sports",
    description: "BirthDay Party Day",
    thumbnail:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    title: " FootBall",
    category:"Sports",
    description: "BirthDay Party Day",
    thumbnail:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    title: " Houckey",
    category:"Sports",
    description: "BirthDay Party Day",
    thumbnail:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
  },


];

export default function SubCategories() {
  return (
    <div className="min-h-screen p-4">
      <div className="flex items-center justify-between">
      <h1 className="flex justify-between text-2xl m-2">AddSubCategory</h1>
        <AddSubCategory/>
      </div>
      <Table>
        <TableCaption>A list of your Categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead>category</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subcategory.map((subcategory) => (

            <TableRow key={subcategory.title}>
              <TableCell>
                <Image
                  src={subcategory.thumbnail}
                  alt={`${subcategory.thumbnail}'s profile`}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell>{subcategory.category}</TableCell>
              <TableCell>{subcategory.title}</TableCell>
              <TableCell>{subcategory.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
