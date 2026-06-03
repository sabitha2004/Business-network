import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Stats       from './components/Stats'
import Services    from './components/Services'
import WhyUs       from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Events      from './components/Events'
import Membership  from './components/Membership'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <WhyUs />
      <Testimonials />
      <Events />
      <Membership />
      <Contact />
      <Footer />
    </div>
  )
}
