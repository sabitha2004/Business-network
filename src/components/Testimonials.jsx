import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { FiStar } from 'react-icons/fi'
import Reveal from './Reveal'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const T = [
  { name:'Alexandra Chen',    role:'CEO, TechVentures Asia',        init:'AC', bg:'#C8102E', stars:5,
    quote:'Nexus Elite fundamentally changed the trajectory of my business. Within 3 months I secured two major partnerships worth $4.2M and expanded into three new markets. The quality of connections is unmatched globally.',
    rev:'+$4.2M', period:'3 months' },
  { name:'Marcus Davidson',   role:'Founder, Elevate Capital',       init:'MD', bg:'#0D1117', stars:5,
    quote:'As a private equity professional I\'ve seen countless networking organisations. Nexus Elite operates at a completely different level — the caliber of members, the exclusivity of events, and the ROI transparency make this irreplaceable.',
    rev:'+$12M', period:'8 months' },
  { name:'Sarah Al-Rashid',   role:'Managing Director, Gulf Investments', init:'SR', bg:'#B8960C', stars:5,
    quote:'The concierge team arranged an introduction that led to our largest institutional partnership in 15 years. Access to genuine decision-makers — not gatekeepers — is what separates this network from everything else.',
    rev:'+$8.5M', period:'5 months' },
  { name:'James Okafor',      role:'Chairman, Okafor Industries',    init:'JO', bg:'#374151', stars:5,
    quote:'My team attended three masterclasses that directly informed our digital transformation strategy, saving approximately $1.5M in consulting fees alone. The community is a true competitive advantage.',
    rev:'+$2.1M', period:'6 months' },
  { name:'Priya Sharma',      role:'Co-Founder, BioInnovate Labs',   init:'PS', bg:'#C8102E', stars:5,
    quote:'Finding investors for deep-tech is notoriously difficult. Nexus Elite connected me with five qualified investors in my first month — two became lead investors in our Series A round.',
    rev:'+$6.8M', period:'4 months' },
  { name:'Robert Lindqvist',  role:'VP Strategy, Nordic Enterprises', init:'RL', bg:'#0D1117', stars:5,
    quote:'The global perspective at Nexus Elite events is unlike anything else. I\'ve met partners from 22 countries who helped us expand across Asia-Pacific. The network truly is the product — and it\'s world-class.',
    rev:'+$3.4M', period:'7 months' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <span className="eyebrow block mb-4">Member Stories</span>
          <h2 className="section-title mb-4">Success Stories That <span className="text-red-DEFAULT">Inspire</span></h2>
          <span className="rule mx-auto block mb-5" />
          <p className="font-inter text-slate text-[17px] leading-relaxed">
            Real results from real members. Discover how Nexus Elite has transformed businesses across the globe.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            loop
            className="pb-14"
          >
            {T.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="card p-7 h-full flex flex-col" style={{ minHeight: 360 }}>
                  {/* Quote mark */}
                  <div className="text-7xl font-poppins font-black leading-none mb-2" style={{ color: 'rgba(200,16,46,.1)', lineHeight: 1 }}>"</div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_,j)=>(
                      <FiStar key={j} size={14} style={{ fill:'#D4AF37', color:'#D4AF37' }} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-inter text-slate text-[14px] leading-relaxed flex-1 mb-4">{t.quote}</p>

                  {/* Revenue */}
                  <div className="inline-flex items-center gap-2 rounded-lg px-3 py-2 mb-5" style={{ background: 'rgba(200,16,46,.06)' }}>
                    <span className="font-poppins font-black text-red-DEFAULT text-sm">{t.rev}</span>
                    <span className="font-inter text-muted text-xs">in {t.period}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-line">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-poppins font-bold text-white text-sm shrink-0"
                      style={{ background: t.bg }}>
                      {t.init}
                    </div>
                    <div>
                      <p className="font-poppins font-semibold text-ink text-sm leading-tight">{t.name}</p>
                      <p className="font-inter text-muted text-xs mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  )
}
