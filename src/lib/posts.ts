import type { ComponentType } from "react"

export type Post = {
  slug: string
  title: string
  date: string
  excerpt?: string
  Component: ComponentType
}

const modules = import.meta.glob<{
  default: ComponentType
  frontmatter: { title: string; date: string; excerpt?: string }
}>("../posts/*.mdx", { eager: true })

function slugFromPath(path: string) {
  return path.split("/").pop()!.replace(/\.mdx$/, "")
}

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export function formatDate(value: string) {
  const [year, month, day] = value.split("-")
  if (!year || !month || !day) return value
  const monthName = months[Number(month) - 1]
  if (!monthName) return value
  return `${Number(day)} ${monthName} ${year}`
}

export function getPosts(): Post[] {
  return Object.entries(modules)
    .map(([path, mod]) => ({
      slug: slugFromPath(path),
      title: mod.frontmatter.title,
      date: mod.frontmatter.date,
      excerpt: mod.frontmatter.excerpt,
      Component: mod.default,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug)
}
