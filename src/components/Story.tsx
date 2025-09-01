import { motion } from "framer-motion";
import { site } from "../content/site";

export function Story() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          My Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-lg leading-relaxed text-gray-700 max-w-3xl"
        >
          {site.story}
        </motion.p>

        <ul className="grid md:grid-cols-3 gap-6 mt-12">
          {site.highlights.map((h, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-soft text-gray-800"
            >
              {h}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
