import type { Metadata } from "next"

import ShowcaseHero from "./showcase-hero"
import ShowcaseGrid from "./showcase-grid"
import ShowcaseSubmission from "./showcase-submission"
import ShowcaseNavbarWrapper from "./navbar-wrapper"

export const metadata: Metadata = {
  title: "Student Showcase | TrainingX",
  description: "Explore amazing projects created by TrainingX students across various AI and skill-building courses.",
}

export default function ShowcasePage() {
  return (
    <>
      <ShowcaseNavbarWrapper />
      <main className="flex min-h-screen flex-col">
        <ShowcaseHero />
        <ShowcaseGrid />
        <ShowcaseSubmission />
      </main>
    </>
  )
}
