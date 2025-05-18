import type React from "react"
import ShowcaseNavbarWrapper from "../navbar-wrapper"

export default function ProjectDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ShowcaseNavbarWrapper />
      {children}
    </>
  )
}
