export default function ProfileCard() {
  return (
    <section className="ui-card">
      <h3 className="text-lg font-semibold text-[#416a4a]">Welcome back, Megan!</h3>
      <div className="mt-4 flex items-center justify-center">
        <div className="h-28 w-28 rounded-full bg-slate-200" />
      </div>
      <button className="mt-4 w-full rounded-full bg-[#5aa56a] px-4 py-2 text-sm font-medium text-white hover:bg-[#4b8c58]">
        Edit Profile
      </button>
    </section>
  );
}