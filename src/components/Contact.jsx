import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiTwitter, FiInstagram, FiCheckCircle } from 'react-icons/fi'
import Reveal from './Reveal'

const INFO = [
  { icon: <FiMail size={18}/>,    label: 'Email',        val: 'hello@nexuselite.com',          href: 'mailto:hello@nexuselite.com' },
  { icon: <FiPhone size={18}/>,   label: 'Phone',        val: '+65 6123 4567',                  href: 'tel:+6561234567' },
  { icon: <FiMapPin size={18}/>,  label: 'Headquarters', val: 'Marina Bay Financial Centre, Singapore 018982', href: '#' },
]

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', company:'', interest:'', message:'' })
  const [sent, setSent] = useState(false)

  const set = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const submit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name:'', email:'', company:'', interest:'', message:'' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-14 max-w-2xl mx-auto">
          <span className="eyebrow block mb-4">Get In Touch</span>
          <h2 className="section-title mb-4">Start Your <span className="text-red-DEFAULT">Journey</span></h2>
          <span className="rule mx-auto block mb-5" />
          <p className="font-inter text-slate text-[17px] leading-relaxed">
            Our team is ready to guide you to the right membership and answer every question you have.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* LEFT info panel */}
          <Reveal className="lg:col-span-2 flex flex-col gap-5" x={-28} y={0}>
            {/* Info cards */}
            {INFO.map(item => (
              <a key={item.label} href={item.href}
                className="card p-5 flex items-start gap-4 group hover:border-red-DEFAULT/30 transition-colors no-underline">
                <div className="w-11 h-11 bg-red-light text-red-DEFAULT rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-DEFAULT group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="font-inter text-[11px] text-muted uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="font-poppins font-semibold text-ink text-sm">{item.val}</p>
                </div>
              </a>
            ))}

            {/* Social */}
            <div className="card p-5">
              <p className="font-inter text-[11px] text-muted uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-2.5">
                {[FiLinkedin, FiTwitter, FiInstagram].map((Icon, i) => (
                  <motion.a key={i} href="#" whileHover={{ scale: 1.12, y: -2 }}
                    className="w-10 h-10 bg-bg text-muted rounded-xl flex items-center justify-center hover:bg-red-DEFAULT hover:text-white transition-all duration-300">
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-line" style={{ height: 180 }}>
              <iframe
                title="Nexus Elite HQ"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.797!2d103.854!3d1.279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNDQuNCJOIDEwM8KwNTEnMTQuNCJF!5e0!3m2!1sen!2ssg!4v1"
                width="100%" height="100%"
                style={{ border: 0, filter: 'saturate(0.6) contrast(1.05)' }}
                allowFullScreen loading="lazy"
              />
            </div>
          </Reveal>

          {/* RIGHT form */}
          <Reveal className="lg:col-span-3" x={28} y={0}>
            <div className="card p-8 lg:p-10">
              <h3 className="font-poppins font-bold text-ink text-2xl mb-7">Send Us a Message</h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: .92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-14"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle size={30} className="text-green-500" />
                  </div>
                  <h4 className="font-poppins font-bold text-ink text-xl mb-2">Message Sent!</h4>
                  <p className="font-inter text-muted">Our team will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-inter text-[11px] font-semibold text-slate uppercase tracking-widest block mb-2">Full Name *</label>
                      <input name="name" value={form.name} onChange={set} required placeholder="John Smith" className="field" />
                    </div>
                    <div>
                      <label className="font-inter text-[11px] font-semibold text-slate uppercase tracking-widest block mb-2">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={set} required placeholder="john@company.com" className="field" />
                    </div>
                  </div>
                  <div>
                    <label className="font-inter text-[11px] font-semibold text-slate uppercase tracking-widest block mb-2">Company</label>
                    <input name="company" value={form.company} onChange={set} placeholder="Your Company Name" className="field" />
                  </div>
                  <div>
                    <label className="font-inter text-[11px] font-semibold text-slate uppercase tracking-widest block mb-2">I'm Interested In *</label>
                    <select name="interest" value={form.interest} onChange={set} required className="field">
                      <option value="">Select an option</option>
                      <option value="associate">Associate Membership ($299/mo)</option>
                      <option value="executive">Executive Membership ($799/mo)</option>
                      <option value="platinum">Platinum Membership ($1,999/mo)</option>
                      <option value="events">Events & Sponsorship</option>
                      <option value="enterprise">Enterprise Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-inter text-[11px] font-semibold text-slate uppercase tracking-widest block mb-2">Your Message *</label>
                    <textarea name="message" value={form.message} onChange={set} required rows={4}
                      placeholder="Tell us about your business goals and how we can help..."
                      className="field resize-none" />
                  </div>
                  <motion.button type="submit" whileTap={{ scale: .98 }} className="btn-primary w-full justify-center text-[15px]">
                    Send Message <FiSend size={15} />
                  </motion.button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
