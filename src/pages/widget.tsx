import { Link, useParams } from "react-router"
import { InstallPath } from "@/components/install-path"
import { Layout } from "@/components/layout"
import { UnlockPanel } from "@/components/unlock-panel"
import { getWidget, type Widget } from "@/lib/widgets"

function Mock({ slug }: { slug: string }) {
  if (slug === "form") {
    return (
      <div className="space-y-3 border border-zinc-200 p-3">
        <label className="block text-[13px] leading-5">
          <span className="text-zinc-500">Company</span>
          <span className="mt-1 block border-b border-zinc-200 py-1">
            HGI Systems
          </span>
        </label>
        <label className="block text-[13px] leading-5">
          <span className="text-zinc-500">Status</span>
          <span className="mt-1 block border-b border-zinc-200 py-1">Open</span>
        </label>
        <p className="pt-2 text-[12px] text-zinc-400">Save · Cancel</p>
      </div>
    )
  }

  if (slug === "record-picker") {
    return (
      <div className="border border-zinc-200">
        <p className="border-b border-zinc-200 px-3 py-2 text-[12px] text-zinc-500">
          Search
        </p>
        <ul className="text-[13px] leading-5">
          <li className="px-3 py-2">1001 · Invoices</li>
          <li className="bg-zinc-100 px-3 py-2">1002 · Jobs</li>
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
          <div key={col} className="border border-zinc-200 p-2">
            <p className="text-[12px] text-zinc-500">{col}</p>
            <p className="mt-2 bg-zinc-100 px-2 py-2">{card}</p>
          </div>
        ))}
      </div>
    )
  }

  if (slug === "date-range") {
    return (
      <div className="flex gap-4 border border-zinc-200 p-3 text-[13px] leading-5">
        <p>
          <span className="text-zinc-500">From</span>
          <span className="mt-1 block border-b border-zinc-200 py-1">
            1 Aug 2026
          </span>
        </p>
        <p>
          <span className="text-zinc-500">To</span>
          <span className="mt-1 block border-b border-zinc-200 py-1">
            20 Aug 2026
          </span>
        </p>
      </div>
    )
  }

  return (
    <div className="border border-zinc-200">
      <div className="flex items-center justify-between border-b border-zinc-200 px-3 py-2">
        <span className="text-[12px] text-zinc-500">Filter</span>
        <span className="text-[12px] text-zinc-400">static mock</span>
      </div>
      <table className="w-full text-left text-[13px] leading-5">
        <thead>
          <tr className="border-b border-zinc-200 text-zinc-500">
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
          <tr className="bg-zinc-100">
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
      <p className="col-span-full pt-6 md:col-span-2 md:pt-10">
        <Link
          to="/widgets"
          viewTransition
          className="label underline underline-offset-4"
        >
          widgets
        </Link>
      </p>
      <article className="col-span-4 pt-2 md:col-span-8 md:pt-10">
        <p className="label">FileMaker widget</p>
        <h1 className="mt-2 text-[32px] leading-none tracking-tight md:text-[40px]">
          {widget.name}
        </h1>
        <p className="mt-4 text-[14px] leading-5 text-zinc-600">
          {widget.pitch}
        </p>
        <p className="mt-4 text-[16px] leading-5">
          {widget.price}{" "}
          <span className="text-[12px] text-zinc-500">{widget.priceNote}</span>
        </p>
        <div className="mt-4">
          <UnlockPanel name={widget.name} />
        </div>
      </article>

      <section className="col-span-4 pt-10 md:col-span-8 md:col-start-3">
        <p className="label mb-3">Install first</p>
        <InstallPath />
      </section>

      <section className="col-span-4 pt-10 md:col-span-8 md:col-start-3">
        <p className="label mb-3">What it does</p>
        <ul className="list-disc space-y-2 pl-5 text-[14px] leading-5 text-zinc-600">
          {widget.does.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="col-span-4 pt-10 md:col-span-8 md:col-start-3">
        <p className="label mb-3">Preview</p>
        <Mock slug={widget.slug} />
        <p className="mt-3 text-[12px] leading-4 text-zinc-500">
          Preview only. Widget source is not on this site.
        </p>
      </section>
    </Layout>
  )
}

export function WidgetPage() {
  const { slug } = useParams<{ slug: string }>()
  const widget = slug ? getWidget(slug) : undefined

  if (!widget) {
    return (
      <Layout>
        <p className="col-span-full pt-8 text-[14px] leading-5 text-zinc-500">
          Widget not found.
        </p>
        <Link
          to="/widgets"
          viewTransition
          className="col-span-full text-[12px] underline underline-offset-4"
        >
          back
        </Link>
      </Layout>
    )
  }

  return <Detail widget={widget} />
}
