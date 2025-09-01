import { useState } from "react";

const faqs = [
  {
    q: "How much can a first-year rep expect to make?",
    a: "Most rookies earn $15k–$40k their first summer if they follow the system and stay consistent.",
  },
  {
    q: "Do I need prior sales experience?",
    a: "Not at all. We train you from scratch with scripts, daily practice, and ride-alongs.",
  },
  {
    q: "Where do we sell?",
    a: "Primarily in the Philadelphia area. Permits, housing, and routes are arranged for you.",
  },
  {
    q: "Does this count as an internship?",
    a: "Yes. Many universities accept this experience for internship or experiential credit. We’ll provide documentation if your school requires it.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 md:px-20 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-10 text-center">FAQ</h2>
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <span className="font-medium">{faq.q}</span>
                  <span className="text-gray-400">{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && <p className="mt-2 text-gray-600">{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
