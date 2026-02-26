import React from "react";
import { Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-surface py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif text-white mb-6">
              Garagem das Unhas
            </h3>
            <p className="text-surface/70 mb-8 max-w-sm leading-relaxed font-light">
              Transformando unhas em obras de arte. Seu espaço dedicado ao
              cuidado, beleza e bem-estar.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/garagemdasunhas81?igsh=Z3VlaTAwZTNidHFx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-surface/20 flex items-center justify-center hover:bg-brand-800 hover:border-brand-800 hover:text-white transition-all duration-300"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-surface/50 mb-8">
              Contato
            </h4>
            <ul className="space-y-6 font-light text-surface/80">
              <li className="flex items-start">
                <MapPin
                  className="mr-4 h-5 w-5 text-brand-400 shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <span className="leading-relaxed">
                  Rua Exemplo, 123 - Bairro
                  <br />
                  Cidade - Estado, 00000-000
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  className="mr-4 h-5 w-5 text-brand-400 shrink-0"
                  strokeWidth={1.5}
                />
                <span>(00) 00000-0000</span>
              </li>
              <li className="flex items-center">
                <Mail
                  className="mr-4 h-5 w-5 text-brand-400 shrink-0"
                  strokeWidth={1.5}
                />
                <span>contato@garagemdasunhas.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-surface/50 mb-8">
              Links Rápidos
            </h4>
            <ul className="space-y-4 font-light text-surface/80">
              <li>
                <a
                  href="#home"
                  className="hover:text-brand-300 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-300 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="hover:text-brand-300 transition-colors"
                >
                  Agendar Horário
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-brand-300 transition-colors"
                >
                  Galeria
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wide text-surface/40 font-light">
          <p>
            &copy; {new Date().getFullYear()} Garagem das Unhas. Todos os
            direitos reservados.
          </p>
          <p className="mt-4 md:mt-0 flex items-center">
            Feito com <Heart size={14} className="mx-1 text-brand-500" /> para
            você
          </p>
        </div>
      </div>
    </footer>
  );
}
