"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MoreHorizontal,
  Search,
  UserPlus,
  Download,
  Trash,
  PenSquare,
  Eye,
  Shield,
  ShieldAlert,
  UserX,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const users = [
  {
    id: "u1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    role: "student",
    status: "active",
    courses: 8,
    joined: "2023-04-12",
    lastActive: "2023-10-28",
    avatar: "/testimonials/sarah-johnson.png",
  },
  {
    id: "u2",
    name: "Michael Chen",
    email: "michael.c@example.com",
    role: "student",
    status: "active",
    courses: 5,
    joined: "2023-05-18",
    lastActive: "2023-10-27",
    avatar: "/testimonials/michael-chen.png",
  },
  {
    id: "u3",
    name: "Elena Rodriguez",
    email: "elena.r@example.com",
    role: "instructor",
    status: "active",
    courses: 12,
    joined: "2022-11-03",
    lastActive: "2023-10-28",
    avatar: "/testimonials/elena-rodriguez.png",
  },
  {
    id: "u4",
    name: "Jamal Williams",
    email: "jamal.w@example.com",
    role: "student",
    status: "inactive",
    courses: 3,
    joined: "2023-02-22",
    lastActive: "2023-09-15",
    avatar: "/testimonials/jamal-williams.png",
  },
  {
    id: "u5",
    name: "David Thompson",
    email: "david.t@example.com",
    role: "admin",
    status: "active",
    courses: 0,
    joined: "2022-08-14",
    lastActive: "2023-10-28",
    avatar: "/testimonials/david-thompson.png",
  },
  {
    id: "u6",
    name: "Aisha Patel",
    email: "aisha.p@example.com",
    role: "student",
    status: "suspended",
    courses: 7,
    joined: "2023-01-09",
    lastActive: "2023-10-20",
    avatar: "/testimonials/aisha-patel.png",
  },
  {
    id: "u7",
    name: "Marcus Johnson",
    email: "marcus.j@example.com",
    role: "instructor",
    status: "active",
    courses: 9,
    joined: "2022-12-05",
    lastActive: "2023-10-26",
    avatar: "/testimonials/marcus-johnson.png",
  },
  {
    id: "u8",
    name: "Sarah Williams",
    email: "sarah.w@example.com",
    role: "student",
    status: "active",
    courses: 4,
    joined: "2023-03-17",
    lastActive: "2023-10-25",
    avatar: "/testimonials/sarah-williams.png",
  },
  {
    id: "u9",
    name: "Carlos Rodriguez",
    email: "carlos.r@example.com",
    role: "student",
    status: "pending",
    courses: 1,
    joined: "2023-10-01",
    lastActive: "2023-10-22",
    avatar: "/testimonials/carlos-rodriguez.png",
  },
]

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case "admin":
      return "bg-purple-100 text-purple-800"
    case "instructor":
      return "bg-blue-100 text-blue-800"
    case "student":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800"
    case "inactive":
      return "bg-gray-100 text-gray-800"
    case "suspended":
      return "bg-red-100 text-red-800"
    case "pending":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function UsersTable() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button className="w-full sm:w-auto">
            <UserPlus className="mr-2 h-4 w-4" />
            Add User
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Courses</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getRoleBadgeColor(user.role)}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusBadgeColor(user.status)}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.courses}</TableCell>
                <TableCell>{new Date(user.joined).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(user.lastActive).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <PenSquare className="mr-2 h-4 w-4" />
                        Edit user
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Shield className="mr-2 h-4 w-4" />
                        Change role
                      </DropdownMenuItem>
                      {user.status === "active" ? (
                        <DropdownMenuItem>
                          <UserX className="mr-2 h-4 w-4" />
                          Suspend user
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem>
                          <ShieldAlert className="mr-2 h-4 w-4" />
                          Activate user
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete user
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
