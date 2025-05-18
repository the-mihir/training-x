"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Reply } from "lucide-react"

// Sample comments data
const sampleComments = [
  {
    id: 1,
    author: {
      name: "Alex Johnson",
      avatar: "/testimonials/sarah-johnson.png",
      role: "Student",
    },
    content:
      "This is an amazing project! I love how you approached the design challenges and created such an intuitive interface.",
    likes: 12,
    timeAgo: "2 days ago",
    replies: [
      {
        id: 101,
        author: {
          name: "Sarah Johnson",
          avatar: "/testimonials/sarah-johnson.png",
          role: "Project Creator",
        },
        content: "Thank you so much for your kind words! I spent a lot of time on the user experience.",
        likes: 3,
        timeAgo: "1 day ago",
      },
    ],
  },
  {
    id: 2,
    author: {
      name: "Michael Chen",
      avatar: "/testimonials/michael-chen.png",
      role: "Instructor",
    },
    content:
      "Excellent work on implementing the concepts we discussed in class. Your attention to detail really shows in this project.",
    likes: 8,
    timeAgo: "3 days ago",
    replies: [],
  },
  {
    id: 3,
    author: {
      name: "Elena Rodriguez",
      avatar: "/testimonials/elena-rodriguez.png",
      role: "Student",
    },
    content:
      "I'm curious about how you handled the data visualization aspect. Did you use any specific libraries or create custom components?",
    likes: 5,
    timeAgo: "4 days ago",
    replies: [
      {
        id: 102,
        author: {
          name: "Sarah Johnson",
          avatar: "/testimonials/sarah-johnson.png",
          role: "Project Creator",
        },
        content:
          "I used a combination of D3.js for the core visualization logic and custom React components for the UI elements. Happy to share more details if you're interested!",
        likes: 4,
        timeAgo: "3 days ago",
      },
    ],
  },
]

export default function ProjectComments({ projectId, comments }: { projectId: string; comments: number }) {
  const [commentText, setCommentText] = useState("")
  const [projectComments, setProjectComments] = useState(sampleComments)
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyText, setReplyText] = useState("")

  const handleSubmitComment = () => {
    if (!commentText.trim()) return

    const newComment = {
      id: projectComments.length + 1,
      author: {
        name: "Current User",
        avatar: "/testimonials/david-thompson.png",
        role: "Student",
      },
      content: commentText,
      likes: 0,
      timeAgo: "Just now",
      replies: [],
    }

    setProjectComments([newComment, ...projectComments])
    setCommentText("")
  }

  const handleSubmitReply = (commentId: number) => {
    if (!replyText.trim()) return

    const updatedComments = projectComments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            {
              id: Date.now(),
              author: {
                name: "Current User",
                avatar: "/testimonials/david-thompson.png",
                role: "Student",
              },
              content: replyText,
              likes: 0,
              timeAgo: "Just now",
            },
          ],
        }
      }
      return comment
    })

    setProjectComments(updatedComments)
    setReplyingTo(null)
    setReplyText("")
  }

  const handleLikeComment = (commentId: number) => {
    const updatedComments = projectComments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1 }
      }
      return comment
    })

    setProjectComments(updatedComments)
  }

  const handleLikeReply = (commentId: number, replyId: number) => {
    const updatedComments = projectComments.map((comment) => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === replyId) {
            return { ...reply, likes: reply.likes + 1 }
          }
          return reply
        })
        return { ...comment, replies: updatedReplies }
      }
      return comment
    })

    setProjectComments(updatedComments)
  }

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold mb-4">Leave a Comment</h3>
        <div className="flex gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/testimonials/david-thompson.png" alt="Your Avatar" />
            <AvatarFallback>YA</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="Share your thoughts on this project..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="mb-3 min-h-[100px]"
            />
            <div className="flex justify-end">
              <Button onClick={handleSubmitComment} disabled={!commentText.trim()}>
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {projectComments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.author.avatar || "/placeholder.svg"} alt={comment.author.name} />
                <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                    {comment.author.role}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{comment.content}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </button>
                  <button
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Reply className="h-4 w-4" />
                    <span>Reply</span>
                  </button>
                  <span>{comment.timeAgo}</span>
                </div>

                {replyingTo === comment.id && (
                  <div className="mt-4 ml-6 flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/testimonials/david-thompson.png" alt="Your Avatar" />
                      <AvatarFallback>YA</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        placeholder={`Reply to ${comment.author.name}...`}
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        className="mb-2 min-h-[80px]"
                      />
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => setReplyingTo(null)}>
                          Cancel
                        </Button>
                        <Button size="sm" onClick={() => handleSubmitReply(comment.id)} disabled={!replyText.trim()}>
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {comment.replies.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="ml-6 pl-6 border-l-2 border-gray-100 dark:border-gray-700">
                        <div className="flex gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                            <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{reply.author.name}</span>
                              <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                                {reply.author.role}
                              </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">{reply.content}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                              <button
                                onClick={() => handleLikeReply(comment.id, reply.id)}
                                className="flex items-center gap-1 hover:text-primary transition-colors"
                              >
                                <Heart className="h-3.5 w-3.5" />
                                <span>{reply.likes}</span>
                              </button>
                              <span>{reply.timeAgo}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
