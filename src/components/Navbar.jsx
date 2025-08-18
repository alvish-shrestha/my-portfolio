import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { LINKS } from '../data'

export default function Navbar() {
  const items = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'education', label: 'Education' },
    { to: 'contact', label: 'Contact' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-950/60 border-b border-slate-800">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight"><span className="gradient-text">Alvish Shrestha</span></a>
        <div className="hidden md:flex items-center gap-6">
          {items.map(it => (
            <Link key={it.to}
              activeClass="text-white"
              className="text-slate-300 hover:text-white cursor-pointer transition"
              to={it.to} spy={true} smooth={true} offset={-80} duration={600}>
              {it.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href={LINKS.github} target="_blank" className="text-slate-300 hover:text-white"><FaGithub /></a>
          <a href={LINKS.linkedin} target="_blank" className="text-slate-300 hover:text-white"><FaLinkedin /></a>
          <a href="#contact" className="ml-2 md:hidden px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-sm">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}