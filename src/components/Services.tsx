import React from "react";
import { motion } from "motion/react";
import { Sparkles, Droplets, Scissors, Heart } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Manicure Tradicional",
    description:
      "Cutilagem perfeita, hidratação e esmaltação com as melhores marcas do mercado.",
    price: "A partir de R$ 35",
    icon: Scissors,
  },
  {
    id: 2,
    title: "Alongamento em Gel",
    description:
      "Unhas longas, naturais e resistentes. Inclui cutilagem e esmaltação em gel.",
    price: "A partir de R$ 120",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Spa dos Pés",
    description:
      "Esfoliação, hidratação profunda, massagem relaxante e pedicure completa.",
    price: "A partir de R$ 65",
    icon: Droplets,
  },
  {
    id: 4,
    title: "Nail Art Personalizada",
    description:
      "Designs exclusivos, francesinha, encapsuladas, pedrarias e muito mais.",
    price: "Sob consulta",
    icon: Heart,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-800 font-semibold tracking-widest uppercase text-xs mb-4">
            Nossos Serviços
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-ink mb-6">
            Cuidado e Perfeição
          </h3>
          <p className="text-lg text-ink/70 font-light">
            Trabalhamos com produtos de alta qualidade e técnicas atualizadas
            para garantir o melhor resultado e durabilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface rounded-[2rem] p-8 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-500 border border-brand-100/50 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 text-brand-700 shadow-sm group-hover:scale-110 transition-transform duration-500">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-serif text-ink mb-3">
                {service.title}
              </h4>
              <p className="text-ink/60 mb-8 leading-relaxed font-light text-sm">
                {service.description}
              </p>
              <div className="text-brand-800 font-medium text-sm tracking-wide">
                {service.price}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
