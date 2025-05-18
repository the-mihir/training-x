import Link from "next/link"
import Image from "next/image"
import { Heart, MessageSquare } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Project = {
  id: string
  title: string
  description: string
  image: string
  category: string
  categoryLabel: string
  student: {
    name: string
    avatar: string
    title: string
  }
  course: string
  likes: number
  comments: number
  featured: boolean
  timeAgo: string
}

export default function RelatedProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-4">
      {projects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-4">No related projects found</p>
      ) : (
        projects.map((project) => (
          <Link key={project.id} href={`/showcase/${project.id}`} className="block">
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/3 aspect-video sm:aspect-square">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4 flex-1">
                  <Badge variant="outline" className="mb-2">
                    {project.categoryLabel}
                  </Badge>
                  <h4 className="font-bold mb-1 line-clamp-1">{project.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <span>{project.student.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        <span>{project.comments}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))
      )}
    </div>
  )
}
