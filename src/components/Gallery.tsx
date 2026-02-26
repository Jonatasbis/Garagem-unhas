import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, X, ZoomIn } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    alt: "Nail Art Design 1",
  },
  {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-square",
    alt: "Nail Art Design 2",
  },
  {
    src: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    alt: "Nail Art Design 3",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-square",
    alt: "Nail Art Design 4",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080661-422fc2f6f56e?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    alt: "Nail Art Design 5",
  },
  {
    src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-square",
    alt: "Nail Art Design 6",
  },
  {
    src: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-square",
    alt: "Nail Art Design 7",
  },
  {
    src: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=800&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    alt: "Nail Art Design 8",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-brand-800 font-semibold tracking-widest uppercase text-xs mb-4">
              Inspirações
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-ink mb-4">
              Nosso Trabalho
            </h3>
            <p className="text-lg text-ink/70 font-light">
              Acompanhe as últimas tendências e os resultados incríveis das
              nossas clientes.
            </p>
          </div>
          <a
            href="https://www.instagram.com/garagemdasunhas81?igsh=Z3VlaTAwZTNidHFx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-8 md:mt-0 text-brand-800 hover:text-brand-900 active:scale-[0.98] transition-all duration-300 group text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            <Instagram className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Siga no Instagram
          </a>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="break-inside-avoid relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg shadow-brand-900/5"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                  <ZoomIn size={24} strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-brand-300 transition-colors"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
              <img
                src={selectedImage}
                alt="Selected work"
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
