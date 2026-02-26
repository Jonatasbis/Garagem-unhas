import React, { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Agendar", href: "#booking" },
    { name: "Galeria", href: "#gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-xl shadow-sm py-4 border-b border-brand-100/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="font-serif text-2xl font-medium tracking-wide text-ink"
          >
            Garagem das Unhas
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold tracking-widest uppercase text-ink/70 hover:text-brand-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-brand-200"></div>
            <a
              href="https://www.instagram.com/garagemdasunhas81?igsh=Z3VlaTAwZTNidHFx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/70 hover:text-brand-800 transition-colors"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="#booking"
              className="bg-brand-800 text-white px-6 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-brand-900 active:scale-[0.98] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ink hover:text-brand-800 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <X size={24} strokeWidth={1.5} />
              ) : (
                <Menu size={24} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-brand-100/50 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium tracking-wide text-ink/80 hover:text-brand-800 hover:bg-brand-50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 px-4 flex items-center justify-between border-t border-brand-100/50 mt-4">
                <a
                  href="https://www.instagram.com/garagemdasunhas81?igsh=Z3VlaTAwZTNidHFx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/70 hover:text-brand-800 flex items-center text-sm font-medium"
                >
                  <Instagram size={20} strokeWidth={1.5} className="mr-2" />
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
