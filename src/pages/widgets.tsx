import { Link } from "react-router"
import { InstallPath } from "@/components/install-path"
import { Layout } from "@/components/layout"
import { UnlockPanel } from "@/components/unlock-panel"
import { pack, widgets } from "@/lib/widgets"

export function WidgetsPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-10 pt-6 md:pt-10">
        <p>
          <Link
            to="/"
            viewTransition
            className="label underline underline-offset-4"
          >
            back
          </Link>
        </p>
        <section>
          <p className="label mb-3">Package</p>
          <h1 className="text-[32px] leading-none tracking-tight text-ink md:text-[40px]">
            {pack.name}
          </h1>
          <p className="mt-4 max-w-xl text-[14px] leading-5 text-copy">
            {pack.pitch}
          </p>
          <p className="mt-4 text-[16px] leading-5 text-ink">
            {pack.price}{" "}
            <span className="text-[12px] text-quiet">{pack.priceNote}</span>
          </p>
          <div className="mt-4">
            <UnlockPanel name={pack.name} />
          </div>
        </section>

        <section>
          <p className="label mb-3">First run</p>
          <InstallPath />
        </section>

        <section>
          <p className="label mb-3">Inside</p>
          <ul>
            {widgets.map((widget) => (
              <li
                key={widget.slug}
                className="border-b border-hairline py-4 last:border-b-0"
              >
                <Link
                  to={`/widgets/${widget.slug}`}
                  viewTransition
                  className="text-ink underline underline-offset-4"
                >
                  {widget.name}
                </Link>
                <p className="mt-2 text-[14px] leading-5 text-copy">
                  {widget.pitch}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  )
}
