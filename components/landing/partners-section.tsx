"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Marquee } from "@/registry/magicui/marquee"

const partners = [
  {
    name: "Google",
    logo: "/partners/google-logo.png",
  },
  {
    name: "Meta",
    logo: "/partners/meta-logo.png",
  },
  {
    name: "Microsoft",
    logo: "/partners/microsoft-logo.png",
  },
  {
    name: "Amazon",
    logo: "/partners/amazon-logo.png",
  },
  {
    name: "Salesforce",
    logo: "/partners/salesforce-logo.png",
  },
  {
    name: "Adobe",
    logo: "/partners/adobe-logo.png",
  },
  {
    name: "IBM",
    logo: "/partners/ibm-logo.png",
  },
  {
    name: "Oracle",
    logo: "/partners/oracle-logo.png",
  },
  {
    name: "Apple",
    logo: "/partners/apple-logo.png",
  },
  {
    name: "Tesla",
    logo: "/partners/tesla-logo.png",
  },
]

const firstRow = partners.slice(0, partners.length / 2)
const secondRow = partners.slice(partners.length / 2)

const PartnerCard = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Image
          src={logo || "/placeholder.svg"}
          alt={`${name} logo`}
          width={120}
          height={60}
          className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
        />
        <figcaption className="mt-4 text-sm font-medium text-center dark:text-white">{name}</figcaption>
      </div>
    </figure>
  )
}

export default function PartnersSection() {
  return (
    <section className="py-16 border-t">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4 text-center">
            <span className="text-2xl md:text-3xl block">Trusted by Companies</span>
            <span className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Already Using AI Agents
            </span>
          </h2>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  )
}
