import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-surface"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl z-10"
          >
            <span className="inline-block py-1.5 px-4 rounded-full border border-brand-300 text-brand-800 text-xs font-semibold tracking-widest uppercase mb-8">
              Espaço de Beleza
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-ink leading-[1.1] mb-6">
              Realce a beleza <br />
              <span className="text-brand-600 italic">das suas mãos</span>
            </h1>
            <p className="text-lg sm:text-xl text-ink/70 mb-10 max-w-lg leading-relaxed font-light">
              Especialistas em alongamentos, nail art e cuidados completos para
              suas unhas. Um momento só seu na Garagem das Unhas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full text-white bg-brand-800 hover:bg-brand-900 active:scale-[0.98] transition-all duration-300 text-[10px] font-bold tracking-[0.2em] uppercase"
              >
                Agendar Agora
                <ChevronRight
                  className="ml-2 -mr-1 h-4 w-4"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center px-8 py-4 border border-brand-300 rounded-full text-brand-900 bg-transparent hover:bg-brand-50 active:scale-[0.98] transition-all duration-300 text-[10px] font-bold tracking-[0.2em] uppercase"
              >
                Ver Serviços
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[50vh] lg:h-[80vh] w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-900/10"
          >
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1200&auto=format&fit=crop"
              alt="Nail salon background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Soft overlay for elegance */}
            <div className="absolute inset-0 bg-brand-900/10 mix-blend-overlay"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
