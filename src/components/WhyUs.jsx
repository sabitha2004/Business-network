import { FiStar, FiLock, FiCpu, FiHeadphones, FiAward, FiBarChart2, FiHeart, FiCheckCircle } from 'react-icons/fi'
import Reveal from './Reveal'
import { motion } from 'framer-motion'

const FEATURES = [
  { icon: <FiStar size={20}/>,        title: 'Curated Membership',     desc: 'Every applicant is rigorously vetted to ensure the highest quality network of verified executives.' },
  { icon: <FiLock size={20}/>,        title: 'Confidential & Secure',  desc: 'Bank-level encryption keeps your business information, contacts, and conversations completely private.' },
  { icon: <FiCpu size={20}/>,         title: 'AI-Powered Matching',    desc: 'Proprietary algorithm identifies your most valuable connections based on goals and industry fit.' },
  { icon: <FiHeadphones size={20}/>,  title: '24/7 Concierge',         desc: 'Dedicated relationship managers available around the clock to facilitate introductions.' },
  { icon: <FiAward size={20}/>,       title: 'Proven Results',         desc: '98% of active members report significant business growth within the first 6 months.' },
  { icon: <FiBarChart2 size={20}/>,   title: 'ROI Dashboard',          desc: 'Our exclusive ROI tracker shows the exact revenue value generated through your network activity.' },
  { icon: <FiHeart size={20}/>,       title: 'Givers Gain Culture',    desc: 'A giving-first philosophy builds authentic relationships and long-term collaborative partnerships.' },
  { icon: <FiCheckCircle size={20}/>, title: 'Global Credibility',     desc: 'Nexus Elite membership is recognised and respected by business leaders in 48 countries.' },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Soft bg circles */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(200,16,46,.05) 0%,transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle,rgba(184,150,12,.05) 0%,transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <span className="eyebrow block mb-4">Our Difference</span>
          <h2 className="section-title mb-4">Why Leaders Choose <span className="text-red-DEFAULT">Nexus Elite</span></h2>
          <span className="rule mx-auto block mb-5" />
          <p className="font-inter text-slate text-[17px] leading-relaxed">
            We don't just connect people — we engineer transformative business relationships that create lasting, measurable impact.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * .07}>
              <div className="card p-6 h-full group cursor-default">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-11 h-11 rounded-xl bg-red-light text-red-DEFAULT flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-red-DEFAULT group-hover:text-white"
                >
                  {f.icon}
                </motion.div>
                <h3 className="font-poppins font-semibold text-ink text-[15px] mb-2">{f.title}</h3>
                <p className="font-inter text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA banner */}
        <Reveal>
          <div className="rounded-3xl overflow-hidden relative" style={{ background: 'linear-gradient(135deg,#0D1117 0%,#1c0409 55%,#2d0711 100%)' }}>
            {/* Pattern */}
            <div className="absolute inset-0 opacity-[.06]"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '20px 20px' }} />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(212,175,55,.18) 0%,transparent 65%)' }} />

            <div className="relative z-10 px-10 py-14 md:flex items-center justify-between gap-10">
              <div>
                <p className="font-inter text-white/50 text-xs uppercase tracking-[.18em] mb-3">Ready to Transform?</p>
                <h3 className="font-poppins font-bold text-white text-3xl md:text-4xl mb-3 leading-tight">
                  Elevate Your Business Today
                </h3>
                <p className="font-inter text-white/60 text-[15px] max-w-md leading-relaxed">
                  Join 12,000+ elite professionals who have transformed their businesses through the power of strategic networking.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8 md:mt-0 shrink-0">
                <button className="btn-primary" onClick={() => document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' })}>
                  Apply for Membership
                </button>
                <button className="btn-gold" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
