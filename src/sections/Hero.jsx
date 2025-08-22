import { motion } from 'framer-motion'
import { LINKS } from '../data'
import { FaArrowDown, FaPaperPlane } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6">
          <p className="text-sm text-slate-400">Kathmandu, Nepal</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="gradient-text">Alvish Shrestha</span><br />
            Aspiring Software Developer
          </h1>
          <p className="text-slate-300">
            Final‑year Software Engineering undergraduate passionate about building modern web & mobile apps with React, Node.js, MongoDB and Flutter.
          </p>
          <div className="flex gap-3 pt-2">
            <a href={`mailto:${LINKS.email}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition shadow-glow">
              <FaPaperPlane /> Contact Me
            </a>
            <Link to="projects" smooth={true} offset={-80} duration={600}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 cursor-pointer">
              <FaArrowDown /> View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}