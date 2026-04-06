/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu as MenuIcon, 
  X, 
  ShoppingBag,
  Heart,
  IceCream,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menú', href: '#menu' },
    { name: 'Personaliza', href: '#customize' },
    { name: 'Promos', href: '#promos' },
    { name: 'Ubicación', href: '#location' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-greek-blue rounded-full flex items-center justify-center">
            <IceCream className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold text-greek-blue tracking-tight">MERAKI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-medium text-slate-700 hover:text-greek-blue transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-greek-blue text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all">
            Pide Ahora
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-greek-blue" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-medium text-slate-700 hover:bg-greek-light rounded-xl"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-greek-blue text-white py-4 rounded-xl font-bold mt-4">
                Pide Ahora
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-greek-light/30 -skew-x-12 translate-x-20 z-0" />
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-meraki-pink/20 rounded-full blur-3xl" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-meraki-mint text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Sparkles size={16} />
            <span>El Yogurt Griego más cremoso de Chihuahua</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-tight mb-6">
            Tu momento <span className="text-greek-blue">Meraki</span>, <br />
            hecho a tu medida.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Descubre el equilibrio perfecto entre lo saludable y lo irresistible. Yogurt griego real, toppings frescos y una experiencia que te hará sonreír.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex items-center justify-center gap-2">
              Visítanos hoy <ArrowRight size={20} />
            </button>
            <button className="btn-secondary">
              Ver Menú
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?u=${i}`} 
                  alt="User" 
                  className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-medium text-slate-500">+500 clientes felices cada semana</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800" 
              alt="Delicious Frozen Yogurt" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 glass-card p-4 rounded-2xl z-20 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-meraki-pink rounded-full flex items-center justify-center">
                <Heart className="text-pink-600" fill="currentColor" />
              </div>
              <div>
                <p className="font-bold text-sm">100% Natural</p>
                <p className="text-xs text-slate-500">Sin conservadores</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -left-10 glass-card p-4 rounded-2xl z-20 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-meraki-mint rounded-full flex items-center justify-center">
                <Sparkles className="text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-sm">+30 Toppings</p>
                <p className="text-xs text-slate-500">Fruta fresca diaria</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Elige tu Base",
      desc: "Yogurt griego natural, taro, o nuestra base de temporada.",
      icon: <IceCream className="w-8 h-8 text-greek-blue" />,
      color: "bg-greek-light"
    },
    {
      title: "Agrega Toppings",
      desc: "Fruta fresca, semillas, chocolates o nuestros jarabes artesanales.",
      icon: <Sparkles className="w-8 h-8 text-pink-600" />,
      color: "bg-meraki-pink/30"
    },
    {
      title: "Disfruta el Momento",
      desc: "La combinación perfecta de sabor y frescura en cada bocado.",
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      color: "bg-meraki-mint"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Crea tu Obra Maestra</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">En Meraki, tú eres el chef. Sigue estos tres simples pasos para el postre perfecto.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="text-center p-8 rounded-3xl hover:shadow-xl transition-all border border-slate-50"
            >
              <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const categories = ['Favoritos', 'Bases', 'Toppings', 'Smoothies'];
  const [activeTab, setActiveTab] = useState('Favoritos');

  const items = [
    { name: 'Meraki Clásico', price: '$85', desc: 'Yogurt natural con fresas, granola y miel.', tags: ['Popular'], img: 'https://images.unsplash.com/photo-1505394033343-43396b278d1e?auto=format&fit=crop&q=80&w=400' },
    { name: 'Tropical Bliss', price: '$95', desc: 'Base de coco con mango, kiwi y coco rallado.', tags: ['Fresco'], img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400' },
    { name: 'Choco-Nut', price: '$90', desc: 'Yogurt con trozos de chocolate, nuez y Nutella.', tags: ['Indulgente'], img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=400' },
    { name: 'Berry Wild', price: '$88', desc: 'Mezcla de frutos rojos con base de taro.', tags: ['Antioxidante'], img: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section id="menu" className="py-24 bg-meraki-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Nuestro Menú</h2>
            <p className="text-slate-500">Seleccionamos los mejores ingredientes para ti.</p>
          </div>
          <div className="flex bg-white p-1.5 rounded-full shadow-sm border border-slate-100 overflow-x-auto max-w-full">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeTab === cat ? 'bg-greek-blue text-white shadow-md' : 'text-slate-500 hover:text-greek-blue'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-sm text-greek-blue text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">{item.name}</h3>
                  <span className="text-greek-blue font-bold">{item.price}</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{item.desc}</p>
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-greek-light text-greek-blue font-bold hover:bg-greek-blue hover:text-white hover:border-greek-blue transition-all">
                  <ShoppingBag size={18} /> Ordenar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Customizer = () => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({ base: '', toppings: [] as string[] });

  const bases = ['Natural', 'Taro', 'Coco', 'Mango'];
  const toppings = ['Fresa', 'Kiwi', 'Granola', 'Nuez', 'Chocolate', 'Miel'];

  return (
    <section id="customize" className="py-24 bg-greek-blue overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Arma tu Yogurt Ideal</h2>
          <p className="text-blue-100">Experimenta con sabores y texturas únicas.</p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl">
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= i ? 'bg-greek-blue text-white' : 'bg-slate-100 text-slate-400'}`}
              >
                {i}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">Paso 1: Elige tu base</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {bases.map(b => (
                    <button 
                      key={b}
                      onClick={() => setSelection({...selection, base: b})}
                      className={`p-6 rounded-2xl border-2 transition-all font-bold ${selection.base === b ? 'border-greek-blue bg-greek-light text-greek-blue' : 'border-slate-100 hover:border-greek-blue/30'}`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">Paso 2: Agrega toppings</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {toppings.map(t => (
                    <button 
                      key={t}
                      onClick={() => {
                        const newToppings = selection.toppings.includes(t) 
                          ? selection.toppings.filter(item => item !== t)
                          : [...selection.toppings, t];
                        setSelection({...selection, toppings: newToppings});
                      }}
                      className={`p-4 rounded-2xl border-2 transition-all font-bold ${selection.toppings.includes(t) ? 'border-pink-400 bg-meraki-pink/20 text-pink-600' : 'border-slate-100 hover:border-pink-200'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-meraki-mint rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-emerald-600 w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">¡Listo para disfrutar!</h3>
                <div className="bg-slate-50 p-6 rounded-2xl mb-8 inline-block text-left">
                  <p className="text-slate-500 text-sm uppercase font-black tracking-widest mb-2">Tu Selección:</p>
                  <p className="font-bold text-lg">Base: <span className="text-greek-blue">{selection.base || 'No seleccionada'}</span></p>
                  <p className="font-bold text-lg">Toppings: <span className="text-pink-600">{selection.toppings.join(', ') || 'Ninguno'}</span></p>
                </div>
                <p className="text-slate-500 mb-8">Muestra esta pantalla en caja para obtener un 10% de descuento en tu creación.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-12 flex justify-between">
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)}
                className="text-slate-500 font-bold hover:text-greek-blue transition-colors"
              >
                Anterior
              </button>
            )}
            <div className="flex-1" />
            {step < 3 ? (
              <button 
                onClick={() => setStep(step + 1)}
                disabled={step === 1 && !selection.base}
                className="bg-greek-blue text-white px-10 py-4 rounded-full font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Siguiente
              </button>
            ) : (
              <button 
                onClick={() => {setStep(1); setSelection({base: '', toppings: []})}}
                className="bg-greek-blue text-white px-10 py-4 rounded-full font-bold shadow-lg"
              >
                Reiniciar
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Visítanos en Chihuahua</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-greek-light rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-greek-blue w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Ubicación</h4>
                  <p className="text-slate-600">Av. de la Juventud 123, Distrito Uno,<br />Chihuahua, Chih. CP 31110</p>
                  <a href="https://maps.google.com" target="_blank" className="text-greek-blue font-bold text-sm mt-2 inline-block hover:underline">Ver en Google Maps</a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-meraki-mint rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="text-emerald-600 w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Horarios</h4>
                  <p className="text-slate-600">Lunes a Sábado: 11:00 AM - 10:00 PM</p>
                  <p className="text-slate-600">Domingo: 12:00 PM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-meraki-pink/30 rounded-2xl flex items-center justify-center shrink-0">
                  <MessageCircle className="text-pink-600 w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Contacto</h4>
                  <p className="text-slate-600">WhatsApp: (614) 123-4567</p>
                  <p className="text-slate-600">Email: hola@merakiyogurt.mx</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-greek-blue hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-greek-blue hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden shadow-inner border-8 border-white">
            {/* Placeholder for Google Maps iframe */}
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-8 text-center">
              <MapPin size={48} className="mb-4 opacity-20" />
              <p className="font-medium">Mapa Interactivo de Meraki</p>
              <p className="text-sm mt-2">Cargando ubicación en Distrito Uno...</p>
              <div className="mt-6 w-full h-full bg-slate-200 rounded-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-greek-blue rounded-full flex items-center justify-center">
                <IceCream className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-tight">MERAKI</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Meraki es una palabra griega que significa hacer algo con alma, creatividad y amor. Eso es exactamente lo que ponemos en cada yogurt que servimos.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Menú</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personaliza</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Promociones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Recibe promociones exclusivas y lanzamientos.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-slate-800 border-none rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-greek-blue outline-none"
              />
              <button className="bg-greek-blue p-3 rounded-xl hover:bg-blue-600 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 Meraki Greek Frozen Yogurt. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300">Privacidad</a>
            <a href="#" className="hover:text-slate-300">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/526141234567" 
    target="_blank" 
    className="fixed bottom-8 right-8 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-all group"
  >
    <MessageCircle size={32} />
    <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      ¿Tienes dudas? ¡Chatea con nosotros!
    </span>
  </a>
);

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <MenuSection />
        <Customizer />
        
        {/* Social Proof / Reviews Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-4">Lo que dicen nuestros fans</h2>
              <div className="flex justify-center text-yellow-400 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <p className="text-slate-500">4.9/5 basado en más de 1,000 reseñas en Google</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sofía García", comment: "El mejor yogurt de Chihuahua. La textura es súper cremosa y los toppings siempre están frescos. ¡Me encanta el de Taro!", rating: 5 },
                { name: "Ricardo Mendoza", comment: "Excelente lugar para ir con la familia. El servicio es rápido y el local está muy limpio e instagrameable.", rating: 5 },
                { name: "Valeria Ortiz", comment: "Me encanta que puedo armar mi yogurt exactamente como quiero. Los jarabes artesanales son de otro mundo.", rating: 5 }
              ].map((review, idx) => (
                <div key={idx} className="bg-meraki-cream p-8 rounded-[2rem] border border-meraki-cream shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={`https://i.pravatar.cc/100?u=${idx+10}`} alt={review.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <div className="flex text-yellow-400">
                        {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promo Banner */}
        <section id="promos" className="py-12 bg-meraki-pink/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-greek-blue to-blue-600 rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Oferta Limitada</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">¡2x1 en todos los <br />vasos medianos!</h2>
                <p className="text-blue-100 text-lg">Válido todos los martes de Abril. Presenta tu código en caja.</p>
              </div>
              <div className="relative z-10 text-center">
                <div className="bg-white text-greek-blue px-8 py-6 rounded-3xl mb-4">
                  <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-60">Tu Código:</p>
                  <p className="text-4xl font-display font-black tracking-tighter">MERAKI2X1</p>
                </div>
                <p className="text-xs text-blue-200">Toca para copiar código</p>
              </div>
            </motion.div>
          </div>
        </section>

        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
