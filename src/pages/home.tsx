import { Link } from "react-router"
import { Layout } from "@/components/layout"
import { formatDate, getPosts } from "@/lib/posts"

const projects = [
  {
    slug: "hgi systems / tech lead",
    href: "https://hgisystems.com",
    description:
      "Claris Platinum Partner in Lauterach. FileMaker, ERP, and the web stack for what FileMaker shouldn't carry.",
  },
  {
    slug: "EmilDohne/PhotoshopAPI",
    href: "https://github.com/EmilDohne/PhotoshopAPI",
    description:
      "C++20 PSD/PSB library. Added version-8 linked-layer parsing so current Photoshop files open.",
  },
  {
    slug: "prodBirdy/openNook",
    href: "https://github.com/prodBirdy/openNook",
    description: "Open-source Dynamic Island client for the desktop.",
  },
  {
    slug: "prodBirdy/bepost",
    href: "https://github.com/prodBirdy/bepost",
    description:
      "Editorial system: Shopify products → brief → generate → editor → approve → blog.",
  },
  {
    slug: "prodBirdy/shadcn-hydrogen-setup",
    href: "https://github.com/prodBirdy/shadcn-hydrogen-setup",
    description: "CLI that adds shadcn to Shopify Hydrogen / Remix projects.",
  },
  {
    slug: "prodBirdy/biz-scraper",
    href: "https://github.com/prodBirdy/biz-scraper",
    description:
      "Company search by industry and city. React, Express, TypeScript.",
  },
] as const

export function Home() {
  const posts = getPosts()
  const items = [
    ...posts.map((post) => ({
      key: post.slug,
      meta: formatDate(post.date),
      dateTime: post.date,
      href: `/posts/${post.slug}`,
      title: post.title,
      detail: post.excerpt,
      external: false,
    })),
    ...projects.map((project) => ({
      key: project.slug,
      meta: "—",
      dateTime: undefined as string | undefined,
      href: project.href,
      title: project.slug,
      detail: project.description,
      external: true,
    })),
  ]

  return (
    <Layout home>
      <section className="col-span-4 pt-8 md:col-span-4 md:pt-10">
        <p className="label mb-4">About</p>
        <div className="space-y-4 text-[14px] leading-5 text-zinc-700">
          <p>Tech Lead at hgi systems IT OG.</p>
          <p>Certified Claris FileMaker developer.</p>
          <p>
            FileMaker and ERP, plus{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              shadcn/ui
            </a>
            , Vite, Tailwind, Coolify, and Postgres.
          </p>
        </div>
      </section>

      <section className="col-span-4 pt-10 md:col-span-8 md:pt-10">
        <p className="label mb-4">Index</p>
        <ol>
          {items.map((item) => (
            <li
              key={item.key}
              className="rule-row grid grid-cols-8 gap-x-4 py-3"
            >
              {item.dateTime ? (
                <time
                  dateTime={item.dateTime}
                  className="col-span-2 text-[12px] leading-5 tabular-nums text-zinc-500"
                >
                  {item.meta}
                </time>
              ) : (
                <span className="col-span-2 text-[12px] leading-5 text-zinc-500">
                  {item.meta}
                </span>
              )}
              <div className="col-span-6">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[16px] leading-5 underline underline-offset-4"
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    viewTransition
                    className="text-[16px] leading-5 underline underline-offset-4"
                  >
                    {item.title}
                  </Link>
                )}
                {item.detail ? (
                  <p className="mt-1 text-[14px] leading-5 text-zinc-500">
                    {item.detail}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  )
}
