import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiInstagram, FiFacebook, FiYoutube, FiArrowRight, FiMail } from 'react-icons/fi'

const LINKS = {
  Company:   ['About Us','Our Team','Careers','Press Room','Investor Relations'],
  Services:  ['Elite Networking','Business Growth','Knowledge Academy','Global Expansion','Investment Access'],
  Resources: ['Blog & Insights','Case Studies','Whitepapers','Events Calendar','Member Directory'],
  Legal:     ['Privacy Policy','Terms of Service','Cookie Policy','Membership Agreement'],
}

const SOCIALS = [FiLinkedin, FiTwitter, FiInstagram, FiFacebook, FiYoutube]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const sub = e => {
    e.preventDefault()
    if (!email) return
    setDone(true); setEmail('')
    setTimeout(() => setDone(false), 3500)
  }

  return (
    <footer className="bg-ink text-white">
      {/* Top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-red-DEFAULT via-gold-rich to-red-DEFAULT" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Main grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-10">

          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-9 h-9 bg-red-DEFAULT rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="font-poppins font-black text-white text-base z-10">N</span>
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-tl-lg" style={{ background:'#D4AF37' }} />
              </div>
              <div>
                <p className="font-poppins font-black text-[17px] tracking-tight text-white">
                  NEXUS <span className="text-red-DEFAULT">ELITE</span>
                </p>
                <p className="font-inter text-[9px] text-white/40 tracking-[.16em] uppercase mt-0.5">Business Network</p>
              </div>
            </div>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              The world's most exclusive business network, connecting industry leaders across 48 countries with curated, high-value opportunities.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.12, y: -2 }} aria-label="Social link"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ background:'rgba(255,255,255,.08)', color:'rgba(255,255,255,.6)' }}
                  onMouseEnter={e => { e.currentTarget.style.background='#C8102E'; e.currentTarget.style.color='#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,.08)'; e.currentTarget.style.color='rgba(255,255,255,.6)' }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-poppins font-semibold text-white text-sm mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="font-inter text-white/45 hover:text-white text-sm transition-colors duration-200">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor:'rgba(255,255,255,.08)' }}>
          <p className="font-inter text-white/35 text-sm">
            © {new Date().getFullYear()} Nexus Elite Business Network. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy','Terms','Cookies'].map(item => (
              <a key={item} href="#" className="font-inter text-white/35 hover:text-white/70 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
