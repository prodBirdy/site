export const pack = {
  name: "FileMaker ERP widget package",
  pitch:
    "Grid, form, picker, kanban, and date-range for a FileMaker web viewer. One drop-in. One unlock.",
  price: "€49",
  priceNote: "Placeholder. Not live.",
}

export type Widget = {
  slug: string
  name: string
  pitch: string
  does: string[]
}

export const widgets: Widget[] = [
  {
    slug: "data-grid",
    name: "Data Grid",
    pitch:
      "Sort, filter, and select a row to run a FileMaker script.",
    does: [
      "Sort and filter records in the web viewer.",
      "Select a row to run a FileMaker script.",
    ],
  },
  {
    slug: "form",
    name: "Form",
    pitch: "Edit mapped fields. Save and cancel run FileMaker scripts.",
    does: [
      "Edit the current record from mapped fields.",
      "Save and cancel fire FileMaker scripts.",
    ],
  },
  {
    slug: "record-picker",
    name: "Record Picker",
    pitch: "Search and pick a related record. Selection runs a script.",
    does: [
      "Search records you already store.",
      "Pick a row to set a key or run a script.",
    ],
  },
  {
    slug: "kanban",
    name: "Kanban",
    pitch: "Drag a card to another status column to run a script.",
    does: [
      "Group records by a status field.",
      "Drop a card to run a FileMaker script.",
    ],
  },
  {
    slug: "date-range",
    name: "Date Range",
    pitch: "From / to dates. Apply constrains the found set.",
    does: [
      "Pick a from / to range.",
      "Apply runs a FileMaker script.",
    ],
  },
]

export function getWidget(slug: string): Widget | undefined {
  return widgets.find((widget) => widget.slug === slug)
}
