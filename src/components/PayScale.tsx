import { site } from "../content/site";

export function PayScale() {
  return (
    <section id="pay" className="py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">Competitive Pay Scale</h2>
        <p className="text-gray-700 mb-6">{site.payScaleIntro}</p>
        <div className="grid md:grid-cols-3 gap-4">
          {site.payTiers.map((t, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 p-6">
              <div className="text-sm uppercase tracking-wide text-gray-500">{t.tier}</div>
              <div className="text-3xl font-semibold mt-2">{t.est}</div>
              <div className="text-gray-500 mt-2 text-sm">{t.note}</div>
            </div>
          ))}
        </div>
        <a
          href={site.ctaHref}
          className="inline-block mt-8 rounded-2xl bg-black text-white px-6 py-3"
        >
          See full breakdown on a quick call →
        </a>
      </div>
    </section>
  );
}
