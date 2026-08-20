import type { ReactNode } from "react"
import { Link } from "react-router"

export function Layout({
  children,
  home = false,
}: {
  children: ReactNode
  home?: boolean
}) {
  const Wordmark = home ? "h1" : "p"

  return (
    <div className="min-h-svh bg-white text-zinc-950">
      <div className="page">
        <header className="rule col-span-full grid grid-cols-subgrid pb-6">
          <Wordmark className="font-heading col-span-4 text-[40px] leading-none tracking-tight md:col-span-8 md:text-[64px]">
            <Link to="/" viewTransition className="no-underline">
              prodBirdy
            </Link>
          </Wordmark>
          <nav className="col-span-4 mt-6 flex flex-col justify-end text-[12px] leading-4 text-zinc-600 md:mt-0 md:items-end md:text-right">
            <p>Lauterach</p>
            <p>
              <Link
                to="/widgets"
                viewTransition
                className="underline underline-offset-4"
              >
                widgets
              </Link>
              <span className="text-zinc-400"> / </span>
              <a
                href="https://github.com/prodBirdy"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                github
              </a>
              <span className="text-zinc-400"> / </span>
              <a
                href="https://hgisystems.com"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                hgi systems
              </a>
            </p>
          </nav>
        </header>
        {children}
      </div>
    </div>
  )
}
