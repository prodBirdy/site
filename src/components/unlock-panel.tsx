import { useRef } from "react"

export function UnlockPanel({ name }: { name: string }) {
  const dialog = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button
        type="button"
        className="underline underline-offset-4"
        onClick={() => dialog.current?.showModal()}
      >
        Unlock
      </button>
      <dialog
        ref={dialog}
        className="m-auto w-[min(100%,24rem)] border border-ink bg-page p-6 text-ink backdrop:bg-ink/40"
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current.close()
        }}
      >
        <p className="label">Checkout</p>
        <p className="mt-3 text-[16px] leading-5">{name}</p>
        <p className="mt-4 text-[14px] leading-5 text-copy">
          Checkout is not connected yet. Payout account pending.
        </p>
        <p className="mt-4 text-[12px] leading-4 text-quiet">
          Coming soon. No purchase from this page.
        </p>
        <button
          type="button"
          disabled
          className="mt-6 w-full border border-hairline px-3 py-2 text-[12px] uppercase tracking-[0.08em] text-glyph"
        >
          Buy — coming soon
        </button>
        <button
          type="button"
          className="mt-3 text-[12px] underline underline-offset-4"
          onClick={() => dialog.current?.close()}
        >
          close
        </button>
      </dialog>
    </>
  )
}
