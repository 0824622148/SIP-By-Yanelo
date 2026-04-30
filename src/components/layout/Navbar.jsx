import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useScrolled } from '../../hooks/useScrolled'
import sipLogo from '../../assets/sip-logo-nobg.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/plans', label: 'Plans' },
  { to: '/impact', label: 'Our Impact' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const scrolled = useScrolled(60)
  const [open, setOpen] = useState(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link to="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
            <img src={sipLogo} alt="SIP by Yanelo" className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-blue'
                      : scrolled
                        ? 'text-brand-navy hover:text-brand-blue'
                        : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
              Order Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${scrolled || open ? 'bg-brand-navy' : 'bg-white'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${scrolled || open ? 'bg-brand-navy' : 'bg-white'} ${open ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 transition-all duration-300 ${scrolled || open ? 'bg-brand-navy' : 'bg-white'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive ? 'bg-brand-blue-pale text-brand-blue' : 'text-brand-navy hover:bg-slate-50'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 text-center">
            Order Now
          </Link>
        </div>
      </div>
    </header>
  )
}
