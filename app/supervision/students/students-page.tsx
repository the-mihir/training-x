"use client"

import Image from "next/image"
import { MoreHorizontal, ArrowUpDown, Eye, Edit, Trash } from "lucide-react"
import { StudentTable } from "@/components/supervision/student-table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

// Mock data
const students = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    status: "active",
    progress: 78,
    courses: 4,
    lastActive: "2 hours ago",
    image: "/abstract-profile.png",
  },
  {
    id: "2",
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    status: "active",
    progress: 65,
    courses: 3,
    lastActive: "1 day ago",
    image: "/abstract-profile.png",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "james.wilson@example.com",
    status: "inactive",
    progress: 45,
    courses: 2,
    lastActive: "5 days ago",
    image: "/abstract-profile.png",
  },
  {
    id: "4",
    name: "Sarah Lee",
    email: "sarah.lee@example.com",
    status: "active",
    progress: 92,
    courses: 5,
    lastActive: "3 hours ago",
    image: "/abstract-profile.png",
  },
  {
    id: "5",
    name: "David Chen",
    email: "david.chen@example.com",
    status: "active",
    progress: 88,
    courses: 4,
    lastActive: "1 hour ago",
    image: "/abstract-profile.png",
  },
  {
    id: "6",
    name: "Emma Brown",
    email: "emma.brown@example.com",
    status: "inactive",
    progress: 12,
    courses: 1,
    lastActive: "2 weeks ago",
    image: "/abstract-profile.png",
  },
  {
    id: "7",
    name: "Michael Smith",
    email: "michael.smith@example.com",
    status: "active",
    progress: 54,
    courses: 3,
    lastActive: "5 hours ago",
    image: "/abstract-profile.png",
  },
  {
    id: "8",
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
    status: "active",
    progress: 71,
    courses: 4,
    lastActive: "12 hours ago",
    image: "/abstract-profile.png",
  },
  {
    id: "9",
    name: "Daniel Taylor",
    email: "daniel.taylor@example.com",
    status: "active",
    progress: 83,
    courses: 5,
    lastActive: "4 hours ago",
    image: "/abstract-profile.png",
  },
  {
    id: "10",
    name: "Olivia Anderson",
    email: "olivia.anderson@example.com",
    status: "inactive",
    progress: 29,
    courses: 2,
    lastActive: "1 week ago",
    image: "/abstract-profile.png",
  },
]

export default function StudentsPage() {
  const columns = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const student = row.original
        return (
          <div className="flex items-center gap-2">
            <Image
              src={student.image || "/placeholder.svg"}
              alt={student.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">{student.name}</p>
              <p className="text-xs text-muted-foreground">{student.email}</p>
            </div>
          </div>
        )
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status")
        return (
          <Badge
            variant={status === "active" ? "default" : "secondary"}
            className={status === "active" ? "bg-green-500" : "bg-gray-500"}
          >
            {status === "active" ? "Active" : "Inactive"}
          </Badge>
        )
      },
    },
    {
      accessorKey: "progress",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Progress
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const progress = row.getValue("progress")
        return (
          <div className="flex items-center gap-2">
            <div className="h-2 w-full max-w-[100px] rounded-full bg-gray-200">
              <div className="h-full rounded-full bg-purple-600" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-xs font-medium">{progress}%</span>
          </div>
        )
      },
    },
    {
      accessorKey: "courses",
      header: "Courses",
      cell: ({ row }) => {
        return <div>{row.getValue("courses")}</div>
      },
    },
    {
      accessorKey: "lastActive",
      header: "Last Active",
      cell: ({ row }) => {
        return <div>{row.getValue("lastActive")}</div>
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const student = row.original

        return (
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
                View Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit Details
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <Trash className="mr-2 h-4 w-4" />
                Remove Student
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const filterOptions = [
    {
      key: "status",
      label: "Status",
      options: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground">Manage and monitor your supervised students</p>
        </div>
        <Button>Add Student</Button>
      </div>

      <div className="rounded-md border">
        <StudentTable columns={columns} data={students} searchKey="name" filterOptions={filterOptions} />
      </div>
    </div>
  )
}
