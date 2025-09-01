import { site } from "../content/site";

export function WhyD2D() {
  return (
    <section id="why" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">Why Door-to-Door?</h2>
        <p className="text-gray-600 mb-6">
          Never done sales? Perfect. This is a structured, coached summer program built for first-timers.
          You’ll learn how to communicate clearly, handle pressure, and lead — the stuff employers actually notice.
        </p>
        <ul className="grid gap-4">
          {site.collegeWhy.map((line, i) => (
            <li key={i} className="bg-gray-50 rounded-2xl p-4">{line}</li>
          ))}
        </ul>
        <p className="text-xs text-gray-500 mt-4">{site.internshipNote}</p>
      </div>
    </section>
  );
}
