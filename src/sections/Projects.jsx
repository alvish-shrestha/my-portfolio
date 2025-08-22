import { motion } from 'framer-motion'
import { PROJECTS } from '../data'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-8"
                >
                    Projects
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {PROJECTS.map((p, i) => (
                        <motion.article
                            key={p.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="card card-hover"
                        >
                            <h3 className="text-xl font-semibold">{p.title}</h3>
                            <p className="mt-2 text-slate-300">{p.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-2 py-1 rounded-full border border-slate-700 text-slate-300"
                                    >
                                        {t}
                                    </span>))}
                            </div>
                            <div className="mt-4">
                                <a
                                    href={p.github}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700"
                                >
                                    <FaGithub /> View Code
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}
