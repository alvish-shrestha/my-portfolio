import { motion } from 'framer-motion'
import { SKILLS } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl font-bold mb-8">
          Skills
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((s, i) => (
            <motion.div key={s.name}
              initial={{opacity:0, y:10}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.4, delay: i*0.03}}
              className="card card-hover">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{s.name}</h3>
                <span className="text-sm text-slate-400">{s.level}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div className="h-full bg-indigo-600"
                  initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }} transition={{ duration: .8, delay: .2 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}