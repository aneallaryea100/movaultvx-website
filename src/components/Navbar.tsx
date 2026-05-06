import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useAppModal } from './ComingSoonModal'
import LogoIcon from './LogoIcon'

const links = [
  { to: '/', label: 'Home' },
  { to: '/features', label: 'Features' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { openModal } = useAppModal()

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-indigo-700">
          <LogoIcon size={28} />
          MoVaultX
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                pathname === l.to
                  ? 'text-indigo-700'
                  : 'text-gray-600 hover:text-indigo-700'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={openModal}
            className="ml-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get the App
          </button>
        </div>

        <button
          className="md:hidden p-2 text-gray-600 hover:text-indigo-700"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium py-1 ${
                pathname === l.to ? 'text-indigo-700' : 'text-gray-700'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => { openModal(); setOpen(false) }}
            className="mt-1 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold text-center"
          >
            Get the App
          </button>
        </div>
      )}
    </nav>
  )
}
