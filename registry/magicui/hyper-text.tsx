import type React from "react"

interface HyperTextProps {
  children: React.ReactNode
}

export const HyperText: React.FC<HyperTextProps> = ({ children }) => {
  return <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">{children}</span>
}
