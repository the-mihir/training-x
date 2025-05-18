import type React from "react"
import NavbarWrapper from "./navbar-wrapper"

export default function CourseDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavbarWrapper />
      {children}
    </>
  )
}
