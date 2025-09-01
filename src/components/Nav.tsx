export function Nav() {
  const items = [
    { href: "#story", label: "Story" },
    { href: "#achievements", label: "Achievements" },
    { href: "#stats", label: "Stats" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-14">
        <a href="#" className="font-semibold">Nic Bramble</a>
        <div className="flex gap-5 text-sm">
          {items.map(i => (
            <a key={i.href} href={i.href} className="text-gray-600 hover:text-black">
              {i.label}
            </a>
          ))}
          <a
            href="https://calendly.com/your-link"
            className="rounded-xl bg-black text-white px-4 py-2"
          >
            Schedule
          </a>
        </div>
      </nav>
    </header>
  );
}
