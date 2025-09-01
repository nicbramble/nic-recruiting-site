import { motion } from "framer-motion";
import { site } from "../content/site";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight"
      >
        {site.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mt-5 text-lg md:text-2xl text-gray-600 max-w-3xl"
      >
        {site.tagline}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-10"
      >
        <a
          href={site.ctaHref}
          className="inline-block rounded-2xl bg-black text-white px-8 py-3 text-lg shadow-soft hover:opacity-90 transition"
        >
          {site.ctaLabel}
        </a>
      </motion.div>
    </section>
  );
}
