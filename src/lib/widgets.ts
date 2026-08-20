export type Widget = {
  slug: string
  name: string
  pitch: string
  price: string
  priceNote: string
}

export const widgets: Widget[] = [
  {
    slug: "data-grid",
    name: "Data Grid",
    pitch:
      "A shadcn-style grid for a FileMaker web viewer. Sort, filter, and select a row to run a script.",
    price: "€39",
    priceNote: "Placeholder. Not live.",
  },
]

export function getWidget(slug: string): Widget | undefined {
  return widgets.find((widget) => widget.slug === slug)
}
