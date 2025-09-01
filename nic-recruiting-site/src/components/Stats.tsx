import { motion } from "framer-motion";
import { site } from "../content/site";

export function Stats() {
  return (
    <section className="py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {site.stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            <h3 className="text-5xl font-bold">{s.value}</h3>
            <p className="text-gray-500 mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
