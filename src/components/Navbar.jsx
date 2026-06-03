import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import LoginModal from "./LoginModal";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Membership", href: "#membership" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (href) => {
    setMenuOpen(false);

    const section = document.querySelector(href);

    if (section) {
      const navbarHeight = 68;

      const offsetTop =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-black text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>
            The World's Premier Business Network — 48 Countries · 12,000+ Members
          </span>

          <div className="flex items-center gap-5">
            <a href="tel:+6561234567" className="flex items-center gap-1">
              <FiPhone size={12} />
              +65 6123 4567
            </a>

            <span>hello@nexuselite.com</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`sticky top-0 z-50 w-full ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6 h-[68px] flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => go("#home")} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
              N
            </div>

            <div>
              <h2 className="font-bold text-lg">
                NEXUS <span className="text-red-600">ELITE</span>
              </h2>
              <p className="text-[10px] tracking-widest uppercase text-gray-500">
                Business Network
              </p>
            </div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <button
                key={item.label}
                onClick={() => go(item.href)}
                className="text-gray-700 hover:text-red-600 transition"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setLoginOpen(true)}
             className="bg-red-600 text-white px-5 py-2 rounded-lg"
            >
              Login
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden border p-2 rounded-lg"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden fixed top-[68px] left-0 w-full bg-white shadow-lg z-40"
          >
            <div className="flex flex-col p-5 gap-4">
              {NAV.map((item) => (
                <button
                  key={item.label}
                  onClick={() => go(item.href)}
                  className="text-left text-gray-700 hover:text-red-600"
                >
                  {item.label}
                </button>
              ))}

             <button
  onClick={() => setLoginOpen(true)}
  className="bg-red-600 text-white px-5 py-2 rounded-lg"
>
  Login
</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LOGIN MODAL (IMPORTANT OUTSIDE EVERYTHING) */}
      <LoginModal open={loginOpen} setOpen={setLoginOpen} />
    </>
  );
}