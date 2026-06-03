import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight, FiPlay, FiShield, FiAward, FiGlobe } from 'react-icons/fi'
import CountUp from './CountUp'

const STATS = [
  { n: 12000, suf: '+', label: 'Global Members' },
  { n: 850,   suf: '+', label: 'Annual Events' },
  { n: 48,    suf: '',  label: 'Countries' },
  { n: 2.4,   suf: 'B+', label: 'Revenue Generated', dec: 1 },
]

const TRUST = [
  { icon: <FiShield size={14}/>, text: 'ISO 27001 Certified' },
  { icon: <FiAward  size={14}/>, text: '16 Years of Excellence' },
  { icon: <FiGlobe  size={14}/>, text: '48 Countries Worldwide' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const floatY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const go = h => document.querySelector(h)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" ref={ref} className="relative bg-white overflow-hidden">

      {/* ── Decorative geometry ── */}
      {/* Large soft red circle top-right */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[620px] h-[620px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(200,16,46,.07) 0%, transparent 68%)' }}
      />
      {/* Gold circle bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-[440px] h-[440px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,.07) 0%, transparent 68%)' }}
      />
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #C8102E 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: .035,
        }}
      />
      {/* Left red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-DEFAULT via-red-DEFAULT/50 to-transparent" />

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0">
        <div className="grid lg:grid-cols-2 gap-14 items-center min-h-[88vh] py-10">

          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              className="mb-6"
            >
              <span className="eyebrow">World's Premier Business Network</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .65, delay: .08 }}
              className="font-poppins font-black text-ink leading-[1.06] mb-6"
              style={{ fontSize: 'clamp(2.8rem,5.2vw,4.4rem)', letterSpacing: '-.025em' }}
            >
              Elevate Your<br />
              <span style={{ color: '#C8102E' }}>Business</span>{' '}
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg,#0D1117 40%,#C8102E)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Network
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: .16 }}
              className="font-inter text-slate text-lg leading-relaxed mb-8 max-w-[500px]"
            >
              Join an exclusive community of 12,000+ industry leaders, entrepreneurs, and C‑suite executives. Build relationships that generate <strong className="font-semibold text-ink">real, measurable business results.</strong>
            </motion.p>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .25 }}
              className="flex flex-wrap gap-5 mb-9"
            >
              {TRUST.map(t => (
                <span key={t.text} className="flex items-center gap-2 font-inter text-xs font-semibold text-slate">
                  <span className="text-red-DEFAULT">{t.icon}</span>
                  {t.text}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .3 }}
              className="flex flex-wrap gap-3"
            >
              <button onClick={() => go('#membership')} className="btn-primary text-[15px]">
                Become a Member <FiArrowRight />
              </button>
              <button onClick={() => go('#about')} className="btn-secondary text-[15px]">
                <FiPlay size={14} /> Watch Story
              </button>
            </motion.div>

            {/* Partner logos strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .45 }}
              className="mt-10 pt-8 border-t border-line"
            >
              <p className="font-inter text-xs text-muted uppercase tracking-widest mb-4">Trusted by leaders from</p>
              <div className="flex flex-wrap gap-6 items-center">
                {['Deloitte', 'McKinsey', 'Goldman Sachs', 'Accenture', 'KPMG'].map(b => (
                  <span key={b} className="font-poppins font-bold text-sm text-line tracking-tight"
                    style={{ color: '#C0C5CE' }}>
                    {b}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — visual stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .75, delay: .15 }}
            className="relative hidden lg:flex justify-center"
          >
            <motion.div style={{ y: floatY }} className="relative w-full max-w-[440px]">

              {/* Rotating backdrop squares */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-8 -right-8 w-64 h-64 rounded-3xl border-2 border-dashed"
                style={{ borderColor: 'rgba(200,16,46,.12)' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-6 -left-6 w-44 h-44 rounded-2xl border-2 border-dashed"
                style={{ borderColor: 'rgba(212,175,55,.18)' }}
              />

              {/* Main card */}
              <div className="relative bg-white rounded-3xl overflow-hidden" style={{ boxShadow: '0 24px 80px rgba(13,17,23,.15)', border: '1px solid #E5E7EB' }}>

                {/* Card header — dark band */}
                <div className="relative h-48 overflow-hidden" style={{ background: 'linear-gradient(135deg,#0D1117 0%,#1f0610 50%,#C8102E 120%)' }}>
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(212,175,55,.25) 0%, transparent 55%)' }} />
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '12px 12px' }} />
                  <div className="absolute bottom-5 left-6 z-10">
                    <p className="font-inter text-white/50 text-[10px] uppercase tracking-[.18em] mb-1">Member ID · NE-2024</p>
                    <p className="font-poppins font-bold text-white text-xl">Elite Business Card</p>
                  </div>
                  <div className="absolute top-5 right-5">
                    <span className="chip-gold text-xs">Platinum</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[['$2.4B+','Network Value'],['12,000+','Members'],['98%','Success']].map(([v,l])=>(
                      <div key={l} className="text-center p-3 rounded-xl" style={{ background: '#F8F9FB' }}>
                        <p className="font-poppins font-black text-red-DEFAULT text-lg leading-tight">{v}</p>
                        <p className="font-inter text-muted text-[10px] mt-0.5">{l}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    {['Global Networking Access','Executive Event Invitations','AI-Powered Business Matching'].map(f=>(
                      <div key={f} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-light flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-red-DEFAULT" />
                        </div>
                        <span className="font-inter text-slate text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating ROI badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{ boxShadow: '0 8px 32px rgba(13,17,23,.14)', border: '1px solid #E5E7EB' }}
              >
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600 font-poppins font-black text-sm">
                  ↑
                </div>
                <div>
                  <p className="font-poppins font-bold text-ink text-sm leading-tight">+$4.2M Avg ROI</p>
                  <p className="font-inter text-muted text-[11px]">per member · first 6 months</p>
                </div>
              </motion.div>

              {/* Floating members badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-6 bg-white rounded-2xl px-4 py-3"
                style={{ boxShadow: '0 8px 32px rgba(13,17,23,.14)', border: '1px solid #E5E7EB' }}
              >
                <div className="flex -space-x-2 mb-1">
                  {['#C8102E','#0D1117','#B8960C','#374151'].map((c,i)=>(
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center font-poppins font-bold text-white text-[10px]"
                      style={{ background: c }}>
                      {['A','M','S','J'][i]}
                    </div>
                  ))}
                </div>
                <p className="font-inter text-muted text-[11px] font-medium">+240 joined this month</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar — full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .45 }}
          className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-line"
          style={{ boxShadow: '0 4px 24px rgba(13,17,23,.07)' }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`bg-white px-8 py-7 text-center ${i < STATS.length - 1 ? 'border-r border-line' : ''} ${i >= 2 ? 'border-t md:border-t-0 border-line' : ''}`}
            >
              <p className="font-poppins font-black text-ink mb-1" style={{ fontSize: 'clamp(1.9rem,3vw,2.6rem)', letterSpacing: '-.02em' }}>
                <CountUp end={s.n} decimals={s.dec ?? 0} suffix={s.suf} />
              </p>
              <p className="font-inter text-muted text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Wave bottom */}
      <svg viewBox="0 0 1440 56" className="w-full block mt-12" style={{ fill: '#F8F9FB' }}>
        <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z"/>
      </svg>
    </section>
  )
}
