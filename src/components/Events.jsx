import { FiCalendar, FiMapPin, FiUsers, FiClock, FiArrowRight } from 'react-icons/fi'
import Reveal from './Reveal'
import { motion } from 'framer-motion'

const EVENTS = [
  { cat:'Summit',     catColor:'#C8102E', month:'JUL', day:'18', year:'2025',
    title:'Global Business Summit 2025',
    location:'Marina Bay Sands, Singapore',
    time:'09:00 AM – 06:00 PM',
    attendees:'1,200+',
    badge:'48 seats left', urgent:true,
    desc:'The premier gathering of Asia-Pacific business leaders. Keynotes, workshops, and exclusive networking sessions.' },
  { cat:'Masterclass', catColor:'#B8960C', month:'AUG', day:'05', year:'2025',
    title:'AI in Business Strategy',
    location:'The Ritz Carlton, Dubai',
    time:'10:00 AM – 04:00 PM',
    attendees:'150',
    badge:'Waitlist open', urgent:false,
    desc:'An intimate deep-dive with leading AI strategists on transforming enterprise operations for the intelligence age.' },
  { cat:'Gala',       catColor:'#C8102E', month:'SEP', day:'22', year:'2025',
    title:'Annual Awards Gala 2025',
    location:'Hôtel de Paris, Monaco',
    time:'07:00 PM – Midnight',
    attendees:'400',
    badge:'Register now', urgent:false,
    desc:'Celebrating outstanding achievements in business excellence among Nexus Elite members across the globe.' },
  { cat:'Workshop',   catColor:'#B8960C', month:'OCT', day:'10', year:'2025',
    title:'Venture Capital Bootcamp',
    location:'One Canada Square, London',
    time:'09:00 AM – 05:00 PM',
    attendees:'80',
    badge:'20 seats left', urgent:true,
    desc:'Intensive programme on fundraising strategy, investor relations, and pitch perfection for growth-stage founders.' },
]

export default function Events() {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <Reveal>
            <span className="eyebrow block mb-4">What's On</span>
            <h2 className="section-title">Upcoming <span className="text-red-DEFAULT">Events</span></h2>
            <span className="rule block mt-4" />
          </Reveal>
          <Reveal>
            <button className="flex items-center gap-2 font-inter font-semibold text-sm text-slate hover:text-red-DEFAULT transition-colors group">
              View All Events <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {EVENTS.map((ev, i) => (
            <Reveal key={ev.title} delay={i * .09}>
              <div className="card overflow-hidden group h-full flex flex-col">
                {/* Top accent bar */}
                <div className="h-1 w-full" style={{ background: ev.catColor }} />

                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5 gap-4">
                    {/* Date block */}
                    <div className="card-flat rounded-xl px-4 py-3 text-center min-w-[68px]" style={{ background: '#F8F9FB' }}>
                      <p className="font-inter font-bold text-[10px] tracking-[.14em] uppercase" style={{ color: ev.catColor }}>{ev.month}</p>
                      <p className="font-poppins font-black text-ink text-3xl leading-none py-1">{ev.day}</p>
                      <p className="font-inter text-muted text-[11px]">{ev.year}</p>
                    </div>

                    <div className="flex-1">
                      <span className="inline-block font-inter font-semibold text-[11px] tracking-[.12em] uppercase px-3 py-1 rounded-md mb-2"
                        style={{ background: `${ev.catColor}12`, color: ev.catColor }}>
                        {ev.cat}
                      </span>
                      <h3 className="font-poppins font-bold text-ink text-lg leading-tight group-hover:text-red-DEFAULT transition-colors">
                        {ev.title}
                      </h3>
                    </div>

                    {ev.urgent && (
                      <span className="shrink-0 font-inter font-semibold text-[11px] text-red-DEFAULT border border-red-DEFAULT/30 px-2.5 py-1 rounded-full">
                        {ev.badge}
                      </span>
                    )}
                  </div>

                  <p className="font-inter text-muted text-sm leading-relaxed mb-5">{ev.desc}</p>

                  <div className="flex flex-wrap gap-4 text-sm font-inter text-muted mb-6">
                    <span className="flex items-center gap-1.5"><FiMapPin size={13} style={{ color:'#C8102E' }} />{ev.location}</span>
                    <span className="flex items-center gap-1.5"><FiClock size={13} style={{ color:'#B8960C' }} />{ev.time}</span>
                    <span className="flex items-center gap-1.5"><FiUsers size={13} style={{ color:'#C8102E' }} />{ev.attendees} attendees</span>
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-primary flex-1 justify-center"
                    >
                      Register Now
                    </motion.button>
                    {!ev.urgent && (
                      <span className="font-inter text-muted text-xs border border-line px-3 py-2.5 rounded-lg">
                        {ev.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
