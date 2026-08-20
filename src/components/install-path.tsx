export function InstallPath() {
  return (
    <div>
      <p className="text-[14px] leading-5 text-zinc-950">
        Not a new FileMaker app. Not a new ERP app. Not HGI OfficeAssistant.
        Drop it into a file you already have.
      </p>
      <ol className="mt-3 list-decimal space-y-1 pl-5 text-[14px] leading-5 text-zinc-600">
        <li>Web Viewer + load the JS</li>
        <li>One or two scripts</li>
        <li>Map fields</li>
      </ol>
      <p className="mt-3 text-[14px] leading-5 text-zinc-600">
        No rebuild of your solution.
      </p>
    </div>
  )
}
