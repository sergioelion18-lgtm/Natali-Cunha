/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  CheckCircle2, 
  MessageCircle, 
  Calendar, 
  ArrowRight, 
  X,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Heart
} from 'lucide-react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=5584998672718";

const resultsImages = [
  "https://i.imgur.com/MsFg1bR.png",
  "https://i.imgur.com/10oeMem.png",
  "https://i.imgur.com/JCHBCD3.png",
  "https://i.imgur.com/FEXzWM3.png",
  "https://i.imgur.com/7Iii2HP.png",
  "https://i.imgur.com/WknjCeq.png",
  "https://i.imgur.com/eLNpCmo.png",
  "https://i.imgur.com/lQxq6kz.png",
  "https://i.imgur.com/DrK6MDx.png",
  "https://i.imgur.com/eOkPf1p.png",
  "https://i.imgur.com/fSrp72n.png",
  "https://i.imgur.com/Y0NGAVP.png",
  "https://i.imgur.com/x9NWA54.png"
];

const galleryImages = [
  "https://i.imgur.com/X4cwVxw.png",
  "https://i.imgur.com/3FzFBOw.png",
  "https://i.imgur.com/pbfx1B4.png"
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-warm-bg selection:bg-warm-gold-light selection:text-warm-ink overflow-x-hidden">
      {/* HEADER */}
      <header className="px-6 md:px-16 py-10 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-warm-ink/5 gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl uppercase tracking-wider font-serif">Natali Cunha</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-60">Biomedicina Estética • CRBM 16359</p>
        </div>
        <div className="text-xs uppercase tracking-widest opacity-80">
          Natal, Rio Grande do Norte
        </div>
      </header>

      {/* HERO / MAIN SPLIT */}
      <main className="grid lg:grid-cols-[1fr_1.2fr] min-h-[calc(100vh-140px)]">
        {/* Left: Visual Column */}
        <section className="p-8 md:p-16 flex flex-col justify-center relative bg-warm-bg">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-neutral-200 rounded-t-[200px] overflow-hidden shadow-2xl relative group">
              <img 
                src="https://i.imgur.com/pbfx1B4.png" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Natali Cunha"
              />
              <div className="absolute inset-0 bg-warm-gold/10 mix-blend-multiply opacity-30" />
              <div className="absolute bottom-6 left-0 w-full text-center">
                <span className="font-serif italic text-white/70 text-sm">Retrato Natali Cunha</span>
              </div>
            </div>
            
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-6 -right-6 w-24 h-24 border border-warm-gold rounded-full flex items-center justify-center text-[9px] text-center uppercase tracking-tighter p-4 text-warm-gold bg-warm-bg/80 backdrop-blur-sm z-20"
            >
              Estética Consciente
            </motion.div>
          </motion.div>
        </section>

        {/* Right: Content Column */}
        <section className="p-8 md:p-16 lg:pl-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="font-serif italic text-xl text-warm-gold mb-4">Realce sua essência</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 font-serif font-normal">
              Resultados que respeitam a sua história.
            </h2>
            
            <p className="text-lg text-warm-ink/70 leading-relaxed mb-12 font-light">
              Especialista em procedimentos faciais e corporais com foco em naturalidade. 
              Minha abordagem é baseada na segurança e no planejamento individualizado.
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-12">
              {[
                { title: "Naturalidade", desc: "Sem exageros ou perdas de expressão." },
                { title: "Segurança", desc: "Protocolos biomédicos rigorosos." },
                { title: "Individualidade", desc: "Cada rosto é um projeto único." },
                { title: "Transparência", desc: "Acompanhamento honesto e direto." }
              ].map((benefit, i) => (
                <div key={i} className="border-l border-warm-gold-light pl-4 space-y-1">
                  <h4 className="text-[11px] uppercase tracking-widest font-bold">{benefit.title}</h4>
                  <p className="text-xs text-warm-ink/50 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <a 
                href={WHATSAPP_LINK} 
                className="bg-warm-ink text-white px-10 py-5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-warm-ink/90 transition-all shadow-lg shadow-warm-ink/10"
              >
                Agendar Consulta Gratuita
              </a>
              <a 
                href={WHATSAPP_LINK} 
                className="text-warm-ink border-b border-warm-ink pb-1 text-xs font-bold uppercase tracking-widest hover:opacity-70 transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ABOUT SECTION - REFINED */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-warm-ink/5">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 space-y-10"
          >
            <div className="space-y-4">
              <p className="text-warm-gold font-serif italic text-lg">Sobre a Dra.</p>
              <h2 className="text-4xl md:text-5xl font-serif">Prazer, sou a Natali</h2>
            </div>
            
            <p className="text-xl text-warm-ink/60 leading-relaxed font-light">
              Eu não acredito em exageros. Meu foco é valorizar o que você já tem de bonito, com leveza, precisão e respeito ao seu rosto.
            </p>
            
            <div className="grid gap-6">
              {[
                { icon: UserCheck, text: "Atendimento direto comigo" },
                { icon: Sparkles, text: "Planejamento personalizado" },
                { icon: Heart, text: "Resultados naturais" },
                { icon: ShieldCheck, text: "Transparência total" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full border border-warm-gold-light flex items-center justify-center text-warm-gold group-hover:bg-warm-gold group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium tracking-wide text-warm-ink/80">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <div className="absolute -inset-6 border border-warm-gold-light rounded-t-[200px] -z-10 translate-x-4 translate-y-4" />
            <img 
              src="https://i.imgur.com/3FzFBOw.png" 
              alt="Natali Cunha" 
              className="rounded-t-[200px] shadow-2xl w-full object-cover aspect-[4/5]"
            />
          </motion.div>
        </div>
      </section>

      {/* RESULTS SECTION - REFINED */}
      <section className="py-32 bg-white/50 px-6 border-y border-warm-ink/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <p className="text-warm-gold font-serif italic text-lg">Galeria de Casos</p>
            <h2 className="text-4xl md:text-5xl font-serif">Resultados Reais</h2>
          </div>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {resultsImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="break-inside-avoid group relative overflow-hidden rounded-lg"
              >
                <img 
                  src={src} 
                  alt={`Resultado ${i + 1}`}
                  className="w-full cursor-zoom-in transition-transform duration-500 group-hover:scale-105"
                  onClick={() => setSelectedImage(src)}
                />
                <div className="absolute inset-0 bg-warm-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <Sparkles className="text-white w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center mt-16 text-[10px] uppercase tracking-[0.2em] text-warm-ink/40">
            Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* WHY SECTION - ORGANIC CARDS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-20 font-serif">Por que minhas pacientes confiam em mim</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              "Naturalidade acima de tudo",
              "Nada de exageros",
              "Avaliação honesta",
              "Acompanhamento próximo",
              "Ambiente premium"
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-b-2 border-warm-gold-light p-10 text-center hover:border-warm-gold transition-colors shadow-sm"
              >
                <div className="w-10 h-10 border border-warm-gold-light rounded-full flex items-center justify-center mx-auto mb-8 text-warm-gold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-widest font-bold text-warm-ink/80 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - REFINED */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-warm-ink rounded-sm p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-warm-gold/10 blur-[120px] rounded-full" />
          
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Você não precisa decidir agora</h2>
            <p className="text-xl text-white/60 font-light max-w-xl mx-auto italic font-serif">Me chama no WhatsApp e eu te explico tudo</p>
            <a 
              href={WHATSAPP_LINK} 
              className="inline-flex items-center gap-4 bg-white text-warm-ink px-12 py-6 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-warm-gold-light transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Falar comigo no WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* STEPS SECTION - MINIMAL */}
      <section className="py-32 px-6 bg-white/30 border-y border-warm-ink/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-20 font-serif">Como funciona</h2>
          
          <div className="grid gap-8">
            {[
              { step: "01", title: "Você me chama no WhatsApp", desc: "Tiramos suas dúvidas iniciais de forma rápida." },
              { step: "02", title: "Agendamos seu horário", desc: "Escolhemos o melhor momento para sua visita." },
              { step: "03", title: "Faço sua avaliação gratuita", desc: "Analisamos seu rosto e traçamos o plano ideal." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-10 group"
              >
                <span className="text-5xl md:text-7xl font-serif text-warm-gold-light group-hover:text-warm-gold transition-colors duration-500">
                  {item.step}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif">{item.title}</h3>
                  <p className="text-sm text-warm-ink/50 font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER - MINIMALIST */}
      <footer className="py-20 px-6 md:px-16 border-t border-warm-ink/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl font-serif uppercase tracking-widest">Natali Cunha</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">© 2024 Natali Cunha — Estética Avançada</p>
          </div>
          
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
            <a href="https://www.instagram.com/dranatalicunha/" target="_blank" rel="noopener noreferrer" className="hover:text-warm-gold transition-colors">Instagram</a>
            <a href={WHATSAPP_LINK} className="hover:text-warm-gold transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT - REFINED */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        href={WHATSAPP_LINK}
        className="fixed bottom-10 right-10 z-50 bg-warm-ink text-white p-5 rounded-full shadow-2xl hover:bg-warm-gold transition-colors group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-6 bg-warm-ink text-white px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Falar com Natali
        </span>
      </motion.a>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-warm-bg/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-warm-ink hover:text-warm-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={selectedImage}
              alt="Ampliado"
              className="max-w-full max-h-full rounded-sm shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
