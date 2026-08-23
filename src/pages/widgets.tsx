import { Link } from "react-router"
import { InstallPath } from "@/components/install-path"
import { Layout } from "@/components/layout"
import { UnlockPanel } from "@/components/unlock-panel"
import { pack, widgets } from "@/lib/widgets"

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
        <p className="label mb-3">Package</p>
        <h1 className="text-[32px] leading-none tracking-tight md:text-[40px]">
          {pack.name}
        </h1>
        <p className="mt-4 max-w-xl text-[14px] leading-5 text-zinc-600">
          {pack.pitch}
        </p>
        <p className="mt-4 text-[16px] leading-5">
          {pack.price}{" "}
          <span className="text-[12px] text-zinc-500">{pack.priceNote}</span>
        </p>
        <div className="mt-4">
          <UnlockPanel name={pack.name} />
        </div>
      </section>

      <section className="col-span-4 pt-10 md:col-span-8 md:col-start-3">
        <p className="label mb-3">First run</p>
        <InstallPath />
      </section>

      <section className="col-span-4 pt-10 md:col-span-8 md:col-start-3">
        <p className="label mb-3">Inside</p>
        <ul>
          {widgets.map((widget) => (
            <li key={widget.slug} className="rule-row py-4">
              <Link
                to={`/widgets/${widget.slug}`}
                viewTransition
                className="underline underline-offset-4"
              >
                {widget.name}
              </Link>
              <p className="mt-2 text-[14px] leading-5 text-zinc-600">
                {widget.pitch}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
