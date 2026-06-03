import { FiUsers, FiTrendingUp, FiBookOpen, FiGlobe, FiShield, FiZap, FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'
import { motion } from 'framer-motion'

const SERVICES = [
  { icon: <FiUsers size={24}/>,      color: '#C8102E', title: 'Elite Networking',       tags: ['AI Matching','1-on-1 Sessions','C-Suite Access'],
    desc: 'Curated introductions to verified executives, investors, and industry leaders powered by our proprietary AI matching algorithm.' },
  { icon: <FiTrendingUp size={24}/>, color: '#B8960C', title: 'Business Growth',         tags: ['Revenue Strategy','Market Expansion','Advisory Board'],
    desc: 'Strategic advisory sessions, market-entry consulting, and revenue optimisation frameworks crafted by Fortune 500 veterans.' },
  { icon: <FiBookOpen size={24}/>,   color: '#C8102E', title: 'Knowledge Academy',        tags: ['Masterclasses','Certifications','Expert Workshops'],
    desc: 'Exclusive masterclasses, certification programmes, and workshops led by globally renowned business leaders and experts.' },
  { icon: <FiGlobe size={24}/>,      color: '#B8960C', title: 'Global Expansion',         tags: ['48 Countries','Local Partners','Market Entry'],
    desc: 'Access our worldwide network of vetted partners, distributors, and advisors to expand internationally with confidence.' },
  { icon: <FiShield size={24}/>,     color: '#C8102E', title: 'Investment Access',        tags: ['Angel Investors','VC Network','Due Diligence'],
    desc: 'Connect with actively investing angel investors, VC firms, and PE groups seeking high-growth opportunities.' },
  { icon: <FiZap size={24}/>,        color: '#B8960C', title: 'Digital Acceleration',     tags: ['Tech Partners','Innovation Lab','Digital Tools'],
    desc: 'Leverage cutting-edge digital transformation resources, innovation labs, and tech partnerships to future-proof your business.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <span className="eyebrow block mb-4">What We Offer</span>
          <h2 className="section-title mb-4">Premium <span className="text-red-DEFAULT">Services</span></h2>
          <span className="rule mx-auto block mb-5" />
          <p className="font-inter text-slate text-[17px] leading-relaxed">
            Comprehensive solutions designed to accelerate growth, expand your network, and amplify your impact in the global marketplace.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.title} delay={i * .08}>
              <div className="card p-7 h-full flex flex-col group">
                {/* Icon */}
                <div
                  className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${svc.color}10`, color: svc.color }}
                >
                  {svc.icon}
                </div>
                <h3 className="font-poppins font-bold text-ink text-[17px] mb-3">{svc.title}</h3>
                <p className="font-inter text-slate text-sm leading-relaxed mb-5 flex-1">{svc.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {svc.tags.map(t => (
                    <span key={t} className={svc.color === '#C8102E' ? 'chip' : 'chip-gold'} style={{ fontSize: '11px' }}>{t}</span>
                  ))}
                </div>

                <button className="flex items-center gap-1.5 font-inter font-semibold text-sm transition-all duration-200 group-hover:gap-3"
                  style={{ color: svc.color }}>
                  Learn More <FiArrowRight size={14} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
