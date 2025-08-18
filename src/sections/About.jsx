import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-6"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-slate-300 leading-relaxed"
                >
                    I’m a final-year <span className="gradient-text">Computer Science</span> student
                    (Softwarica College – Coventry University) with a strong interest in full-stack development.
                    I enjoy turning ideas into real products using React, Node.js, and MongoDB — and I’ve also
                    built cross-platform UIs with Flutter.
                    <br /><br />
                    Beyond web and mobile apps, I’m also deeply interested in
                    <span className="gradient-text"> Artificial Intelligence</span> and
                    <span className="gradient-text"> Machine Learning</span>, and I’m excited to explore how these
                    technologies can be applied to solve real-world problems.
                    <br /><br />
                    I’m currently seeking a software developer internship where I can learn fast,
                    contribute to impactful projects, and grow with a collaborative team.
                </motion.p>
            </div>
        </section>
    )
}
