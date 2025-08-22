import { motion } from 'framer-motion'
import { LINKS } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="text-3xl font-bold mb-8">
          Contact
        </motion.h2>
        <div className="card">
          <p className="text-slate-300">Interested in working together or have an internship opportunity?</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={`mailto:${LINKS.email}`} className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 shadow-glow">Email Me</a>
            <a href={LINKS.linkedin} target="_blank" className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}