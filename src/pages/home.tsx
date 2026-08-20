import { useEffect, useRef, useState } from "react"
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

const items = [
  ...getPosts().map((post) => ({
    key: post.slug,
    path: `posts/${post.slug}`,
    meta: formatDate(post.date),
    dateTime: post.date,
    href: `/posts/${post.slug}`,
    detail: post.excerpt,
    external: false,
  })),
  ...projects.map((project) => ({
    key: project.slug,
    path: project.slug,
    meta: "—",
    dateTime: undefined as string | undefined,
    href: project.href,
    detail: project.description,
    external: true,
  })),
]

export function Home() {
  const last = items.length - 1
  const [activeKey, setActiveKey] = useState(items[0]?.key)
  const scanRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const rows = rowRefs.current
    let frame = 0

    const update = () => {
      const scan = scanRef.current
      if (!scan) return
      const lineY = scan.getBoundingClientRect().top + scan.offsetHeight / 2
      let nextKey = items[0]?.key
      for (let i = 0; i < rows.length; i += 1) {
        const row = rows[i]
        const item = items[i]
        if (!row || !item) continue
        if (row.getBoundingClientRect().top <= lineY) nextKey = item.key
      }
      setActiveKey(nextKey)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const active = items.find((item) => item.key === activeKey) ?? items[0]

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
        <div className="index-track">
          <div ref={scanRef} className="index-scan" aria-live="polite">
            {active?.dateTime ? (
              <time dateTime={active.dateTime}>{active.meta}</time>
            ) : (
              <span>—</span>
            )}
          </div>
          <ol className="index-tree">
            <li className="tree-node text-zinc-400" aria-hidden="true">
              <span className="tree-branch">.</span>
            </li>
            {items.map((item, index) => (
              <li
                key={item.key}
                ref={(node) => {
                  rowRefs.current[index] = node
                }}
                className="tree-node rule-row"
                data-current={item.key === active?.key ? "true" : undefined}
              >
                <span className="tree-branch" aria-hidden="true">
                  {index === last ? "└─" : "├─"}
                </span>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="tree-name"
                  >
                    {item.path}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    viewTransition
                    className="tree-name"
                  >
                    {item.path}
                  </Link>
                )}
                {item.detail ? (
                  <>
                    <span className="tree-branch" aria-hidden="true">
                      {index === last ? " " : "│"}
                    </span>
                    <p className="tree-detail">{item.detail}</p>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  )
}
