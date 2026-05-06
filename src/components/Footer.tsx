import { Link } from 'react-router-dom'
import { Mail, X } from 'lucide-react'
import LogoIcon from './LogoIcon'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-10 border-b border-gray-800">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <LogoIcon size={24} />
              MoVaultX
            </Link>
            <p className="text-sm leading-relaxed">
              The smarter way to save and manage your money — with transparent,
              admin-approved payouts.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a href="mailto:support@movaultvx.app" className="hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://twitter.com/movaultvx" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                <X size={18} />
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs text-center text-gray-600 mt-8">
          &copy; {year} MoVaultX. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
