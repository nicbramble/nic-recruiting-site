import { motion } from "framer-motion";
import { site } from "../content/site";

export function CTA() {
  return (
    <section className="py-24 bg-black text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-semibold mb-6"
      >
        Ready to change your summer?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto"
      >
        Join a culture of performance and growth. Let’s talk about how you can join the team and build your future.
      </motion.p>
      <a
        href={site.ctaHref}
        className="inline-block rounded-2xl bg-white text-black px-8 py-3 text-lg shadow-soft hover:opacity-90 transition"
      >
        {site.ctaLabel}
      </a>
    </section>
  );
}
