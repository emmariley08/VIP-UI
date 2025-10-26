export default function Tabs() {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <button className="ui-tab ui-tab--active">Feed</button>
      <button className="ui-tab">Jobs</button>
      <button className="ui-tab">Resources</button>
    </div>
  );
}