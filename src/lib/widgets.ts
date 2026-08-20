export type Widget = {
  slug: string
  name: string
  pitch: string
  price: string
  priceNote: string
  does: string[]
}

export const widgets: Widget[] = [
  {
    slug: "data-grid",
    name: "Data Grid",
    pitch:
      "A shadcn-style grid for a FileMaker web viewer. Sort, filter, and select a row to run a script.",
    price: "€39",
    priceNote: "Placeholder. Not live.",
    does: [
      "Sort and filter records in the web viewer.",
      "Select a row to run a FileMaker script.",
      "Map your existing fields. Keep the file you already have.",
    ],
  },
  {
    slug: "form",
    name: "Form",
    pitch:
      "Record editor for a web viewer. Edit mapped fields; save and cancel run FileMaker scripts.",
    price: "€29",
    priceNote: "Placeholder. Not live.",
    does: [
      "Edit the current record from mapped fields.",
      "Save and cancel fire FileMaker scripts.",
      "No new layouts to rebuild. Map what you already have.",
    ],
  },
  {
    slug: "record-picker",
    name: "Record Picker",
    pitch:
      "Search and pick a related record in a web viewer. Selection runs a FileMaker script.",
    price: "€29",
    priceNote: "Placeholder. Not live.",
    does: [
      "Search records you already store.",
      "Pick a row to set a key or run a script.",
      "Map the key and display fields.",
    ],
  },
  {
    slug: "kanban",
    name: "Kanban",
    pitch:
      "Status columns in a web viewer. Drag a card to another column to run a FileMaker script.",
    price: "€29",
    priceNote: "Placeholder. Not live.",
    does: [
      "Group records by a status field.",
      "Drop a card to run a FileMaker script.",
      "Map id, title, and status.",
    ],
  },
  {
    slug: "date-range",
    name: "Date Range",
    pitch:
      "From / to dates in a web viewer. Apply runs a FileMaker script to constrain the found set.",
    price: "€19",
    priceNote: "Placeholder. Not live.",
    does: [
      "Pick a from / to range.",
      "Apply runs a FileMaker script.",
      "Map the date field you already use.",
    ],
  },
]

export function getWidget(slug: string): Widget | undefined {
  return widgets.find((widget) => widget.slug === slug)
}
