export default function HeaderSearch() {
  return (
    <header className="bg-gradient-to-b from-[#5aa56a] to-[#4f8f5c]">
      <div className="mx-auto max-w-6xl px-4 py-5">
        <div className="mb-3 flex items-center justify-end gap-6 text-xs text-white/90">
          <a href="#" className="hover:underline">Logout</a>
          <a href="#" className="hover:underline">Upload Resume</a>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <input className="col-span-12 sm:col-span-3 ui-input bg-[#e6f1dc] rounded-md" placeholder="Keywords/job title" />
          <input className="col-span-12 sm:col-span-3 ui-input bg-[#e6f1dc] rounded-md" placeholder="Location" />
          <input className="col-span-12 sm:col-span-2 ui-input bg-[#e6f1dc] rounded-md" placeholder="Distance" />
          <button className="col-span-6 sm:col-span-2 ui-btn-primary">Find jobs</button>
          <div className="col-span-6 sm:col-span-2 flex items-center">
            <button className="ui-btn-ghost w-full sm:w-auto">Advanced filters</button>
          </div>
        </div>
      </div>
    </header>
  );
}