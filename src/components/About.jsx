import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiTarget, FiEye, FiAward, FiGlobe, FiUsers, FiTrendingUp } from 'react-icons/fi'
import Reveal from './Reveal'

const TIMELINE = [
  { year: '2008', title: 'Foundation', desc: 'Founded in Singapore by visionary entrepreneurs to redefine what professional networking means at the global level.' },
  { year: '2012', title: 'Global Expansion', desc: 'Expanded to 15 countries across Asia-Pacific, Europe, and North America with a curated, quality-first approach.' },
  { year: '2017', title: 'Digital Platform', desc: 'Launched a proprietary AI-powered business matching platform — the first of its kind in professional networking.' },
  { year: '2021', title: 'Fortune 500 Alliances', desc: 'Established strategic partnerships with 200+ Fortune 500 companies, opening unprecedented doors for members.' },
  { year: '2024', title: 'New Milestone', desc: 'Surpassed $2.4B in member-generated revenue, with 12,000+ members spanning 48 countries worldwide.' },
]

export default function About() {
  const tlRef = useRef(null)
  const tlInView = useInView(tlRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          <Reveal>
            <span className="eyebrow block mb-5">Our Story</span>
            <h2 className="section-title mb-5">
              Built on Trust.<br />
              <span className="text-red-DEFAULT">Driven by Excellence.</span>
            </h2>
            <span className="rule block mb-6" />
            <p className="font-inter text-slate text-[17px] leading-relaxed">
              For over 16 years, Nexus Elite has been the catalyst for business transformation — connecting the world's most ambitious professionals with high-value opportunities that generate measurable results.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FiAward size={20}/>,     label: 'Years of Excellence', val: '16+',    color: 'red' },
                { icon: <FiGlobe size={20}/>,     label: 'Global Countries',    val: '48',     color: 'gold' },
                { icon: <FiUsers size={20}/>,     label: 'Active Members',      val: '12,000+',color: 'red' },
                { icon: <FiTrendingUp size={20}/>,label: 'Member Success Rate', val: '98%',    color: 'gold' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: .92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .08 + .1 }}
                  className="card p-5 text-center"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                    item.color === 'red' ? 'bg-red-light text-red-DEFAULT' : 'text-gold-DEFAULT'
                  }`} style={item.color === 'gold' ? { background: 'rgba(184,150,12,.1)' } : {}}>
                    {item.icon}
                  </div>
                  <p className="font-poppins font-black text-red-DEFAULT text-2xl leading-tight">{item.val}</p>
                  <p className="font-inter text-muted text-xs mt-1">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {[
            { icon: <FiTarget size={22}/>, title: 'Our Mission', color: 'red',
              desc: 'To empower business leaders worldwide with curated connections, exclusive insights, and transformative opportunities that accelerate sustainable growth and drive measurable success for every member.' },
            { icon: <FiEye size={22}/>,    title: 'Our Vision',  color: 'gold',
              desc: 'To become the most influential global business community — where every connection creates lasting value, every interaction sparks innovation, and every member becomes a force for positive economic transformation.' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * .1}>
              <div className="card p-8 h-full flex flex-col gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  item.color === 'red' ? 'bg-red-light text-red-DEFAULT' : 'text-gold-DEFAULT'
                }`} style={item.color === 'gold' ? { background: 'rgba(184,150,12,.1)' } : {}}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-xl text-ink mb-3">{item.title}</h3>
                  <p className="font-inter text-slate leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <Reveal className="text-center mb-12">
          <span className="eyebrow mb-3 inline-block">Our Journey</span>
          <h2 className="section-title">16 Years of <span className="text-red-DEFAULT">Milestones</span></h2>
        </Reveal>

        <div ref={tlRef} className="relative max-w-4xl mx-auto">
          {/* Centre line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-line" />

          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -36 : 36 }}
              animate={tlInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: .6, delay: i * .11, ease: [.22,1,.36,1] }}
              className={`flex items-center gap-8 mb-9 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`card p-6 inline-block text-left max-w-sm ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  <span className="font-poppins font-black text-red-DEFAULT text-2xl block mb-1">{item.year}</span>
                  <h4 className="font-poppins font-bold text-ink mb-2">{item.title}</h4>
                  <p className="font-inter text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
              {/* Dot */}
              <div className="hidden md:flex w-4 h-4 rounded-full bg-red-DEFAULT border-4 border-white shrink-0 z-10"
                style={{ boxShadow: '0 0 0 4px rgba(200,16,46,.15)' }} />
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
