import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }} className="text-3xl font-bold mb-8">
          Education
        </motion.h2>
        <div className="card">
          <h3 className="text-xl font-semibold">BSc. (Hons) Computing - Coventry University (UK)</h3>
          <p className="text-slate-300 mt-1">Softwarica College of IT & E-Commerce, Kathmandu - <em>Expected 2026</em></p>
          <ul className="mt-3 list-disc list-inside text-slate-300">
            <li>Introduction to Python Programming for Data Science - Dataquest</li>
            <li>Student Member - Institute of Analytics (Dec 2024 – Mar 2026)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}