import { Link, useParams } from "react-router"
import { InstallPath } from "@/components/install-path"
import { Layout } from "@/components/layout"
import { UnlockPanel } from "@/components/unlock-panel"
import { getWidget } from "@/lib/widgets"

const rows = [
  ["1001", "Invoices", "Open", "€1,240"],
  ["1002", "Jobs", "Hold", "€880"],
  ["1003", "Contacts", "Open", "€160"],
] as const

function MockGrid() {
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
            <th className="px-3 py-2 font-normal">Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row[0]}
              className={index === 1 ? "bg-zinc-100" : undefined}
            >
              {row.map((cell) => (
                <td key={cell} className="px-3 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
          <li>Sort and filter records in the web viewer.</li>
          <li>Select a row to run a FileMaker script.</li>
          <li>Map your existing fields. Keep the file you already have.</li>
        </ul>
      </section>

      <section className="col-span-4 pt-10 md:col-span-8 md:col-start-3">
        <p className="label mb-3">Preview</p>
        <MockGrid />
        <p className="mt-3 text-[12px] leading-4 text-zinc-500">
          Preview only. Widget source is not on this site.
        </p>
      </section>
    </Layout>
  )
}
