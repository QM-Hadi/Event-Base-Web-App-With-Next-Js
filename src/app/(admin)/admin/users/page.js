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

const users = [
  {
    FullName: "M Hadi",
    email: "mudassirmutalib@gmail.com",
    ProfileImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
    location: "Karachi",
    events: 5,
    date: new Date().toLocaleDateString(),
  },
  {
    FullName: "M Asad",
    email: "asad@gmail.com",
    ProfileImage:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    location: "Karachi",
    events: 5,
    date: new Date().toLocaleDateString(),
  },
  {
    FullName: "Ahmed",
    email: "ahmed@gmail.com",
    ProfileImage:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    location: "Karachi",
    events: 5,
    date: new Date().toLocaleDateString(),
  },
  {
    FullName: "M Faiz",
    email: "faiz@gmail.com",
    ProfileImage:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    location: "Karachi",
    events: 5,
    date: new Date().toLocaleDateString(),
  },
];

export default function Users() {
  return (
    <div className="min-h-screen p-4">
            <h1 className="flex justify-between text-2xl m-2">Users</h1>
      <Table>
        <TableCaption>A list of your recent Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Profile</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Events</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.email}>
              <TableCell>
                <Image
                  src={user.ProfileImage}
                  alt={`${user.FullName}'s profile`}
                  height={40}
                  width={40}
                />
              </TableCell>
              <TableCell>{user.FullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell>{user.events}</TableCell>
              <TableCell>{user.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
