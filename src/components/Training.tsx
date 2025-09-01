import { site } from "../content/site";

export function Training() {
  return (
    <section id="training" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">Training & Mentorship</h2>
        <p className="text-gray-700">
          I’ve trained {site.stats[1].value} reps with a simple playbook: learn the pitch, 
          practice objections, get real feedback, and repeat. It’s hands-on and it works.
        </p>
        <ul className="grid md:grid-cols-3 gap-4 mt-8">
          {site.trainingBullets.map((b, i) => (
            <li key={i} className="bg-white rounded-2xl p-4 shadow-soft">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
