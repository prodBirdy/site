import { Link, useParams } from "react-router"
import { InstallPath } from "@/components/install-path"
import { Layout } from "@/components/layout"
import { pack, getWidget, type Widget } from "@/lib/widgets"

function Mock({ slug }: { slug: string }) {
  if (slug === "form") {
    return (
      <div className="flex flex-col gap-3 border border-hairline p-3">
        <label className="block text-[13px] leading-5">
          <span className="text-quiet">Company</span>
          <span className="mt-1 block border-b border-hairline py-1">
            HGI Systems
          </span>
        </label>
        <label className="block text-[13px] leading-5">
          <span className="text-quiet">Status</span>
          <span className="mt-1 block border-b border-hairline py-1">Open</span>
        </label>
        <p className="pt-2 text-[12px] text-glyph">Save · Cancel</p>
      </div>
    )
  }

  if (slug === "record-picker") {
    return (
      <div className="border border-hairline">
        <p className="border-b border-hairline px-3 py-2 text-[12px] text-quiet">
          Search
        </p>
        <ul className="text-[13px] leading-5">
          <li className="px-3 py-2">1001 · Invoices</li>
          <li className="bg-hairline px-3 py-2">1002 · Jobs</li>
          <li className="px-3 py-2">1003 · Contacts</li>
        </ul>
      </div>
    )
  }

  if (slug === "kanban") {
    return (
      <div className="grid grid-cols-3 gap-2 text-[13px] leading-5">
        {[
          ["Open", "Invoice 1001"],
          ["Hold", "Job 1002"],
          ["Done", "Contact 1003"],
        ].map(([col, card]) => (
          <div key={col} className="border border-hairline p-2">
            <p className="text-[12px] text-quiet">{col}</p>
            <p className="mt-2 bg-hairline px-2 py-2">{card}</p>
          </div>
        ))}
      </div>
    )
  }

  if (slug === "date-range") {
    return (
      <div className="flex gap-4 border border-hairline p-3 text-[13px] leading-5">
        <p>
          <span className="text-quiet">From</span>
          <span className="mt-1 block border-b border-hairline py-1">
            1 Aug 2026
          </span>
        </p>
        <p>
          <span className="text-quiet">To</span>
          <span className="mt-1 block border-b border-hairline py-1">
            20 Aug 2026
          </span>
        </p>
      </div>
    )
  }

  return (
    <div className="border border-hairline">
      <div className="flex items-center justify-between border-b border-hairline px-3 py-2">
        <span className="text-[12px] text-quiet">Filter</span>
        <span className="text-[12px] text-glyph">static mock</span>
      </div>
      <table className="w-full text-left text-[13px] leading-5">
        <thead>
          <tr className="border-b border-hairline text-quiet">
            <th className="px-3 py-2 font-normal">ID</th>
            <th className="px-3 py-2 font-normal">Table</th>
            <th className="px-3 py-2 font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-3 py-2">1001</td>
            <td className="px-3 py-2">Invoices</td>
            <td className="px-3 py-2">Open</td>
          </tr>
          <tr className="bg-hairline">
            <td className="px-3 py-2">1002</td>
            <td className="px-3 py-2">Jobs</td>
            <td className="px-3 py-2">Hold</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function Detail({ widget }: { widget: Widget }) {
  return (
    <Layout>
      <div className="flex flex-col gap-10 pt-6 md:pt-10">
        <p>
          <Link
            to="/widgets"
            viewTransition
            className="label underline underline-offset-4"
          >
            widgets
          </Link>
        </p>
        <article>
          <p className="label">Included in the package</p>
          <h1 className="mt-2 text-[32px] leading-none tracking-tight text-ink md:text-[40px]">
            {widget.name}
          </h1>
          <p className="mt-4 text-[14px] leading-5 text-copy">{widget.pitch}</p>
          <p className="mt-4 text-[14px] leading-5 text-quiet">
            Part of {pack.name}. No separate purchase.
          </p>
        </article>

        <section>
          <p className="label mb-3">Install first</p>
          <InstallPath />
        </section>

        <section>
          <p className="label mb-3">What it does</p>
          <ul className="flex list-disc flex-col gap-2 pl-5 text-[14px] leading-5 text-copy">
            {widget.does.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <p className="label mb-3">Preview</p>
          <Mock slug={widget.slug} />
          <p className="mt-3 text-[12px] leading-4 text-quiet">
            Preview only. Widget source is not on this site.
          </p>
        </section>
      </div>
    </Layout>
  )
}

export function WidgetPage() {
  const { slug } = useParams<{ slug: string }>()
  const widget = slug ? getWidget(slug) : undefined

  if (!widget) {
    return (
      <Layout>
        <div className="flex flex-col gap-4 pt-8">
          <p className="text-[14px] leading-5 text-quiet">Widget not found.</p>
          <Link
            to="/widgets"
            viewTransition
            className="text-[12px] underline underline-offset-4"
          >
            back
          </Link>
        </div>
      </Layout>
    )
  }

  return <Detail widget={widget} />
}
