import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp
    const message = `Olá! Gostaria de agendar um horário.%0A%0A*Nome:* ${formData.name}%0A*Telefone:* ${formData.phone}%0A*Serviço:* ${formData.service}%0A*Data:* ${formData.date}%0A*Horário:* ${formData.time}%0A*Observações:* ${formData.notes}`;

    // Replace with actual WhatsApp number
    const whatsappNumber = "5511999999999";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="booking" className="py-32 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-800 font-semibold tracking-widest uppercase text-xs mb-4">
              Agendamento
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-ink mb-6">
              Reserve seu momento
            </h3>
            <p className="text-lg text-ink/70 mb-12 font-light leading-relaxed">
              Preencha o formulário ao lado para solicitar seu agendamento.
              Entraremos em contato via WhatsApp para confirmar o horário.
            </p>

            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-700 shadow-sm border border-brand-100/50 group-hover:scale-110 transition-transform duration-500">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-serif text-ink">
                    Horário de Funcionamento
                  </h4>
                  <p className="mt-2 text-ink/60 font-light text-sm">
                    Terça a Sexta: 09:00 - 19:00
                  </p>
                  <p className="text-ink/60 font-light text-sm">
                    Sábado: 09:00 - 17:00
                  </p>
                  <p className="text-brand-800/60 text-xs mt-2 font-medium uppercase tracking-wider">
                    Domingo e Segunda: Fechado
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-700 shadow-sm border border-brand-100/50 group-hover:scale-110 transition-transform duration-500">
                  <CalendarIcon size={24} strokeWidth={1.5} />
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-serif text-ink">
                    Política de Cancelamento
                  </h4>
                  <p className="mt-2 text-ink/60 font-light text-sm leading-relaxed max-w-xs">
                    Pedimos que cancelamentos sejam feitos com no mínimo 24h de
                    antecedência.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-brand-900/5 border border-brand-50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold tracking-wide uppercase text-ink/70 mb-2"
                  >
                    Nome Completo
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User
                        size={18}
                        className="text-brand-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-11 pr-4 py-3.5 border border-brand-100 rounded-2xl focus:ring-1 focus:ring-brand-400 focus:border-brand-400 bg-surface/50 transition-all duration-300 text-sm font-light"
                      placeholder="Seu nome"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold tracking-wide uppercase text-ink/70 mb-2"
                  >
                    WhatsApp
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone
                        size={18}
                        className="text-brand-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-11 pr-4 py-3.5 border border-brand-100 rounded-2xl focus:ring-1 focus:ring-brand-400 focus:border-brand-400 bg-surface/50 transition-all duration-300 text-sm font-light"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-semibold tracking-wide uppercase text-ink/70 mb-2"
                >
                  Serviço Desejado
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="block w-full px-4 py-3.5 border border-brand-100 rounded-2xl focus:ring-1 focus:ring-brand-400 focus:border-brand-400 bg-surface/50 transition-all duration-300 text-sm font-light appearance-none"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Manicure Tradicional">
                    Manicure Tradicional
                  </option>
                  <option value="Pedicure">Pedicure</option>
                  <option value="Alongamento em Gel">Alongamento em Gel</option>
                  <option value="Manutenção de Gel">Manutenção de Gel</option>
                  <option value="Spa dos Pés">Spa dos Pés</option>
                  <option value="Nail Art">Nail Art</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-xs font-semibold tracking-wide uppercase text-ink/70 mb-2"
                  >
                    Data Preferencial
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <CalendarIcon
                        size={18}
                        className="text-brand-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="block w-full pl-11 pr-4 py-3.5 border border-brand-100 rounded-2xl focus:ring-1 focus:ring-brand-400 focus:border-brand-400 bg-surface/50 transition-all duration-300 text-sm font-light"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-xs font-semibold tracking-wide uppercase text-ink/70 mb-2"
                  >
                    Horário Preferencial
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Clock
                        size={18}
                        className="text-brand-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="block w-full pl-11 pr-4 py-3.5 border border-brand-100 rounded-2xl focus:ring-1 focus:ring-brand-400 focus:border-brand-400 bg-surface/50 transition-all duration-300 text-sm font-light appearance-none"
                    >
                      <option value="">Selecione</option>
                      <option value="Manhã (09:00 - 12:00)">
                        Manhã (09:00 - 12:00)
                      </option>
                      <option value="Tarde (13:00 - 17:00)">
                        Tarde (13:00 - 17:00)
                      </option>
                      <option value="Fim de tarde (17:00 - 19:00)">
                        Fim de tarde (17:00 - 19:00)
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-xs font-semibold tracking-wide uppercase text-ink/70 mb-2"
                >
                  Observações (Opcional)
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <MessageSquare
                      size={18}
                      className="text-brand-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    className="block w-full pl-11 pr-4 py-3.5 border border-brand-100 rounded-2xl focus:ring-1 focus:ring-brand-400 focus:border-brand-400 bg-surface/50 transition-all duration-300 text-sm font-light resize-none"
                    placeholder="Alguma preferência ou dúvida?"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 rounded-full shadow-sm text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-brand-800 hover:bg-brand-900 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all duration-300 mt-4"
              >
                Solicitar Agendamento
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
