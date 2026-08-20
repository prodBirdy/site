import { Link } from "react-router"
import { InstallPath } from "@/components/install-path"
import { Layout } from "@/components/layout"
import { UnlockPanel } from "@/components/unlock-panel"
import { widgets } from "@/lib/widgets"

export function WidgetsPage() {
  return (
    <Layout>
      <p className="col-span-full pt-6 md:col-span-2 md:pt-10">
        <Link
          to="/"
          viewTransition
          className="label underline underline-offset-4"
        >
          back
        </Link>
      </p>
      <section className="col-span-4 pt-2 md:col-span-8 md:pt-10">
        <p className="label mb-3">Widgets</p>
        <h1 className="text-[32px] leading-none tracking-tight md:text-[40px]">
          FileMaker widgets
        </h1>
        <p className="mt-4 max-w-xl text-[14px] leading-5 text-zinc-600">
          Drop-in web-viewer widgets for FileMaker developers. Source stays
          private until you unlock a SKU.
        </p>
      </section>

      <ul className="col-span-full mt-10 grid grid-cols-subgrid">
        {widgets.map((widget) => (
          <li
            key={widget.slug}
            className="rule-row col-span-full grid grid-cols-subgrid py-8"
          >
            <div className="col-span-4 md:col-span-4">
              <p className="label">SKU</p>
              <h2 className="mt-2 text-[20px] leading-6">
                <Link
                  to={`/widgets/${widget.slug}`}
                  viewTransition
                  className="underline underline-offset-4"
                >
                  {widget.name}
                </Link>
              </h2>
              <p className="mt-3 text-[14px] leading-5 text-zinc-600">
                {widget.pitch}
              </p>
              <p className="mt-4 text-[16px] leading-5">
                {widget.price}{" "}
                <span className="text-[12px] text-zinc-500">
                  {widget.priceNote}
                </span>
              </p>
              <div className="mt-4">
                <UnlockPanel name={widget.name} />
              </div>
            </div>
            <div className="col-span-4 mt-8 md:col-span-8 md:mt-0">
              <p className="label mb-3">First run</p>
              <InstallPath />
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
