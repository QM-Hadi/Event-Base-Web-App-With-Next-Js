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

const events = [
  {
    title: " Birthday Party",
    description: "BirthDay Party Day",
    thumbnail:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    events: 5,
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Exibition",
    description: "Exibition Day",
    thumbnail:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    events: 5,
    date: new Date().toLocaleDateString(),
  },
  {
    title: "Trip",
    description: "BirthDay Party Day",
    thumbnail:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    events: 5,
    date: new Date().toLocaleDateString(),
  },
  {
    title: "University Class",
    description: "BirthDay Party Day",
    thumbnail:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    events: 5,
    date: new Date().toLocaleDateString(),
  },

];

export default function Event() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="flex justify-between text-2xl m-2">Events</h1>
      <Table>
        <TableCaption>A list of your recent Events.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Events</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((events) => (

            <TableRow key={events.title}>
              <TableCell>
                <Image
                  src={events.thumbnail}
                  alt={`${events.thumbnail}'s profile`}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell>{events.title}</TableCell>
              <TableCell>{events.description}</TableCell>
              <TableCell>{events.events}</TableCell>
              <TableCell>{events.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
