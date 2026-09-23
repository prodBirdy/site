import type { ReactNode } from "react"
import { Link } from "react-router"

function Slash() {
  return <span className="text-hairline"> / </span>
}

function NavAnchor({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-copy transition-colors hover:text-ink"
    >
      {children}
    </a>
  )
}

export function Layout({
  children,
  home = false,
}: {
  children: ReactNode
  home?: boolean
}) {
  const Wordmark = home ? "h1" : "p"

  return (
    <div className="min-h-svh bg-page text-copy">
      <div className="mx-auto flex min-h-svh w-full max-w-[1120px] flex-col px-6 pt-11 pb-14 md:px-12 md:pt-14 md:pb-24">
        <header className="flex flex-col gap-3.5 border-b border-ink pb-4 md:flex-row md:items-end md:justify-between md:pb-[18px]">
          <Wordmark className="font-heading text-[46px] leading-[41px] tracking-[-2px] text-ink italic md:text-[72px] md:leading-[65px] md:tracking-[-3px]">
            <Link to="/" viewTransition className="no-underline">
              prodBirdy
            </Link>
          </Wordmark>
          <nav className="flex flex-col gap-[5px] md:items-end md:gap-[7px] md:text-right">
            <p className="text-[11px] leading-[15px] tracking-[0.9px] text-quiet">
              LAUTERACH, AT
            </p>
            <p className="flex flex-wrap text-[12px] leading-4">
              <Link
                to="/widgets"
                viewTransition
                className="text-copy transition-colors hover:text-ink md:hidden"
              >
                widgets
              </Link>
              <span className="md:hidden">
                <Slash />
              </span>
              <NavAnchor href="https://github.com/prodBirdy">github</NavAnchor>
              <Slash />
              <NavAnchor href="https://hgisystems.com">hgi systems</NavAnchor>
            </p>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="mt-auto flex items-center justify-between gap-3 border-t border-ink pt-[18px] md:pt-5">
          <p className="text-[11px] leading-[15px] tracking-[1.2px] text-quiet">
            © 2026<span className="hidden md:inline"> prodBirdy</span>
          </p>
          <a
            href="mailto:voegel@hgisystems.com"
            className="text-[12px] leading-[17px] text-copy transition-colors hover:text-ink"
          >
            voegel@hgisystems.com
          </a>
        </footer>
      </div>
    </div>
  )
}
