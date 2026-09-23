import { IndexRow } from "@/components/index-row"
import { Layout } from "@/components/layout"
import { indexItems } from "@/lib/index-items"
import { formatDate, getPosts } from "@/lib/posts"

function lastUpdatedLabel() {
  const latest = getPosts()[0]?.date
  if (!latest) return "20 AUG 2026"
  return formatDate(latest).toUpperCase()
}

export function Home() {
  const last = indexItems.length - 1

  return (
    <Layout home>
      <div className="flex flex-col gap-9 pt-9 pb-12 md:flex-row md:gap-[72px] md:pt-11 md:pb-[72px]">
        <section className="flex w-full flex-col gap-4 md:w-[248px] md:shrink-0 md:gap-[18px]">
          <h2 className="text-[11px] leading-4 tracking-[1.4px] text-quiet">
            ABOUT
          </h2>
          <div className="flex flex-col gap-3 text-[14px] leading-[21px] text-copy md:gap-[14px]">
            <p>Tech Lead at hgi systems IT OG.</p>
            <p>Certified Claris FileMaker developer.</p>
            <p>
              FileMaker and ERP, plus shadcn/ui, Vite, Tailwind, Coolify, and
              Postgres.
            </p>
          </div>
        </section>

        <section className="flex min-w-0 flex-1 flex-col gap-4 md:gap-[18px]">
          <h2 className="text-[11px] leading-4 tracking-[1.4px] text-quiet">
            INDEX
          </h2>
          <div>
            <div className="flex items-center gap-[14px] pb-[14px]">
              <p className="shrink-0 text-[11px] leading-[15px] tracking-[1.4px] text-quiet">
                LAST UPDATED {lastUpdatedLabel()}
              </p>
              <div className="h-px flex-1 bg-hairline" />
            </div>
            <ol>
              {indexItems.map((item, index) => (
                <IndexRow
                  key={item.title}
                  item={item}
                  last={index === last}
                />
              ))}
            </ol>
          </div>
        </section>
      </div>
    </Layout>
  )
}
