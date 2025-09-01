import { site } from "../content/site";

export function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 md:hidden">
      <a
        href={site.ctaHref}
        className="block text-center rounded-2xl bg-black text-white py-3 shadow-soft"
      >
        {site.ctaLabel}
      </a>
    </div>
  );
}
