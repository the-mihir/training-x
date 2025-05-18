"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bot, User, Send, Loader2 } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function InteractiveDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your TrainingX.AI Companion. How can I help you with your AI prompting skills today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("business") || input.toLowerCase().includes("idea")) {
        response =
          "For business idea generation, I recommend using the SCAMPER framework in your prompts:\n\n" +
          '**S**ubstitute: "What if we replace [X] with [Y]?"\n' +
          '**C**ombine: "How might we merge [A] and [B]?"\n' +
          '**A**dapt: "How can we adapt [existing product] for [new purpose]?"\n' +
          '**M**odify: "What if we change [feature] to enhance [benefit]?"\n' +
          '**P**ut to other use: "What new markets could use [product/service]?"\n' +
          '**E**liminate: "What happens if we remove [component]?"\n' +
          '**R**everse: "What if we did the opposite of [current approach]?"\n\n' +
          "Would you like to try crafting a prompt using one of these techniques?"
      } else if (
        input.toLowerCase().includes("image") ||
        input.toLowerCase().includes("picture") ||
        input.toLowerCase().includes("photo")
      ) {
        response =
          "For effective image generation prompts, try this structure:\n\n" +
          "1. **Subject**: What's the main focus? (person, object, scene)\n" +
          "2. **Setting**: Where is this taking place?\n" +
          "3. **Style**: What artistic style? (photorealistic, cartoon, oil painting)\n" +
          "4. **Lighting**: What mood does the lighting create?\n" +
          "5. **Color palette**: What colors dominate?\n" +
          "6. **Composition**: Any specific framing or perspective?\n\n" +
          'Example: "A serene mountain lake at sunset, photorealistic style, golden hour lighting, blue and orange color palette, wide-angle perspective"\n\n' +
          "Would you like me to help you craft an image prompt for a specific subject?"
      } else if (
        input.toLowerCase().includes("learn") ||
        input.toLowerCase().includes("beginner") ||
        input.toLowerCase().includes("start")
      ) {
        response =
          "If you're just getting started with AI prompting, here are three fundamental principles:\n\n" +
          "1. **Be specific**: The more details you provide, the better results you'll get\n" +
          "2. **Provide context**: Tell the AI what role it should play and what background information it needs\n" +
          "3. **Iterate**: Don't expect perfect results on the first try - refine your prompts based on the responses\n\n" +
          "Would you like to practice with a simple prompting exercise to apply these principles?"
      } else {
        response =
          "That's a great question about AI prompting! To give you the most helpful guidance, could you tell me a bit more about:\n\n" +
          "1. What specific AI tools are you working with? (ChatGPT, DALL-E, etc.)\n" +
          "2. What kind of tasks are you trying to accomplish?\n" +
          "3. What challenges have you encountered so far?\n\n" +
          "This will help me provide more tailored advice for your situation."
      }

      const assistantMessage: Message = { role: "assistant", content: response }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="mx-auto text-sm font-medium">TrainingX.AI Companion</div>
      </div>

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex items-start ${message.role === "user" ? "justify-end" : ""}`}>
            {message.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2 flex-shrink-0">
                <Bot className="h-4 w-4 text-primary" />
              </div>
            )}
            <div
              className={`rounded-lg p-3 max-w-[80%] ${
                message.role === "user" ? "bg-primary/10 text-foreground" : "bg-slate-100 dark:bg-slate-800"
              }`}
            >
              <p className="whitespace-pre-line">{message.content}</p>
            </div>
            {message.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center ml-2 flex-shrink-0">
                <User className="h-4 w-4" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-2 flex-shrink-0">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <div className="rounded-lg p-3 bg-slate-100 dark:bg-slate-800">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          </div>
        )}
      </div>

      <div className="p-3 border-t border-slate-200 dark:border-slate-700">
        <div className="flex items-center">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about AI prompting techniques..."
            className="flex-1 border border-slate-200 dark:border-slate-700 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            rows={1}
          />
          <Button onClick={handleSend} disabled={!input.trim() || isLoading} className="rounded-l-none">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-2 text-xs text-center text-muted-foreground">
          Try asking about business ideas, image generation, or beginner tips
        </div>
      </div>
    </div>
  )
}
