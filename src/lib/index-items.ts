export type IndexTag = "post" | "work" | "oss"

export type IndexItem = {
  title: string
  description: string
  tag: IndexTag
  href: string
  external?: boolean
}

export const indexItems: IndexItem[] = [
  {
    title: "posts/warmup",
    description: "Free PC game launcher. Built with Levent.",
    tag: "post",
    href: "/posts/warmup",
  },
  {
    title: "hgi systems / tech lead",
    description:
      "Claris Platinum Partner in Lauterach. FileMaker, ERP, and the web stack for what FileMaker shouldn't carry.",
    tag: "work",
    href: "https://hgisystems.com",
    external: true,
  },
  {
    title: "EmilDohne/PhotoshopAPI",
    description:
      "C++20 PSD/PSB library. Added version-8 linked-layer parsing so current Photoshop files open.",
    tag: "oss",
    href: "https://github.com/EmilDohne/PhotoshopAPI",
    external: true,
  },
  {
    title: "prodBirdy/openNook",
    description: "Open-source Dynamic Island client for the desktop.",
    tag: "oss",
    href: "https://github.com/prodBirdy/openNook",
    external: true,
  },
  {
    title: "prodBirdy/shadcn-hydrogen-setup",
    description: "CLI that adds shadcn to Shopify Hydrogen / Remix projects.",
    tag: "oss",
    href: "https://github.com/prodBirdy/shadcn-hydrogen-setup",
    external: true,
  },
  {
    title: "prodBirdy/biz-scraper",
    description: "Company search by industry and city. React, Express, TypeScript.",
    tag: "oss",
    href: "https://github.com/prodBirdy/biz-scraper",
    external: true,
  },
]
