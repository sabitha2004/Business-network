import { FiUsers, FiCalendar, FiTrendingUp, FiDollarSign } from 'react-icons/fi'
import Reveal from './Reveal'
import CountUp from './CountUp'

const STATS = [
  { icon: <FiUsers size={28}/>,      n: 12000, suf: '+',  label: 'Active Members',     sub: 'Across 48 countries',       color: '#C8102E' },
  { icon: <FiCalendar size={28}/>,   n: 850,   suf: '+',  label: 'Events Annually',    sub: 'Global & regional',          color: '#B8960C' },
  { icon: <FiTrendingUp size={28}/>, n: 48000, suf: '+',  label: 'Business Referrals', sub: 'Generated last year',        color: '#C8102E' },
  { icon: <FiDollarSign size={28}/>, n: 2.4,   suf: 'B+', label: 'Revenue Generated',  sub: 'By members since 2008', dec: 1, color: '#B8960C' },
]

export default function Stats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Red top accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-DEFAULT via-gold-rich to-red-DEFAULT" />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <span className="eyebrow block mb-4">By the Numbers</span>
          <h2 className="section-title mb-4">Impact That <span className="text-red-DEFAULT">Speaks</span></h2>
          <span className="rule mx-auto block" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * .1}>
              <div className="card p-8 text-center group cursor-default">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${s.color}12`, color: s.color }}
                >
                  {s.icon}
                </div>
                {/* Number */}
                <p
                  className="font-poppins font-black mb-1"
                  style={{ fontSize: 'clamp(2rem,3.5vw,2.8rem)', letterSpacing: '-.02em', color: s.color }}
                >
                  <CountUp end={s.n} decimals={s.dec ?? 0} suffix={s.suf} />
                </p>
                <p className="font-poppins font-semibold text-ink text-base mb-1">{s.label}</p>
                <p className="font-inter text-muted text-sm">{s.sub}</p>

                {/* Bottom accent */}
                <div className="mt-5 h-0.5 w-12 mx-auto rounded-full transition-all duration-300 group-hover:w-24"
                  style={{ background: `linear-gradient(90deg,${s.color},transparent)` }} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ticker / partners */}
        <Reveal className="mt-16 pt-12 border-t border-line">
          <p className="font-inter text-xs text-muted uppercase tracking-widest text-center mb-6">Our members represent leaders from the world's most respected organisations</p>
          <div className="overflow-hidden">
            <div className="flex animate-ticker whitespace-nowrap">
              {[...Array(2)].map((_, k) => (
                <div key={k} className="flex shrink-0">
                  {['Deloitte','McKinsey & Company','Goldman Sachs','Accenture','KPMG','PwC','Boston Consulting Group','Morgan Stanley','JP Morgan Chase','Bain & Company','Ernst & Young','BlackRock'].map(b => (
                    <span key={b} className="font-poppins font-bold text-sm mx-8" style={{ color: '#C5CAD3' }}>
                      {b}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
