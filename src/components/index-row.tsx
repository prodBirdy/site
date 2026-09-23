import { Link } from "react-router"
import type { IndexItem } from "@/lib/index-items"
import { cn } from "@/lib/utils"

export function IndexRow({
  item,
  last = false,
}: {
  item: IndexItem
  last?: boolean
}) {
  const titleClass =
    "text-[16px] leading-5 text-ink transition-colors hover:underline hover:underline-offset-4 md:text-[17px] md:leading-[21px]"

  const title = item.external ? (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className={titleClass}
    >
      {item.title}
    </a>
  ) : (
    <Link to={item.href} viewTransition className={titleClass}>
      {item.title}
    </Link>
  )

  return (
    <li
      className={cn(
        "flex items-start py-3.5 md:py-4",
        !last && "border-b border-hairline"
      )}
    >
      <div
        className="flex w-7 shrink-0 flex-col gap-1 font-mono text-[13px] leading-5 text-glyph md:w-[34px]"
        aria-hidden="true"
      >
        <span>{last ? "└─" : "├─"}</span>
        {last ? null : <span>│</span>}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
        <div className="flex items-center justify-between gap-2">
          {title}
          <span className="shrink-0 text-[11px] leading-[14px] tracking-[1.2px] text-glyph md:hidden">
            {item.tag}
          </span>
        </div>
        <p className="text-[13.5px] leading-5 text-quiet md:text-[14px] md:leading-[21px]">
          {item.description}
        </p>
      </div>
      <span className="hidden w-14 shrink-0 text-right text-[11px] leading-[14px] tracking-[1.2px] text-glyph md:block">
        {item.tag}
      </span>
    </li>
  )
}
